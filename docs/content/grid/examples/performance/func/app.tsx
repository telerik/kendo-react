import React from 'react';
import { Grid, GridColumn, GridDataStateChangeEvent, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { getColumns, getRows } from './get-data';
import { DataResult, State, process } from '@progress/kendo-data-query';
import { NumericTextBox, Slider, SliderLabel } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 20 };

// Predefined row count options
const rowOptions = [
    { text: '100 rows', value: 100 },
    { text: '5,000 rows', value: 5000 },
    { text: '50,000 rows', value: 50000 },
    { text: '100,000 rows', value: 100000 }
];

export default function Virtual() {
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [data, setData] = React.useState<any[]>([]);
    const [rows, setRows] = React.useState<number>(1000);
    const [colTotals, setColTotals] = React.useState<number>(50);
    const [selectedRowOption, setSelectedRowOption] = React.useState(rowOptions[0]);
    const [dataState, setDataState] = React.useState<State>({});
    const [cols, setCols] = React.useState<{ field: string }[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    // Update rows when dropdown selection changes
    React.useEffect(() => {
        setRows(selectedRowOption.value);
    }, [selectedRowOption]);

    React.useMemo(() => {
        const generatedRows = getRows(rows, colTotals);
        const generatedColumns = getColumns(colTotals);
        setData(generatedRows);
        setCols(generatedColumns);
    }, [rows, colTotals]);

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const loadHugeData = async () => {
        setLoading(true);
        const startTime = performance.now();

        // Generate 1 million rows
        const hugeData = getRows(1000000, colTotals);
        const hugeColumns = getColumns(colTotals);

        setData(hugeData);
        setCols(hugeColumns);
        setRows(1000000);

        const endTime = performance.now();
        const loadTime = Math.round(endTime - startTime);

        setLoading(false);
        alert(`Loaded 1,000,000 rows in ${loadTime}ms!`);
    };

    const updatedData = React.useMemo(() => {
        return {
            ...(process(data, dataState) as DataResult),
            data: process(data, dataState).data.map((item: any) => ({ ...item }))
        };
    }, [data]);

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
            <div style={{ marginBottom: '20px' }}>
                <Button themeColor="primary" onClick={loadHugeData} disabled={loading}>
                    {loading ? 'Loading...' : 'Load 1,000,000 Rows (Performance Test)'}
                </Button>
            </div>

            {/* Configurator */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Rows:</label>
                    <DropDownList
                        data={rowOptions}
                        textField="text"
                        dataItemKey="value"
                        value={selectedRowOption}
                        onChange={(e) => setSelectedRowOption(e.value)}
                        style={{ width: '150px' }}
                    />
                </div>
                <div style={{ minWidth: '300px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Columns: {colTotals}
                    </label>
                    <Slider
                        value={colTotals}
                        onChange={(e) => setColTotals(e.value)}
                        min={20}
                        max={200}
                        step={20}
                        style={{ width: '300px' }}
                    >
                        <SliderLabel position={20}>20</SliderLabel>
                        <SliderLabel position={100}>100</SliderLabel>
                        <SliderLabel position={200}>200</SliderLabel>
                    </Slider>
                </div>
            </div>

            {/* Data info */}
            <div style={{ marginBottom: '10px', color: '#666' }}>
                Current data: {data.length.toLocaleString()} rows × {colTotals} columns
            </div>

            <hr />
            <br />
            {data.length > 0 && (
                <Grid
                    style={{ height: 600 }}
                    autoProcessData={true}
                    navigatable={true}
                    filterable={true}
                    sortable={true}
                    scrollable={'virtual'}
                    data={updatedData.data.slice(page.skip, page.skip + page.take)}
                    pageSize={20}
                    total={data.length}
                    skip={page.skip}
                    take={page.take}
                    onPageChange={pageChange}
                >
                    {cols.map((i) => (
                        <GridColumn
                            key={i.field}
                            field={i.field}
                            format={colFormat(i)}
                            filter={i.field === 'startDate' ? 'date' : undefined}
                            cells={
                                i.field === 'description'
                                    ? {
                                          data: (props) => <td {...props.tdProps}>Template: {props.children}</td>
                                      }
                                    : undefined
                            }
                            width="160px"
                        />
                    ))}
                </Grid>
            )}
        </div>
    );
}
