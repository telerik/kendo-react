import * as React from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';

interface Page {
    skip: number;
    take: number;
}

const numberOfColumns: number = 100;
const numberOfRows: number = 1000;
const columns: Array<any> = (() => {
    const cols: Array<any> = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        cols.push(<GridColumn field={'Field-' + c.toString()} width={150} />);
    }
    return cols;
})();

const getData = (skip: number, take: number) => {
    const pages: Array<any> = [];
    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
        const row: any = {};
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        pages.push(row);
    }
    return pages;
};

const data = getData(0, numberOfRows);

const App = () => {
    const [page, setPage] = React.useState<Page>({ skip: 0, take: 20 });

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    return (
        <Grid
            style={{ width: '720px', height: '400px' }}
            columnVirtualization={true}
            scrollable="virtual"
            rowHeight={50}
            data={data.slice(page.skip, page.skip + page.take)}
            skip={page.skip}
            take={page.take}
            total={numberOfRows}
            resizable={true}
            onPageChange={pageChange}
        >
            {columns}
        </Grid>
    );
};

export default App;
