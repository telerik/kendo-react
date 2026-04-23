---
title: Overview
description: 'Use the KendoReact Popover component in a React project.'
components: ["tooltip","popover"]
slug: overview_popover
position: 1
---

# KendoReact Popover Overview

The KendoReact Popover component is a popup with rich interactable content, which is displayed when a related UI element is clicked or hovered over.

The KendoReact Popover component is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-react-tooltips package](https://www.npmjs.com/package/@progress/kendo-react-tooltip).

<CtaPanelOverview></CtaPanelOverview>

## Overview

To observe the Popover in action, click on any date in the Calendar:

{% meta height:350 %}
{% embed_file popover/overview/func/app.tsx preview %}
{% embed_file popover/overview/func/main.tsx %}
{% embed_file popover/overview/func/events.tsx %}
{% endmeta %}

> The Popover is part of the [KendoReact Tooltips]({% slug overview_tooltips %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the Popover and the rest of the components in the package, see the [Getting Started with the KendoReact Tooltips]({% slug getstarted_tooltips %}) guide.

## Functionality and Features

-   [Positioning]({% slug positioning_popover %}) - The Popover allows you to specify the position of the Popover element relative to the current anchor or offset.
-   [Callout]({% slug callout_popover %}) - You to enable or disable its callout element.
-   [Collisions]({% slug collisions_popover %}) - The Popover allows you to control the collision behavior when it's not fully visible.
-   [Animations]({% slug animations_popover %}) - You can enable, disable or customize its opening and closing animation.
-   [Scale]({% slug scale_popover %}) - The KendoReact Popover support custom Document Scale.

## Configuring the Title

The KendoReact Popover component provides a fully configurable title through the [`title`]({% slug api_tooltip_popoverprops %}#toc-title) property. It accepts strings and custom components.
If this prop is not set, the Popover component will not render the title wrapper.

{% meta height:280 %}
{% embed_file popover/title/func/app.tsx preview %}
{% embed_file popover/title/func/main.tsx %}
{% endmeta %}

## Configuring the Popover ActionsBar

The KendoReact Popover component allows you to add custom actions by using the [`PopoverActionsBar`]({% slug api_tooltip_popoveractionsbar %}) component.

{% meta height:350 %}
{% embed_file popover/actions/func/app.tsx preview %}
{% embed_file popover/actions/func/main.tsx %}
{% endmeta %}

## Forms Integration

The KendoReact Popover component supports rich interactable content like forms with custom editors.

{% meta height:450 %}
{% embed_file popover/form/func/app.tsx preview %}
{% embed_file popover/form/func/main.tsx %}
{% embed_file popover/form/func/editors.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Tooltips]({% slug api_tooltip %})
