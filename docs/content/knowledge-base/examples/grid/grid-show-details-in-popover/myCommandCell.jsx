import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export const MyCommandCell = (props) => {
    const { dataItem } = props;
    return (
    <td className="k-command-cell">
      <Button
        type="button"
        onClick={(ev) => props.showPopover(dataItem, ev.target)}
      >
        Show popover
      </Button>
    </td>
    );
};
