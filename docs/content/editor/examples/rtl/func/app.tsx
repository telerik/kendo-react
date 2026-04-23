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

const App = () => {
    return (
        <Editor
            dir="rtl"
            tools={[
                [Bold, Italic, Underline],
                [Undo, Redo],
                [Link, Unlink],
                [AlignLeft, AlignCenter, AlignRight],
                [OrderedList, UnorderedList, Indent, Outdent]
            ]}
            contentStyle={{ height: 320 }}
            defaultContent={content}
        />
    );
};

export default App;
