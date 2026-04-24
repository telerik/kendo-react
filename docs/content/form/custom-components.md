---
title: Custom Components
description: 'Get started with the KendoReact Form and set its custom behavior.'
components: ["form"]
slug: custom_components_form
position: 3
---

# Custom Components

You can render custom components in the [KendoReact Field component]({% slug api_form_field %}) by using the built-in properties of the [`FieldRenderProps`]({% slug api_form_fieldrenderprops %}) interface and any custom properties.

## Using Basic Properties

You can get the Form state for the current field and trigger changes for it by using the [`value`]({% slug api_form_fieldrenderprops %}#toc-value) and [`onChange`]({% slug api_form_fieldrenderprops %}#toc-onchange) properties of the [`FieldRenderProps`]({% slug api_form_fieldrenderprops %}) interface.

```jsx
const MyCustomInput = (fieldRenderProps) => {
    const {label, value, onChange} = fieldRenderProps;
    return (
        <Input label={label} value={value} onChange={onChange} />
    );
};

const App = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement style={{maxWidth: 650}}>
                    <FieldWrapper>
                        <div className='k-form-field-wrap'>
                            <Field
                                name={'firstName'}
                                label={'First Name'}
                                component={MyCustomInput}
                                labelClassName={'k-form-label'}
                            />
                        </div>
                    <FieldWrapper />
                    <div className="k-form-buttons">
                        <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
```

## Setting Custom Behavior

You can display error messages and fully customize the behavior of the rendered component by using the additional properties of the Field component.

The following example demonstrates how to render a required custom checkbox a terms agreement.

{% meta height:180 %}
{% embed_file custom-components/func/app.tsx preview %}
{% embed_file custom-components/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Form](slug://overview_form)
-   [API Reference of the Form]({% slug api_form %})
