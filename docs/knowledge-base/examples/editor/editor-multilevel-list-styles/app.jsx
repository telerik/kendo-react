import React, { useEffect } from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';

const {
  Bold,
  Italic,
  Underline,
  Undo,
  Redo,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
} = EditorTools;

const styles = `
ol {
  list-style-type: decimal; 
}

ol li {
  position: relative;
  padding-left: 30px; 
}

ol li p {
  margin-left: 1em;
}

ol li ol {
  list-style-type: lower-roman; 
}

ol li ol li ol {
  list-style-type: upper-roman; 
}

ol li ol li ol li ol {
  list-style-type: lower-alpha; 
}

ol li ol li ol li ol li ol {
  list-style-type: upper-alpha; 
}

ol li ol li ol li ol li ol li ol {
  list-style-type: none;
}

ol li ol li ol li ol li ol li ol li p {
  margin-left: 4.1em;
}
`;

const content = `
<ol>
   <li>
      <p>Text formatting</p>
   </li>
   <li>
      <p>Cross-browser support</p>
      <ol>
         <li>
            <p>Text formatting</p>
            <ol>
               <li>
                  <p>Bulleted and numbered lists</p>
                  <ol>
                     <li>
                        <p>Test 1</p>
                        <ol>
                           <li>
                              <p>Test 2</p>
                           </li>
                        </ol>
                     </li>
                  </ol>
               </li>
            </ol>
         </li>
      </ol>
   </li>
   <li>
      <p>Identical HTML output across browsers</p>
   </li>
</ol>`;

const App = () => {
  const onMount = (event) => {
    const iframeDocument = event.dom.ownerDocument;
    const style = iframeDocument.createElement('style');
    style.appendChild(iframeDocument.createTextNode(styles));
    iframeDocument.head.appendChild(style);
  };

  return (
    <Editor
      tools={[
        [Bold, Italic, Underline],
        [OrderedList, UnorderedList, Indent, Outdent],
        [Undo, Redo],
      ]}
      defaultContent={content}
      onMount={onMount}
    />
  );
};

export default App;