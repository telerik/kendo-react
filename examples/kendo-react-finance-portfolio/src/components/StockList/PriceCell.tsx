import * as React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';
import { Push } from '@progress/kendo-react-animation';
import { getStockValue, StockCellProps } from './StockCellProps';

export const PriceCell = (props: StockCellProps) => {
    const oldValue = React.useRef<string>();
    const intl = useInternationalization();
    const value = getStockValue(props.dataItem, props.field);
    const numericValue = typeof value === 'number' ? value : Number(value);


    const direction = oldValue.current && Number(oldValue.current) < numericValue
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
                    {intl.formatNumber(numericValue, 'c')}
                </React.Fragment>
            </Push>
    );
    return props.asCard
        ? <span>{content}</span>
        : <td>{content}</td>;
}