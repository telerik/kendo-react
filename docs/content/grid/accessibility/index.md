---
title: Overview
description: 'Get started with the KendoKendoReact Data Grid and learn about its accessibility support for WCAG 2.2.'
components: ["datagrid"]
slug: overview_accessibility_grid
position: 10
---

# Overview

The KendoKendoReact Data Grid component is [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) and [Section 508](http://www.section508.gov/) compliant. The component also follows the [WAI-ARIA best practices](https://www.w3.org/WAI/ARIA/apg/) for implementing the [keyboard navigation]({% slug keyboard_navigation_grid %}) for its component [role](https://www.w3.org/TR/wai-aria#roles), and is tested against the popular screen readers.

Due to the rich feature set of the library and complexity of some components, the specific combination of configuration options may lead to inaccessible component rendering. Perform thorough testing on any modifications applied to the KendoReact components to ensure that they continue to comply with the desired level of accessibility standards.

## WCAG 2.2 Compliance

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) comes with a [Draggable Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) criteria as part of the Operable principle. Its objective is to ensure that any feature that relies on dragging actions also offers an alternative method to perform the same action using a single-click user interaction.

Our mission is to provide a flexible API that allows all functionalities to be triggered programmatically or externally, ensuring compatibility with various accessibility requirements for any application.

In the following example, we demonstrate how to achieve accessibility compliance with [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) by enabling grouped columns and row reordering actions through the Grid Context Menu functionality. The Grid component also has enabled [keyboard navigation]({% slug keyboard_navigation_grid %}) and [built-in WAI ARIA Support]({% slug accessibility_grid %}) for enhanced accessibility.

{% meta height:550 %}
{% embed_file accessibility/app.tsx preview %}
{% embed_file accessibility/main.tsx %}
{% embed_file accessibility/CustomColumnMenu.tsx %}
{% endmeta %}

## Suggested Links

-   [WAI-ARIA Support]({% slug accessibility_grid %})
-   [Accessibility Overview](slug:overview_accessibilty)
-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [Keyboard Navigation]({% slug keyboard_navigation_grid %})
