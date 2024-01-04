import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxisItem, ChartCategoryAxis, ChartLegend} from '@progress/kendo-react-charts';
import { trendSeries } from '../../data/trendSeries';
import { volumeSeries } from '../../data/volumeSeries.js';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';

   export const DashboardChart = () => {
      const [chartSeries, setChartSeries] = React.useState(trendSeries);
      const [refreshChart] = React.useState(true);
      const [isTrend, setIsTrend] = React.useState(true);
      const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const [range, setRange] = React.useState({
        start: new Date('2020-01-01T21:00:00.000Z'),
        end: new Date('2020-04-29T21:00:00.000Z')
    });

    const onRangeChange = React.useCallback(
      (event) => {
          setRange({
              start: event.value.start,
              end: event.value.end
          })
      },
      [setRange]
    );

    const trendOnClick = React.useCallback(
      () => {
          setIsTrend(true);
          setChartSeries(trendSeries)
    
      },
      [setIsTrend]
    );
    
    const volumeOnClick = React.useCallback(
      () => {
          setIsTrend(!true);
          setChartSeries(volumeSeries)
      },
      [setIsTrend]
    );
    
     const handleChartRefresh = (chartOptions, themeOptions, chartInstance) => {
    if (refreshChart) {
      chartInstance.setOptions(chartOptions, themeOptions);
    }
  }
  

      return <div className="chart-container">

      <div className="k-card">
       
      <div className="card-buttons">
      <p>Total Points</p>
         <div>
         <DateRangePicker  value={range} onChange={onRangeChange}/>
   
         </div>
   
         <ButtonGroup>
         <Button togglable={true} selected={isTrend} onClick={trendOnClick}>
               Trend
             </Button>
             <Button togglable={true} selected={!isTrend} onClick={volumeOnClick}>
               Volume
             </Button>
         </ButtonGroup>
      </div>
      <Chart style={{
             height: 350
           }}  onRefresh={handleChartRefresh}>
               <ChartLegend position="bottom" orientation="horizontal" />
               <ChartCategoryAxis>
                 <ChartCategoryAxisItem categories={categories}  />
               </ChartCategoryAxis>
               <ChartSeries>
                 {chartSeries.map((item, idx) => <ChartSeriesItem key={idx} type="line" tooltip={{
                 visible: true
               }} data={item.data} name={item.name} />)}
               </ChartSeries>
             </Chart>
             </div>
       </div> 
   }