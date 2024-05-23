import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListView } from '@progress/kendo-react-listview';
import products from './products.json';
import { groupBy } from '@progress/kendo-data-query';

const MyItemRender = (props) => {
  let groupItemItem = props.dataItem;
  let items = groupItemItem.items;
  let groupName = groupItemItem.value;
  return (
    <React.Fragment>
      <div
        className="k-listview-item"
        style={{
          padding: 10,
          borderBottom: '1px solid lightgrey',
          backgroundColor: '#f79256',
          borderRadius: '15px 15px 0px 0px',
          fontWeight: 'bold',
          color: "#fff"
        }}
      >
        {"= " + groupName}
      </div>
      <div
        style={{
          backgroundColor: '#fbd1a2',
          padding: '5px',
          borderRadius: '0px 0px 10px 10px',
          marginBottom: '10px',
        }}
      >
        {items.map((item) => {
          return (
            <div
              className="k-listview-item"
              style={{
                display: 'inline-block',
                width: '150px',
                height: '100px',
                verticalAlign: 'top',
                padding: '10px',
                borderBottom: '1px solid lightgrey',
                backgroundColor: '#9dcfb6',
                color: '#1d3e89',
                margin: '1px',
                borderRadius: '5px',
              }}
            >
              {item.ProductName}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
const App = () => {
  return (
    <div>
      <ListView
        data={groupBy(products, { field: 'Category.CategoryName' })}
        item={MyItemRender}
        style={{
          width: '100%',
        }}
      />
    </div>
  );
};
ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.querySelector('my-app')
);
