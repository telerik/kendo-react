import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { paragraphAddIcon } from '@progress/kendo-svg-icons';
import { ProseMirror, EditorTools } from '@progress/kendo-react-editor';
const { Plugin, PluginKey, Decoration, DecorationSet } = ProseMirror;

export const paragraphMarkKey = new PluginKey('paragraph-mark');

export function paragraphMark() {
    return new Plugin({
        key: paragraphMarkKey,
        state: {
            init: () => false,
            apply: (tr, value) => {
                const next = tr.getMeta(paragraphMarkKey);
                if (next !== undefined && next !== value) {
                    return next;
                }
                return value;
            }
        },
        props: {
            decorations: (state) => {
                const { doc } = state;

                const decorations: any[] = [];

                if (paragraphMarkKey.getState(state)) {
                    doc.nodesBetween(0, doc.content.size, (node, pos) => {
                        if (node.isBlock && node.type.name === 'paragraph') {
                            decorations.push(
                                Decoration.node(pos, pos + node.nodeSize, {
                                    'data-suffix': '¶'
                                })
                            );
                        }
                    });
                }

                return DecorationSet.create(doc, decorations);
            }
        }
    });
}

const onDownPreventDefault = {
    onMouseDown: (e: any) => e.preventDefault(),
    onPointerDown: (e: any) => e.preventDefault()
};

export const ParagraphTool = (props: EditorTools.InlineFormatToolProps) => {
    const { view, render, ...buttonProps } = props;
    const state = view && view.state;
    const toolState = Boolean(state && paragraphMarkKey.getState(state));
    const onClick = React.useCallback(() => {
        if (view) {
            view.dispatch(view.state.tr.setMeta(paragraphMarkKey, !toolState));
        }
    }, [toolState, view]);

    return (
        <Button
            onClick={onClick}
            togglable={true}
            selected={toolState}
            svgIcon={paragraphAddIcon}
            title={'Show paragraphs'}
            {...onDownPreventDefault}
            {...buttonProps}
        />
    );
};

export const styles = `
  p[data-suffix]:after {
    content: attr(data-suffix);
    color: rgb(0, 0, 0, 0.5);
    cursor: text;
    font-style: italic;
  }
  p[data-suffix] .ProseMirror-trailingBreak {
    display: none;
  }
`;
