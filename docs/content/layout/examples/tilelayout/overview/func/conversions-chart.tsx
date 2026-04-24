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

const ConversionsChart = ({ data }) => {
    const dates: any = [];
    const views: any = [];
    data.map((item: any, i) => (dates.push(item.date), views.push(item.value)));

    return (
    <Chart zoomable={{ mousewheel: { lock: "y" } }} style={{height: "100%"}}>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem baseUnitStep={"auto"} categories={dates} />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem max={200000} labels={{step: 2}}/>
      </ChartValueAxis>
      <ChartArea background={"white"}/>
      <ChartSeries>
        <ChartSeriesItem type="line" markers={{ visible: false }} data={views} />
      </ChartSeries>
    </Chart>
    );
};

export default ConversionsChart;
