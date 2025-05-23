import React, { useState } from "react";
import { Card } from "@progress/kendo-react-layout";
import { Chart, ChartSeries, ChartSeriesItem, ChartSeriesLabels, ChartLegend } from "@progress/kendo-react-charts";

const data = [
  { category: "Stocks", value: 25, color: "#9C27B0" },
  { category: "Real Estate", value: 20, color: "#1D84D6" },
  { category: "Bonds", value: 15, color: "#008478" },
  { category: "Mutual Funds", value: 10, color: "#E0CF34" },
  { category: "Cryptocurrency", value: 20, color: "#F44336" },
  { category: "Commodities", value: 10, color: "#439A46" },
];

export default function Transactions() {

  const isBigScreen = () => {
    const width = window.innerWidth;
    return width > 1200;
  };

  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div className={"k-d-grid k-gap-6"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Total Investments
        </div>
        <div className="k-d-grid k-gap-6">
          <Chart style={{ width: "100%", height: "320px"}}>
            <ChartLegend offsetX={0} labels={{margin: 6}} position={isBigScreen() ? 'right': 'bottom'}/>
            <ChartSeries>
              <ChartSeriesItem
                padding={10}
                type="pie"
                data={data}
                field="value"
                categoryField="category"
                colorField="color"
              >
                <ChartSeriesLabels
                  content={(e) => `${e.value}%`}
                  position="center"
                  background="transparent"
                />
              </ChartSeriesItem>
            </ChartSeries>
          </Chart>
        </div>
      </div>
    </Card>
  );
}
