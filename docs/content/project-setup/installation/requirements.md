---
title: System Requirements
page_title: System Requirements - KendoReact
description: 'Check out the system requirements you need to work with KendoReact.'
components: ['general']
slug: requirements_installation
position: 970
---

# System Requirements

This article states the system requirements you need to work with the KendoReact suite.

## Operating Systems

The KendoReact suite is OS agnostic, which allows it to run seamlessly on any operation system without requiring specific adjustments.

## Node.js

The KendoReact library adheres to the version compatibility rules that the React framework requires. For more detailed information about the compatible [Node.js](https://nodejs.org/en/) versions for each React release, check out the React documentation.

Currently, the required Node.js version is 16.0.0 or later. Alongside the Node.js installation, a supported [NPM](https://www.npmjs.com/) version will be installed. You can also install KendoReact components with third-party package managers such as [Yarn](https://yarnpkg.com/lang/en/).

For Node.js version 16.0.0 and above, use the following flag to ensure all the correct peer dependencies versions are installed in your project.

```sh
npm install --legacy-peer-deps
```

To check your Node.js version, run `node --version` in a terminal or console window.

## React

KendoReact supports the latest official React version and those currently under long-term support.

Currently, the supported React versions are:

| React Version | Status    | KendoReact compatible versions  |
| ------------- | --------- | ------------------------------- |
| ^19.0.0       | Active    | Latest KendoReact versions      |
| ^18.0.0       | Supported | All current KendoReact versions |

> The KendoReact components require React v18.0.0 or higher.

For more details about the actively supported releases of React, refer to the [React Releases](https://react.dev/versions) page in the official React documentation.

To check your React project version, run `npm list react` in a terminal or console window.

## Browser Support

|          **Chrome**          | **Firefox** |           **Edge**           |          **Safari**          |           **iOS**            |         **Android**          |
| :--------------------------: | :---------: | :--------------------------: | :--------------------------: | :--------------------------: | :--------------------------: |
| 2 most recent major versions |   latest    | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions | 2 most recent major versions |

KendoReact supports the major browsers that React supports. For more details, refer to the browser compatibility requirements in React applications.

### Dropping IE 11 Support

KendoReact no longer provides support for Internet Explorer 11 since the end of 2022.

The main reason for dropping the IE 11 support is that modern React applications and build tools no longer support IE 11, and the React ecosystem has moved away from legacy browser support.

Additionally, Microsoft retired the [IE 11 desktop application](https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge) and ended support for certain operating systems on June 15, 2022.

## Suggested Links

-   [Keeping Up to Date](slug:up_to_date)
-   [Installation Guide](slug:development_builds_installation)
-   [Getting Started with React](https://react.dev/learn)
-   [End of Internet Explorer Support for Telerik & Kendo UI Web Components](https://www.telerik.com/blogs/end-internet-explorer-support-telerik-kendo-ui-web-components)
