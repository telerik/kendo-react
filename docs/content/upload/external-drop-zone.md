---
title: External Drop Zone
description: 'Learn about the KendoReact component which is delivered by the Upload package.'
components: ["upload"]
slug: external_drop_zone
position: 9
---

# External Drop Zone

The ExternalDropZone helps users to drag and drop files from their file systems to a dedicated user interface. The files are then sent to the specified server handlers, which are configured to receive them.

The ExternalDropZone component is a drag and drop tool. To link the external DropZone to the Upload, provide a reference to the Upload using the [`uploadRef`]({% slug api_upload_externaldropzoneprops %}#toc-uploadRef) property.

{% meta height:400 %}
{% embed_file external_drop_zone/func/app.tsx preview %}
{% embed_file external_drop_zone/func/main.tsx %}
{% endmeta %}

# Customization

The ExternalDropZone can be customized using the [`customHint`]({% slug api_upload_externaldropzoneprops %}#toc-customHint) and [`customNote`]({% slug api_upload_externaldropzoneprops %}#toc-customNote) properties.

{% meta height:400 %}
{% embed_file external_drop_zone_customization/func/app.tsx preview %}
{% embed_file external_drop_zone_customization/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
-   [API Reference of the ExternalDropZoneProps]({% slug api_upload_externaldropzoneprops %})
