import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { Loader } from '@progress/kendo-react-indicators';

const App = () => {
    const [loading, setLoading] = React.useState(false);
    const _export = React.useRef<ExcelExport>(null);

    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(15);
    const numberOfColumns = 100;
    const numberOfRows = 2000;

    const columns = (() => {
        const cols: Array<any> = [];
        for (let c = 1; c <= numberOfColumns; c++) {
            cols.push(<GridColumn field={'Field-' + c.toString()} width={150} />);
        }
        return cols;
    })();

    const handleClick = () => {
        if (!_export.current) {
            return;
        }
        setLoading(true);
        _export.current.save(generateData(0, numberOfRows));
    };

    const handleExport = () => {
        setLoading(false);
    };

    const generateData = (skip, take) => {
        const page: Array<any> = [];
        for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
            const row = {};
            for (let c = 1; c <= numberOfColumns; c++) {
                row['Field-' + c] = 'R' + r + ':C' + c;
            }
            page.push(row);
        }
        return page;
    };

    const handlePageChange = (event: GridPageChangeEvent) => {
        if (event) {
            setSkip(event.page.skip);
            setTake(event.page.take);
        }
    };

    return (
        <div>
            <Button type="button" onClick={handleClick}>
                EXPORT
            </Button>
            <div style={{ position: 'relative' }}>
                <ExcelExport ref={_export} onExportComplete={handleExport}>
                    <Grid
                        rowHeight={50}
                        style={{ height: '500px' }}
                        className={loading ? 'k-disabled' : ''}
                        columnVirtualization={true}
                        scrollable="virtual"
                        data={generateData(skip, take)}
                        skip={skip}
                        take={take}
                        total={numberOfRows}
                        onPageChange={handlePageChange}
                    >
                        {columns}
                    </Grid>
                </ExcelExport>
                {loading && (
                    <Loader
                        size={'large'}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                        type={'infinite-spinner'}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
