---
title: Configurator
description: "Learn hot to customize configurator components in the KendoReact PivotGrid."
components: ["pivotgrid"]
slug: customization_configurator_pivotgrid
position: 1
---

# Configurator Customization

The KendoReact `PivotGridConfigurator` component is responsible for providing an end-user interface for configuring the `PivotGrid` component.

The user can replace the following `PivotGridConfigurator` components with custom ones:
- [Editor]({% slug api_pivotgrid_pivotgridconfiguratorprops %}#toc-editor)&mdash;The `editor` contains all components responsible for editing the current configuration.
- [Form]({% slug api_pivotgrid_pivotgridconfiguratorprops %}#toc-form)&mdash;The `form` provides the necessary functionality to access and edit individual parts of the configuration, as well as intermediate state.
- [FormElement]({% slug api_pivotgrid_pivotgridconfiguratorprops %}#toc-formelement)&mdash;The `formElement` provides a default container for all internal editor `fields`.

Additionally, the user can replace more-specific elements which are deeply nested in the `PivotGridConfigurator` tree:
- For the `editor`:
    - [`fields`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-fieldseditor), [`column axes`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-columnAxesLabel), [`row axes`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-rowAxesLabel) and [`measure axes`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-measureAxesLabel) labels.
    - [`fieldsEditor`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-fieldseditor)&mdash; The [`FieldsEditor`]({% slug api_pivotgrid_pivotgridfieldseditorprops %}) further allows customization of:
        - [`treeView`]({% slug api_pivotgrid_pivotgridfieldseditorprops %}#toc-treeview)
        - [`noData`]({% slug api_pivotgrid_pivotgridfieldseditorprops %}#toc-noData)
    - [`row`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-rowAxesEditor), [`column`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-columnAxesEditor) and [`measure`]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %}#toc-measureAxesEditor) axes editors. The [`AxesEditor`]({% slug api_pivotgrid_pivotgridaxeseditorprops %}) further allows customization of:
        - [`chipList`]({% slug api_pivotgrid_pivotgridaxeseditorprops %}#toc-chiplist)
- The [`AxisEditor`]({% slug api_pivotgrid_pivotgridaxiseditorprops %}) allows further customization of:
    - [`chip`]({% slug api_pivotgrid_pivotgridaxiseditorprops %}#toc-chip)
    - [`dropClue`]({% slug api_pivotgrid_pivotgridaxiseditorprops %}#toc-dropclue)
    - [`columMenuTextColumn`]({% slug api_pivotgrid_pivotgridaxiseditorprops %}#toc-colummenutextcolumn)
    - [`filterFieldsEditor`]({% slug api_pivotgrid_pivotgridaxiseditorprops %}#toc-filterfieldseditor)&mdash; The [`AxisFilterFieldsEditor`]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %}) further allows customization of:
        - [`resetButton`]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %}#toc-resetbutton)
        - [`applyButton`]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %}#toc-applybutton)
        - [`treeView`]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %}#toc-treeview)
        - [`noData`]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %}#toc-nodata)

## Importing the Default Components

All of the default components are contained in the `@progress/kendo-react-pivotgrid` package and are set as `defaultProps` of their parent.

```jsx
// ES2015 module syntax
import { PivotGridConfiguratorEditor, PivotGridFieldsEditor, PivotGridAxesEditor, PivotGridAxisEditor, PivotGridAxisFilterFieldsEditor } from '@progress/kendo-react-pivotgrid';
```

```jsx
// CommonJS format
const { PivotGridConfiguratorEditor, PivotGridFieldsEditor, PivotGridAxesEditor, PivotGridAxisEditor, PivotGridAxisFilterFieldsEditor } = require('@progress/kendo-react-pivotgrid');
```

## Providing a Custom Component

To customize a PivotGridConfigurator component, first create a new React Component which [compose](https://reactjs.org/docs/composition-vs-inheritance.html) the default one.

> The recommended approach is to always wrap the component in an `React.forwardRef` for functional components, and pass the `ref` to the default component to assure correct behavior of the internal components.

```jsx
const CustomLabel = React.forwardRef((props, ref) => {
    return (
      <Label
        ref={ref}
        {...props}
        style={{ color: '#3f51b5' }} 
      >
        {props.children}{":"}
      </Label>
    )
})

const CustomEditor = React.forwardRef((props, ref) => {
    return (
        <PivotGridEditor 
            ref={ref}
            {...props}
            fieldsLabel={CustomLabel}
            columnAxesLabel={CustomLabel}
            rowAxesLabel={CustomLabel}
            measureAxesLabel={CustomLabel}
        />
    )
})
```

To apply the customization, provide the corresponding `editor` property to the `PivotGridConfigurator`:

```jsx
<PivotGridConfigurator editor={CustomEditor} />
```

The following example demonstrates the PivotGridConfigurator `editor` customization in-action:

{% meta height:770 %}
{% embed_file customization/configurator/editor/basic/func/app.tsx preview %}
{% embed_file customization/configurator/editor/basic/func/main.tsx %}
{% embed_file customization/configurator/editor/basic/func/custom-label.tsx %}
{% embed_file customization/configurator/editor/basic/func/custom-editor.tsx %}
{% endmeta %}

## Suggested Links

- [PivotGrid Customization Overview]({% slug api_pivotgrid_pivotgridconfiguratorprops %})
- [API Reference of the KendoReact PivotGridConfigurator]({% slug api_pivotgrid_pivotgridconfiguratorprops %})
- [API Reference of the KendoReact PivotGridConfiguratorEditor]({% slug api_pivotgrid_pivotgridconfiguratoreditorprops %})
