---
title: Globalization
description: 'Globalize the KendoReact Chart Wizard in React projects by adapting it to specific cultures, loading translated messages, or using the RTL support.'
components: ["chartwizard"]
slug: globalization_chart-wizard
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Chart Wizard supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                                              | Default Value         |
| :------------------------------------------------------- | :-------------------- |
| `chartWizard.window.title`                               | `Chart Preview`       |
| `chartWizard.export.button`                              | `Export`              |
| `chartWizard.exportPDF.button`                           | `PDF File`            |
| `chartWizard.exportSVG.button`                           | `SVG File`            |
| `chartWizard.exportPNG.button`                           | `PNG File`            |
| `chartWizard.tab.chart`                                  | `Chart`               |
| `chartWizard.tab.data`                                   | `Data`                |
| `chartWizard.tab.format`                                 | `Format`              |
| `chartWizard.chart.barChart.expandText`                  | `Bar Chart`           |
| `chartWizard.chart.barChart.bar`                         | `Bar`                 |
| `chartWizard.chart.barChart.stackedBar`                  | `Stacked Bar`         |
| `chartWizard.chart.barChart.100%stackedBar`              | `100% Stacked Bar`    |
| `chartWizard.chart.pieChart.expandText`                  | `Pie Chart`           |
| `chartWizard.chart.pieChart.pie`                         | `Pie`                 |
| `chartWizard.chart.columnChart.expandText`               | `Column Chart`        |
| `chartWizard.chart.columnChart.column`                   | `Column`              |
| `chartWizard.chart.columnChart.stackedColumn`            | `Stacked Column`      |
| `chartWizard.chart.columnChart.100%stackedColumn`        | `100% Stacked Column` |
| `chartWizard.chart.lineChart.expandText`                 | `Line Chart`          |
| `chartWizard.chart.lineChart.line`                       | `Line`                |
| `chartWizard.chart.lineChart.stackedLine`                | `Stacked Line`        |
| `chartWizard.chart.lineChart.100%stackedLine`            | `100% Stacked Line`   |
| `chartWizard.chart.scatterChart.expandText`              | `Scatter Chart`       |
| `chartWizard.chart.scatterChart.scatter`                 | `Scatter`             |
| `chartWizard.data.configuration.expandText`              | `Configuration`       |
| `chartWizard.data.configuration.categoryAxis`            | `Category Axis`       |
| `chartWizard.data.configuration.xAxis`                   | `X Axis`              |
| `chartWizard.data.configuration.valueAxis`               | `Value Axis`          |
| `chartWizard.data.configuration.series.title`            | `Series`              |
| `chartWizard.data.configuration.series.add`              | `Add`                 |
| `chartWizard.format.chartArea.expandText`                | `Chart Area`          |
| `chartWizard.format.chartArea.margins`                   | `Margins`             |
| `chartWizard.format.chartArea.margins.auto`              | `Auto`                |
| `chartWizard.format.chartArea.margins.left`              | `Left`                |
| `chartWizard.format.chartArea.margins.right`             | `Right`               |
| `chartWizard.format.chartArea.margins.top`               | `Top`                 |
| `chartWizard.format.chartArea.margins.bottom`            | `Bottom`              |
| `chartWizard.format.chartArea.background`                | `Background`          |
| `chartWizard.format.chartArea.background.color`          | `Color`               |
| `chartWizard.format.title.expandText`                    | `Title`               |
| `chartWizard.format.title.applyTo`                       | `Apply to`            |
| `chartWizard.format.title.chartTitle`                    | `Chart Title`         |
| `chartWizard.format.title.chartSubtitle`                 | `Chart Subtitle`      |
| `chartWizard.format.title.label`                         | `Title`               |
| `chartWizard.format.title.font`                          | `Font`                |
| `chartWizard.format.title.fontPlaceholder`               | `(inherited font)`    |
| `chartWizard.format.title.size`                          | `Size`                |
| `chartWizard.format.title.sizePlaceholder`               | `px`                  |
| `chartWizard.format.title.color`                         | `Color`               |
| `chartWizard.format.series.expandText`                   | `Series`              |
| `chartWizard.format.series.applyTo`                      | `Apply to`            |
| `chartWizard.format.series.allSeries`                    | `All Series`          |
| `chartWizard.format.series.color`                        | `Color`               |
| `chartWizard.format.series.showLabels`                   | `Show Labels`         |
| `chartWizard.format.legend.expandText`                   | `Legend`              |
| `chartWizard.format.legend.showLegend`                   | `Show Legend`         |
| `chartWizard.format.legend.font`                         | `Font`                |
| `chartWizard.format.legend.fontPlaceholder`              | `(inherited font)`    |
| `chartWizard.format.legend.size`                         | `Size`                |
| `chartWizard.format.legend.sizePlaceholder`              | `px`                  |
| `chartWizard.format.legend.color`                        | `Color`               |
| `chartWizard.format.legend.position`                     | `Position`            |
| `chartWizard.format.legend.position.top`                 | `Top`                 |
| `chartWizard.format.legend.position.bottom`              | `Bottom`              |
| `chartWizard.format.legend.position.left`                | `Left`                |
| `chartWizard.format.legend.position.right`               | `Right`               |
| `chartWizard.format.categoryAxis.expandText`             | `Category Axis`       |
| `chartWizard.format.xAxis.expandText`                    | `X Axis`              |
| `chartWizard.format.categoryAxis.title.expandText`       | `Title`               |
| `chartWizard.format.categoryAxis.title.placeholder`      | `Axis Title`          |
| `chartWizard.format.categoryAxis.title.font`             | `Font`                |
| `chartWizard.format.categoryAxis.title.fontPlaceholder`  | `(inherited font)`    |
| `chartWizard.format.categoryAxis.title.size`             | `Size`                |
| `chartWizard.format.categoryAxis.title.sizePlaceholder`  | `px`                  |
| `chartWizard.format.categoryAxis.title.color`            | `Color`               |
| `chartWizard.format.categoryAxis.labels.text`            | `Labels`              |
| `chartWizard.format.categoryAxis.labels.font`            | `Font`                |
| `chartWizard.format.categoryAxis.labels.fontPlaceholder` | `(inherited font)`    |
| `chartWizard.format.categoryAxis.labels.size`            | `Size`                |
| `chartWizard.format.categoryAxis.labels.sizePlaceholder` | `px`                  |
| `chartWizard.format.categoryAxis.labels.color`           | `Color`               |
| `chartWizard.format.categoryAxis.labels.rotation.text`   | `Rotation`            |
| `chartWizard.format.categoryAxis.labels.rotation.auto`   | `Auto`                |
| `chartWizard.format.categoryAxis.labels.reverseOrder`    | `Reverse Order`       |
| `chartWizard.format.valueAxis.expandText`                | `Value Axis`          |
| `chartWizard.format.yAxis.expandText`                    | `Y Axis`              |
| `chartWizard.format.valueAxis.title.text`                | `Title`               |
| `chartWizard.format.valueAxis.title.placeholder`         | `Axis Title`          |
| `chartWizard.format.valueAxis.title.font`                | `Font`                |
| `chartWizard.format.valueAxis.title.fontPlaceholder`     | `(inherited font)`    |
| `chartWizard.format.valueAxis.title.size`                | `Size`                |
| `chartWizard.format.valueAxis.title.sizePlaceholder`     | `px`                  |
| `chartWizard.format.valueAxis.title.color`               | `Color`               |
| `chartWizard.format.valueAxis.labels.text`               | `Labels`              |
| `chartWizard.format.valueAxis.labelFormat`               | `Label Format`        |
| `chartWizard.format.valueAxis.labelFormat.text`          | `Text`                |
| `chartWizard.format.valueAxis.labelFormat.number`        | `Number`              |
| `chartWizard.format.valueAxis.labelFormat.currency`      | `Currency`            |
| `chartWizard.format.valueAxis.labelFormat.percent`       | `Percent`             |
| `chartWizard.format.valueAxis.labels.font`               | `Font`                |
| `chartWizard.format.valueAxis.labels.fontPlaceholder`    | `(inherited font)`    |
| `chartWizard.format.valueAxis.labels.size`               | `Size`                |
| `chartWizard.format.valueAxis.labels.sizePlaceholder`    | `px`                  |
| `chartWizard.format.valueAxis.labels.color`              | `Color`               |
| `chartWizard.format.valueAxis.labels.rotation.text`      | `Rotation`            |
| `chartWizard.format.valueAxis.labels.rotation.auto`      | `Auto`                |

The following example demonstrates how to load and apply the messages.

{% meta height:900 %}
{% embed_file globalization/messages/app.tsx preview %}
{% embed_file globalization/messages/main.tsx %}
{% embed_file globalization/bg.json %}
{% endmeta %}

## Right-to-Left Support

To utilize the RTL support for the Chart Wizard you should add `dir="rtl"` attribute to the `body` element of the page.

<!-- {% meta height:900 %}
{% embed_file globalization/rtl/app.tsx preview %}
{% embed_file globalization/rtl/main.tsx %}
{% endmeta %} -->

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
