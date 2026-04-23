---
title: useDataSource&lt;T&gt;
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the useDataSource&lt;T&gt;."
api_reference: true
type: inner_api
slug: api_data-tools_usedatasource
---

# useDataSource&lt;T&gt;
A hook that provides functionality for managing local data with built-in support for filtering, sorting, paging, and grouping.




```tsx
interface Product {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
}

const dataSource = useDataSource<Product>({
  defaultData: products,
  defaultSort: [{ field: 'UnitPrice', dir: 'desc' }],
  defaultSkip: 0,
  take: 10,
  schema: {
    model: {
      id: 'ProductID'
    }
  }
});

return (
  <Grid
    data={dataSource.data}
    total={dataSource.total}
    {...dataSource.dataState}
    onDataStateChange={(event) => {
      dataSource.setDataState(event.dataState);
    }}
  >
    <GridColumn field="ProductID" title="ID" />
    <GridColumn field="ProductName" title="Product Name" />
  </Grid>
);
```


#### Parameters
##### props
<code>


[DataSourceProps]({% slug api_data-tools_datasourceprops %})&lt;T&gt;


</code>
The configuration options for the data source.

#### Returns
<code>


[DataSource]({% slug api_data-tools_datasource %})&lt;T&gt;


</code>
 An object containing data management methods and properties.
