import * as React from 'react';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';

interface PageInterface {
    skip: number;
    take: number;
}

const App = () => {
    const [page, setPage] = React.useState<PageInterface>({ skip: 0, take: 5 });

    const handlePageChange = (event: PageChangeEvent) => {
        setPage({ skip: event.skip, take: event.take });
    };

    return (
        <Pager
            style={{ direction: 'rtl' }}
            skip={page.skip}
            take={page.take}
            total={200}
            onPageChange={handlePageChange}
            buttonCount={5}
            info={true}
            previousNext={true}
            type="numeric"
            pageSizes={[5, 10, 15, 20]}
        />
    );
};

export default App;
