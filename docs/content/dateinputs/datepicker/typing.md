---
title: Typing
description: 'Control the typing user experience of the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: typing_datepicker
position: 10
---

# Typing

You can control the parameters, which affect the typing user experience in the DatePicker.

## Allow Caret Mode

Setting the [`allowCaretMode`](slug:api_dateinputs_datepickerprops#allowcaretmode) option to `true` will show a blinking caret inside the DatePicker, either when a date segment is partially complete, or when [`autoSwitchParts`](slug:api_dateinputs_datepickerprops#autoswitchparts) is `false`. By default the `allowCaretMode` is set to `false`.

{% meta height:450 %}
{% embed_file datepicker/typing/allow-caret-mode/func/app.tsx preview %}
{% embed_file datepicker/typing/allow-caret-mode/func/main.tsx %}
{% endmeta %}

## Auto Correct Parts

The DatePicker component automatically corrects the date segments when an invalid value is entered in the currently edited part. For example, if the value is `January 31` and the user changes the month to `February`, the component will autocorrect the day to `28`. By default, this functionality is enabled. To disable it, set the [`autoCorrectParts`](slug:api_dateinputs_datepickerprops#autocorrectparts) option to `false`.

{% meta height:450 %}
{% embed_file datepicker/typing/auto-correct-parts/func/app.tsx preview %}
{% embed_file datepicker/typing/auto-correct-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Parts

The DatePicker component allows you to automatically move to the next segment once a valid value is entered in the currently edited part. By default, this functionality is enabled. You can disable it by setting the [`autoSwitchParts`](slug:api_dateinputs_datepickerprops#autoswitchparts) option to `false`.

{% meta height:450 %}
{% embed_file datepicker/typing/auto-switch-parts/func/app.tsx preview %}
{% embed_file datepicker/typing/auto-switch-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Keys

You can configure the keys that can be used to move to the next segment. The example below demonstrates how different keys can be added in the [`autoSwitchKeys`](slug:api_dateinputs_datepickerprops#autoswitchkeys) array.

> The left and right arrows always change the focused segment, regardless of this parameter value.

The following demo lets you move to the next segment using the Enter key.

{% meta height:450 %}
{% embed_file datepicker/typing/auto-switch-keys/func/app.tsx preview %}
{% embed_file datepicker/typing/auto-switch-keys/func/main.tsx %}
{% endmeta %}

## Enable Mouse Wheel

By default when a segment is selected its value can be increased or decreased using the mouse wheel. This behavior can be disabled by setting the [`enableMouseWheel`](slug:api_dateinputs_datepickerprops#enablemousewheel) option to `false`.

{% meta height:450 %}
{% embed_file datepicker/typing/enable-mouse-wheel/func/app.tsx preview %}
{% embed_file datepicker/typing/enable-mouse-wheel/func/main.tsx %}
{% endmeta %}

## Auto-fill

Setting the [`autoFill`](slug:api_dateinputs_datepickerprops#autofill) option to `true` will autofill the rest of the date to the current date when the component loses focus. For example, entering only the date, month or year portion of the date and blurring the component, the missing sections will be automatically completed.

{% meta height:450 %}
{% embed_file datepicker/typing/auto-fill/func/app.tsx preview %}
{% embed_file datepicker/typing/auto-fill/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
