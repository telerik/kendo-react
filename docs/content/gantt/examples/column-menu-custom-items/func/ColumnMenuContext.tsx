import { GanttColumnProps } from '@progress/kendo-react-gantt';
import * as React from 'react';

export interface ColumnMenuContextType {
    columns: GanttColumnProps[];
    visibleColumns: string[];
    onColumnToggle: (visible: string[]) => void;
}

export const ColumnMenuContext = React.createContext<ColumnMenuContextType>({
    columns: [],
    visibleColumns: [],
    onColumnToggle: () => null
});
