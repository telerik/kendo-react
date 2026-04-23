---
title: useRemoteDataSource&lt;T&gt;
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the useRemoteDataSource&lt;T&gt;."
api_reference: true
type: inner_api
slug: api_data-tools_useremotedatasource
---

# useRemoteDataSource&lt;T&gt;
A hook that extends the functionality of useDataSource by adding support for remote data operations.
It enables you to connect to remote endpoints and perform CRUD operations while managing the data state locally.




#### Parameters
##### props
<code>


[RemoteDataSourceProps]({% slug api_data-tools_remotedatasourceprops %})&lt;T&gt;


</code>
The configuration options for the remote data source.

#### Returns
<code>


[RemoteDataSource]({% slug api_data-tools_remotedatasource %})&lt;T&gt;


</code>
 An object containing all the properties and methods from useDataSource plus additional methods for interacting with remote data.
