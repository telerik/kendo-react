---
title: Formula Injection Protection
description: 'Learn how to protect against CSV formula injection attacks in the KendoKendoReact Data Grid CSV export.'
components: ['datagrid']
slug: formulainjection_csvexport_grid
position: 40
subject: CSV Export feature of the Grid
tier: free
---

# Formula Injection Protection

CSV formula injection is a security vulnerability where malicious formulas embedded in data can be executed when the CSV file is opened in spreadsheet applications like Microsoft Excel. The KendoKendoReact Data Grid CSV export includes built-in protection against this attack vector.

<CtaPanelOverview></CtaPanelOverview>

## What is CSV Formula Injection?

CSV formula injection occurs when data containing formula characters (`=`, `+`, `-`, `@`, tab, or carriage return) is exported to a CSV file. When opened in spreadsheet applications, these characters can trigger formula execution, potentially leading to:

-   Data exfiltration
-   Remote code execution
-   Malware installation
-   Unauthorized system access

### Example of Vulnerable Data

```javascript
const products = [
    { id: 1, name: '=1+1', price: 10 }, // Will evaluate as formula
    { id: 2, name: '+SUM(A1:A10)', price: 20 }, // Will execute SUM
    { id: 3, name: '-2*3', price: 30 }, // Will calculate
    { id: 4, name: '@cmd|calc', price: 40 } // Could execute command
];
```

## Enabled Protection (Recommended)

By default, formula injection protection is **enabled** (`preventFormulaInjection: true`). This prefixes dangerous characters with a single quote (`'`) to neutralize potential formulas:

<demo metaUrl="grid/csv-export/formula-injection-enabled/" height="340"></demo>

When protection is enabled, the exported CSV file will contain:

```csv
ProductID,ProductName,UnitPrice,UnitsInStock
1,'=1+1,10,5
2,'+SUM(A1:A10),20,10
3,'-2*3,30,15
4,'@cmd|calc,40,20
5,Safe Product Name,50,25
```

The single quote prevents spreadsheet applications from interpreting these values as formulas.

## Disabled Protection (Not Recommended)

For comparison, here's an example with protection disabled. **This should only be used in trusted environments where data sources are completely controlled:**

<demo metaUrl="grid/csv-export/formula-injection-disabled/" height="340"></demo>

When protection is disabled, potentially dangerous values are exported as-is:

```csv
ProductID,ProductName,UnitPrice,UnitsInStock
1,=1+1,10,5
2,+SUM(A1:A10),20,10
3,-2*3,30,15
4,@cmd|calc,40,20
5,Safe Product Name,50,25
```

## Protected Characters

The following characters are prefixed with a single quote when protection is enabled:

| Character   | Description           | Example Input | Protected Output |
| ----------- | --------------------- | ------------- | ---------------- |
| `=`         | Equals sign           | `=1+1`        | `'=1+1`          |
| `+`         | Plus sign             | `+SUM(A1:B1)` | `'+SUM(A1:B1)`   |
| `-`         | Minus sign            | `-2*3`        | `'-2*3`          |
| `@`         | At sign               | `@cmd`        | `'@cmd`          |
| `\t` (tab)  | Tab character         | `\tvalue`     | `'\tvalue`       |
| `\r` (CR)   | Carriage return       | `\rvalue`     | `'\rvalue`       |
| `\n` (LF)   | Line feed (wrapped)   | `val\nue`     | `"val\nue"`      |
| `"` (quote) | Double quote (escape) | `val"ue`      | `"val""ue"`      |

## Best Practices

### Always Use Protection with User-Generated Content

When exporting data that originates from user input or external sources:

```jsx
const csvOptions = {
    preventFormulaInjection: true, // Always enable for user data
    fileName: 'user-data-export.csv'
};

<Grid data={userSubmittedData} csv={csvOptions}>
    <GridCsvExportButton />
</Grid>;
```

### Data Sanitization in onCsvExport

You can add additional sanitization in the `onCsvExport` callback:

```jsx
const handleCsvExport = (data) => {
    return data.map((item) => ({
        ...item,
        // Additional sanitization if needed
        name: item.name?.toString().trim() || '',
        description: item.description?.toString().replace(/[=+\-@]/g, '') || ''
    }));
};

<Grid data={products} csv={{ preventFormulaInjection: true }} onCsvExport={handleCsvExport}>
    <GridCsvExportButton />
</Grid>;
```

### Disable Only for Trusted Data

Only disable protection when:

-   Data comes from a completely trusted source
-   The CSV will not be opened in spreadsheet applications
-   You need to intentionally export formulas for legitimate purposes

```jsx
// Only for trusted internal reports with legitimate formulas
const csvOptions = {
    preventFormulaInjection: false,
    fileName: 'internal-report-with-formulas.csv'
};
```

## Suggested Links

-   [CSV Export Basics]({% slug overview_csvexport_grid %})
-   [Data Transformation]({% slug datatransformation_csvexport_grid %})
-   [React Data Grid](slug://overview_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [OWASP CSV Injection](https://owasp.org/www-community/attacks/CSV_Injection)
