import * as React from 'react';
import content from './shared-ed-content-overview';
import {
    Editor,
    EditorTools,
    EditorDialogs,
    EditorUtils,
    ProseMirror,
    EditorMountEvent
} from '@progress/kendo-react-editor';

const { Bold, Italic, Underline, FindAndReplace } = EditorTools;
const { FindAndReplaceDialog } = EditorDialogs;

const { textHighlight } = EditorUtils;
const { EditorView, EditorState, keymap } = ProseMirror;

const App = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    let view;
    const onFindClose = () => setShowDialog(false);

    const onMount = (event: EditorMountEvent) => {
        const state = event.viewProps.state;
        const plugins = [
            ...state.plugins,

            // add a plugin which will highlight the matched text
            textHighlight(),

            // add a key binding Ctrl+F/Cmd+F which will open the `Find and Replace` Dialog.
            keymap({
                'Mod-f': () => {
                    setShowDialog(true);
                    return true;
                }
            })
        ];

        view = new EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: EditorState.create({ doc: state.doc, plugins })
            }
        );

        return view;
    };

    return (
        <React.Fragment>
            <Editor
                tools={[[Bold, Italic, Underline, FindAndReplace]]}
                contentStyle={{ height: 630 }}
                defaultContent={content}
                onMount={onMount}
            />
            {showDialog && view && <FindAndReplaceDialog view={view} onClose={onFindClose} />}
        </React.Fragment>
    );
};

export default App;
