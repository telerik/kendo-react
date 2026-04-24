---
title: Selection
description: 'Learn more about the selection types supported by the KendoReact Editor and how to configure them in your React application.'
components: ["editor"]
slug: selection_editor
position: 10
---

# Selection

A Selection object represents the range of the user selection in the Editor's editable area. It could point to a range of selected text, a caret position, or a set of node(s).

To set a selection in the React Editor, part of KendoReact, create a new [`Selection`](https://prosemirror.net/docs/ref/#state.Selection) object and pass it to the Editor through a [`transaction`](https://prosemirror.net/docs/ref/#state.Transaction). Selections are represented by instances and subclasses of the `Selection` class available in the `ProseMirror` object.

The React Editor component, part of KendoReact, supports several types of selection: [TextSelection](https://prosemirror.net/docs/ref/#state.TextSelection), [NodeSelection](https://prosemirror.net/docs/ref/#state.NodeSelection), [CellSelection](https://github.com/ProseMirror/prosemirror-tables/#class-cellselection-extends-selection), and [AllSelection](https://prosemirror.net/docs/ref/#state.AllSelection).

```jsx-no-run
import { ProseMirror } from '@progress/kendo-react-editor';

const { TextSelection, NodeSelection, CellSelection, AllSelection } = ProseMirror;
```

## Text Selection

To create a [TextSelection](https://prosemirror.net/docs/ref/#state.TextSelection) object, use the [TextSelection.create](https://prosemirror.net/docs/ref/#state.TextSelection^create) method and pass the following:

-   the Editor's [document](https://prosemirror.net/docs/ref/#state.EditorState.doc)
-   the selection [anchor](https://prosemirror.net/docs/ref/#state.Selection.anchor) position
-   the [head](https://prosemirror.net/docs/ref/#state.Selection.head) position

Counting the selection positions in the Editor starts from 0 and increases when passing through a node or a character. The code snippet below shows a sample of counting the positions.

```html-no-run
(0)<p>(1)sample text(12)</p>(13)
(13)<p>(14)<em>sample text</em>(25)</p>(26)
(26)<p>(27)<img />(28)</p>(29)
(29)<ol>(30)
(30)<li>(31)<p>(32)text(36)</p>(37)</li>(38)
(38)</ol>(39)
```

The following example demonstrates how to create and apply a custom `TextSelection`.

Drag the Slider handles to modify the selection.

{% meta height:520 %}
{% embed_file selection/text/func/app.tsx preview %}
{% embed_file selection/text/func/main.tsx %}
{% embed_file selection/text/func/content.ts %}
{% endmeta %}

## Node Selection

The Editor [`NodeSelection`](https://prosemirror.net/docs/ref/#state.NodeSelection) is applied to a single [`Node`](https://prosemirror.net/docs/ref/#model.Node).

To create a node selection:

1. Use the [`NodeSelection.create`](https://prosemirror.net/docs/ref/#state.NodeSelection^create) method.
1. Pass the following to the method:
    - the Editor's [document](https://prosemirror.net/docs/ref/#state.EditorState.doc)
    - the start position of the node that needs to be selected

Alternatively, hold the `ctrl`/`cmd` key and click on a node to select it.

The following example demonstrates how to select a node programmatically.

{% meta height:520 %}
{% embed_file selection/node/func/app.tsx preview %}
{% embed_file selection/node/func/main.tsx %}
{% embed_file selection/node/func/content.ts %}
{% endmeta %}

## Cell Selection

The [ProseMirror Tables module](https://github.com/ProseMirror/prosemirror-tables/#prosemirror-table-module) provides a Schema extension for table nodes support in the Editor. The `CellSelection` class extends `Selection` and is used for selecting single or multiple cells in a table.

To apply `CellSelection`, select multiple cells in the table by dragging over them.

{% meta height:300 %}
{% embed_file selection/cell/func/app.tsx preview %}
{% embed_file selection/cell/func/main.tsx %}
{% embed_file selection/cell/func/content.ts %}
{% endmeta %}

## All Selection

The [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) type is needed for selecting the whole document content, since `TextSelection` does not handle this task well in some scenarios.

To select the whole document:

1. Create a new `AllSelection` instance, passing the current state's `Document` object to the constructor.
1. Initialize a transaction using `state.tr` getter.
1. Call the transaction's setSelection method, passing the created selection.
1. Dispatch the transaction using Editor's [view]({% slug api_editor_editor %}#toc-view) dispatch method.

```ts-no-run
const editorView = editorRef.view;
const state = editorView.state;
const selection = new AllSelection(state.doc);
const transaction = state.tr;
transaction.setSelection(selection);

editorView.dispatch(transaction);
```

## Get Selected HTML and Text

To get the HTML corresponding to the current Editor selection, use the [`cut`](https://prosemirror.net/docs/ref/#model.Node.cut) method to create a `Node` from the selected range and the [`EditorUtils.getHtml`]({% slug api_editor_gethtml %}) method to retrieve the corresponding HTML content as a string. To retrieve the selected text, use the [`textContent`](https://prosemirror.net/docs/ref/#model.Node.textContent) getter of the node created from the selected range.

The following example demonstrates how to obtain the selected HTML and text from the Editor. Make a selection in the Editor and see the selected content below.

{% meta height:820 %}
{% embed_file selection/get-html/func/app.tsx preview %}
{% embed_file selection/get-html/func/main.tsx %}
{% embed_file selection/get-html/func/content.ts %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
-   [ProseMirror Document Selection](https://prosemirror.net/docs/ref/#state.Selection)
