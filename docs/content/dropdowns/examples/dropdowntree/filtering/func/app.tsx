import * as React from 'react';

import {
    DropDownTree,
    DropDownTreeChangeEvent,
    DropDownTreeExpandEvent,
    DropDownTreeFilterChangeEvent
} from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';
import { FilterDescriptor } from '@progress/kendo-data-query';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
    const [filter, setFilter] = React.useState<FilterDescriptor>({ value: '', operator: 'contains' });

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(
        () => processTreeData(data, { expanded, value, filter }, fields),
        [expanded, value, filter]
    );

    const onFilterChange = (event: DropDownTreeFilterChangeEvent) => setFilter(event.filter);

    return (
        <div>
            <div>Categories:</div>
            <DropDownTree
                style={{ width: '300px' }}
                placeholder="Please select ..."
                data={treeData}
                value={value}
                onChange={onChange}
                textField={textField}
                dataItemKey={dataItemKey}
                selectField={selectField}
                expandField={expandField}
                onExpandChange={onExpandChange}
                filterable={true}
                onFilterChange={onFilterChange}
                filter={filter.value}
            />
        </div>
    );
};

export default App;
