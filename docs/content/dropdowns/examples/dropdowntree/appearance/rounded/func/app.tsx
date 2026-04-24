import * as React from 'react';

import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const data = [
    {
        text: 'Furniture',
        id: 1,
        items: [
            { text: 'Tables & Chairs', id: 2 },
            { text: 'Sofas', id: 3 }
        ]
    },
    {
        text: 'Decor',
        id: 5,
        items: [
            { text: 'Bed Linen', id: 6 },
            { text: 'Carpets', id: 8 }
        ]
    }
];

const processTreeData = (data: any[], state: any, fields: any) => {
    const { selectField, expandField, dataItemKey, subItemsField } = fields;
    const { expanded, value } = state;
    return data.map((item) => ({
        ...item,
        [expandField]: expanded.includes(item[dataItemKey]),
        [selectField]: value && value[dataItemKey] === item[dataItemKey],
        [subItemsField]: item[subItemsField] ? processTreeData(item[subItemsField], state, fields) : undefined
    }));
};

const expandedState = (item: any, dataItemKey: string, expanded: any[]) =>
    expanded.includes(item[dataItemKey])
        ? expanded.filter((id) => id !== item[dataItemKey])
        : [...expanded, item[dataItemKey]];

const fields = { selectField: 'selected', expandField: 'expanded', dataItemKey: 'id', subItemsField: 'items' };

const App = () => {
    const [values, setValues] = React.useState({ small: null, medium: null, large: null, full: null, none: null });
    const [expanded, setExpanded] = React.useState({ small: [1], medium: [1], large: [1], full: [1], none: [1] });

    const createHandlers = (key: string) => ({
        onChange: (e: DropDownTreeChangeEvent) => setValues((v) => ({ ...v, [key]: e.value })),
        onExpandChange: React.useCallback(
            (e: DropDownTreeExpandEvent) =>
                setExpanded((exp) => ({ ...exp, [key]: expandedState(e.item, 'id', exp[key]) })),
            [expanded[key]]
        )
    });

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                {['small', 'medium', 'large', 'full', 'none'].map((size) => {
                    const handlers = createHandlers(size);
                    const treeData = React.useMemo(
                        () => processTreeData(data, { expanded: expanded[size], value: values[size] }, fields),
                        [expanded[size], values[size]]
                    );
                    return (
                        <div key={size} className="k-col">
                            <Label editorId={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</Label>
                            <br />
                            <DropDownTree
                                id={size}
                                style={{ width: '300px' }}
                                rounded={size}
                                data={treeData}
                                value={values[size]}
                                onChange={handlers.onChange}
                                placeholder="Please select ..."
                                textField="text"
                                dataItemKey="id"
                                selectField="selected"
                                expandField="expanded"
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
