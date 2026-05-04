---
title: FAQs
page_title: Licensing FAQ - KendoReact
description: 'Find the answers to your questions about the licensing in the KendoReact'
components: ['general']
slug: faq_license
position: 30
---

# Frequently Asked Questions

This article lists the answers to the most frequently asked questions (FAQs) about working with the KendoReact license keys.

## Can I Use KendoReact Without a License?

KendoReact Free is a free version of the [KendoReact component library](https://www.telerik.com/kendo-react-ui) that includes 50+ customizable, enterprise-grade components. The free React components can be used for prototyping, development, testing, and in production according to the terms and conditions of the [KendoReact EULA](https://www.telerik.com/purchase/license-agreement/progress-kendoreact). No sign-up or license is required.

KendoReact premium components and features require an active commercial or trial license key.

## Why is my license key truncated when an environment variable is set on Windows?

Because of the larger license key file size, the key length is automatically truncated when an environment variable is set on Windows, resulting in the following error:

```bash
[ERROR][Telerik and Kendo UI Licensing] Corrupted Telerik and Kendo UI License Key content in TELERIK_LICENSE
```

To fix the error, copy the file to `%AppData%\Telerik\telerik-license.txt` or put the `telerik-license.txt` file in the root folder of the application.

We do not recommend using the `TELERIK_LICENSE` environment variable for local development on Windows. Using the environment variable is recommended on CI/CD platforms where the variable size limit is larger. Refer to [Adding the License Key to CI Services](slug:ci_services_license).

## Will the product function with an expired license key?

This depends on the type of license you have:

-   _Perpetual Licenses_ will continue to function normally with an expired license key. However, the following will happen if you update or install a package version that is released after the expiration date of the license:

    -   A watermark will appear over selected KendoReact components.
    -   A licensing banner will pop over a page that uses unlicensed KendoReact components.
    -   A warning message will appear when calling the `kendo-ui-license activate` command.
    -   A warning message will appear in the browser console.

-   _Subscription Licenses_ will continue to function normally for deployed applications. However, the following will happen when you try to rebuild the application:

    -   A warning message will appear when calling the `kendo-ui-license activate` command.

-   _Trial Licenses_ will continue to function normally with an expired license key. The following will happen if you try to build or run the application:

    -   A watermark appears on application startup.
    -   A modal dialog appears on application startup.
    -   A warning message will appear when calling the `kendo-ui-license activate` command.
    -   A warning message similar to the following is logged in the build log.

See the [Invalid License](#toc-invalid-license) section for more information.

> Note: Future updates of the library may restrict or disable some features when no valid license is present.

## I updated the version of the KendoReact packages in my project and the invalid license attributes appeared. What is the cause for this behavior?

The most likely cause is that the newly installed KendoReact components were released after the expiration date of your current license. To fix this issue:

1. [Download a new license key](https://www.telerik.com/account/your-licenses/license-keys).
1. [Activate the new license key](slug:my_license#toc-install-or-update-a-license-key).

## Can I use the same license key in multiple builds?

You can use your personal license key in multiple pipelines, builds, and environments.

However, each individual developer must use a unique personal license key.

## Will the product function without a license key?

Yes, the product will continue to function normally without a license key. However, the following will happen if a valid license key is not present:

-   A watermark will appear above selected KendoReact components.
-   A licensing banner will pop over a page that uses unlicensed KendoReact components.
-   A warning message will appear in the browser console.

See the [Invalid License](#toc-invalid-license) section for more information.

Please, be aware that future updates of the library may restrict or disable some features when no valid license is present.

## Will a watermark and license banner appear if I use a Kendo React version that was released prior to v.5.16.0?

If you have a valid license activated for your project, you won't get any [invalid license attributes](#toc-invalid-license).

## Does the license key expire?

Yes, the license key expires at the end of your support subscription.

-   For trial users, this is at the end of your 30-day trial.
-   For licensed developers, this is when your subscription expires.

You will need to [download and install a new license key](slug:my_license) after starting a trial, renewing a license, or upgrading a license.

> An expired license key is valid for all KendoReact versions _published before its expiration date_. The publish date of each version is available in the [KendoReact changelog](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/).

## I am using Vite in my project. I can't hide the invalid license watermarks, banner, and console warning even though the license activation is successful. What should I do?

The described scenario happens in Vite context and most often when you have previously activated a commercial or trial license in your project and now you want to renew this license. In the discussed case, once you run `npx kendo-ui-license activate`, the console message says you have successfully activated your license but in fact, all [invalid license attributes](#toc-invalid-license) are still presented.

The reason for the issue is that Vite is not updating its cache after the licensing command is executed. To make the warning disappear:

1. Delete the `.vite` folder in the `node_modules` folder of the project.
1. Execute the `npx kendo-ui-license activate` command.

## I updated the version of the KendoReact packages in my project and the invalid license attributes appeared. How to hide these items?

If this happens, the possible reason is that the end date of the license activated in your application is before the release date of the newly installed KendoReact packages. To fix this issue:

1. [Download a new license key](#toc-download-your-license-key).
1. [Activate the new license key](#toc-install-or-update-a-license-key) in your project.

## Do I need an Internet connection to activate the license?

No, the license activation and validation are performed entirely offline.

No network requests are made at any point of the project lifecycle.

## Do I have to add the license key to source control?

No, you do not have to add the `telerik-license.txt` license key file or its contents to source control.

Build servers have to use the `TELERIK_LICENSE` environment variable as described in [Adding the License Key to CI Services](slug:my_license#toc-add-the-license-key-to-ci-services).

**DO NOT** Store the license key in plaintext, for example in a GitHub Actions Workflow definition.

**DO NOT** Add the variable to the [Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) if using Create React App. These values are embedded in the application bundle, meaning anyone can view them by inspecting your app's files.

## Is it possible to activate the license without executing commands?

Yes, the license will be activated automatically if it is present during package installation. This applies to both license key files and the environment variable. A diagnostic message will be printed in the `npm install` log.

Using the `kendo-ui-license activate` command is optional, but recommended in builds as it will return an error if the activation fails.

## What happens if both the environment variable and the license key file are present?

If both the `TELERIK_LICENSE` environment variable and the `telerik-license.txt` file are present, then the environment variable will be used.

To enforce the use of the license key file, unset the environment variable.

## How can I manage my license?

You can now easily review, access, and download the available license key and license through our improved flow.

1. To view or download your KendoReact license key, visit the [License Key Page](https://www.telerik.com/account/your-licenses/license-keys).
2. To view the licenses, visit the [Your Licenses Page](https://www.telerik.com/account/your-licenses).

## Are older versions of KendoReact affected?

No, versions prior to v4.0.0 do not require a license key.

## Do I need a license key when using script files instead of the npm packages?

Yes, the KendoReact browser scripts (located in the `dist/cdn/js`) require a license key in a special format. For setup guidance, refer to the [Getting Started with KendoReact](slug:getting_started) article.

## My team has more than one licensed developer. Which key do I have to use?

You can use any of the keys associated with your subscriptions to activate your license, both in your local environment and in CI builds.

## Suggested Links

-   [Setting Up Your License Key](slug:my_license)
-   [License Activation Errors and Warnings](slug:license_activation_errors)
-   [Adding the License Key to CI Services](slug:ci_services_license)
-   [Get Started with KendoReact Free](slug://getting_started_free_vs_premium)
