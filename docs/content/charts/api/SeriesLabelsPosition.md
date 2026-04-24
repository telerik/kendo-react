---
title: SeriesLabelsPosition
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesLabelsPosition."
api_reference: true
type: inner_api
slug: api_charts_serieslabelsposition
---

# SeriesLabelsPosition
Configures the position of the series labels.

- `"above"`&mdash;The label is positioned at the top of the marker. Applicable for series that render points, including the Bubble series.
- `"below"`&mdash;The label is positioned at the bottom of the marker. Applicable for series that render points, including the Bubble series.
- `"center"`&mdash;The label is positioned at the point center. Applicable for the Bar, Column, Donut, Pie, Funnel, Pyramid, RadarColumn, and Waterfall series.
- `"insideBase"`&mdash;The label is positioned inside, near the base of the bar. Applicable for the Bar, Column, and Waterfall series.
- `"insideEnd"`&mdash;The label is positioned inside, near the end of the point. Applicable for the Bar, Column, Donut, Pie, RadarColumn, and Waterfall series.
- `"left"`&mdash;The label is positioned to the left of the marker. Applicable for series that render points, including the Bubble series.
- `"outsideEnd"`&mdash;The label is positioned outside, near the end of the point. Applicable for the Bar, Column, Donut, Pie, RadarColumn, and Waterfall series. Not applicable for stacked series.
- `"right"`&mdash;The label is positioned to the right of the marker. Applicable for series that render points, including the Bubble series.
- `"top"`&mdash;The label is positioned at the top of the segment. Applicable for the Funnel and Pyramid series.
- `"bottom"`&mdash;The label is positioned at the bottom of the segment. Applicable for the Funnel and Pyramid series.
- `"auto"`&mdash;The from and to labels are positioned at the top or bottom (for the RangeArea series), or to the left or right (for the VerticalRangeArea series), so that they are outside the filled area. Applicable for the RangeArea and VerticalRangeArea series.

`type` SeriesLabelsPosition = "auto" | "above" | "below" | "center" | "insideBase" | "insideEnd" | "left" | "outsideEnd" | "right" | "top" | "bottom";
