import * as React from 'react';

import {
    DropDownTree,
    DropDownTreeProps,
    DropDownTreeChangeEvent,
    DropDownTreeExpandEvent
} from '@progress/kendo-react-dropdowns';
import { StyleConfigurator } from './shared-dd-style-configurator';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [size, setSize] = React.useState<DropDownTreeProps['size']>('medium');
    const [fillMode, setFillMode] = React.useState<DropDownTreeProps['fillMode']>('solid');
    const [rounded, setRounded] = React.useState<DropDownTreeProps['rounded']>('medium');

    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(() => processTreeData(data, { expanded, value }, fields), [expanded, value]);

    return (
        <div>
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            />
            <div className="example-config" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <DropDownTree
                    style={{ width: '300px' }}
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
                    data={treeData}
                    value={value}
                    onChange={onChange}
                    placeholder="Select ..."
                    textField={textField}
                    dataItemKey={dataItemKey}
                    selectField={selectField}
                    expandField={expandField}
                    onExpandChange={onExpandChange}
                />
            </div>
        </div>
    );
};

export default App;
