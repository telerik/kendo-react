---
title: Accessibility
description: 'Apply the accessibility support provided for the Kendo UI ScrollView for React projects.'
components: ["scrollview"]
slug: accessibility_scrollview
position: 70
---

# Accessibility

The ScrollView is accessible by screen readers and provides full [WAI-ARIA accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) support.

## WAI-ARIA Support

The ScrollView is WAI ARIA-accessible through the `Tab` key. Once the component is focused, the user can navigate with the `Left Arrow` and `Right Arrow` keys. The **Next** and **Previous** buttons have ARIA-labels.
The active view has `aria-hidden` set to `false` and the rest, non-visible views have `aria-hidden` set to `true`.

The ScrollView also follows the [WAI-ARIA best practices](https://www.w3.org/TR/wai-aria-practices/) for implementing the [keyboard navigation]({% slug keyboard_navigation_scrollview %}) for its component [role](https://www.w3.org/TR/wai-aria#roles) and is tested against the popular screen readers.

## Section 508

The ScrollView is compliant with the [Section 508](https://www.section508.gov/) requirements.

## Limitations

The following issues are related to the WAI-ARIA support limitations of browsers and screen readers:

-   Microsoft Edge works best with [Microsoft Narrator screen reader](https://en.wikipedia.org/wiki/Microsoft_Narrator). For more information, refer to [issue 8571350](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8571350/).

## Suggested Links

-   [API Reference of the ScrollView]({% slug api_scrollview_scrollview %})
-   [API Reference of the ScrollViewProps]({% slug api_scrollview_scrollview %})
-   [Keyboard Navigation]({% slug keyboard_navigation_scrollview %})
