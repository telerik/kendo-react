---
title: Troubleshooting Kendo UI License Error, Resolving Console Warning, and Watermark on Components
description: Learn how to troubleshoot your Kendo UI license, resolve the console warning, and watermark on components.
type: how-to
page_title: Troubleshooting Kendo UI License
slug: troubleshooting-kendo-ui-license
tags: kendo ui, license, console error, expired, watermark, components, warning, troubleshoot, activate, install
res_type: kb
components: ['general']
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

When upgrading your Kendo UI package or renewing the Kendo UI license, you could encounter issues with the license activation such as the console showing a warning that the license is expired, or there is a watermark on the components indicating an invalid license.

## Solution

To resolve the issue, follow these steps:

1. Confirm the expiration date of your license by referring to the [Downloading the License key](slug:my_license#download-your-license-key-file) article. Download the key and replace the one that you are using.

1. If you're setting the license key as an environment variable, verify that there is no older version of the license key. Check both current and legacy variable names:

    **Current variable (2025 Q1+):**

    ```sh macOS/Linux
    echo $TELERIK_LICENSE
    ```
    ```sh Windows PowerShell
    Write-Output $env:TELERIK_LICENSE
    ```
    ```sh Windows Command Prompt
    echo %TELERIK_LICENSE%
    ```

    **Legacy variable (pre-2025 Q1):**

    ```sh macOS/Linux
    echo $KENDO_UI_LICENSE
    ```
    ```sh Windows PowerShell
    Write-Output $env:KENDO_UI_LICENSE
    ```
    ```sh Windows Command Prompt
    echo %KENDO_UI_LICENSE%
    ```

    The output should be empty for both variables. If not empty, delete the environment variables and reset them to the new license key using the current `TELERIK_LICENSE` variable name.

1. Delete the _node_modules_ folder and the lock file (_package-lock.json_, _yarn.lock_, or _pnpm-lock.yaml_ depending on your package manager).
1. Clear the package manager cache:

    ```sh NPM
    npm cache clean --force
    ```
    ```sh YARN
    yarn cache clean
    ```

1. Install all the packages:

    ```sh NPM
    npm install
    ```
    ```sh YARN
    yarn install
    ```

1. [Activate the license](slug:my_license#install-or-update-the-license-key-file-in-your-project) and run the application.

## Notes

-   Make sure you have a valid Kendo UI license before proceeding with the activation.
-   If the issue persists, please [contact our support team](https://www.telerik.com/account/support-center/contact-us/technical-support) for further assistance.

## Suggested Link

-   [Setting Up Your KendoReact License Key](slug:my_license)
-   [License Activation Errors and Warnings](slug:license_activation_errors)
-   [Adding the License Key to CI Services](slug:ci_services_license)
-   [Frequently Asked Questions about Your KendoReact License Key](slug:faq_license)
