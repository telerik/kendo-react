import * as React from 'react';
import { Grid, GridColumn as Column, GridCellProps, GridCustomCellProps } from '@progress/kendo-react-grid';
import { SvgIcon } from '@progress/kendo-react-common';
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
    let styles = props.style;
    let classNames = props.className;
    if (props.dataItem.locked) {
        styles!.top = props.getTop(props.dataItem);
        styles!.bottom = props.getBottom(props.dataItem);
        classNames += ' k-grid-row-sticky';
    }
    return (
        <td
            {...props.tdProps}
            style={{ textAlign: 'center', ...styles }}
            className={classNames}
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
        const extraProps: any = {};
        if (props.dataItem.locked) {
            extraProps.style = {
                top: getTop(props.dataItem),
                bottom: getBottom(props.dataItem),
                ...props.style
            };
            extraProps.className = props.className + ' k-grid-row-sticky';
        }
        return (
            <td {...props.tdProps} {...extraProps}>
                {props.children}
            </td>
        );
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
        let itemIndex = data.findIndex((item) => item.ProductID === dataItem.ProductID);
        let newData = [...data];
        newData[itemIndex].locked = !newData[itemIndex].locked;
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
