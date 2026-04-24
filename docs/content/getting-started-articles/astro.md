---
title: Using with Astro
description: 'Getting started with the KendoReact components inside an Astro project'
components: ["general"]
slug: astro_installation
position: 50
category: getting-started
level: 0
tag: new
hidden: true
---

# Using with Astro

Astro is a modern static site builder that allows you to mix and match front-end frameworks like React, Vue, and Svelte. It focuses on performance by shipping minimal JavaScript to the browser and supports SSR (Server-Side Rendering), as well as Static Site Generation (SSG).

## Prerequisites

-   [NodeJS LTS](https://nodejs.org/en) (`v19` is not supported by Astro). Use the `node -v` command to check your node versions.
-   Text editor - Using [VS Code](https://code.visualstudio.com/) with the [Official Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) is recommended.
-   Terminal - Astro is accessed through its command-line interface (CLI).

## Create an Astro project

For information on creating an Astro project, see the [Astro documentation](https://docs.astro.build/en/getting-started/).

## Installing and integrating React

1. Now that we have a working Astro project, our next step is to install `react` and `react-dom` packages by running:

```sh
npm i react react-dom @astrojs/react
```

2. Open `astro.config.mjs` and add the React integration:

```jsx
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [react()]
});
```

## Create an Astro Project using Kendo CLI

As an alternative to the default way of creating Astro projects, we at Kendo provide our own CLI that helps you generate projects with JavaScript or TypeScript. To generate a project with our CLI, you have to do the following:

1. Install the `@progress/kendo-cli` package using the following command:

```shell
npm i --global @progress/kendo-cli
```

2. Use the following command to generate a new Astro project with Typescript:
    - `npx kendo react create astro MyKendoApp`

The CLI also provides an option to define which Kendo Theme will be added to the generated project. To set a theme, add one of the following to the above commands:

-   `--theme=default` - Adds the Kendo Default Theme
-   `--theme=bootstrap` - Adds the Kendo Bootstrap Theme
-   `--theme=material` - Adds the Kendo Material Theme
-   `--theme=fluent` - Adds the Kendo Fluent Theme

The CLI allows you to specify the preferred styling. By default, the project will use CSS, but you can specify Sass if needed:

-   `--styling=CSS` - Use CSS styling (default)
-   `--styling=Sass` - Use Sass styling

The result of using the Kendo CLI will be an Astro project that has a `KendoReact Grid` component added to it. The idea behind the CLI we provide is to help you test our components fast and easy, however, you don't necessarily need to use it if you prefer the default Astro CLI.

Below you will find information on how we can add components to a Astro project, no matter how it is generated.

## Using KendoReact Components in an Astro Project

With our Astro project configured to use React, we can now start integrating `KendoReact` components into our application.

For information on installing and using KendoReact components, see the [Getting Started]({% slug getting_started %}) guide.

## Activating Your License Key (Not Needed for Free Components)

For information on activating your license, see the [Set Up Your KendoReact License Key](slug:my_license) page.

## Suggested Links
-   [Getting Started with Astro](https://docs.astro.build/en/getting-started/)
-   [Get Started with KendoReact Free](slug://free_components_introduction)
