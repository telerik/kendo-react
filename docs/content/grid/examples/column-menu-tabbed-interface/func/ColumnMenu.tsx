import * as React from 'react';
import {
    GridColumnMenuFilter,
    GridColumnMenuSort,
    GridColumnMenuItem,
    GridColumnMenuProps,
    GridColumnMenuColumnsList,
    GridColumnMenuItemGroup,
    GridColumnMenuGroup
} from '@progress/kendo-react-grid';
import { TabStrip, TabStripTab, TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import {
    filterIcon,
    slidersIcon,
    columnsIcon,
    columnFreezeIcon,
    maxWidthIcon,
    displayInlineFlexIcon
} from '@progress/kendo-svg-icons';
import { TabStripTabTitle } from './TabStripTabTitle';
import { ColumnMenuContext } from './ColumnMenuContext';

export const ColumnMenu: React.FunctionComponent<GridColumnMenuProps> = (props) => {
    const { onAutoSize, onColumnsChange, columnsState, columns } = React.useContext(ColumnMenuContext);
    const { onCloseMenu = () => {} } = props;
    const [selected, setSelected] = React.useState<number>(0);

    const handleSelect = (e: TabStripSelectEventArguments) => {
        setSelected(e.selected);
    };

    const onColumnLock = React.useCallback(() => {
        const index = columnsState.findIndex((c) => c.id === props.column.id);
        if (index !== -1) {
            const nextColumns = columnsState.slice();
            nextColumns.splice(index, 1, { ...columnsState[index], locked: !columnsState[index].locked });
            onColumnsChange.call(undefined, nextColumns);
            onCloseMenu.call(undefined);
        }
    }, [onColumnsChange, columnsState, props.column, onCloseMenu]);

    const onColumnAutoSize = React.useCallback(() => {
        onAutoSize.call(undefined, [props.column]);
        onCloseMenu.call(undefined);
    }, [onAutoSize, props.column, onCloseMenu]);

    const onAutoSizeAll = React.useCallback(() => {
        onAutoSize.call(undefined, columnsState);
        onCloseMenu.call(undefined);
    }, [onAutoSize, columnsState, onCloseMenu]);

    return (
        <TabStrip selected={selected} onSelect={handleSelect} animation={false}>
            <TabStripTab title={<TabStripTabTitle title="Filter" iconName="filter" svgIcon={filterIcon} />}>
                <GridColumnMenuFilter {...props} alwaysExpand={true} />
            </TabStripTab>
            <TabStripTab title={<TabStripTabTitle title="General" iconName="sliders" svgIcon={slidersIcon} />}>
                <GridColumnMenuSort {...props} />
                <GridColumnMenuGroup {...props} />
                <GridColumnMenuItemGroup>
                    <GridColumnMenuItem
                        title="Lock column"
                        svgIcon={columnFreezeIcon}
                        iconClass={'k-i-column-freeze'}
                        onClick={onColumnLock}
                        selected={props.column.locked}
                    />
                </GridColumnMenuItemGroup>
                <GridColumnMenuItemGroup>
                    <GridColumnMenuItem
                        title="Autosize This Column"
                        svgIcon={maxWidthIcon}
                        iconClass={'k-i-max-width'}
                        onClick={onColumnAutoSize}
                    />
                    <GridColumnMenuItem
                        title="Autosize All Columns"
                        svgIcon={displayInlineFlexIcon}
                        iconClass={'k-i-display-inline-flex'}
                        onClick={onAutoSizeAll}
                    />
                </GridColumnMenuItemGroup>
            </TabStripTab>
            <TabStripTab title={<TabStripTabTitle title="Columns" iconName="columns" svgIcon={columnsIcon} />}>
                <GridColumnMenuColumnsList
                    columnsState={columnsState}
                    columns={columns}
                    onColumnsChange={onColumnsChange}
                    onCloseMenu={onCloseMenu}
                />
            </TabStripTab>
        </TabStrip>
    );
};
