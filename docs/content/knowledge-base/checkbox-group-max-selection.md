---
title: Creating a Checkbox Group with Maximum Selection Limit in KendoReact
description: Learn how to create a Checkbox Group with a maximum selection limit using KendoReact and integrate it into a form.
type: how-to
page_title: Implementing Checkbox List with Max Selection Limit in KendoReact Forms
meta_title: Checkbox List Max Selection in KendoReact Forms
slug: checkbox-group-max-selection
tags: checkbox, kendoreact, form, custom-component, state-management
res_type: kb
ticketid: 1679925
components: ["checkbox"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Checkbox</td>
		</tr>
	</tbody>
</table>

## Description

I want to create a checkbox list with a maximum selection limit and include it in a form. The requirement is to disable unselected checkboxes when the maximum limit is reached.

## Solution

Create a custom checkbox component that manages selection state and enforces the maximum limit:

```tsx
const MyCustomCheckbox = (fieldRenderProps: FieldRenderProps) => {
    const { validationMessage, visited, value, onChange, onFocus, onBlur } = fieldRenderProps;
    const [selectedItems, setSelectedItems] = React.useState(new Set(value || []));

    const handleCheckboxChange = React.useCallback(
        (event: any, index: number) => {
            setSelectedItems((prevSelected) => {
                const updatedSelected = new Set(prevSelected);
                if (event.target.checked) {
                    updatedSelected.add(index);
                } else {
                    updatedSelected.delete(index);
                }
                onChange({ value: Array.from(updatedSelected) });
                return updatedSelected;
            });
        },
        [onChange]
    );

    return (
        <div onFocus={onFocus} onBlur={onBlur}>
            {[...Array(6)].map((_, index) => {
                const isChecked = selectedItems.has(index);
                const isDisabled = !isChecked && selectedItems.size >= 2; // Max 2 selections

                return (
                    <Checkbox
                        key={index}
                        label={`Option ${index + 1}`}
                        checked={isChecked}
                        onChange={(event) => handleCheckboxChange(event, index)}
                        disabled={isDisabled}
                    />
                );
            })}
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};
```

Here is an example demonstrating this approach:

{% meta height:560 %}
{% embed_file inputs/checkbox-group-max-selection/app.tsx preview %}
{% embed_file inputs/checkbox-group-max-selection/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Checkbox Documentation](slug:overview_checkbox)
-   [KendoReact Form Custom Components](slug:custom_components_form)
