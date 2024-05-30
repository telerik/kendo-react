
import React, { useEffect, useState, useRef } from 'react';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { saveAs } from '@progress/kendo-file-saver';
import { ExcelExport, KendoOoxml } from '@progress/kendo-react-excel-export';

const DetailComponent = (props) => {
  const data = props.dataItem.details;
  if (data) {
    return (
      <Grid data={data}>
        <Column field="ProductID" title="Product ID" width="120px" />
        <Column field="ProductName" title="Product Name" />
      </Grid>
    );
  }
  return (
    <div style={{ height: '50px', width: '100%' }}>
      <div style={{ position: 'absolute', width: '100%' }}>
        <div className="k-loading-image" />
      </div>
    </div>
  );
};

const App = () => {
  const baseUrl = 'https://demos.telerik.com/kendo-ui/service-v4/odata/';
  const init = { method: 'GET', accept: 'application/json', headers: {} };
  const exportRef = useRef();
  const [categories, setCategories] = useState([]);

  const expandChange = (event) => {
    event.dataItem.expanded = event.value;
    let categoryID = event.dataItem.CategoryID;
    if (!event.value || event.dataItem.details) {
      return;
    }

    fetch(`${baseUrl}Products?\$filter=CategoryID%20eq%20${categoryID}`, init)
      .then((response) => response.json())
      .then((json) => {
        setCategories((prevState) => {
          const data = [...prevState];
          const index = data.findIndex((d) => d.CategoryID === categoryID);
          data[index].details = json.value;
          return data;
        });
      });
  };
  const exportToExcel = () => {
    let workbook = exportRef.current.workbookOptions();
    let rows = workbook.sheets[0].rows;
    let headerOptions = rows[0].cells[0];
    let data = categories;
    let count = 0;
    let allProducts = [];
    fetch(`${baseUrl}Products`, init)
      .then((response) => response.json())
      .then((json) => {
        allProducts = json.value;
      })
      .then(() => {
        new Promise((resolve, reject) => {
          for (let idx = data.length - 1; idx >= 0; idx--) {
            let products = allProducts.filter(
              (element) => element.CategoryID === data[idx].CategoryID
            );
            for (
              let productIdx = products.length - 1;
              productIdx >= 0;
              productIdx--
            ) {
              const product = products[productIdx];
              rows.splice(idx + 2, 0, {
                cells: [
                  {},
                  { value: product.ProductID },
                  { value: product.ProductName },
                ],
              });
            }
            rows.splice(idx + 2, 0, {
              cells: [
                {},
                Object.assign({}, headerOptions, { value: 'Product ID' }),
                Object.assign({}, headerOptions, { value: 'Product Name' }),
              ],
            });
            count++;
            if (count >= data.length) {
              resolve();
            }
          }
        }).then(() => {
          new KendoOoxml.Workbook(workbook).toDataURL().then((dataUrl) => {
            saveAs(dataUrl, 'Categories.xlsx');
          });
        });
      });
  };

  useEffect(() => {
    fetch(`${baseUrl}Categories`, init)
      .then((response) => response.json())
      .then((json) => {
        setCategories(json.value);
      });
  }, []);

  return (
    <div>
      <ExcelExport data={categories} ref={exportRef}>
        <Grid
          style={{ height: '550px' }}
          data={categories}
          detail={DetailComponent}
          expandField="expanded"
          onExpandChange={expandChange}
        >
          <GridToolbar>
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={exportToExcel}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <Column field="CategoryID" title="ID" width="50px" />
          <Column field="CategoryName" width="200px" title="Category Name" />
          <Column field="Description" />
        </Grid>
      </ExcelExport>
    </div>
  );
}

export default App;
