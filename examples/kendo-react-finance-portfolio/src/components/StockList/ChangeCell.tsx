import * as React from 'react';
import styles from './stock-list.module.scss';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Push } from '@progress/kendo-react-animation';
import { getStockValue, StockCellProps } from './StockCellProps';

export const ChangeCell = (props: StockCellProps) => {
    const oldValue = React.useRef<string>();
    const intl = useInternationalization();
    const value = getStockValue(props.dataItem, props.field);
    const numericValue = typeof value === 'number' ? value : Number(value);


    const direction = numericValue >= 0
        ? "up"
        : "down"

    React.useEffect(() => {
        oldValue.current = String(numericValue);
    })

    const content = (
            <Push
                transitionEnterDuration={500}
                transitionExitDuration={0}
                stackChildren={true}
                direction={direction}
            >
                <React.Fragment key={numericValue}>
                    {props.field === 'change_pct'
                        ? intl.formatNumber(numericValue / 100, 'p2')
                        : intl.formatNumber(numericValue, 'c')}
                </React.Fragment>
            </Push>
    );
    const className = numericValue < 0 ? styles['negative-cell'] : styles['positive-cell'];
    return props.asCard
        ? <span className={className}>{content}</span>
        : <td className={className}>{content}</td>;
}