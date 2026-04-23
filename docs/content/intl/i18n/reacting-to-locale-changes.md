---
title: Reacting to Locale Changes
description: 'React to locale changes when working with the KendoReact Internationalization component in React projects.'
components: ["general"]
slug: reacting_to_locale_changes_intl
position: 30
---

# Reacting to Locale Changes

The Internationalization package enables you to react to changes in the locale data or language.

To react to locale changes, call the [`provideIntlService`]({% slug api_intl_provideintlservice %}) function on every [`render`](https://react.dev/reference/react/Component#render). The recommended approach is to extract the `provideIntlService` into a [`getter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).

> For Functional Components this is not needed since the [`useInternationalization`]({% slug api_intl_useinternationalization %}) hook is called on every render.

{% meta height:170 %}
{% embed_file internationalization/overview/func/app.tsx preview %}
{% embed_file internationalization/overview/func/main.tsx %}
{% embed_file internationalization/overview/func/DateFormatter.tsx %}
{% embed_file internationalization/overview/func/CurrencyFormatter.tsx %}
{% embed_file internationalization/overview/func/Chooser.tsx %}
{% endmeta %}

## Suggested Links

-   [IntlService API Reference]({% slug api_intl_intlservice %})
-   [LocalizationService API Reference]({% slug api_intl_localizationservice %})
-   [Reacting to Language Changes]({% slug reacting_to_language_changes_localization %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
