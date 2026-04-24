---
title: Props Context
description: 'Learn how to provide a global configuration for all instances of a Input component in a React Application'
components: ["checkbox", "colorgradient", "colorpalette", "colorpicker", "flatcolorpicker", "input", "maskedtextbox", "numerictextbox", "radiobutton", "radiogroup", "rangeslider", "rating", "signature", "slider", "switch", "textarea", "textbox"]
slug: props-context_inputs
position: 50
---

# Inputs Props Context

The `PropsContext` allows you to configure the props of all `@progress/kendo-react-inputs` components inside of it.

This is useful if a component from the `@progress/kendo-react-inputs` package is wrapped inside another component (for example, KendoReact [Grid]({% slug overview_grid %}) or [Scheduler]({% slug overview_scheduler %})) and a specific component configuration is not exposed.

The following example shows how to configure the NumericTextBox props in a Grid by using `NumericTextBoxPropsContext`:

{% meta height:490 %}
{% embed_file props-context/overview/func/app.tsx preview %}
{% embed_file props-context/overview/func/main.tsx %}
{% embed_file props-context/overview/func/grid-with-filtering.tsx %}
{% embed_file props-context/overview/func/sample-products.ts %}
{% endmeta %}

## Available Contexts

The following components from the `@progress/kendo-react-inputs` package support passing `props` through `context`:

| Component      | Context                                                                          |
| -------------- | -------------------------------------------------------------------------------- |
| Checkbox       | [`CheckboxPropsContext`]({% slug api_inputs_checkboxpropscontext %})             |
| ColorPicker    | [`ColorPickerPropsContext`]({% slug api_inputs_colorpickerpropscontext %})       |
| ColorGradient  | [`ColorGradientPropsContext`]({% slug api_inputs_colorgradientpropscontext %})   |
| ColorPalette   | [`ColorPalettePropsContext`]({% slug api_inputs_colorpalettepropscontext %})     |
| Input          | [`InputPropsContext`]({% slug api_inputs_inputpropscontext %})                   |
| MaskedTextBox  | [`MaskedTextBoxPropsContext`]({% slug api_inputs_maskedtextboxpropscontext %})   |
| NumericTextBox | [`NumericTextBoxPropsContext`]({% slug api_inputs_numerictextboxpropscontext %}) |
| RadioButton    | [`RadioButtonPropsContext`]({% slug api_inputs_radiobuttonpropscontext %})       |
| RadioGroup     | [`RadioGroupPropsContext`]({% slug api_inputs_radiogrouppropscontext %})         |
| RangeSlider    | [`RangeSliderPropsContext`]({% slug api_inputs_rangesliderpropscontext %})       |
| Rating         | [`RatingPropsContext`]({% slug api_inputs_ratingpropscontext %})                 |
| Slider         | [`SliderPropsContext`]({% slug api_inputs_sliderpropscontext %})                 |
| Switch         | [`SwitchPropsContext`]({% slug api_inputs_switchpropscontext %})                 |
| TextArea       | [`TextAreaPropsContext`]({% slug api_inputs_textareapropscontext %})             |

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [Checkbox Overview]({% slug overview_calendar %})
-   [ColorPicker Overview]({% slug overview_colorpicker %})
-   [ColorGradient Overview]({% slug overview_colorgradient %})
-   [ColorPalette Overview]({% slug overview_colorpalette %})
-   [Input Overview]({% slug overview_inputs %})
-   [MaskedTextBox Overview]({% slug overview_maskedtextbox %})
-   [NumericTextBox Overview]({% slug overview_numerictextbox %})
-   [RadioButton Overview]({% slug overview_radiobutton %})
-   [RadioGroup Overview]({% slug overview_radiogroup %})
-   [RangeSlider Overview]({% slug overview_rangeslider %})
-   [Rating Overview]({% slug overview_rating %})
-   [Slider Overview]({% slug overview_slider %})
-   [Switch Overview]({% slug overview_switch %})
-   [TextArea Overview]({% slug overview_textarea %})
