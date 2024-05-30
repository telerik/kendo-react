import * as React from 'react';
export default function MyCommandCell(enterEdit, remove, save, cancel, addChild, editField) {
  return class extends React.Component {
    render() {
      const {
        dataItem
      } = this.props;
      return dataItem[editField] ? <td>
                    <button className="k-button" onClick={() => save(dataItem)}>
                      {dataItem.isNew ? 'Add' : 'Update'}
                    </button>
                    <button className="k-button" onClick={() => cancel(dataItem)}>{dataItem.isNew ? 'Discard' : 'Cancel'}
                    </button>
                  </td> : <td>
                    <button className="k-button" onClick={() => addChild(dataItem)}>
                      Add Employee
                    </button>
                    <button className="k-button" onClick={() => enterEdit(dataItem)}>
                      Edit
                    </button>
                    <button className="k-button" onClick={() => remove(dataItem)}>
                      Remove
                    </button>
                  </td>;
    }

  };
}