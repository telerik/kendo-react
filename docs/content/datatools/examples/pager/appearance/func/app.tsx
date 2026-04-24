import * as React from 'react';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import products from './shared-dt-products';

const total: number = products.length;
const pageSizes: number[] = [5, 10, 15, 20];
const sizes = ['small', 'medium', 'large', 'none'];
const initialType: 'numeric' | 'input' = 'numeric';

interface PageInterface {
    skip: number;
    take: number;
    buttonCount: number;
    type: 'numeric' | 'input';
    info: boolean;
    pageSizes: boolean;
    previousNext: boolean;
    responsive: boolean;
}

const initialPageState: PageInterface = {
    skip: 0,
    take: 5,
    buttonCount: 5,
    type: initialType,
    info: true,
    pageSizes: true,
    previousNext: true,
    responsive: true
};

const App = () => {
    const [pageState, setPageState] = React.useState<PageInterface>(initialPageState);

    let { skip, take, ...rest } = pageState;

    const handlePageChange = (event: PageChangeEvent) => {
        const { skip, take } = event;
        setPageState({ ...pageState, skip: skip, take: take });
    };

    return (
        <section className="k-container k-gap-1 k-gap-sm-6">
            <div className="k-row k-col-gap-1 k-col-gap-sm-6 k-row-gap-4">
                <div className="k-col">
                    <Pager
                        id={'small'}
                        size={'small'}
                        skip={skip}
                        take={take}
                        total={total}
                        buttonCount={pageState.buttonCount}
                        info={pageState.info}
                        type={pageState.type}
                        pageSizes={pageState.pageSizes ? pageSizes : undefined}
                        previousNext={pageState.previousNext}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="k-col">
                    <Pager
                        id={'medium'}
                        size={'medium'}
                        skip={skip}
                        take={take}
                        total={total}
                        buttonCount={pageState.buttonCount}
                        info={pageState.info}
                        type={pageState.type}
                        pageSizes={pageState.pageSizes ? pageSizes : undefined}
                        previousNext={pageState.previousNext}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className="k-col">
                    <Pager
                        id={'large'}
                        size={'large'}
                        skip={skip}
                        take={take}
                        total={total}
                        buttonCount={pageState.buttonCount}
                        info={pageState.info}
                        type={pageState.type}
                        pageSizes={pageState.pageSizes ? pageSizes : undefined}
                        previousNext={pageState.previousNext}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
