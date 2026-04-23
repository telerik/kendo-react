import * as React from 'react';
import { Editor, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import { content } from './content';

const { Bold, Italic, Underline, ViewHtml } = EditorTools;
const { NodeSelection } = ProseMirror;
type EditorView = InstanceType<typeof ProseMirror.EditorView>;

const selectLastNode = (view: EditorView) => {
    const doc = view.state.doc;
    let nodePosition = 0;
    const nodeToSelect = doc.child(1);

    doc.nodesBetween(0, doc.content.size, (node, pos, _parent, _index) => {
        if (node.eq(nodeToSelect)) {
            nodePosition = pos;
        }

        return false; // return false to traverse only root nodes
    });

    const selection = NodeSelection.create(doc, nodePosition);

    // state.tr - Starts a transaction from this state.
    const transaction = view.state.tr;
    transaction.setSelection(selection);
    view.dispatch(transaction);
    view.focus();
};

const App = () => {
    const editorRef = React.useRef<Editor>(null);

    const onClick = React.useCallback(() => {
        const view = editorRef.current && editorRef.current.view;
        if (!view) {
            return;
        }
        selectLastNode(view);
    }, []);

    return (
        <div>
            <Button onClick={onClick}>Select second Node</Button>
            <Editor
                defaultContent={content}
                ref={editorRef}
                tools={[[Bold, Italic, Underline], [ViewHtml]]}
                contentStyle={{ height: 320 }}
            />
        </div>
    );
};

export default App;
