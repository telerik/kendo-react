import { MarkSpec } from '@progress/kendo-react-editor';

const tagMark = (tag: string): MarkSpec => ({
    // MarkSpec interface
    // https://prosemirror.net/docs/ref/#model.MarkSpec
    [tag]: {
        name: tag,
        inclusive: true,
        parseDOM: [{ tag }],
        toDOM: () => [tag, 0]
    }
});

export { tagMark };
