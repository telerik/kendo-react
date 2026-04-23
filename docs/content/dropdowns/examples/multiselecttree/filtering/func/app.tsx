import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue,
    MultiSelectTreeFilterChangeEvent
} from '@progress/kendo-react-dropdowns';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';
import { data } from './shared-dd-tree-data';
import { FilterDescriptor } from '@progress/kendo-data-query';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = { dataItemKey, checkField, checkIndeterminateField, expandField, subItemsField };

const App = () => {
    const [value, setValue] = React.useState<any[]>([]);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
    const [filter, setFilter] = React.useState<FilterDescriptor | null>(null);

    const onChange = (event: MultiSelectTreeChangeEvent) =>
        setValue(getMultiSelectTreeValue(data, { ...fields, ...event, value }));
    const onExpandChange = React.useCallback(
        (event: MultiSelectTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(
        () => processMultiSelectTreeData(data, { expanded, value, filter, ...fields }),
        [expanded, value, filter]
    );

    const onFilterChange = (event: MultiSelectTreeFilterChangeEvent) => setFilter(event.filter);

    return (
        <div>
            <div>Categories:</div>
            <MultiSelectTree
                style={{ width: '300px' }}
                data={treeData}
                value={value}
                onChange={onChange}
                placeholder="Please select ..."
                textField={textField}
                dataItemKey={dataItemKey}
                checkField={checkField}
                checkIndeterminateField={checkIndeterminateField}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                filterable={true}
                onFilterChange={onFilterChange}
            />
        </div>
    );
};

export default App;
