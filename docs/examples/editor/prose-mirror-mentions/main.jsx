import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Editor, ProseMirror, EditorUtils } from '@progress/kendo-react-editor';
import { addMentionNodes, addTagNodes, getMentionsPlugin } from 'prosemirror-mentions';

const { Schema, EditorView, EditorState } = ProseMirror;

import './style.css';

const mentionsData = [

    { name: 'Anna Brown', id: '103', email: 'anna@gmail.com' },
    { name: 'John Doe', id: '101', email: 'joe@gmail.com' },
    { name: 'Joe Lewis', id: '102', email: 'lewis@gmail.com' }
];

const tagsData = [
    { tag: 'WikiLeaks' },
    { tag: 'NetNeutrality' },
    { tag: 'KendoReact' }
];

/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
const getMentionSuggestionsHTML = items => {
    return '<div class="suggestion-item-list">' +
        items.map(i => '<div class="suggestion-item">' + i.name + '</div>').join('') + '</div>';
};

/**
 * IMPORTANT: outer div's "suggestion-item-list" class is mandatory. The plugin uses this class for querying.
 * IMPORTANT: inner div's "suggestion-item" class is mandatory too for the same reasons
 */
const getTagSuggestionsHTML = items => {
    return '<div class="suggestion-item-list">' +
        items.map(i => '<div class="suggestion-item">' + i.tag + '</div>').join('') + '</div>';
};

export const mentionPlugin = getMentionsPlugin({
    getSuggestions: (type, text, done) => {
        setTimeout(
            () => {
                if (type === 'mention') {
                    done(mentionsData);
                } else {
                    done(tagsData);
                }
            },
            0);
    },
    getSuggestionsHTML: (items, type) => {
        if (type === 'mention') {
            return getMentionSuggestionsHTML(items);
        } else if (type === 'tag') {
            return getTagSuggestionsHTML(items);
        }
    }
});

const App = () => {
    const handleMount = (event) => {
        const { viewProps } = event;
        const { plugins, schema } = viewProps.state;
        const marks = schema.spec.marks;
        const nodes = schema.spec.nodes;

        const mySchema = new Schema({
            nodes: addTagNodes(addMentionNodes(nodes)),
            marks
        });

        const doc = EditorUtils.createDocument(mySchema, '');

        plugins.unshift(mentionPlugin);

        return new EditorView(
            { mount: event.dom }, {
            ...viewProps,
            state: EditorState.create({ doc, plugins })
        }
        );
    };

    return (
        <Editor
            contentStyle={{ height: 500 }}
            onMount={handleMount}
        />
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);
