---
title: Wai-Aria Support
page_title: KendoReact RangeSlider Documentation | RangeSlider  Accessibility
description: "Get started with the KendoReact RangeSlider and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_rangeslider
position: 100
---

# RangeSlider Accessibility



Out of the box, the Kendo React RangeSlider provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The RangeSlider is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

[Slider accessibility specification]({% slug accessibility_slider %})


The two focusable elements of the RangeSlider must implement the specification for the **Slider** component. Here is just one clarification for the use of `aria-valuetext` attribute:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-draghandle` | `aria-valuetext` | Specifies the text that would be announced based on the currently selected values in both handle elements (e.g. `aria-valuetext="10 - 50"`). |

## Resources

[WAI-ARIA specification for Slider](https://www.w3.org/TR/wai-aria-1.2/#slider)

## Section 508


The RangeSlider is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The RangeSlider has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The RangeSlider has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the RangeSlider component's keyboard navigation, refer to the article on [keyboard navigation in the RangeSlider component]({% slug keyboard_navigation_rangeslider %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
