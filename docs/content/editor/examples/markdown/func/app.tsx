import * as React from 'react';
import { Editor, EditorTools, EditorMountEvent, EditorChangeEvent } from '@progress/kendo-react-editor';
import { createView } from './createView';
import { markdown } from './markdown';
import { defaultMarkdownParser } from 'prosemirror-markdown';
import { Node as ProseMirrorNode } from 'prosemirror-model';
const { Bold, Italic, Link, Unlink, InsertImage, FormatBlock, Undo, Redo, OrderedList, UnorderedList } = EditorTools;

const App = () => {
    const [value, setValue] = React.useState<ProseMirrorNode | undefined>(() => {
        const parsed = defaultMarkdownParser.parse(markdown);
        return parsed || undefined;
    });

    const onMount = (event: EditorMountEvent) => createView(event);
    const onChange = (event: EditorChangeEvent) => setValue(event.value);

    return (
        <Editor
            contentStyle={{ height: 325 }}
            onMount={onMount}
            tools={[[Bold, Italic, Link, Unlink, InsertImage], [Undo, Redo], [OrderedList, UnorderedList], FormatBlock]}
            onChange={onChange}
            value={value}
        />
    );
};

export default App;
