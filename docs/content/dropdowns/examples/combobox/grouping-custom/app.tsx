import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';

import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [groupedData] = React.useState(
        (groupBy(employeesWithUngrouped, [{ field: 'position' }]) as any[]).reduce(
            (res, group) => [...res, ...group.items],
            []
        )
    );

    const groupHeaderItemRender = (li) => {
        const itemHeader = (
            <b
                style={{
                    color: '#00F'
                }}
            >
                {li.props.children}
            </b>
        );
        return React.cloneElement(li, li.props, itemHeader);
    };

    const itemRender = (li, itemProps) => {
        const item = (
            <i
                style={{
                    color: 'green'
                }}
            >
                {li.props.children} {itemProps.index}
            </i>
        );
        return React.cloneElement(li, li.props, item);
    };

    const stickyHeaderRender = (div) => {
        const item = (
            <span
                style={{
                    color: 'orange',
                    fontWeight: 900,
                    width: '100%',
                    fontSize: '1.5em',
                    textAlign: 'center'
                }}
            >
                {div.props.children}
            </span>
        );
        return React.cloneElement(div, div.props, item);
    };

    return (
        <div>
            <ComboBox
                data={groupedData}
                textField="name"
                groupField="position"
                placeholder="Please select ..."
                style={{
                    width: '300px'
                }}
                groupHeaderItemRender={groupHeaderItemRender}
                groupStickyHeaderItemRender={stickyHeaderRender}
                itemRender={itemRender}
            />
        </div>
    );
};

export default App;
