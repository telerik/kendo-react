import * as React from 'react';
import {
    ColumnMenuTextColumn,
    ColumnMenuNumericColumn,
    ColumnMenuDateColumn,
    ColumnMenuProps
} from '@progress/kendo-react-data-tools';
import { ColumnChooser } from './ColumnChooser';
import { GanttColumnProps, GanttTaskModelFields } from '@progress/kendo-react-gantt';

export const taskModelFields: GanttTaskModelFields = {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    percentComplete: 'percentComplete',
    isRollup: 'isRollup',
    isExpanded: 'isExpanded',
    isInEdit: 'isInEdit',
    children: 'children'
};

const itemsRender = (
    rendering: (React.ReactElement<HTMLDivElement, string | React.JSXElementConstructor<any>> | null)[],
    colProps: { field?: string; closeMenu: () => void }
) => {
    const items = [...rendering];
    items.pop();
    items.push(<ColumnChooser key="columns" {...colProps} />);
    return items;
};

const ColumnMenuTextColumnCustom = (props: ColumnMenuProps) => (
    <ColumnMenuTextColumn {...props} itemsRender={itemsRender} />
);
const ColumnMenuNumericColumnCustom = (props: ColumnMenuProps) => (
    <ColumnMenuNumericColumn {...props} itemsRender={itemsRender} />
);
const ColumnMenuDateColumnCustom = (props: ColumnMenuProps) => (
    <ColumnMenuDateColumn {...props} itemsRender={itemsRender} />
);

export const initialColumns: GanttColumnProps[] = [
    { field: taskModelFields.id, title: 'ID', width: 70 },
    {
        field: taskModelFields.title,
        title: 'Title',
        width: 200,
        expandable: true,
        columnMenu: ColumnMenuTextColumnCustom
    },
    {
        field: taskModelFields.start,
        title: 'Start',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        columnMenu: ColumnMenuDateColumnCustom
    },
    {
        field: taskModelFields.end,
        title: 'End',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        columnMenu: ColumnMenuDateColumnCustom
    },
    {
        field: taskModelFields.percentComplete,
        title: 'Percent Complete',
        width: 120,
        format: '{0:p}',
        columnMenu: ColumnMenuNumericColumnCustom
    }
];
