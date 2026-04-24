---
title: AIPromptViewProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the AIPromptViewProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptviewprops
---

# AIPromptViewProps
The properties of the AIPromptView component.


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


#### enableSpeechToText?


</td>
<td type class="table-cell-type">


<code>


boolean | SpeechToTextButtonProps


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Show speech to text button in input. When true, shows the button with default settings.
When an object is provided, passes those props directly to the SpeechToTextButton component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### generateButton?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ButtonProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Accepts a custom component that can be used to render the generate button. See example [here](https://www.telerik.com/kendo-react-ui/components/conversational-ui/ai-prompt/customization).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptInput?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;TextAreaProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Accepts a custom component that can be used to render the prompt input. See example [here](https://www.telerik.com/kendo-react-ui/components/conversational-ui/ai-prompt/customization).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptSuggestions?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The suggestions that will be displayed in the prompt view. See example [here](https://www.telerik.com/kendo-react-ui/components/conversational-ui/ai-prompt/suggestions).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the prompt input.


</td>
</tr>
</tbody>
</table>



