---
title: Table Editing
description: 'Learn more about how to edit tables through table properties and cell properties tools supported by the KendoReact Editor.'
components: ["editor"]
slug: table_editing
position: 12
---

# Table Editing

The React Editor component, part of KendoReact, allows you to configure the table and cell properties and change the design of a table by using the [**Table properties**](#toc-table-properties-tool) tool and the [**Cell properties**](#toc-cell-properties-tool) tool.

> To resize the table rows and columns, you can also drag the cell border by using the mouse.

## Table Properties Tool

The **Table properties** dialog organizes the available table editing options into two tabs: [**General**](#toc-general-table-properties) and [**Advanced**](#toc-advanced-table-properties).

### General Table Properties

The **General** tab lists the options for the table element:

| Option               | Description                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Width**            | Changes the width of the table.                                                                                                                                                          |
| **Height**           | Changes the height of the table.                                                                                                                                                         |
| **Columns**          | Defines the columns of the table.                                                                                                                                                        |
| **Rows**             | Defines the rows of the table.                                                                                                                                                           |
| **Cell spacing**     | Specifies the space between the cells (the [`border-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing) property).                                                |
| **Cell padding**     | Specifies the padding in the cells.                                                                                                                                                      |
| **Alignment**        | Specifies the text alignment in the cells.                                                                                                                                               |
| **Background**       | Specifies the background color of the table.                                                                                                                                             |
| **Border width**     | Defines the border size in pixels.                                                                                                                                                       |
| **Border color**     | Defines the border color.                                                                                                                                                                |
| **Border style**     | Defines the border style (**None**, **Hidden**, **Dotted**, **Dashed**, **Solid**, **Double**, **Groove**, **Ridge**, **Inset**, **Outset**, **Initial**, and **Inherit**).              |
| **Collapse borders** | Adds an inline style to the table and applies the `border-collapse: collapse` rule (the [`border-collapse`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse) property). |

### Advanced Table Properties

The **Advanced** tab lists the CSS class, ID, and the table options related to accessibility:

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CSS class**         | Defines the class names for the table element (white space-separated).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **ID**                | Defines the `id` of the table element.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Caption**           | Adds a caption element for the table with the respective text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Caption side**      | Places the caption element for the table оn a specified side (the [`caption-side`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side) property).                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Alignment**         | Defines the text alignment of the caption.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Header rows**       | Allows the user to specify the number of rows in the table that belong to the header and must render `<th>` instead of `<td>` cell elements. When creating a new table, those rows will be placed within a `<thead>` element.                                                                                                                                                                                                                                                                                                                                                                                 |
| **Header cols**       | Allows the user to specify the number of columns in the table that are headers for their respective rows. The cells will be rendered as `<th>` instead of `<td>` elements.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Associate headers** | <br>Allows the user to specify the mode in which content cells will be associated with their header cells. The following modes are available:</br> <br>**None**&mdash;Does not explicitly associate cells. This is the default option and it is appropriate for tables with simple structure (no merged cells).</br><br>**Using 'scope' attribute**&mdash;Adds the appropriate scope attribute to all header cells.</br> <br>**Using 'id' attributes**&mdash;Assigns IDs to all header cells and injects header attributes with the appropriate value into all data cells (and header cells, if needed).</br> |

## Cell Properties Tool

The **Cell properties** dialog lists the options available for the selected cell or for all cells in the table.

| Option                 | Description                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Apply to all cells** | Applies the changes to all cells in the table.                                                                                                                                                       |
| **Width**              | Changes the width of the cell or cells.                                                                                                                                                              |
| **Height**             | Changes the height of the cell or cells.                                                                                                                                                             |
| **Alignment**          | Specifies the text alignment of the cell or cells.                                                                                                                                                   |
| **Text control**       | When you select **Fit to cell**, the Editor control applies a `white-space: nowrap` style to the cells (the [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) property). |
| **Cell padding**       | Defines the padding of the cell or cells.                                                                                                                                                            |
| **Background**         | Specifies the background color of the cell or cells.                                                                                                                                                 |
| **Border width**       | Defines the border size of the cells in pixels.                                                                                                                                                      |
| **Border color**       | Defines the color of the cells.                                                                                                                                                                      |
| **Border style**       | Defines the border style (**None**, **Hidden**, **Dotted**, **Dashed**, **Solid**, **Double**, **Groove**, **Ridge**, **Inset**, **Outset**, **Initial**, and **Inherit**).                          |
| **ID**                 | Defines the `id` of the cells.                                                                                                                                                                       |
| **CSS class**          | Defines the class names for the cells (white space-separated).                                                                                                                                       |

The following example demonstrates the table and cell properties tools in action:

{% meta height:680 %}
{% embed_file table-wizard/func/app.tsx preview %}
{% embed_file table-wizard/func/main.tsx %}
{% embed_file table-wizard/func/content.ts %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
