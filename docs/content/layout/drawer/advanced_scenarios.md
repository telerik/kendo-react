---
title: Advanced Scenarios
description: 'Divide page layout with KendoReact Drawers and navigate with the React router.'
components: ['drawer']
slug: advanced_scenarios_drawer
position: 7
---

# Advanced Scenarios

The Drawer enables you to implement advanced use-case scenarios by dividing the layout of your application page and navigate through the content with any routing library.

The following example demonstrates the usage of two Drawer components, positioned `start` and `end` on a page. This allows to divide the page content and to shrink it according to the available space:

{% meta height:400 %}
{% embed_file drawer/advanced-scenarios/func/app.tsx preview %}
{% embed_file drawer/advanced-scenarios/func/main.tsx %}
{% embed_file drawer/advanced-scenarios/func/DrawerRouterContainer.tsx %}
{% embed_file drawer/advanced-scenarios/func/styles.css %}
{% embed_file drawer/advanced-scenarios/func/data.tsx preview %}
{% embed_file drawer/advanced-scenarios/func/Attachments.tsx %}
{% embed_file drawer/advanced-scenarios/func/Calendar.tsx %}
{% embed_file drawer/advanced-scenarios/func/Favourites.tsx %}
{% embed_file drawer/advanced-scenarios/func/InboxMessages.tsx %}
{% embed_file drawer/advanced-scenarios/func/Notifications.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
-   [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})
