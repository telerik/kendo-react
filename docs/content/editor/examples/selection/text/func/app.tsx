import * as React from 'react';
import { Editor, EditorTools, EditorUtils, ProseMirror } from '@progress/kendo-react-editor';
import { RangeSlider, RangeSliderChangeEvent, Range } from '@progress/kendo-react-inputs';
import { content } from './content';

const { Bold, Italic, Underline, ViewHtml } = EditorTools;
const { Schema, TextSelection } = ProseMirror;
type EditorView = InstanceType<typeof ProseMirror.EditorView>;
const { nodes, marks } = EditorUtils;

const initialDocument = EditorUtils.createDocument(new Schema({ nodes, marks }), content);
const initialDocSize = initialDocument.content.size;
const initialRange = { start: Math.round(initialDocSize / 3), end: Math.round((initialDocSize / 3) * 2) };

const setEditorTextSelection = (anchor: number, head: number, view?: EditorView | null) => {
    if (!view) {
        return;
    }
    const doc = view.state.doc;
    const selection = TextSelection.create(doc, anchor, head);
    const transaction = view.state.tr; // state.tr - Starts a transaction from this state.
    transaction.setSelection(selection);
    view.dispatch(transaction);
    view.focus();
};

const App = () => {
    const [value, setValue] = React.useState(initialDocument);
    const [range, setRange] = React.useState<Range>(initialRange);
    const editorRef = React.useRef<Editor>(null);

    const contentSize = value.content.size;
    const end = Math.min(range.end, contentSize);
    const start = Math.min(range.start, end);
    const view = editorRef.current && editorRef.current.view;

    const onSliderValueChange = React.useCallback(
        (event: RangeSliderChangeEvent) => {
            const start = Math.round(event.value.start);
            const end = Math.round(event.value.end);
            if (range.start !== start || range.end !== end) {
                setEditorTextSelection(start, end, view);
                setRange({ start, end });
            }
        },
        [range, view]
    );

    return (
        <div>
            <RangeSlider
                style={{ width: '100%' }}
                value={{ start, end }}
                step={1}
                min={0}
                max={contentSize}
                onChange={onSliderValueChange}
            />
            {`Selection: ${JSON.stringify({ start, end })}`}
            &nbsp;
            <Editor
                value={value}
                onChange={(event) => setValue(event.value)}
                ref={editorRef}
                tools={[[Bold, Italic, Underline], [ViewHtml]]}
                contentStyle={{ height: 320 }}
            />
        </div>
    );
};

export default App;
