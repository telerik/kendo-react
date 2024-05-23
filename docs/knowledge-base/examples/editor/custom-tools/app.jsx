
import * as React from 'react';

import { Editor } from '@progress/kendo-react-editor';

import MyColorTool from './myColorTool.jsx';
import BackgroundColorTool from './backgroundColorTool.jsx';
import ClearAll from './clearAll.jsx';

const content = `<p>The KendoReact Editor allows your users to edit HTML in a familiar, user-friendly way.<br />The Editor provides the core HTML editing engine, which includes text formatting, hyperlinks, and lists. The component <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p>`;

class App extends React.Component {
    render() {
        return (
            <Editor
                tools={[
                    [ MyColorTool, BackgroundColorTool, ClearAll ]
                ]}
                contentStyle={{ height: 300 }}
                defaultContent={content}
            />
        );
    }
}

export default App;

