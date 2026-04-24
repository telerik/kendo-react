import * as React from "react";
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from "@progress/kendo-react-charts";

const VisitorsDonut = ({ data }) => {
    return (
    <Chart style={{height: "100%"}}>
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={data}
          categoryField="type"
          field="value"
        />
      </ChartSeries>
      <ChartLegend position={"bottom"} visible={true} />
    </Chart>
    );
};

export default VisitorsDonut;
