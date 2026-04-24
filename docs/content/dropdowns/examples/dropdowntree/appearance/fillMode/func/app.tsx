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
    const [valueSolid, setValueSolid] = React.useState(null);
    const [expandedSolid, setExpandedSolid] = React.useState([data[0][dataItemKey]]);

    const [valueOutline, setValueOutline] = React.useState(null);
    const [expandedOutline, setExpandedOutline] = React.useState([data[0][dataItemKey]]);

    const [valueFlat, setValueFlat] = React.useState(null);
    const [expandedFlat, setExpandedFlat] = React.useState([data[0][dataItemKey]]);

    const onChangeSolid = (event: DropDownTreeChangeEvent) => setValueSolid(event.value);
    const onExpandChangeSolid = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedSolid(expandedState(event.item, dataItemKey, expandedSolid)),
        [expandedSolid]
    );

    const onChangeOutline = (event: DropDownTreeChangeEvent) => setValueOutline(event.value);
    const onExpandChangeOutline = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedOutline(expandedState(event.item, dataItemKey, expandedOutline)),
        [expandedOutline]
    );

    const onChangeFlat = (event: DropDownTreeChangeEvent) => setValueFlat(event.value);
    const onExpandChangeFlat = React.useCallback(
        (event: DropDownTreeExpandEvent) => setExpandedFlat(expandedState(event.item, dataItemKey, expandedFlat)),
        [expandedFlat]
    );

    const treeDataSolid = React.useMemo(
        () => processTreeData(data, { expanded: expandedSolid, value: valueSolid }, fields),
        [expandedSolid, valueSolid]
    );

    const treeDataOutline = React.useMemo(
        () => processTreeData(data, { expanded: expandedOutline, value: valueOutline }, fields),
        [expandedOutline, valueOutline]
    );

    const treeDataFlat = React.useMemo(
        () => processTreeData(data, { expanded: expandedFlat, value: valueFlat }, fields),
        [expandedFlat, valueFlat]
    );

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6">
                <div className="k-col">
                    <Label editorId={'solid'}>Solid</Label>
                    <br />
                    <DropDownTree
                        id={'solid'}
                        style={{ width: '300px' }}
                        fillMode={'solid'}
                        data={treeDataSolid}
                        value={valueSolid}
                        onChange={onChangeSolid}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeSolid}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'outline'}>Outline</Label>
                    <br />
                    <DropDownTree
                        id={'outline'}
                        style={{ width: '300px' }}
                        fillMode={'outline'}
                        data={treeDataOutline}
                        value={valueOutline}
                        onChange={onChangeOutline}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeOutline}
                    />
                </div>
                <div className="k-col">
                    <Label editorId={'flat'}>Flat</Label>
                    <br />
                    <DropDownTree
                        id={'flat'}
                        style={{ width: '300px' }}
                        fillMode={'flat'}
                        data={treeDataFlat}
                        value={valueFlat}
                        onChange={onChangeFlat}
                        placeholder="Please select ..."
                        textField={textField}
                        dataItemKey={dataItemKey}
                        selectField={selectField}
                        expandField={expandField}
                        onExpandChange={onExpandChangeFlat}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
