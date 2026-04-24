---
title: Accessibility
description: "Apply the accessibility support provided by the KendoReact Rating."
components: ["rating"]
slug: accessibility_rating
position: 12
---

# Accessibility

The Rating is designed to be accessible by on-screen readers and provides full [WAI-ARIA accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) support.

## WAI-ARIA Support

The Rating has a role="slider" attribute that semantically defines the rating and uses `ariaLabelledBy` and `ariaDescribedBy` properties. The Rating is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` properties define the accessibility values when the user select icon from the Rating or interacts with the Rating through the arrow keys. The Rating uses the `aria-disabled` property which defines the accessibility state.

The Rating also follows the [WAI-ARIA best practices](https://www.w3.org/TR/wai-aria-practices/) for implementing the [keyboard navigation]({% slug keyboard_navigation_rating %}) for its component [role](https://www.w3.org/TR/wai-aria#roles) and is tested against the popular screen readers.

## Section 508

The Rating is compliant with the [Section 508](https://www.section508.gov/) requirements.

## Suggested Links

* [API Reference of the Rating Component]({% slug api_inputs_rating %})
* [API Reference of the Rating props]({% slug api_inputs_ratingprops %})
* [Keyboard Navigation]({% slug keyboard_navigation_rating %})
