---
title: Badge Container
description: "Use the KendoReact Badge Container to position badges in React projects."
components: ["badge"]
slug: badgecontainer_badge
position: 2
---

# Badge Container

The [BadgeContainer]({% slug api_indicators_badgecontainer %}) component allows you to target text, HTML elements or React components that cannot have children, by wrapping both the targeted element and the Badge inside a BadgeContainer component.

> When using the Badge component without the BadgeContainer component, make sure the HTML element or React component that contains a badge has css position other than [`static`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) and allows [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) content.
The following example demonstrates both approaches in action.



{% meta height:280 %}
{% embed_file badge/container/func/app.tsx preview %}
{% embed_file badge/container/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the BadgeContainer]({% slug api_indicators_badgecontainer %})
* [API Reference of the BadgeContainerProps]({% slug api_indicators_badgecontainerprops %})
* [API Reference of the Badge]({% slug api_indicators_badge %})
* [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
