import React, { useState } from 'react';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts'
import ThemeChooser from './ThemeChooser';

const series = [
    { category: 'EUROPE', value: 0.3 },
    { category: 'NORTH AMERICA', value: 0.23 },
    { category: 'AUSTRALIA', value: 0.18 },
    { category: 'ASIA', value: 0.15 },
    { category: 'SOUTH AMERICA', value: 0.09 },
    { category: 'AFRICA', value: 0.05 }
];
const loadingPanel = (
    <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image"></div>
        <div className="k-loading-color"></div>
    </div>
);

const ChartPage = (props) => {
    const [theme, setTheme] = useState(props.theme);
    const [loading, setLoading] = useState(false)
    if (props.theme !== theme) {
        setTheme(props.theme);
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100);
    }
    return (
        <div className='container-fluid'>
            <ThemeChooser changeTheme={props.changeTheme} theme={props.theme}/>
            <div className='row my-4'>
                <div className='col-12 col-lg-9 border-right' key={props.theme + Math.random()}>
                    {loading && loadingPanel}
                    {!loading && <Chart theme='sass' transitions={false}>
                        {/*<ChartTooltip />  uncomment to enable Tooltips */}
                        <ChartTitle text="Production" font="19pt sans-serif" margin={{ bottom: 50 }} />
                        <ChartLegend position="bottom" />
                        <ChartSeries>
                            <ChartSeriesItem type="column" data={series} field="value" categoryField="category" />
                        </ChartSeries>
                        <ChartValueAxis>
                            <ChartValueAxisItem labels={{ format: 'p0' }} />
                        </ChartValueAxis>}
                    </Chart>}
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Chart</h3>
                    <p>The KendoReact Charts provide high quality graphical data visualization options.</p>
                    <p>They include a variety of chart types and styles that have extensive configuration options. This flexibility allows you to quickly and easily create the exact chart you need to fit your specific requirements for functionality and appearance.</p>
                    <p>The KendoReact Chart Components are built from the ground up, specifically for React, so that you get high performance chart components that integrate with your React app and with the rest of your React UI components.</p>
                    <p>For documentation and demos of all available Chart types (Bar, Line, Donut, Sparkline, StockChart etc), please visit the <a href="https://www.telerik.com/kendo-react-ui/components/charts/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-charts">KendoReact Chart documentation page.</a> </p>
                </div>
            </div>
        </div>
    )
}

export default ChartPage;