import * as React from 'react';
import { Editor, EditorMountEvent, EditorTools, ProseMirror } from '@progress/kendo-react-editor';
const { EditorView, EditorState, TextSelection, InputRule, inputRules, wrappingInputRule, textblockTypeInputRule } =
    ProseMirror;

const { Bold, Italic, Underline } = EditorTools;

const inputRule = (nodes) => {
    const { ordered_list, bullet_list, heading, blockquote, code_block } = nodes;

    return inputRules({
        rules: [
            // Converts double dashes to an emdash.
            new InputRule(/--$/, '—'),

            // Converts three dots to an ellipsis character.
            new InputRule(/\.\.\.$/, '…'),

            // Converts '# ', '## ', '### ', '#### ', '##### ', '###### '
            // into heading 1, 2, 3, 4, 5, and 6, according to the '#' characters count.
            textblockTypeInputRule(/^(#{1,6})\s$/, heading, (match) => ({ level: match[1].length })),

            // Converts '> ' into a blockquote.
            wrappingInputRule(/^\s*>\s$/, blockquote),

            // Converts three backticks to a code block.
            textblockTypeInputRule(/^```$/, code_block),

            // Converts '- ' or '+ ' to a bullet list.
            wrappingInputRule(/^\s*([-+*])\s$/, bullet_list),

            // Converts '1. ' to an ordered list.
            wrappingInputRule(
                /^(\d+)\.\s$/,
                ordered_list,
                (match) => ({ order: Number(match[1]) }),
                (match, node) => node.childCount + node.attrs.order === match[1]
            ),

            // Converts an URL to a link.
            new InputRule(
                // https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
                /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\s$/,
                (state, match, start, end) => {
                    const link = state.schema.marks.link.create({ href: match[1] });
                    return state.tr.addMark(start, end, link).insertText(' ');
                }
            ),

            // Converts '!image[https://image-path/something.png]' to image.
            new InputRule(/\!image\[([^\]]+?)\]\s$/, (state, match, start, end) => {
                const image = state.schema.nodes.image.createAndFill({ src: match[1] });
                return (
                    image &&
                    state.tr.setSelection(TextSelection.create(state.doc, start, end)).replaceSelectionWith(image)
                );
            })
        ]
    });
};

const onMount = (event: EditorMountEvent) => {
    const state = event.viewProps.state;
    const plugins = [...state.plugins, inputRule(state.schema.nodes)];

    return new EditorView(
        { mount: event.dom },
        {
            ...event.viewProps,
            state: EditorState.create({ doc: state.doc, plugins })
        }
    );
};

const App = () => {
    return <Editor tools={[[Bold, Italic, Underline]]} contentStyle={{ height: 300 }} onMount={onMount} />;
};

export default App;
