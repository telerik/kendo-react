---
title: Events
description: 'Using the KendoReact Spreadsheet events in React projects.'
components: ["spreadsheet"]
slug: events_spreadsheet
position: 70
---

# Events

The KendoReact Spreadsheet generates a variety of events that you can handle. Below is a summary of the available events and their triggers:

-   `onSelect`—Fires when the Spreadsheet selection is changed.
-   `onChange`—Fires when a value in the Spreadsheet has been changed.
-   `onChangeFormat`—Fires when the range format is changed from the UI.
-   `onExcelImport`—Fires when the user clicks the **Open** toolbar button.
-   `onExcelExport`—Fires when the user clicks the **Export to Excel** toolbar button.

The following example demonstrates basic Spreadsheet events.

{% meta height:690 %}
{% embed_file events/func/app.tsx preview %}
{% embed_file events/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact Spreadsheet]({% slug api_spreadsheet %})
