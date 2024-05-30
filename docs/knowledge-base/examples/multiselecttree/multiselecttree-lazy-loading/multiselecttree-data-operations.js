import { filterBy } from '@progress/kendo-react-data-tools';
import { getter, setter } from '@progress/kendo-react-common';
export const getValueMap = (value, idGetter) => {
  const map = {};
  if (value && value.length) {
    value.forEach(item => {
      map[idGetter(item)] = true;
    });
  }
  return map;
};
export const expandedState = (item, dataItemKey, expanded) => {
  const nextExpanded = expanded.slice();
  const keyGetter = getter(dataItemKey);
  const itemKey = keyGetter(item);
  const index = expanded.findIndex(currentKey => {
    return currentKey === itemKey;
  });
  index === -1 ? nextExpanded.push(itemKey) : nextExpanded.splice(index, 1);
  return nextExpanded;
};
const mapMultiSelectTreeData = (data, options) => {
  const {
    keyGetter,
    subItemGetter,
    subItemSetter,
    checkSetter,
    expandedSetter,
    checkIndeterminateSetter,
    valueMap,
    expandedMap
  } = options;
  if (!data || !data.length) {
    return [data, false];
  }
  let hasChecked = false;
  const newData = [...data].map(dataItem => {
    const [children, hasCheckedChildren] = mapMultiSelectTreeData(subItemGetter(dataItem), options);
    const isChecked = valueMap[keyGetter(dataItem)];
    if (isChecked || hasCheckedChildren) {
      hasChecked = true;
    }
    const newItem = {
      ...dataItem
    };
    expandedSetter(newItem, expandedMap[keyGetter(newItem)]);
    subItemSetter(newItem, children);
    checkSetter(newItem, isChecked);
    checkIndeterminateSetter(newItem, !isChecked && hasCheckedChildren);
    return newItem;
  });
  return [newData, hasChecked];
};

/**
 * Creates a new array with the results of calling the provided callback function
 * on every element in the provided data tree. The new tree items have their `check` and `checkIndeterminate` fields set.
 */
export const processMultiSelectTreeData = (tree, options) => {
  const {
    subItemsField = 'items',
    checkField = 'checkField',
    checkIndeterminateField = 'checkIndeterminateField',
    expandField = 'expanded',
    dataItemKey,
    value,
    filter,
    expanded
  } = options;
  const keyGetter = getter(dataItemKey);
  const filtering = Boolean(filter && filter.value);
  const expandedMap = {};
  expanded.forEach(id => expandedMap[id] = true);
  const [result] = mapMultiSelectTreeData(tree, {
    valueMap: getValueMap(value, keyGetter),
    expandedMap: expandedMap,
    keyGetter,
    expandedSetter: setter(expandField),
    subItemGetter: getter(subItemsField),
    subItemSetter: setter(subItemsField),
    checkSetter: setter(checkField),
    checkIndeterminateSetter: setter(checkIndeterminateField)
  });
  return filtering ? filterBy(result, [filter], subItemsField) : result;
};