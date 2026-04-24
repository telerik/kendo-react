import * as React from 'react';
import { useDataSource } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn, GridDataStateChangeEvent, GridCustomCellProps } from '@progress/kendo-react-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

import { CompositeFilterDescriptor, SortDescriptor, GroupDescriptor } from '@progress/kendo-data-query';

// Import sample products data
import products from './shared-dt-products';

const App = () => {
    // State for controlling the UI options
    const [pageSize, setPageSize] = React.useState<{ text: string; value: number }>({ text: '10 items', value: 10 });
    const [sortOptions, setSortOptions] = React.useState<{ text: string; value: string }>({
        text: 'Product Name (A-Z)',
        value: 'product-asc'
    });
    const [filterOption, setFilterOption] = React.useState<{ text: string; value: string }>({
        text: 'All Products',
        value: 'all'
    });
    const [groupOption, setGroupOption] = React.useState<{ text: string; value: string }>({
        text: 'No Grouping',
        value: 'none'
    });

    // Configure the DataSource with initial settings
    const dataSource = useDataSource({
        data: products,
        defaultSort: [{ field: 'ProductName', dir: 'asc' }] as SortDescriptor[],
        defaultFilter: {
            logic: 'and',
            filters: []
        } as CompositeFilterDescriptor,
        defaultGroup: [] as GroupDescriptor[],
        defaultSkip: 0,
        defaultTake: pageSize.value,
        schema: {
            model: {
                id: 'ProductID'
            }
        }
    });

    // Handle data state change from the Grid
    const handleDataStateChange = (event: GridDataStateChangeEvent) => {
        dataSource.setDataState(event.dataState);
    };

    // Handle page size change
    const handlePageSizeChange = (event: DropDownListChangeEvent) => {
        const newPageSize = parseInt(event.target.value.value, 10);
        setPageSize(event.target.value);
        dataSource.setDataState({
            ...dataSource.dataState,
            skip: 0, // Reset to first page
            take: newPageSize
        });
    };

    // Handle sorting option change
    const handleSortChange = (event: DropDownListChangeEvent) => {
        const option = event.target.value;
        setSortOptions(option);

        let sortDescriptors: SortDescriptor[] = [];

        switch (option.value) {
            case 'product-asc':
                sortDescriptors = [{ field: 'ProductName', dir: 'asc' }];
                break;
            case 'product-desc':
                sortDescriptors = [{ field: 'ProductName', dir: 'desc' }];
                break;
            case 'price-asc':
                sortDescriptors = [{ field: 'UnitPrice', dir: 'asc' }];
                break;
            case 'price-desc':
                sortDescriptors = [{ field: 'UnitPrice', dir: 'desc' }];
                break;
            case 'category-price':
                sortDescriptors = [
                    { field: 'Category.CategoryName', dir: 'asc' },
                    { field: 'UnitPrice', dir: 'desc' }
                ];
                break;
            default:
                sortDescriptors = [];
        }

        dataSource.setDataState({
            ...dataSource.dataState,
            sort: sortDescriptors
        });
    };

    // Handle filter option change
    const handleFilterChange = (event: DropDownListChangeEvent) => {
        const option = event.target.value;
        setFilterOption(option);

        let filterDescriptor: CompositeFilterDescriptor = {
            logic: 'and',
            filters: []
        };

        switch (option.value) {
            case 'expensive':
                filterDescriptor.filters = [{ field: 'UnitPrice', operator: 'gt', value: 50 }];
                break;
            case 'instock':
                filterDescriptor.filters = [{ field: 'UnitsInStock', operator: 'gt', value: 0 }];
                break;
            case 'beverages':
                filterDescriptor.filters = [{ field: 'Category.CategoryName', operator: 'eq', value: 'Beverages' }];
                break;
            case 'complex':
                filterDescriptor = {
                    logic: 'and',
                    filters: [
                        { field: 'UnitPrice', operator: 'gt', value: 20 },
                        {
                            logic: 'or',
                            filters: [
                                { field: 'Category.CategoryName', operator: 'eq', value: 'Beverages' },
                                { field: 'Category.CategoryName', operator: 'eq', value: 'Seafood' }
                            ]
                        }
                    ]
                };
                break;
            default:
                filterDescriptor.filters = [];
        }

        dataSource.setDataState({
            ...dataSource.dataState,
            filter: filterDescriptor
        });
    };

    // Handle group option change
    const handleGroupChange = (event: DropDownListChangeEvent) => {
        const option = event.target.value;
        setGroupOption(option);

        let groupDescriptors: GroupDescriptor[] = [];

        switch (option.value) {
            case 'category':
                groupDescriptors = [{ field: 'Category.CategoryName' }];
                break;
            case 'category-stock':
                groupDescriptors = [{ field: 'Category.CategoryName' }, { field: 'UnitsInStock', dir: 'desc' }];
                break;
            default:
                groupDescriptors = [];
        }

        dataSource.setDataState({
            ...dataSource.dataState,
            group: groupDescriptors
        });
    };

    // Reset all data operations
    const handleReset = () => {
        setPageSize({ text: '10 items', value: 10 });
        setSortOptions({
            text: 'Product Name (A-Z)',
            value: 'product-asc'
        });
        setFilterOption({
            text: 'All Products',
            value: 'all'
        });
        setGroupOption({
            text: 'No Grouping',
            value: 'none'
        });

        dataSource.setDataState({
            skip: 0,
            take: 10,
            sort: [{ field: 'ProductName', dir: 'asc' }],
            filter: {
                logic: 'and',
                filters: []
            },
            group: []
        });
    };

    return (
        <div>
            <div style={{ margin: '-30px -30px 30px -30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                        Configurator
                    </span>
                </div>
                <div className="example-config">
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Sorting:</Label>
                            <DropDownList
                                style={{ marginLeft: 5 }}
                                value={sortOptions}
                                onChange={handleSortChange}
                                textField="text"
                                data={[
                                    { text: 'Product Name (A-Z)', value: 'product-asc' },
                                    { text: 'Product Name (Z-A)', value: 'product-desc' },
                                    { text: 'Price (Low to High)', value: 'price-asc' },
                                    { text: 'Price (High to Low)', value: 'price-desc' },
                                    { text: 'Category, then Price (desc)', value: 'category-price' }
                                ]}
                                dataItemKey="value"
                            />
                        </div>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Filtering:</Label>
                            <DropDownList
                                style={{ marginLeft: 5 }}
                                value={filterOption}
                                onChange={handleFilterChange}
                                data={[
                                    { text: 'All Products', value: 'all' },
                                    { text: 'Expensive (Price > $50)', value: 'expensive' },
                                    { text: 'In Stock', value: 'instock' },
                                    { text: 'Beverages Category', value: 'beverages' },
                                    { text: 'Expensive Beverages/Seafood', value: 'complex' }
                                ]}
                                textField="text"
                                dataItemKey="value"
                            />
                        </div>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Grouping:</Label>
                            <DropDownList
                                style={{ marginLeft: 5 }}
                                value={groupOption}
                                onChange={handleGroupChange}
                                data={[
                                    { text: 'No Grouping', value: 'none' },
                                    { text: 'Group by Category', value: 'category' },
                                    { text: 'Group by Category, then Stock', value: 'category-stock' }
                                ]}
                                textField="text"
                                dataItemKey="value"
                            />
                        </div>
                        <div className="col-sm-3 col-md-3 example-col">
                            <Label>Page Size:</Label>
                            <DropDownList
                                style={{ marginLeft: 5 }}
                                value={pageSize}
                                onChange={handlePageSizeChange}
                                data={[
                                    { text: '5 items', value: 5 },
                                    { text: '10 items', value: 10 },
                                    { text: '20 items', value: 20 },
                                    { text: '50 items', value: 50 }
                                ]}
                                textField="text"
                                dataItemKey="value"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 example-col">
                            <Button onClick={handleReset} themeColor={'primary'}>
                                Reset All Operations
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Grid
                style={{ height: '400px', marginTop: '20px' }}
                data={dataSource.data}
                total={dataSource.total}
                pageable={true}
                groupable={true}
                sortable={true}
                filterable={true}
                onDataStateChange={handleDataStateChange}
                {...dataSource.dataState}
            >
                <GridColumn field="ProductID" title="ID" width="70px" filterable={false} sortable={false} />
                <GridColumn field="ProductName" title="Product" />
                <GridColumn field="UnitPrice" title="Price" format="{0:c}" width="120px" />
                <GridColumn field="UnitsInStock" title="In Stock" width="120px" />
                <GridColumn field="Category.CategoryName" title="Category" width="150px" />
                <GridColumn
                    field="Discontinued"
                    title="Discontinued"
                    width="120px"
                    cells={{
                        data: (props: GridCustomCellProps) => (
                            <td {...props.tdProps}>{props.dataItem[props.field!] ? 'Yes' : 'No'}</td>
                        )
                    }}
                />
            </Grid>
        </div>
    );
};

export default App;
