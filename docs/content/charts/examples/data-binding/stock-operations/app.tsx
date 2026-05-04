import * as React from 'react';
import {
    StockChart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';
import { StockDemoConfigurator } from './configurator';
import { initialStockData, generateNextCandlestick, StockDataItem } from './data';
import './styles.css';

const App = () => {
    const [stockData, setStockData] = React.useState<StockDataItem[]>(initialStockData);
    const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const id = setInterval(() => {
            setStockData((prev) => {
                const last = prev.at(-1);
                if (!last) {
                    return prev;
                }
                return [...prev, generateNextCandlestick(last.Date)];
            });
        }, 1000);

        return () => clearInterval(id);
    }, [isPlaying]);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    return (
        <div>
            <StockDemoConfigurator isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} />
            <StockChart className="chart-demo-chart" transitions={false}>
                <ChartTitle text={'The Boeing Company\nNYSE:BA'} />
                <ChartLegend visible={false} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="candlestick"
                        openField="Open"
                        highField="High"
                        lowField="Low"
                        closeField="Close"
                        categoryField="Date"
                        data={stockData}
                    />
                </ChartSeries>
                <ChartNavigator>
                    <ChartNavigatorSelect from={new Date('2021-01-01')} to={new Date('2023-06-01')} />
                    <ChartNavigatorSeries>
                        <ChartNavigatorSeriesItem type="area" field="Close" categoryField="Date" data={stockData} />
                    </ChartNavigatorSeries>
                </ChartNavigator>
            </StockChart>
        </div>
    );
};

export default App;
