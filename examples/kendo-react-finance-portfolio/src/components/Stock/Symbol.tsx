import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './stock.module.scss';
import { useInternationalization } from '@progress/kendo-react-intl';

export interface SymbolProps {
    symbol?: string;
    data?: any;
}

export const Symbol = (props: SymbolProps) => {
    const intl = useInternationalization();
    const target = document && document.querySelector(".k-splitbar");

    const direction = props.data && (Number(props.data["price_open"]) < Number(props.data["price"]))
        ? 'up'
        : 'down'

    const color = direction === 'down'
        ? '#d9534f'
        : '#5cb85c';

    return target && props.data
        ? ReactDOM.createPortal(
            <div className={styles['stock']} style={{ backgroundColor: color }}>
                <span className={styles["stock-price"]}>
                    {`${props.symbol} ${intl.formatNumber(props.data.price, "c")}`}
                </span>
            </div>,
            target
        )
        : null
}

