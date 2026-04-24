---
title: Keyboard Navigation
description: "Use the KendoReact Rating keyboard navigation in React projects."
components: ["rating"]
slug: keyboard_navigation_rating
position: 11
---

# Keyboard Navigation

The keyboard navigation of the Rating is always available.

The Rating supports the following keyboard shortcuts:

| SHORTCUT           | DESCRIPTION         |
|:---                |:---                 |
| `Right Arrow`      | Increases the Rating value with the predefined step or step/2 if the precision is set to `half`. |
| `Left Arrow`       | Decreases the Rating value with the predefined step or step/2 if the precision is set to `half`. |
| `Home`             | Sets the Rating to its maximum value.                                                            |
| `End`              | Sets the Rating value to its minimum value.                                                      |
| `Esc`              | Deselect the currently selected value.                                                           |



{% meta height:100 %}
{% embed_file rating/navigation/func/app.tsx preview %}
{% embed_file rating/navigation/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Rating Component]({% slug api_inputs_rating %})
* [API Reference of the Rating props]({% slug api_inputs_ratingprops %})
* [Accessibility ]({% slug accessibility_rating %})
