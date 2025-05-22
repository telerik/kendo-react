import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import { EditorUtils } from '@progress/kendo-react-editor';

import { EditorState, Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema } from 'prosemirror-model';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { history } from 'prosemirror-history';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';

export default class CustomEditor extends React.Component {
    state = { view: undefined };
    contentElement;

    componentDidMount() {
        this.initialize();
    }

    componentWillUnmount() {
        const { view } = this.state;
        if (view) {
            view.destroy();
        }
    }

    render() {
        const { tools = [] } = this.props;

        return (
            <div>
                <Toolbar>
                    {tools.map((Tool, idx) => <Tool view={this.state.view} key={idx} />)}
                </Toolbar>
                <div
                    ref={e => this.contentElement = e}
                    className="editor-content"
                    suppressContentEditableWarning={true}
                />
            </div>
        );
    }

    // Here you can change anything of the Editor engine.
    initialize() {
        const { defaultContent = '' } = this.props;
        const schema = new Schema({ nodes: EditorUtils.nodes, marks: EditorUtils.marks });
        const doc = EditorUtils.createDocument(schema, defaultContent);
        const view = new EditorView({ mount: this.contentElement }, {
            state: EditorState.create({ doc, plugins: this.plugins }),
            transformPastedHTML: this.onPasteHtml
        });

        this.setState({ view });
    }

    get plugins() {
        return [
            new Plugin({
                view: () => ({ update: editorView => this.setState({ view: editorView }) }),
                filterTransaction: (tr, editorState) => {
                    if (tr.docChanged) {
                        console.log('document is changed');
                    }

                    if (!tr.selection.eq(editorState.selection)) {
                        console.log('selection is changed');
                    }

                    // Returning false will prevent the change
                    return true;
                }
            }),
            history(),
            dropCursor(),
            gapCursor(),
            keymap(EditorUtils.getShortcuts()),
            keymap(baseKeymap)
            // Add your custom plugin here.
        ];
    }

    onPasteHtml = (html) => {
        console.log(html);

        // Here you can modify and return the pasted HTML.
        return html;
    }
}
