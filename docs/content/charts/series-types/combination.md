---
title: Combination
page_title: 'React Combination Chart - KendoReact Docs & Demos'
description: 'Create combination charts that display multiple related metrics in a single chart to compare values, trends, and targets together.'
components: ["chart"]
subject: Combination Chart
slug: combination_seriestypes_charts
tag: new
release_tag: Q3 2026
---

# React Combination Charts

Combination charts let you visualize multiple related metrics in a single chart. Use them when different data series need different visual representations. For example, combine revenue ([columns](slug:barcolumn_seriestypes_charts)) with profit margin ([line](slug:line_seriestypes_charts)), or sales ([bars](slug:barcolumn_seriestypes_charts)) with targets ([area](slug:area_seriestypes_charts)).

Use combination charts when:

- Comparing values with trends
- Displaying metrics with different units
- Highlighting relationships between business KPIs

<demo metaUrl="charts/series-types/combination/overview/func/" height="640"></demo>

## Series Type Compatibility

These series cannot be combined: [Donut](slug:donut_seriestypes_charts) (only with itself), [Bubble](slug:bubble_seriestypes_charts), and [Pie](slug:pie_seriestypes_charts).

<table>
  <thead>
    <tr>
      <th style="width: 200px;">Series types</th>
      <th>When to use</th>
      <th style="width: 120px;">Demo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z"/></svg> Column + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Z"/></svg> Line</td>
      <td>Discrete values alongside a trend. Compare values and trends—like monthly sales (columns) with growth rate (line).</td>
      <td style="width: 120px;"><a href="#column-chart-combinations" aria-label="See more about Column + Line combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z"/></svg> Column + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z"/></svg> Area</td>
      <td>Values against goals or targets. Compare values with targets—like actual revenue (columns) against budget or goals (area).</td>
      <td style="width: 120px;"><a href="#column-chart-combinations" aria-label="See more about Column + Area combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M51,42v2H33V42ZM3,40v6H32V40Zm52,2v2H67V42Zm-3-4V48h2V38ZM26,56v2H40V56ZM3,54v6H25V54Zm41,2v2H67V56Zm-3-4V62h2V52Zm0-24v2h4V28ZM3,26v6H40V26Zm46,2v2H67V28Zm-3-4V34h2V24ZM28,14v2H57V14ZM3,12v6H27V12Zm58,2v2h6V14Zm-3-4V20h2V10Z"/></svg> Bar + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Z"/></svg>&nbsp;Line</td>
      <td>Categories with trends (long labels). Compare categories with trends—use when category names are long and you need horizontal space.</td>
      <td style="width: 120px;"><a href="#bar-chart-combinations" aria-label="See more about Bar + Line combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M51,42v2H33V42ZM3,40v6H32V40Zm52,2v2H67V42Zm-3-4V48h2V38ZM26,56v2H40V56ZM3,54v6H25V54Zm41,2v2H67V56Zm-3-4V62h2V52Zm0-24v2h4V28ZM3,26v6H40V26Zm46,2v2H67V28Zm-3-4V34h2V24ZM28,14v2H57V14ZM3,12v6H27V12Zm58,2v2h6V14Zm-3-4V20h2V10Z"/></svg> Bar + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z"/></svg>&nbsp;Area</td>
      <td>Distribution and targets in horizontal layout. Show category distribution and targets together in horizontal format.</td>
      <td style="width: 120px;"><a href="#bar-chart-combinations" aria-label="See more about Bar + Area combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Z"/></svg> Line + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z"/></svg>&nbsp;Area</td>
      <td>Volume and its drivers or influencers. Show volume plus another correlated metric—like energy consumption (area) alongside temperature (line).</td>
      <td style="width: 120px;"><a href="#area-and-line-chart-combination" aria-label="See more about Area + Line combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z"/></svg> Column + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Z"/></svg> Line + <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z"/></svg>&nbsp;Area</td>
      <td>Multiple KPIs and financial dimensions. Track multiple KPIs in one view: revenue, profit, and margin. See the complete financial picture at a glance.</td>
      <td style="width: 120px;"><a href="#combining-three-or-more-series-types" aria-label="See more about Column + Line + Area combinations">See more</a></td>
    </tr>
    <tr>
      <td style="width: 200px;"><svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" style="vertical-align:middle;margin-right:3px"><path d="M19,42a4,4,0,1,1,4-4A4,4,0,0,1,19,42Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,19,36Zm8-2a4,4,0,1,1,4-4A4,4,0,0,1,27,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,28Zm9-3a4,4,0,1,1,4-4A4,4,0,0,1,36,25Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,36,19ZM47,29a4,4,0,1,1,4-4A4,4,0,0,1,47,29Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,47,23ZM27,51a4,4,0,1,1,4-4A4,4,0,0,1,27,51Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,45ZM64,21a4,4,0,1,1,4-4A4,4,0,0,1,64,21Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,64,15ZM6,61a4,4,0,1,1,4-4A4,4,0,0,1,6,61Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,6,55Z"/></svg> Scatter + Scatter Line</td>
      <td>Correlations, outliers, and trend lines. Visualize correlations and predict outcomes—like property size vs. sale price with a trend line.</td>
      <td style="width: 120px;"><a href="#scatter-chart-combinations" aria-label="See more about Scatter + Scatter Line combinations">See more</a></td>
    </tr>
  </tbody>
</table>

## Column Chart Combinations

When your data organizes by time periods or categories, you often need to show both discrete values and how they trend together. [Column](slug:barcolumn_seriestypes_charts) combinations solve this by layering values (columns) with performance trends ([line](slug:line_seriestypes_charts)) or targets ([area](slug:area_seriestypes_charts)) on the same categorical axis.

> Declare the Column series first in `<ChartSeries>` to establish the categorical layout. All [Line](slug:line_seriestypes_charts) and [Area](slug:area_seriestypes_charts) series will automatically follow the same category axis.

The following example shows a Column + Line combination (revenue against order volume on separate axes) and a Column + Area combination (current year against prior year revenue on a shared axis).

{% meta height:400 %}
{% embed_file series-types/combination/column-combinations/func/app.tsx preview %}
{% embed_file series-types/combination/column-combinations/func/main.tsx %}
{% endmeta %}

**Common use cases:**
- **Volume vs. Performance**: See sales (columns) with conversion rate or profit (line).
- **Metric + Target**: Track performance (columns) vs. goal or benchmark (line).
- **Primary + Secondary**: Combine volume metrics (columns + line) with percentage metric (area).

## Bar Chart Combinations

Long category names force truncation in vertical charts. [Bar](slug:barcolumn_seriestypes_charts) combinations eliminate this problem by switching to horizontal orientation, giving categories the space they need while still layering multiple metrics alongside.

> Declare the Bar series first in `<ChartSeries>` to set horizontal orientation. All [Line](slug:line_seriestypes_charts) and [Area](slug:area_seriestypes_charts) series will respect the horizontal layout.

The following example shows a Bar + Line combination (category sales with profit margin on a secondary axis) and a Bar + Area combination (category orders with return rate on a secondary axis).

{% meta height:420 %}
{% embed_file series-types/combination/bar-combinations/func/app.tsx preview %}
{% embed_file series-types/combination/bar-combinations/func/main.tsx %}
{% endmeta %}

**Common use cases:**
- **Category Comparison**: Compare sales, profit, and efficiency across categories without truncating labels.
- **Regional Analysis**: View regional revenue (bars) with growth trend (line) or market share (area).
- **Department Performance**: Track department output (bars) with spend (line) and efficiency (area).

## Area and Line Chart Combination

When one metric drives another, an [Area](slug:area_seriestypes_charts) + [Line](slug:line_seriestypes_charts) combination reveals the cause-and-effect relationship. For example, temperature influences energy consumption, or marketing spend affects traffic. The area shows volume. The line shows the driver. Declare Area first, then Line.

The following example demonstrates an Area + Line combination that compares energy consumption (area) with average temperature (line) on secondary axes.

{% meta height:430 %}
{% embed_file series-types/combination/area-line/func/app.tsx preview %}
{% embed_file series-types/combination/area-line/func/main.tsx %}
{% endmeta %}

**Common use cases:**
- **Volume + Drivers**: Track website traffic (area) with marketing spend or seasonal factors (line).
- **Consumption + Context**: Show production volume (area) vs. raw material cost (line).
- **Resource Utilization**: Visualize server load (area) vs. response time (line).

## Scatter Chart Combinations

Find correlations between two continuous variables—like property size and price—by combining individual data points with a trend line. [Scatter](slug:scatterline_seriestypes_charts) plots show the raw data points. Scatter lines run through them to reveal correlations at a glance.

Both axes are numeric. Declare Scatter first, then ScatterLine on the same XY axes.

The following example plots property sales (scatter) with a price trend line (scatter line) overlaid, revealing the relationship between property size and price.

{% meta height:450 %}
{% embed_file series-types/combination/scatter-combinations/func/app.tsx preview %}
{% embed_file series-types/combination/scatter-combinations/func/main.tsx %}
{% endmeta %}

**Common use cases:**
- **Correlation Analysis**: Plot sales transactions (scatter) with a trend line to identify price or value correlations.
- **Prediction & Forecasting**: Overlay a trend line on raw data to project future values.
- **Outlier Detection**: Spot anomalies—transactions far from the trend line.

## Combining Three or More Series Types

Decision-making often requires seeing multiple KPIs at once: revenue, profitability, and margins all in a single view. Three or more series in one chart compresses this analysis into a dashboard without sacrificing clarity. The challenge is assigning each metric to the right axis based on its units.

> Declare [Column](slug:barcolumn_seriestypes_charts) (categorical) or [Bar](slug:barcolumn_seriestypes_charts) (horizontal) first to establish layout. Assign metrics to the right axes based on units.

The following example combines [Column](slug:barcolumn_seriestypes_charts) (revenue), [Line](slug:line_seriestypes_charts) (profit), and [Area](slug:area_seriestypes_charts) (gross margin). Revenue and profit share the primary axis (same unit). Margin uses a secondary axis (percentage).

{% meta height:440 %}
{% embed_file series-types/combination/column-line-area/func/app.tsx preview %}
{% embed_file series-types/combination/column-line-area/func/main.tsx %}
{% endmeta %}

## Axis Configuration

Decide whether metrics will share an axis based on whether they measure the same units.

### Shared Axis: Same Metric Unit

Place metrics that measure the same unit on a shared axis for direct comparison. Both series will automatically align without additional axis configuration.

> Declare Column first to establish categorical layout.

{% meta height:440 %}
{% embed_file series-types/combination/shared-axis/func/app.tsx preview %}
{% embed_file series-types/combination/shared-axis/func/main.tsx %}
{% endmeta %}

### Separate Axes: Different Units or Scales

Use separate axes when metrics measure different units to prevent scaling distortion. Declare Column first, then assign the secondary metric to a named axis using the [`axis`](slug:api_charts_chartseriesitemprops#toc-axis) property on the series. To position the secondary axis on the right side of the chart, set [`axisCrossingValue`](slug:api_charts_chartcategoryaxisitemprops#toc-axiscrossingvalue) on the category axis to `[0, N]`, where `N` is the number of categories—this pushes the second value axis to the far end of the category axis.

For the full multi-axis configuration API—including axis naming, label formatting, and positioning—see [Axes](slug:axes_chart_charts).

This example shows website sessions (left axis) alongside conversion rate (right axis).

{% meta height:440 %}
{% embed_file series-types/combination/separate-axis/func/app.tsx preview %}
{% embed_file series-types/combination/separate-axis/func/main.tsx %}
{% endmeta %}

## Support and Learning Resources

* [Getting Started with the KendoReact Chart](slug:getstarted_charts)
* [API Reference of the Charts](slug:api_charts)
* [Series Types Overview](slug:overview_seriestypes_charts)
* [Axes](slug:axes_chart_charts)
* [Area Charts](slug:area_seriestypes_charts)
* [Bar and Column Charts](slug:barcolumn_seriestypes_charts)
* [Line Charts](slug:line_seriestypes_charts)
* [Scatter Charts](slug:scatterline_seriestypes_charts)

## Additional Resources

* [KendoReact Blogs](https://www.telerik.com/blogs/tag/kendoreact)
* [KendoReact Videos](https://www.telerik.com/videos/kendoreact)
* [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendoreact/roadmap)
