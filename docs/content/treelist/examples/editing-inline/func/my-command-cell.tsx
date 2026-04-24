import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { TreeListCellProps } from '@progress/kendo-react-treelist';

const MyCommandCell = (
  enterEdit: (dataItem: any) => void,
  remove: (dataItem: any) => void,
  save: (dataItem: any) => void,
  cancel: (dataItem: any) => void,
  addChild: (dataItem: any) => void,
  editField: string
) => {
  return (props: TreeListCellProps) => {
    const { dataItem } = props;
    return dataItem[editField] ? (
      <td>
        <Button type="button" onClick={() => save(dataItem)}>
          {dataItem.isNew ? 'Add' : 'Update'}
        </Button>
        <Button type="button" onClick={() => cancel(dataItem)}>
          {dataItem.isNew ? 'Discard' : 'Cancel'}
        </Button>
      </td>
    ) : (
      <td>
        <Button type="button" onClick={() => addChild(dataItem)}>
          Add Employee
        </Button>
        <Button type="button" onClick={() => enterEdit(dataItem)}>
          Edit
        </Button>
        <Button type="button" onClick={() => remove(dataItem)}>
          Remove
        </Button>
      </td>
    );
  };
};

export default MyCommandCell;
