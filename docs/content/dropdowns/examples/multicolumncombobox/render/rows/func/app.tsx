import * as React from 'react';

import { ListItemProps, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    const itemRender = (
        li: React.ReactElement<HTMLLIElement, string | React.JSXElementConstructor<any>>,
        itemProps: ListItemProps
    ) => {
        const children = columns.map((col, i) => {
            return (
                <span className="k-table-td" style={{ width: col.width }} key={col.width + i}>
                    {itemProps.dataItem[col.field]}
                </span>
            );
        });

        const { style = {} }: any = li.props;
        style.backgroundColor = itemProps.index % 2 ? 'aliceblue' : 'antiquewhite';

        return React.cloneElement(li, { ...li.props, style }, children);
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                data={employees}
                columns={columns}
                textField={'name'}
                itemRender={itemRender}
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
