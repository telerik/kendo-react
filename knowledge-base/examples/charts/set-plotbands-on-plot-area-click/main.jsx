import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const data = [1, 2, 3];
const categories = ['A', 'B', 'C'];
const crosshair = {
    visible: true,
    tooltip: {
        visible: true,
        format: '#.##'
    }
};

const ChartContainer = () => {

  const [plotBands, setPlotBands] = React.useState({
    category: [{ 
      from: -1,
      to: -1,
      color: 'green',
      opacity: 0.3
    }],
    value: [{
      from: -1,
      to: -1,
      color: 'navy',
      opacity: 0.3
    }]
  })


  const onPlotAreaClick = (args) => {
    console.log(`Category: ${ args.category }`);
    console.log(`Value: ${ args.value }`);

    let category = 0;

    args.category === 'B' ? category = 1 : args.category === 'C' ? category = 2 : null

    setPlotBands({
      category: [{
        from: category,
        to: category,
        color: 'green',
        opacity: 0.3
      }],
      value: [{
        from: args.value,
        to: args.value + 0.02,
        color: 'navy',
        opacity: 0.3
      }]
    })
  }

  return (
    <>
      <Chart onPlotAreaClick={onPlotAreaClick}
      transitions={false}>
          <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} crosshair={crosshair} plotBands={plotBands.category}/>
          </ChartCategoryAxis>
          <ChartValueAxis>
              <ChartValueAxisItem crosshair={crosshair} plotBands={plotBands.value} />
          </ChartValueAxis>
          <ChartSeries>
              <ChartSeriesItem data={data} />
          </ChartSeries>
      </Chart>
    </>
  )
}

ReactDOM.render(
    <ChartContainer />,
    document.querySelector('my-app')
);