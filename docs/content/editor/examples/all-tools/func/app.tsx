import * as React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import content from './shared-ed-content';

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    ForeColor,
    BackColor,
    CleanFormatting,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    NumberedList,
    BulletedList,
    Undo,
    Redo,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    InsertFile,
    SelectAll,
    Print,
    Pdf,
    TableProperties,
    TableCellProperties,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell
} = EditorTools;

const App = () => {
    return (
        <Editor
            tools={[
                [Bold, Italic, Underline, Strikethrough],
                [Subscript, Superscript],
                ForeColor,
                BackColor,
                [CleanFormatting],
                [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                [Indent, Outdent],
                [OrderedList, UnorderedList],
                [NumberedList, BulletedList],
                FontSize,
                FontName,
                FormatBlock,
                [SelectAll],
                [Undo, Redo],
                [Link, Unlink, InsertImage, ViewHtml],
                [InsertTable, InsertFile],
                [Pdf, Print],
                [TableProperties, TableCellProperties],
                [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                [DeleteRow, DeleteColumn, DeleteTable],
                [MergeCells, SplitCell]
            ]}
            contentStyle={{ height: 300 }}
            defaultContent={content}
        />
    );
};

export default App;
