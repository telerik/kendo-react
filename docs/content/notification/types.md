---
title: Types
description: 'Get started with the React Notification package by KendoReact and learn more about how to use the types of notifications which display information about success, error, info, and warning application operations and processes.'
components: ["notification"]
slug: types_notification
position: 2
---

# Types

Depending on the outcome of application operations and processes, the Notification enables you to display different types of notifications.

Each Notification type is color-coded which allows the user to immediately recognize if the notification indicates a successful operation or an error message. To use the predefined styles for each Notification type, pass a `style` to the [`type`]({% slug api_notification_notificationprops %}#toc-type) property. Based on the Notification type your project requires, you can also display an icon by specifying the `icon` of the [`type`]({% slug api_notification_notificationprops %}#toc-type) property.

The Notification provides the following available `style` type values:

-   `none`&mdash;Renders the default styling options of the component.
-   `success`&mdash;Indicates a successfully completed action.
-   `info`&mdash;Provides neutral information about a process or an action.
-   `error`&mdash;Informs the user about an erroneous outcome of a process or an action.
-   `warning`&mdash;Warns against the occurrence of possible issues.

{% meta height:400 %}
{% embed_file types/func/app.tsx preview %}
{% embed_file types/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Notification]({% slug api_notification_notification %})
-   [API Reference of the NotificationProps]({% slug api_notification_notificationprops %})
