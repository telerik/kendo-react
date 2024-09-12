import * as React from 'react';
import { Editor, EditorTools, EditorIFrameInitEvent } from '@progress/kendo-react-editor';

const {
    Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Indent, Outdent, OrderedList, UnorderedList,
    Undo, Redo, FontSize, FontName, FormatBlock,
    Link, Unlink, InsertImage, ViewHtml,
    InsertTable,
    AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter,
    DeleteRow, DeleteColumn, DeleteTable,
    MergeCells, SplitCell
} = EditorTools;

const content =
    `<p><strong>KendoReact Editor</strong> allows your users to edit HTML in a familiar, user-friendly way.<br>In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks, lists, and image handling. The widget <strong>outputs identical HTML</strong> across all major browsers, follows accessibility standards and provides multiple tools</a> for content manipulation.</p>
    <p>Features include:</p>
    <ul>
        <li>
            <p>Text formatting &amp; alignment</p>
        </li>
        <li>
            <p>Bulleted and numbered lists</p>
        </li>
        <li>
            <p>Hyperlink and image dialogs</p>
        </li>
        <li>
            <p>Identical HTML output across modern browsers</p>
        </li>
        <li>
            <p>Highly customizable tools</a></p>
        </li>
    </ul>
    <p></p>
    <p>The Editor has a table option as well, allowing to add and edit tabular data.<br /></p>
    <table>
        <tbody>
            <tr>
                <td>
                    <p style="text-align: center;"><strong>Product Id</strong></p>
                </td>
                <td>
                    <p style="text-align: center;"><strong>Product Name</strong></p>
                </td>
                <td>
                    <p style="text-align: center;"><strong>Price</strong></p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>1</p>
                </td>
                <td>
                    <p>Chai</p>
                </td>
                <td><p style="text-align: right;">18</p></td>
                </tr>
            <tr>
                <td>
                    <p>2</p>
                </td>
                <td>
                    <p>Chang</p>
                </td>
                <td>
                    <p style="text-align: right;">19</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>3</p>
                </td>
                <td>
                    <p>Aniseed Syrup</p>
                </td>
                <td>
                    <p style="text-align: right;">10</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p></p>`;

const tools = [
    [Bold, Italic, Underline, Strikethrough],
    [Subscript, Superscript],
    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
    [Indent, Outdent],
    [OrderedList, UnorderedList],
    FontSize, FontName, FormatBlock,
    [Undo, Redo],
    [Link, Unlink, InsertImage, ViewHtml],
    [InsertTable],
    [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
    [DeleteRow, DeleteColumn, DeleteTable],
    [MergeCells, SplitCell]
];


const App = () => {
    const [dir, ] = React.useState('ltr');

    const onIframeInit = (ev: EditorIFrameInitEvent) => {

        const stylesheets = [
            '../assets/defaultStyle.css',
            '../assets/tablesStyle.css',
            dir === 'rtl' ? '../assets/rtlStyles.css' : undefined
        ];

        stylesheets.forEach(href => {
            if (href && ev.iframe && ev.iframe.contentWindow) {
                const iframeDocument = ev.iframe.contentWindow.document;
                const linkElementWithiFrameStyles =  iframeDocument.createElement('link');
                linkElementWithiFrameStyles.rel = 'stylesheet';
                linkElementWithiFrameStyles.type = 'text/css';
                linkElementWithiFrameStyles.href = href;
                iframeDocument.head.appendChild(linkElementWithiFrameStyles);
            }
        });
    }

    return (
      <div id='app'>
        <Editor
            dir={dir}
            defaultContent={content}
            tools={tools}
            style={{ height: 500 }}
            onIFrameInit={onIframeInit}
            />
      </div>
    );
};

export default App;
