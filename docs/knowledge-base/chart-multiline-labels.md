---
title: Split Chart Labels in Multiple Lines
description: Learn how to display chart labels in multiple lines in KendoReact Chart when the labels size is too big.
type: how-to
page_title: How to Split the Chart Labels into Multiple Lines in KendoReact Chart
slug: chart-multiline-labels
tags: chart, kendoreact, multiline, x-axis, labels
res_type: kb
ticketid: 1651405
---

## Environment

| Product | KendoReact Chart |
| --- | --- |
| Version | Current |

## Description

In scenarios where the chart labels are too long, resulting in cluttered or unreadable labels, it is necessary to wrap these labels onto multiple lines. This KB article demonstrates how to achieve label wrapping for long X axis labels in a React Chart component by implementing a custom label content function that splits them into multiple lines. The same approach can be used to the other labels in the chart.

This KB article also answers the following questions:
- How can I split the chart labels into multiple lines in KendoReact Chart?
- How can I make long X axis labels more readable in a React Chart?
- Is it possible to wrap X axis labels onto multiple lines in React Charts?

## Solution

To wrap long X axis labels in the Chart for React, use the `labelContent` function within the `ChartCategoryAxisItem` labels configuration.  

Implement your own labels-wrapping functionality using the content or visual template feature. This function allows for the implementation of custom logic to split long labels into multiple lines based on a predefined maximum line width. The following steps and code snippet illustrate how to accomplish this: 

1. Define a function to split a given label string into multiple lines. This function takes the label string and a `maxLength` parameter indicating the maximum line width. It returns the modified label with line breaks (`\n`) inserted where necessary.

    ```jsx
    function splitString(str, maxLength) {
      const words = str.split(' ');
      let result = '';
      let lineLength = 0;

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (lineLength + word.length > maxLength) {
          result += '\n';
          lineLength = 0;
        }
        result += word + ' ';
        lineLength += word.length + 1;
      }

      return result.trim();
    }
    ```

2. Implement the `labelContent` function to utilize `splitString`. This function is assigned to the [`content`](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartXAxisLabelsProps/#toc-content) property of the chart's axis labels configuration. The `labelContent` handler receives label properties as an argument and applies the `splitString` function to the `dataItem.item` value, which represents the current label text.

    ```jsx
    const labelContent = (props) => {
      const maxLengthPerLine = 20;
      const labelsContent = `${props.dataItem.item}`;

      const result = splitString(labelsContent, maxLengthPerLine);

      return result;
    };
    ```

3. Apply the custom label content function to the `ChartCategoryAxisItem` labels:

    ```jsx
    <ChartCategoryAxisItem
      labels={{ visible: true, content: labelContent }}
    />
    ```

[live demo here] 

You can see the suggested approach in the sample below:

[Sample Code](https://stackblitz.com/edit/react-yg6z7l-qzkxp9?file=app%2Fmain.jsx)

## See Also

- [Chart](https://www.telerik.com/kendo-react-ui/components/charts/overview/)
- [ChartValueAxisLabelsProps](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartValueAxisLabelsProps/#toc-step)
