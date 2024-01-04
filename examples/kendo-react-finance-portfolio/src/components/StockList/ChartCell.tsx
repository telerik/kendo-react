import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartValueAxis, ChartValueAxisItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import { dataService } from '../../services';
import { GridCellProps } from '@progress/kendo-react-grid';
import styles from './stock-list.module.scss';

export const ChartCell = (props: GridCellProps) => {
    const [data, setData] = React.useState<any>([]);
    const fetchDate = React.useCallback(
        async () => {
            const newDate = await dataService.getOneDaySymbol(props.dataItem.symbol);
            setData(newDate)
        },
        [props.dataItem.symbol]
    )

    React.useEffect(() => { fetchDate() }, [props.dataItem.symbol, fetchDate]);

    const direction = props.dataItem.day_change >= 0
        ? 'up'
        : 'down'

    const color = direction === 'down'
        ? '#d9534f'
        : '#5cb85c';

    return (
        <td className={styles['chart-cell']}>
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
        </td>
    );
}