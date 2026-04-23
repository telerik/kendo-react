---
title: Overview
description: 'Get an overview of the features the KendoReact Skeleton delivers and use the component in React projects.'
components: ["skeleton"]
slug: overview_skeleton
position: 1
---

# KendoReact Skeleton Overview

The React Skeleton component shows a preview of your content while it loads.

This component helps make your app feel faster to users. While data is loading, the Skeleton shows simple shapes where the real content will appear, making the wait feel shorter.

The KendoReact Skeleton is distributed through the [kendo-react-indicators NPM package](https://www.npmjs.com/package/@progress/kendo-react-indicators).

<CtaPanelOverview></CtaPanelOverview>

The following demo shows a social media card with skeleton placeholders next to a fully loaded card. It helps you see how skeletons can improve the loading experience.

{% meta height:500 %}
{% embed_file skeleton/overview/func/app.tsx preview %}
{% embed_file skeleton/overview/func/main.tsx %}
{% endmeta %}

> The Skeleton is part of the [KendoReact Indicators]({% slug overview_indicators %}) component library. The procedures for installing, importing, and using the Indicators are identical for all components in the package. To learn how to use the Skeleton and the rest of the Indicators, see the [Getting Started with the KendoReact Indicators]({% slug get_started_indicators %}) guide.

## Key Features

-   [Shapes]({% slug appearance_skeleton %}#shape)&mdash;The Skeleton component offers three options for the `shape` prop to match different content types: `circle` for avatars and icons, `text` (default) for lines of content, and `rectangle` for images and content blocks.
-   [Animations]({% slug appearance_skeleton %}#animation)&mdash;The Skeleton component offers three options for the `animation` prop to enhance loading states: `pulse` (default) that creates a subtle fading effect, `wave` that displays a sweeping animation across elements, or `false` to disable animations entirely.

## Suggested Links

-   [API Reference of the Skeleton]({% slug api_indicators_skeleton %})
-   [API Reference of the SkeletonProps]({% slug api_indicators_skeletonprops %})
