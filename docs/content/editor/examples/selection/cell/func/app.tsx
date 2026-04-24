import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { content } from './content';

const { Bold, Italic, Underline, ViewHtml } = EditorTools;

const App = () => {
    return (
        <Editor
            defaultContent={content}
            tools={[[Bold, Italic, Underline], [ViewHtml]]}
            contentStyle={{ height: 170 }}
        />
    );
};

export default App;
