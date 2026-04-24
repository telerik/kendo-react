---
title: ChatMessageProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ChatMessageProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_chatmessageprops
---

# ChatMessageProps
Represents the properties of `ChatMessage` component.


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


#### allowMessageCollapse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether messages can be collapsed/expanded when multiple consecutive messages are from the same author.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the React Component rendered inside the .k-bubble-content element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateFormat?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the date format of the message date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item


</td>
<td type class="table-cell-type">


<code>


[MessageModel]({% slug api_conversational-ui_messagemodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the data item of the `Message`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `selected` state of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the tab index attribute.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### template?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the React Component rendered inside the `Message`.


</td>
</tr>
</tbody>
</table>



