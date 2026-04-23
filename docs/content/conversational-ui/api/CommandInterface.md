---
title: CommandInterface
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the CommandInterface."
api_reference: true
type: inner_api
slug: api_conversational-ui_commandinterface
---

# CommandInterface
An interface for the command in the Command view.


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


#### children?


</td>
<td type class="table-cell-type">


<code>


[CommandItemInterface]({% slug api_conversational-ui_commanditeminterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Collection with nested commands.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier of the command.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prompt?


</td>
<td type class="table-cell-type">


<code>


(selection: string) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional prompt function that takes selected text and returns a formatted prompt.
This is used by default commands and can be used by custom commands.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the SVG icon that will be rendered for the command.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the command text.


</td>
</tr>
</tbody>
</table>



