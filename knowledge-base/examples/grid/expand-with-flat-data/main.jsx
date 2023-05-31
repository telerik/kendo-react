import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
const testData = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    Discontinued: false,
    ParentID: 0,
    Category: {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Soft drinks, coffees, teas, beers, and ales',
    },
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    Discontinued: false,
    ParentID: 1,
    Category: {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Soft drinks, coffees, teas, beers, and ales',
    },
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    Discontinued: false,
    ParentID: 1,
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
    },
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    Discontinued: false,
    ParentID: 0,
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
    },
  },
  {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    Discontinued: true,
    ParentID: 4,
    Category: {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
    },
  },
];

const MyGridContext = React.createContext({});
const ExpandCell = (props) => {
  const { data, setDate } = React.useContext(MyGridContext);

  const handleExpandClick = (ev) => {
    let expanded = !props.dataItem.expanded;
    const newData = data.map((item) => ({
      ...item,
      expanded:
        item.ProductID === props.dataItem.ProductID ||
        item.ParentID === props.dataItem.ProductID
          ? expanded
          : item.expanded,
    }));
    setDate(newData);
  };

  return (
    <td>
      {props.dataItem.ParentID == 0 ? (
        <span
          onClick={handleExpandClick}
          className={
            'k-icon ' +
            (props.dataItem.expanded ? 'k-i-minus-sm' : 'k-i-plus-sm')
          }
        ></span>
      ) : (
        <></>
      )}
    </td>
  );
};

const addExpandedToData = (data) => {
  const newData = data.map((item) => {
    item.expanded = false;
    return item;
  });
  return newData;
};

//Handle child rows visibility
const rowRender = (tr, props) => {
  const trProps = {
    ...tr.props,
  };
  if (props.dataItem.ParentID == 0 || props.dataItem.expanded) {
    return React.cloneElement(tr, { ...trProps }, tr.props.children);
  } else {
    return <></>;
  }
};
const App = () => {
  const [data, setDate] = React.useState(addExpandedToData(testData));

  return (
    <MyGridContext.Provider value={{ data, setDate }}>
      <Grid
        rowRender={rowRender}
        style={{
          height: '400px',
        }}
        data={data}
      >
        <GridColumn field="expanded" title=" " width="50px" cell={ExpandCell} />
        <GridColumn field="ProductID" title="ID" width="40px" />
        <GridColumn field="ProductName" title="Name" width="250px" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn field="Discontinued" title="Discontinued" />
      </Grid>
    </MyGridContext.Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
