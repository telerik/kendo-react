---
title: MessageStatus
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the MessageStatus."
api_reference: true
type: inner_api
slug: api_conversational-ui_messagestatus
---

# MessageStatus
Configuration for message status display with optional icon.


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


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the name of a font icon from the Kendo UI theme for the message status.

```tsx
const message: Message = {
  status: { text: 'Seen', icon: 'k-icon k-font-icon k-i-loading' }
};
```



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


Sets an SVG icon to display inside the message status.

```tsx
import { eyeIcon } from '@progress/kendo-svg-icons';

const message: Message = {
  status: { text: 'Seen', svgIcon: eyeIcon }
};
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the text for the message status.

```tsx
const message: Message = {
  status: { text: 'Seen' }
};
```



</td>
</tr>
</tbody>
</table>



