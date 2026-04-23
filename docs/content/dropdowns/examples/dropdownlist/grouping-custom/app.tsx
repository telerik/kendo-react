import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';

import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [opened, setOpened] = React.useState(true);
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
            <DropDownList
                data={groupedData}
                textField="name"
                groupField="position"
                label="Select employee"
                style={{
                    width: '300px'
                }}
                opened={opened}
                onOpen={() => setOpened(true)}
                onClose={() => setOpened(false)}
                groupHeaderItemRender={groupHeaderItemRender}
                groupStickyHeaderItemRender={stickyHeaderRender}
            />
        </div>
    );
};

export default App;
