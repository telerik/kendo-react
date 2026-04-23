---
title: SpeechToTextButtonHandle
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SpeechToTextButtonHandle."
api_reference: true
type: inner_api
slug: api_buttons_speechtotextbuttonhandle
---

# SpeechToTextButtonHandle
The SpeechToTextButton ref.


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


#### abort


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `abort` event callback that stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a result.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isActive


</td>
<td type class="table-cell-type">


<code>


() => boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `isActive` event callback that returns boolean value if the SpeechToTextButton is in active state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### start


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `start` event callback that starts the speech recognition service listening to incoming audio with intent to recognize grammars.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stop


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `stop` event callback that stops the speech recognition service from listening to incoming audio, and attempts to return a result using the audio captured so far.


</td>
</tr>
</tbody>
</table>



