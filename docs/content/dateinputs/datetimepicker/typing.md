---
title: Typing
description: 'Control the typing user experience of the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: typing_datetimepicker
position: 11
---

# Typing

You can control the parameters, which affect the typing user experience in the DateTimePicker.

## Allow Caret Mode

Setting the [`allowCaretMode`](slug:api_dateinputs_datetimepickerprops#allowcaretmode) option to `true` will show a blinking caret inside the DateTimePicker, either when a date segment is partially complete, or when [`autoSwitchParts`](slug:api_dateinputs_datetimepickerprops#autoswitchparts) is `false`. By default the `allowCaretMode` is set to `false`.

{% meta height:600 %}
{% embed_file datetimepicker/typing/allow-caret-mode/func/app.tsx preview %}
{% embed_file datetimepicker/typing/allow-caret-mode/func/main.tsx %}
{% endmeta %}

## Auto Correct Parts

The DateTimePicker component automatically corrects the date segments when an invalid value is entered in the currently edited part. For example, if the value is `January 31` and the user changes the month to `February`, the component will autocorrect the day to `28`. By default, this functionality is enabled. To disable it, set the [`autoCorrectParts`](slug:api_dateinputs_datetimepickerprops#autocorrectparts) option to `false`.

{% meta height:600 %}
{% embed_file datetimepicker/typing/auto-correct-parts/func/app.tsx preview %}
{% embed_file datetimepicker/typing/auto-correct-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Parts

The DateTimePicker component allows you to automatically move to the next segment once a valid value is entered in the currently edited part. By default, this functionality is enabled. You can disable it by setting the [`autoSwitchParts`](slug:api_dateinputs_datetimepickerprops#autoswitchparts) option to `false`.

{% meta height:600 %}
{% embed_file datetimepicker/typing/auto-switch-parts/func/app.tsx preview %}
{% embed_file datetimepicker/typing/auto-switch-parts/func/main.tsx %}
{% endmeta %}

## Auto Switch Keys

You can configure the keys that can be used to move to the next segment. The example below demonstrates how different keys can be added in the [`autoSwitchKeys`](slug:api_dateinputs_datetimepickerprops#autoswitchkeys) array.

> The left and right arrows always change the focused segment, regardless of this parameter value.

The following demo lets you move to the next segment using the Enter key.

{% meta height:600 %}
{% embed_file datetimepicker/typing/auto-switch-keys/func/app.tsx preview %}
{% embed_file datetimepicker/typing/auto-switch-keys/func/main.tsx %}
{% endmeta %}

## Enable Mouse Wheel

By default when a segment is selected its value can be increased or decreased using the mouse wheel. This behavior can be disabled by setting the [`enableMouseWheel`](slug:api_dateinputs_datetimepickerprops#enablemousewheel) option to `false`.

{% meta height:600 %}
{% embed_file datetimepicker/typing/enable-mouse-wheel/func/app.tsx preview %}
{% embed_file datetimepicker/typing/enable-mouse-wheel/func/main.tsx %}
{% endmeta %}

## Auto-fill

Setting the [`autoFill`](slug:api_dateinputs_datetimepickerprops#autofill) option to `true` will autofill the rest of the date to the current date when the component loses focus. For example, entering only the date, month or year portion of the date and blurring the component, the missing sections will be automatically completed.

{% meta height:600 %}
{% embed_file datetimepicker/typing/auto-fill/func/app.tsx preview %}
{% embed_file datetimepicker/typing/auto-fill/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
