---
title: Validation
description: 'Handle validation and errors when using the KendoReact SmartPasteButton component with forms.'
components: ['smartpaste']
slug: error_handling_smartpaste
position: 30
---

# Validation

The SmartPasteButton component focuses solely on extracting data from clipboard content and populating form fields. It does not perform any validation—that responsibility belongs to the Form component.

By default, validation is handled by the Form component through its [`validator`](slug:api_form_formprops#toc-validator) prop.

The following example demonstrates how to programmatically trigger form submission after SmartPasteButton populates the fields, which automatically runs the Form's validator and displays errors for any missing required fields.

<demo metaUrl="buttons/smartpaste/error-handling/" height="450"></demo>

## Manual Validation

When the AI service processes clipboard content, it may not successfully extract values for all form fields. Manual validation allows you to inspect the AI response, identify missing or incomplete data, and display meaningful error messages to the user through the Form's [`errors`](slug:api_form_formprops#toc-errors) prop.

Additionally, you can modify or transform the data before passing it to [`setResponse`](slug:api_buttons_smartpasteclickevent#toc-setResponse). This enables you to normalize values, apply default fallbacks, or format data to match your form's expected structure.

The following example demonstrates validating the AI response and displaying custom error messages for fields that could not be extracted from the clipboard content.

<demo metaUrl="buttons/smartpaste/manual-validation/" height="520"></demo>

After receiving the AI response, validate and optionally transform the data before populating the form:

```tsx
const [formErrors, setFormErrors] = React.useState<{ [name: string]: string }>({});

const handleSmartPaste = async (e: SmartPasteClickEvent) => {
    const response = await fetch('/api/smartpaste', { ... });
    const data = await response.json();

    // Transform or normalize the data before populating the form
    const transformedData = {
        ...data,
        email: data.email?.toLowerCase(),
        phone: data.phone?.replace(/\D/g, '') // Remove non-digits
    };

    e.setResponse(transformedData);

    // Set error messages for fields the AI couldn't extract
    const errors: { [name: string]: string } = {};
    if (!data.fullName) errors.fullName = 'Could not extract name from clipboard';

    setFormErrors(errors);
};

<Form errors={formErrors} onSubmit={handleSubmit}>
    {/* Form fields */}
</Form>
```

## Content Pre-validation

Content pre-validation checks the clipboard content before making an API request. This approach prevents unnecessary API calls when the clipboard is empty, contains insufficient data, or fails to meet specific criteria.

Pre-validation improves user experience by providing immediate feedback and reduces server load by filtering out invalid requests at the client level.

The following example validates that the clipboard contains sufficient content before calling the AI service. Use the "Clear Clipboard" button to test the empty clipboard scenario.

<demo metaUrl="buttons/smartpaste/content-validation/" height="560"></demo>

Access the clipboard content through `e.requestData.content` and validate before proceeding:

```tsx
const [clipboardError, setClipboardError] = React.useState(false);

const handleSmartPaste = async (e: SmartPasteClickEvent) => {
    const clipboardContent = e.requestData?.content;

    if (!clipboardContent || clipboardContent.trim() === '') {
        setClipboardError(true);
        setTimeout(() => setClipboardError(false), 3000); // Reset after 3 seconds
        return; // Exit early, no API call made
    }

    // Validation passed, proceed with API call
    const response = await fetch('/api/smartpaste', { ... });
};

<SmartPasteButton
    onClick={handleSmartPaste}
    themeColor={clipboardError ? 'error' : 'primary'}
>
    {clipboardError ? 'Clipboard is empty' : 'Smart Paste'}
</SmartPasteButton>
```

## Suggested Links

-   [API Reference of the SmartPasteButton](slug:api_buttons_smartpastebuttonprops)
-   [Configuration](slug:configuration_smartpaste)
-   [Events](slug:events_smartpaste)
-   [KendoReact Form Validation](slug:validation_form)
