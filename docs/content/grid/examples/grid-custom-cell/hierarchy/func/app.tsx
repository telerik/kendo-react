import * as React from 'react';
import { Grid, GridColumn, GridCustomCellProps } from '@progress/kendo-react-grid';
import { orders } from './gd-orders';
const DATA_ITEM_KEY = 'orderID';

interface CustomCellProps extends GridCustomCellProps {
    color: string;
    backgroundColor?: string;
}

const CustomCell = (props: CustomCellProps) => {
    return (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                backgroundColor: props.color
            }}
        >
            {props.children}
        </td>
    );
};
const MyHeaderCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#18605d" />; //darkgreen

const MyFooterCustomCell = (props: GridCustomCellProps) => (
    <CustomCell {...props} color="#fac390" backgroundColor={'skyblue'} />
);

const HierarchyMyHeaderCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#4a9d93" />; //midgreen
const HierarchyMyDataCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#a1cec5" />; //lightblue
const HierarchyMyFooterCustomCell = (props: GridCustomCellProps) => <CustomCell {...props} color="#90ab86" />; //green
const DetailComponent = (props) => {
    const dataItem = props.dataItem;
    return (
        <div>
            <section
                style={{
                    width: '200px',
                    float: 'left'
                }}
            >
                <p>
                    <strong>Street:</strong> {dataItem.shipAddress.street}
                </p>
                <p>
                    <strong>City:</strong> {dataItem.shipAddress.city}
                </p>
                <p>
                    <strong>Country:</strong> {dataItem.shipAddress.country}
                </p>
                <p>
                    <strong>Postal Code:</strong> {dataItem.shipAddress.postalCode}
                </p>
            </section>
            <Grid
                style={{
                    width: '500px'
                }}
                data={dataItem.details}
            />
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Grid
                style={{
                    height: '700px'
                }}
                dataItemKey={DATA_ITEM_KEY}
                data={orders}
                autoProcessData={true}
                groupable={{ footer: 'visible' }}
                defaultGroup={[
                    {
                        field: 'customerID'
                    }
                ]}
                sortable={{ mode: 'single' }}
                defaultSort={[
                    {
                        field: 'orderDate',
                        dir: 'desc'
                    }
                ]}
                detail={DetailComponent}
                cells={{
                    group: {
                        groupHeader: MyHeaderCustomCell,
                        groupFooter: MyFooterCustomCell
                    },
                    hierarchy: {
                        groupHeader: HierarchyMyHeaderCustomCell,
                        data: HierarchyMyDataCustomCell,
                        groupFooter: HierarchyMyFooterCustomCell
                    }
                }}
            >
                <GridColumn field="customerID" width="200px" />
                <GridColumn field="orderDate" format="{0:D}" width="300px" />
                <GridColumn field="shipName" width="280px" />
                <GridColumn field="freight" width="200px" />
                <GridColumn field="shippedDate" format="{0:D}" width="300px" />
                <GridColumn field="employeeID" width="200px" />
            </Grid>
        </div>
    );
};

export default App;
