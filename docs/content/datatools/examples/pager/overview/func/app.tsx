import * as React from 'react';
import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import { DemoConfigurator } from './configurator';
import products from './shared-dt-products';

const total: number = products.length;
const pageSizes: number[] = [5, 10, 20];
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
    adaptive: boolean;
}

const initialPageState: PageInterface = {
    skip: 0,
    take: 5,
    buttonCount: 5,
    type: initialType,
    info: true,
    pageSizes: true,
    previousNext: true,
    responsive: true,
    adaptive: true
};

const App = () => {
    const [pageState, setPageState] = React.useState<PageInterface>(initialPageState);

    let { skip, take, ...rest } = pageState;

    const handlePageChange = (event: PageChangeEvent) => {
        const { skip, take } = event;
        setPageState({ ...pageState, skip: skip, take: take });

        console.log(`Page Change: skip ${skip}, take ${take}`);
    };

    console.log(products.slice(skip, skip + take));
    return (
        <React.Fragment>
            <DemoConfigurator onChange={(data: any) => setPageState({ ...pageState, ...data })} values={rest} />
            <Pager
                skip={skip}
                take={take}
                total={total}
                buttonCount={pageState.buttonCount}
                info={pageState.info}
                type={pageState.type}
                pageSizes={pageState.pageSizes ? pageSizes : undefined}
                previousNext={pageState.previousNext}
                responsive={pageState.responsive}
                adaptive={pageState.adaptive}
                onPageChange={handlePageChange}
            />
        </React.Fragment>
    );
};

export default App;
