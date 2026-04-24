import React from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { getColumns, getRows } from './get-data';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 100 };

// Predefined row count options
const rowOptions = [
    { text: '100 rows', value: 100 },
    { text: '1,000 rows', value: 1000 },
    { text: '5,000 rows', value: 5000 },
    { text: '10,000 rows', value: 10000 },
    { text: '100,000 rows', value: 100000 }
];

// Predefined column count options
const columnOptions = [
    { text: '10 columns', value: 10 },
    { text: '20 columns', value: 20 },
    { text: '50 columns', value: 50 },
    { text: '100 columns', value: 100 },
    { text: '150 columns', value: 150 },
    { text: '200 columns', value: 200 }
];

// Scrolling mode options
const scrollModeOptions = [
    { text: 'Virtual Scrolling', value: 'virtual' },
    { text: 'Paging', value: 'paging' },
    { text: 'Virtual + Paging', value: 'virtualPaging' }
];

export default function Virtual() {
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [data, setData] = React.useState<any[]>([]);
    const [rows, setRows] = React.useState<number>(10000);
    const [colTotals, setColTotals] = React.useState<number>(20);
    const [selectedRowOption, setSelectedRowOption] = React.useState(rowOptions[1]);
    const [selectedColumnOption, setSelectedColumnOption] = React.useState(columnOptions[1]);
    const [cols, setCols] = React.useState<{ field: string }[] | []>([]);
    const [scrollMode, setScrollMode] = React.useState<'virtual' | 'paging' | 'virtualPaging'>('virtual');

    // Update rows when dropdown selection changes
    React.useEffect(() => {
        setRows(selectedRowOption.value);
    }, [selectedRowOption]);

    // Update columns when dropdown selection changes
    React.useEffect(() => {
        setColTotals(selectedColumnOption.value);
    }, [selectedColumnOption]);

    // Generate data when rows or columns change
    React.useEffect(() => {
        const generatedRows = getRows(rows, colTotals);
        const generatedColumns = getColumns(colTotals);
        setData(generatedRows);
        setCols(generatedColumns);
    }, [rows, colTotals]);

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const colFormat = (c: any): string | undefined => {
        switch (c.field) {
            case 'startDate':
                return '{0:dd/mm/yyyy}';
            case 'price':
                return '{0:n2}';
            default:
                return;
        }
    };

    return (
        <div>
            <div style={{ margin: '-30px -30px 30px -30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                        Configurator
                    </span>
                </div>
                <div className="example-config">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Grid Mode:</Label>
                            <div style={{ marginTop: '8px' }}>
                                {scrollModeOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            marginBottom: '4px'
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="scrollMode"
                                            value={option.value}
                                            checked={scrollMode === option.value}
                                            onChange={(e) =>
                                                setScrollMode(e.target.value as 'virtual' | 'paging' | 'virtualPaging')
                                            }
                                            style={{ marginRight: '8px' }}
                                        />
                                        {option.text}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Rows:</Label>
                            <DropDownList
                                style={{ marginTop: '8px' }}
                                value={selectedRowOption}
                                onChange={(e) => setSelectedRowOption(e.value)}
                                data={rowOptions}
                                textField="text"
                                dataItemKey="value"
                            />
                        </div>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Columns:</Label>
                            <DropDownList
                                style={{ marginTop: '8px' }}
                                value={selectedColumnOption}
                                onChange={(e) => setSelectedColumnOption(e.value)}
                                data={columnOptions}
                                textField="text"
                                dataItemKey="value"
                            />
                        </div>
                    </div>
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div style={{ color: '#666' }}>
                            Current data: {data.length.toLocaleString()} rows × {colTotals} columns (
                            {(() => {
                                if (scrollMode === 'virtual') return 'Virtual Scrolling';
                                if (scrollMode === 'paging') return 'Paging';
                                return 'Virtual Scrolling + Paging';
                            })()}
                            )
                        </div>
                    </div>
                </div>
            </div>

            {data.length > 0 && (
                <Grid
                    style={{ height: 450 }}
                    autoProcessData={scrollMode === 'paging'}
                    navigatable={true}
                    filterable={true}
                    sortable={true}
                    scrollable={scrollMode === 'virtual' || scrollMode === 'virtualPaging' ? 'virtual' : 'scrollable'}
                    pageable={scrollMode === 'paging' || scrollMode === 'virtualPaging'}
                    data={scrollMode === 'paging' ? data : data.slice(page.skip, page.skip + page.take)}
                    pageSize={100}
                    total={data.length}
                    skip={scrollMode === 'paging' ? undefined : page.skip}
                    take={scrollMode === 'paging' ? undefined : page.take}
                    onPageChange={pageChange}
                >
                    {cols.map((i) => (
                        <GridColumn
                            key={i.field}
                            field={i.field}
                            format={colFormat(i)}
                            filter={i.field === 'startDate' ? 'date' : undefined}
                            width="160px"
                        />
                    ))}
                </Grid>
            )}
        </div>
    );
}
