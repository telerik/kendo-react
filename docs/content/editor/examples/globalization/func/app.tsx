import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { deMessages } from './deMessages';
import content from './shared-ed-content';

const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    NumberedList,
    BulletedList,
    Undo,
    Redo,
    Link,
    Unlink,
    Strikethrough,
    Subscript,
    Superscript,
    InsertImage,
    ViewHtml,
    FontSize,
    FontName,
    FormatBlock
} = EditorTools;

loadMessages(deMessages, 'de');

const App = () => {
    return (
        <LocalizationProvider language="de">
            <Editor
                defaultContent={content}
                contentStyle={{ height: 320 }}
                tools={[
                    [Bold, Italic, Underline, Strikethrough],
                    [Subscript, Superscript],
                    [Undo, Redo],
                    [Link, Unlink, InsertImage],
                    [AlignLeft, AlignCenter, AlignRight],
                    [NumberedList, BulletedList, Indent, Outdent],
                    ViewHtml,
                    FontSize,
                    FontName,
                    FormatBlock
                ]}
            />
        </LocalizationProvider>
    );
};

export default App;
