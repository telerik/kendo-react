import { ProseMirror } from '@progress/kendo-react-editor';
const { Plugin, PluginKey, Decoration, DecorationSet } = ProseMirror;

export function placeholder(emptyMessage: string) {
    return new Plugin({
        key: new PluginKey('placeholder'),
        props: {
            decorations: (state) => {
                const { doc } = state;
                const empty = doc.textContent === '' && doc.childCount <= 1 && doc.content.size <= 2;

                if (!empty) {
                    return DecorationSet.empty;
                }

                const decorations: Array<any> = [];
                const decAttrs = { class: 'placeholder', 'data-placeholder': emptyMessage };

                doc.descendants((node, pos) => {
                    decorations.push(Decoration.node(pos, pos + node.nodeSize, decAttrs));
                });

                return DecorationSet.create(doc, decorations);
            }
        }
    });
}

export const styles = `p.placeholder:first-child:before {
        content: attr(data-placeholder);
        float: left;
        color: rgb(0, 0, 0, 0.5);
        cursor: text;
        height: 0;
        font-style: italic;
    }`;
