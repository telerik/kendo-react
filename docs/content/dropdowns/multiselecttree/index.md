---
title: Overview
description: 'Use the KendoReact MultiSelectTree component in a React project.'
components: ["multiselecttree"]
slug: overview_multiselecttree
position: 1
---

# KendoReact MultiSelectTree Overview

The KendoReact MultiSelectTree is a form component that lets you choose multiple predefined values from a hierarchical list and is a richer version of the `<select>` element. Supports filtering, custom rendering, keyboard navigation, expand and collapse of the hierarchical data items.

The KendoReact MultiSelectTree component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-dropdowns package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

<CtaPanelOverview></CtaPanelOverview>

The following example shows how to set up the MultiSelectTree component:

1. Set [`data`]({% slug api_dropdowns_multiselecttreeprops %}#toc-data), [`textField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-textfield) and [`dataItemKey`]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitemkey) prop.
1. Set [`value`]({% slug api_dropdowns_multiselecttreeprops %}#toc-value), [`checkField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkfield), [`checkIndeterminateField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkindeterminatefield), [`subItemsField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-subitemsfield), and handle [`onChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onchange) event.
1. Set [`expandField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-expandfield) and handle [`onExpandChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onexpandchange) event.
1. Optionally use the [`getMultiSelectTreeValue`]({% slug api_dropdowns_getmultiselecttreevalue %}) utility function for default value changing behavior.

{% meta height:450 %}
{% embed_file multiselecttree/basic/func/app.tsx preview %}
{% embed_file multiselecttree/basic/func/main.tsx %}
{% embed_file multiselecttree/basic/func/style.css %}
{% endmeta %}

> The MultiSelectTree is part of the [KendoReact Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. To learn how to use the MultiSelectTree and the rest of the Dropdowns, see the [Getting Started with the KendoReact Dropdowns]({% slug get_started_dropdowns %}) guide.

## Key Features

-   [Filtering]({% slug filtering_multiselecttree %})&mdash;You can configure the MultiSelectTree to filter the results locally or on the server.
-   [Custom rendering]({% slug customrendering_multiselecttree %})&mdash;You can allow the MultiSelectTree component to accept custom values.
-   [Forms support]({% slug forms_multiselecttree %})&mdash;You can use the React MultiSelectTree component with HTML form elements or with [the KendoReact Form component]({% slug overview_form %}).
-   [Keyboard navigation]({% slug keyboard_navigation_multiselecttree %})&mdash;The MultiSelectTree supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_multiselecttree %})&mdash;The MultiSelectTree is accessible for screen readers and supports WAI-ARIA attributes.

## Suggested Links

-   [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
