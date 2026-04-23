---
title: Loading Messages
description: "Load language specific messages when working with the KendoReact Localization component in React projects."
components: ["general"]
slug: loadingmessages_intl
position: 10
---

# Loading Messages

You can load messages for specific languages which will be used later on for localizing the components.

To load the messages and associate them with a specific language, utilize the [`loadMessages`]({% slug api_intl_loadmessages %}) method that is exported by the Internationalization package. The messages can be either in the form of a JSON file or as an iterable key-value collection.

```js
import { loadMessages } from '@progress/kendo-react-intl';

const language = 'en';

const messagesObj = {
    'greeting':  "Hello",
    ...
    ...
}

loadMessages(messagesObj, language);

```

## Suggested Links

* [IntlService API Reference]({% slug api_intl_intlservice %})
* [Troubleshooting]({% slug troubleshooting_intl %})
