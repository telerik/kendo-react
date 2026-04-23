import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';
import { Item, Tag } from './custom-rendering';
import { data } from './data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = { dataItemKey, checkField, checkIndeterminateField, expandField, subItemsField };

const App = () => {
    const [value, setValue] = React.useState<any[]>([]);
    const [expanded, setExpanded] = React.useState([1, 2, 6, 9]);

    const onChange = (event: MultiSelectTreeChangeEvent) =>
        setValue(getMultiSelectTreeValue(data, { ...fields, ...event, value }));
    const onExpandChange = React.useCallback(
        (event: MultiSelectTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(
        () => processMultiSelectTreeData(data, { expanded, value, ...fields }),
        [expanded, value]
    );

    return (
        <div>
            <div>Categories:</div>
            <MultiSelectTree
                style={{ width: 300 }}
                data={treeData}
                value={value}
                onChange={onChange}
                placeholder="Please select ..."
                textField={textField}
                dataItemKey={dataItemKey}
                checkField={checkField}
                checkIndeterminateField={checkIndeterminateField}
                subItemsField={subItemsField}
                expandField={expandField}
                onExpandChange={onExpandChange}
                item={Item}
                tag={Tag}
            />
        </div>
    );
};

export default App;
