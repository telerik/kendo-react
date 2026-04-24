---
title: Getting Started
description: 'Get started with the Buttons package by KendoReact and learn how to use the Button components in React projects.'
slug: getstarted_buttons
position: 2
---

# Getting Started with the KendoReact Buttons

This guide provides essential information about using the KendoReact Buttons package&mdash;you will learn how to install the Buttons package, add a Button component to your project, and style the component.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will be able to reproduce the following example.

{% meta height:250 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Install the Component

```sh
npm i @progress/kendo-react-buttons
```

## Import the Component

After installing the Buttons npm package, import the desired components in the React App. This guide shows how to add the Button.

In the App component file of your React project (for example, `src/App.tsx`), add the following code:

```tsx
import { Button } from '@progress/kendo-react-buttons';
```

## Use the Component

1. After installing the Buttons package and importing the components, add the Button tags to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <Button>My Button</Button>
    ```

1. Optionally, handle the `onClick` event by adding a `ButtonContainer` and then defining the action that occurs when the Button generates the `onClick` event.

    ```tsx
    const ButtonContainer = () => {
        const handleButtonClick = () => {
            console.log('click');
            alert('KendoReact Button was clicked.');
        };

        return <Button onClick={handleButtonClick}>My Button</Button>;
    };

    export default ButtonContainer;
    ```

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

The Button package provides the following components:

-   [ButtonGroup](slug://overview_buttongroup)
-   [Chip](slug://overview_chip)
-   [ChipList](slug://overview_chiplist)
-   [DropdownButton](slug://overview_dropdownbutton) (premium)
-   [SplitButton](slug://icons_splitbutton) (premium)
-   [FloatingActionButton](slug://overview_floatingactionbutton)
-   [Toolbar](slug://overview_toolbar)

## KendoReact Button Dependencies

The Buttons package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-svg-icons    | Contains the KendoReact SVG icons.                                                                          |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |
| @progress/kendo-react-popup  | Contains positioning logic for the Popup component.                                                         |
| @progress/kendo-react-intl   | Contains Internationalization Component                                                                     |

## Activating Your License Key

The KendoReact Buttons have both free and premium features. Using the premium features requires a valid license key. For more information, see the [My License]({% slug my_license %}) page.

## Suggested Links
