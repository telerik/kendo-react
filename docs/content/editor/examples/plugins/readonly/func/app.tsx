import * as React from 'react';
import { Editor, EditorMountEvent, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import content from './shared-ed-content-basic';

const { EditorState, EditorView, Plugin, PluginKey } = ProseMirror;
const { Bold, Italic, Underline } = EditorTools;

const App = () => {
    const [editable, setEditable] = React.useState<boolean>(true);
    const editableRef = React.useRef<boolean>(true);
    const view = React.useRef<any>(null);

    const onMount = (event: EditorMountEvent) => {
        const state = event.viewProps.state;
        const plugins = [
            ...state.plugins,
            new Plugin({
                key: new PluginKey('readonly'),
                props: { editable: () => editableRef.current },
                filterTransaction: (tr, _st) => editableRef.current || !tr.docChanged
            })
        ];
        view.current = new EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: EditorState.create({ doc: state.doc, plugins })
            }
        );

        return view.current;
    };

    React.useEffect(() => {
        if (view.current && editable) {
            view.current.updateState(view.current.state);
        }
    }, [editable]);

    const toggleEditable = () => {
        setEditable(!editable);
        editableRef.current = !editable;
    };

    return (
        <div>
            <Button type="button" onClick={toggleEditable}>
                Set Read-Only to {String(editable)}
            </Button>
            <br />
            <br />
            <Editor
                tools={[[Bold, Italic, Underline]]}
                contentStyle={{ height: 145 }}
                onMount={onMount}
                defaultContent={content}
            />
        </div>
    );
};

export default App;
