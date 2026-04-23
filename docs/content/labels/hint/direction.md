---
title: Text Direction
description: 'Define the text direction that the KendoReact Hint displays in React projects.'
components: ["hint"]
slug: direction_hint
position: 20
---

# Text Direction

You can change the text direction of the Hint component with the [`direction`]({% slug api_labels_hintprops %}#toc-id) property. `direction` accepts `start` and `end` as values, with `start` being the default.

{% meta height:300 %}
{% embed_file hint/direction/func/app.tsx preview %}
{% embed_file hint/direction/func/main.tsx %}
{% endmeta %}

Label components support RTL and the `start` and `end` values will respect your globalization settings. For example, when [RTL]({% slug globalization_labels %}#toc-right-to-left-support) is enabled for the app, `start` sets the Hint label position to the right.
Text direction affects only the positioning of the Hint label and does not change the direction of its contents (for example, it would not reverse them).

## Suggested Links

-   [Globalization]({% slug globalization_labels %})
-   [API Reference of the Hint Component]({% slug api_labels_hintprops %})
