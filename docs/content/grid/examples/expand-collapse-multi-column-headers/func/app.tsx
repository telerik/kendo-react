import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { SvgIcon } from '@progress/kendo-react-common';
import { chevronRightIcon, chevronLeftIcon } from '@progress/kendo-svg-icons';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const App = () => {
    const [expandedColumnsState, setExpandedColumnsState] = React.useState({
        'Product Information': true,
        Category: true
    });

    const CollapsableHeaderCell = React.useCallback(
        (props) => {
            let currentState = expandedColumnsState[props.title];
            const onClick = (ev) => {
                let newState = { ...expandedColumnsState };
                newState[props.title] = !currentState;
                ev.preventDefault();
                setExpandedColumnsState(newState);
            };
            console.log(props);
            return (
                <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
                    {props.title}
                    <SvgIcon
                        style={{ cursor: 'pointer' }}
                        onClick={onClick}
                        icon={expandedColumnsState[props.title] ? chevronRightIcon : chevronLeftIcon}
                    />
                </HeaderThElement>
            );
        },
        [expandedColumnsState, setExpandedColumnsState]
    );
    return (
        <Grid
            style={{
                height: '420px'
            }}
            resizable={true}
            reorderable={true}
            data={products.slice(0, 10)}
        >
            <Column field="ProductID" title="ID" width={40} resizable={false} />

            {expandedColumnsState['Product Information'] != true ? (
                <Column title="Product Information" cells={{ headerCell: CollapsableHeaderCell }}>
                    <Column field="ProductName" width={200} title="Name" />
                    <Column field="UnitPrice" width={100} title="Price" />
                    <Column field="UnitsInStock" width={100} title="In Stock" />
                </Column>
            ) : (
                <Column
                    title="Product Information"
                    cells={{ headerCell: CollapsableHeaderCell }}
                    children={[<Column field="ProductName" width={200} title="Name" />]}
                />
            )}
            {expandedColumnsState['Category'] != true ? (
                <Column title="Category" cells={{ headerCell: CollapsableHeaderCell }}>
                    <Column field="Category.CategoryName" title="Name" />
                    <Column field="Category.Description" title="Description" />
                </Column>
            ) : (
                <Column
                    title="Category"
                    cells={{ headerCell: CollapsableHeaderCell }}
                    children={[<Column field="Category.CategoryName" title="Name" />]}
                />
            )}
        </Grid>
    );
};

export default App;
