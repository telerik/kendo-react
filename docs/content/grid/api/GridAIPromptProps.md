---
title: GridAIPromptProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIPromptProps."
api_reference: true
type: inner_api
slug: api_grid_gridaipromptprops
---

# GridAIPromptProps
Props for the `GridAIPrompt` component, which provides AI-powered prompt and output functionality in a grid toolbar.

```tsx
<GridAIPrompt
  promptValue="Summarize this data"
  outputs={[{ text: "Summary...", ... }]}
  streaming={true}
  onPromptRequest={handlePrompt}
  suggestionsList={["Summarize", "Explain", "Generate chart"]}
/>
```



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


#### activeView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Name of the currently active view.

```ts
activeView="prompt"
```



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




</td>
<td class="table-cell-comment">


Enables the speech-to-text functionality for the input of the GridToolbarAIAssistant.

```jsx
<GridToolbarAIAssistant enableSpeechToText={true} />
```



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


Custom component to render the generate button.

```ts
generateButton={CustomGenerateButton}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the prompt is currently loading.

```ts
loading={true}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onActiveViewChange?


</td>
<td type class="table-cell-type">


<code>


(viewName: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the active view changes.

```ts
onActiveViewChange={(view) => setActiveView(view)}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user cancels the current operation.

```ts
onCancel={() => cancelPrompt()}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user closes the current operation.

```ts
onClose={() => closePrompt()}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCopy?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user clicks the Copy button in the output card.

```ts
onCopy={() => copyToClipboard()}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOutputRating?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user rates the output.

```ts
onOutputRating={() => handleRating()}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(prompt: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user submits a prompt request.

```ts
onPromptRequest={(prompt) => sendPrompt(prompt)}
```



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


Configuration for the output card displaying AI results.

```ts
outputCard={{ title: "AI Result", content: "..." }}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputs?


</td>
<td type class="table-cell-type">


<code>


AIPromptOutputInterface[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


List of AI-generated outputs to display.

```ts
outputs={[{ text: "AI output 1" }, { text: "AI output 2" }]}
```



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


Custom component to render the prompt input field.

```ts
promptInput={CustomTextArea}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptPlaceHolder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Placeholder text for the prompt input field.

```ts
promptPlaceHolder="Type your question here..."
```



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


Current value of the prompt input field.

```ts
promptValue="Describe the selected rows"
```



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


Indicates whether the prompt is currently streaming or processing.

```ts
streaming={true}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionsList?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


List of prompt suggestions to display to the user.

```ts
suggestionsList={["Summarize", "Explain", "Generate chart"]}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbarItems?


</td>
<td type class="table-cell-type">


<code>


AIPromptToolbarItemInterface[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of toolbar items to display, can include prompt or output view defaults.

```ts
toolbarItems={[promptViewDefaults, outputViewDefaults]}
```



</td>
</tr>
</tbody>
</table>



