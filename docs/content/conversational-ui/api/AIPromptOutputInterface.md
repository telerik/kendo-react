---
title: AIPromptOutputInterface
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the AIPromptOutputInterface."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptoutputinterface
---

# AIPromptOutputInterface



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


#### command?


</td>
<td type class="table-cell-type">


<code>


[CommandInterface]({% slug api_conversational-ui_commandinterface %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Command that triggered the prompt generation.
```jsx
const output = { command: { name: 'Retry' }, responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


EUnique identifier of the output item.
```jsx
const output = { id: 1, responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isRetry?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if this output is a retry.
```jsx
const output = { isRetry: true, responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prompt?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Prompt that produced this output.
```jsx
const output = { prompt: 'User prompt', responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ratingType?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Rating type applied to the output.
```jsx
const output = { ratingType: 'positive', responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responseContent


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Generated response content.
```jsx
const output = { responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subTitle?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional `subTitle` content.
```jsx
const output = { subTitle: 'Generated Subtitle', responseContent: 'Generated content' };
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Example usage of the `title` property:
```jsx
const output = { title: 'Generated Title', responseContent: 'Generated content' };
```


</td>
</tr>
</tbody>
</table>



