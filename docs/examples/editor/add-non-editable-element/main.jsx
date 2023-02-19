import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Editor,
  EditorTools,
  EditorUtils,
  ProseMirror
} from "@progress/kendo-react-editor";
import { InsertShortcodeTool } from "./InsertShortcodeTool.jsx";

const { Bold, Italic, Underline, ViewHtml } = EditorTools;
const { Schema, EditorView, EditorState } = ProseMirror;

// This is the node configuration
const nonEditable = {
  name: "nonEditable",
  inline: true,
  group: "inline",
  content: "inline+",
  marks: "",
  attrs: {
    contenteditable: { default: null },
    class: { default: null },
    style: { default: null }
  },
  atom: true,
  parseDOM: [{ tag: "span.uneditable", priority: 51 }],
  // The styles can be added via the class as well
  toDOM: () => [
    "span",
    {
      contenteditable: false,
      class: "uneditable",
      style: "user-select: none; opacity: 0.5;"
    },
    0
  ]
};

class App extends React.Component {
  html = `<p>sample paragraph</p>`;

  onMount = event => {
    const { viewProps } = event;
    const { plugins, schema } = viewProps.state;

    // Append a new node.
    let nodes = schema.spec.nodes.addToEnd('nonEditable', nonEditable);

    // Create the new schema.
    const mySchema = new Schema({ nodes: nodes, marks: schema.spec.marks });

    // Create a new document using the modified schema.
    const doc = EditorUtils.createDocument(mySchema, this.html);

    // Return the custom EditorView object that will be used by Editor.
    return new EditorView(
      { mount: event.dom },
      {
        ...event.viewProps,
        state: EditorState.create({ doc, plugins })
      }
    );
  };

  render() {
    return (
      <Editor
        tools={[[Bold, Italic, Underline, ViewHtml, InsertShortcodeTool]]}
        contentStyle={{ height: 300 }}
        onMount={this.onMount}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
