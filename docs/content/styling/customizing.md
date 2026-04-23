---
title: Customize Themes
description: 'Get started with the Kendo UI themes and learn how to include and customize them in your KendoReact project.'
components: ["general"]
slug: customizingthemes
position: 25
category: styling
level: 0
---

# Customizing Themes

There are several ways to customize the appearance of the KendoReact components. Each is suitable for specific scenarios and business requirements.

> tip You can now generate custom themes automatically using natural language prompts with the [KendoReact Agentic UI Generator](slug:agentic_ui_generator_getting_started). Simply describe your desired theme and the AI-powered generator will create the complete theme configuration for you.
> This article describes the pros and cons, and compares all CSS customization alternatives.

-   [Create custom themes with the Progress ThemeBuilder](#toc-using-themebuilder)
-   [Override theme variables](#toc-setting-theme-variables)
-   [Using the Build Process of the Application](#toc-using-the-build-process-of-the-application)
-   [Customizing Themes with Swatches](#toc-customizing-themes-with-swatches)
-   [Overriding Theme Styles](#toc-overriding-theme-styles)

## Using ThemeBuilder

[ThemeBuilder](https://docs.telerik.com/themebuilder/introduction) is a web application that enables you to create new custom themes by changing the styles of existing built-in themes. Every change that you make is visualized instantly. Once you are done styling the UI components, you can export a ZIP file with the desired styles and add the custom theme to your KendoReact app. For further information on the topic, go to the dedicated [ThemeBuilder](https://www.telerik.com/kendo-react-ui/components/styling/theme-builder/) article.

## Setting Theme Variables

Each theme defines the same collection of variables, but with different values. For example, here are the [Default theme variables](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/theme-variables/). You can override the theme variable values outside the theme CSS file. In this way, you can customize the appearance of the KendoReact components without the need to create and maintain a full custom theme.

This approach is supported starting with theme version `8.0.0` and KendoReact version `8.0.0`. Upgrading the KendoReact components does not require any additional steps with regard to the CSS code, unless there are breaking changes in the CSS variable names.

{% meta height:300 %}
{% embed_file theme-variables/app.tsx preview %}
{% embed_file theme-variables/main.tsx %}
{% endmeta %}

## Using the Build Process of the Application

When you want to built the Telerik themes yourself (for example, to combine them with the rest of your styles in to one stylesheet), review the following article first, before continuing with the steps below: [https://github.com/telerik/kendo-themes/wiki/Compiling-themes](https://github.com/telerik/kendo-themes/wiki/Compiling-themes).

> Create React App does not support the compilation of SCSS files out of the box. For more information, refer to the [Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet) article. Note that the LibSass and the packages built on top of it, including Node Sass, are **deprecated** (check out the [node-sass NPM package article](https://www.npmjs.com/package/node-sass)). If you're using Node Sass, you can migrate to [Dart Sass](https://sass-lang.com/dart-sass) by running the `npm i sass --save` command.

To customize a Sass-based theme, create a .scss file and consume the theme package in the following way:

1. Obtain the theme source through the NPM package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

2. Create a `.scss` file that will consume the theme. For the purposes of the example, this is `App.scss`.

3. To build the theme files, import them into the `App.scss` file.

    > After version `v10.0.0` of the Kendo themes, the Sass syntax has been migrated to Dart Sass. The following snippets demonstrate the theme customization after version 10.0.0 and later.

    ```scss
    // App.scss
    @use '@progress/kendo-theme-default/scss/all.scss' as *;
    ```

    The `scss/all.scss` file adds the styles for all components that are available in the theme. To trim down the size of the generated CSS, import only the source for the components that you use in your application. You can do that by using the `scss/index.scss` file and the corresponding mixins for desired components. Each of them can be found in the `scss/index.scss` file under the `kendo-theme--styles()` mixin.

    ```scss
    // Import only the Button and Grid styles
    @use '@progress/kendo-theme-default/scss/index.scss' as *;

    @include kendo-button--styles();
    @include kendo-grid--styles();
    ```

4. You can customize theme variables directly in your application. For example, you can change the background of the base Button with the following lines.

    ```scss
    // Use the theme with the modified base background of the Button.
    @use '@progress/kendo-theme-default/scss/all.scss' as * with (
        $kendo-button-bg: #ff69b4
    );
    ```

Here is the full list of [available theme variables](https://www.telerik.com/design-system/docs/themes/theme-default/theme-variables/) for the Kendo Default theme.

5. You can further customize the other parts of the theme foundations such as:
    - [Color System](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/#color)
    - [Spacing System](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/#spacing)
    - [Typography](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/#typography)
    - [Border Radii System](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/#border-radius)
    - [Elevation System](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/#elevation).

## Customizing Themes with Swatches

A swatch is a set of variables that customize the appearance of the theme. To preview and test the swatches, visit any of the demos across the KendoReact docs. Choose a product, go to its online component demos, and enable the swatch from the **Change Theme** dropdown above any of the examples. For more information on how to [use swatches](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches/#using-swatches) or [creating a custom one](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches/#creating-new-swatches), refer to the [Swatches section](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/swatches/) in the Progress Design System Documentation.

## Overriding Theme Styles

You can override theme styles with custom CSS, no matter if the app is using a built-in or custom theme. This approach makes sense only for a relatively small number of customizations. Beyond that, choose some of the other alternatives on this page.

Upgrading may require changes to the additional custom CSS code, but only if there are breaking changes in the HTML output and styling.

## Suggested Links

-   [Progress Design System Customization Concepts](https://www.telerik.com/design-system/docs/themes/customization/)
-   [Styling Overview]({% slug themesandstyles %})
-   [Web Font Icons in KendoReact]({% slug icons %})
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Browse the Components](https://www.telerik.com/kendo-react-ui/components/)
