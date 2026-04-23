---
title: Handling License Key File Name and Environment Variable Name Changes in the 2025 Q1 Release
description: Learn how to handle license key file and environment variable name changes introduced with the 2025 Q1 release of KendoReact.
page_title: Handling License Key File Name and Environment Variable Name Changes in the 2025 Q1 Release
slug: handling_license_file_name_changes
tags: license, key, file, name, change, environment, variable, kendo-ui, telerik, react
res_type: kb
category: knowledge-base
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

Starting with the 2025 Q1 Release, the following changes will apply to the license key file name and the environment variable used to store the license key:

- The name of the downloaded file with the license key changes from `kendo-ui-license.txt` to `telerik-license.txt`. This file is now used for the licensing of the entire Telerik and Kendo products portfolio.
- The name of the environment variable used to store the license key changes from `KENDO_UI_LICENSE` to `TELERIK_LICENSE`.

These are not breaking changes:

- Applications and CI/CD tools using the existing `kendo-ui-license.txt` file and `KENDO_UI_LICENSE` environment variable will remain fully functional.
- If a system or environment has both the new and the old license keys file and environment variables, the licensing mechanism will use the new ones.

## Solution

Although the introduced changes are not breaking changes, the Kendo team recommends applying the following changes to avoid confusion caused by the different naming:

1. Update the `@progress/kendo-licensing` package to the latest version.

1. Remove the legacy license key file and environment variable (if using environment variables to store the license key):
    - `kendo-ui-license.txt`
    - `KENDO_UI_LICENSE`

1. [Download](https://www.telerik.com/account/your-licenses/license-keys) a new license key file called `telerik-license.txt`.

1. If using [environment variables](slug:ci_services_license#toc-creating-an-environment-variable) or secrets:
    - Create a new environment variable called `TELERIK_LICENSE`.
    - Add the newly downloaded license key as a variable value.

Alternatively, only if you have an existing application or CI/CD environment where you cannot update the `@progress/kendo-licensing` package to the latest version: rename the downloaded `telerik-license.txt` file to `kendo-ui-license.txt` or copy its contents to the `KENDO_UI_LICENSE` environment variable.

## See Also

- [Setting Up Your License Key](slug:my_license)
- [License Activation Errors and Warnings](slug:license_activation_errors)
- [Adding the License Key to CI Services](slug:ci_services_license)
- [Frequently Asked Questions about Your KendoReact License Key](slug:faq_license)
