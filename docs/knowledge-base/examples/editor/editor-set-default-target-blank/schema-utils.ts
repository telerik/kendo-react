const getAttributes = (dom) => {
    const result = {};
    let attributes = dom.attributes, attr;
    for (let i = 0; i < attributes.length; i++) {
        attr = attributes[i];
        result[attr.name] = attr.value;
    }

    return result;
};

const commonAttributes = () => {
    return {
        style: { default: null },
        class: { default: null },
        id: { default: null }
    };
};

const hasAttrs = (attrs, exclude) => {
    for (let attr in attrs) {
        if (attr && attrs[attr] !== null && attr !== exclude) {
            return true;
        }
    }
    return false;
};

const getAttrs = (attrs, exclude) => {
    const result = {};
    for (let attr in attrs) {
        if (attr && attrs[attr] !== null && attr !== exclude) {
            result[attr] = attrs[attr];
        }
    }
    return result;
};

const tagMark = tag => {
    // https://prosemirror.net/docs/ref/#model.MarkSpec
    return {
        [tag]: {
            name: tag,
            inclusive: true,
            parseDOM: [ { tag: tag } ],
            toDOM: () => [ tag, hole ]
        }
    };
};

const hole = 0;

export {
    getAttributes, commonAttributes, hasAttrs, getAttrs, tagMark, hole
};
