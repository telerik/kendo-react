import * as React from 'react';
import { Grid, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { getColumns, getData } from './gd-virtualizationUtils';

interface Page {
    skip: number;
    take: number;
}

const App = () => {
    const [page, setPage] = React.useState<Page>({ skip: 0, take: 20 });
    let numberOfColumns: number = 100;
    let numberOfRows: number = 10000;
    const columns = React.useMemo(() => getColumns(numberOfColumns), [numberOfColumns]);

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    return (
        <Grid
            style={{ width: '720px', height: '400px' }}
            columnVirtualization={true}
            scrollable="virtual"
            rowHeight={50}
            data={getData(page.skip, page.take, numberOfRows, numberOfColumns)}
            skip={page.skip}
            take={page.take}
            total={numberOfRows}
            onPageChange={pageChange}
        >
            {columns}
        </Grid>
    );
};

export default App;
