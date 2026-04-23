---
title: Configuration
description: 'Configure the KendoReact SmartPasteButton component to work with AI services and customize its behavior.'
components: ['smartpaste']
slug: configuration_smartpaste
position: 20
---

# SmartPasteButton Configuration

The KendoReact SmartPasteButton automatically detects form fields and uses AI to extract values from clipboard content. When users click the button, the component reads the clipboard, and then populates form fields with the received data.

The component is compatible with both KendoReact Form and native HTML forms, and supports field population for KendoReact Inputs, Date Inputs and Dropdowns as well as standard HTML input elements.

> The demos in this article use a Telerik-hosted AI service for demonstration purposes only. For production applications, you must implement your own AI service that understands your specific domain, data, and business requirements.

The following example demonstrates the SmartPasteButton with AI service configuration and automatic form field detection.

<demo metaUrl="buttons/smartpaste/configuration/" height="510"></demo>

## AI Service Integration

Attach an [`onClick`](slug:api_buttons_smartpastebuttonprops#onClick) handler to send clipboard content and form field configuration to your AI service. The event's [`requestData`](slug:api_buttons_smartpasteclickevent#requestdata) property contains the clipboard text in `content` and an array of detected fields in `formFields`. Use the `setResponse` callback to populate the form with the AI-generated values.

```tsx
const handleSmartPaste = async (e: any) => {
    // Send clipboard content to your AI service
    const response = await fetch('your API endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(e.requestData)
    });
    const data = await response.json();

    // Populate the form with AI-generated values
    e.setResponse(data);
};
```

Use the [`disabled`](slug:api_buttons_smartpastebuttonprops#disabled) prop to prevent interaction during processing and show visual feedback to users by managing a loading state.

```tsx
const [isLoading, setIsLoading] = React.useState(false);

const handleSmartPaste = async (e: any) => {
    setIsLoading(true);
    try {
        // ... API call
    } finally {
        setIsLoading(false);
    }
};

<SmartPasteButton disabled={isLoading} onClick={handleSmartPaste}>
    {isLoading ? 'Processing...' : 'Smart Paste'}
</SmartPasteButton>;
```

## Automatic Form Detection

The SmartPasteButton automatically detects form fields within its form context. No explicit field mapping is required—the component uses form control names, unique identifiers and types to generate appropriate field metadata for the AI service.

```tsx
<Form
    render={(formRenderProps: FormRenderProps) => (
        <FormElement>
            <Field id="fullName" name="fullName" component={FormInput} label="Full Name" />
            <Field id="email" name="email" component={FormInput} label="Email" />
            <Field id="phone" name="phone" component={FormInput} label="Phone" />
            <SmartPasteButton disabled={isLoading} onClick={handleSmartPaste}>
                {isLoading ? 'Processing...' : 'Smart Paste'}
            </SmartPasteButton>;
        </FormElement>
    )}
/>
```

## Explicit Form Field Configuration

While the SmartPasteButton automatically detects form fields, you can explicitly define which fields to populate and how they should be processed using the [`formFields`](slug:api_buttons_smartpastebuttonprops#formFields) prop. Each [`SmartPasteFormField`](slug:api_buttons_smartpasteformfield) object supports the following properties:

-   [`field`](slug:api_buttons_smartpasteformfield#field) - The unique identifier matching the form input's name or id attribute
-   [`description`](slug:api_buttons_smartpasteformfield#description) - A text description that helps the AI understand what data belongs in this field
-   [`type`](slug:api_buttons_smartpasteformfield#type) - The field type: `string`, `number`, `boolean`, `fixed-choices`, or `kendo-input`
-   [`allowedValues`](slug:api_buttons_smartpasteformfield#allowedvalues) - An optional array of valid options for `fixed-choices` fields

> When using explicit field configuration with Kendo form components, each form control must have an [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id) attribute that matches the `field` name in the `formFields` array. The SmartPasteButton uses these IDs to target and populate the correct form controls.

### Field Type Specification

The [`SmartPasteFormField`](slug:api_buttons_smartpastebuttonprops#formfields) interface requires you to specify a `type` for each field. Use `kendo-input` for Kendo UI components, and the other types for HTML elements or third-party components.

-   `string`&mdash;For HTML text inputs and similar components. Expects plain text values.
-   `number`&mdash;For HTML number inputs and numeric components. Expects numeric values without formatting.
-   `boolean`&mdash;For HTML checkboxes, toggle buttons, and switches. Expects `true` or `false` values.
-   `fixed-choices`&mdash;For HTML select elements, radio buttons, and dropdown components. Expects values from the `allowedValues` array.
-   `kendo-input`&mdash;For Kendo UI components like DatePicker, NumericTextBox, TimePicker, and other specialized inputs. Expects values in the format that the specific Kendo component accepts (for example, Date objects for DatePicker, numbers for NumericTextBox).

The following example demonstrates basic field type specification with string, number, and date fields.

<demo metaUrl="buttons/smartpaste/field-type-specification/" height="510"></demo>

### Field Descriptions

Custom field descriptions provide additional context to help the AI match clipboard content to the correct form fields. Use the `description` property in the `formFields` array or the `data-smartpaste-description` attribute directly on form elements.

```jsx
<Field
    name="email"
    id="email"
    component={FormInput}
    label="Email"
    data-smartpaste-description="Personal email address"
/>
```

The following example demonstrates providing detailed field descriptions to guide AI data extraction and formatting.

<demo metaUrl="buttons/smartpaste/field-descriptions/" height="540"></demo>

### Fixed Choice Fields

For fields with predefined options such as dropdowns or radio buttons, use the `fixed-choices` type along with the `allowedValues` property to constrain the AI's output to valid options.

The following example demonstrates using fixed-choices type with allowedValues for dropdown fields. Both fields specify allowed values, enabling the AI to map natural language input to the closest matching predefined option.

<demo metaUrl="buttons/smartpaste/fixed-choice-fields/" height="560"></demo>

### Selective Field Processing

When working with large forms, you can specify only the fields you want the SmartPasteButton to populate. Fields not included in the `formFields` array will be ignored during the paste operation.

The following example demonstrates selective field processing where only specific fields are included in the Smart Paste operation.

<demo metaUrl="buttons/smartpaste/selective-fields/" height="650"></demo>

## Trigger Smart Paste Programmatically

You can trigger the SmartPasteButton action programmatically using a ref to the button element. This is useful when you want to integrate the SmartPasteButton with custom UI elements or workflows.

<demo metaUrl="buttons/smartpaste/programmatic-trigger/" height="550"></demo>

## Suggested Links

-   [API Reference of the SmartPasteButton](slug:api_buttons_smartpastebuttonprops)
-   [Error Handling](slug:error_handling_smartpaste)
-   [Events](slug:events_smartpaste)
