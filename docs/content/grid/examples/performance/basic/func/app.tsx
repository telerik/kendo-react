import React from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { getColumns, getRows, generateLargeDataset } from './get-data';
import { DataResult, process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-react-buttons';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 20 };

export default function Basic() {
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [data, setData] = React.useState<any[]>([]);
    const [cols, setCols] = React.useState<{ field: string }[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [generating, setGenerating] = React.useState<boolean>(false);
    const [generatedData, setGeneratedData] = React.useState<any[] | null>(null);
    const [lastGenerationTime, setLastGenerationTime] = React.useState<number | null>(null);
    const [showMotivationalMessage, setShowMotivationalMessage] = React.useState<boolean>(false);

    React.useEffect(() => {
        const generatedRows = getRows(1000, 10);
        const generatedColumns = getColumns(10);
        setData(generatedRows);
        setCols(generatedColumns);
    }, []);

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const generateMillionRows = async () => {
        setGenerating(true);
        setShowMotivationalMessage(false); // Reset message when generating new data
        try {
            // Use setTimeout to allow UI to update
            setTimeout(() => {
                const result = generateLargeDataset(1000000);
                setGeneratedData(result.data);
                setLastGenerationTime(result.generationTime);
                setGenerating(false);
            }, 100);
        } catch (error) {
            console.error('Error generating data:', error);
            setGenerating(false);
            alert('Error generating data. Please try again.');
        }
    };

    const loadGeneratedData = () => {
        if (!generatedData) {
            alert('Please generate data first by clicking the "Generate 1,000,000 Rows" button.');
            return;
        }

        setLoading(true);
        const startTime = performance.now();

        // Use setTimeout to simulate async loading and allow UI updates
        setTimeout(() => {
            // Define columns to match the generated data structure
            const largeDataColumns = [
                { field: 'id' },
                { field: 'name' },
                { field: 'price' },
                { field: 'startDate' },
                { field: 'unitsInStock' },
                { field: 'discontinued' },
                { field: 'description' },
                { field: 'column-7' },
                { field: 'column-8' },
                { field: 'column-9' }
            ];

            setData(generatedData);
            setCols(largeDataColumns);
            const endTime = performance.now();
            const loadTime = Math.round(endTime - startTime);

            setLoading(false);
            setShowMotivationalMessage(true);
        }, 100);
    };

    const updatedData = React.useMemo(() => {
        return {
            ...(process(data, {}) as DataResult),
            data: process(data, {}).data.map((item: any) => ({ ...item }))
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
            {/* Instructions */}
            <div
                style={{
                    marginBottom: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '4px'
                }}
            >
                <h4 style={{ margin: '0 0 10px 0', color: '#495057' }}>Performance Test Instructions</h4>
                <p style={{ margin: '0 0 10px 0', color: '#6c757d' }}>
                    This demo tests Grid performance with large datasets. Follow these steps:
                </p>
                <ol style={{ margin: '0', paddingLeft: '20px', color: '#6c757d' }}>
                    <li>
                        <strong>First:</strong> Click "Generate 1,000,000 Rows" to create the dataset in memory
                    </li>
                    <li>
                        <strong>Then:</strong> Click "Load 1,000,000 Rows" to load the data into the Grid
                    </li>
                </ol>
            </div>
            {showMotivationalMessage && data.length >= 1000000 && (
                <div
                    style={{
                        margin: '20px 0',
                        padding: '20px',
                        backgroundColor: '#d4edda',
                        border: '2px solid #c3e6cb',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}
                >
                    <p style={{ margin: '0', color: '#155724', fontSize: '1.1em' }}>
                        <strong>Wow!</strong> You have just loaded <strong>{data.length.toLocaleString()}</strong>{' '}
                        records in the Grid and you barely blinked!
                    </p>
                </div>
            )}

            {/* Performance Test Buttons */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Button
                    themeColor="primary"
                    onClick={generateMillionRows}
                    disabled={generating}
                    style={{ minWidth: '200px' }}
                >
                    {generating ? 'Generating...' : 'Generate 1,000,000 Rows'}
                </Button>
                <Button
                    themeColor="success"
                    onClick={loadGeneratedData}
                    disabled={loading || !generatedData}
                    style={{ minWidth: '200px' }}
                >
                    {loading ? 'Loading...' : 'Load 1,000,000 Rows'}
                </Button>
                {generatedData && (
                    <span style={{ color: '#28a745', fontSize: '0.9em' }}>
                        ✓ {generatedData.length.toLocaleString()} rows ready
                    </span>
                )}
            </div>

            <hr />
            <br />
            {data.length > 0 && (
                <Grid
                    style={{ height: 450 }}
                    autoProcessData={true}
                    navigatable={true}
                    scrollable={'virtual'}
                    data={updatedData.data}
                    onPageChange={pageChange}
                    rowHeight={15}
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
