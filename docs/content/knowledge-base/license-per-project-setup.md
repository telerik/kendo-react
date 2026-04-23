---
title: How to Set Up a Per-Project KendoReact License Key
description: Learn how to configure the KendoReact license key on a per-project basis by placing the license file in your project root directory.
page_title: How to Set Up a Per-Project KendoReact License Key
slug: license_per_project_setup
tags: license, key, per-project, project-level, setup, activate, telerik-license, project-root, gitignore
res_type: kb
components: ['general']
---

## Environment

<table>
    <tbody>
        <tr>
        	<td>Product</td>
        	<td>KendoReact</td>
        </tr>
        <tr>
        	<td>Version</td>
        	<td>Q1 2025 and later</td>
        </tr>
    </tbody>
</table>

## Description

How can I set up the KendoReact license key on a per-project basis instead of using the global user-level configuration? This approach is useful when you work with multiple projects that require different license keys or when you prefer to keep the license configuration specific to each project.

## Solution

To configure a per-project license key:

1. [Download your license key file](slug:downloading_license_key) from your Telerik account. The downloaded file is named `telerik-license.txt`.

1. Copy the `telerik-license.txt` file to the root folder of your Angular project. This is the same folder that contains the `package.json` file.

1. Add the license key file to `.gitignore` to prevent committing it to source control, as this is your personal license key:

    ```gitignore
    # Kendo UI License Key
    telerik-license.txt
    ```

1. Install the `@progress/kendo-licensing` package as a project dependency if you haven't already:

    ```sh NPM
    npm install --save @progress/kendo-licensing
    ```
    ```sh YARN
    yarn add @progress/kendo-licensing
    ```

1. Run the activation command to validate and activate the license key:

    ```sh NPM
    npx kendo-ui-license activate
    ```
    ```sh YARN
    yarn run kendo-ui-license activate
    ```

The licensing mechanism will now use the `telerik-license.txt` file from your project root directory.

> Do not commit to source control: The `telerik-license.txt` file contains your personal license key and must not be committed to version control systems. Always add it to `.gitignore`.

## See Also

-   [Setting Up Your License Key](slug:my_license)
-   [Adding the License Key to CI Services](slug:ci_services_license)
-   [Downloading Your License Key File](slug:downloading_license_key)
-   [License Activation Errors and Warnings](slug:license_activation_errors)
-   [Frequently Asked Questions about Your KendoReact License Key](slug:faq_license)
