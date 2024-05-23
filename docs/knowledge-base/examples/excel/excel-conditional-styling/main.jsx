import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ExcelExport,
  ExcelExportColumn,
  WorkbookOptions,
} from '@progress/kendo-react-excel-export';

import products from './products.json';

const data = products;
const modifiedData = data.map((item) => ({
  ...item,
}));

const App = () => {
  const _exporter = React.createRef<ExcelExport>();
  const excelExport = () => {
    save(_exporter);
  };
  const save = (component) => {
    const options: WorkbookOptions = component.current.workbookOptions();
    const rows = options.sheets[0].rows;

    const dataMap = new Map(modifiedData.map((item) => [item.ProductID, item]));

    rows.forEach((row) => {
      if (row.type === 'data') {
        const productID = row.cells[0].value;
        const dataItem = dataMap.get(productID);

        if (dataItem && dataItem.is_total) {
          row.cells.forEach((cell) => {
            cell.bold = true;
          });
        }
      }
    });

    component.current.save(options);
  };
  return (
    <div>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={excelExport}
      >
        Export to Excel
      </button>

      <ExcelExport data={modifiedData} fileName="Products.xlsx" ref={_exporter}>
        <ExcelExportColumn field="ProductID" title="Product ID" />
        <ExcelExportColumn field="ProductName" title="Product Name" />
      </ExcelExport>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
