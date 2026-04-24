import * as React from 'react';
import {
    GridColumnMenuItemGroup,
    GridColumnMenuItem,
    GridColumnMenuGroup,
    GridColumnMenuProps
} from '@progress/kendo-react-grid';
import { windowRestoreIcon, colResizeIcon } from '@progress/kendo-svg-icons';

interface GridColumn {
    field: string;
    id: string;
    width?: string | number;
    [key: string]: any;
}

interface CustomColumnMenuPropsExtended extends GridColumnMenuProps {
    columns: GridColumn[];
    setColumns: React.Dispatch<React.SetStateAction<GridColumn[]>>;
    onOpenReorderWindow: (column: GridColumn) => void;
    onOpenResizeWindow: (column: GridColumn) => void;
}

export const CustomColumnMenu: React.FC<CustomColumnMenuPropsExtended> = ({
    columns,
    setColumns,
    onOpenReorderWindow,
    onOpenResizeWindow,
    ...props
}) => {
    const [columnsExpanded, setColumnsExpanded] = React.useState<boolean>(false);
    const [filterExpanded, setFilterExpanded] = React.useState<boolean>(false);

    const onMenuItemClick = (e: any) => {
        const value = !columnsExpanded;
        setColumnsExpanded(value);
        setFilterExpanded(value ? false : filterExpanded);
        onOpenReorderWindow(props.column as GridColumn);
        if (props.onCloseMenu) {
            props.onCloseMenu();
        }
    };

    const onResizeMenuItemClick = () => {
        onOpenResizeWindow(props.column as GridColumn);
        if (props.onCloseMenu) {
            props.onCloseMenu();
        }
    };
    return (
        <div>
            <GridColumnMenuItemGroup>
                <GridColumnMenuItem
                    title={'Reorder Columns'}
                    iconClass={'k-i-columns'}
                    onClick={onMenuItemClick}
                    svgIcon={windowRestoreIcon}
                />
                <GridColumnMenuItem
                    title={'Resize Column'}
                    iconClass={'k-i-resize'}
                    onClick={onResizeMenuItemClick}
                    svgIcon={colResizeIcon}
                />
            </GridColumnMenuItemGroup>
            <GridColumnMenuGroup {...(props as any)} />
        </div>
    );
};
