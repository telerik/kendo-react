import * as React from 'react';
import { Editor, EditorTools, EditorUtils, ProseMirror, EditorMountEvent } from '@progress/kendo-react-editor';
import content from './content';

const {
    Bold,
    Italic,
    Underline,
    TableProperties,
    TableCellProperties,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
    InsertTable,
    Undo,
    Redo
} = EditorTools;

const { EditorState, EditorView } = ProseMirror;
const { tableResizing } = EditorUtils;

const App = () => {
    const onMount = (event: EditorMountEvent) => {
        const { plugins, doc } = event.viewProps.state;

        return new EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: EditorState.create({
                    doc,
                    plugins: [...tableResizing(), ...plugins]
                })
            }
        );
    };

    return (
        <Editor
            onMount={onMount}
            tools={[
                [InsertTable, TableProperties, TableCellProperties],
                [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                [DeleteRow, DeleteColumn, DeleteTable],
                [MergeCells, SplitCell],
                [Bold, Italic, Underline],
                [Undo, Redo]
            ]}
            contentStyle={{ height: 450 }}
            defaultContent={content}
        />
    );
};

export default App;
