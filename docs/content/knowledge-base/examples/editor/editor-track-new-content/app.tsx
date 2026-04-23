import * as React from 'react';
import { Editor, EditorUtils, ProseMirror } from '@progress/kendo-react-editor';
import { Button } from '@progress/kendo-react-buttons';
import content from './shared-ed-content-basic';

const { Schema, EditorView, EditorState, Plugin, Fragment, Slice, splitBlock } = ProseMirror;

function markFragmentTracked(fragment: InstanceType<typeof Fragment>, mark: any): InstanceType<typeof Fragment> {
    const nodes: any[] = [];

    fragment.forEach((node: any) => {
        if (node.isText) {
            nodes.push(node.mark([...node.marks, mark]));
            return;
        }

        if (node.content && node.content.size) {
            const trackedContent = markFragmentTracked(node.content, mark);
            nodes.push(node.copy(trackedContent));
            return;
        }

        nodes.push(node);
    });

    return Fragment.fromArray(nodes);
}

function createTrackingPlugin(isTrackingEnabled: () => boolean) {
    return new Plugin({
        props: {
            handleTextInput(view: InstanceType<typeof EditorView>, from: number, to: number, text: string) {
                if (!isTrackingEnabled()) {
                    return false;
                }

                const { state } = view;
                const trackedMark = state.schema.marks.trackedText?.create();

                if (!trackedMark) {
                    return false;
                }

                const textNode = state.schema.text(text, [trackedMark]);

                let tr = state.tr.insertText('', from, to);
                tr = tr.replaceSelectionWith(textNode, false);
                tr = tr.setStoredMarks([trackedMark]);

                view.dispatch(tr);
                return true;
            },

            handlePaste(view: InstanceType<typeof EditorView>, _event: ClipboardEvent, slice: InstanceType<typeof Slice>) {
                if (!isTrackingEnabled()) {
                    return false;
                }

                const { state } = view;
                const trackedMark = state.schema.marks.trackedText?.create();

                if (!trackedMark) {
                    return false;
                }

                const trackedSlice = new Slice(
                    markFragmentTracked(slice.content, trackedMark),
                    slice.openStart,
                    slice.openEnd
                );

                let tr = state.tr.replaceSelection(trackedSlice);
                tr = tr.setStoredMarks([trackedMark]);

                view.dispatch(tr);
                return true;
            },

            handleKeyDown(view: InstanceType<typeof EditorView>, event: KeyboardEvent) {
                if (!isTrackingEnabled() || event.key !== 'Enter') {
                    return false;
                }

                event.preventDefault();

                const { state } = view;
                const trackedMark = state.schema.marks.trackedText?.create();

                if (!trackedMark) {
                    return false;
                }

                splitBlock(state, (tr: any) => {
                    tr.setStoredMarks([trackedMark]);
                    view.dispatch(tr);
                });

                return true;
            },
        },
    });
}

const App = () => {
    const editorRef = React.useRef<Editor>(null);
    const viewRef = React.useRef<InstanceType<typeof EditorView>>(null);
    const [trackingEnabled, setTrackingEnabled] = React.useState(false);
    const trackingEnabledRef = React.useRef(false);

    const trackingPluginRef = React.useRef<any>(null);

    if (!trackingPluginRef.current) {
        trackingPluginRef.current = createTrackingPlugin(() => trackingEnabledRef.current);
    }

    const EnableTrackingTool = ({ view }: { view: InstanceType<typeof EditorView> }) => {
        const click = () => {
            trackingEnabledRef.current = true;
            setTrackingEnabled(true);

            const trackedMark = view.state.schema.marks.trackedText?.create();
            if (!trackedMark) {
                return;
            }

            const tr = view.state.tr.setStoredMarks([trackedMark]);
            view.dispatch(tr);
            view.focus();
        };

        return (
            <Button
                themeColor={trackingEnabled ? 'primary' : 'base'}
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
                onClick={click}
            >
                {trackingEnabled ? 'Tracking Enabled' : 'Enable Tracking'}
            </Button>
        );
    };

    (EnableTrackingTool as any).toolName = 'enableTracking';

    const onMount = (e: any) => {
        const { schema: base, plugins } = e.viewProps.state;

        const schema = new Schema({
            nodes: base.spec.nodes,
            marks: {
                ...base.spec.marks,
                trackedText: {
                    inclusive: true,
                    excludes: '',
                    parseDOM: [
                        {
                            tag: 'span[data-tracked="true"]',
                            getAttrs: (dom: HTMLElement) => ({
                                'data-tracked': dom.getAttribute('data-tracked'),
                                style: dom.getAttribute('style'),
                            }),
                        },
                    ],
                    attrs: {
                        'data-tracked': { default: 'true' },
                        style: { default: 'color: blue;' },
                    },
                    toDOM: (mark: any) => [
                        'span',
                        {
                            'data-tracked': mark.attrs['data-tracked'],
                            style: mark.attrs.style,
                        },
                        0,
                    ],
                },
            },
        });

        const doc = EditorUtils.createDocument(schema, content);

        const state = EditorState.create({
            doc,
            schema,
            plugins: [trackingPluginRef.current, ...plugins],
        });

        const view = new EditorView(
            { mount: e.dom },
            {
                ...e.viewProps,
                state,
            }
        );

        viewRef.current = view;
        return view;
    };

    return (
        <Editor
            onMount={onMount}
            tools={[[EnableTrackingTool]]}
            contentStyle={{ height: 240 }}
            ref={editorRef}
        />
    );
};

export default App;
