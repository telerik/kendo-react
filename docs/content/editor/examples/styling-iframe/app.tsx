import * as React from 'react';
import content from './shared-ed-content';
import { Editor, EditorMountEvent, EditorTools } from '@progress/kendo-react-editor';

const { Bold, Italic, Underline } = EditorTools;

const styles = `
    p {
        color: #53d2fa;
    }
`;

const App = () => {
    const onMount = (event: EditorMountEvent) => {
        const iframeDocument = event.dom.ownerDocument;
        const style = iframeDocument.createElement('style');
        style.appendChild(iframeDocument.createTextNode(styles));
        iframeDocument.head.appendChild(style);
    };

    return <Editor tools={[[Bold, Italic, Underline]]} defaultContent={content} onMount={onMount} />;
};

export default App;
