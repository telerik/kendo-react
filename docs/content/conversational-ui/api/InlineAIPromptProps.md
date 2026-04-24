---
title: InlineAIPromptProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the InlineAIPromptProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_inlineaipromptprops
---

# InlineAIPromptProps



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


Collection of commands rendered in the context menu.
If not set, default AI text editing commands are used.


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


Shows speech-to-text button in the input. When `true`, shows the button with default settings.
When you pass an object, forwards its props to the `SpeechToTextButton` component.





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


Custom component used to render the generate button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The height of the component.


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


#### onCommandExecute?


</td>
<td type class="table-cell-type">


<code>


(command: [CommandItemInterface]({% slug api_conversational-ui_commanditeminterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a command from the context menu executes. Provides the selected command and current prompt value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCopy?


</td>
<td type class="table-cell-type">


<code>


(output: [InlineAIPromptOutputInterface]({% slug api_conversational-ui_inlineaipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Copy button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDiscard?


</td>
<td type class="table-cell-type">


<code>


(output: [InlineAIPromptOutputInterface]({% slug api_conversational-ui_inlineaipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Discard button.


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


#### onOutputAction?


</td>
<td type class="table-cell-type">


<code>


(command: [OutputActionInterface]({% slug api_conversational-ui_outputactioninterface %}), output: [InlineAIPromptOutputInterface]({% slug api_conversational-ui_inlineaipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an action command executes.
Built-in `copy` and `discard` actions are handled internally.
All other actions call this handler.


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


Fires when the cancel action occurs.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(prompt: string, outputItem?: [InlineAIPromptOutputInterface]({% slug api_conversational-ui_inlineaipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user submits a prompt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputActions?


</td>
<td type class="table-cell-type">


<code>


[OutputActionInterface]({% slug api_conversational-ui_outputactioninterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Collection of output actions rendered in the card actions.
If not set, default actions (`copy`, `discard`) are used. You can override built-ins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputCard?


</td>
<td type class="table-cell-type">


<code>


AIPromptCardInterface


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template that lets you define custom Card fields for header, body, and actions. Overrides defaults.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputs?


</td>
<td type class="table-cell-type">


<code>


[InlineAIPromptOutputInterface]({% slug api_conversational-ui_inlineaipromptoutputinterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Collection of outputs to display as cards.


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


Custom component used to render the prompt input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptPlaceholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Placeholder text for the prompt input.


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


Initial value of the prompt input.


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


Indicates if the content is streaming.


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


Inline styles for the root element.
```jsx
<InlineAIPrompt style={{ backgroundColor: 'lightblue' }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of the component.


</td>
</tr>
</tbody>
</table>



