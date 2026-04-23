---
title: PasteCleanupSettings
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the PasteCleanupSettings."
api_reference: true
type: inner_api
slug: api_editor_pastecleanupsettings
---

# PasteCleanupSettings
The settings passed to `pasteCleanup` function ([see example](https://www.telerik.com/kendo-react-ui/components/editor/paste)).


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


#### attributes?


</td>
<td type class="table-cell-type">


<code>


{[attributeName: string]: (attr: Attr) => void}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An object containing attributeName/callback pairs.
The callback will be called for the corresponding attribute name and the attribute object will be passed as a parameter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### convertMsLists?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, converts the MS Word lists into HTML lists.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stripTags?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes the specified tags from the HTML and keeps its child nodes.


</td>
</tr>
</tbody>
</table>



