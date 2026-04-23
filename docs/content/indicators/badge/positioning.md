---
title: Positioning
description: "Learn how to position the KendoReact Badge in a relation to parent HTML element or React components."
components: ["badge"]
slug: positioning_badge
position: 3
---

# Overview

The Badge component provides options for positioning in relation to its parent container - HTML element or React Component.



{% meta height:240 %}
{% embed_file badge/positioning/func/app.tsx preview %}
{% embed_file badge/positioning/func/main.tsx %}
{% endmeta %}



## Alignment

The Badge allows you to set different alignments relative to its parent container.

The available [`align`]({% slug api_indicators_badgeprops %}#toc-align) keys are:
* `horizontal`&mdash; Defines the possible horizontal alignment of the Badge.
  * `start`&mdash;Uses the start point of the parent element.
  * `end`(Default)&mdash;Uses the end point of the parent element.
* `vertical`&mdash; Defines the possible vertical alignment of the Badge.
  * `top`(Default)&mdash;Uses the top point of the parent element.
  * `bottom`&mdash;Uses the bottom point of the parent element.


> When using the Badge component without the [BadgeContainer]({% slug api_indicators_badgecontainer %}) component, make sure the HTML element or React component that contains a badge has css position other than [`static`](https://developer.mozilla.org/en-US/docs/Web/CSS/position) and allows [`overflow`](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) content.



{% meta height:220 %}
{% embed_file badge/alignment/func/app.tsx preview %}
{% embed_file badge/alignment/func/main.tsx %}
{% endmeta %}


## Position

The Badge allows you to specify the position of the badge relative to the edge of its parent container.

The available [`position`]({% slug api_indicators_badgeprops %}#toc-position) values are:
* `edge`&mdash;(Default)The center of the badge is positioned on the edge of the parent container.
* `inside`&mdash;The badge is positioned entirely inside the parent container.
* `outside`&mdash;The badge is positioned entirely outside the parent container.



{% meta height:200 %}
{% embed_file badge/position/func/app.tsx preview %}
{% embed_file badge/position/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the BadgeContainer]({% slug api_indicators_badgecontainer %})
* [API Reference of the BadgeContainerProps]({% slug api_indicators_badgecontainerprops %})
* [API Reference of the Badge]({% slug api_indicators_badge %})
* [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
