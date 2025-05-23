import React, { useState } from "react";
import { Card, TabStrip, TabStripSelectEventArguments, TabStripTab } from "@progress/kendo-react-layout";
import StockChartComponent from "./StockChartComponent";
import { glofebinBankData, neopharmData, quantumData, solarData, solarFluxData } from "../data/stockchart-data";

export default function Transactions() {
  const [selected, setSelected] = useState(0);

  const handleSelect = (e: TabStripSelectEventArguments) => {
    setSelected(e.selected);
  };

  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full" style={{ minHeight: 410 }}>
      <div className={"k-d-grid k-gap-6"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Stock Chart
        </div>
        <div className="k-d-grid k-gap-6">
          <TabStrip selected={selected} onSelect={handleSelect}>
            <TabStripTab title="Solar Flux">
              <StockChartComponent data={solarFluxData} />
            </TabStripTab>
            <TabStripTab title="Quantum">
              <StockChartComponent data={quantumData} />
            </TabStripTab>
            <TabStripTab title="Neopharm">
              <StockChartComponent data={neopharmData} />
            </TabStripTab>
            <TabStripTab title="Solaris">
              <StockChartComponent data={solarData} />
            </TabStripTab>
            <TabStripTab title="Globefin Bank">
              <StockChartComponent data={glofebinBankData} />
            </TabStripTab>
          </TabStrip>
        </div>
      </div>
    </Card>
  );
}
