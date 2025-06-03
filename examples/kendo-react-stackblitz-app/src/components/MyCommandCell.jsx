import * as React from "react";
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';

export const MyCommandCell = (props) => {
  const { dataItem } = props;
  const inEdit = props.isInEdit;
  const isNewItem = dataItem.ProductID === null;

  const onDeleteData = (dataItem) => {
    props.remove(dataItem);
  };
  return (
    <td {...props.tdProps} className={classNames('k-command-cell', ...props.className)}>
      <Button
        className={inEdit ? 'k-grid-save-command' : 'k-grid-edit-command'}
        themeColor={'primary'}
        onClick={() =>
          inEdit ? (isNewItem ? props.add(dataItem) : props.update(dataItem)) : props.edit(dataItem)
        }
      >
        {inEdit ? (isNewItem ? 'Add' : 'Update') : 'Edit'}
      </Button>
      <Button
        className={inEdit ? 'k-grid-cancel-command' : 'k-grid-remove-command'}
        themeColor={'base'}
        onClick={() =>
          inEdit
            ? isNewItem
              ? props.discard(dataItem)
              : props.cancel(dataItem)
            : onDeleteData(props.dataItem)
        }
      >
        {inEdit ? (isNewItem ? 'Discard' : 'Cancel') : 'Remove'}
      </Button>
    </td>
  );
};