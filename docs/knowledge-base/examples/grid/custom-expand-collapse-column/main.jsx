import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';
import { IconWrap } from '@progress/kendo-react-common';
import { minusIcon, plusIcon } from '@progress/kendo-svg-icons';
const DetailComponent = (props) => {
  const dataItem = props.dataItem;
  return (
    <p>
      <strong>In Stock:</strong> {dataItem.UnitsInStock} units
    </p>
  );
};

const expandCell = (props) => {
  console.log(props);
  return (
    <td {...props.tdProps}>
      <a
        onClick={(e) => {
          e.preventDefault();
          if (props.onChange) {
            props.onChange({
              dataItem: props.dataItem,
              dataIndex: props.dataIndex,
              syntheticEvent: e,
              field: 'expanded_custom',
              value: !props.dataItem['expanded'],
            });
          }
        }}
        href="#"
        tabIndex={-1}
      >
        <IconWrap
          name={props.dataItem['expanded'] ? 'minus' : 'plus'}
          icon={props.dataItem['expanded'] ? minusIcon : plusIcon}
        />
      </a>
    </td>
  );
};
const App = () => {
  const [data, setData] = React.useState(products);
  const onItemChange = (event) => {
    //This is for the expand only
    if (event.field == 'expanded_custom') {
      let newData = data.map((item) => {
        if (item.ProductID === event.dataItem.ProductID) {
          item.expanded = !event.dataItem.expanded;
        }

        return item;
      });
      setData(newData);
    }

    //Add standard onItemChange here
  };
  return (
    <Grid
      data={data}
      detail={DetailComponent}
      style={{
        height: '400px',
      }}
      expandField="expanded"
      onItemChange={onItemChange}
    >
      <Column
        field="expanded"
        title=" "
        width="50px"
        cells={{ data: expandCell }}
        editable={false}
      />
      <Column field="ProductName" title="Product" width="300px" />
      <Column field="ProductID" title="ID" width="50px" />
      <Column field="UnitPrice" title="Unit Price" width="100px" />
      <Column field="QuantityPerUnit" title="Qty Per Unit" />
    </Grid>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
