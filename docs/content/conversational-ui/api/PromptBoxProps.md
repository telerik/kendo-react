---
title: PromptBoxProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the PromptBoxProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxprops
---

# PromptBoxProps
Represents the props of the PromptBox component.


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


#### actionButtonConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | ButtonProps


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Sets the send button visibility and/or settings.




```tsx
<PromptBox
  actionButtonConfig={{
    themeColor: 'primary',
    rounded: 'full'
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### attachments?


</td>
<td type class="table-cell-type">


<code>


UploadFileInfo[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the attachments for controlled file management.
When provided, the component operates in controlled mode and the developer must manage attachments via onSelectAttachments and onRemoveAttachment.
When not provided, the component manages attachments internally (uncontrolled mode).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default value of the PromptBox (uncontrolled mode).

```tsx
<PromptBox defaultValue="Type your message..." />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


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


Sets the disabled state of the PromptBox component.




```tsx
<PromptBox disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### endAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | (props: AffixTemplateProps) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the end of the input element.
In 'multi' and 'auto' with more than one row, it is rendered at the bottom right of the textarea.
Custom content appears BEFORE built-in buttons.

```tsx
<PromptBox
  uploadButtonConfig={false}
  speechToTextButtonConfig={false}
  actionButtonConfig={false}
  endAffix={(props) => (
    <>
      <PromptBoxActionButton {...props.actionButtonProps} />
      <PromptBoxUploadButton {...props.uploadButtonProps} />
      <PromptBoxSpeechToTextButton {...props.speechToTextButtonProps} />
    </>
  )}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the PromptBox.

The available options are:
- solid
- outline
- flat




```tsx
<PromptBox fillMode="outline" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


React.InputHTMLAttributes&lt;HTMLInputElement | HTMLTextAreaElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the HTML attributes of the inner focusable input element.
Attributes which are essential for certain component functionalities cannot be changed.

```tsx
<PromptBox inputAttributes={{ 'aria-label': 'Prompt input' }} />
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


<code>


false


</code>


</td>
<td class="table-cell-comment">


Specifies whether the Send button is transformed to a stop generation button.




```tsx
<PromptBox loading={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxLength?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum number of characters allowed in the text input element.

```tsx
<PromptBox maxLength={500} />
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




</td>
<td class="table-cell-comment">


Sets the maximum height of the native textarea in px.
When the text height exceeds this value, a scrollbar appears.
Applicable for `multi` and `auto` modes.

```tsx
<PromptBox mode="auto" maxTextAreaHeight="300" />
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


'auto'


</code>


</td>
<td class="table-cell-comment">


Sets the line mode for the PromptBox component.

The available options are:
- `single` - Sets one line for the text input
- `multi` - Multi-line textarea
- `auto` - Transforms the PromptBox from single to multi line mode based on content




```tsx
<PromptBox mode="multi" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxBlurEvent]({% slug api_conversational-ui_promptboxblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the PromptBox is blurred.

```tsx
<PromptBox onBlur={(event) => console.log('Blurred')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxChangeEvent]({% slug api_conversational-ui_promptboxchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the value changes.

```tsx
<PromptBox onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxFocusEvent]({% slug api_conversational-ui_promptboxfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the PromptBox is focused.

```tsx
<PromptBox onFocus={(event) => console.log('Focused')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptAction?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxPromptActionEvent]({% slug api_conversational-ui_promptboxpromptactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Action button.
The event provides the current value and attachments, allowing simple uncontrolled usage.

```tsx
// Uncontrolled - access value and attachments from event
<PromptBox
  onPromptAction={(e) => {
    console.log('Message:', e.value);
    console.log('Attachments:', e.attachments);
    sendMessage(e.value, e.attachments);
  }}
/>

// Controlled - use your own state
<PromptBox
  value={value}
  attachments={attachments}
  onPromptAction={(e) => {
    sendMessage(value, attachments);
  }}
/>
```



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


<code>


''


</code>


</td>
<td class="table-cell-comment">


The hint, which is displayed when the text input element is empty.




```tsx
<PromptBox placeholder="Type your message here..." />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### readOnly?


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


Sets the read-only state of the PromptBox component.




```tsx
<PromptBox readOnly={true} />
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


1


</code>


</td>
<td class="table-cell-comment">


Sets the visible height of the internal textarea in lines.
Only applicable when mode is 'multi'.
This sets the minimum number of rows.




```tsx
<PromptBox mode="multi" rows={5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### speechToTextButtonConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | SpeechToTextButtonProps


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Sets the SpeechToText button visibility and/or settings.




```tsx
<PromptBox speechToTextButtonConfig={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### startAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | (props: AffixTemplateProps) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the start of the input element in single line mode.
In 'multi' and 'auto' with more than one row, it is rendered at the bottom left of the textarea.

```tsx
<PromptBox startAffix={(props) => <Button icon="custom" />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


''


</code>


</td>
<td class="table-cell-comment">


Sets the title attribute of the internal text input element of the component.




```tsx
<PromptBox title="Enter your prompt" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### topAffix?


</td>
<td type class="table-cell-type">


<code>


ReactNode | (props: AffixTemplateProps) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom content rendered at the top of the PromptBox.
Only rendered when mode is 'multi' or when 'auto' mode has more than 1 row.

```tsx
<PromptBox topAffix={(props) => <div>Custom content</div>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### uploadButtonConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | [UploadButtonProps]({% slug api_conversational-ui_uploadbuttonprops %})


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Sets the File Attachments button visibility and/or settings.




```tsx
<PromptBox
  attachments={attachments}
  uploadButtonConfig={false}
  startAffix={(props) => (
    <PromptBoxUploadButton
      {...props.uploadButtonProps}
      onSelectAttachments={(e) => setAttachments(e.allFiles)}
      onRemoveAttachment={(fileName) => setAttachments(prev => prev.filter(f => f.name !== fileName))}
    />
  )}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


''


</code>


</td>
<td class="table-cell-comment">


Sets the value for the internal input/textarea of the PromptBox.




```tsx
<PromptBox value="Hello, how can I help you?" />
```



</td>
</tr>
</tbody>
</table>



