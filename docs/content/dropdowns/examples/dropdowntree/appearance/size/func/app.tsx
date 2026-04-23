import * as React from 'react';

import { DropDownTree, DropDownTreeChangeEvent, DropDownTreeExpandEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';

const data = [
    {
        text: 'Furniture',
        id: 1,
        items: [
            { text: 'Tables & Chairs', id: 2 },
            { text: 'Sofas', id: 3 },
            { text: 'Occasional Furniture', id: 4 }
        ]
    },
    {
        text: 'Decor',
        id: 5,
        items: [
            { text: 'Bed Linen', id: 6 },
            { text: 'Curtains & Blinds', id: 7 },
            { text: 'Carpets', id: 8 }
        ]
    }
];

const processTreeData = (data: any[], state: any, fields: any) => {
    const { selectField, expandField, dataItemKey, subItemsField } = fields;
    const { expanded, value } = state;

    return data.map((item) => {
        const isExpanded = expanded.includes(item[dataItemKey]);
        const isSelected = value && value[dataItemKey] === item[dataItemKey];

        return {
            ...item,
            [expandField]: isExpanded,
            [selectField]: isSelected,
            [subItemsField]: item[subItemsField] ? processTreeData(item[subItemsField], state, fields) : undefined
        };
    });
};

const expandedState = (item: any, dataItemKey: string, expanded: any[]) => {
    const isExpanded = expanded.includes(item[dataItemKey]);
    return isExpanded ? expanded.filter((id) => id !== item[dataItemKey]) : [...expanded, item[dataItemKey]];
};

const selectField = 'selected';
const expandField = 'expanded';
const dataItemKey = 'id';
const textField = 'text';
const subItemsField = 'items';
const fields = { selectField, expandField, dataItemKey, subItemsField };

const App = () => {
    const [valueSmall, setValueSmall] = React.useState(null);
    const [expandedSmall, setExpandedSmall] = React.useState([data[0][dataItemKey]]);

    const [valueMedium, setValueMedium] = React.useState(null);
    const [expandedMedium, setExpandedMedium] = React.useState([data[0][dataItemKey]]);

    const [valueLarge, setValueLarge] = React.useState(null);
    const [expandedLarge, setExpandedLarge] = React.useState([data[0][dataItemKey]]);

    const onChangeSmall = (event: DropDownTreeChangeEvent) => setValueSmall(event.value);
    const onExpandChangeSmall = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedSmall(expandedState(event.item, dataItemKey, expandedSmall)),
        [expandedSmall]
    );

    const onChangeMedium = (event: DropDownTreeChangeEvent) => setValueMedium(event.value);
    const onExpandChangeMedium = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedMedium(expandedState(event.item, dataItemKey, expandedMedium)),
        [expandedMedium]
    );

    const onChangeLarge = (event: DropDownTreeChangeEvent) => setValueLarge(event.value);
    const onExpandChangeLarge = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedLarge(expandedState(event.item, dataItemKey, expandedLarge)),
        [expandedLarge]
    );

    const treeDataSmall = React.useMemo(
        () => processTreeData(data, { expanded: expandedSmall, value: valueSmall }, fields),
        [expandedSmall, valueSmall]
    );

    const treeDataMedium = React.useMemo(
        () => processTreeData(data, { expanded: expandedMedium, value: valueMedium }, fields),
        [expandedMedium, valueMedium]
    );

    const treeDataLarge = React.useMemo(
        () => processTreeData(data, { expanded: expandedLarge, value: valueLarge }, fields),
        [expandedLarge, valueLarge]
    );

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'small'}>Small</Label>
                    <br />
                    <DropDownTree
                        id={'small'}
                        style={{ width: '300px' }}
                        size={'small'}
                        data={treeDataSmall}
                        value={valueSmall}
                        onChange={onChangeSmall}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeSmall}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'medium'}>Medium</Label>
                    <br />
                    <DropDownTree
                        id={'medium'}
                        style={{ width: '300px' }}
                        size={'medium'}
                        data={treeDataMedium}
                        value={valueMedium}
                        onChange={onChangeMedium}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeMedium}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'large'}>Large</Label>
                    <br />
                    <DropDownTree
                        id={'large'}
                        style={{ width: '300px' }}
                        size={'large'}
                        data={treeDataLarge}
                        value={valueLarge}
                        onChange={onChangeLarge}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeLarge}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
