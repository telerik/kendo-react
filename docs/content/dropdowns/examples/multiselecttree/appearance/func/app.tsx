import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { useConfigurator, sizeOptions, roundedOptions, fillModeOptions } from '@docs-shared/configurator';
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
    const config = useConfigurator({
        sections: [
            {
                label: 'Size',
                controls: [
                    {
                        type: 'segmented',
                        name: 'size',
                        options: sizeOptions(['default', 'small', 'medium', 'large']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Border Radius',
                controls: [
                    {
                        type: 'segmented',
                        name: 'rounded',
                        options: roundedOptions(['default', 'small', 'medium', 'large', 'full']),
                        defaultValue: 'default'
                    }
                ]
            },
            {
                label: 'Fill Mode',
                controls: [
                    {
                        type: 'segmented',
                        name: 'fillMode',
                        options: fillModeOptions(['default', 'solid', 'outline', 'flat']),
                        defaultValue: 'default'
                    }
                ]
            }
        ]
    });
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
        <div className="example-wrapper-center">
            <div>
                <MultiSelectTree
                    style={{ width: '300px' }}
                    label={'Categories:'}
                    size={config.size}
                    fillMode={config.fillMode}
                    rounded={config.rounded}
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
