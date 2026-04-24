---
title: Controlled Mode
description: 'Control the value and data state of the KendoReact ChipList component'
components: ["chiplist"]
slug: controlledmode_chiplist
position: 3
---

# Controlled Mode

The ChipList provides the options to control is value as well as its data state, or alternatively, have them in an uncontrolled state.

## Control the Value

If you want to set the initial value in uncontrolled mode, set the [`defaultValue`]({% slug api_buttons_chiplistprops %}#toc-defaultValue) property.

On the other hand, to control the value of the ChipList, use the [`value`]({% slug api_buttons_chiplistprops %}#toc-value) prop and the [`onChange`]({% slug api_buttons_chiplistprops %}#toc-onChange) event. These props are demonstrated in the following example.

{% meta height:130 %}
{% embed_file chiplist/controlled/controlled-value/app.tsx preview %}
{% embed_file chiplist/controlled/controlled-value/main.tsx %}
{% endmeta %}

## Control the Data State

If you want to set the data in uncontrolled mode, set the [`defaultData`]({% slug api_buttons_chiplistprops %}#toc-defaultData) property.

On the other hand, to manage the data state of the ChipList, follow the steps below:

-   Store your data in a state variable and pass it to the [`data`]({% slug api_buttons_chiplistprops %}#toc-data) property.
-   Set the new value coming from the [`onDataChange`]({% slug api_buttons_chiplistprops %}#toc-onDataChange) event to the state variable that is passed to the data prop.

{% meta height:130 %}
{% embed_file chiplist/controlled/controlled-data/app.tsx preview %}
{% embed_file chiplist/controlled/controlled-data/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
