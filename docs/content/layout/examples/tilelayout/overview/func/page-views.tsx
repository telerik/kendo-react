import * as React from "react";
import {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem
} from "@progress/kendo-react-charts";

const PageViewsChart = ({ data }) => {
    const dates: any = [];
    const views: any = [];
    data.map((item, i) => (dates.push(item.date), views.push(item.value)));

    return (
    <Chart zoomable={{ mousewheel: { lock: "y" } }} style={{height: "100%"}}>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem baseUnit="fit" type="date" majorTicks={{visible: false}} categories={dates} />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem labels={{step: 2}}/>
      </ChartValueAxis>
      <ChartArea background={"white"}  />
      <ChartSeries>
        <ChartSeriesItem type="line" markers={{ visible: false }} data={views} />
      </ChartSeries>
    </Chart>
    );
};

export default PageViewsChart;
