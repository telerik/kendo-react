import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartValueAxis, ChartValueAxisItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import { dataService } from '../../services';
import styles from './stock-list.module.scss';
import { StockCellProps } from './StockCellProps';

export const ChartCell = (props: StockCellProps) => {
    const [data, setData] = React.useState<any>([]);
    const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');
    const fetchDate = React.useCallback(
        async () => {
            setStatus('loading');
            try {
                const newDate = await dataService.getOneDaySymbol(props.dataItem.symbol);
                setData(newDate);
                setStatus('ready');
            } catch {
                setStatus('error');
            }
        },
        [props.dataItem.symbol]
    )

    React.useEffect(() => { fetchDate() }, [props.dataItem.symbol, fetchDate]);

    const direction = Number(props.dataItem.day_change ?? 0) >= 0
        ? 'up'
        : 'down'

    const color = direction === 'down'
        ? 'var(--kendo-color-error)'
        : 'var(--kendo-color-success)';

    const chart = status === 'loading'
        ? <span className={styles.chartStatus} role="status">Loading chart…</span>
        : status === 'error'
            ? <span className={styles.chartStatus} role="status">Chart unavailable</span>
            : (
            <Chart renderAs="svg" style={{ height: 50 }} transitions={false} zoomable={false}>
                <ChartSeries>
                    <ChartSeriesItem
                        data={data}
                        type='line'
                        field="close"
                        markers={{ visible: false }}
                        color={color}
                        categoryField="date"
                    />
                    <ChartSeriesItem
                        data={data}
                        type='area'
                        field="close"
                        categoryField="date"
                        markers={{ visible: false }}
                        color={color}
                        opacity={0.2}
                    />
                </ChartSeries>
                <ChartValueAxis>
                    <ChartValueAxisItem
                        visible={false}
                        majorGridLines={{ visible: false }}
                        axisCrossingValue={direction === 'up' ? null : 1000}
                    />
                </ChartValueAxis>
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        type="date"
                        baseUnit="hours"
                        baseUnitStep={1}
                        majorGridLines={{ visible: false }}
                        visible={false}
                    />
                </ChartCategoryAxis>
            </Chart>
            );

    return props.asCard
        ? <div className={styles['chart-cell']}>{chart}</div>
        : <td className={styles['chart-cell']}>{chart}</td>;
}