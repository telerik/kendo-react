import * as React from 'react';
import { getter } from '@progress/kendo-react-common';

import {
    Grid,
    GridColumn,
    GridContextMenuEvent,
    GridHandle,
    GridSelectionChangeEvent,
    getSelectedState,
    GridKeyDownEvent,
    getSelectedStateFromKeyDown,
    leafColumns,
    GridSortChangeEvent
} from '@progress/kendo-react-grid';

import {
    ChartWizard,
    ChartWizardDataRow,
    ChartWizardDefaultState,
    getWizardDataFromGridSelection
} from '@progress/kendo-react-chart-wizard';

import { ContextMenu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';

import {
    tableBodyIcon,
    tableUnmergeIcon,
    tableRowGroupsIcon,
    gridIcon,
    chartAreaStackedIcon,
    chartBarStackedIcon,
    chartBarClusteredIcon,
    chartBarStacked100Icon,
    chartPieIcon,
    chartColumnStackedIcon,
    chartColumnClusteredIcon,
    chartColumnStacked100Icon,
    chartLineStackedIcon,
    chartLineIcon,
    chartLineStacked100Icon,
    chartScatterIcon
} from '@progress/kendo-svg-icons';
import { getItems } from './data-service';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';

const DATA_ITEM_KEY = 'ID';
const initialSort: Array<SortDescriptor> = [{ field: 'Price', dir: 'desc' }];

const App = () => {
    const gridRef = React.useRef<GridHandle>(null);
    const offset = React.useRef({ left: 0, top: 0 });

    const [gridData, setGridData] = React.useState<Array<any>>(getItems());
    const [select, setSelect] = React.useState<SelectDescriptor>({
        4: true,
        5: true,
        6: true,
        2: true
    });
    const [sort, setSort] = React.useState(initialSort);

    const [showChartWizard, setShowChartWizard] = React.useState(false);
    const [showContextMenu, setShowContextMenu] = React.useState(false);
    const [contextMenuItem, setContextMenuItem] = React.useState<any>(null);

    const [chartWizardDefaultState, setChartWizardDefaultState] = React.useState<ChartWizardDefaultState>({});

    const chartWizardData: ChartWizardDataRow[] = showChartWizard
        ? getWizardDataFromGridSelection({
              grid: gridRef.current,
              data: gridData,
              selectedState: select,
              dataItemKey: DATA_ITEM_KEY
          })
        : [];

    const closeChartWizard = React.useCallback(() => {
        setShowChartWizard(false);
    }, []);

    const openChartWizard = React.useCallback(() => {
        setShowChartWizard(true);
    }, []);

    const onSelectionChange = React.useCallback(
        (event: GridSelectionChangeEvent) => {
            setSelect(event.select);
        },
        [setSelect]
    );

    const handleContextMenuOpen = React.useCallback(
        (e: React.MouseEvent, dataItem: any, field?: string) => {
            e.preventDefault();

            offset.current = { left: e.pageX, top: e.pageY };
            setShowContextMenu(true);
            setContextMenuItem(dataItem);
        },
        [select]
    );

    const handleCloseMenu = React.useCallback(() => {
        setShowContextMenu(false);
    }, []);

    const handleSelectRow = React.useCallback(() => {
        setSelect({
            [contextMenuItem[DATA_ITEM_KEY]]: true
        });
    }, [select, contextMenuItem]);

    const handleSelectAllRows = () => {
        setSelect(gridData.reduce((acc, item) => ({ ...acc, [item[DATA_ITEM_KEY]]: true }), {}));
    };

    const handleClearSelection = React.useCallback(() => {
        setSelect({});
    }, []);

    const handleContextMenu = React.useCallback(
        (event: GridContextMenuEvent) => {
            handleContextMenuOpen(event.syntheticEvent, event.dataItem, event.field);
        },
        [handleContextMenuOpen]
    );

    const handleOnSelect = (e: MenuSelectEvent) => {
        switch (e.item.data.action) {
            case 'selectRow':
                handleSelectRow();
                break;
            case 'selectAllRows':
                handleSelectAllRows();
                break;
            case 'clearSelection':
                handleClearSelection();
                break;
            case 'bar':
                setChartWizardDefaultState({ seriesType: 'bar' });
                openChartWizard();
                break;
            case 'stackedBar':
                setChartWizardDefaultState({ seriesType: 'bar', stack: { type: 'normal' } });
                openChartWizard();
                break;
            case 'stacked100Bar':
                setChartWizardDefaultState({ seriesType: 'bar', stack: { type: '100%' } });
                openChartWizard();
                break;
            case 'pie':
                setChartWizardDefaultState({ seriesType: 'pie' });
                openChartWizard();
                break;
            case 'column':
                setChartWizardDefaultState({ seriesType: 'column' });
                openChartWizard();
                break;
            case 'stackedColumn':
                setChartWizardDefaultState({ seriesType: 'column', stack: { type: 'normal' } });
                openChartWizard();
                break;
            case 'stacked100Column':
                setChartWizardDefaultState({ seriesType: 'column', stack: { type: '100%' } });
                openChartWizard();
                break;
            case 'line':
                setChartWizardDefaultState({ seriesType: 'line' });
                openChartWizard();
                break;
            case 'stackedLine':
                setChartWizardDefaultState({ seriesType: 'line', stack: { type: 'normal' } });
                openChartWizard();
                break;
            case 'stacked100Line':
                setChartWizardDefaultState({ seriesType: 'line', stack: { type: '100%' } });
                openChartWizard();
                break;
            case 'scatter':
                setChartWizardDefaultState({ seriesType: 'scatter' });
                openChartWizard();
                break;
            default:
        }
        setShowContextMenu(false);
    };

    const grid = (
        <Grid
            ref={gridRef}
            style={{ height: '500px' }}
            data={orderBy(gridData, sort)}
            dataItemKey={DATA_ITEM_KEY}
            selectable={{
                enabled: true,
                drag: true,
                mode: 'multiple'
            }}
            navigatable={true}
            select={select}
            onSelectionChange={onSelectionChange}
            onContextMenu={handleContextMenu}
            sortable={true}
            sort={sort}
            onSortChange={(e: GridSortChangeEvent) => {
                setSort(e.sort);
            }}
        >
            <GridColumn field="Product" title="Product Name" editor="text" />
            <GridColumn field="Price" title="Price" editor="numeric" />
            <GridColumn field="Tax" title="Tax" editor="numeric" />
            <GridColumn field="Total" title="Total" editor="numeric" />
        </Grid>
    );

    return (
        <>
            <div className="example-config">
                <strong>Right-click to generate Chart.</strong>
            </div>
            {grid}
            <ContextMenu
                show={showContextMenu}
                offset={offset.current}
                onSelect={handleOnSelect}
                onClose={handleCloseMenu}
            >
                <MenuItem text="Select" svgIcon={tableBodyIcon} cssStyle={{ borderBottom: '1px solid #ddd' }}>
                    <MenuItem text="Row" svgIcon={tableRowGroupsIcon} data={{ action: 'selectRow' }} />
                    <MenuItem text="All rows" svgIcon={gridIcon} data={{ action: 'selectAllRows' }} />
                    <MenuItem text="Clear selection" svgIcon={tableUnmergeIcon} data={{ action: 'clearSelection' }} />
                </MenuItem>
                <MenuItem
                    text="Generate chart"
                    svgIcon={chartAreaStackedIcon}
                    disabled={Object.keys(select).length === 0}
                >
                    <MenuItem text="Bar chart" svgIcon={chartBarClusteredIcon}>
                        <MenuItem text="Bar" svgIcon={chartBarClusteredIcon} data={{ action: 'bar' }} />
                        <MenuItem text="Stacked bar" svgIcon={chartBarStackedIcon} data={{ action: 'stackedBar' }} />
                        <MenuItem
                            text="100% Stacked bar"
                            svgIcon={chartBarStacked100Icon}
                            data={{ action: 'stacked100Bar' }}
                        />
                    </MenuItem>
                    <MenuItem text="Pie chart" svgIcon={chartPieIcon} data={{ action: 'pie' }} />
                    <MenuItem text="Column chart" svgIcon={chartColumnClusteredIcon}>
                        <MenuItem text="Column" svgIcon={chartColumnClusteredIcon} data={{ action: 'column' }} />
                        <MenuItem
                            text="Stacked column"
                            svgIcon={chartColumnStackedIcon}
                            data={{ action: 'stackedColumn' }}
                        />
                        <MenuItem
                            text="100% Stacked column"
                            svgIcon={chartColumnStacked100Icon}
                            data={{ action: 'stacked100Column' }}
                        />
                    </MenuItem>
                    <MenuItem text="Line chart" svgIcon={chartLineIcon}>
                        <MenuItem text="Line" svgIcon={chartLineIcon} data={{ action: 'line' }} />
                        <MenuItem text="Stacked line" svgIcon={chartLineStackedIcon} data={{ action: 'stackedLine' }} />
                        <MenuItem
                            text="100% Stacked line"
                            svgIcon={chartLineStacked100Icon}
                            data={{ action: 'stacked100Line' }}
                        />
                    </MenuItem>
                    <MenuItem text="Scatter chart" svgIcon={chartScatterIcon} data={{ action: 'scatter' }} />
                </MenuItem>
            </ContextMenu>
            {showChartWizard && (
                <ChartWizard data={chartWizardData} onClose={closeChartWizard} defaultState={chartWizardDefaultState} />
            )}
        </>
    );
};

export default App;
