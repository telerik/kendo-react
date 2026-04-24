import { filterBy } from '@progress/kendo-react-data-tools';
import { mapTree, extendDataItem } from '@progress/kendo-react-common';

export const processTreeData = (data, state, fields) => {
    const { selectField, expandField, dataItemKey, subItemsField } = fields;
    const { expanded, value, filter } = state;
    const filtering = Boolean(filter && filter.value);

    return mapTree(filtering ? filterBy(data, [filter], subItemsField) : data, subItemsField, (item) => {
        const props = {
            [expandField]: expanded.includes(item[dataItemKey]),
            [selectField]: value && item[dataItemKey] === value[dataItemKey]
        };
        return filtering ? extendDataItem(item, subItemsField, props) : { ...item, ...props };
    });
};

export const expandedState = (item, dataItemKey, expanded) => {
    const nextExpanded = expanded.slice();
    const itemKey = item[dataItemKey];
    const index = expanded.indexOf(itemKey);
    index === -1 ? nextExpanded.push(itemKey) : nextExpanded.splice(index, 1);

    return nextExpanded;
};
