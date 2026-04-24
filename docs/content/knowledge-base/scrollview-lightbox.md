---
title: Implement a Lightbox with the KendoReact ScrollView
description: Learn how to create an image lightbox using the KendoReact ScrollView and Dialog components
type: how-to
page_title: How to Implement a Lightbox - KendoReact ScrollView
slug: scrollview-lightbox
tags: scrollview, dialog, lightbox, gallery, images
ticketid: 1701817
res_type: kb
category: knowledge-base
components: ["scrollview"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>13.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact ScrollView</td>
        </tr>
    </tbody>
</table>

## Description

How can I implement a lightbox-style image viewer using the KendoReact ScrollView? Specifically, I need to:

- Display a gallery of thumbnail images that users can click to open in a larger view
- Show the full-size images in a Dialog with navigation between images
- Keep the ScrollView and thumbnail gallery in sync when users navigate

## Solution

Use the KendoReact [Dialog](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog)  component to contain a ScrollView that displays full-size images, while maintaining synchronization with a thumbnail gallery built with ListView.

{% meta height:500 %}
{% embed_file scrollview/scrollview-lightbox/app.tsx preview %}
{% embed_file scrollview/scrollview-lightbox/main.tsx %}
{% embed_file scrollview/scrollview-lightbox/styles.css %}
{% endmeta %}

## See Also

- [ScrollView Overview](slug:overview_scrollview)
- [Dialog Overview](slug:overview_dialog)
- [ListView Overview](slug:overview_listview)
