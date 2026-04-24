import * as React from 'react';
import { ColumnMenuTextColumn, ColumnMenuNumericColumn, ColumnMenuDateColumn, ColumnMenuBooleanColumn, ColumnMenuProps, ColumnMenuItemProps } from '@progress/kendo-react-data-tools';
import { ColumnChooser } from './ColumnChooser';
import { ColumnLock } from './ColumnLock';
import { TreeListColumnProps } from '@progress/kendo-react-treelist';


const itemsRender: any = (rendering: React.ReactElement<any>[], colProps: { closeMenu: () => void; field: string; })=> {
    const items: React.ReactElement<any>[] = [...rendering];
    items.pop();
    items.push(<ColumnLock key="lock" {...colProps} />, <ColumnChooser key="columns" {...colProps} />);
    return items;
};

const ColumnMenuTextColumnCustom = (props: ColumnMenuProps & { children?: React.ReactNode }) => <ColumnMenuTextColumn {...props} itemsRender={itemsRender} />;
const ColumnMenuNumericColumnCustom = (props: ColumnMenuProps & { children?: React.ReactNode }) => <ColumnMenuNumericColumn {...props} itemsRender={itemsRender} />;
const ColumnMenuDateColumnCustom = (props: ColumnMenuProps & { children?: React.ReactNode }) => <ColumnMenuDateColumn {...props} itemsRender={itemsRender} />;
const ColumnMenuBooleanColumnCustom = (props: ColumnMenuProps & { children?: React.ReactNode }) => <ColumnMenuBooleanColumn {...props} itemsRender={itemsRender} />;

export const initialColumns: TreeListColumnProps[] = [
    { field: 'id', title: 'Id', expandable: true },
    { field: 'name', title: 'Name', columnMenu: ColumnMenuTextColumnCustom},
    { field: 'timeInPosition', title: 'Time in Position', columnMenu: ColumnMenuNumericColumnCustom },
    { field: 'hireDate', format: '{0:d}', title: 'Hire Date', columnMenu: ColumnMenuDateColumnCustom },
    { field: 'fullTime', title: 'Full Time', columnMenu: ColumnMenuBooleanColumnCustom }
];
