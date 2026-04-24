import * as React from 'react';
import { Toolbar, ButtonGroup } from '@progress/kendo-react-buttons';
import { EditorUtils, EditorToolsSettings, ProseMirror, EditorProps } from '@progress/kendo-react-editor';
import { LinkDialog } from './InsertLinkDialog';

type EditorViewType = InstanceType<typeof ProseMirror.EditorView>;

export const EditorCustom = (props: EditorProps) => {
    const [appState, setAppState] = React.useState<{ view: EditorViewType | undefined }>({ view: undefined });
    const [linkDialog, setLinkDialog] = React.useState(false);
    const _contentElement = React.createRef<any>();

    React.useEffect(() => {
        initialize();
        return () => {
            if (appState.view !== undefined) {
                appState.view.destroy();
            }
        };
    }, []);

    const renderDialog = (Component, settings) => {
        return (
            linkDialog && <Component view={appState.view} settings={settings} onClose={() => setLinkDialog(false)} />
        );
    };

    const renderTool = (Tool, index) => {
        return <Tool view={appState.view} key={index} />;
    };

    // Here you can change anything of the Editor engine.
    const initialize = () => {
        const { defaultContent = '' } = props;
        const schema = new ProseMirror.Schema({ nodes: EditorUtils.nodes, marks: EditorUtils.marks });
        const doc = EditorUtils.createDocument(schema, defaultContent);
        const state = ProseMirror.EditorState.create({ doc, plugins: plugins() });
        const view = new ProseMirror.EditorView(
            { mount: _contentElement.current },
            {
                state,
                transformPastedHTML: onPasteHtml
            }
        );
        setAppState({ view });
    };

    const plugins = () => {
        let shortcuts = {
            ...EditorUtils.getShortcuts(),
            'Mod-k': () => {
                if (appState.view) {
                    const editorState = appState.view.state;
                    const collapsed = editorState.selection.empty;
                    const linkMark = EditorUtils.getMark(
                        editorState,
                        editorState.schema.marks[EditorToolsSettings.link.mark]
                    );
                    const disabled = collapsed && !linkMark;
                    if (!linkDialog && !disabled) {
                        setLinkDialog(true);
                    }
                }
                return !linkDialog;
            }
        };

        return [
            new ProseMirror.Plugin({
                view: () => ({ update: (view) => setAppState({ view }) }),
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
            ProseMirror.history(),
            ProseMirror.dropCursor(),
            ProseMirror.gapCursor(),
            ProseMirror.keymap(shortcuts),
            ProseMirror.keymap(ProseMirror.baseKeymap)
            // Add your custom plugin here.
        ];
    };

    const onPasteHtml = (html) => {
        console.log(html);

        // Here you can modify and return the pasted HTML.
        return html;
    };

    const { tools = [] } = props;
    const buttons = tools.map((item, index) =>
        Array.isArray(item) ? (
            <ButtonGroup key={index}>{item.map(renderTool, index)}</ButtonGroup>
        ) : (
            renderTool(item, index)
        )
    );

    return (
        <div className="k-widget k-editor">
            <Toolbar>{buttons}</Toolbar>
            <div className="k-content" style={{ height: '300px' }}>
                <div
                    ref={_contentElement}
                    style={{
                        boxSizing: 'border-box',
                        overflowY: 'scroll',
                        padding: '0 4px'
                    }}
                    className="k-editable-area"
                    suppressContentEditableWarning={true}
                />
            </div>
            {renderDialog(LinkDialog, EditorToolsSettings.link)}
        </div>
    );
};
