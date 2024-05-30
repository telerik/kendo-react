import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Popover } from '@progress/kendo-react-tooltip';

const GridContext = React.createContext({});

const MyCommandCell = (props) => {
  const { showPopover } = React.useContext(GridContext);
  const { dataItem } = props;
  return (
    <td className="k-command-cell">
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-remove-command"
        onClick={(ev) => showPopover(dataItem, ev.target)}
      >
        Show popover
      </button>
    </td>
  );
};

const PopoverTemplate = (props) => {
  if (props.item) {
    return (
      <div>
        <div>
          Unit Price: <span>{props.item.UnitPrice}</span>
        </div>
        <div>Product name: {props.item.ProductName}</div>
      </div>
    );
  }
  return 'no data';
};

const testData = [
  { ProductName: 'name', ProductID: 1, UnitPrice: 5 },
  { ProductName: 'name2', ProductID: 2, UnitPrice: 19 },
];

const App = () => {
  const [anchor, setAchnor] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [popoverItem, setPopoverItem] = React.useState(null);
  const [data, setData] = React.useState(testData);

  const showPopover = (dataItem, target) => {
    if (show && popoverItem && popoverItem.ProductID == dataItem.ProductID) {
      setShow(false);
      return;
    }
    setPopoverItem(dataItem);
    setTimeout(() => {
      setShow(true);
    });
    setAchnor(target);
  };

  return (
    <div>
      <GridContext.Provider value={{ showPopover }}>
        <Grid
          style={{
            height: '420px',
          }}
          data={data}
        >
          <Column field="ProductID" title="Id" width="50px" editable={false} />
          <Column field="ProductName" title="Product Name" width="200px" />
          <Column cell={MyCommandCell} width="200px" />
        </Grid>
        <Popover show={show} anchor={anchor} position={'bottom'}>
          <PopoverTemplate item={popoverItem} />
        </Popover>
      </GridContext.Provider>
    </div>
  );
};
export default App;
