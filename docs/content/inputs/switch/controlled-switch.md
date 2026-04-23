---
title: Controlled Mode
description: "Control the checked and unchecked state of the KendoReact Switch in React projects."
components: ["switch"]
slug: controlled_switch
position: 3
---

# Controlled Mode

By default, the Switch is in an uncontrolled state.

To manage the state of the Switch, use its [`checked`]({% slug api_inputs_switchprops %}#toc-checked) property, handle the [`onChange`]({% slug api_inputs_switchprops %}#toc-onchange) event, and pass the new value through the props.

```jsx-no-run
<Switch
    onChange={(event) => { this.setState({checked: event.target.value}) }}
    checked={this.state.checked}
/>
```

## Manual Switch Toggle

The following example demonstrates how to manually toggle the Switch.

{% meta height:200 %}
{% embed_file switch/controlled/manual/func/app.tsx preview %}
{% embed_file switch/controlled/manual/func/main.tsx %}
{% endmeta %}

## Read-Only Switch

The following example demonstrates how to implement a read-only Switch.

{% meta height:150 %}
{% embed_file switch/controlled/readonly/func/app.tsx preview %}
{% embed_file switch/controlled/readonly/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the Switch]({% slug api_inputs_switch %})
