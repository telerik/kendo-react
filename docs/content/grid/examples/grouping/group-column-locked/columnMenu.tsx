import * as React from 'react';
import { GridColumnMenuGroup, GridColumnMenuItemGroup, GridColumnMenuProps } from '@progress/kendo-react-grid';
import { classNames } from '@progress/kendo-react-common';

export interface DataColumnMenuProps extends GridColumnMenuProps {
    locked: boolean;
    onColumnLockToggle: (field: string, locked: boolean) => void;
}

export const DataColumnMenu = (props: DataColumnMenuProps) => {
    const handleToggle = (locked: boolean) => {
        props.onColumnLockToggle(props.column.field || '', locked);
        props.onCloseMenu?.();
    };

    return (
        <div>
            <GridColumnMenuGroup {...props} />
            <GridColumnMenuItemGroup>
                <div className="k-column-list-wrapper">
                    <div className="k-column-list">
                        <button
                            type="button"
                            className={classNames('k-column-list-item', { 'k-disabled': props.locked })}
                            disabled={props.locked}
                            onClick={() => handleToggle(true)}
                        >
                            <span className="k-icon k-i-lock" /> Lock Column
                        </button>
                        <button
                            type="button"
                            className={classNames('k-column-list-item', { 'k-disabled': !props.locked })}
                            disabled={!props.locked}
                            onClick={() => handleToggle(false)}
                        >
                            <span className="k-icon k-i-unlock" /> Unlock Column
                        </button>
                    </div>
                </div>
            </GridColumnMenuItemGroup>
        </div>
    );
};
