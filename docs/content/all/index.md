---
title: Overview
page_title: React All Package - Overview - KendoReact UI Components
description: 'Get started with the KendoReact All package which is a single package that provides access to multiple or all KendoReact components at once.'
components: ['general']
slug: overview_all
position: 0
---

# KendoReact All Package Overview

The KendoReact All is a single package which provides access to multiple or all KendoReact components at once.

<CtaPanelOverview></CtaPanelOverview>

## Basic Usage

The following example demonstrates how to use multiple KendoReact components by using the All single package.

{% meta height:700 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/products.json %}
{% endmeta %}

## Installation

1. Download and install the package. Use [NodeJS LTS](https://nodejs.org/en) (or a version >= 14).

    ```sh
    npm i @progress/kendo-react-all
    ```

1. Once installed, import the desired modules.

    ```jsx-no-run
     // ES2015 module syntax
     import { Grid, Chart } from '@progress/kendo-react-all';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Grid, Chart } = require('@progress/kendo-react-all');
    ```

1. You are required to install one of the KendoReact themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started %}#toc-adding-the-styles).

1. Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The All package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

-   react 18.0.0\*
-   react-dom

## Suggested Links

-   [Get Started with the Grid]({% slug overview_grid %})
-   [Get Started with the Charts]({% slug overview_charts %})
-   [Get Started with the Dropdowns]({% slug overview_dropdowns %})
-   [Get Started with the Button]({% slug overview_button %})
-   [React Components](https://www.telerik.com/kendo-react-ui/)
