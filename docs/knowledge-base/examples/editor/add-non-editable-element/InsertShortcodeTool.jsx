import * as React from "react";
import { EditorUtils } from "@progress/kendo-react-editor";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const shortcodes = [
  { text: "Name", code: "{{name}}", id: 1 },
  { text: "Initials", code: "{{initials}}", id: 2 },
  { text: "Address (Street)", code: "{{address_street}}", id: 3 },
  { text: "Address (City)", code: "{{address_city}}", id: 4 },
  { text: "Address (State)", code: "{{address_state}}", id: 5 },
  { text: "Address (Zip)", code: "{{address_zip}}", id: 6 },
  { text: "Email", code: "{{email}}", id: 7 },
  { text: "Phone", code: "{{phone}}", id: 8 }
];

const defaultItem = { text: "Insert Shortcode", code: "", id: 0 };

export class InsertShortcodeTool extends React.Component {
  handleChange = event => {
    if (!event.target.value.code) {
      return;
    }
    const { view } = this.props;
    const schema = view.state.schema;

    // get the new node from the schema
    const nodeType = schema.nodes.nonEditable;

    // create a new node with the selected text
    const node = nodeType.createAndFill(
      { class: "shortcode" },
      schema.text(event.target.value.code)
    );

    // Insert the new node
    EditorUtils.insertNode(view, node);
    view.focus();
  }

  render() {
    const { view } = this.props;
    const nodeType = view && view.state.schema.nodes.text;
    const canInsert = view && EditorUtils.canInsert(view.state, nodeType);

    return (
      <DropDownList
        data={shortcodes}
        textField="text"
        dataItemKey="id"
        defaultItem={defaultItem}
        value={defaultItem}
        disabled={!canInsert}
        onChange={this.handleChange}
        style={{ userSelect: "none" }}
      />
    );
  }
}
