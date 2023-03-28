import * as React from 'react';
export default function MyCommandCell(enterEdit, remove, save, cancel, addChild, editField) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render() {
      const {
        dataItem
      } = this.props;
      return dataItem[editField] ? <td>
                    <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={() => save(dataItem)}>
                      {dataItem.isNew ? 'Add' : 'Update'}
                    </button>
                    <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={() => cancel(dataItem)}>{dataItem.isNew ? 'Discard' : 'Cancel'}
                    </button>
                  </td> : <td>
                    <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={() => addChild(dataItem)}>
                      Add Employee
                    </button>
                    <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={() => enterEdit(dataItem)}>
                      Edit
                    </button>
                    <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={() => remove(dataItem)}>
                      Remove
                    </button>
                  </td>;
    }

  };
}