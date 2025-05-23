import React from "react";
import {
  StockChart,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartPanes,
  ChartCategoryAxisItem,
  ChartPane,
  ChartValueAxisLabels,
} from "@progress/kendo-react-charts";

interface StockChartComponentProps {
  data: Array<{
    open: number;
    close: number;
    low: number;
    high: number;
    date: string;
    volume: number;
  }>;
}

const StockChartComponent = (props: StockChartComponentProps) => {
  const data = props.data;
  const from = new Date("2020-04-12");
  const to = new Date("2022-12-1");

  return (
    <div>
      <StockChart  style={{ height: "468px" }}>
        <ChartSeries>
          <ChartSeriesItem
            data={data}
            type="candlestick"
            openField="open"
            closeField="close"
            lowField="low"
            highField="high"
            categoryField="date"
            color={"#009688"}
          />
          <ChartSeriesItem
            data={data}
            type="column"
            field="volume"
            axis="volumeAxis"
            categoryField="Date"
            tooltip={{ format: "{0:C0}" }}
            color={"#009688"}
          />
        </ChartSeries>
        <ChartValueAxis>
          <ChartValueAxisItem min={0} majorUnit={10}>
          <ChartValueAxisLabels step={1} />
            </ChartValueAxisItem>
          <ChartValueAxisItem
            visible={false}
            name="volumeAxis"
            pane="volumePane"
          />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem pane="volumePane" />
        </ChartCategoryAxis>
        <ChartPanes>
          <ChartPane title={{text:"Value", align: 'center'}} height={228} />
          <ChartPane title={{text:"Volume", align: 'center'}} name="volumePane" height={150} />
        </ChartPanes>
        <ChartNavigator>
          <ChartNavigatorSelect from={from} to={to} />
          <ChartNavigatorSeries>
            <ChartNavigatorSeriesItem
              data={data}
              type="area"
              field="close"
              categoryField="date"
              color={"#008478"}
            />
          </ChartNavigatorSeries>
        </ChartNavigator>
      </StockChart>
    </div>
  );
};

export default StockChartComponent;
