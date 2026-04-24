import * as React from 'react';

import { Editor } from '@progress/kendo-react-editor';

import MyColorTool from './myColorTool';
import BackgroundColorTool from './backgroundColorTool';
import { InsertHrTool, InsertImageTool, InsertTextTool } from './insertTools';
import content from './shared-ed-content-basic';

const App = () => {
    return (
        <Editor
            tools={[
                [MyColorTool, BackgroundColorTool],
                [InsertHrTool, InsertImageTool, InsertTextTool]
            ]}
            contentStyle={{ height: 300 }}
            defaultContent={content}
        />
    );
};

export default App;
