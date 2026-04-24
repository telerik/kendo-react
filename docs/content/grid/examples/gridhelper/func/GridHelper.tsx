import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-react-buttons';
import {
    fileExcelIcon,
    filePdfIcon,
    chevronDoubleDownIcon,
    chevronDoubleRightIcon,
    gearIcon,
    columnsIcon
} from '@progress/kendo-svg-icons';
import { Checkbox, Input } from '@progress/kendo-react-inputs';
import { Popup } from '@progress/kendo-react-popup';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridProps,
    GridGroupExpandChangeEvent,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import { SelectDescriptor, GroupExpandDescriptor } from '@progress/kendo-react-data-tools';
import { GroupResult, State, groupBy } from '@progress/kendo-react-all';

export function getNestedValue(fieldName, dataItem) {
    const path = (fieldName || '').split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });

    return data;
}

const getHighlight = (value, filter) => {
    let index = value.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase());
    if (index >= 0) {
        let left = value.substr(0, index);
        let right = value.substring(index + filter.length, value.length);
        return (
            <React.Fragment>
                {left}
                <span style={{ backgroundColor: '#a8edb3' }}>{value.substr(index, filter.length)}</span>
                {getHighlight(right, filter)}
            </React.Fragment>
        );
    }
    return value;
};

function highlightSearchTextInReactChildren(children, searchText) {
    function highlightInNode(node: React.ReactNode) {
        if (typeof node === 'string') {
            const modifiedContent = node.replace(
                new RegExp(`(${searchText})`, 'gi'),
                '<span style="background-color:#a8edb3">$1</span>'
            );
            if (node !== modifiedContent) {
                return <span dangerouslySetInnerHTML={{ __html: modifiedContent }} />;
            }
        } else if (React.isValidElement(node)) {
            if (!node.props.children.map) {
                return React.cloneElement(node, {}, highlightInNode(node.props.children));
            } else {
                return React.cloneElement(
                    node,
                    {},
                    node.props.children?.map((ch) => highlightInNode(ch))
                );
            }
        }

        return node;
    }
    return React.Children.map(children, (child: React.ReactNode) => {
        return highlightInNode(child);
    });
}

const getNumberOfItems = (data, select: SelectDescriptor) => {
    let count = 0;
    data.forEach((item) => {
        if (item.items) {
            count = count + getNumberOfItems(item.items, select);
        } else {
            count++;
        }
    });
    return count;
};

const generateGroupIds = (data) => {
    data.forEach((item) => {
        if (item.aggregates) {
            item.groupId = item.field + '_' + item.value;
            generateGroupIds(item.items);
        }
    });
};

const getDataColumnsTitles = (gridChildren) => {
    let columns = {};
    gridChildren.forEach((child) => {
        if (
            child.type.displayName === 'KendoReactGridColumn' &&
            child.props.field &&
            child.props.field !== 'selected'
        ) {
            columns[child.props.title ?? child.props.field] = true;
        }
    });
    return columns;
};

const getGridFieldColumns = (gridChildren) => {
    let fieldColumns: Array<any> = [];
    gridChildren.map((child: any) => {
        if (
            child.type.displayName === 'KendoReactGridColumn' &&
            child.props &&
            child.props.field &&
            child.props.field !== 'selected'
        ) {
            fieldColumns.push(child.props);
        }
    });
    return fieldColumns;
};

const TOOLBAR_BUTTON_TYPE = 'primary';

export const GridHelper = (props) => {
    const {
        externalFilter,
        expandCollapseAllButton,
        excelExportButton,
        pdfExportButton,
        showColumnsConfigurator,
        showFeaturesConfigurator,
        filterHighlights
    } = props.toolbarSettings ?? {};
    const GridProps = props.children.props;
    const [filterValue, setFilterValue] = React.useState<String | null>(null);

    // Needed for toggling features from the configurator
    const [defaultConfiguration, setDefaultConfiguration] = React.useState({
        filterable: props.filterable ?? GridProps.filterable,
        selectable: props.selectable ?? GridProps.selectable,
        sortable: props.sortable ? props.sortable : GridProps.sortable,
        groupable: props.groupable ?? GridProps.groupable,
        pageable: props.pageable ?? GridProps.pageable
    });

    const [configuration, setConfiguration] = React.useState({
        ...defaultConfiguration
    });

    React.useEffect(() => {
        setConfiguration({
            ...configuration,
            pageable: props.pageable ?? GridProps.pageable
        });
    }, [props.pageable, GridProps.pageable]);

    React.useEffect(() => {
        setConfiguration({
            ...configuration,
            filterable: props.filterable ?? GridProps.filterable
        });
    }, [props.filterable, GridProps.filterable]);

    React.useEffect(() => {
        setConfiguration({
            ...configuration,
            groupable: props.groupable ?? GridProps.groupable
        });
    }, [props.groupable, GridProps.groupable]);

    React.useEffect(() => {
        setConfiguration({
            ...configuration,
            selectable: props.selectable ?? GridProps.selectable
        });
    }, [props.selectable, GridProps.selectable]);

    React.useEffect(() => {
        setDefaultData(props.data ?? GridProps.data);
        setData(props.data ?? GridProps.data);
    }, [props.data, GridProps.data]);

    // The raw data
    const [defaultData, setDefaultData] = React.useState(
        (props.data ?? GridProps.data).map((dataItem) =>
            Object.assign(
                {
                    selected: false
                },
                dataItem
            )
        )
    );

    const [exportColumns, setExportColumns] = React.useState<Array<any>>(getGridFieldColumns(GridProps.children));
    const [data, setData] = React.useState(defaultData);
    const [dataState, setDataState] = React.useState<State>(props.initialDataState ?? { skip: null });
    const [columnsState, setColumnsState] = React.useState(getDataColumnsTitles(GridProps.children));
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const [collapsedGroup, setCollapsedGroup] = React.useState<GroupExpandDescriptor[]>([]);
    const [total, setTotal] = React.useState(data.length);

    // Updates the configuration settings
    const updateConfiguration = (setting, state) => {
        let defaultValue = defaultConfiguration[setting];
        let newSettings = {
            ...configuration
        };

        // if the property state is "true", use the defaultValue (if it was set initially). This handles the case
        // where "pageable" and "sortable" settings are initially objects
        newSettings[setting] = state ? (defaultValue ? defaultValue : true) : false;
        if (setting === 'pageable') {
            setDataState({ ...dataState, take: state ? 10 : undefined });
        } else if (setting === 'groupable' && !state) {
            setDataState({ ...dataState, group: undefined });
        } else if (setting === 'filterable' && !state) {
            setDataState({ ...dataState, filter: undefined });
        }
        setConfiguration(newSettings);
    };

    // Updates the columns visibility state
    const updateColumns = (setting, state) => {
        let newState = { ...columnsState };
        newState[setting] = state;
        setColumnsState(newState);
    };

    const onDataStateChange = (ev) => {
        setDataState(ev.dataState);
    };

    const onGroupExpandChange = React.useCallback((event: GridGroupExpandChangeEvent) => {
        setCollapsedGroup(event.groupExpand);
    }, []);

    const onSelectionChange = React.useCallback(
        (event: GridSelectionChangeEvent) => {
            if (props.onSelectionChange) {
                props.onSelectionChange(event);
            }
            if (GridProps.onSelectionChange) {
                GridProps.onSelectionChange(event);
            }
            setSelect(event.select);
        },
        [select]
    );

    // All data operations, except the external filter, are handled here
    const finalData = React.useMemo(() => {
        let processedData = data.slice();

        processedData = process(processedData, dataState);
        setTotal(processedData.total);
        generateGroupIds(processedData.data);

        return processedData;
    }, [data, dataState, setDataState]);

    const onHeaderSelectionChange = React.useCallback(
        (event: GridHeaderSelectionChangeEvent) => {
            setSelect(event.select);
        },
        [select]
    );

    const onGroupsExpand = React.useCallback(() => {
        setCollapsedGroup(
            (finalData.data as any[]).reduce<GroupExpandDescriptor[]>((acc, item) => {
                acc.push({
                    field: item.field,
                    value: item.value,
                    expanded: true
                });
                return acc;
            }, [])
        );
    }, [data]);

    const onGroupsCollapse = React.useCallback(() => {
        const allGroups = groupBy(props.data, dataState.group);
        setCollapsedGroup(
            (allGroups as GroupResult[]).reduce<GroupExpandDescriptor[]>((acc, item) => {
                acc.push({
                    field: item.field,
                    value: item.value,
                    expanded: false
                });
                return acc;
            }, [])
        );
    }, [data]);

    const newProps: GridProps = {
        ...props.children.props,
        onHeaderSelectionChange: onHeaderSelectionChange,
        children: null,
        data: finalData,
        onSelectionChange: onSelectionChange,
        onDataStateChange: onDataStateChange,
        ...dataState,
        total: total,
        groupExpand: collapsedGroup,
        onGroupExpandChange: onGroupExpandChange,
        select
    };

    const headerSelectionValue = React.useCallback(() => {
        const selectedItems = Object.values(select).filter(Boolean).length;

        return (
            selectedItems > 0 && finalData.data.length > 0 && selectedItems === getNumberOfItems(finalData.data, select)
        );
    }, [select, finalData.data]);

    const onExternalFilterChange = (ev) => {
        const value = ev.value;
        setFilterValue(ev.value);
        let visibleColumnsFields = {};
        GridProps.children.map((child) => {
            if (
                child.type.displayName === 'KendoReactGridColumn' &&
                columnsState[child.props.title ?? child.props.field]
            ) {
                visibleColumnsFields[child.props.field] = true;
            }
        });

        let newData = defaultData.filter((item) => {
            let match = false;

            for (const property in visibleColumnsFields) {
                if (visibleColumnsFields[property]) {
                    if (
                        getNestedValue(property, item)
                            .toString()
                            .toLocaleLowerCase()
                            .indexOf(value.toLocaleLowerCase()) >= 0
                    ) {
                        match = true;
                    }

                    if (
                        getNestedValue(property, item).toLocaleDateString &&
                        getNestedValue(property, item).toLocaleDateString().indexOf(value) >= 0
                    ) {
                        match = true;
                    }
                }
            }
            return match;
        });
        setData(newData);
    };

    const FilterHighlightCell = React.useCallback(
        (props: GridCustomCellProps) => {
            if (props.rowType === 'data') {
                const value = getNestedValue(props.field, props.dataItem)?.toString();

                if (!value) {
                    return <td {...props.tdProps}>{props.children}</td>;
                }
                if (
                    filterValue &&
                    filterValue.length > 0 &&
                    value.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) >= 0
                ) {
                    const children = highlightSearchTextInReactChildren(props.children, filterValue);
                    return <td {...props.tdProps}>{children}</td>;
                }
            }

            return <td {...props.tdProps}>{props.children}</td>;
        },
        [filterValue]
    );

    const _pdfExport = React.useRef<GridPDFExport | null>(null);
    const exportToPdf = () => {
        if (_pdfExport.current) {
            _pdfExport.current.save();
        }
    };

    const _excelExport = React.useRef<ExcelExport | null>(null);
    const exportToExcel = () => {
        if (_excelExport.current) {
            _excelExport.current.save();
        }
    };

    const hasCollapsed = collapsedGroup.some((g) => g.expanded === false);

    const gridChildren = React.useMemo(() => {
        const toolBar = GridProps.children.find((c) => c.type.displayName === 'KendoReactGridToolbar');
        const gridToolBar = (
            <GridToolbar {...toolBar?.props}>
                {expandCollapseAllButton && configuration.groupable && (
                    <div>
                        <ExpandCollapseButton
                            onClick={hasCollapsed ? onGroupsExpand : onGroupsCollapse}
                            collapse={!hasCollapsed}
                        />
                    </div>
                )}

                {externalFilter && (
                    <div>
                        <ExternalFilter filterValue={filterValue} onChange={onExternalFilterChange} />
                    </div>
                )}

                {toolBar && toolBar.props.children && <div>{toolBar.props.children}</div>}

                <div
                    style={{
                        right: '15px',
                        float: 'right',
                        position: 'absolute',
                        display: 'flex',
                        gap: '8px'
                    }}
                >
                    <div>
                        {excelExportButton && (
                            <Button
                                onClick={exportToExcel}
                                themeColor={TOOLBAR_BUTTON_TYPE}
                                size="small"
                                title={'Export to Excel'}
                                svgIcon={fileExcelIcon}
                            />
                        )}
                    </div>
                    <div>
                        {pdfExportButton && (
                            <Button
                                onClick={exportToPdf}
                                themeColor={TOOLBAR_BUTTON_TYPE}
                                size="small"
                                title={'Export to PDF'}
                                svgIcon={filePdfIcon}
                            />
                        )}
                    </div>
                    <div>
                        {showColumnsConfigurator && <ColumnsButton onChange={updateColumns} options={columnsState} />}
                    </div>

                    <div>
                        {showFeaturesConfigurator && (
                            <ConfiguratorButton onChange={updateConfiguration} options={configuration} />
                        )}
                    </div>
                </div>
            </GridToolbar>
        );

        let children = GridProps.children.map((child, index) => {
            if (child.type.displayName === 'KendoReactGridColumn') {
                if (child.props.columnType === 'checkbox') {
                    return <Column key={index} {...child.props} headerSelectionValue={headerSelectionValue()} />;
                } else if (columnsState[child.props.title ?? child.props.field]) {
                    return <Column {...child.props} key={index} />;
                } else if (!child.props.field) {
                    return <Column {...child.props} key={index} />;
                }
            } else if (child.type.displayName === 'KendoReactGridToolbar') {
                return null;
            } else {
                return child;
            }
        });

        if (props.toolbarSettings) {
            children.push(gridToolBar);
        } else if (toolBar) {
            children.push(toolBar);
        }

        return children;
    }, [GridProps.children, columnsState, configuration, dataState, filterValue, headerSelectionValue, hasCollapsed]);

    const gridRef = React.useRef(null);

    const renderedGridProps = {
        ...newProps,
        ...configuration,
        dataItemKey: props.dataItemKey ?? GridProps.dataItemKey,
        children: gridChildren,
        ref: gridRef
    };

    if (filterHighlights) {
        if (!renderedGridProps.cells) {
            renderedGridProps.cells = {};
        }
        renderedGridProps.cells.data = FilterHighlightCell;
    }

    const GridComponent = <Grid {...renderedGridProps} />;

    return (
        <React.Fragment>
            <GridPDFExport ref={_pdfExport} margin="1cm">
                {GridComponent}
            </GridPDFExport>
            <ExcelExport
                data={finalData}
                ref={_excelExport}
                columns={exportColumns.filter((col) => columnsState[col.title ?? col.field])}
                group={dataState.group}
            />
            {GridComponent}
        </React.Fragment>
    );
};

// ExternalFilter
const ExternalFilter = (props) => {
    return (
        <React.Fragment>
            <span style={{ padding: '5px' }}>Search: </span>
            <span>
                <Input
                    value={props.filterValue ? props.filterValue : ''}
                    onChange={props.onChange}
                    style={{
                        border: '2px solid #ccc',
                        boxShadow: 'inset 0px 0px 0.5px 0px rgba(0,0,0,0.0.1)'
                    }}
                />
            </span>
        </React.Fragment>
    );
};
// Expand/Collapse All Groups button
const ExpandCollapseButton = (props) => {
    return (
        <Button
            onClick={props.onClick}
            themeColor={TOOLBAR_BUTTON_TYPE}
            size="small"
            title={(!props.collapse ? 'Expand' : 'Collapse') + ' all groups'}
            svgIcon={props.collapse ? chevronDoubleDownIcon : chevronDoubleRightIcon}
        ></Button>
    );
};

// Columns show/hide
const ColumnsButton = (props) => {
    return <ConfiguratorButtonBase {...props} icon={columnsIcon} title="Show/Hide Columns" />;
};

// Settings button
const ConfiguratorButton = (props) => {
    return <ConfiguratorButtonBase {...props} icon={gearIcon} title="Settings" />;
};

// Button showing popup with all properties of an object
// props.options is the object with the properties that will be rendered in the checkbox list
// props.icon is the name of the button icon
// props.title sets the title of the button
// props.onChange returns the toggled option/property
const ConfiguratorButtonBase = (props) => {
    const anchor = React.useRef(null);
    const [show, setShow] = React.useState(false);
    const onClick = () => {
        setShow(!show);
    };

    const onChange = (ev) => {
        let setting = ev.target.element.attributes['data-attr'].value;
        props.onChange(setting, ev.value);
    };

    React.useEffect(() => {
        const onMouseDown = (event) => {
            let wrappingEl = document.querySelector('.configurator-wrap-element');
            if (wrappingEl && !wrappingEl.contains(event.target)) {
                setShow(false);
            }
        };

        window.addEventListener('mousedown', onMouseDown);
        return () => window.removeEventListener('mousedown', onMouseDown);
    }, []);

    return (
        <React.Fragment>
            <span ref={anchor} title={props.title}>
                <Button onClick={onClick} themeColor={TOOLBAR_BUTTON_TYPE} svgIcon={props.icon} size="small"></Button>
            </span>
            <Popup
                margin={{ vertical: 10, horizontal: 0 }}
                anchor={anchor.current}
                anchorAlign={{ vertical: 'bottom', horizontal: 'right' }}
                popupAlign={{ vertical: 'top', horizontal: 'right' }}
                show={show}
            >
                <div
                    className="configurator-wrap-element"
                    style={{
                        padding: '10px',
                        backgroundColor: '#fefefe',
                        border: '1px solid #ddd'
                    }}
                >
                    <div style={{ paddingBottom: '5px' }}>{props.title}:</div>
                    <div>
                        {Object.keys(props.options).map((setting, index) => {
                            let checked = props.options[setting] != null && props.options[setting] !== false;
                            return (
                                <div style={{ padding: '3px 5px 5px 0px' }} key={index}>
                                    <div style={{ width: '20px', display: 'inline-block' }}>
                                        <Checkbox value={checked} onChange={onChange} data-attr={setting} />
                                    </div>{' '}
                                    {setting.charAt(0).toUpperCase() + setting.slice(1)}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Popup>
        </React.Fragment>
    );
};
