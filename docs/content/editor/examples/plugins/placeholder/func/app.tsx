import * as React from 'react';
import { placeholder, styles } from './placeholder';
import { Editor, EditorMountEvent, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
const { Bold, Italic, Underline } = EditorTools;

const onMount = (event: EditorMountEvent) => {
    const state = event.viewProps.state;
    const plugins = [...state.plugins, placeholder('Enter some content ...')];

    const editorDocument = event.dom.ownerDocument;
    const styleElement = editorDocument && editorDocument.querySelector('style');
    if (styleElement) {
        styleElement.appendChild(editorDocument.createTextNode(styles));
    }

    return new ProseMirror.EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: ProseMirror.EditorState.create({ doc: state.doc, plugins })
        }
    );
};

const App = () => {
    return <Editor tools={[[Bold, Italic, Underline]]} contentStyle={{ height: 200 }} onMount={onMount} />;
};

export default App;
