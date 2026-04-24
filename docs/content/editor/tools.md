---
title: Tools
description: 'Get started with the KendoReact Editor, render its built-in button tools, and implement custom tools in its toolbar.'
components: ["editor"]
slug: tools_editor
position: 2
---

# Tools

The React Editor, part of KendoReact, provides a set of built-in, user-interface tools, enables you to customize the available tools and to add custom ones.

-   [API Reference including the EditorTools]({% slug api_editor_editortools %})

## Using Built-In Tools

To add or remove any of the available tools, use the [`tools`]({% slug api_editor_editorprops %}#toc-tools) prop of the Editor. All tools which are inserted in an array are rendered in a [KendoReact ButtonGroup]({% slug overview_buttongroup %}) component.

The following example demonstrates all available tools of the React Editor, part of KendoReact.

{% meta height:510 %}
{% embed_file all-tools/func/app.tsx preview %}
{% embed_file all-tools/func/main.tsx %}
{% endmeta %}

## Customizing Built-In Tools

To customize any of the built-in tools of the Editor:

1. Based on the default tool configuration, create the desired tool settings.
1. Pass the settings to the corresponding function which creates the tool.

In the following example, the built-in `Bold` tool is changed to toggle the `B` tag, recognize the `STRONG` tag, its tooltip is changed to `My Custom Bold`, and the icon is reused. The FontSize DropDownList width and items are changed.

{% meta height:420 %}
{% embed_file edit-built-in-tools/func/app.tsx preview %}
{% embed_file edit-built-in-tools/func/main.tsx %}
{% embed_file edit-built-in-tools/func/myBold.tsx %}
{% embed_file edit-built-in-tools/func/myFontSize.tsx %}
{% endmeta %}

The following code snippet demonstrates all tool settings and their corresponding functions which create the tools.

```jsx-no-run
  import { EditorToolsSettings, EditorTools } from '@progress/kendo-react-editor';

  const {
  bold, italic, underline, strikethrough, subscript, superscript,
  alignLeft, alignCenter, alignRight, alignJustify,
  indent, outdent,
  orderedList, bulletList,
  undo,
  redo,
  fontSize, fontName,
  formatBlock,
  link,
  unlink,
  image,
  viewHtml,
  insertTable,
  addRowBefore,
  addRowAfter,
  addColumnBefore,
  addColumnAfter,
  deleteRow,
  deleteColumn,
  deleteTable,
  mergeCells,
  splitCell
  } = EditorToolsSettings;

  const {
  createAlignTool,
  createStyleDropDownList, // Accepts fontSize and fontName settings.
  createFormatBlockDropDownList, // The formatBlock settings.
  createUndoTool,
  createRedoTool,
  createIndentTool,
  createOutdentTool,
  createInlineFormatTool, // bold, italic, underline, strikethrough, subscript, superscript
  createInsertImageTool, // image
  createLinkTool,
  createUnlinkTool,
  createListTool, // orderedList, bulletList
  createViewHtmlToo
  // Inserting and editing tables.
  createInsertTableTool,
  createAddRowBeforeTool,
  createAddRowAfterTool,
  createAddColumnBeforeTool,
  createAddColumnAfterTool,
  createDeleteRowTool,
  createDeleteColumnTool,
  createDeleteTableTool,
  createMergeCellsTool,
  createSplitCellTool
  } = EditorTools;
```

To customize the ColorPicker of ForeColor or BackColor tools, wrap the tool into a function and pass the new props to
[colorPickerProps]({% slug api_inputs_colorpickerprops %}).

```jsx-no-run
  import { Editor, EditorTools } from '@progress/kendo-react-editor';

  const { ForeColor, BackColor, Bold, Italic, Underline } = EditorTools;

  const CustomForeColor = props => (
    <ForeColor {...props} colorPickerProps={{ view: 'gradient' }} />
  );
  const CustomBackColor = props => (
    <BackColor {...props} colorPickerProps={{ view: 'gradient' }} />
  );

  const App = () => {
    return (
      <Editor
        tools={[[Bold, Italic, Underline], CustomForeColor, CustomBackColor]}
        contentStyle={{ height: 300 }}
        defaultContent={'<p>Editor Content</p>'}
      />
    );
  };
```

## Using Custom Tools

The React Editor, part of KendoReact, allows you to create and implement custom tools.

The following example demonstrates how to create:

-   A drop-down list for applying color styles.
-   A tool for toggling the background color style.
-   Tools for inserting specific elements into the content.

{% meta height:420 %}
{% embed_file custom-tools/func/backgroundColorTool.tsx %}
{% embed_file custom-tools/func/insertTools.tsx %}
{% embed_file custom-tools/func/app.tsx preview %}
{% embed_file custom-tools/func/main.tsx %}
{% embed_file custom-tools/func/myColorTool.tsx %}
{% endmeta %}

## Creating Custom Tools Using CSS and Plugins

The KendoReact Editor allows you to use plugins and CSS styles in custom tools.

The following example demonstrates how to implement a custom paragraph marker tool by:

-   Using custom styles.
-   Utilizing the Decoration plugin.
-   Passing data from the tool to the plugin.

{% meta height:420 %}
{% embed_file custom-tools-styles-plugins/func/app.tsx preview %}
{% embed_file custom-tools-styles-plugins/func/main.tsx %}
{% embed_file custom-tools-styles-plugins/func/paragraph-mark.tsx %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
