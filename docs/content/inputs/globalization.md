---
title: Globalization
description: 'Globalize the KendoReact Inputs in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["checkbox", "colorgradient", "colorpalette", "colorpicker", "flatcolorpicker", "input", "maskedtextbox", "numerictextbox", "radiobutton", "radiogroup", "rangeslider", "rating", "signature", "slider", "switch", "textarea", "textbox"]
slug: globalization_inputs
position: 60
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to show the value as a culture-specific currency in the available Inputs components and how to localize their built-in messages.

{% meta height:150 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Inputs support the localization of their messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                           | Default Value                                   |
| :------------------------------------ | :---------------------------------------------- |
| `numerictextbox.increment`            | `Increase value`                                |
| `numerictextbox.decrement`            | `Decrease value`                                |
| `slider.increment`                    | `Increase`                                      |
| `slider.decrement`                    | `Decrease`                                      |
| `slider.dragTitle`                    | `Drag`                                          |
| `colorGradient.hex`                   | `hex`                                           |
| `colorGradient.r`                     | `r`                                             |
| `colorGradient.g`                     | `g`                                             |
| `colorGradient.b`                     | `b`                                             |
| `colorGradient.a`                     | `a`                                             |
| `colorGradient.contrastRatio`         | `Contrast ratio`                                |
| `colorGradient.colorGradientAALevel`  | `AA`                                            |
| `colorGradient.colorGradientAAALevel` | `AAA`                                           |
| `colorGradient.colorGradientPass`     | `Pass`                                          |
| `colorGradient.colorGradientFail`     | `Fail`                                          |
| `colorGradient.hueSliderLabel`        | `Hue slider`                                    |
| `colorGradient.alphaSliderLabel`      | `Alpha slider`                                  |
| `colorGradient.toggleInputsButton`    | `Toggle colorgradient inputs`                   |
| `flatColorPicker.cancelBtn`           | `Cancel`                                        |
| `flatColorPicker.applyBtn`            | `Apply`                                         |
| `flatColorPicker.colorGradientBtn`    | `Color Gradient view`                           |
| `flatColorPicker.colorPaletteBtn`     | `Color Palette view `                           |
| `flatColorPicker.clearBtn`            | `Clear color value`                             |
| `checkbox.validation`                 | `Please check this box if you want to proceed!` |
| `checkbox.optionalText`               | `(Optional)`                                    |
| `radioButton.validation`              | `Please select option if you want to proceed!`  |
| `switch.validation`                   | `Please turn on if you want to proceed!`        |
| `colorPicker.dropdownButtonAriaLabel` | `Select`                                        |
| `rating.ariaLabel`                    | `Rating`                                        |
| `signature.clear`                     | `Clear`                                         |
| `signature.maximize`                  | `Maximize`                                      |
| `signature.minimize`                  | `Minimize`                                      |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Inputs.

{% meta height:670 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
