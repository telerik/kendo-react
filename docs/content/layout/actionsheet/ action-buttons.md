---
title: Action Buttons
description: 'Render action buttons and customize their layout in the KendoReact ActionSheet.'
components: ["actionsheet"]
slug: actionbuttons_actionsheet
position: 2
---

# Action Buttons

The ActionSheet provides options for rendering action buttons both in its header and footer.

## Header Action Buttons

You can render action buttons to both sides of the ActionSheet header by using the [`prefixActions`](slug://api_layout_actionsheetprops#prefixactions) and [`suffixActions`](slug://api_layout_actionsheetprops#suffixactions) properties.

{% meta height:500 %}
{% embed_file actionsheet/action-buttons/prefix-and-suffix/app.tsx preview %}
{% embed_file actionsheet/action-buttons/prefix-and-suffix/main.tsx %}
{% endmeta %}

## Footer Action Buttons

You can specify action buttons in the ActionSheet footer by rendering them as children of the [`ActionSheetFooter`]({% slug api_layout_actionsheetfooter %}) component.

### Orientation

You can set the orientation of the footer action buttons through the [actionButtonsOrientation](slug://api_layout_actionsheetfooterprops#actionbuttonsorientation) property.

{% meta height:500 %}
{% embed_file actionsheet/action-buttons/orientation/app.tsx preview %}
{% embed_file actionsheet/action-buttons/orientation/main.tsx %}
{% endmeta %}

### Alignment

You can set the alignment of the footer action buttons when the orientation is horizontal through the [actionButtonsAlignment](slug://api_layout_actionsheetfooterprops#actionbuttonsalignment) property.

{% meta height:500 %}
{% embed_file actionsheet/action-buttons/alignment/app.tsx preview %}
{% embed_file actionsheet/action-buttons/alignment/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ActionSheet](slug://api_layout_actionsheetprops)
-   [API Reference of the ActionSheetFooter](slug://api_layout_actionsheetfooterprops)
