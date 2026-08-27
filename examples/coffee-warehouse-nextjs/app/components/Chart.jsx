"use client";
import React from "react";
import * as PropTypes from "prop-types";

import {
  Chart as KendoChart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartLegend,
  ChartTooltip,
} from "@progress/kendo-react-charts";
const importHammerJs = () => import("hammerjs");
import { groupBy, filterBy } from "@progress/kendo-data-query";
import { useInternationalization } from "@progress/kendo-react-intl";
import { locales } from "./../resources/locales";

const MONTH_FORMAT = "MMMM yyyy";

const resolveKendoColor = (color) => {
  const tokenMatch = /^var\((--kendo-[^)]+)\)$/.exec(color);
  if (!tokenMatch) {
    return color;
  }
  if (typeof window === "undefined") {
    return undefined;
  }

  const resolvedColor = getComputedStyle(document.documentElement)
    .getPropertyValue(tokenMatch[1])
    .trim();
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context || !resolvedColor) {
    return undefined;
  }

  context.fillStyle = resolvedColor;
  return context.fillStyle || undefined;
};

const resolveKendoLength = (token) => {
  if (typeof window === "undefined" || !document.body) {
    return undefined;
  }

  const tokenValue = getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  if (!tokenValue) {
    return undefined;
  }

  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.width = tokenValue;
  document.body.appendChild(probe);
  const computedWidth = getComputedStyle(probe).width;
  const acceptedValue =
    probe.style.width &&
    !/^(auto|inherit|initial|unset|revert)$/i.test(tokenValue);
  probe.remove();

  const resolvedValue = parseFloat(computedWidth);
  return acceptedValue && /px$/.test(computedWidth) && Number.isFinite(resolvedValue)
    ? resolvedValue
    : undefined;
};

export const Chart = (props) => {
  if (typeof window !== "undefined") {
    importHammerJs();
  }

  const {
    data,
    groupByField,
    seriesCategoryField,
    seriesField,
    filterStart,
    filterEnd,
    seriesType,
    groupResourceData,
    groupTextField,
    groupColorField,
    onRefresh,
  } = props;

  const intlService = useInternationalization();
  const [resolvedChartTokens, setResolvedChartTokens] = React.useState({});

  React.useEffect(() => {
    const nextTokens = {
      series: groupResourceData.reduce((colors, resource) => {
        colors[resource[groupByField]] = resolveKendoColor(
          resource[groupColorField]
        );
        return colors;
      }, {}),
      surface: resolveKendoColor("var(--kendo-color-surface)"),
      legendPadding: resolveKendoLength("--kendo-spacing-20"),
    };
    setResolvedChartTokens(nextTokens);
  }, [groupByField, groupColorField, groupResourceData]);

  const filteredData = filterBy(data, {
    logic: "and",
    filters: [
      { field: "orderDate", operator: "gt", value: filterStart },
      { field: "orderDate", operator: "lt", value: filterEnd },
    ],
  });
  const groupedData = groupBy(filteredData, [{ field: groupByField }]);

  const ChartTooltipRender = ({ point }) => {
    return (
      <div>
        <div style={{ textTransform: "uppercase" }}>
          {intlService.formatDate(point.category, MONTH_FORMAT)}
        </div>
        <div style={{ textAlign: "center" }}>
          {intlService.formatNumber(point.value, { locale: locales.locale })}
        </div>
      </div>
    );
  };

  return (
    <KendoChart style={{ height: 300 }} onRefresh={onRefresh}>
      <ChartLegend
        position="bottom"
        orientation="horizontal"
        background={resolvedChartTokens.surface}
        padding={
          resolvedChartTokens.legendPadding === undefined
            ? undefined
            : { left: resolvedChartTokens.legendPadding }
        }
        labels={
          resolvedChartTokens.legendPadding === undefined
            ? undefined
            : { padding: { right: resolvedChartTokens.legendPadding } }
        }
      />
      <ChartTooltip render={ChartTooltipRender} />
      <ChartSeries>
        {groupedData.map((group) => {
          const groupResource = groupResourceData.find(
            (item) => item[groupByField] === group.value
          );

          return (
            <ChartSeriesItem
              key={group.value}
              name={groupResource[groupTextField]}
              type={seriesType}
              field={seriesField}
              categoryField={seriesCategoryField}
              data={group.items}
              color={resolvedChartTokens.series?.[group.value]}
            ></ChartSeriesItem>
          );
        })}
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          baseUnit={"months"}
          labels={{
            dateFormats: {
              months: MONTH_FORMAT,
            },
          }}
        ></ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem
          labels={{ format: { locale: locales.locale } }}
        ></ChartValueAxisItem>
      </ChartValueAxis>
    </KendoChart>
  );
};

Chart.displayName = "Chart";
Chart.propTypes = {
  data: PropTypes.array,
  groupByField: PropTypes.string,
  seriesCategoryField: PropTypes.string,
  seriesField: PropTypes.string,
  filterStart: PropTypes.object,
  filterEnd: PropTypes.object,
  seriesType: PropTypes.string,
  groupResourceData: PropTypes.array,
  groupTextField: PropTypes.string,
  onRefresh: PropTypes.func,
};
