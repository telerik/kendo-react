import * as React from 'react';

import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { useConfigurator, sizeOptions, roundedOptions, fillModeOptions } from '@docs-shared/configurator';
import { processTreeData, expandedState } from './shared-dd-tree-data-operations';
import { data } from './shared-dd-tree-data';

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

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
    const [value, setValue] = React.useState(null);
    const [expanded, setExpanded] = React.useState([data[0][dataItemKey]]);

    const onChange = (event: DropDownTreeChangeEvent) => setValue(event.value);
    const onExpandChange = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpanded(expandedState(event.item, dataItemKey, expanded)),
        [expanded]
    );

    const treeData = React.useMemo(() => processTreeData(data, { expanded, value }, fields), [expanded, value]);

    return (
        <div className="example-wrapper-center">
            <div>
                <DropDownTree
                    style={{ width: '300px' }}
                    size={config.size}
                    fillMode={config.fillMode}
                    rounded={config.rounded}
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
