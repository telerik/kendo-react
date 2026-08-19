import * as React from 'react';
import { Grid, GridColumn as Column, GridPageChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Skeleton } from '@progress/kendo-react-indicators';
import { Order } from './gd-interfaces';

const App = () => {
    const requestInProgress = React.useRef(false);
    const debounceRef = React.useRef<number | undefined>(undefined);
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

    const requestData = React.useCallback(
        (skipParameter: number) => {
            if (requestInProgress.current) {
                return;
            }

            requestInProgress.current = true;
            const skip = Math.max(skipParameter - pageSize, 0);

            fetch(baseUrl + skip, init)
                .then((response) => response.json())
                .then((json) => {
                    requestInProgress.current = false;
                    const data = json['value'];
                    const newOrders =
                        orders.length === total
                            ? [...orders]
                            : new Array(total).fill({}).map((_, index) => ({
                                  Index: index
                              }));

                    data.forEach((order, index) => {
                        newOrders[index + skip] = {
                            Index: index + skip,
                            ...order
                        };
                    });

                    setOrders(newOrders);
                });
        },
        [orders]
    );

    const requestIfNeeded = React.useCallback(
        (skip: number) => {
            for (let index = skip; index < skip + pageSize && index < orders.length; index++) {
                if (orders[index].OrderID === undefined) {
                    requestData(skip);
                    return;
                }
            }
        },
        [orders, pageSize, requestData]
    );

    React.useEffect(() => {
        requestIfNeeded(page.skip);
    }, [page.skip, requestIfNeeded]);

    React.useEffect(() => {
        requestData(0);
    }, [requestData]);

    React.useEffect(() => {
        return () => {
            if (debounceRef.current !== undefined) {
                window.clearTimeout(debounceRef.current);
            }
        };
    }, []);

    const pageChange = (event: GridPageChangeEvent) => {
        if (debounceRef.current !== undefined) {
            window.clearTimeout(debounceRef.current);
        }

        const nextPage = event.page;

        debounceRef.current = window.setTimeout(() => {
            requestIfNeeded(nextPage.skip);
            setPage(nextPage);
        }, 150);
    };

    const LoadingCell = (props: GridCustomCellProps) => {
        const field = props.field || '';

        if (props.dataItem[field] === undefined) {
            return (
                <td {...props.tdProps}>
                    <Skeleton shape={'text'} style={{ width: '100%' }} />
                </td>
            );
        }

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