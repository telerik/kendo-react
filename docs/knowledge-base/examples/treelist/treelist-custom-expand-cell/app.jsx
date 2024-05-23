import * as React from 'react';
import {
  TreeList,
  mapTree,
  extendDataItem,
} from '@progress/kendo-react-treelist';
import { getter } from '@progress/kendo-react-common';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import employees from './data';
const DATA_ITEM_KEY = 'id';
const SUB_ITEMS_FIELD = 'employees';
const EXPAND_FIELD = 'expanded';
const idGetter = getter(DATA_ITEM_KEY);
const extendData = (dataState, selectedState, expandedState) => {
  return mapTree(dataState, SUB_ITEMS_FIELD, (item) =>
    extendDataItem(item, SUB_ITEMS_FIELD, {
      selected: selectedState[idGetter(item)],
      expanded: expandedState[idGetter(item)],
    })
  );
};

const nameCell = (props) => {
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  const onClick = (ev) => {
    props.onExpandChange(ev, props.dataItem, props.level);
  };
  let className =
    props.dataItem[SUB_ITEMS_FIELD] &&
    props.dataItem[SUB_ITEMS_FIELD].length > 0
      ? props.expanded
        ? 'k-icon k-i-caret-alt-down'
        : 'k-icon k-i-caret-alt-right'
      : 'k-icon';

  return (
    <td
      className={'k-table-td'}
      aria-colindex={props.ariaColumnIndex}
      role={'gridcell'}
      {...navigationAttributes}
    >
      {[...Array(props.level.length - 1)].map((e, i) => (
        <span class="k-icon k-i-none" role="presentation"></span>
      ))}
      <span
        onClick={onClick}
        data-prevent-selection="true"
        class={className}
        role="presentation"
      ></span>

      {props.dataItem['name']}
    </td>
  );
};
const App = () => {
  const [dataState, setDataState] = React.useState(employees.slice());
  const [expandedState, setExpandedState] = React.useState({
    1: true,
    2: true,
    32: true,
  });
  const onExpandChange = React.useCallback(
    (e) => {
      setExpandedState({
        ...expandedState,
        [idGetter(e.dataItem)]: !e.value,
      });
    },
    [expandedState]
  );
  return (
    <div>
      <TreeList
        style={{
          maxHeight: '510px',
          overflow: 'auto',
        }}
        data={extendData(dataState, [], expandedState)}
        expandField={EXPAND_FIELD}
        subItemsField={SUB_ITEMS_FIELD}
        dataItemKey={DATA_ITEM_KEY}
        navigatable={true}
        onExpandChange={onExpandChange}
        columns={[
          {
            field: 'name',
            title: 'Name',
            expandable: true,
            width: '31%',
            cell: nameCell,
          },
          {
            field: 'position',
            title: 'Position',
            width: '31%',
          },
          {
            field: 'hireDate',
            title: 'Hire Date',
            format: '{0:d}',
            width: '31%',
          },
        ]}
      />
    </div>
  );
};

export default App;
