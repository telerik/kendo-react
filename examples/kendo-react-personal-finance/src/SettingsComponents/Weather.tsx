import React from "react";
import { Card } from "@progress/kendo-react-layout";

export default function Weather(props: any) {
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
          Weather
        </div>
      </div>

      <div className="k-d-grid k-gap-2 k-justify-content-center k-align-items-center k-text-center">
        <img
          src="./images/cloud.png"
          alt="Weather Icon"
          style={{ width: "50px", height: "50px", margin: "auto" }}
        />
        <div style={{ fontSize: "16px", fontWeight: "400", color: "var(--kendo-color-on-app-surface)" }}>
          Partly Cloudy
        </div>
        <div
          style={{
            fontSize: "34px",
            fontWeight: "400",
            color: "var(--kendo-color-info)"
          }}
        >
          12˚C
        </div>
      </div>
      <div
        className="k-w-full"
        style={{
          borderBottom: "1px solid var(--kendo-color-border)",
        }}
      ></div>
      <div className="k-d-grid k-gap-2 k-justify-content-center k-align-items-center k-text-center">
        <div style={{ fontSize: "12px", fontWeight: "400", color: "var(--kendo-color-on-app-surface)" }}>
          Humidity: 56%
        </div>
        <div style={{ fontSize: "12px", fontWeight: "400", color: "var(--kendo-color-on-app-surface)" }}>
          Dew: 2 C
        </div>
        <div style={{ fontSize: "12px", fontWeight: "400", color: "var(--kendo-color-on-app-surface)" }}>
          Pressure: 1043 mb
        </div>
        <div style={{ fontSize: "12px", fontWeight: "400", color: "var(--kendo-color-on-app-surface)" }}>
          Wind Speed: 30km/h NW
        </div>
      </div>
    </Card>
  );
}
