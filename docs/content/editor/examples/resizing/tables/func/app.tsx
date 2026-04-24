import * as React from 'react';
import { Editor, EditorTools, EditorUtils, ProseMirror, EditorMountEvent } from '@progress/kendo-react-editor';
import content from './content';

const { Bold, Italic, Underline, AlignLeft, AlignRight, AlignCenter, Undo, Redo } = EditorTools;

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
                [Bold, Italic, Underline],
                [Undo, Redo],
                [AlignLeft, AlignCenter, AlignRight]
            ]}
            contentStyle={{ height: 450 }}
            defaultContent={content}
        />
    );
};

export default App;
