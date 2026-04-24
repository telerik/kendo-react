import * as React from 'react';
import { Grid, GridColumn as Column, GridPageChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Skeleton } from '@progress/kendo-react-indicators';
import { Order } from './gd-interfaces';

const App = () => {
    const requestInProgress = React.useRef(false);
    const pageSize = 25;
    const total = 830;
    const baseUrl = `https://demos.telerik.com/service/v2/odata/Orders?$count=true&$top=60&$skip=`;
    const init = {
        method: 'GET',
        accept: 'application/json',
        headers: {}
    };
    const [orders, setOrders] = React.useState<Order[]>([]);
    const [page, setPage] = React.useState({
        skip: 0,
        take: pageSize
    });

    const requestIfNeeded = (skip: number) => {
        for (let i = skip; i < skip + pageSize && i < orders.length; i++) {
            if (orders[i].OrderID === undefined) {
                // request data only if not already fetched
                requestData(skip);
                return;
            }
        }
    };

    const requestData = (skipParameter: number) => {
        if (requestInProgress.current) {
            // perform only one request at a time
            return;
        }
        requestInProgress.current = true;
        const skip = Math.max(skipParameter - pageSize, 0); // request the prev page as well
        fetch(baseUrl + skip, init)
            .then((response) => response.json())
            .then((json) => {
                requestInProgress.current = false;
                const data = json['value'];
                const newOrders =
                    orders.length === total
                        ? [...orders]
                        : new Array(total).fill({}).map((e, i) => ({
                              Index: i
                          }));
                data.forEach((order, i) => {
                    newOrders[i + skip] = {
                        Index: i + skip,
                        ...order
                    };
                });
                setOrders(newOrders);
            });
    };

    React.useEffect(() => {
        requestIfNeeded(page.skip);
    }, [orders]);

    React.useEffect(() => {
        // request the first page on initial load
        requestData(0);
    }, []);

    const pageChange = (event: GridPageChangeEvent) => {
        requestIfNeeded(event.page.skip);
        setPage(event.page);
    };

    const LoadingCell = (props: GridCustomCellProps) => {
        const field = props.field || '';

        if (props.dataItem[field] === undefined) {
            // shows loading cell if no data
            return (
                <td {...props.tdProps}>
                    {' '}
                    <Skeleton
                        shape={'text'}
                        style={{
                            width: '100%'
                        }}
                    />
                </td>
            );
        } // default rendering for this cell

        return <td {...props.tdProps}>{props.children}</td>;
    };

    return (
        <Grid
            style={{
                height: '440px'
            }}
            rowHeight={50}
            data={orders.slice(page.skip, page.skip + pageSize)}
            pageSize={pageSize}
            total={total}
            skip={page.skip}
            scrollable={'virtual'}
            onPageChange={pageChange}
            cells={{ data: LoadingCell }}
            dataItemKey={'OrderID'}
        >
            <Column field="Index" title="Index" width="100px" />
            <Column field="OrderID" title="Order Id" width="100px" />
            <Column field="ShipCountry" title="Ship Country" />
            <Column field="ShipName" title="Ship Name" />
        </Grid>
    );
};

export default App;
