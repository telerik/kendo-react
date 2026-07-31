"use client";
import * as React from "react";

import { Sparkline } from "@progress/kendo-react-charts";
import { Badge } from "@progress/kendo-react-indicators";
import { useInternationalization } from "@progress/kendo-react-intl";
import { SvgIcon } from "@progress/kendo-react-common";
import { starIcon } from "@progress/kendo-svg-icons";
import Image from "next/image";

import { images } from "./../resources/images";

export const FullNameCell = (props) => {
  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      <div
        className="employee-photo"
        style={{
          "--employee-photo":
            images[props.dataItem.imgId + props.dataItem.gender],
        }}
      />
      <div className="employee-name">{props.dataItem.fullName}</div>
    </td>
  );
};

export const FlagCell = (props) => {
  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td
      className={[props.tdProps.className, "cell-content--center"]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={images[props.dataItem.country]}
        className="flag-icon"
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
            className={
              !isActive
                ? "grid-rating__icon--filled"
                : "grid-rating__icon--inactive"
            }
          />
        );
      })}
    </td>
  );
};

export const OnlineCell = (props) => {
  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td
      className={[props.tdProps.className, "cell-content--center"]
        .filter(Boolean)
        .join(" ")}
      style={{ position: "relative" }}
    >
      {props.dataItem.isOnline === true ? (
        <Badge
          themeColor={"success"}
          shape={"rounded"}
          className="status-badge"
          style={{ position: "relative", display: "inline" }}
        >
          Online
        </Badge>
      ) : (
        <Badge
          themeColor={"error"}
          shape={"rounded"}
          className="status-badge"
          style={{ position: "relative", display: "inline" }}
        >
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
  const intlService = useInternationalization();

  if (props.rowType === "groupHeader") {
    return null;
  }

  return (
    <td className={props.tdProps.className}>
      <span
        className={props.dataItem.budget < 0 ? "currency-negative" : undefined}
      >
        {intlService.formatNumber(props.dataItem.budget, "c")}
      </span>
    </td>
  );
};
