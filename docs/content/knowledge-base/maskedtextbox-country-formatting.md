---
title: Dynamically Format Phone Numbers by Country in the KendoReact MaskedTextBox
description: Learn how to dynamically format phone numbers based on selected country codes using the KendoReact MaskedTextBox
type: how-to
page_title: How to implement dynamic phone number formatting in the KendoReact MaskedTextBox
slug: maskedtextbox-country-formatting
tags: maskedtextbox, dynamic, phone, number, formatting, masking
ticketid: 1660190
res_type: kb
category: knowledge-base
components: ["maskedtextbox"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact MaskedTextBox</td>
	    </tr>
    </tbody>
</table>

## Description

How can I dynamically format a phone number based on a country code selected from a DropDownList using the MaskedTextBox?

## Solution

1. Define a list of countries with their corresponding phone number masks and prefixes:

```jsx
const countries = [
    { name: 'Andorra', code: '🇦🇩', mask: '000-000-000', prefix: '+376' },
    { name: 'Germany', code: '🇩🇪', mask: '0000-0000000', prefix: '+49' }
];
```

2. Handle the [onChange]({% slug api_dropdowns_dropdownlistprops %}#toc-onChange) event of the DropDownList to update the selected country and mask format:

```jsx
const handleCountryChange = (event) => {
    const selected = countries.find((country) => country.code === event.target.value);
    setSelectedCountry(selected);
    setMask(selected ? selected.mask : '');
    setValue('');
    setFormattedValue('');
};
```

3. Handle the [onChange]({% slug api_inputs_maskedtextboxprops %}#toc-onChange) event of the MaskedTextBox to update the input value, apply the mask format and dynamically format the phone number:

```jsx
const handleOnChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    const cleanValue = newValue.replace(/[^0-9]/g, '');
    if (selectedCountry) {
        setFormattedValue(`${selectedCountry.prefix}${cleanValue}`);
    } else {
        setFormattedValue(newValue);
    }
};
```

{% meta height:500 %}
{% embed_file maskedtextbox/maskedtextbox-country-formatting/app.jsx preview %}
{% embed_file maskedtextbox/maskedtextbox-country-formatting/main.jsx %}
{% endmeta %}
