---
title: Overview
page_title: AdaptiveMode React Context & Overview | KendoReact UI
description: 'Get a free trial of the React AdaptiveMode by KendoReact. Add custom breakpoints to all your components and make them more responsive and adaptive.'
components: ["general"]
slug: overview_adaptive_mode
position: 1
---

# KendoReact AdaptiveModeContext Overview

The increasing variety of mobile devices requires an adaptive rendering for your application that covers all different screen resolutions and ensures a smooth user experience. You can customize the adaptive rendering of the KendoReact components by modifying the default adaptive breakpoints.

<CtaPanelOverview></CtaPanelOverview>

## AdaptiveModeContext

The AdaptiveModeContext is a React context that provides a global configuration for adaptive rendering across various components. It lets you define breakpoints for small and medium screen sizes. This context is essential for implementing responsive layouts, where UI components such as DatePicker, DropDownList, ComboBox, and others may need to adapt.

The context itself provides small and medium breakpoints. You should wrap your components in a `Provider` to pass these values down the component tree:

-   [`small`]({% slug api_common_adaptivemodecontexttype %}#small)&mdash;Sets the horizontal screen width in pixels up to which the component will display as a full-screen modal. The default value is `500`.
-   [`medium`]({% slug api_common_adaptivemodecontexttype %}#medium)&mdash;Sets the horizontal screen width in pixels up to which the component will display as a docked-to-the-bottom modal. The default value is `768`.

The following example demonstrates how to customize the adaptive settings of the KendoReact DatePicker component.

{% meta height:550 %}
{% embed_file adaptive-mode/app.tsx preview %}
{% embed_file adaptive-mode/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [API Reference of the AdaptiveModeContext]({% slug api_common_adaptivemodecontext %})
-   [API Reference of the AdaptiveModeContextType]({% slug api_common_adaptivemodecontexttype %})
