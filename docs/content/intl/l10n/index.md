---
title: Overview
description: 'Translate the messages and enable the RTL support for KendoReact components in React projects.'
components: ["general"]
slug: localization_intl
position: 0
---

# Getting Started with KendoReact Localization

The KendoReact Localization package enables you to adapt a component to a different locale by providing options for [translating its messages](#toc-translation-of-messages) or by [enabling its right-to-left support](#toc-rtl-support).

The KendoReact Localization feature is part of the KendoReact library which provides native Kendo UI components for the React ecosystem and is available under the [kendo-react-intl NPM package](https://www.npmjs.com/package/@progress/kendo-react-intl).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the KendoReact Localization package in action.

{% meta height:590 %}
{% embed_file localization/overview/func/app.tsx preview %}
{% embed_file localization/overview/func/main.tsx %}
{% embed_file localization/overview/func/messages-es.ts %}
{% embed_file localization/overview/func/messages-he.ts %}
{% endmeta %}

## KendoReact Localization Key Features

The KendoReact Localization package delivers a range of handy and developer-friendly features whose number and further development are not limited by the list in this section. The KendoReact team constantly invests efforts to improve the performance and add more value to the existing Localization library as well as develop new features to it.

## Translation of Messages

The Internationalization message files get populated when the files with the translated messages for the specific locales are available. Some of the provided localization files might be incomplete because the current message translations are not delivered for all languages. For the full list of currently available message translations, refer to the [kendo-react-messages repository](https://github.com/telerik/kendo-react-messages).

To add new localization files for a specific language:

1. Fork the [kendo-react-messages repository](https://github.com/telerik/kendo-react-messages).
1. Apply the respective changes.
1. Open a pull request. For that pull request you will be granted [Telerik points](https://www.telerik.com/community/telerik-points).

Optionally, you can directly send the new localization files through the [Support Ticket system](https://www.telerik.com/account/support-tickets) so that the Support Team reflect the changes in the [kendo-react-messages repository](https://github.com/telerik/kendo-react-messages) and update your Telerik points.

## RTL Support

Right-to-Left (RTL) support represents the ability of a library, website, or application to handle and respond to users who communicate through right-to-left languages. Right-to-left languages are Arabic, Hebrew, Chinese, Japanese, and others. [Read more about the RTL mode...]({% slug rtl_support %})

By default, the RTL mode is disabled. In web applications, the RTL mode is enabled through the [`dir`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute of a DOM element. To enable the RTL mode for all KendoReact components in your React application, set a text direction value to the root element of the application. You can also limit the RTL mode to a part of the application by providing the `dir` property to a KendoReact component.

## Trial Version of KendoReact

The KendoReact Internationalization is part of the KendoReact library. KendoReact offers a 30-day trial with a full-featured version of the library&mdash;no restrictions! What’s more, you are eligible for full technical support during your trial period in case you have any questions. Sign up for a [free trial](https://www.telerik.com/try/kendo-react-ui) of KendoReact.

## Support Options

For any questions about the KendoReact Internationalization, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), you have [these support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   The [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features under consideration and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Globalization Support]({% slug l10nsupport_l10n %})
-   [API Reference of the Internationalization]({% slug api_intl %})
