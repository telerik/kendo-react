---
title: Using with Next.js
description: 'Getting started with the KendoReact components inside Next.js projects.'
components: ['general']
slug: nextjs_installation
position: 40
category: getting-started
level: 0
hidden: true
---

# Using with Next.js

Next.js is a popular React framework. From [version 7.0.0](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/) of the KendoReact suite, all components available in the suite are compatible with Next.js, and can be easily integrated into your projects.

## Prerequisites

-   React 18
-   [NodeJS LTS](https://nodejs.org/en) (or a version >= 14). Use the `node -v` command to check your node versions.
-   A bash terminal of your choice, for example, the one available in the Visual Studio Code console.

## Create a Next.js Project using the App router

The following instructions will result in a project that uses the latest official Next.js version but if one needs a specific framework version it can be specified during the installation.

You can set up a Next.js project by using the following command:

```sh
npx create-next-app@latest
```

After running `npx create-next-app`, you will be prompted with a couple of options that you can choose based on your preference. If you want to have routing with the `app` directory, make sure to choose `Yes` for that option:

```shell


What is your project named? » my-app
Would you like to use TypeScript? » No / Yes
Would you like to use ESLint? » No / Yes
Would you like to use Tailwind CSS? » No / Yes
Would you like to use `src/` directory? » No / Yes
Would you like to use App Router? (recommended) » No / Yes (choose YES)
Would you like to use Turbopack for next dev? » No / Yes (enabled by default)
Would you like to customize the import alias (@/* by default)? » No / Yes
cd my-app
```

### Create a Next.js Project using Kendo CLI

As an alternative to the default way of creating Next.js projects, we at Kendo provide our own CLI that helps you generate projects with JavaScript or TypeScript and with or without a router. To generate a project with our CLI, you have to do the following:

1. Install the `@progress/kendo-cli` package using the following command:

```shell
npm i --global @progress/kendo-cli
```

2. Based on your preferences, use one of the following commands:
    - `npx kendo react create nextjs MyKendoApp` - Generates a JavaScript project with routing
    - `npx kendo react create nextjs MyKendoApp --no-app` - Generates a JavaScript project without routing
    - `npx kendo react create nextjs MyKendoApp --ts` - Generates a TypeScript project with routing
    - `npx kendo react create nextjs MyKendoApp --ts --no-app` - Generates a TypeScript project without routing

The CLI also provides an option to define which Kendo Theme will be added to the generated project. To set a theme, add one of the following to the above commands:

-   `--theme=default` - Adds the Kendo Default Theme
-   `--theme=bootstrap` - Adds the Kendo Bootstrap Theme
-   `--theme=material` - Adds the Kendo Material Theme
-   `--theme=fluent` - Adds the Kendo Fluent Theme

The result of using the Kendo CLI will be a Next.js project that has a `KendoReact Grid` component added to it. The idea behind the CLI we provide is to help you test our components fast and easy, however, you don't necessarily need to use it if you prefer the default Next.js CLI.

For information on creating a Next.js project without the Kendo CLI, see the [Next.js documentation](https://nextjs.org/docs).

## Using KendoReact Components in an Existing Next.js Projectjs Project

Now, when we have a working Next.js project, we can start using the KendoReact suite in our application. All KendoReact components are compatible with the latest **Next.js** version. What we recommend you is to use the latest available release of the suite but if you need to specify an exact version for the KendoReact components, our advice is to use `v.7.0.0` or newer.

> It is possible to use KendoReact components that have been released before v.7.0.0, only after explicit wrapping of the KendoReact components in your own Client Components as it is discussed [here](https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs). Nevertheless, not using the `use client` directive is only valid if neither event listeners or hooks are used.

For information on installing and using KendoReact components, see the [Getting Started]({% slug getting_started %}) guide.

## Sample Project

You can find a complete and more complex Next.js project integrated with KendoReact in [this project](https://github.com/telerik/kendo-react/tree/master/examples/coffee-warehouse-nextjs) from our GitHub repository. It contains an example of the KendoReact [Grid](https://www.telerik.com/kendo-react-ui/components/grid/), [Drawer](https://www.telerik.com/kendo-react-ui/components/layout/drawer/), [Chart](https://www.telerik.com/kendo-react-ui/components/charts/), [DropDownList](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/) and other components using the app router.

## Activating Your License Key (Not Needed for Free Components)

For information on activating your license, see the [Set Up Your KendoReact License Key](slug:my_license) page.

## Suggested Links

-   [Next.js](https://nextjs.org/)
-   [Sample Project with Next.js Integration](https://github.com/telerik/kendo-react/tree/master/examples/coffee-warehouse-nextjs)
-   [Integration with Next.js](https://www.telerik.com/kendo-react-ui/components/integration/nextjs/)
-   [Get Started with KendoReact Free](slug://free_components_introduction)
