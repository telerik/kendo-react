import * as React from 'react';
import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import './custom-multicolumn.css';
import employees from './data';
const App = () => {
    const columns = [
        {
            field: 'id',
            header: 'ID',
            width: '90px'
        },
        {
            field: 'name',
            header: 'Name',
            width: '150px'
        },
        {
            field: 'position',
            header: 'Position',
            width: '480px'
        }
    ];

    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [groupedData] = React.useState(
        (groupBy(employeesWithUngrouped, [{ field: 'position' }]) as any[]).reduce(
            (res, group) => [...res, ...group.items],
            []
        )
    );

    const groupHeaderItemRender = (li, itemProps) => {
        const itemHeader = (
            <span
                className={'k-table-th'}
                style={{
                    color: '#00F',
                    fontWeight: 800
                }}
            >
                {li.props.children}
            </span>
        );
        return React.cloneElement(li, li.props, itemHeader);
    };
    const itemRender = (li, itemProps) => {
        const groupItems = li.props.children.map((item1) => item1);
        const item = (
            <div>
                <span
                    className="k-table-td"
                    style={{
                        color: 'green',
                        width: '90px'
                    }}
                >
                    {groupItems[0]}
                </span>
                <span
                    className="k-table-td"
                    style={{
                        color: 'orange',
                        fontWeight: 'bold',
                        fontSize: '10pt',
                        width: '150px',
                        borderColor: 'red'
                    }}
                >
                    {groupItems[1]}
                </span>
                <span
                    className="k-table-td"
                    style={{
                        color: 'blue',
                        fontWeight: '100',
                        width: '482px',
                        borderColor: 'red'
                    }}
                >
                    {groupItems[2]}
                </span>
            </div>
        );
        return React.cloneElement(li, li.props, item);
    };
    const stickyHeaderRender = (th, itemProps) => {
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
                {th.props.children}
            </span>
        );
        return React.cloneElement(th, th.props, item);
    };
    return (
        <div>
            <MultiColumnComboBox
                columns={columns}
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
