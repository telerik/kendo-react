---
title: EditorProps
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the EditorProps."
api_reference: true
type: inner_api
slug: api_editor_editorprops
---

# EditorProps
Represents the props of the [KendoReact Editor component](https://www.telerik.com/kendo-react-ui/components/editor).


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


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) that describe the Editor component.
Similar to the [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        defaultEditMode="div"
        ariaDescribedBy="description-element-id"
    />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides an accessible label for the Editor component.
Similar to the [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute.

```jsx
<Editor ariaLabel="Rich Text Editor" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) that label the Editor component.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        defaultEditMode="div"
        ariaLabelledBy="label-element-id"
    />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds custom CSS classes to the Editor's root element.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        className="custom-editor-class"
        contentStyle={{ backgroundColor: 'lightgray' }}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Applies custom styles to the content element wrapper of the Editor.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        contentStyle={{ backgroundColor: 'lightgray' }}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultContent?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default HTML content of the Editor. This content is rendered
when the Editor is initialized and no value is provided.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        defaultContent="<p>Hello, World!</p>"
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultEditMode?


</td>
<td type class="table-cell-type">


<code>


"iframe" | "div"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial edit mode of the Editor. Defaults to `iframe`.
- `iframe`: The Editor content is rendered inside an `<iframe>`.
- `div`: The Editor content is rendered inside a `<div>` element.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        defaultEditMode="div"
    />
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


Specifies the text directionality of the Editor content.
Accepts `ltr` (left-to-right) or `rtl` (right-to-left).

```jsx
<Editor tools={[[EditorTools.Bold, EditorTools.Italic]]} dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### keyboardNavigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Disables the built-in keyboard navigation of the Editor's toolbar when set to `false`.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      keyboardNavigation={false}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorBlurEvent]({% slug api_editor_editorblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the Editor's content element loses focus.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onBlur={(event) => console.log('Editor blurred')}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorChangeEvent]({% slug api_editor_editorchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the value of the Editor is about to change.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onChange={(event) => console.log(event.value)}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExecute?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorExecuteEvent]({% slug api_editor_editorexecuteevent %})) => boolean | void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the Editor is about to apply a transaction.
To prevent the transaction, return `false`.




```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onExecute={(event) => {
        console.log('onExecute called');
        event.transaction.steps.length > 0;
      }}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorFocusEvent]({% slug api_editor_editorfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the Editor's content element receives focus.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onFocus={(event) => console.log('Editor focused')}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onIFrameInit?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorIFrameInitEvent]({% slug api_editor_editoriframeinitevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered during the initialization of an Editor with the `iframe` property set to `true`.
Allows access to the iframe document for customization.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onIFrameInit={(event) => {
        console.log('Iframe initialized');
        event.iframe.style.border = 'none';
      }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMount?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorMountEvent]({% slug api_editor_editormountevent %})) => void | EditorView


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the Editor is about to mount. Useful for configuring the `EditorView` object.
To initialize `EditorView`, use the properties of the `event` object.




```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onMount={(event) => console.log(event.dom)}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPasteHtml?


</td>
<td type class="table-cell-type">


<code>


(event: [EditorPasteEvent]({% slug api_editor_editorpasteevent %})) => string | void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when content is pasted into the Editor. Allows modification of the pasted content.




```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      onPasteHtml={(event) => event.pastedHtml.toUpperCase()}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### preserveWhitespace?


</td>
<td type class="table-cell-type">


<code>


boolean | "full"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines options for parsing HTML content:
- `false`: Collapses whitespace as per HTML rules.
- `true`: Preserves whitespace but normalizes newlines to spaces.
- `full`: Fully preserves whitespace.
Defaults to `full`.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      preserveWhitespace="full"
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables or disables resizing of the Editor. Defaults to `false`.

```jsx

<Editor tools={[[EditorTools.Bold, EditorTools.Italic]]}
resizable={true} />
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


Applies custom styles to the Editor's root element.

```jsx
    <Editor
        tools={[[EditorTools.Bold, EditorTools.Italic]]}
        style={{ border: '1px solid black' }}
    />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tools?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the tools available in the Editor's toolbar.
By default, no tools are rendered.

```jsx
<Editor tools={[[EditorTools.Bold, EditorTools.Italic]]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | Node


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the value of the Editor. Can be a ProseMirror `Node` or an HTML string.

```jsx
    <Editor
      tools={[[EditorTools.Bold, EditorTools.Italic]]}
      value="<p>Initial content</p>"
    />
```



</td>
</tr>
</tbody>
</table>



