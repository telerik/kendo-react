---
title: Adding DateInput Spinners to DatePicker
description: Learn how to add spin buttons to the DatePicker component for easier date adjustments.
type: how-to
page_title: How to Add Spin Buttons to DatePicker for Easier Date Adjustments
slug: add-dateinput-spinners-to-datepicker
tags: kendo-react-ui, datepicker, dateinput, spinners, custom-rendering
res_type: kb
ticketid: 1645609
---

## Environment

| Product | KendoReact DatePicker |
| --- | --- |
| Version | Current |

## Description

I extensively use the DatePicker component in our application for entering weather data. It's often required to adjust the date by a day or two, and opening the entire calendar for such small adjustments can be cumbersome. Ideally, having Spin Buttons on the DatePicker, similar to those on the DateInput, would enhance the user experience. This setup would offer both the calendar view and spinners, allowing users to select the method that suits them best.

This KB article also answers the following questions:
- How can I add spin buttons to the DatePicker component?
- Is it possible to adjust DatePicker dates without opening the calendar?
- Can the DatePicker component include DateInput spinners for date adjustments?

## Solution

To integrate spin buttons into the [DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/) component, custom render its date input component. The DatePicker internally uses the DateInput component by default, which supports spinners. Customize the DatePicker's date input component to include spinners by setting the `dateInput` prop to a custom component that returns the [DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/) with its `spinners` prop enabled.

Below is an example demonstrating this customization:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, DateInput } from '@progress/kendo-react-dateinputs';

const CustomDateInput = (props) => {
  return <DateInput {...props} spinners={true} />;
};

const App = () => {
  return <DatePicker dateInput={CustomDateInput} />;
};

ReactDOM.render(<App />, document.querySelector('my-app'));
```

For a complete implementation, refer to this StackBlitz example: [React DatePicker with DateInput Spinners](https://stackblitz.com/edit/react-ugado1?file=app%2Fmain.tsx,app%2FcustomDateInput.tsx).

For additional information on customizing the DatePicker, visit the official documentation on [Custom Rendering of the DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering/).

## See Also

- [Official Documentation for DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/)
- [Official Documentation for DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/)
- [Custom Rendering of the DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering/)
- [DateInput API Reference](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/DateInputProps/#toc-spinners)
