---
title: Adornments
description: 'Learn how to enhance the KendoReact PromptBox component with icons, buttons, and other UI elements using adornments.'
slug: adornments_promptbox
position: 40
components: ['promptbox']
---

# PromptBox Adornments

Further customize the elements around the input area by using the specialized adornment components.

The PromptBox provides three adornment components, and each of them renders content in a specific location relative to the input area&mdash;start, end, and top.

## Start Affix

The start adornments are displayed on the left side of the input in single-line mode, and at the bottom left corner when in multi-line mode. To add custom content to the start of the PromptBox input area, use the [`startAffix`](slug:api_conversational-ui_promptboxprops#startAffix) template.

The following example demonstrates the start adornment in action.

<demo metaUrl="conversational-ui/promptbox/adornments/start/" height="400"></demo>

## End Affix

The end adornments are displayed at the end of the input, before the built-in controls. To add custom content to the end of the PromptBox input area, use the [`endAffix`](slug:api_conversational-ui_promptboxprops#endAffix) template.

The following example demonstrates the end adornment in action.

<demo metaUrl="conversational-ui/promptbox/adornments/end/" height="400"></demo>

## Top Affix

The top adornments are displayed above the input area of the PromptBox and only apply in `'multi'` [`mode`](slug:api_conversational-ui_promptboxprops#mode). To add custom content to the top of the PromptBox input area, use the [`topAffix`](slug:api_conversational-ui_promptboxprops#topAffix) template.

The following example demonstrates the top adornment in action.

<demo metaUrl="conversational-ui/promptbox/adornments/top/" height="300"></demo>

## Reordering Built-in Controls

You can use the adornment components to reposition the built-in controls of the PromptBox. For example, you can move the **Action** button to the start adornment area and the **Speech-to-Text** button to the end adornment area.

```tsx
<PromptBox
actionButtonConfig={{false}}
startAffix={(props) =>  <PromptBoxActionButton {...props.actionButtonProps} />}
/>
```

Here is a list of the built-in controls and their respective components:

-   [`PromptBoxActionButton`](slug:api_conversational-ui_promptboxactionbutton)&mdash;Component for the Action button.
-   [`PromptBoxSpeechToTextButton`](slug:api_conversational-ui_promptboxspeechtotextbutton)&mdash;Component for the Speech-to-Text button.
-   [`PromptBoxUploadButton`](slug:api_conversational-ui_promptboxuploadbutton)&mdash;Component for the Upload button.

The following example demonstrates how to reposition the built-in **Action** control using the adornment components.

<demo metaUrl="conversational-ui/promptbox/adornments/reorder/" height="200"></demo>

## Disabling Adornments

By default, the adornments are part of the PromptBox. When you set the [`disabled`](slug:api_conversational-ui_promptboxprops#disabled) property to `true`, the PromptBox applies disabled styling to the adornment elements. This styling sets [`pointer-events`](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) to `none` and adjusts the [`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) to match the disabled appearance. The adornments visually align with the disabled state of the PromptBox, but remain focusable through keyboard navigation.

The following example demonstrates a disabled PromptBox with visually disabled adornments.

<demo metaUrl="conversational-ui/promptbox/adornments/disabled-items/basic/" height="200"></demo>

### Programmatically Disabling Adornments

The adornment components give you full control over the elements rendered inside. Programmatically control the disabled state of used components within the adornments to ensure they are truly disabled when the PromptBox is disabled.

The following example demonstrates a disabled PromptBox with truly disabled controls inside the adornments.

<demo metaUrl="conversational-ui/promptbox/adornments/disabled-items/programmatic-control/" height="200"></demo>

## Suggested Links

-   [PromptBox Modes](slug:modes_promptbox)
-   [PromptBox Appearance](slug:appearance_promptbox)
-   [API Reference of the PromptBox](slug:api_conversational-ui_promptboxprops)
