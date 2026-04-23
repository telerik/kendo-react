import { filterBy } from '@progress/kendo-react-data-tools';
import { mapTree, extendDataItem } from '@progress/kendo-react-common';

export const processTreeData = (
    data: Array<object>,
    state: { expanded: Array<number>; value: string | undefined; filter: any },
    fields: { selectField: string; expandField: string; dataItemKey: string; subItemsField: string }
) => {
    const { selectField, expandField, dataItemKey, subItemsField } = fields;
    const { expanded, value, filter } = state;
    const filtering: Boolean = Boolean(filter && filter.value);

    return mapTree(filtering ? filterBy(data, [filter], subItemsField) : data, subItemsField, (item) => {
        const props = {
            [expandField]: expanded.includes(item[dataItemKey]),
            [selectField]: value && item[dataItemKey] === value[dataItemKey]
        };
        return filtering ? extendDataItem(item, subItemsField, props) : { ...item, ...props };
    });
};

export const expandedState = (item: object, dataItemKey: number, expanded: Array<number>) => {
    const nextExpanded: Array<number> = expanded.slice();
    const itemKey: number = item[dataItemKey];
    const index: number = expanded.indexOf(itemKey);
    index === -1 ? nextExpanded.push(itemKey) : nextExpanded.splice(index, 1);

    return nextExpanded;
};
