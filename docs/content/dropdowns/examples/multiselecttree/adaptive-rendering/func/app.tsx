import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    MultiSelectTreeFilterChangeEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { FilterDescriptor } from '@progress/kendo-data-query';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = { dataItemKey, checkField, checkIndeterminateField, expandField, subItemsField };

const data = [
    {
        text: 'Furniture',
        id: 1,
        [subItemsField]: [
            { text: 'Tables & Chairs', id: 2 },
            { text: 'Sofas', id: 3 },
            { text: 'Occasional Furniture', id: 4 }
        ]
    },
    {
        text: 'Decor',
        id: 5,
        [subItemsField]: [
            { text: 'Bed Linen', id: 6 },
            { text: 'Curtains & Blinds', id: 7 },
            {
                text: 'Carpets',
                id: 8,
                [subItemsField]: [
                    { text: 'Bed Linen1', id: 61 },
                    { text: 'Curtains & Blinds1', id: 71 },
                    { text: 'Carpets1', id: 81 }
                ]
            }
        ]
    }
];

const App = () => {
    const [value, setValue] = React.useState<any[]>([]);
    const [currentSelected, setCurrentSelected] = React.useState<any[]>([]);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
    const [filter, setFilter] = React.useState<FilterDescriptor | null>(null);

    const handleOpen = () => {
        setCurrentSelected(value);
    };

    const onChange = (event: MultiSelectTreeChangeEvent) => {
        setValue(getMultiSelectTreeValue(data, { ...fields, ...event, value }));
    };

    const onExpandChange = React.useCallback(
        (event: MultiSelectTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const handleClose = () => {
        setCurrentSelected([]);
    };

    const handleCancel = () => {
        setValue(currentSelected);
        setFilter(null);
    };

    const treeData = React.useMemo(
        () => processMultiSelectTreeData(data, { expanded, value, filter, ...fields }),
        [expanded, value, filter]
    );

    const onFilterChange = (event: MultiSelectTreeFilterChangeEvent) => setFilter(event.filter);

    return (
        <div className="app-wrapper">
            <MultiSelectTree
                data={treeData}
                value={value}
                textField={textField}
                dataItemKey={dataItemKey}
                checkField={checkField}
                checkIndeterminateField={checkIndeterminateField}
                expandField={expandField}
                subItemsField={subItemsField}
                filterable={true}
                label="Categories"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: '300px' }}
                onChange={onChange}
                onOpen={handleOpen}
                onClose={handleClose}
                onCancel={handleCancel}
                onExpandChange={onExpandChange}
                onFilterChange={onFilterChange}
            />
        </div>
    );
};

export default App;
