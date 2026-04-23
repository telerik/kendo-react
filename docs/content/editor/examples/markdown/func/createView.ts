import { ProseMirror } from '@progress/kendo-react-editor';

export const createView = ({ dom, viewProps }) => {
    const state = ProseMirror.EditorState.create({
        doc: viewProps.state.doc,
        plugins: [ProseMirror.keymap({ 'Mod-u': () => true }), ...viewProps.state.plugins]
    });

    return new ProseMirror.EditorView(
        { mount: dom },
        {
            ...viewProps,
            state
        }
    );
};
