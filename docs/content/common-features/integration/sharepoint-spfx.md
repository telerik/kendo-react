---
title: SharePoint
page_title: React Third-Party Libraries & SharePoint - KendoReact
description: 'Use the KendoReact components inside SharePoint framework (SPFx) projects.'
components: ["general"]
slug: sharepoint_integration
---

# SharePoint

KendoReact enables you to add the KendoReact components to SharePoint framework (SPFx) projects.

## Requirements

Use SPFx version 1.7 or later. Earlier SPFx versions do not support KendoReact version 16.x or later. Using earlier SPFx versions may result in errors and you may not be able to add KendoReact components to your SPFx project.

## Installation

1. Install and import the desired KendoReact components by using NPM or YARN. The components are written on TypeScript and when they are used in SPFx projects, provide integration and IntelliSense.

    ```jsx
        npm i @progress/kendo-react-grid @progress/kendo-data-query @progress/kendo-react-inputs @progress/kendo-react-intl @progress/kendo-react-dropdowns @progress/kendo-react-dateinputs
    ```

1. Install and import any of the following KendoReact themes that are available:

    - [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/)
    - [Material theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/material/)
    - [Bootstrap theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/bootstrap/)

    ```jsx
        npm i @progress/kendo-theme-default
    ```

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

## Sample Project

For the complete sample project, refer to the GitHub repository on [using the KendoReact Grid inside SPFx](https://github.com/telerik/kendo-react-sharepoint-spfx).

## Troubleshooting

The following section provides solutions for issues you might encounter while using KendoReact in SPFx projects.

### An error occurs when the project is deployed through the built CDN

**Cause** KendoReact uses a method from `react-dom/server` inside some of the components. The default Webpack configuration removes `react-dom/server` from the CDN build as it assumes that a CDN will not be used with server rendering.

**Solution** Explicitly add `react-dom/server` to `config.json`.

```jsx
    "externals": {
        "react-dom/server": "node_modules/react-dom/umd/react-dom-server.browser.production.min.js"
    }
```

### Error Occurs During Build Time

**Cause** The `source-map-loader` is missing.

**Solution** Exclude the `source-map-loader` inside the `gulpfile.js`

```jsx
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.module.rules.map((rule) => {
            if (rule.use.indexOf('source-map-loader') != -1) {
                rule.exclude = path.resolve(__dirname, 'node_modules');
            }
        });
        return generatedConfiguration;
    }
});
```

## Suggested Links

-   [SPFx](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
-   [Sample Project on SPFx Integration](https://github.com/telerik/kendo-react-sharepoint-spfx)
