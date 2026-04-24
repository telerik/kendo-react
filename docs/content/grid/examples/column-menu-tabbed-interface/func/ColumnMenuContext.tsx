import * as React from 'react';
import { GridColumnProps } from '@progress/kendo-react-grid';

export const ColumnMenuContext = React.createContext({
    onColumnsChange: (_columns: GridColumnProps[]) => {},
    onAutoSize: (_columns: GridColumnProps[]) => {},
    columns: [] as GridColumnProps[],
    columnsState: [] as GridColumnProps[]
});
