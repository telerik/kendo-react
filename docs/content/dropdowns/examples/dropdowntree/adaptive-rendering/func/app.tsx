import * as React from 'react';

import { DropDownTree } from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = {
    selectField,
    expandField,
    dataItemKey,
    subItemsField
};

const App = () => {
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
    const [filter, setFilter] = React.useState({
        value: '',
        operator: 'contains'
    });

    const onChange = (event) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );
    const treeData = React.useMemo(
        () =>
            processTreeData(
                data,
                {
                    expanded,
                    value,
                    filter
                },
                fields
            ),
        [expanded, value, filter]
    );
    const onFilterChange = (event) => setFilter(event.filter);

    return (
        <div className="app-wrapper">
            <DropDownTree
                data={treeData}
                dataItemKey={dataItemKey}
                value={value}
                textField={textField}
                selectField={selectField}
                expandField={expandField}
                filter={filter.value}
                filterable={true}
                label="Categories"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: 300 }}
                onChange={onChange}
                onExpandChange={onExpandChange}
                onFilterChange={onFilterChange}
            />
        </div>
    );
};

export default App;
