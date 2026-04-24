---
title: Services
description: 'Use the KendoReact Internationalization service in React projects.'
slug: services_intl
position: 50
---

# Services

The Internationalization package exposes [`IntlService`]({% slug api_intl_intlservice %}) service for default and customized internationalization of locales and [`LocalizationService`]({% slug api_intl_localizationservice %}) for providing messages based on the current language.

## Using the `IntlService` in Components

To use the service in your own components:

1. Use the `IntlProvider` component in your parent component.
1. If you require locale data that is different from the default `en-US` locale data, [load the data you need]({% slug loadingdata_intl %}) in your parent component.
1. Access the `IntlService`:
    - In Functional Components&mdash;Through the [`useInternationalization`]({% slug api_intl_useinternationalization %}) hook.
    - In Class Components &mdash;Register your child component for internationalization by using the [`registerForIntl`]({% slug api_intl_registerforintl %}) function and consume it through the [`provideIntlService`]({% slug api_intl_provideintlservice %}) function.

{% meta height:170 %}
{% embed_file load-prebuild-data/func/DateFormatter.tsx %}
{% embed_file load-prebuild-data/func/app.tsx preview %}
{% embed_file load-prebuild-data/func/main.tsx %}
{% endmeta %}

## Applying the `LocalizationService` in Components

The [`toLanguageString`]({% slug api_intl_localizationservice %}#toc-tolanguagestring) method of the `LocalizationService` accepts a key and a default value. To use the `LocalizationService` in your own components in conjunction with the `LocalizationProvider`:

1. Use the `LocalizationProvider` component in your parent component.
1. Set the [`language`]({% slug api_intl_localizationproviderprops %}#toc-language) property.
1. Access the `LocalizationService`:
    - In Functional Components&mdash;Through the [`useLocalization`]({% slug api_intl_uselocalization %}) hook.
    - In Class Components &mdash;Register your child component for internationalization by using the [`registerForLocalization`]({% slug api_intl_registerforlocalization %}) function and consume it through the [`provideLocalizationService`]({% slug api_intl_providelocalizationservice %}) function.

{% meta height:590 %}
{% embed_file localization/overview/func/Message.tsx %}
{% embed_file localization/overview/func/app.tsx preview %}
{% embed_file localization/overview/func/main.tsx %}
{% embed_file localization/overview/func/Chooser.tsx %}
{% embed_file localization/overview/func/messages.ts %}
{% endmeta %}

## Customizing the Default Service

To override the default behavior of the internationalization service:

1. Create a custom function that internally uses the `IntlService` and overrides only the methods you need, such as `formatDate`.
1. Create a context and a provider component `CustomIntlProvider` that calls the custom function and shares the resulting service instance with its children.
1. Define a `useCustomIntl` hook that reads the current service from context.

{% meta height:150 %}
{% embed_file custom-service/func/app.tsx preview %}
{% embed_file custom-service/func/main.tsx %}
{% embed_file custom-service/func/CustomFormatIntlProvider.tsx %}
{% embed_file custom-service/func/DateFormatter.tsx %}
{% embed_file custom-service/func/CustomFormatIntlService.tsx %}
{% endmeta %}

## Suggested Links

-   [IntlService API Reference]({% slug api_intl_intlservice %})
-   [LocalizationService API Reference]({% slug api_intl_localizationservice %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
