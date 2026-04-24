import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import MyBold from './myBold';
import MyFontSizeTool from './myFontSize';
import content from './shared-ed-content-basic';

const App = () => {
    return (
        <Editor
            tools={[[MyBold, EditorTools.ViewHtml], MyFontSizeTool]}
            defaultContent={content}
            contentStyle={{ height: 300 }}
        />
    );
};

export default App;
