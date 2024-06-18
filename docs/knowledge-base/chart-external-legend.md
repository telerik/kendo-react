---
title: Implementing External Legend in KendoReact Chart
description: Learn how to move the ChartLegend outside the Chart and link ChartSeries to it in KendoReact.
type: how-to
page_title: Create an External Legend in KendoReact Chart
slug: chart-external-legend
tags: kendoreact, chartlegend, chartseriesitem, external-legend
res_type: kb
ticketid: 1651405
---
 
## Environment
 
| Product | KendoReact Chart |
| --- | --- |
| Version | Current |
 
## Description
 
I want to move the `ChartLegend` outside the `Chart` and link the `ChartSeries` to it.
 
This KB article also answers the following questions:
- How do I create an external legend in KendoReact Chart?
- Can I link ChartSeries to an external ChartLegend in KendoReact?
- How to set up an external legend for KendoReact Chart?
 
## Solution
 
To implement an external legend for the KendoReact Chart, follow these steps:

1. Create a KendoReact chart
2. Create an html element that represents the layout of the needed external legend and map it to the chart series data:

```javascript
      <div>
        <h5>Legend</h5>
        {series.map((item, idx) => {
          return (
            <p key={idx} style={{color: item.color, opacity: item.visible ? 1 : 0.5}} onClick={(e) => handleLegendItemClick(e, item) }>
              {item.name}
            </p>
          );
        })}
      </div>

```

 3. Attach a click handler to the created legend items in order to update the visibility other the chart series on each external legend item click:

```javascript
  const handleLegendItemClick = (e, seriesItem) => {
    let newSeries = series.map(item => {
      if (item.name === seriesItem.name) {
        item.visible = !item.visible;
      }
      return item;
    });
    setSeries(newSeries);
  };

```

[live demo preview will be added here]
 
Here is a sample implementation other than the described approach: https://stackblitz.com/edit/react-ujkzeh-wamwvf?file=app%2Fmain.jsx
 
## See Also
 
- [KendoReact Chart Documentation](https://www.telerik.com/kendo-react-ui/components/charts/)
- [KendoReact ChartSeriesItem API](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartSeriesItem/)
- [KendoReact ChartLegend API](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartLegend/)

