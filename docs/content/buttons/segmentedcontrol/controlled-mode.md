---
title: Controlled Mode
description: 'Learn how to use the KendoReact SegmentedControl in controlled and uncontrolled modes in React projects.'
components: ['segmentedcontrol']
slug: controlled_segmentedcontrol
position: 3
---

# Controlled and Uncontrolled Modes

The SegmentedControl supports both **controlled** and **uncontrolled** usage:

-   In **controlled mode**, the selected value is managed externally via the `value` prop and updated through the `onChange` callback.
-   In **uncontrolled mode**, the initial selection is set with `defaultValue` and the component manages its own state internally.

## Controlled SegmentedControl

The following demo shows how to manage the selected value externally via the `value` prop and the `onChange` callback, enabling full control over the SegmentedControl state:

<demo metaUrl="buttons/segmentedcontrol/controlled/" height="200"></demo>

## SegmentedControl with Default Value

The following demo shows how to set an initial selection using the `defaultValue` prop, allowing the component to manage its own state internally without requiring external state management:

<demo metaUrl="buttons/segmentedcontrol/default-value/" height="200"></demo>

## Suggested Links

-   [SegmentedControl Overview](slug:overview_segmentedcontrol)
-   [Appearance](slug:appearance_segmentedcontrol)
-   [Customization](slug:customization_segmentedcontrol)
-   [API Reference of the SegmentedControl](slug:api_buttons_segmentedcontrolprops)
