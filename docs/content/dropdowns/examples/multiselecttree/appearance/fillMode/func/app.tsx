import * as React from 'react';

import {
    MultiSelectTree,
    MultiSelectTreeChangeEvent,
    MultiSelectTreeExpandEvent,
    getMultiSelectTreeValue
} from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { processMultiSelectTreeData, expandedState } from './shared-dd-multiselecttree-data-operations';
import { data } from './shared-dd-tree-data';

const dataItemKey = 'id';
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
    dataItemKey,
    checkField,
    checkIndeterminateField,
    expandField,
    subItemsField
};

const App = () => {
    const [values, setValues] = React.useState({ solid: [], outline: [], flat: [] });
    const [expanded, setExpanded] = React.useState({
        solid: [data[0][dataItemKey]],
        outline: [data[0][dataItemKey]],
        flat: [data[0][dataItemKey]]
    });

    const createHandlers = (key: string) => ({
        onChange: (e: MultiSelectTreeChangeEvent) =>
            setValues((v) => ({ ...v, [key]: getMultiSelectTreeValue(data, { ...fields, ...e, value: v[key] }) })),
        onExpandChange: React.useCallback(
            (e: MultiSelectTreeExpandEvent) =>
                setExpanded((exp) => ({ ...exp, [key]: expandedState(e.item, dataItemKey, exp[key]) })),
            [expanded[key]]
        )
    });

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                {['solid', 'outline', 'flat'].map((fillMode) => {
                    const handlers = createHandlers(fillMode);
                    const treeData = React.useMemo(
                        () =>
                            processMultiSelectTreeData(data, {
                                expanded: expanded[fillMode],
                                value: values[fillMode],
                                ...fields
                            }),
                        [expanded[fillMode], values[fillMode]]
                    );
                    return (
                        <div key={fillMode} className="k-col">
                            <Label editorId={fillMode}>{fillMode.charAt(0).toUpperCase() + fillMode.slice(1)}</Label>
                            <br />
                            <MultiSelectTree
                                id={fillMode}
                                style={{ width: '300px' }}
                                fillMode={fillMode}
                                data={treeData}
                                value={values[fillMode]}
                                onChange={handlers.onChange}
                                placeholder="Please select ..."
                                textField={textField}
                                dataItemKey={dataItemKey}
                                checkField={checkField}
                                checkIndeterminateField={checkIndeterminateField}
                                subItemsField={subItemsField}
                                expandField={expandField}
                                onExpandChange={handlers.onExpandChange}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default App;
