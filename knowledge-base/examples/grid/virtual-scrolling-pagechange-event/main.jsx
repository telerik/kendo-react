import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Skeleton } from '@progress/kendo-react-indicators';
const App = () => {
  const requestInProgress = React.useRef(false);
  const pageSize = 20;
  const total = 830;
  const baseUrl = `https://demos.telerik.com/kendo-ui/service-v4/odata/Orders?$count=true&$top=60&$skip=`;
  const init = {
    method: 'GET',
    accept: 'application/json',
    headers: {},
  };
  const [orders, setOrders] = React.useState([]);
  const [page, setPage] = React.useState({
    skip: 0,
    take: pageSize,
  });
  const requestIfNeeded = (skip) => {
    for (let i = skip; i < skip + pageSize && i < orders.length; i++) {
      if (orders[i].OrderID === undefined) {
        // request data only if not already fetched
        requestData(skip);
        return;
      }
    }
  };
  const requestData = (skipParameter) => {
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
                Index: i,
              }));
        data.forEach((order, i) => {
          newOrders[i + skip] = {
            Index: i + skip,
            ...order,
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

  const [gridScrollLeft, setGridScrollLeft] = React.useState(0);
  const [gridScrollTop, setGridScrollTop] = React.useState(0);
  const pageChange = (event) => {
    if (gridScrollLeft != event.nativeEvent.target.scrollLeft) {
      //console.log('horizontal scroll');
      setGridScrollLeft(event.nativeEvent.target.scrollLeft);
    }
    if (gridScrollTop != event.nativeEvent.target.scrollTop) {
      //console.log('vertical scroll');
      setGridScrollTop(event.nativeEvent.target.scrollTop);
      requestIfNeeded(event.page.skip);
      setPage(event.page);
    }
  };
  const loadingCell = (tdElement, props) => {
    const field = props.field || '';
    if (props.dataItem[field] === undefined) {
      // shows loading cell if no data
      return (
        <td>
          {' '}
          <Skeleton
            shape={'text'}
            style={{
              width: '100%',
            }}
          />
        </td>
      );
    } // default rendering for this cell

    return tdElement;
  };
  return (
    <Grid
      style={{
        height: '440px',
      }}
      rowHeight={40}
      data={orders.slice(page.skip, page.skip + 20)}
      pageSize={pageSize}
      total={total}
      skip={page.skip}
      scrollable={'virtual'}
      onPageChange={pageChange}
      cellRender={loadingCell}
      dataItemKey={'OrderID'}
    >
      <Column field="Index" title="Index" width="170px" />
      <Column field="OrderID" title="Order Id" width="200px" />
      <Column field="ShipCountry" title="Ship Country" width="200px" />
      <Column field="ShipName" title="Ship Name" width="200px" />
    </Grid>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
