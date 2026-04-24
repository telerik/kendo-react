---
title: EditorUtils
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the EditorUtils."
api_reference: true
type: inner_api
slug: api_editor_editorutils
---

# EditorUtils
Represents a wrapping namespace for the utility functions, `nodes`, and `marks` objects of the Editor.


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


#### alignBlocks


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Aligns the block elements in the selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### applyInlineStyle


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Wraps the selection in a `span` element with inline styles.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### applyLink


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Applies the link mark.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### canIndentList


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if any of the `list` elements in the selection can be indented.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### canInsert


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if a node can be inserted in the current selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### canOutdentList


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if any of the `list` elements in the selection can be outdented.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### convertMsLists


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Converts the MS Word lists into HTML lists.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### createDocument


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Creates an Editor document from HTML content.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### createTable


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Creates a table.




```jsx-no-run
import { EditorUtils } from '@progress/kendo-react-editor';

const nodes = editorRef.view.state.schema.nodes;
const rows = 3;
const columns = 4;

const table = EditorUtils.createTable(nodes, rows, columns);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### formatBlockElements


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Formats the paragraph and heading nodes in the selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### getBlockFormats


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the paragraph and heading nodes in the selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### getHtml


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the HTML from the `EditorState` object.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### getInlineStyles


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">








</td>
</tr>
<tr>
<td class="table-cell-name">


#### getMark


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns a mark of the specified type from the nodes in selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### getShortcuts


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function which returns the mapped `Shortcuts` object based on the passed settings.
Useful when the default Editor nodes or tool settings are changed and the `Shortcuts` object has to be regenerated.

@params&mdash;An object which holds specific types of nodes and tool settings that are used by the default `Shortcuts` handlers.
@returns&mdash;An object which holds the shortcuts.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasMark


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if according to the specified `InlineFormatOptions` a node in the selection is present.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasNode


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if the selection contains a specific type of node.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageResizeKey


</td>
<td type class="table-cell-type">


<code>


PluginKey


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `PluginKey` used in the Editor by the image resizing plugin.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ImageResizeOptions


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The image resizing plugin options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageResizing


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Creates a plugin which adds image resizing functionality.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### indentBlocks


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indents the block elements in the selection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### indentHtml


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds new lines after block elements and hard breaks.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### insertNode


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Inserts a node in the selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAligned


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if any of the block elements in the selection is aligned.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### isIndented


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if any of the block elements in the selection is indented.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### marks


</td>
<td type class="table-cell-type">


<code>


{[mark: string]: MarkSpec}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `marks` object of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nodes


</td>
<td type class="table-cell-type">


<code>


{[node: string]: NodeSpec}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `nodes` object of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pasteCleanup


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for sanitizing the content on paste ([see example](https://www.telerik.com/kendo-react-ui/components/editor/paste)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### propsKey


</td>
<td type class="table-cell-type">


<code>


PluginKey


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `PluginKey` used in the Editor to pass editor props to the tools.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeAttribute


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that will remove a DOM attribute from the pasted content ([see example](https://www.telerik.com/kendo-react-ui/components/editor/paste)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeComments


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes the comments from the HTML.




```jsx-no-run
import { EditorUtils } from '@progress/kendo-react-editor';
const html = EditorUtils.removeComments('<p>some content<!-- comment --></p>');
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeTag


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes the specified tag from the HTML and keeps its child nodes.




```jsx-no-run
import { EditorUtils } from '@progress/kendo-react-editor';
const html = EditorUtils.removeTag('<p>some <span>content</span></p>', 'span|p');
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### replaceImageSourcesFromRtf


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If the input `html` contains images with 'src' pointing to local file system (it happens when pasting images and text from MS Word),
the function will extract the images sources from the RTF in base64 format and replace them in the input `html`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sanitize


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes the invalid HTML.




```jsx-no-run
import { EditorUtils } from '@progress/kendo-react-editor';
const html = EditorUtils.sanitize('something pasted from MS Word, containing <o:p>, <w:sdtPr>, <v:shapes tags');
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### sanitizeClassAttr


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for sanitizing the CSS classes of the pasted from MS Word content ([see example](https://www.telerik.com/kendo-react-ui/components/editor/paste)).
The function will remove any class attribute which value starts with `Mso`.
For example `<p class="MsoNormal">pasted from MS Word</p>` will result in `<p>pasted from MS Word</p>`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sanitizeStyleAttr


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for sanitizing the style attributes of the pasted from MS Word content ([see example](https://www.telerik.com/kendo-react-ui/components/editor/paste)).
The function will loop through all styles and will remove those that are invalid.
For example `<p><span style='color:#7C7C7C;mso-themecolor:accent3;mso-themeshade:191;background:silver;'>content</span></p>`,
will result in `<p><span style="color: #7C7C7C; background: silver;">content</span></p>`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### setHtml


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the HTML to the `EditorView`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### Shortcuts


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `Shortcuts` object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tableResizing


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns a collection of plugins that adds table resizing functionality.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### textHighlight


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Creates a plugin which highlights the matches of Find and Replace dialog.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### toggleInlineFormat


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the inline element formatting according to the `InlineFormatOptions` and `markAttrs` settings.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### toggleList


</td>
<td type class="table-cell-type">


<code>





</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles a list of the specified type.





</td>
</tr>
</tbody>
</table>



