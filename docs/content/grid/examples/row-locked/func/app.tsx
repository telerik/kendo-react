import * as React from 'react';
import { Grid, GridColumn as Column, GridCellProps, GridCustomCellProps } from '@progress/kendo-react-grid';
import { SvgIcon, classNames } from '@progress/kendo-react-common';
import { pinIcon, unpinIcon } from '@progress/kendo-svg-icons';
import products from './gd-products';

import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
import { Product } from './gd-interfaces';

interface LockRowCellProps extends GridCustomCellProps {
    onClick: (item: Product) => void;
    getTop: (item: Product) => number;
    getBottom: (item: Product) => number;
}

const rowHeight: number = 50;

const LockRowCell = (props: LockRowCellProps) => {
    const styles = { ...props.style };

    let stickyClassName;
    if (props.dataItem.locked) {
        styles.top = props.getTop(props.dataItem);
        styles.bottom = props.getBottom(props.dataItem);
        stickyClassName = 'k-grid-row-sticky';
    }
    return (
        <td
            {...props.tdProps}
            className={classNames(props.tdProps?.className, stickyClassName)}
            style={{ textAlign: 'center', ...styles }}
            onClick={() => props.onClick(props.dataItem)}
        >
            {props.dataItem.locked ? <SvgIcon icon={pinIcon} /> : <SvgIcon icon={unpinIcon} />}
        </td>
    );
};

const filterDescriptorLocked: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'locked', operator: 'eq', value: true }]
};

const MyLockedCell = (props: LockRowCellProps) => (
    <LockRowCell {...props} onClick={props.onClick} getTop={props.getTop} getBottom={props.getBottom} />
);

const App = () => {
    const [data, setData] = React.useState<Product[]>(products);
    const [allLockedRows, setAllLockedRows] = React.useState<Product[]>(filterBy(products, filterDescriptorLocked));

    const CustomCell = (props: GridCustomCellProps) => {
        if (props.dataItem.locked) {
            return (
                <td
                    {...props.tdProps}
                    className={classNames(props.tdProps?.className, 'k-grid-row-sticky')}
                    style={{
                        top: getTop(props.dataItem),
                        bottom: getBottom(props.dataItem),
                        ...props.style
                    }}
                >
                    {props.children}
                </td>
            );
        }
        return <td {...props.tdProps}>{props.children}</td>;
    };

    const getTop = (dataItem: Product) => {
        const indexOfLockedItem = allLockedRows.findIndex((item) => dataItem.ProductID === item.ProductID);
        return indexOfLockedItem * rowHeight;
    };

    const getBottom = (dataItem: Product) => {
        const indexOfLockedItem = allLockedRows.findIndex((item) => dataItem.ProductID === item.ProductID);
        const numberOfLockedRows = allLockedRows.length;
        return (numberOfLockedRows - indexOfLockedItem - 1) * rowHeight;
    };

    const handleLockRowChange = (dataItem: Product) => {
        const itemIndex = data.findIndex((item) => item.ProductID === dataItem.ProductID);
        const newData = [...data];
        newData[itemIndex] = { ...newData[itemIndex], locked: !newData[itemIndex].locked };
        setData(newData);
        setAllLockedRows(filterBy(newData, filterDescriptorLocked));
    };

    return (
        <div>
            <Grid
                style={{ height: 400 }}
                data={data}
                reorderable={true}
                cells={{
                    data: CustomCell
                }}
                rowHeight={rowHeight}
                scrollable={'scrollable'}
            >
                <Column
                    field="locked"
                    cells={{
                        data: (props) => (
                            <MyLockedCell
                                {...props}
                                onClick={handleLockRowChange}
                                getTop={getTop}
                                getBottom={getBottom}
                            />
                        )
                    }}
                    title=" "
                    width="65px"
                    locked={true}
                />
                <Column field="ProductID" title="ID" width="75px" />
                <Column field="ProductName" title="Name" width="350px" />
                <Column field="Category.CategoryName" title="CategoryName" width="250px" />
                <Column field="UnitPrice" title="Price" width="190px" />
                <Column field="UnitsInStock" title="In stock" width="190px" />
            </Grid>
        </div>
    );
};

export default App;
