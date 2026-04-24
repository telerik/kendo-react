---
title: RemoteDataSourceProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the RemoteDataSourceProps."
api_reference: true
type: inner_api
slug: api_data-tools_remotedatasourceprops
---

# RemoteDataSourceProps
Configuration properties for the remote data source.
Extends the basic DataSourceProps with remote data operations capabilities.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### creates?


</td>
<td type class="table-cell-type">


<code>


Map&lt;"null" | string | number | symbol&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Map of created items that need to be synced with the remote source.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


T[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current data array to be managed by the hook.
This represents the data items that are currently available in the data source.
If not provided, the `defaultData` will be used as the initial value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultData?


</td>
<td type class="table-cell-type">


<code>


T[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial data array to be managed by the hook.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial filter configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultGroup?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial grouping configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSkip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial number of records to skip (for paging).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial sorting configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultTake?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial number of records to take per page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultTotal?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial total number of records in the data source.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### deletes?


</td>
<td type class="table-cell-type">


<code>


Map&lt;"null" | string | number | symbol&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Map of items marked for deletion that need to be synced with the remote source.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current filter configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether filtering is enabled.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current grouping configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether grouping is enabled.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether paging is enabled.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### reads?


</td>
<td type class="table-cell-type">


<code>


Map&lt;"null" | string | number | symbol&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Map of original data items read from the remote source, indexed by ID.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### schema


</td>
<td type class="table-cell-type">


<code>


{ model: { id: string; }; } [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { data?: string | (data: any) => T[]; errors?: string | (data: any) => any; total?: string | (data: any) => number; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Schema configuration for parsing and mapping server responses.
Extends the base DataSourceProps schema with additional properties for remote data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### serverFiltering?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Determines if filtering operations should be performed on the server.
When true, filter parameters are sent to the server during read operations.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### serverGrouping?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Determines if grouping operations should be performed on the server.
When true, group parameters are sent to the server during read operations.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### serverPaging?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Determines if paging operations should be performed on the server.
When true, skip and take parameters are sent to the server during read operations.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### serverSorting?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Determines if sorting operations should be performed on the server.
When true, sort parameters are sent to the server during read operations.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current number of records to skip (for paging).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current sorting configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether sorting is enabled.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### take?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current number of records to take per page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### total?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The total number of records in the data source.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transport?


</td>
<td type class="table-cell-type">


<code>


{ create?: { contentType?: string; data?: {[key: string]: any}; method?: string; onError?: (error: any) => void; onResponse?: (response: any) => "null" | T; onSuccess?: (data: T) => void; parameterMap?: (data: T) => any; url: string | (dataItem: T) => string; } | (options: { data: T; }) => Promise&lt;T&gt;; delete?: { contentType?: string; data?: {[key: string]: any}; method?: string; onError?: (error: any) => void; onResponse?: (response: any) => "null" | T; onSuccess?: (data: T) => void; parameterMap?: (data: T) => any; url: string | (dataItem: T) => string; } | (options: { data: T; }) => Promise&lt;T&gt;; read?: { contentType?: string; data?: {[key: string]: any}; method?: string; onError?: (error: any) => void; onResponse?: (response: any) => "null" | T; onSuccess?: (data: T[]) => void; parameterMap?: (data: { filter?: CompositeFilterDescriptor; group?: GroupDescriptor[]; skip?: number; sort?: SortDescriptor[]; take?: number; }) => any; url: string | () => string; } | (options: { filter?: CompositeFilterDescriptor; group?: GroupDescriptor[]; onError?: (error: any) => void; onResponse?: (response: any) => "null" | T; onSuccess?: (data: T[]) => void; skip?: number; sort?: SortDescriptor[]; take?: number; }) => Promise&lt;T[]&gt;; update?: { contentType?: string; data?: {[key: string]: any}; method?: string; onError?: (error: any) => void; onResponse?: (response: any) => "null" | T; onSuccess?: (data: T) => void; parameterMap?: (data: T) => any; url: string | (dataItem: T) => string; } | (options: { data: T; }) => Promise&lt;T&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration for CRUD operations transport.
Defines how data is sent to and received from the server.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### updates?


</td>
<td type class="table-cell-type">


<code>


Map&lt;"null" | string | number | symbol&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Map of updated items that need to be synced with the remote source.


</td>
</tr>
</tbody>
</table>



