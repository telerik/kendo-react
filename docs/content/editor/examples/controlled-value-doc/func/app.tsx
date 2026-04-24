import * as React from 'react';
import { Editor, EditorTools, EditorUtils, ProseMirror, EditorChangeEvent } from '@progress/kendo-react-editor';

const { Bold, Italic } = EditorTools;

const App = () => {
    const [value, setValue] = React.useState(
        EditorUtils.createDocument(
            new ProseMirror.Schema({ nodes: EditorUtils.nodes, marks: EditorUtils.marks }),
            '<p>Editor sample content</p>'
        )
    );
    const onChange = (event: EditorChangeEvent) => {
        setValue(event.value);
    };
    return <Editor value={value} onChange={onChange} tools={[[Bold, Italic]]} contentStyle={{ height: 100 }} />;
};

export default App;
