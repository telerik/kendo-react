import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-react-treelist';
import { getter, SvgIcon } from '@progress/kendo-react-common';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import { caretAltDownIcon, caretAltRightIcon } from '@progress/kendo-svg-icons';
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

const spacerIcon = { name: 'none', content: '', viewBox: '0 0 24 24' };

const nameCell = (props) => {
    const navigationAttributes = useTableKeyboardNavigation(props.id);
    const hasChildren =
        props.dataItem[SUB_ITEMS_FIELD] &&
        props.dataItem[SUB_ITEMS_FIELD].length > 0;

    const onClick = (ev) => {
        props.onExpandChange(ev, props.dataItem, props.level);
    };

    const icons = [];
    icons.push(...props.level.slice(1).map((_x, i) => (
        <SvgIcon key={i} icon={spacerIcon} />
    )));

    if (hasChildren) {
        icons.push(
            <SvgIcon
                icon={props.expanded ? caretAltDownIcon : caretAltRightIcon}
                key="expand-collapse"
                onClick={onClick}
                style={{ cursor: 'pointer' }}
            />
        );
    } else {
        icons.push(<SvgIcon key="leaf" icon={spacerIcon} />);
    }

    return (
        <td
            className="k-table-td k-text-nowrap"
            aria-colindex={props.ariaColumnIndex}
            aria-expanded={hasChildren ? props.expanded : undefined}
            role="gridcell"
            {...navigationAttributes}
        >
            {icons}
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

