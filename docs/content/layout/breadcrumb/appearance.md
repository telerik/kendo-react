---
title: Appearance
description: "Change the appearance of the KendoReact Breadcrumb."
components: ["breadcrumb"]
slug: appearance_breadcrumb
position: 2
---

# Item Appearance

The Breadcrumb component provides different options for customizing the appearance of the items.

## Size

The KendoReact Breadcrumb allows selecting a predefined size option that changes its size.

To change the default size of the Breadcrumb, set its [size]({% slug api_layout_breadcrumbprops %}#toc-size) property which will change the padding of its elements. The available size options are:

 * `small` - sets the padding of the elements to 2px 10px
 * `medium` (default) - sets the padding of the elements to 4px 10px
 * `large` - sets the padding of the elements to 6px 10px

The following example demonstrates how to define the Breadcrumb size:

{% meta height:400 %}
{% embed_file breadcrumb/appearance/sizing/func/app.tsx preview %}
{% embed_file breadcrumb/appearance/sizing/func/main.tsx %}
{% endmeta %}

## Item SVG Icon

The Breadcrumb enables you to add an icon and icon class inside the items. To achieve this, set the `icon` inside the [data]({% slug api_layout_breadcrumbprops %}#toc-data) object property of the Breadcrumb component. To provide custom icon css class, set the [iconClass]({% slug api_layout_breadcrumblinkprops %}#toc-iconClass) inside the BreadcrumbLink component.


{% meta height:200 %}
{% embed_file breadcrumb/appearance/icon-class/func/app.tsx preview %}
{% embed_file breadcrumb/appearance/icon-class/func/main.tsx %}
{% endmeta %}


## Custom icon

The Breadcrumb enables you to set a custom icon item. To achieve this, set the `icon` inside the [data]({% slug api_layout_breadcrumbprops %}#toc-data) property of the Breadcrumb component that sets the [icon]({% slug api_layout_breadcrumblinkprops %}#toc-icon) inside the BreadcrumbLink component.


{% meta height:200 %}
{% embed_file breadcrumb/appearance/item-icon/func/app.tsx preview %}
{% embed_file breadcrumb/appearance/item-icon/func/main.tsx %}
{% endmeta %}

## Suggested Links

* [API Reference of the Breadcrumb Props]({% slug api_layout_breadcrumbprops %})
* [API Reference of the BreadcrumbLink Props]({% slug api_layout_breadcrumblinkprops %})
* [KendoReact Icons](https://www.telerik.com/kendo-react-ui/components/styling/icons/)
* [Creating Custom Styles]({% slug themebuilder %})
