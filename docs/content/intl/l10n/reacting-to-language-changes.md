---
title: Reacting to Language Changes
description: 'React to language changes when working with the KendoReact Localization component in React projects.'
components: ["general"]
slug: reacting_to_language_changes_localization
position: 20
---

# Reacting to Language Changes

The Internationalization package enables you to react to changes in the locale data or language.

To react to language changes, call the [`provideLocalizationService`]({% slug api_intl_providelocalizationservice %}) function on every [`render`](https://react.dev/reference/react/Component#render). The recommended approach is to extract the `provideLocalizationService` into a [`getter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).

> For Functional Components this is not needed since the [`useLocalization`]({% slug api_intl_uselocalization %}) hook is called on every render.

{% meta height:200 %}
{% embed_file localization/react-language-changes/func/app.tsx preview %}
{% embed_file localization/react-language-changes/func/main.tsx %}
{% embed_file localization/react-language-changes/func/Message.tsx %}
{% embed_file localization/react-language-changes/func/Chooser.tsx %}
{% embed_file localization/react-language-changes/func/messages.ts %}
{% endmeta %}

## Suggested Links

-   [IntlService API Reference]({% slug api_intl_intlservice %})
-   [LocalizationService API Reference]({% slug api_intl_localizationservice %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
