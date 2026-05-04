---
title: Text Direction
description: 'Define the text direction that the KendoReact Error displays in React projects.'
components: ['error']
slug: direction_error
position: 1
---

# Text Direction

You can change the text direction of the Error component with the [`direction`]({% slug api_labels_errorprops %}#toc-id) property. `direction` accepts `start` and `end` as values, with `start` being the default.

{% meta height:300 %}
{% embed_file error/direction/func/app.tsx preview %}
{% embed_file error/direction/func/main.tsx %}
{% endmeta %}

Label components support RTL and the `start` and `end` values will respect your globalization settings. For example, when [RTL]({% slug globalization_labels %}#toc-right-to-left-support) is enabled for the app, `start` sets the Error label position to the right.
Text direction affects only the positioning of the Error label and does not change the direction of its contents (for example, it would not reverse them).

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [Globalization]({% slug globalization_labels %})
-   [API Reference of the Error Component]({% slug api_labels_errorprops %})
