---
title: SpeechToTextResultEvent
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SpeechToTextResultEvent."
api_reference: true
type: inner_api
slug: api_buttons_speechtotextresultevent
---

# SpeechToTextResultEvent
The event argument for the `result` event of the SpeechToTextButton.


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


#### alternatives


</td>
<td type class="table-cell-type">


<code>


[SpeechRecognitionAlternative]({% slug api_buttons_speechrecognitionalternative %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of possible recognition alternatives returned by the speech engine.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isFinal


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the speech recognition result is final (`true`) or interim (`false`).


</td>
</tr>
</tbody>
</table>



