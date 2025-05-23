import { Card } from "@progress/kendo-react-layout";
import React, { useState } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartCategoryAxisLabels,
  ChartValueAxis,
  ChartValueAxisItem,
  DrilldownSeriesFactoryProps,
  ChartDrilldownState,
  DrilldownEvent,
} from "@progress/kendo-react-charts";
import {
  bondsYearlyData,
  realEstateYearlyData,
  stocksYearlyData,
  stocksMonthlyData,
  realEstateMonthlyData,
  bondsMonthlyData,
} from "../data/cashflow-data";

const defaultSeries = [
  {
    name: "Stocks",
    data: stocksYearlyData,
    color: "#9C27B0",
    visible: true,
  },
  {
    name: "Real Estate",
    data: realEstateYearlyData,
    color: "#009688",
    visible: true,
  },
  {
    name: "Bonds",
    data: bondsYearlyData,
    color: "#FFEB3B",
    visible: true,
  },
];

export default function CashFlowChart() {
  const [periodDDL, setPeriodDDL] = useState([
    { id: 1, name: "Year" },
    { id: 2, name: "Month", disabled: true },
  ]);
  const [ddlValue, setDdlValue] = useState(periodDDL[0]);
  const [categories, setCategories] = useState(
    stocksYearlyData.map((item) => item.month)
  );

  const [drilldownState, setDrilldownState] = useState<ChartDrilldownState>({
    steps: [],
  });
  const [dataToDrilldown, setDataToDrilldown] = useState([]);
  const [series, setSeries] = useState(defaultSeries);

  const handleDrilldown = (e: DrilldownEvent) => {
    let data;
    if (e.series.name === "Stocks") {
      data = stocksMonthlyData;
    } else if (e.series.name === "Real Estate") {
      data = realEstateMonthlyData;
    } else if (e.series.name === "Bonds") {
      data = bondsMonthlyData;
    }
    setDataToDrilldown(data);

    setPeriodDDL([...periodDDL.map((item) => ({ ...item, disabled: false }))]);
    setDdlValue(periodDDL[1]);

    const newSeries = series.map((item) => {
      if (item.name !== e.series.name) {
        return { ...item, visible: !item.visible };
      }
      return item;
    });
    setSeries(newSeries);
    setDrilldownState(e.nextState);
    setCategories(
      data[e.nextState.steps[0].drilldownValue].map((item: any) => item.day)
    );
  };

  const Drilldown = (props: DrilldownSeriesFactoryProps) => {
    return (
      <ChartSeriesItem
        {...props}
        data={dataToDrilldown[props.drilldownValue]}
        field={"sales"}
        categoryField={"day"}
      />
    );
  };

  return (
    <Card className="k-p-4 k-gap-4 k-rounded-xxl k-gap-3.5 k-h-full">
      <div className={"k-d-grid k-gap-4"}>
        <div
          className={
            "k-d-flex k-align-items-center k-gap-2 k-justify-content-between"
          }
        >
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "wide",
              fontWeight: "500",
            }}
          >
            Money Cashflow
          </div>
          <div className="k-d-flex k-align-items-center k-gap-6">
            {series.map((item, idx) => {
              if (item && item.visible) {
                return (
                  <div
                    className="k-d-flex k-align-items-center k-gap-1"
                    key={idx}
                  >
                    <div
                      style={{
                        backgroundColor: item.color,
                        opacity: item.visible ? 1 : 0.5,
                        width: "15px",
                        height: "3px",
                      }}
                    ></div>{" "}
                    {item.name}
                  </div>
                );
              }
            })}
            <DropDownList
              data={periodDDL}
              value={ddlValue}
              dataItemKey="id"
              textField="name"
              style={{ width: "110px" }}
              fillMode={"flat"}
              onChange={(e) => {
                if (e.value.id === 1) {
                  setCategories(stocksYearlyData.map((item) => item.month));
                  setDrilldownState({ steps: [] });
                  setSeries(defaultSeries);
                  setPeriodDDL([
                    ...periodDDL.map((item, index) => ({
                      ...item,
                      disabled: index == 1 ? true : false,
                    })),
                  ]);
                  setDdlValue(periodDDL[0]);
                }
              }}
            />
          </div>
        </div>
        <div>
          <Chart drilldownState={drilldownState} onDrilldown={handleDrilldown}>
            <ChartLegend visible={false} />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisLabels
                  rotation={categories.length > 12 ? undefined : 270}
                  content={(e) => e.value.toString().substring(0, 3)}
                />
              </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartValueAxis>
              <ChartValueAxisItem
                max={250000}
                majorUnit={25000}
                minorUnit={25000}
                min={0}
                labels={{
                  content: (e) => `${e.value / 1000}K`,
                }}
              />
            </ChartValueAxis>
            <ChartSeries>
              {series.map(
                (item, index) =>
                  item &&
                  item.visible && (
                    <ChartSeriesItem
                      key={index}
                      type="column"
                      data={item.data}
                      name={item.name}
                      color={item.color}
                      field={"flow"}
                      categoryField={"month"}
                      drilldownField={"month"}
                      drilldownSeriesFactory={(е) =>
                        Drilldown({ ...е, color: item.color })
                      }
                    />
                  )
              )}
            </ChartSeries>
          </Chart>
        </div>
      </div>
    </Card>
  );
}
