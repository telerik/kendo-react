---
title: Aligning and Positioning
description: 'Align the KendoReact Popup to components or absolute points in React projects and control its position.'
components: ["popup"]
slug: alignmentpositioning_popup
position: 5
---

# Aligning and Positioning

The Popup enables you to align it to [components](#toc-aligning-to-components) and [absolute points](#toc-aligning-to-absolute-points) as well as to [control its position](#toc-positioning).

## Aligning to Components

To align the Popup to a specific component, use the [`anchor`]({% slug api_popup_popupprops %}#toc-anchor) property. The Popup opens next to the defined anchor component.

> If an `anchor` is not provided, the Popup will use the [`offset`]({% slug api_popup_popupprops %}#toc-offset) property value.

{% meta height:200 %}
{% embed_file align-components/func/app.tsx preview %}
{% embed_file align-components/func/main.tsx %}
{% embed_file align-components/func/styles.css %}
{% endmeta %}

## Aligning to Absolute Points

To align the Popup to a specific absolute point that is relative to the document, use the [`offset`]({% slug api_popup_popupprops %}#toc-offset) property. The Popup opens next to the point and uses the specified [`popupAlign`]({% slug api_popup_popupprops %}#toc-popupalign) configuration.

{% meta height:200 %}
{% embed_file align-absolute/func/app.tsx preview %}
{% embed_file align-absolute/func/main.tsx %}
{% embed_file align-absolute/func/styles.css %}
{% endmeta %}

## Positioning

Both the anchor and the Popup are treated as rectangular elements and, as a result, each has nine pivot points. You can align every point of the Popup to an anchor point. The component will position itself by aligning its top-right point to the bottom-right point of the anchor.

{% meta height:530 %}
{% embed_file position/func/app.tsx preview %}
{% embed_file position/func/main.tsx %}
{% embed_file position/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Popup]({% slug api_popup %})
