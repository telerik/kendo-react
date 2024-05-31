import { ProseMirror } from '@progress/kendo-react-editor';
const { Schema, tableNodes } = ProseMirror;
import {
  getAttributes,
  commonAttributes,
  hasAttrs,
  getAttrs,
  tagMark,
  hole,
} from './schema-utils';

// The MarkSpec interface - https://prosemirror.net/docs/ref/#model.MarkSpec
const marks: { [name: string]: any } = {
  link: {
    attrs: {
      ...commonAttributes(),
      href: { default: null },
      target: { default: '_blank' },
      title: { default: null },
    },
    inclusive: false,
    parseDOM: [{ tag: 'a', getAttrs: getAttributes }],
    toDOM(node) {
      return ['a', getAttrs(node.attrs, false), hole];
    },
  },

  ...tagMark('strong'),
  ...tagMark('b'),
  ...tagMark('em'),
  ...tagMark('i'),
  ...tagMark('u'),
  ...tagMark('del'),
  ...tagMark('sub'),
  ...tagMark('sup'),
  ...tagMark('code'),

  style: {
    attrs: {
      ...commonAttributes(),
    },
    parseDOM: [
      {
        tag: 'span',
        getAttrs: getAttributes,
      },
    ],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['span', getAttrs(node.attrs, false), hole]
        : ['span', hole],
  },
};

// The NodeSpec interface - http://prosemirror.net/docs/ref/#model.NodeSpec
const nodes: { [name: string]: any } = {
  // The top level document node.
  doc: {
    content: 'block+',
  },

  paragraph: {
    content: 'inline*',
    group: 'block',
    attrs: {
      ...commonAttributes(),
    },
    parseDOM: [
      {
        tag: 'p',
        getAttrs: getAttributes,
      },
    ],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['p', getAttrs(node.attrs, false), hole]
        : ['p', hole],
  },

  div: {
    content: 'block*',
    group: 'block',
    attrs: {
      ...commonAttributes(),
    },
    parseDOM: [
      {
        tag: 'div',
        getAttrs: getAttributes,
      },
    ],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['div', getAttrs(node.attrs, false), hole]
        : ['div', hole],
  },

  blockquote: {
    content: 'block+',
    group: 'block',
    defining: true,
    parseDOM: [{ tag: 'blockquote' }],
    toDOM: () => ['blockquote', hole],
  },

  horizontal_rule: {
    group: 'block',
    parseDOM: [{ tag: 'hr' }],
    toDOM() {
      return ['hr'];
    },
  },

  heading: {
    attrs: {
      ...commonAttributes(),
      level: { default: 1 },
    },
    content: 'inline*',
    group: 'block',
    defining: true,
    parseDOM: [
      { tag: 'h1', getAttrs: (node) => ({ ...getAttributes(node), level: 1 }) },
      { tag: 'h2', getAttrs: (node) => ({ ...getAttributes(node), level: 2 }) },
      { tag: 'h3', getAttrs: (node) => ({ ...getAttributes(node), level: 3 }) },
      { tag: 'h4', getAttrs: (node) => ({ ...getAttributes(node), level: 4 }) },
      { tag: 'h5', getAttrs: (node) => ({ ...getAttributes(node), level: 5 }) },
      { tag: 'h6', getAttrs: (node) => ({ ...getAttributes(node), level: 6 }) },
    ],
    toDOM: (node) =>
      hasAttrs(node.attrs, 'level')
        ? ['h' + node.attrs.level, getAttrs(node.attrs, 'level'), hole]
        : ['h' + node.attrs.level, hole],
  },

  code_block: {
    content: 'text*',
    marks: '',
    group: 'block',
    code: true,
    defining: true,
    parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
    toDOM() {
      return ['pre', ['code', hole]];
    },
  },

  // The text node.
  text: {
    inline: true,
    group: 'inline',
  },

  image: {
    inline: true,
    attrs: {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: null },
      height: { default: null },
      ...commonAttributes(),
    },
    group: 'inline',
    draggable: true,
    parseDOM: [{ tag: 'img', getAttrs: getAttributes }],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['img', getAttrs(node.attrs, false)]
        : ['img'],
  },

  hard_break: {
    inline: true,
    attrs: {
      ...commonAttributes(),
    },
    group: 'inline',
    selectable: false,
    parseDOM: [
      {
        tag: 'br',
        getAttrs: getAttributes,
      },
    ],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['br', getAttrs(node.attrs, false)]
        : ['br'],
  },

  ordered_list: {
    content: 'list_item+',
    group: 'block',
    attrs: {
      ...commonAttributes(),
      type: { default: null },
      order: { default: 1 },
    },
    parseDOM: [
      {
        tag: 'ol',
        getAttrs: (dom) => {
          return {
            ...getAttributes(dom),
            order: dom.hasAttribute('start')
              ? parseInt(dom.getAttribute('start') || '1', 10)
              : 1,
          };
        },
      },
    ],
    toDOM: (node) => {
      return node.attrs.order === 1
        ? hasAttrs(node.attrs, 'order')
          ? ['ol', getAttrs(node.attrs, 'order'), hole]
          : ['ol', 0]
        : [
            'ol',
            { ...getAttrs(node.attrs, 'order'), start: node.attrs.order },
            hole,
          ];
    },
  },

  bullet_list: {
    content: 'list_item+',
    group: 'block',
    attrs: { ...commonAttributes() },
    parseDOM: [{ tag: 'ul', getAttrs: getAttributes }],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['ul', getAttrs(node.attrs, false), hole]
        : ['ul', 0],
  },

  list_item: {
    content: 'block*',
    attrs: { ...commonAttributes() },
    parseDOM: [{ tag: 'li', getAttrs: getAttributes }],
    toDOM: (node) =>
      hasAttrs(node.attrs, false)
        ? ['li', getAttrs(node.attrs, false), hole]
        : ['li', 0],
    defining: true,
  },

  // Imported from the `prosemirror-tables` package
  // https://github.com/ProseMirror/prosemirror-tables/
  ...tableNodes({
    tableGroup: 'block',
    cellContent: 'block+',
    cellAttributes: {},
  }),
};

const mySchema = new Schema({ nodes, marks });

export default mySchema;
