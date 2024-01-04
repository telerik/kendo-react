import * as React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Push } from '@progress/kendo-react-animation';

export const PriceCell = (props: GridCellProps) => {
    const oldValue = React.useRef<string>();
    const intl = useInternationalization();
    const value = props.field && props.dataItem[props.field]


    const direction = oldValue.current && Number(oldValue.current) < Number(value)
        ? "up"
        : "down"


    React.useEffect(() => {
        oldValue.current = value;
    })

    return (
        <td>
            <Push
                transitionEnterDuration={500}
                transitionExitDuration={0}
                stackChildren={true}
                direction={direction}
            >
                <React.Fragment key={value}>
                    {intl.formatNumber(value, 'c')}
                </React.Fragment>
            </Push>
        </td>
    )
}