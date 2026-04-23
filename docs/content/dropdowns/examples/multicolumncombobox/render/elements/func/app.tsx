import * as React from 'react';

import { ListItemProps, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    const [checked, setChecked] = React.useState<Object>({});

    const handleCheckboxChange = (event: CheckboxChangeEvent, dataItem) => {
        setChecked({ ...checked, [dataItem.id]: event.value });
    };

    const itemRender = (
        li: React.ReactElement<HTMLLIElement, string | React.JSXElementConstructor<any>>,
        props: ListItemProps
    ) => {
        const children = columns.map((col, i) => {
            return col.field === 'id' ? (
                <span className="k-table-td" style={{ width: col.width }} key={col.width + i}>
                    <Checkbox
                        value={Boolean(checked[props.dataItem.id])}
                        onChange={(e) => handleCheckboxChange(e, props.dataItem)}
                    />
                </span>
            ) : (
                <span className="k-table-td" style={{ width: col.width }} key={col.width + i}>
                    {props.dataItem[col.field]}
                </span>
            );
        });

        return React.cloneElement(li, { ...li.props }, children);
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
