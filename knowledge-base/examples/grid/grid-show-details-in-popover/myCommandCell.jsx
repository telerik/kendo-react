import * as React from 'react';
export const MyCommandCell = (props) => {
  const { dataItem } = props;
  return (
    <td className="k-command-cell">
      <button
        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-remove-command"
        onClick={(ev) => props.showPopover(dataItem, ev.target)}
      >
        Show popover
      </button>
    </td>
  );
};
