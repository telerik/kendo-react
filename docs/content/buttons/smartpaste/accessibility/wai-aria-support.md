---
title: Wai-Aria Support
page_title: KendoReact SmartPasteButton Documentation | SmartPasteButton  Accessibility
description: 'Get started with the KendoReact SmartPasteButton and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1.'
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_smartpaste
position: 100
---

# SmartPasteButton Accessibility

Out of the box, the Kendo React SmartPasteButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SmartPasteButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector    | Attribute                          | Usage                                                                         |
| ----------- | ---------------------------------- | ----------------------------------------------------------------------------- |
| `.k-button` | `role=button` or `nodeName=button` | If the used element is not `<button>`, explicitly set its `role` to `button`. |

## Resources

[WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

## Section 508

The SmartPasteButton is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing

The SmartPasteButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers

The SmartPasteButton has been tested with the following screen readers and browsers combinations:

| Environment    | Tool |
| -------------- | ---- |
| Firefox        | NVDA |
| Chrome         | JAWS |
| Microsoft Edge | JAWS |

## Keyboard Navigation

For more details about the SmartPasteButton component's keyboard navigation, refer to the article on [keyboard navigation in the SmartPasteButton component](slug:keyboard_navigation_smartpaste).

## See Also

-   [Accessibility in KendoReact](slug:overview_accessibilty)
-   [Accessibility Compliance and Keyboard Support in KendoReact](slug:compliance_accessibilty)
-   [API Reference of the SmartPasteButton](slug:api_buttons_smartpastebuttonprops)
