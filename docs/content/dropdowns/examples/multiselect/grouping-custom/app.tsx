import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
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
                    margin: 'auto'
                }}
            >
                {li.props.children}
            </b>
        );
        return React.cloneElement(li, li.props, itemHeader);
    };

    const stickyHeaderRender = (div) => {
        const item = (
            <span
                style={{
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
            <MultiSelect
                data={groupedData}
                textField="name"
                groupField="position"
                style={{
                    width: '300px'
                }}
                placeholder="Please select employees..."
                groupHeaderItemRender={groupHeaderItemRender}
                groupStickyHeaderItemRender={stickyHeaderRender}
            />
        </div>
    );
};

export default App;
