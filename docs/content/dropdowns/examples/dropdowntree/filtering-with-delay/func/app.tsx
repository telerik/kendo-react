import * as React from 'react';

import {
    DropDownTree,
    DropDownTreeChangeEvent,
    DropDownTreeFilterChangeEvent,
    DropDownTreeExpandEvent
} from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };
const delay = 500;

const App = () => {
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);
    const [filter, setFilter] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const loadingTimeout = React.useRef<any>(false);

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(
        () => processTreeData(data, { expanded, value, filter }, fields),
        [expanded, value, filter]
    );

    const onFilterChange = (event: DropDownTreeFilterChangeEvent) => {
        clearTimeout(loadingTimeout.current);
        loadingTimeout.current = setTimeout(() => {
            setFilter(event.filter.value);
            setLoading(false);
        }, delay);

        setLoading(true);
    };

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
                loading={loading}
                filter={filter}
            />
        </div>
    );
};

export default App;
