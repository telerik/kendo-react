---
title: Overview
description: 'Try now the KendoReact Internationalization package that provides services for parsing and formatting of dates and numbers.'
slug: overview_intl
position: 0
---

# Getting Started with KendoReact Internationalization

The KendoReact Internationalization package applies the desired cultures by providing services for the parsing and formatting of dates and numbers.

Together with the [Localization options]({% slug localization_intl %}), the Internationalization package provides the globalization features of KendoReact. For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}). For more information on the date and number formats KendoReact supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/tree/master/docs) GitHub repository.

The package exports the following types of provider components:

-   An [`IntlProvider`]({% slug api_intl_intlprovider %}) component and an [API]({% slug api_intl_intlservice %}) for the parsing and formatting of dates and numbers.
-   A [`LocalizationProvider`]({% slug api_intl_localizationprovider %}) component and an [API]({% slug api_intl_localizationservice %}#toc-tolanguagestring) for the translation of component messages into different languages.

The KendoReact Internationalization feature is part of the KendoReact library which provides native Kendo UI components for the React ecosystem and is available under the [kendo-react-intl NPM package](https://www.npmjs.com/package/@progress/kendo-react-intl).

<CtaPanelOverview></CtaPanelOverview>

## KendoReact Internationalization Example

The following example demonstrates how to use the `IntlProvider` component in basic use-case scenarios.

{% meta height:170 %}
{% embed_file internationalization/overview/func/app.tsx preview %}
{% embed_file internationalization/overview/func/main.tsx %}
{% embed_file internationalization/overview/func/DateFormatter.tsx %}
{% embed_file internationalization/overview/func/CurrencyFormatter.tsx %}
{% embed_file internationalization/overview/func/Chooser.tsx %}
{% endmeta %}

## KendoReact Internationalization Key Features

The KendoReact Internationalization component delivers a range of handy and developer-friendly features whose number and further development are not limited by the list in this section. The KendoReact team constantly invests efforts to improve the performance and add more value to the existing Internationalization library as well as develop new features to it.

### Loading Locales

The Internationalization package enables you to load default and additional locale data. [Read more about the Intl locale data...]({% slug loadingdata_intl %})

### Intl Services

The package exposes a set of services, which provide handy methods for [formatting and parsing dates and numbers]({% slug parsingandformatting_intl %}) according to your project requirements. [Read more about the Intl services...]({% slug services_intl %})

### Locale Changes

You can change the currently loaded locale at runtime by using the built-in services of the Internationalization package. [Read more about how to dynamically change the locale...]({% slug reacting_to_locale_changes_intl %})

### Loading Messages

You can load messages for specific languages [Read more about how to load messages for a specific language...]({% slug loadingmessages_intl %})

## Installation

Download and install the package by running the `npm i @progress/kendo-react-intl @progress/kendo-licensing` command.

## Trial Version of KendoReact

The KendoReact Internationalization package is part of the KendoReact library. KendoReact offers a 30-day trial with a full-featured version of the library&mdash;no restrictions! What’s more, you are eligible for full technical support during your trial period in case you have any questions. Sign up for a [free trial](https://www.telerik.com/try/kendo-react-ui) of KendoReact.

## Support Options

For any questions about the KendoReact Internationalization, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), you have [these support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   The [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features under consideration and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [API Index of the Internationalization]({% slug api_intl %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
-   [Localization]({% slug localization_intl %})
-   [Globalization Support]({% slug l10nsupport_l10n %})
