---
title: Getting Started
description: 'Get started with the KendoReact ScrollView package and learn more about how to use the ScrollView component in React projects.'
components: ['scrollview']
slug: get_started_scrollview
position: 1
---

# Getting Started with the KendoReact ScrollView

This guide provides the information you need to start using the KendoReact ScrollView — it includes instructions about the available installation approaches, the required dependencies, the code for running the project, and links to additional resources.

<div data-component="StartKendoReactFreeSection"></div>

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta height:460 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-scrollview
```

## Importing the Component

After installing the package, import the ScrollView component in the React App. In the `src/App.js` file of your React project, import the `ScrollView` component from the ScrollView package.

```jsx-no-run
// ES2015 module syntax
import { ScrollView } from "@progress/kendo-react-scrollview";
```

```jsx-no-run
// CommonJS format
const { ScrollView } = require('@progress/kendo-react-scrollview');
```

## Using the Component

1. Map the array of objects by adding the following code in the `src/App.js` file.

```jsx
const items = [
    { position: 1, url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/1.jpg' },
    { position: 2, url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/2.jpg' },
    { position: 3, url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/3.jpg' },
    { position: 4, url: 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg' }
];
```

1. Add the component's markup to the `src/App.js` file in your project.

```jsx
import 'style.css';

const App = () => {
    return (
        <div>
            <ScrollView style={{ width: 512, height: 384 }}>
                {items.map((item, index) => {
                    return (
                        <div className="image-with-text" key={index}>
                            <p>
                                Showing image {item.position} of {items.length}.
                            </p>
                            <img
                                src={item.url}
                                alt={'KendoReact ScrollView Photo'}
                                style={{ width: 512, height: 384 }}
                                draggable={false}
                            />
                        </div>
                    );
                })}
            </ScrollView>
        </div>
    );
};
export default App;
```

1. Add the component's styles to the `src/style.css` file in your project.

```scss
/* center the ScrollView horizontally */
/* k-scrollview is the default component class */
.k-scrollview {
    margin: 0 auto;
}
/* enable absolute positioning inside the ScrollView template */
.image-with-text {
    position: relative;
}

/* style the overlay text inside the ScrollView */
.image-with-text > p {
    position: absolute;
    top: 1rem;
    left: 1.6rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-style: italic;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}
```

1. To style the ScrollView, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    2.1. Install the Default theme package.

    ```sh
    npm install --save @progress/kendo-theme-default
    ```

    2.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact ScrollView component on the page.

## Activating Your License Key

**Important**: The KendoReact ScrollView is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The ScrollView package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name               | Description                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*             | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                  | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing  | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons  | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [Enabling the endless scrolling]({% slug endlessscrolling_scrollview %})
-   [Displaying pager overlays]({% slug paging_scrollview %})
-   [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
