import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ColumnMenu } from './columnMenu';
import { GridColumnMenuCheckboxFilter } from '@progress/kendo-react-grid';
import { Popup } from '@progress/kendo-react-popup';
import products from './products.json';


const CheckboxListMenu = (props) => {
  const anchor = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [currentFilter, setCurrentFilter] = React.useState();
  React.useEffect(() => {
    setShow(true);
  }, []);
  const onClick = () => {
    setShow(!show);
  };
  const onCloseMenu = () => {
    setShow(false);
  };

  const onFilterChange = (ev) => {
    setCurrentFilter(ev);
    props.onFilterChange(ev);
  };
  return (
    <div>
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
        onClick={onClick}
        ref={anchor}
      >
        {'Filter'}
      </button>
      <Popup
        anchor={anchor.current}
        show={show}
        popupClass={'popup-content'}
        style={{ width: '300px' }}
      >
        <GridColumnMenuCheckboxFilter
          {...props}
          onCloseMenu={onCloseMenu}
          onFilterChange={onFilterChange}
          filter={currentFilter}
          expanded={true}
        />
      </Popup>
    </div>
  );
};

const App = () => {
  const onFilterChange = (filter) => {
    console.log(filter);
  };
  return (
    <div>
      <div>
        {
          <CheckboxListMenu
            column={{ field: 'UnitPrice' }}
            data={products}
            onFilterChange={onFilterChange}
          />
        }
      </div>
    </div>
  );
};

export default App; 