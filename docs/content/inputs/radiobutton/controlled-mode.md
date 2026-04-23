---
title: Controlled Mode
description: "Learn how to use controlled mode for the KendoReact RadioButton in React projects."
components: ["radiobutton"]
slug: controlled_radiobutton
position: 3
---

# Controlled Mode

By default, the KendoReact RadioButton is in an uncontrolled mode.

## Controlling the Value

To manage the value of the RadioButton:

1. Use its [`value`]({% slug api_inputs_radiobuttonprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_radiobuttonprops %}#toc-onchange) event.

{% meta height:200 %}
{% embed_file radiobutton/controlled-mode/app.tsx preview %}
{% embed_file radiobutton/controlled-mode/main.tsx %}
{% endmeta %}
