---
title: Format Dates inside Group Headers and Columns Cells
description: Learn how to format group headers and column cells in the KendoReact Grid independently, such as displaying dates in different formats.
type: how-to
page_title: Customizing Group Header and Column Cell Formats in KendoReact Grid
meta_title: Customizing Group Header and Column Cell Formats in KendoReact Grid
slug: grid-format-dates-in-group-header-and-column-cell
tags: kendoreact,grid,group-header,custom-format,date-format
res_type: kb
ticketid: 1708153
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>KendoReact Grid</td>
</tr>
<tr>
<td> Version </td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I want to format the group grid header differently from grid columns in KendoReact. Specifically, I need to display the group header in one format (e.g., "Thu Feb 20 2024 05:00") and the column cells in another (e.g., "MM/DD/YYYY"). The issue seems to arise when sorting or grouping with different formats for date columns.

This knowledge base article also answers the following questions:

-   How can I format group headers and column cells differently in KendoReact Grid?
-   How do I apply custom date formats to group headers in KendoReact Grid?
-   How do I ensure proper sorting and grouping with formatted date columns in KendoReact Grid?

## Solution

To format the group header and column cells in the KendoReact [Grid](https://www.telerik.com/kendo-react-ui/components/grid/), follow these steps:

### Column Date Formatting

Display the date in the column cells as "MM/DD/YYYY" using a custom cell renderer.

```jsx
import { formatDate } from '@progress/kendo-react-intl';

const CustomDateCell = (props: GridCustomCellProps) => {
    const value = props.children;
    const intl = useInternationalization();
    const formatted = intl.formatDate(new Date(value), 'MM/dd/yyyy');
    return <td {...props.tdProps}> {formatted}</td>;
};

// In your GridColumn definition
<Column field="ProductionDate" title="Production Date" cells={{ data: CustomDateCell }} />;
```

### Group Header Formatting

Format the group header differently (e.g., "Thu Feb 20 2024 05:00") using a custom group header renderer.

```jsx
import { useInternationalization } from '@progress/kendo-react-intl';

const GroupMyHeaderCustomCell = (props: GridCustomCellProps) => {
    const value = props.dataItem[props.field];
    const intl = useInternationalization();
    const formatted = intl.formatDate(new Date(value), 'EEE MMM dd yyyy HH:mm');

    if (props.dataItem.field == 'ProductionDate') {
        return (
            props.tdProps && (
                <td
                    {...props.tdProps}
                    style={{
                        backgroundColor: 'skyblue'
                    }}
                >
                    {props.children && (
                        <p className="k-reset">
                            {props.children.props.children[0]}
                            {formatted}
                        </p>
                    )}
                </td>
            )
        );
    } else {
        return <td {...props.tdProps}>{props.children}</td>;
    }
};

// In your Grid definition
<Grid
    groupable
    cells={{
        group: {
            groupHeader: GroupMyHeaderCustomCell
        }
    }}
>
```

The below demo implements both of the suggested approaches.

<demo metaUrl="knowledge-base/grid/grid-format-dates-in-group-header-and-column-cell/" height="600"></demo>

### Sorting and Grouping Considerations

1. Ensure the underlying data is consistent and in a valid date format, such as ISO strings or JavaScript Date objects.
2. Sorting and grouping rely on the raw data values, not formatted values. Formatting changes display only.

## See Also

-   [KendoReact Grid Overview](https://www.telerik.com/kendo-react-ui/components/grid/)
-   [Render Custom Content Inside the Grid Group Header](https://www.telerik.com/kendo-react-ui/knowledge-base/render-a-custom-content-inside-the-grid-group-header/)
-   [KendoReact Date Formatting](https://www.telerik.com/kendo-react-ui/components/dateinputs/globalization/)
