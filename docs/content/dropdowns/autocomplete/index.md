---
title: Overview
description: 'Get an overview of the features the KendoReact AutoComplete delivers and use the component in React projects.'
components: ["autocomplete"]
slug: overview_autocomplete
position: 1
---

# KendoReact AutoComplete Overview

The KendoReact AutoComplete is a form component that provides suggestions depending on the typed text and is a richer version of the `<input>` element and supports data binding, filtering, and custom rendering.

The KendoReact AutoComplete component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the AutoComplete in action.

{% meta height:450 %}
{% embed_file autocomplete/basic/func/app.tsx preview %}
{% embed_file autocomplete/basic/func/main.tsx %}
{% embed_file autocomplete/basic/func/overview-styles.css %}
{% endmeta %}

> The AutoComplete is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the AutoComplete and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Data and value binding]({% slug binding_autocomplete %})&mdash;You can bind the AutoComplete to primitive (strings and numbers) or complex (objects) items.
-   [Filtering]({% slug filtering_autocomplete %})&mdash;You can configure the AutoComplete to filter the results locally or on the server.
-   [Suggestions]({% slug suggestions_autocomplete %})&mdash;To turn the suggestions on, set the [`suggest`]({% slug api_dropdowns_autocompleteprops %}#toc-suggest) property to `true`.
-   [Custom rendering]({% slug customrendering_autocomplete %})&mdash;You can customize the way the AutoComplete component renders its elements.
-   [Floating labels]({% slug floatinglabels_dropdowns %})&mdash;You can show floating labels inside the KendoReact AutoComplete component.
-   [Forms support]({% slug forms_autocomplete %})&mdash;You can use the React AutoComplete component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Globalization]({% slug globalization_dropdowns %})&mdash;The built-in globalization support allows you to create apps that are ready to be implemented worldwide.
-   [Keyboard navigation]({% slug keyboard_navigation_autocomplete %})&mdash;The AutoComplete supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_autocomplete %})&mdash;The AutoComplete is accessible for screen readers and supports WAI-ARIA attributes.

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
-   [Getting Started with the KendoReact DropDowns]({% slug get_started_dropdowns %})
