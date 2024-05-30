import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

const DetailComponent = (props) => {
  const data = props.dataItem.details;

  if (data) {
    return (
      <Grid data={data}>
        <Column field="ProductID" title="Product ID" width="120px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" format="{0:c}" />
      </Grid>
    );
  }

  return (
    <div
      style={{
        height: '50px',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
        }}
      >
        <div className="k-loading-image" />
      </div>
    </div>
  );
};

const App = () => {
  const baseUrl = 'https://demos.telerik.com/kendo-ui/service-v4/odata/';
  const init = {
    method: 'GET',
    accept: 'application/json',
    headers: {},
  };
  const [categories, setCategories] = React.useState([]);

  const expandChange = (event) => {
    event.dataItem.expanded = event.value;
    let categoryID = event.dataItem.CategoryID;
    setCategories([...categories]);

    if (!event.value || event.dataItem.details) {
      return;
    }

    fetch(baseUrl + `Products?$filter=CategoryID%20eq%20` + categoryID, init)
      .then((response) => response.json())
      .then((json) => {
        let data = categories.slice();
        let index = data.findIndex((d) => d.CategoryID === categoryID);
        data[index].details = json.value;
        setCategories(data);
      });
  };

  React.useEffect(() => {
    fetch(baseUrl + `Categories`, init)
      .then((response) => response.json())
      .then((json) => setCategories(json.value));
  }, []);

  const cellRender = (td, props) => {
    if (props.field == 'expanded' && props.dataItem.CategoryID == 3) {
      return <td></td>;
    }
    return td;
  };
  return (
    <div>
      <Grid
        cellRender={cellRender}
        style={{
          height: '550px',
        }}
        data={categories}
        detail={DetailComponent}
        expandField="expanded"
        onExpandChange={expandChange}
      >
        <Column field="CategoryID" title="ID" width="50px" />
        <Column field="CategoryName" width="200px" title="Category Name" />
        <Column field="Description" />
      </Grid>
    </div>
  );
};

export default App;
