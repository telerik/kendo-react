import * as React from 'react'
import { GridCellProps } from '@progress/kendo-react-grid'
import { classNames } from '@progress/kendo-react-common'

export const CheckboxCell = (props: GridCellProps) => {
    const id = `checkbox-${props.dataItem.symbol}`;

    const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (props.selectionChange) {
                props.selectionChange.call(undefined, {
                    syntheticEvent: event,
                })
            }
        }, [props.selectionChange])

    return (
        <td
            style={props.style}
            className={classNames(props.className, 'text-center')}
            colSpan={props.colSpan}
        >
            <span>
                <input onChange={handleChange} type="checkbox" checked={props.dataItem.selected || false} id={id} />
                <label className="k-checkbox-label" htmlFor={id} />
            </span>
        </td>
    )
}