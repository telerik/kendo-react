---
title: Disabled ButtonGroup
description: 'Enable or disable the KendoReact ButtonGroup in React projects.'
components: ["buttongroup"]
slug: disabledstate_buttongroup
position: 2
---

# Disabled ButtonGroup

You can enable or disable the KendoReact ButtonGroup.

By default, the component is enabled. To disable the whole group of buttons, set the [`disabled`]({% slug api_buttons_buttongroupprops %}#toc-disabled) property of the ButtonGroup to `true`.

To disable a specific button, set its own `disabled` property to `true` and leave the `disabled` property of the ButtonGroup undefined. If you define the `disabled` property of the ButtonGroup, it will take precedence over the `disabled` attributes of the underlying buttons and they will be ignored.

The following example demonstrates how to disable the ButtonGroup.

{% meta height:180 %}
{% embed_file buttongroup/disabled/func/app.tsx preview %}
{% embed_file buttongroup/disabled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ButtonGroup]({% slug api_buttons_buttongroupprops %})
