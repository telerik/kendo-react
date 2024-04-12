import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Editor } from '@progress/kendo-react-editor';
import doubleUnderlineTool from './doubleUnderlineTool';

const content = `<p>The KendoReact Editor allows your users to edit HTML in a familiar, user-friendly way.<br />The Editor provides the core HTML editing engine, which includes text formatting, hyperlinks, and lists. The component <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards, and provides API for content manipulation.</p>`;

const App = () => {
  return (
    <Editor
      tools={[
        doubleUnderlineTool,
      ]}
      contentStyle={{ height: 300 }}
      defaultContent={content}
    />
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
