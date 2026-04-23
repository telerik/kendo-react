import * as React from 'react';
import { Editor, EditorTools, EditorChangeEvent } from '@progress/kendo-react-editor';
const { Bold, Italic } = EditorTools;

const App = () => {
    const [value, setValue] = React.useState('<p>Editor sample content</p>');

    const onChange = (event: EditorChangeEvent) => {
        setValue(event.html);
    };

    return <Editor value={value} onChange={onChange} tools={[[Bold, Italic]]} contentStyle={{ height: 100 }} />;
};

export default App;
