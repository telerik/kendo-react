"use client";
import * as React from "react";

import {
  Sparkline,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartArea,
} from "@progress/kendo-react-charts";
import { Badge } from "@progress/kendo-react-indicators";
import { useInternationalization } from "@progress/kendo-react-intl";
import { SvgIcon } from "@progress/kendo-react-common";
import { starIcon } from "@progress/kendo-svg-icons";
import Image from "next/image";

import { images } from "./../resources/images";

export const FullNameCell = (props) => {
  const customerPhotoStyle = {
    display: "inline-block",
    width: "var(--kendo-spacing-8)",
    height: "var(--kendo-spacing-8)",
    borderRadius: "50%",
    backgroundSize: "var(--kendo-spacing-8) 35px",
    backgroundPosition: "center center",
    verticalAlign: "middle",
    lineHeight: "var(--kendo-spacing-8)",
    boxShadow:
      "inset 0 0 var(--kendo-spacing-1px) var(--kendo-color-border), inset 0 0 var(--kendo-spacing-10) color-mix(in srgb, var(--kendo-color-on-app-surface) var(--kendo-translucency-base), transparent)",
    marginLeft: "var(--kendo-spacing-1)",
    backgroundImage: images[props.dataItem.imgId + props.dataItem.gender],
  };

  const customerName = {
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "var(--kendo-spacing-8)",
    paddingLeft: "var(--kendo-spacing-2\\.5)",
  };

  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      <div style={customerPhotoStyle} />
      <div style={customerName}>{props.dataItem.fullName}</div>
    </td>
  );
};

export const FlagCell = (props) => {
  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td style={{ textAlign: "center" }} className={props.tdProps.className}>
      <Image
        src={images[props.dataItem.country]}
        style={{ width: 30, verticalAlign: "middle", borderStyle: "none" }}
        alt={props.dataItem.country}
        width={30}
        height={21}
      />
    </td>
  );
};

export const RatingCell = (props) => {
  const MAX_STARS = 5;
  const rating = props.dataItem.rating;

  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      {[...new Array(MAX_STARS)].map((_, idx) => {
        const isActive = rating <= idx;
        return (
          <SvgIcon
            key={idx}
            icon={starIcon}
            variant={!isActive ? "solid" : "outline"}
            style={!isActive ? { color: "var(--kendo-color-warning)" } : undefined}
          />
        );
      })}
    </td>
  );
};

export const OnlineCell = (props) => {
  const badgeStyle = {
    position: "relative",
    display: "inline",
  };

  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td style={{ textAlign: "center" }} className={props.tdProps.className}>
      {props.dataItem.isOnline === true ? (
        <Badge themeColor={"success"} shape={"rounded"} style={badgeStyle}>
          Online
        </Badge>
      ) : (
        <Badge themeColor={"error"} shape={"rounded"} style={badgeStyle}>
          Offline
        </Badge>
      )}
    </td>
  );
};

export const EngagementCell = (props) => {
  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      <Sparkline type={"bar"} data={props.dataItem.target} />
    </td>
  );
};

export const CurrencyCell = (props) => {
  const redBoldStyle = {
    color: "var(--kendo-color-error)",
    fontWeight: "var(--kendo-font-weight-semibold)",
  };

  const intlService = useInternationalization();

  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      <span style={props.dataItem.budget < 0 ? redBoldStyle : undefined}>
        {intlService.formatNumber(props.dataItem.budget, "c")}
      </span>
    </td>
  );
};
