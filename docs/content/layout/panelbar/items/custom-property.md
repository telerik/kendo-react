---
title: Custom Properties
description: 'Set custom properties to the items of the KendoReact PanelBar.'
components: ["panelbar"]
slug: customproperty_panelbar
position: 4
---

# Custom Properties

To better identify with which element the user interacts, the PanelBar allows you to set any type of properties to the PanelBarItem.

## Getting Started

You can set the custom property by passing the property to the [`PanelBarItem`]({% slug api_layout_panelbaritemprops %}).

```jsx-no-run
const App = () => {
    const onSelect = (event: PanelBarSelectEventArguments) => {
        console.log(event.target.props.customProp);
    }
    return (
        <PanelBar onSelect={onSelect}>
            <PanelBarItem title="First Item" customProp="firstItemCustomProp" />
            <PanelBarItem title="Second Item" customProp="secondItemCustomProp" />
        </PanelBar>
    )
}
```

## Accessing Properties

You can access the property from the target of the [`onSelect`]({% slug api_layout_panelbarprops %}#toc-onselect) PanelBar event.

{% meta height:200 %}
{% embed_file panelbar/items/custom/properties/func/app.tsx preview %}
{% embed_file panelbar/items/custom/properties/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
*   [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
