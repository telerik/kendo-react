---
title: Keyboard Navigation
description: 'Use the KendoReact ChipList keyboard navigation in React projects.'
components: ["chiplist"]
slug: keyboard_navigation_chiplist
position: 6
---

# Keyboard Navigation

The keyboard navigation of the ChipList is always available.

The ChipList supports the following keyboard shortcuts:

| SHORTCUT      | DESCRIPTION                                    |
| :------------ | :--------------------------------------------- |
| `Left Arrow`  | Sets the focus on the next available chip.     |
| `Right Arrow` | Sets the focus on the previous available chip. |
| `Enter`       | Toggle the selection for the focused chip.     |
| `Del`         | Delete the focused chip if it is allowed.      |

{% meta height:130 %}
{% embed_file chiplist/navigation/func/app.tsx preview %}
{% embed_file chiplist/navigation/func/main.tsx %}
{% endmeta %}

## See Also

-   [Accessibility in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/)
-   [Accessibility Compliance and Keyboard Support in KendoReact](https://www.telerik.com/kendo-react-ui/components/accessibility/accessibility-compliance/)
-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
-   [Learn about KendoReact Free.](slug:free_components_introduction)
