---
title: Resize a Table in the Editor
description: Learn how to resize a table in the KendoReact Editor.
type: how-to
page_title: Resize a Table in the Editor - KendoReact Editor
slug: resize-table-in-the-editor
position:
tags: editor, table, resize
ticketid: 1418205
res_type: kb
category: knowledge-base
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description
How to make the table elements inside the Editor resizable?

## Solution
There is an already made plugin for [table column resizing from ProseMirror.](https://github.com/ProseMirror/prosemirror-tables)

We have made an example of KendoReact Editor that uses the columnResizing plugin. The plugin has to be added to the plugins collection on the [onMount]({% slug api_editor_editorprops %}#toc-onmount) event:

```jsx-no-run
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorTools, ProseMirror } from '@progress/kendo-react-editor';

import { columnResizing } from 'prosemirror-tables';
const { EditorState, EditorView } = ProseMirror;

const {
    InsertTable,
    AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter,
    DeleteRow, DeleteColumn, DeleteTable,
    MergeCells, SplitCell,
    Undo, Redo
} = EditorTools;

const content =
   `<p>some paragraph</p>
<table>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>`;

class App extends React.Component {
  onMount = event => {
      const state = event.viewProps.state;
      const plugins = [
        ...state.plugins,
        columnResizing({})
      ];

      return new EditorView(
        { mount: event.dom }, {
          ...event.viewProps,
          state: EditorState.create({ doc: state.doc, plugins })
        }
      );
    }

    render() {
        return (
            <Editor
                tools={[
                    [ InsertTable ],
                    [ AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter ],
                    [ DeleteRow, DeleteColumn, DeleteTable ],
                    [ MergeCells, SplitCell ],
                    [ Undo, Redo ]
                ]}
                defaultEditMode="div"
                onMount={this.onMount}
                contentStyle={{ height: 300 }}
                defaultContent={content}
            />
        );
    }
}
```
