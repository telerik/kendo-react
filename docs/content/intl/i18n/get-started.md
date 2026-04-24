---
title: Getting Started
description: 'Get started with the KendoReact Internationalization package and learn how to use it in React projects.'
components: ['general']
slug: get_started_intl
position: 10
---

# Getting Started with KendoReact Internationalization

This guide provides the information you need to start using the KendoReact Internationalization component—it includes instructions about the available installation approaches, the required dependencies, the code for running the project, and links to additional resources.

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta height:150 %}
{% embed_file getting-started/func/app.tsx preview %}
{% embed_file getting-started/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
  npm i @progress/kendo-react-intl
```

## Using the Package

1. After successfully installing the Internationalization package, use the [`useInternationalization`]({% slug api_intl_useinternationalization %}) hook to access the `IntlService`:

```jsx
import { useInternationalization } from '@progress/kendo-react-intl';
const intl = useInternationalization();
```

2. Then, use the `formatNumber` function of the service to format the number:

```jsx
<h5>Result: {intl.formatNumber(decimal, 'n2')}</h5>
```

3. Run and serve the application by running the following command in the root folder.

```sh
  npm start
```

4.  Point your browser to [http://localhost:4200](http://localhost:3000/) to see the formatted number on the page.

## Activating Your License Key

Using any of the UI components in the KendoReact library requires either a commercial license key or an active trial license key.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a KendoReact license file.

## Next Steps

-   [Loading Default and Additional Locale Data](slug:loadingdata_intl)
-   [Changing the Current Locale at Runtime](slug:reacting_to_locale_changes_intl)
-   [Services](slug:services_intl)
-   [API Reference of the Internationalization](slug:api_intl)

## Dependencies

The Internationalization package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

-   react 18.0.0\*
-   react-dom
-   @progress/kendo-licensing

The following dependencies are required only when you apply internationalization to a locale that is different from the default `en-US` one.

-   cldr-core
-   cldr-dates-full
-   cldr-numbers-full

The following dependencies will be installed automatically:

-   @progress/kendo-intl
-   prop-types

## Learning Resources

-   [Internationalization Overview]({% slug overview_intl %})
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
