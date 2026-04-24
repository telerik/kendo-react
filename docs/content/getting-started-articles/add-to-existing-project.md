---
title: Using in Existing React Project
page_title: Add Components to Existing Project - KendoReact
description: Get started with KendoReact by adding the components to existing React project.
components: ["general"]
slug: add_to_existing_project
position: 20
category: getting-started
hidden: true
---

# Add KendoReact to an Existing React Project

In this article, you'll learn how to add KendoReact components to an already existing React project. To acquire the required knowledge, you will practice with the React Calendar component.

All KendoReact packages are distributed through npm and offer a similar installation experience. The dependencies needed for the installation of each component package are listed in a dedicated **Getting Started** article on the component package level, for example, [Getting Started with the React Editor]({% slug getstarted_editor %}#toc-dependencies).

## Install the Component Package

For example, to use the React Calendar component, part of KendoReact, start with the installation of the KendoReact DateInputs npm package and its [dependencies](https://www.telerik.com/kendo-react-ui/components/dateinputs/get-started#dependencies).

```sh
npm i @progress/kendo-react-dateinputs
```

## Import the Component

After installing the needed packages, import the Calendar component in your desired page.

For the purpose of this example, you will use the Calendar component in the `src/App.tsx` file. To use the already installed DateInputs package, import the `Calendar` component in this file.

```tsx
import { Calendar } from '@progress/kendo-react-dateinputs';
```

## Use the Calendar Component

1. Add the component's markup to the `src/App.tsx` file in your project and set some of its props.

    ```jsx
    return <Calendar weekNumber={true} showOtherMonth={true} />;
    ```

1. To style the Editor, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.tsx`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Calendar component on the page.

## Activating Your License Key (Not Needed for Free Components)

KendoReact is an enterprise-grade UI library with 120+ free and premium components. Over 50 components, such as the Calendar, are free to use without a license, even in production. However, if you want to unlock the premium components and features of KendoReact, you need a [commercial license](https://www.telerik.com/kendo-react-ui/pricing).

Using any of the KendoReact premium UI components requires either a commercial license key or an active trial license key.

> Since KendoReact version 5.16.0 (25 July 2023), a missing license causes a watermark to appear over selected components. For more information, see the [Invalid License](slug:my_license#toc-invalid-license) section.
> More information about the introduced changes can be found in this [Invalid License](slug:my_license#toc-invalid-license) section.

To experience the full potential of the KendoReact components, follow the instructions on the [My License page](slug:my_license) to activate your license and hide the invalid/non-activated license attributes.

## Additional Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/14/KendoReact)
-   [Get Started with KendoReact Free](slug://free_components_introduction)
