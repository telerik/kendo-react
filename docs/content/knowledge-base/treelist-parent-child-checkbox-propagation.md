---
title: How To Select All Child Nodes When Selecting the Parent
description: Select all child nodes of a selected parent
type: how-to
page_title: Select All Child Nodes of a Selected Parent - KendoReact TreeList
slug: treelist-parent-child-checkbox-propagation
tags: react, kendo, kendoreact, treelist, checkchild, select, all, child, nodes
res_type: kb
category: knowledge-base
components: ["treelist"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.4.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

This KB article also answers the following questions:

-   How to select all child nodes automatically when I select their parent?
-   How to propagate the selection of a parent node to all it's children?

## Solution

To automatically select all child nodes when their parent is selected, follow these steps:

1. Define a function that takes an `item` (a parent or child node) and a `checked` flag (representing whether the item is selected or not). The function should track and update the selection state of the nodes.
2. When a parent node is selected (`checked` is `true`), check if the node has child nodes. If it does, recursively apply the selection to all children by calling the function for each child, ensuring that all descendants are selected.
3. When a parent node is deselected (`checked` is `false`), propagate the deselection to all its children in a similar manner by recursively calling the function for each child. After processing, update the state to reflect the new selection status, ensuring deselected nodes are removed.

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TreeList,
  mapTree,
  extendDataItem,
  TreeListSelectionCell,
  TreeListHeaderSelectionCell,
  getSelectedState,
  TreeListHeaderSelectionChangeEvent,
  TreeListSelectionChangeEvent,
  TreeListExpandChangeEvent,
} from '@progress/kendo-react-treelist';
import { getter } from '@progress/kendo-react-common';
import employees from './data';
import { Employee } from './interfaces';
import { Button } from '@progress/kendo-react-buttons';

const DATA_ITEM_KEY: string = 'id';
const SUB_ITEMS_FIELD: string = 'employees';
const EXPAND_FIELD: string = 'expanded';
const SELECTED_FIELD: string = 'selected';
const idGetter: (values: any) => any = getter(DATA_ITEM_KEY);

const extendData: (
  dataState: Employee[],
  selectedState: { [id: string]: number[] | boolean },
  expandedState: { [n: number]: boolean }
) => Employee[] = (dataState, selectedState, expandedState) => {
  return mapTree(dataState, SUB_ITEMS_FIELD, (item) =>
    extendDataItem(item, SUB_ITEMS_FIELD, {
      selected: selectedState[idGetter(item)],
      expanded: expandedState[idGetter(item)],
    })
  );
};

const headerSelectionValue = (dataState, selectedState) => {
  let allSelected = true;

  mapTree(dataState, SUB_ITEMS_FIELD, (item) => {
    allSelected = allSelected && selectedState[idGetter(item)];
    return item;
  });

  return allSelected;
};

const App = () => {
  const dataState: Employee[] = employees.slice();
  const [selectedState, setSelectedState] = React.useState<{
    [id: string]: number[] | boolean;
  }>({});
  const [expandedState, setExpandedState] = React.useState<{
    [n: number]: boolean;
  }>({ 1: true, 2: true, 32: true });

  const [shouldPropagate, setShouldPropagate] = React.useState(true);
  const [includedChildren, setIncludedChildren] = React.useState({});

  const onExpandChange = React.useCallback(
    (e: TreeListExpandChangeEvent) => {
      setExpandedState({ ...expandedState, [idGetter(e.dataItem)]: !e.value });
    },
    [expandedState]
  );

  const includeChildSelection = (item?: any, checked?: boolean) => {
    let children = includedChildren;

    setIncludedChildren(children);

    if (checked) {
      if (item.hasOwnProperty('employees') && item.employees.length > 1) {
        item.employees.forEach((employee) =>
          includeChildSelection(employee, checked)
        );
      }
      children[idGetter(item)] = checked;
      includedChildren[idGetter(item)] = checked;
    } else {
      if (item.hasOwnProperty('employees') && item.employees.length > 1) {
        item.employees.forEach((employee) =>
          includeChildSelection(employee, checked)
        );
      }

      delete children[idGetter(item)];
      setIncludedChildren(children);
    }
  };

  const onSelectionChange = React.useCallback(
    (event: TreeListSelectionChangeEvent) => {
      let newSelectedState = {};
      if (!shouldPropagate) {
        newSelectedState = getSelectedState({
          event,
          selectedState: selectedState,
          dataItemKey: DATA_ITEM_KEY,
        });

        setSelectedState(newSelectedState);
      } else {
        const checkboxElement = event.syntheticEvent.target;
        const checked = checkboxElement.checked;
        const item = event.dataItem;

        includeChildSelection(item, checked);
        setSelectedState({ ...includedChildren });
      }
    },
    [selectedState]
  );

  const onHeaderSelectionChange = React.useCallback(
    (event: TreeListHeaderSelectionChangeEvent) => {
      const checkboxElement: any = event.syntheticEvent.target;
      const checked: boolean = checkboxElement.checked;
      const newSelectedState = {};

      event.dataItems.forEach((item) => {
        newSelectedState[idGetter(item)] = checked;
      });
      setSelectedState(newSelectedState);
    },
    []
  );

  return (
    <>
      <TreeList
        style={{ maxHeight: '510px', overflow: 'auto' }}
        data={extendData(dataState, selectedState, expandedState)}
        selectedField={SELECTED_FIELD}
        expandField={EXPAND_FIELD}
        subItemsField={SUB_ITEMS_FIELD}
        dataItemKey={DATA_ITEM_KEY}
        onSelectionChange={onSelectionChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
        onExpandChange={onExpandChange}
        columns={[
          {
            field: 'selected',
            width: '7%',
            headerSelectionValue: headerSelectionValue(
              dataState,
              selectedState
            ),
            cell: TreeListSelectionCell,
            headerCell: TreeListHeaderSelectionCell,
          },
          { field: 'name', title: 'Name', expandable: true, width: '31%' },
          { field: 'position', title: 'Position', width: '31%' },
          {
            field: 'hireDate',
            title: 'Hire Date',
            format: '{0:d}',
            width: '31%',
          },
        ]}
      />

      <br />
      <Button onClick={(_) => setShouldPropagate(!shouldPropagate)}>
        Change ShouldPropagate
      </Button>

      <div>
        <span>
          ShouldPropagate is: <code>{JSON.stringify(shouldPropagate)}</code>
        </span>
      </div>
    </>
  );
};
```
