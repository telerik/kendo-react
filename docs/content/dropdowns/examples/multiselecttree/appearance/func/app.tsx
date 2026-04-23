import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeProps,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { StyleConfigurator } from './shared-dd-style-configurator';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';
import { data } from './shared-dd-tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = { dataItemKey, checkField, checkIndeterminateField, expandField, subItemsField };

const App = () => {
    const [size, setSize] = React.useState<MultiSelectTreeProps['size']>('medium');
    const [fillMode, setFillMode] = React.useState<MultiSelectTreeProps['fillMode']>('solid');
    const [rounded, setRounded] = React.useState<MultiSelectTreeProps['rounded']>('medium');

    const [value, setValue] = React.useState<any[]>([]);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

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
            <StyleConfigurator
                size={size}
                onSizeChange={setSize}
                fillMode={fillMode}
                onFillModeChange={setFillMode}
                rounded={rounded}
                onRoundedChange={setRounded}
            />
            <div className="example-config" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MultiSelectTree
                    style={{ width: '300px' }}
                    label={'Categories:'}
                    size={size}
                    fillMode={fillMode}
                    rounded={rounded}
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
                />
            </div>
        </div>
    );
};

export default App;
