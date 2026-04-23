import * as React from 'react';
import { Editor, EditorTools, EditorUtils } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';

const { Bold, Italic, Underline } = EditorTools;

const App = () => {
    const editor = React.createRef<Editor>();
    const textarea = React.createRef<HTMLTextAreaElement>();

    const getHtml = () => {
        if (editor.current && textarea.current) {
            const view = editor.current.view;
            if (view) {
                textarea.current.value = EditorUtils.getHtml(view.state);
            }
        }
    };

    const setHtml = () => {
        if (editor.current) {
            const view = editor.current.view;
            if (view && textarea.current) {
                EditorUtils.setHtml(view, textarea.current.value);
            }
        }
    };

    return (
        <div>
            <Editor
                tools={[[Bold, Italic, Underline]]}
                contentStyle={{ height: 160 }}
                defaultContent={'<p>editor sample html</p>'}
                ref={editor}
            />
            <br />
            <Button onClick={getHtml} type="button">
                <span className="k-icon k-i-arrow-60-down" />
                Gets HTML
            </Button>
            &nbsp;
            <Button onClick={setHtml} type="button">
                <span className="k-icon k-i-arrow-60-up" />
                Sets HTML
            </Button>
            <br />
            <br />
            <textarea
                className="k-textarea"
                style={{ height: 100, width: '100%', resize: 'none' }}
                defaultValue="<p>textarea sample html</p>"
                ref={textarea}
            />
        </div>
    );
};

export default App;
