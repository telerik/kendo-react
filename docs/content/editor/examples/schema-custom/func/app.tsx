import * as React from 'react';
import { Editor, EditorMountEvent, EditorTools, EditorUtils, ProseMirror } from '@progress/kendo-react-editor';
import mySchema from './schema';
import content from './shared-ed-content';

const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink
} = EditorTools;

const { EditorView, EditorState } = ProseMirror;

const App = () => {
    const onMount = (event: EditorMountEvent) => {
        const { viewProps } = event;
        const { plugins } = viewProps.state;

        // Create a new document using the schema.
        const doc = EditorUtils.createDocument(mySchema, content);

        // Return the custom EditorView object that will be used by Editor.
        return new EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: EditorState.create({ doc, plugins })
            }
        );
    };

    return (
        <Editor
            tools={[
                [Bold, Italic, Underline],
                [Undo, Redo],
                [Link, Unlink],
                [AlignLeft, AlignCenter, AlignRight],
                [OrderedList, UnorderedList, Indent, Outdent]
            ]}
            contentStyle={{ height: 330 }}
            onMount={onMount}
        />
    );
};

export default App;
