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
    const [values, setValues] = React.useState({ small: [], medium: [], large: [], full: [], none: [] });
    const [expanded, setExpanded] = React.useState({
        small: [data[0][dataItemKey]],
        medium: [data[0][dataItemKey]],
        large: [data[0][dataItemKey]],
        full: [data[0][dataItemKey]],
        none: [data[0][dataItemKey]]
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
                {['small', 'medium', 'large', 'full', 'none'].map((rounded) => {
                    const handlers = createHandlers(rounded);
                    const treeData = React.useMemo(
                        () =>
                            processMultiSelectTreeData(data, {
                                expanded: expanded[rounded],
                                value: values[rounded],
                                ...fields
                            }),
                        [expanded[rounded], values[rounded]]
                    );
                    return (
                        <div key={rounded} className="k-col">
                            <Label editorId={rounded}>{rounded.charAt(0).toUpperCase() + rounded.slice(1)}</Label>
                            <br />
                            <MultiSelectTree
                                id={rounded}
                                style={{ width: '300px' }}
                                rounded={rounded}
                                data={treeData}
                                value={values[rounded]}
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
