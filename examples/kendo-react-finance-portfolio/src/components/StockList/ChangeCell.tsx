import * as React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';
import styles from './stock-list.module.scss';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Push } from '@progress/kendo-react-animation';

export const ChangeCell = (props: GridCellProps) => {
    const oldValue = React.useRef<string>();
    const intl = useInternationalization();
    const value = props.field && props.dataItem[props.field]


    const direction = value >= 0
        ? "up"
        : "down"

    React.useEffect(() => {
        oldValue.current = value;
    })

    return (
        <td className={value < 0 ? styles['negative-cell'] : styles['positive-cell']}>
            <Push
                transitionEnterDuration={500}
                transitionExitDuration={0}
                stackChildren={true}
                direction={direction}
            >
                <React.Fragment key={value}>
                    {props.field === 'change_pct'
                        ? intl.formatNumber(value / 100, 'p2')
                        : intl.formatNumber(value, 'c')}
                </React.Fragment>
            </Push>
        </td>
    )
}