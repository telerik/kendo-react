import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const numberOfColumns = 100;

const numberOfRows = 1000;

const columns = (() => {
    const cols: any[] = [];
    for (let c = 1; c <= numberOfColumns; c++) {
        cols.push(
            <GridColumn
                hidden={c % 2 === 1 ? true : false}
                media={c === 6 ? '(min-width: 800px)' : undefined}
                field={'Field-' + c.toString()}
                width={150}
            />
        );
    }
    return cols;
})();

const getData = (skip, take) => {
    const pages: object[] = [];
    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
        const row = {};
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        pages.push(row);
    }
    return pages;
};

const data = getData(0, numberOfRows);

const App = () => {
    const [page, setPage] = React.useState({
        skip: 0,
        take: 20,
    });
    const pageChange = (event) => {
        setPage(event.page);
    };
    return (
        <Grid
            style={{
                height: '400px',
            }}
            columnVirtualization={true}
            scrollable="virtual"
            rowHeight={50}
            data={data.slice(page.skip, page.skip + page.take)}
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
