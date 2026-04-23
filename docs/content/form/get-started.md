---
title: Getting Started
description: 'Get started with the React Form package by KendoReact and learn more about how to use the component in React projects.'
slug: getting_started_form
position: 1
---

## Getting Started with the KendoReact Form

This guide provides essential information about using the KendoReact Form package. You will learn how to install the package, add a Form component to your project, style the component, and activate your license.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will be able to reproduce the following example.

{% meta height:400 %}
{% embed_file basic/func/app.tsx preview %}
{% embed_file basic/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-form
```

## Importing the Component

In the `src/App.js` file of your React project, import the Form, Field, and FormElement components from the Form package, and then the Error and Input components:

-   The FormElement is a small wrapper for an HTML form element that automatically attaches the Form component's `onSubmit` event and provides the handy `render` prop as well as some useful CSS classes.
-   The Field component is needed to render inputs.
-   The Error component from the Error package allows you to display error text messages.
-   The Input component from the Inputs package allows users to submit values.

```jsx-no-run
// ES2015 module syntax
 import { Form, Field, FormElement } from '@progress/kendo-react-form';
 import { Error } from '@progress/kendo-react-labels';
 import { Input } from '@progress/kendo-react-inputs';
 import { Button } from '@progress/kendo-react-buttons';
```

```jsx-no-run
// CommonJS format
const { Form, Field, FormElement } = require('@progress/kendo-react-form');
const { Error } = require('@progress/kendo-react-labels');
const { Input } = require('@progress/kendo-react-inputs');
const { Button } = require ('@progress/kendo-react-buttons');
```

## Using the Component

1. Create an `emailRegex` in order to validate the user's email address and an `emailInput` component that will render the input field.

    ```jsx
    const emailRegex = new RegExp(/\S+@\S+\.\S+/)
    const emailValidator = value => emailRegex.test(value) ? "" : "Please enter a valid email."
    const EmailInput = fieldRenderProps => {
    const {
    validationMessage,
    visited,
    ...others
    } = fieldRenderProps;
    return <div>
     <Input {...others} />
    {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>;
    };
    ];
    ```

1. Handle the `onSubmit` event by creating a handler function.

    ```jsx
    const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);
    const addNewMessage = (event) => {
    setMessages([...messages, event.message]);
    };
    ```

1. Add the component's markup to the `src/App.js` file in your project and set the Form's name, component, label, and validator. Optionally, set the `maxWidth`.

    ```jsx
    return (
        <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                    <fieldset className={'k-form-fieldset'}>
                        <legend className={'k-form-legend'}>Please fill in the fields:</legend>
                        <div className="mb-3">
                            <Field name={'firstName'} component={Input} label={'First name'} />
                        </div>
                        <div className="mb-3">
                            <Field name={'lastName'} component={Input} label={'Last name'} />
                        </div>
                        <div className="mb-3">
                            <Field
                                name={'email'}
                                type={'email'}
                                component={EmailInput}
                                label={'Email'}
                                validator={emailValidator}
                            />
                        </div>
                    </fieldset>
                    <div className="k-form-buttons">
                        <Button type={'submit'} disabled={!formRenderProps.allowSubmit}>
                            Submit
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
    ```

1. To style the Form, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes](slug://themesandstyles) for KendoReact.

    4.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    4.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project.

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Form component on the page.

## Activating Your License Key

**Important**: The KendoReact Form is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Form package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |

## Suggested Links

-   [API Reference of the Form](slug://api_form)
-   [Form Design Guidelines](slug://forms_guideline)
-   [Labels](slug://labels_form)
-   [Multi-Step Form](slug://multi_step_form)
-   [Layout](slug://layout_form)
-   [Responsive Design](slug://responsive_form)
-   [Appearance](slug://appearance_form)
-   [Validation](slug://validation_form)

## Learning Resources

-   [React Form](slug://overview_form)
-   [Getting Started with KendoReact](slug://getting_started)
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
