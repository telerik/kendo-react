---
title: useODataDataSource&lt;T&gt;
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the useODataDataSource&lt;T&gt;."
api_reference: true
type: inner_api
slug: api_data-tools_useodatadatasource
---

# useODataDataSource&lt;T&gt;
A specialized version of useRemoteDataSource tailored for working with OData services.
It automatically handles the construction of OData queries and the processing of OData responses.




```tsx
interface Product {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
}

const dataSource = useODataDataSource<Product>({
  take: 10,
  skip: 0,
  transport: {
    read: {
      url: 'https://demos.telerik.com/service/v2/odata/Products'
    }
  },
  schema: {
    model: {
      id: 'ProductID'
    }
  }
});
```


#### Parameters
##### props
<code>


[RemoteDataSourceProps]({% slug api_data-tools_remotedatasourceprops %})&lt;T&gt;


</code>
The configuration options for the OData data source.

#### Returns
<code>


[RemoteDataSource]({% slug api_data-tools_remotedatasource %})&lt;T&gt;


</code>
 An object containing all the properties and methods from useRemoteDataSource with OData-specific defaults for transport and schema configurations.
