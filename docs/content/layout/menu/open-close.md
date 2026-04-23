---
title: Opening and Closing
description: "Customize the opening and closing behavior of the KendoReact Menu in React projects."
components: ["menu"]
slug: opening_closing_menu
position: 5
---

# Opening and Closing

By default, the Menu opens and closes the items which contain children on `mouseover` and `mouseleave` with a small delay.

To customize its opening and closing behavior, utilize the following options:

* [Configuring the hover delay](#toc-delay-on-hover)
* [Opening the Menu on item click](#toc-opening-on-item-click)

## Delay on Hover

To prevent the accidental opening or closing of the Menu items, the component waits for 100 milliseconds before performing the action. To change the default delay, use the [`hoverOpenDelay`]({% slug api_layout_menuprops %}#toc-hoveropendelay) and [`hoverCloseDelay`]({% slug api_layout_menuprops %}#toc-hoverclosedelay) properties of the Menu.



{% meta height:200 %}
{% embed_file menu/open-close/hover/func/app.tsx preview %}
{% embed_file menu/open-close/hover/func/main.tsx %}
{% endmeta %}


## Opening on Item Click

By default, the Menu items open on hover. You can disable the open-on-hover behavior and set the Menu to open only after an item is clicked or focused by using the [`openOnClick`]({% slug api_layout_menuprops %}#toc-openonclick) property. After the user clicks an item for the second time, the open-on-hover behavior will be still disabled until another click follows.

{% meta height:180 %}
{% embed_file menu/open-close/click/func/app.tsx preview %}
{% embed_file menu/open-close/click/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
* [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
