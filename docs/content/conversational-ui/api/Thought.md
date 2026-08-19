---
title: Thought
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the Thought."
api_reference: true
type: inner_api
slug: api_conversational-ui_thought
---

# Thought
A single row rendered inside a `ChainOfThought`, supplied via the `thoughts` prop.

`Thought` is a public data type — it is not a separately rendered component.


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


#### completed?


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


Semantic lifecycle state of the thought row. `false`/omitted renders the
active/in-progress treatment; `true` renders the finished treatment.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### content


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The body of the thought — the detailed explanation or result associated with the step.
Accepts plain text or a custom `ReactNode`, such as a `Citation` list.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Short name for the thought step, such as `"Read"` or `"Edited"`.

```tsx
const thoughts: Thought[] = [{ label: 'Read', content: 'Read package.json' }];
<ChainOfThought thoughts={thoughts} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### linesAdded?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Number of lines added by the thought, when the step represents an edit.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linesRemoved?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Number of lines removed by the thought, when the step represents an edit.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### secondaryLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Supporting context, such as a file name, command, or line range.


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


Icon that identifies the thought operation or category.
Pass an icon object from `@progress/kendo-svg-icons`.


</td>
</tr>
</tbody>
</table>



