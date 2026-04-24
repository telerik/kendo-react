import * as React from 'react';
import { TreeListColumnProps } from '@progress/kendo-react-treelist';

type ContextProps = {
    columns: TreeListColumnProps[],
    visibleColumns: (string | boolean)[],
    onColumnToggle: (a: { visible: any; }) => void,
    onLock: (a:{ field: any; locked: any; closeMenu: any; }) => void
}

export const ColumnMenuContext = React.createContext<ContextProps>({columns: [], visibleColumns: [], onColumnToggle: () => {}, onLock: () => {}});
