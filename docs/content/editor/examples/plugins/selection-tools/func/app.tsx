import * as React from 'react';

import { Editor, EditorMountEvent, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
import { ButtonGroup } from '@progress/kendo-react-buttons';

const { Bold, Italic, Underline } = EditorTools;
const { EditorState, Plugin, PluginKey, EditorView } = ProseMirror;

const App = () => {
    const [view, setView] = React.useState<typeof EditorView | undefined>(undefined);
    const [showTools, setShowTools] = React.useState(false);
    const [position, setPosition] = React.useState({});
    const toolSize = React.useRef({ width: 36, height: 36 });
    const toolsCount = React.useRef(3);
    const offset = React.useRef({ top: -5, left: 0 });

    const selectionToolsPlugin = () =>
        new Plugin({
            key: new PluginKey('selection-tools'),
            view: () => ({
                update: (newView, _prevState) => {
                    const state = newView.state;
                    let newState = { view: newView, showTools: false, position: {} };
                    const selectionCollapsed = state.selection.empty;

                    if (!selectionCollapsed) {
                        let { from, to } = state.selection;
                        let start = newView.coordsAtPos(from),
                            end = newView.coordsAtPos(to);
                        let left = Math.max((start.left + end.left) / 2, start.left);
                        newState.showTools = true;
                        newState.position = {
                            top: start.top - toolSize.current.height + offset.current.top,
                            left: left - (toolSize.current.width * toolsCount.current) / 2 + offset.current.left
                        };
                    }
                    setPosition(newState.position);
                    setShowTools(newState.showTools);
                    setView(newState.view);
                }
            })
        });

    const onMount = (event: EditorMountEvent) => {
        const state = event.viewProps.state;
        const plugins = [...state.plugins, selectionToolsPlugin()];

        return new EditorView(
            { mount: event.dom },
            {
                ...event.viewProps,
                state: EditorState.create({ doc: state.doc, plugins })
            }
        );
    };

    const onScroll = () => setShowTools(false);

    const renderTools = () => {
        const toolProps = {
            view: view,
            style: { width: toolSize.current.width, height: toolSize.current.height }
        };

        return (
            showTools && (
                <span
                    style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        ...position
                    }}
                >
                    <ButtonGroup>
                        <Bold {...toolProps} />
                        <Italic {...toolProps} />
                        <Underline {...toolProps} />
                    </ButtonGroup>
                    <span className="k-callout k-callout-s" style={{ color: '#ededed' }} />
                </span>
            )
        );
    };

    return (
        <div onScroll={onScroll}>
            <Editor
                contentStyle={{ height: 220 }}
                defaultContent="<p>Select any text and Bold, Italic and Underline tools will appear above the selection.</p>"
                defaultEditMode="div"
                onMount={onMount}
            />
            {renderTools()}
        </div>
    );
};

export default App;
