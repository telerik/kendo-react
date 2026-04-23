---
title: Using ChartWizard State with the Chart Component
description: Learn how to use the ChartWizard state to control and render a Chart component in KendoReact.
type: how-to
page_title: Use ChartWizard State with Chart - KendoReact ChartWizard
slug: chart-wizard-use-state-with-chart
tags: chart-wizard, chart, state, chartwizardstate, createstate
res_type: kb
category: knowledge-base
components: ["chartwizard"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>13.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact ChartWizard</td>
        </tr>
    </tbody>
</table>

## Description

I want to use the ChartWizard component to generate chart configurations and then display the resulting chart using the Chart component. How can I use the ChartWizard state to control the Chart?

This KB article also answers the following questions:

-   How do I connect ChartWizard state to a Chart component?
-   How can I use `createState` to initialize a chart configuration?
-   How do I use the ChartWizard state object with Chart component props?

## Solution

The ChartWizard component generates a `ChartWizardState` object that contains all the configuration needed to render a Chart. You can use this state object to control the Chart component by spreading its properties and mapping its arrays to the appropriate Chart child components.

{% meta height:600 %}
{% embed_file chart-wizard/use-state-with-chart/app.tsx preview %}
{% embed_file chart-wizard/use-state-with-chart/main.tsx %}
{% endmeta %}

## See Also

-   [ChartWizard Overview](https://www.telerik.com/kendo-react-ui/components/chart-wizard/)
-   [ChartWizard API](https://www.telerik.com/kendo-react-ui/components/chart-wizard/api/ChartWizard/)
-   [Chart Component Documentation](https://www.telerik.com/kendo-react-ui/components/charts/)
-   [createState API](https://www.telerik.com/kendo-react-ui/components/chart-wizard/api/createState/)
