import * as React from 'react';
import content from './shared-ed-content';
import { Editor, EditorMountEvent, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { InsertImage } from './insertImageTool';
import { insertImagePlugin } from './insertImagePlugin';
import { insertImageFiles } from './utils';

const { Bold, Italic, Underline, Undo, Redo } = EditorTools;

const App = () => {
    const onImageInsert = (args) => {
        const { files, view, event } = args;
        const nodeType = view.state.schema.nodes.image;

        const position = event.type === 'drop' ? view.posAtCoords({ left: event.clientX, top: event.clientY }) : null;

        insertImageFiles({ view, files, nodeType, position });

        return files.length > 0;
    };

    const onMount = (event: EditorMountEvent) => {
        const state = event.viewProps.state;
        const plugins = [...state.plugins, insertImagePlugin(onImageInsert)];

        return new ProseMirror.EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: ProseMirror.EditorState.create({ doc: state.doc, plugins })
            }
        );
    };

    return (
        <Editor
            tools={[[Bold, Italic, Underline], [Undo, Redo], [InsertImage]]}
            defaultContent={content}
            contentStyle={{ height: 430 }}
            onMount={onMount}
        />
    );
};

export default App;
