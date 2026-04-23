---
title: InlineAIPromptPopupProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the InlineAIPromptPopupProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_inlineaipromptpopupprops
---

# InlineAIPromptPopupProps



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


#### anchor?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The element that serves as an anchor for the popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### animate?


</td>
<td type class="table-cell-type">


<code>


boolean | PopupAnimation


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls the animation of the popup.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The container element where the popup will be rendered.
If not specified, the popup will be rendered in the document body.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The content to render inside the popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: { target: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup is closed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: { target: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup is opened.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupOptions?


</td>
<td type class="table-cell-type">


<code>


PopupProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Object which passes props directly to the Popup component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Controls the visibility of the popup.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Additional CSS styles for the popup content.


</td>
</tr>
</tbody>
</table>



