import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Editor,
  EditorMountEvent,
  EditorTools,
  EditorUtils,
  ProseMirror,
} from '@progress/kendo-react-editor';
import mySchema from './schema';
import content from './content';

const { Bold, Italic, Underline, ViewHtml, Link, Unlink } = EditorTools;

const { EditorView, EditorState } = ProseMirror;

const App = () => {
  const onMount = (event: EditorMountEvent) => {
    const { viewProps } = event;
    const { plugins } = viewProps.state;

    // Create a new document using the schema.
    const doc = EditorUtils.createDocument(mySchema, content);

    // Return the custom EditorView object that will be used by Editor.
    return new EditorView(
      { mount: event.dom },
      {
        ...event.viewProps,
        state: EditorState.create({ doc, plugins }),
      }
    );
  };

  return (
    <Editor
      tools={[[Bold, Italic, Underline], [Link, Unlink], [ViewHtml]]}
      contentStyle={{ height: 330 }}
      onMount={onMount}
    />
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
