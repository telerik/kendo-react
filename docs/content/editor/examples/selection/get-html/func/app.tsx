import * as React from 'react';
import { Editor, EditorExecuteEvent, EditorTools, EditorUtils } from '@progress/kendo-react-editor';
import { content } from './content';

const { Bold, Italic, Underline, ViewHtml } = EditorTools;

const App = () => {
    const htmlAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const onExecute = (event: EditorExecuteEvent) => {
        const { doc, selection } = event.transaction;
        let selectionHtml = '';
        let selectionText = '';

        if (!selection.empty) {
            const node = doc.cut(selection.from, selection.to);
            selectionHtml = EditorUtils.getHtml({ doc: node, schema: node.type.schema });
            selectionText = node.textContent;
        }

        if (htmlAreaRef.current) {
            htmlAreaRef.current.value = selectionHtml;
        }
        if (textAreaRef.current) {
            textAreaRef.current.value = selectionText;
        }
    };

    return (
        <div>
            <Editor
                tools={[[Bold, Italic, Underline], [ViewHtml]]}
                contentStyle={{ height: 360 }}
                defaultContent={content}
                onExecute={onExecute}
            />
            <br />
            Selected HTML
            <textarea
                className="k-textarea"
                style={{ height: 100, width: '100%', resize: 'none' }}
                ref={htmlAreaRef}
                readOnly={true}
            />
            <br />
            <br />
            Selected Text
            <textarea
                className="k-textarea"
                style={{ height: 100, width: '100%', resize: 'none' }}
                ref={textAreaRef}
                readOnly={true}
            />
        </div>
    );
};

export default App;
