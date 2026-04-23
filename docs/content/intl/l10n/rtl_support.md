---
title: RTL Support
description: 'Enable RTL mode of the Kendo UI components using Localization package in React projects.'
components: ["general"]
slug: rtl_support
position: 30
---

# RTL Support

Right-to-Left (RTL) support represents the ability of a library, website, or application to handle and respond to users who communicate through right-to-left languages. Right-to-left languages are Arabic, Hebrew, Chinese, Japanese, and others.

In web applications, the RTL mode can be enabled with the `dir` attribute of a DOM element. To enable the RTL mode for all Kendo UI components in your React application, provide a text direction value by using the RTL token in the root module of the application. You can also limit the RTL mode to a part of the application by providing the value to a sub-module. By default, the RTL mode is disabled.

In specific scenarios, you can change the text direction at runtime. For example, when the language of your application changes dynamically.

{% meta height:370 %}
{% embed_file localization/rtl/func/app.tsx preview %}
{% embed_file localization/rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [IntlService API Reference]({% slug api_intl_intlservice %})
-   [LocalizationService API Reference]({% slug api_intl_localizationservice %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
