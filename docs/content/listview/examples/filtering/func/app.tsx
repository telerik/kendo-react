import * as React from 'react';
import { ListView, ListViewItemProps } from '@progress/kendo-react-listview';
import { Card, CardHeader, CardTitle, CardImage, CardSubtitle, CardBody } from '@progress/kendo-react-layout';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    BooleanFilter,
    FilterChangeEvent
} from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';

import products from './shared-lv-products';

const MyItemRender = (props: ListViewItemProps) => {
    return (
        <div className="k-listview-item">
            <Card style={{ height: 110, margin: 20 }} orientation="horizontal">
                <CardImage
                    src={`https://demos.telerik.com/kendo-ui/content/web/foods/${props.dataItem.ProductID}.jpg`}
                />
                <div className="k-hbox">
                    <CardHeader style={{ borderBottom: 'none' }}>
                        <CardTitle>{props.dataItem.ProductName}</CardTitle>
                        <CardSubtitle>{props.dataItem.Category.CategoryName}</CardSubtitle>
                    </CardHeader>
                </div>
                <CardBody>
                    <p>
                        Price:{' '}
                        <b>
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(props.dataItem.UnitPrice)}
                        </b>
                    </p>
                    <p>
                        Available units: <b>{props.dataItem.UnitsInStock}</b>
                    </p>
                </CardBody>
            </Card>
        </div>
    );
};

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'gt', value: 20 },
        { field: 'UnitPrice', operator: 'lt', value: 50 },
        { field: 'Discontinued', operator: 'eq', value: false },
        {
            logic: 'or',
            filters: [
                { field: 'ProductName', operator: 'contains', value: 'organic' },
                { field: 'ProductName', operator: 'contains', value: 'cranberry' }
            ]
        }
    ]
};
const App = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>(initialFilter);

    const onFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <>
            <div>
                <Filter
                    value={filter}
                    onChange={onFilterChange}
                    fields={[
                        { name: 'ProductName', label: 'Name', filter: TextFilter, operators: Operators.text },
                        { name: 'UnitPrice', label: 'Price', filter: NumericFilter, operators: Operators.numeric },
                        {
                            name: 'Discontinued',
                            label: 'Discontinued',
                            filter: BooleanFilter,
                            operators: Operators.boolean
                        }
                    ]}
                />
                <ListView data={filterBy(products, filter)} item={MyItemRender} style={{ width: '100%' }} />
            </div>
        </>
    );
};

export default App;
