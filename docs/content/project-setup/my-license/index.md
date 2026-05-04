---
title: Activating Your License Key
page_title: Activating Your License Key - Project Setup - KendoReact
description: 'Set up your license key to use the KendoReact UI components in your React projects.'
components: ['general']
slug: my_license
position: 10
---

# Set Up Your KendoReact License Key

In this article, you’ll learn how to activate the KendoReact premium components and features by installing a license key.

KendoReact is an enterprise-grade UI library with 120+ free and premium components. You can use the [50+ free components and features of KendoReact](slug://getting_started_free_vs_premium), even in production, no license required.

**Important**: To work with any premium KendoReact components and features, you must install a license key file in your project. This requirement applies to:

-   **Trial usage**: Download and install a trial license key file to evaluate premium features
-   **Commercial usage**: Download and install a commercial license key file for production use

Without a valid license key file, premium components will display licensing warnings and watermarks, which can interrupt your development and user experience.

The license key installation process involves the following steps:

1. [Purchase](https://www.telerik.com/kendo-react-ui/pricing#subscription) a commercial license or [start a trial](https://www.telerik.com/try/kendo-react-ui).
1. [Download a license key.](#download-your-license-key-file)
1. [Install or update your license key file in your project.](#install-or-update-the-license-key-file-in-your-project)

If you’re in a hurry, skip the rest of the article and run this command sequence in your project terminal to download and activate your license:

```sh NPM
npm install --save @progress/kendo-licensing
npx kendo-ui-license refresh && npx kendo-ui-license activate
```

```sh YARN
yarn add @progress/kendo-licensing
yarn run kendo-ui-license refresh && yarn run kendo-ui-license activate
```

## Download Your License Key File

> To download a license key for KendoReact, you must have either a developer license or a trial license. If you are new to KendoReact, [sign up for a free trial](https://www.telerik.com/try/kendo-react-ui) first and then follow the steps below.

Use the `refresh` command provided by the kendo-licensing package to download a fresh copy of your license key file. The command-line utility will launch your default browser and ask you to log in to telerik.com.

```sh
npx -y @progress/kendo-licensing refresh
```

The license key file will be saved in the current user's home directory:

-   For Mac/Linux: `~/.telerik/telerik-license.txt`

To download the license key file to a different location, use the `--output` parameter and specify a path or file name:

```sh
npx -y @progress/kendo-licensing refresh --output kendo-ui-license.txt
```

Alternatively, [use your browser to download the license key file](slug:downloading_license_key) and place it in the current user's home directory.

## Install or Update the License Key File in Your Project

When you start a new trial, purchase a new KendoReact license, or renew an existing one, always download and install a new license key. The new license key includes information about all previous license purchases. The procedure for the installation of a new license key and the update of a license key is the same:

1. Install `@progress/kendo-licensing` as a project dependency:

    ```sh NPM
    npm i @progress/kendo-licensing
    ```

    ```sh YARN
    yarn add @progress/kendo-licensing
    ```

2. Run the activate command in the console:

    ```sh NPM
    npx kendo-ui-license activate
    ```

    ```sh YARN
    yarn run kendo-ui-license activate
    ```

If the invalid license attributes are still displayed after you have installed or updated the license key, see the [Troubleshooting License Activation](slug:license_activation_errors) article and the [FAQ](slug:faq_license) page for more information.

> If both the `TELERIK_LICENSE` environment variable and the `telerik-license.txt` file are present, then the environment variable will be used.

> When renewing your subscription, always regenerate and reactivate the license key. This will allow you to update the KendoReact components in your application. Each licensing file contains information about the validity of your subscription and can be used for all KendoReact versions published before its expiration date.

## Automatic License Key File Management in Visual Studio Code

The [Kendo UI Productivity Tools extension](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard) can automatically download and manage your license key file. Simply log in to your Telerik or Kendo UI account from Visual Studio Code to enable this feature. For more information, see the [Kendo UI Productivity Tools](slug:overview_vscode_installation) documentation.

## Troubleshooting

If you have a valid license key, and the `License activation failed` warning appears in the terminal, performing a clean, fresh install usually resolves it. To do this, follow these instructions:

1. Run `rm -rf node_modules` to remove all installed packages.

    ```sh
    rm -rf node_modules package-lock.json yarn.lock
    ```

1. Install all packages in the project.

    ```sh NPM
    npm i
    ```

1. Run the activate command again:

    ```sh NPM
    npx kendo-ui-license activate
    ```

If the invalid license attributes are still displayed after you have installed or updated the license key, see the [License Activation Errors and Warnings](slug:license_activation_errors) and the [FAQs](slug:faq_license) articles for more information.

## Suggested Links

-   [Adding the License Key to CI Services](slug:ci_services_license)
-   [Per-Project License Key Setup](slug:license_per_project_setup)
-   [License Activation Errors and Warnings](slug:license_activation_errors)
-   [Frequently Asked Questions](slug:faq_license)
-   [Get Started with KendoReact Free](slug://getting_started_free_vs_premium)
