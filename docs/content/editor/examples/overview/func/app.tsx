import * as React from 'react';
import { Editor, EditorChangeEvent, EditorTools } from '@progress/kendo-react-editor';
import blogPostContent from './shared-ed-content-overview';
import './styles.css';

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    CleanFormatting,
    Subscript,
    Superscript,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
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

const countStats = (html: string) => {
    const text = (html || '')
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .trim();
    return {
        charCount: text.length,
        wordCount: text ? text.split(/\s+/).filter((w) => w.length > 0).length : 0
    };
};

const App = () => {
    const [stats, setStats] = React.useState(() => countStats(blogPostContent));

    const handleChange = (event: EditorChangeEvent) => {
        setStats(countStats(event.html));
    };

    return (
        <div className="demo-container">
            <div className="composer-card">
                <div className="composer-meta">
                    <div className="meta-left">
                        <span className="meta-avatar">K</span>
                        <div className="meta-info">
                            <span className="meta-author">KendoReact Team</span>
                            <span className="meta-details">May 4, 2026 · Component Guide</span>
                        </div>
                    </div>
                    <span className="status-badge">Draft</span>
                </div>
                <Editor
                    tools={[
                        [Bold, Italic, Underline, Strikethrough, CleanFormatting],
                        [Subscript, Superscript],
                        [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                        [Indent, Outdent],
                        [OrderedList, UnorderedList],
                        FontSize,
                        FontName,
                        FormatBlock,
                        [Undo, Redo],
                        [Link, Unlink, InsertImage, ViewHtml],
                        [InsertTable],
                        [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                        [DeleteRow, DeleteColumn, DeleteTable],
                        [MergeCells, SplitCell]
                    ]}
                    defaultContent={blogPostContent}
                    defaultEditMode="div"
                    contentStyle={{ padding: '16px 20px' }}
                    className="blog-editor"
                    onChange={handleChange}
                />
                <div className="composer-footer">
                    <span>Words: {stats.wordCount}</span>
                    <span>Characters: {stats.charCount}</span>
                </div>
            </div>
        </div>
    );
};

export default App;
