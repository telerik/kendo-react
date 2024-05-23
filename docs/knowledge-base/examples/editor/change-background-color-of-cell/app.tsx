import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';

import content from './content-overview';
import { CellBackColorTool } from './CellBackColorTool';

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Undo,
  Redo,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
} = EditorTools;

const App = () => {
  return (
    <Editor
      tools={[
        [Bold, Italic, Underline, Strikethrough],
        [Undo, Redo],
        [Link, Unlink, InsertImage, ViewHtml],
        [InsertTable],
        CellBackColorTool,
      ]}
      contentStyle={{ height: 630 }}
      defaultContent={content}
    />
  );
};

export default App;