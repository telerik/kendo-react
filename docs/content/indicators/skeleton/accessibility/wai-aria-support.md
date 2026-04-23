---
title: Wai-Aria Support
page_title: KendoReact Skeleton Documentation | Skeleton  Accessibility
description: "Get started with the KendoReact Skeleton and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_skeleton
position: 100
---

# Skeleton Accessibility



Out of the box, the Kendo React Skeleton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Skeleton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AAA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices, provides options for managing component's focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Skeleton component does not have accessibility on its own as it is only visual indicator and should be integrated within an element that refers to the loading state. When integrated on a page, you might:


 - use `aria-busy` attribute to illustrate that the focusable element is loading
 - use `role="alert"` to announce the loading

## Section 508


The Skeleton is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Skeleton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Skeleton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
