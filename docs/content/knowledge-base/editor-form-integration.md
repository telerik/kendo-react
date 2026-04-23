---
title: Integrating KendoReact Editor with Form Controls
description: Learn how to use the KendoReact Editor as a custom field component in the KendoReact Form, and handle its data effectively.
type: how-to
page_title: How to Use KendoReact Editor with KendoReact Form
meta_title: How to Use KendoReact Editor with KendoReact Form
slug: editor-form-integration
tags: kendoreact, editor, form, custom-field, onchange
res_type: kb
ticketid: 1664723
components: ["editor"]
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> KendoReact Editor </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I need to use the [KendoReact Editor](https://www.telerik.com/kendo-react-ui/components/editor/) as part of a KendoReact Form and handle its data correctly. The Editor does not directly integrate with the Form controls. I want to ensure that the Editor's output updates the Form's state.

This knowledge base article also answers the following questions:

-   How to add KendoReact Editor as a custom field in KendoReact Form?
-   How to handle the onChange event for KendoReact Editor in a Form?
-   How to pass KendoReact Editor data to Form controls?

## Solution

To achieve this, add the Editor as a custom field component and handle its `onChange` event. Pass the Editor's new value (either raw or HTML) to `fieldRenderProps.onChange`. Follow these steps:

1. Define the Editor as a custom field component in the Form.
2. Handle the Editor's `onChange` event and pass the updated value to the Form's `fieldRenderProps.onChange`.

Here is an example implementation:

{% meta height:330 %}
{% embed_file editor/editor-form-integration/app.tsx preview %}
{% embed_file editor/editor-form-integration/main.tsx %}
{% endmeta %}

```jsx
import React from 'react';
import { Editor } from '@progress/kendo-react-editor';
import { Form, Field } from '@progress/kendo-react-form';

const CustomEditorField = (fieldRenderProps) => {
    const handleChange = (event) => {
        const editorValue = event.html; // or use event.raw for raw content
        fieldRenderProps.onChange(editorValue);
    };

    return <Editor value={fieldRenderProps.value} onChange={handleChange} />;
};

const App = () => {
    const handleSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement>
                    <Field name="editorContent" component={CustomEditorField} />
                    <Button type="submit" themeColor={'primary'}>Submit</Button>
                </FormElement>
            )}
        />
    );
};

export default App;
```

### Notes

-   This approach ensures that the Editor updates the Form's state correctly.
-   The example may throw an error on "Enter" in StackBlitz due to platform limitations. This issue does not occur in local environments.

## See Also

-   [KendoReact Editor Overview](https://www.telerik.com/kendo-react-ui/components/editor/)
-   [Custom Components in KendoReact Form](https://www.telerik.com/kendo-react-ui/components/form/custom-components/)
-   [KendoReact Editor Error on Enter Press](https://www.telerik.com/kendo-react-ui/components/knowledge-base/editor-error-on-enter-press/)
