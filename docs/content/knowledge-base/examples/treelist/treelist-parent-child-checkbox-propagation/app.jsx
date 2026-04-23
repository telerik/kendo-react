import React, { useState, useCallback } from 'react';
import {
  TreeList,
  mapTree,
  extendDataItem,
  TreeListSelectionCell,
  TreeListHeaderSelectionCell,
  getSelectedState,
} from '@progress/kendo-react-treelist';
import { getter } from '@progress/kendo-react-common';
import employees from './data';
import { Button } from '@progress/kendo-react-buttons';

const DATA_ITEM_KEY = 'id';
const SUB_ITEMS_FIELD = 'employees';
const EXPAND_FIELD = 'expanded';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

const extendData = (dataState, selectedState, expandedState) => {
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
  const dataState = employees.slice();
  const [selectedState, setSelectedState] = useState({});
  const [expandedState, setExpandedState] = useState({
    1: true,
    2: true,
    32: true,
  });
  const [shouldPropagate, setShouldPropagate] = useState(true);
  const [includedChildren, setIncludedChildren] = useState({});

  const onExpandChange = useCallback(
    (e) => {
      setExpandedState({ ...expandedState, [idGetter(e.dataItem)]: !e.value });
    },
    [expandedState]
  );

  const includeChildSelection = (item, checked) => {
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

  const onSelectionChange = useCallback(
    (event) => {
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
    [selectedState, shouldPropagate, includedChildren]
  );

  const onHeaderSelectionChange = useCallback((event) => {
    const checkboxElement = event.syntheticEvent.target;
    const checked = checkboxElement.checked;
    const newSelectedState = {};

    event.dataItems.forEach((item) => {
      newSelectedState[idGetter(item)] = checked;
    });
    setSelectedState(newSelectedState);
  }, []);

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
      <Button onClick={() => setShouldPropagate(!shouldPropagate)}>
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

export default App;
