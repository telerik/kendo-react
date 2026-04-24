---
title: Globalization
page_title: 'Globalization in React Data Grid RSC Mode'
description: 'Configure Internationalization and Localization features in RSC mode of KendoReact Data Grid to adapt the Grid to different languages and cultures.'
components: ["datagrid"]
slug: globalization_rsc_grid
subject: RSC Mode of the Grid
position: 80
---

# KendoKendoReact Data Grid Globalization in RSC Mode

The RSC mode of the KendoKendoReact Data Grid supports globalization features to adapt the Grid to different languages and cultures. This article explains how to configure the Grid for internationalization and localization in RSC mode.

<CtaPanelOverview></CtaPanelOverview>

The RSC globalization of the KendoKendoReact Data Grid works a bit differently than in the client mode. In RSC mode, the Grid keeps track of all loaded locale data & localization messages, but only sends the currently active locale and messages to the client in order to reduce the network bandwidth and improve the performance of the application.

## Loading locale & localization messages

Loading locales and localization messages is the same as with a regular client component, and is done by utilizing the `load` and `loadMessages` functions provided by the `@progress/kendo-react-intl` package. The difference is that in RSC mode, there is no `React Context`, so instead of wrapping in [`IntlProvider`](slug:api_intl_intlprovider) and [`LocalizationProvider`](slug:api_intl_localizationprovider) the component accepts `locale` and `language` properties directly and handles loading the respective data in both the server & client side, and makes it available for all child components of the Grid.

The following example demonstrates how to load the locale and localization messages in an RSC mode Grid, handle changes and pass back the new values of `locale` and `language` to the Grid:

{% meta height:850 %}
{% embed_file server-components/globalization/app.tsx preview %}
{% endmeta %}

The key points in the implementation of the above examples are as follows:

-   Load the locale and localization messages using the `load` and `loadMessages` functions.

    ```tsx
    // Load common locale data for all locales
    load(likelySubtags, currencyData, weekData);

    // Load Spanish & German Locales
    load(esNumbers, esCurrencies, esCaGregorian, esDateFields, esTimeZoneNames);
    load(deNumbers, deCurrencies, deCaGregorian, deDateFields, deTimeZoneNames);

    // Load Spanish & German Localization Messages
    loadMessages(deMessages, locale);
    loadMessages(esMessages, locale);
    ```

-   Pass the `locale` and `language` properties to the Grid component.

    ```tsx
    <Grid locale={locale} language={languages[locale]} />
    ```

-   Optionally, handle locale and language changes and pass the new values back to the Grid.

    ```tsx
    const { locale } = await getState();

    const handleLocaleChange = async (locale) => {
        'use server';
        await saveState({ ...state, locale });
    };

    return <Grid locale={locale} language={languages[locale]} />;
    ```

## Suggested Links

-   [KendoReact Globalization](slug:overview_globalization)
-   [KendoKendoReact Data Grid Globalization](slug:globalization_grid)
-   [KendoKendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
