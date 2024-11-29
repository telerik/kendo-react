import * as React from "react";
import { Button } from '@progress/kendo-react-buttons';

export const MyCommandCell = (props) => {
  const { dataItem } = props;
  const inEdit = dataItem[props.editField];
  const isNewItem = dataItem.ProductID === undefined;
  return inEdit ? (
    <td className="k-command-cell">
      <Button
        className="k-grid-save-command"
        themeColor={"primary"}
        onClick={() =>
          isNewItem ? props.add(dataItem) : props.update(dataItem)
        }
      >
        {isNewItem ? "Add" : "Update"}
      </Button>
      <Button
        className="k-grid-cancel-command"
        onClick={() =>
          isNewItem ? props.discard(dataItem) : props.cancel(dataItem)
        }
      >
        {isNewItem ? "Discard" : "Cancel"}
      </Button>
    </td>
  ) : (
    <td className="k-command-cell">
      <Button
        className="k-grid-edit-command"
        themeColor={"primary"}
        onClick={() => props.edit(dataItem)}
      >
        Edit
      </Button>
      <Button
        className="k-grid-remove-command"
        onClick={() =>
          // eslint-disable-next-line no-restricted-globals
          confirm("Confirm deleting: " + dataItem.ProductName) &&
          props.remove(dataItem)
        }
      >
        Remove
      </Button>
    </td>
  );
};