import * as React from 'react';

import { GridColumnMenuCheckboxFilter } from '@progress/kendo-react-grid';
import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-kb-products';

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
            <span ref={anchor}>
                <Button type="button" onClick={onClick}>
                    {'Filter'}
                </Button>
            </span>
            <Popup anchor={anchor.current} show={show} popupClass={'popup-content'} style={{ width: '300px' }}>
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
                {<CheckboxListMenu column={{ field: 'UnitPrice' }} data={products} onFilterChange={onFilterChange} />}
            </div>
        </div>
    );
};

export default App;
