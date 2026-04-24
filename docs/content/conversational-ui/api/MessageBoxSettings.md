---
title: MessageBoxSettings
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the MessageBoxSettings."
api_reference: true
type: inner_api
slug: api_conversational-ui_messageboxsettings
---

# MessageBoxSettings
Configuration for the Message Box (PromptBox component).


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


#### endAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | () => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the end of the Message Box input area.
The content is rendered before the built-in speech-to-text button.

```tsx
<Chat messageBoxSettings={{ endAffix: <Button svgIcon={heartIcon} /> }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxTextAreaHeight?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'110'


</code>


</td>
<td class="table-cell-comment">


Sets the maximum height of the Message Box textarea in px.
When the height exceeds this value, the Message Box height is fixed and a scrollbar appears.
Applicable for `multi` and `auto` modes.




```tsx
<Chat messageBoxSettings={{ maxTextAreaHeight: '300' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


[PromptBoxMode]({% slug api_conversational-ui_promptboxmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'multi'


</code>


</td>
<td class="table-cell-comment">


Defines the line mode for the Message Box.
- `single`&mdash;Single-line input field.
- `multi`&mdash;Multi-line textarea that expands/collapses based on content.
- `auto`&mdash;Starts as single-line and automatically expands to multi-line when needed.




```tsx
<Chat messageBoxSettings={{ mode: 'auto' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


2


</code>


</td>
<td class="table-cell-comment">


Sets the number of visible rows for the Message Box textarea.




```tsx
<Chat messageBoxSettings={{ rows: 5 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### startAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | () => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the start of the Message Box input area.
The content is rendered after the built-in upload button.

```tsx
<Chat messageBoxSettings={{ startAffix: <Button svgIcon={heartIcon} /> }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### topAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | () => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the top of the Message Box.
Only rendered when mode is 'multi'.

```tsx
<Chat messageBoxSettings={{ topAffix: <div>Custom toolbar</div> }} />
```



</td>
</tr>
</tbody>
</table>



