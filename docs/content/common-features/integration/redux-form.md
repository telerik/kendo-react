---
title: Redux Form
page_title: React Third-Party Libraries & Redux Form - KendoReact
description: "Edit and bind data by using the external Redux Form when working with the KendoReact components in React projects."
components: ["general"]
slug: reduxform_integration
---

# Redux Form

You can edit the data of the KendoReact components by using an external [Redux Form](https://redux-form.com).

> Currently, the Redux Form accepts only standard `input` DOM elements as editors because the `change` event is added later on. As a result, the Redux Form is prevented from placing third-party inputs such as, for example, the KendoReact NumericTextBox or DatePicker.

The following example demonstrates how to bind the Grid and the Form to a Redux store and handle the data validation. To access all demo files, refer to the tree pane of the file. To download the project, refer to [this GitHub repository](https://github.com/telerik/kendo-react-redux-form).

<iframe src="https://stackblitz.com/github/telerik/kendo-react-redux-form?embed=1&file=index.js&hideNavigation=1&view=preview" frameborder="0" width="100%" height="800"></iframe>

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
* [API Index of the Grid]({% slug api_grid %})
