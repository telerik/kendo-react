import * as React from 'react';
import { ColumnMenuItem } from '@progress/kendo-react-data-tools';
import { ColumnMenuContext } from './ColumnMenuContext';
import { TreeListColumnProps } from '@progress/kendo-react-treelist';

export const ColumnLock = (props: { closeMenu: () => void; field: string; }) => {
    const { onLock, columns } = React.useContext(ColumnMenuContext);
    const column: TreeListColumnProps | undefined = columns.find(c => c.field === props.field);
    const locked: boolean = Boolean(column && column.locked);
    return (
      <div className="k-columnmenu-item-wrapper">
        <ColumnMenuItem
          title="Lock Column"
          iconClass="k-i-lock"
          selected={locked}
          onClick={() => onLock.call(undefined, {...props, locked })}
        />
      </div>
    );
};
