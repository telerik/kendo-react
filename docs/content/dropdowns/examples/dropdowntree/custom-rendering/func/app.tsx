import * as React from 'react';

import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { Item, ValueHolder } from './custom-rendering';
import { data } from './data';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([1, 2, 6, 9]);

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(() => processTreeData(data, { expanded, value }, fields), [expanded, value]);

    return (
        <div>
            <div>Select item:</div>
            <DropDownTree
                style={{ width: 220 }}
                data={treeData}
                value={value}
                onChange={onChange}
                placeholder="Please select ..."
                textField={textField}
                dataItemKey={dataItemKey}
                selectField={selectField}
                subItemsField={subItemsField}
                expandField={expandField}
                onExpandChange={onExpandChange}
                item={Item}
                valueHolder={ValueHolder}
            />
        </div>
    );
};

export default App;
