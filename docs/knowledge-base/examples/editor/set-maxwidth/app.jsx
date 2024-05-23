import * as React from 'react';
import content from './content';
import { Editor, EditorTools } from '@progress/kendo-react-editor';

const { Bold, Italic, Underline } = EditorTools;

const styles = `
    html {
      background-color: darkBlue;
    }
    body {
        background-color: #53d2fa;
        margin: 30px;
        padding-left: 50px;
        max-width: 650px;
    }
    .text-cursor {
      cursor: text;
    }
`;

const App = () => {

  const onMount = (event) => {
    const iframeDocument = event.dom.ownerDocument;
    const style = iframeDocument.createElement('style');
    style.appendChild(iframeDocument.createTextNode(styles));
    iframeDocument.head.appendChild(style);

    const htmlElement = iframeDocument.documentElement;
    htmlElement.addEventListener('click', () => {
      const contentEditableElement = iframeDocument.querySelector(
        '[contenteditable="true"]'
      );
      if (contentEditableElement) {
        contentEditableElement.focus();
      }
    });
  };

  return (
    <Editor
      tools={[[Bold, Italic, Underline]]}
      defaultContent={content}
      onMount={onMount}
    />
  );
};
export default App;