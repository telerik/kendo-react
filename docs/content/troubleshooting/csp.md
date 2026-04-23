---
title: Content Security Policy
description: 'Learn about the issues that may occur when using the KendoReact suite with Content-Security-Policy enabled.'
components: ["general"]
slug: troubleshooting_csp
position: 20
---

# Content Security Policy

This article describes how the KendoReact suite conforms to [`Content-Security-Policy` (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) and what policy configuration it may need.

## Strict Content Security Policy(CSP) and What it Affects?

In general, a strict CSP can disable web app features, such as:

-   Scripts, styles, and images from untrusted domains.
-   Inline JavaScript in `<script>` tags and legacy DOM attributes such as `onclick`.
-   Inline CSS in `<style>` tags and `style` attributes.
-   Fonts and images that are embedded in stylesheets with `data:` URIs.
-   Dynamic code evaluation via `eval()`.

## Policy Configuration

The CSP limitations can affect the normal work of the KendoReact components. To be sure everything works as expected, the following configurations should be applied:

-   Allow inline styles to use component parameters such as `width`, `height`, `top`, `left`, etc.
-   Allow `'unsafe-inline'` for `style-src` to enable KendoReact components to load encapsulated styles when using the Editor with its default configurations.
    -   If you don't want to add `'unsafe-inline'` to your project, use the approach described in the [Insert a link element in the iframe document](slug:styling_editor#toc-insert-a-link-element-in-the-iframe-document) article.
-   Allow `'unsafe-eval'` for `script-src` when using the `defineFunction(name, func)` method of the [Spreadsheet](slug:overview_spreadsheet) component.
-   If you use the KendoReact components through a CDN, allow `https://kendo.cdn.telerik.com` as a source for stylesheets.

**Sample CSP rule that ensures the KendoReact components function and look as expected**

```xml
<meta http-equiv="Content-Security-Policy"
    content="
        default-src 'self' https://demos.telerik.com;
        style-src-elem 'self' https://kendo.cdn.telerik.com;
        style-src 'self'; // Check the policy configuration above for the 'unsafe-inline' configuration when using the Editor.
        script-src 'self'; // Check the policy configuration above for the 'unsafe-inline' configuration when using the defineFunction of the Spreadsheet.
        font-src 'self' data:;
        img-src 'self' data:;
    "
/>
```

## Enhancements and Changes

-   Since our `R3 2023` release, the font icons that where previously available out-of-the-box are now accessible through this CDN link. After the mentioned version, all icons used in the KendoReact components are SVG ones.

If an update is not possible, you need to add the following CSP configuration to be sure that everything will be working as expected:

```xml
font-src 'self' data:;
```

-   With our `R4 2024` release, the Spreadsheet component is strictly CSP compliant, except in scenarios where the `defineFunction(name, func)` is used.
