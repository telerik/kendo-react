import * as React from 'react';
import { paragraphMark, styles, ParagraphTool } from './paragraph-mark';
import { Editor, EditorTools, EditorMountEvent, ProseMirror } from '@progress/kendo-react-editor';

const { Bold, Italic, Underline } = EditorTools;

const onMount = (event: EditorMountEvent) => {
    const state = event.viewProps.state;
    const plugins = [...state.plugins, paragraphMark()];
    const editorDocument = event.dom.ownerDocument;
    const styleElement = editorDocument && editorDocument.querySelector('style');
    if (styleElement) {
        styleElement.appendChild(editorDocument.createTextNode(styles));
    }
    return new ProseMirror.EditorView(
        {
            mount: event.dom
        },
        {
            ...event.viewProps,
            state: ProseMirror.EditorState.create({
                doc: state.doc,
                plugins
            })
        }
    );
};
const App = () => {
    return (
        <Editor
            tools={[[Bold, Italic, Underline], [ParagraphTool]]}
            contentStyle={{
                height: 230
            }}
            onMount={onMount}
            defaultContent="<p>test</p> <p>test</p> <p>test</p><p></p><p>test</p><p></p>"
        />
    );
};

export default App;
