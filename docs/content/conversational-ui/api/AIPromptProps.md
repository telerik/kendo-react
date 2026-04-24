---
title: AIPromptProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the AIPromptProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_aipromptprops
---

# AIPromptProps
Props of the AIPrompt component.


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


#### activeView


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the name of the `activeView` property:
```jsx
<AIPrompt activeView="promptView" />
```


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


Custom content rendered inside the component.
```jsx
<AIPrompt>
  <div>Custom content</div>
</AIPrompt>
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Text direction of the component.
```jsx
<AIPrompt dir="rtl" />
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


Indicates loading state of the prompt.
```jsx
<AIPrompt loading={true} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onActiveViewChange?


</td>
<td type class="table-cell-type">


<code>


(name: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the active view changes. Provides the new view name.
```jsx
<AIPrompt onActiveViewChange={(name) => console.log('Active view changed to:', name)} />
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


Fires when the prompt is canceled.
```jsx
<AIPrompt onCancel={() => console.log('Prompt cancelled')} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCommandExecute?


</td>
<td type class="table-cell-type">


<code>


(command: [CommandInterface]({% slug api_conversational-ui_commandinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a command is executed.
```jsx
<AIPrompt onCommandExecute={(command) => console.log('Command executed:', command)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(prompt?: string, outputItem?: [AIPromptOutputInterface]({% slug api_conversational-ui_aipromptoutputinterface %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a prompt is requested. Provides the prompt and optional target output.
```jsx
<AIPrompt onPromptRequest={(prompt) => console.log('Prompt requested:', prompt)} />
```


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
```jsx
<AIPrompt promptPlaceholder="Type your prompt here..." />
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


Indicates streaming state of the prompt.
```jsx
<AIPrompt streaming={true} />
```


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
<AIPrompt style={{ backgroundColor: 'lightblue' }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionsView?


</td>
<td type class="table-cell-type">


<code>


[SuggestionsView]({% slug api_conversational-ui_suggestionsview %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optionally specifies the rendering for the suggestions displayed in the AI Prompt component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbarItems?


</td>
<td type class="table-cell-type">


<code>


ReactNode | [AIPromptToolbarItemInterface]({% slug api_conversational-ui_aiprompttoolbariteminterface %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Items rendered in the toolbar.
The items rendered in the toolbar. the `toolbarItems` property:
```jsx
<AIPrompt toolbarItems={[<CustomToolbarItem />]} />
```


</td>
</tr>
</tbody>
</table>



