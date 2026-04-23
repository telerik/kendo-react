---
title: Appearance
description: 'Get Started with the KendoReact OrgChart and learn how to customize its visual appearance such as the width, height, the height of the vertical lines, and the spacing between the items.'
components: ["orgchart"]
slug: appearance_orgchart
position: 6
tag: updated
---

# KendoReact OrgChart Appearance

The KendoReact OrgChart allows you to customize its visual appearance using various properties that control the dimensions and spacing of the organizational chart elements.

## Card Width

The [`cardWidth`]({% slug api_orgchart_orgchartprops %}#toc-cardWidth) property sets the width of the individual cards in the organizational chart. The default value is `250px`.

{% meta height:680 %}
{% embed_file appearance/card-width/app.tsx preview %}
{% embed_file appearance/card-width/main.tsx %}
{% endmeta %}

## Card Height

The [`cardHeight`]({% slug api_orgchart_orgchartprops %}#toc-cardHeight) property sets the height of the individual cards in the organizational chart. The default value is `100px`.

{% meta height:680 %}
{% embed_file appearance/card-height/app.tsx preview %}
{% embed_file appearance/card-height/main.tsx %}
{% endmeta %}

## Vertical Line

The [`verticalLine`]({% slug api_orgchart_orgchartprops %}#toc-verticalLine) property sets the height of the vertical lines that connect the cards to each other in the hierarchy. The default value is `60px`.

{% meta height:680 %}
{% embed_file appearance/vertical-line/app.tsx preview %}
{% embed_file appearance/vertical-line/main.tsx %}
{% endmeta %}

## Group Title Height

The [`groupTitleHeight`]({% slug api_orgchart_orgchartprops %}#toc-groupTitleHeight) property sets the height of the group title when using the `groupField` property to organize cards into groups. The default value is `40px`.

{% meta height:880 %}
{% embed_file appearance/group-title-height/app.tsx preview %}
{% embed_file appearance/group-title-height/main.tsx %}
{% endmeta %}

## Group Subtitle Height

The [`groupSubtitleHeight`]({% slug api_orgchart_orgchartprops %}#toc-groupSubtitleHeight) property sets the height of the group subtitle when using the `groupField` property. The default value is `20px`.

{% meta height:800 %}
{% embed_file appearance/group-subtitle-height/app.tsx preview %}
{% embed_file appearance/group-subtitle-height/main.tsx %}
{% endmeta %}

## Colors

You can customize the card colors using the [`cardsColors`]({% slug api_orgchart_orgchartprops %}#toc-cardsColors) property. It accepts the colors as an array of strings where the color at each index corresponds to the same hierarchical position of the cards.

{% meta height:600 %}
{% embed_file appearance/colors/app.tsx preview %}
{% embed_file appearance/colors/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/try/kendo-react-ui)
-   [API Reference of the KendoReact OrgChart]({% slug api_orgchart %})
-   [KendoReact End User License Agreement](https://www.telerik.com/purchase/license-agreement/progress-kendoreact)
