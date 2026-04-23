---
title: Controlled Mode
description: "Control the expanded state of the PanelBar component in React projects"
components: ["panelbar"]
slug: controlled_mode_panelbar
position: 5
---

# Controlled Mode

By default, the PanelBar is in an uncontrolled state.

To manage the state of the PanelBar:
* Set the [`isControlled`]({% slug api_layout_panelbarprops %}#toc-isControlled) property to `true` in order to enter the controlled mode first.
* Set the [`expanded`]({% slug api_layout_panelbarprops %}#toc-expanded) property to the expanded items value.
* Handle the [`onSelect`]({% slug api_layout_panelbarprops %}#toc-onSelect) event.
* Set the new value trough the props.


{% meta height:550 %}
{% embed_file panelbar/controlled-state/basic/func/app.tsx preview %}
{% embed_file panelbar/controlled-state/basic/func/main.tsx %}
{% endmeta %}

# Control All PanelBarItems And Use Unique Item Id


The following example demonstrates how to collapse and expand all PanelBar items while controlling the state and implementing own unique ids for each PanelBar item.

{% meta height:550 %}
{% embed_file panelbar/controlled-state/all/func/app.tsx preview %}
{% embed_file panelbar/controlled-state/all/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
