import * as React from 'react';
import content from './shared-ed-content';
import { Editor, EditorTools } from '@progress/kendo-react-editor';

const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink
} = EditorTools;

const constraints: React.CSSProperties = {
    maxHeight: 420,
    maxWidth: 750,
    minWidth: 555,
    minHeight: 250
};

// Could be 'both', 'horizontal', and 'vertical'. Defaults to 'both'.
const resize: React.CSSProperties = {
    // resize: 'both'
};

const App = () => {
    return (
        <Editor
            resizable={true}
            style={{ height: 360, ...constraints, ...resize }}
            tools={[
                [Bold, Italic, Underline],
                [Undo, Redo],
                [Link, Unlink],
                [AlignLeft, AlignCenter, AlignRight],
                [OrderedList, UnorderedList, Indent, Outdent]
            ]}
            defaultContent={content}
        />
    );
};

export default App;
