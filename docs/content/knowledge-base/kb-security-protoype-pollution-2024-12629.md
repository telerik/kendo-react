---
title: Prototype Pollution Vulnerability (12629)
description: "How to mitigate CVE-2024-12629, a prototype pollution vulnerability."
slug: kb-security-prototype-pollution-cve-2024-12629
tags: telerik, kendo, security, react, cve-2024-12629, kb
published: True
position: 2
res_type: kb
category: knowledge-base
components: ["general"]
---

## Description

Product Alert - February 2025 - [CVE-2024-12629](https://www.cve.org/CVERecord?id=CVE-2024-12629)

- Progress® Telerik® KendoReact v3.5.0 - v9.1.0

## Issue

CWE-1321 Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution')

### What Are the Impacts

In Progress® Telerik® KendoReact versions v3.5.0 through v9.4.0, an attacker can introduce or modify properties within the global prototype chain which can result in denial of service or command injection.

## Solution

Updating to at least version KendoReact v9.4.0 is the only way to remove this vulnerability. We have addressed the issue and the Progress Telerik team recommends performing an upgrade to the version listed in the table below.

| Current Version | Guidance |
|-----------------|----------|
| 3.5.0 - 9.1.0 | 9.4.0 ([update instructions](https://www.telerik.com/kendo-react-ui/components/migration/up-to-date)) |

Customers can access the updated packages via npm. See the [installation documentation](https://www.telerik.com/kendo-react-ui/components/getting-started) for more information.

## Notes

- If you are not using the Form component in your application, this vulnerability does not affect you.
- To check your version of KendoReact, view your project's dependencies list (e.g., package.json) or use the `npm list` command.
- If you have any questions or concerns related to this issue, open a new Technical Support case in [Your Account | Support Center](https://www.telerik.com/account/support-center/contact-us/). Technical Support is available to customers with an active support plan.
- We would like to thank Tariq Hawis for their cooperation and responsible disclosure with CVE-2024-12629.

## External References

[CVE-2024-12629](https://www.cve.org/CVERecord?id=CVE-2024-12629) (MEDIUM)

**CVSS:** 4.1

In Progress® Telerik® KendoReact versions v3.5.0 through v9.4.0, an attacker can introduce or modify properties within the global prototype chain with the consequences of denial of service or command injection.

CREDIT: Tariq Hawis
