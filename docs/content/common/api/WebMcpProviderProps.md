---
title: WebMcpProviderProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the WebMcpProviderProps."
api_reference: true
type: inner_api
slug: api_common_webmcpproviderprops
---

# WebMcpProviderProps
Props accepted by `<WebMcpProvider>`.


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


#### children


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Human-readable data name exposed to AI agents. Any language works. Optional when each component provides its own via `webMcp={{ dataName }}`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### register?


</td>
<td type class="table-cell-type">


<code>


(componentType: string, handle: unknown, propsRef: { current: unknown; }, webMcpConfig?: Record&lt;string&gt;) => () => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Registration callback provided by a smart provider.
Components call this to announce themselves so the provider can
create tools on their behalf. Returns an unregister function.





</td>
</tr>
</tbody>
</table>



