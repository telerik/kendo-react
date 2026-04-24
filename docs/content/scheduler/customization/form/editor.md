---
title: Editor
description: 'Get started with the SchedulerFormEditor component and learn how to customize it through properties, or completely override it by providing a custom component.'
components: ["scheduler"]
slug: overview_customization_form_editor_scheduler
position: 2
---

# Editor Customization

The `SchedulerFormEditor` component is rendered by the `SchedulerForm` component. It provides a set of `Field` components responsible for editing each individual field of `dateItem` being edited.

In order to enable further customization of the currently existing editable `fields` or to introduce new `fields` to the editor, we've exposed the [`editor`]({% slug api_scheduler_schedulerformprops %}#toc-editor) property, which enables:

-   [Customizing the default editor](#toc-customizing-the-default-editor)&mdash;Customize some of the properties available to the default `SchedulerFormEditor` component.
-   [Provide custom editor](#toc-provide-custom-editor)&mdash;Replace the default `editor` with an entirely custom one.

## Customizing the default editor

Before we begin with customizing the default `editor`, we must first import it. We're shipping the `SchedulerFormEditor` component through the `@progress/kendo-react-scheduler` package, so you can import it in any React project with the following import statement.

```jsx-no-run
const FormWithCustomEditor = (props) => {
    return (<SchedulerForm {...props} editor={CustomEditor} />)
}
...
return (
    <Scheduler form={FormWithCustomEditor} />
)
```

Since the `SchedulerFormEditor` is a composite component of the [`KendoReact FormElement`]({% slug api_form_formelement %}). In addition to all properties of the `FormElement`, we provide additional properties for overriding any of the internal `field` editors.

### Extending the root element

Through the `editor` property of the `SchedulerForm` we can pass a modified version of the default `SchedulerFormEditor` component. Such modifications can include passing additional `className`, `style` or `horizontal` properties. For the full list of properties please refer to the [`SchedulerFormEditorProps`]({% slug api_scheduler_schedulerformeditorprops %}) API.

The following example demonstrates how to customize the default `SchedulerFormEditor` component, by setting the `horizontal` property to true, which will render the component in horizontal mode.

{% meta height:700 %}
{% embed_file customization/editor/default-editor/extending-root/func/app.tsx preview %}
{% embed_file customization/editor/default-editor/extending-root/func/main.tsx %}
{% embed_file customization/editor/default-editor/extending-root/func/custom-form-editor.tsx %}
{% embed_file customization/editor/default-editor/extending-root/func/custom-form.tsx %}
{% endmeta %}

### Replacing default field editors

Another common scenario is replacing some of the internal `field` editors we expose, without explicitly having to re-write the whole editor by yourself.

For each `field`, we expose a set of `Error`, `Label` and `Editor` property. For example, the `title` field have three components corresponding to its state, each of which can be modified through the `titleError`,`titleLabel` and `titleEditor` properties. For the full list of properties please refer to the [`SchedulerFormEditorProps`]({% slug api_scheduler_schedulerformeditorprops %}) API.

The following example demonstrates how to provide custom `error` components which are only displayed once the user have interacted with the field, or tried submitting the form.

{% meta height:500 %}
{% embed_file customization/editor/default-editor/replacing-editors/func/app.tsx preview %}
{% embed_file customization/editor/default-editor/replacing-editors/func/main.tsx %}
{% embed_file customization/editor/default-editor/replacing-editors/func/custom-form-editor.tsx %}
{% embed_file customization/editor/default-editor/replacing-editors/func/custom-form.tsx %}
{% endmeta %}

## Provide Custom Editor

Depending on the application requirements, sometimes entirely custom form implementation is necessary. Because of this we allow providing an entirely custom component as `editor`.
The communication between the `form` and the editor `fields` is achieved through the usage of the [`Field`]({% slug api_form_field %}) component.

The following example demonstrates building an entirely custom `editor` in combination with custom `form`.

{% meta height:900 %}
{% embed_file customization/editor/custom-editor/func/app.tsx preview %}
{% embed_file customization/editor/custom-editor/func/main.tsx %}
{% embed_file customization/editor/custom-editor/func/custom-dialog.tsx %}
{% embed_file customization/editor/custom-editor/func/custom-form-editor.tsx %}
{% embed_file customization/editor/custom-editor/func/custom-form.tsx %}
{% embed_file customization/editor/custom-editor/func/custom-item.tsx %}
{% embed_file customization/editor/custom-editor/func/data.ts %}
{% embed_file customization/editor/custom-editor/func/editors.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
