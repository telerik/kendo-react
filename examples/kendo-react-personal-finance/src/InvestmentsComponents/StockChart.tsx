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
    <Card className="app-card" style={{ minHeight: 410 }}>
      <div className="app-card__content app-card__content--spacious">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Stock Chart
        </div>
        <div className="app-details">
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
