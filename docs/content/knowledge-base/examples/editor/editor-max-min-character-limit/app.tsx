import * as React from 'react';
import { Editor, EditorTools, EditorUtils, ProseMirror } from '@progress/kendo-react-editor';
import { Hint } from '@progress/kendo-react-labels';

const App = () => {
    const maxLength = 100;
    const [value, setValue] = React.useState(
        EditorUtils.createDocument(
            new ProseMirror.Schema({
                nodes: EditorUtils.nodes,
                marks: EditorUtils.marks
            }),
            '<p>Editor sample content</p>'
        )
    );
    const [length, setLength] = React.useState(21);

    const onChange = (event) => {
        const textContent = event.value.textContent;
        if (textContent.length <= maxLength) {
            setValue(event.value);
            setLength(textContent.length);
        }
    };

    return (
        <>
            <Editor
                tools={[[EditorTools.Bold, EditorTools.Italic]]}
                contentStyle={{ height: '100px' }}
                onChange={onChange}
                value={value}
            />
            <Hint id="editorHint">
                {length}/{maxLength}
            </Hint>
        </>
    );
};

export default App;
