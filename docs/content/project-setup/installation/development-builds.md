---
title: Obtaining Development Builds
description: 'Obtain the development builds of the KendoReact components.'
components: ["general"]
slug: development_builds_installation
position: 3
category: setup
level: 0
---

# Obtaining Development Builds

The latest bug fixes and features are initially published in the so-called development channel.

The development builds are used to validate recent implementations and collect early feedback.

> Development builds are unstable and will often be broken. They might ship with major bugs and regressions.

## Scenarios

-   To obtain the latest development release once, use the `dev` [dist-tag](https://docs.npmjs.com/cli/dist-tag) during `npm install`.

    ```sh
    npm i @progress/kendo-react-buttons@dev
    ```

-   To obtain the latest development release every time, specify `dev` as a package version in `package.json` and run `npm update`.

    ```json
    "dependencies": {
        "@progress/kendo-react-buttons": "dev",
        ...
    }
    ```

-   To revert to the stable channel, install the package without a tag specifier.

    ```sh
    npm i @progress/kendo-react-buttons
    ```

## Suggested Links

-   [Get Started with KendoReact]({% slug getting_started %})
