---
title: Overview
description: 'Get an overview of the features the KendoReact Badge delivers and use the component in React projects.'
components: ["badge"]
slug: overview_badge
position: 1
---

# KendoReact Badge Overview

The Badge component is a visual indicator for UI elements. It enables you to easily show statuses, notifications, and short messages in your app. Badges provide additional contextual information for other elements on the page.

The KendoReact Badge is distributed through the [kendo-react-indicators NPM package](https://www.npmjs.com/package/@progress/kendo-react-indicators).

<CtaPanelOverview></CtaPanelOverview>

The Badge position is determined by its parent element. Depending on the presence of child elements for your React component or HTML element, there are two possible approaches:

1. When targeting text, HTML tags or React components that can have children, place the Badge as a child. For example, check the `main.jsx` file in the sample below.
1. When targeting text, HTML tags, or React components that cannot have children, use a [`BadgeContainer`]({% slug badgecontainer_badge %}) component to wrap both the targeted element and the Badge. For example, check the `social-apps.jsx` and `contacts.jsx` files in the sample below.

{% meta height:400 %}
{% embed_file badge/overview/func/app.tsx preview %}
{% embed_file badge/overview/func/main.tsx %}
{% embed_file badge/overview/func/social-apps.tsx %}
{% embed_file badge/overview/func/contacts.tsx %}
{% endmeta %}

> The Badge is part of the [KendoReact Indicators]({% slug overview_indicators %}) component library. The procedures for installing, importing, and using the Indicators are identical for all components in the package. To learn how to use the Badge and the rest of the Indicators, see the [Getting Started with the KendoReact Indicators]({% slug get_started_indicators %}) guide.

## Key Features

-   [Badge Container]({% slug badgecontainer_badge %})&mdash;You can use the KendoReact Badge Container to position and wrap the Badge component.
-   [Positioning]({% slug positioning_badge %})&mdash;You can position the KendoReact Badge in relation to its parent container.
-   [Appearance]({% slug appearance_badge %})&mdash;You can quickly style the Badge by choosing from the predefined styling options.

## Suggested Links

-   [API Reference of the Badge]({% slug api_indicators_badge %})
-   [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
