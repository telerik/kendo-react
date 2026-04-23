---
title: InlineAIPromptInputProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the InlineAIPromptInputProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_inlineaipromptinputprops
---

# InlineAIPromptInputProps



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


#### commands?


</td>
<td type class="table-cell-type">


<code>


[CommandInterface]({% slug api_conversational-ui_commandinterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of commands that will be rendered in the context menu.
If not specified, default AI text editing commands will be used.


</td>
</tr>
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


Accepts a custom component that can be used to render the generate button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMenuClick?


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback when the menu button is clicked


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptCancel?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback when the prompt input value is cancelled.
This is typically used to stop the streaming of content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(value: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback when the prompt input value is submitted.
The value is trimmed before being passed to the callback.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Placeholder text for the prompt input


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


Accepts a custom component that can be used to render the prompt input.


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
If not specified, the component will manage its own state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### streaming?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the content is being streamed.


</td>
</tr>
</tbody>
</table>



