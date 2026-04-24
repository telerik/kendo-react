---
title: Loading
description: 'Implement loading on file export with the KendoReact Excel Export component in React projects.'
components: ["excelexport"]
slug: loading_excelexport
position: 6
---

# Loading Implementation

To implement Loading for the Excel Export:

1. Add the Loader component with an initial value of `false`.
2. Set the Loader value to `true` when the user clicks the export button.
3. Handle the [onExportComplete]({% slug api_excel-export_excelexportexportevent %}) event to set the loading back to `false`, when the export is completed.

> The generate file is large. This could take some time.

{% meta height:600 %}
{% embed_file loading/func/app.tsx preview %}
{% embed_file loading/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
