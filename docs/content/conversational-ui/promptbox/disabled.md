---
title: Disabled State
description: "Enable or disable the KendoReact PromptBox and its individual buttons."
slug: disabled_promptbox
position: 80
components: ["promptbox"]
---

# Disabled PromptBox

The PromptBox provides built-in support for disabling both the entire component and individual buttons.

To disable the PromptBox component, set the [`disabled`](slug:api_conversational-ui_promptboxprops#disabled) property to `true`. This prevents user interaction with the input area and all built-in tools.

<demo metaUrl="conversational-ui/promptbox/disabled/" height="250"></demo>
## Disable Individual Tools

You can also disable each tool independently while keeping the rest of the PromptBox functional. To achieve this, set the `disabled` property of the respective button settings object. For more details refer to [PromptBox Tools](slug:tools_promptbox) article.

## Suggested Links

* [Disable Adornments](slug:adornments_promptbox#disabling-adornments)
* [PromptBox Appearance](slug:appearance_promptbox)
* [API Reference of the PromptBox](slug:api_conversational-ui_promptboxprops)
* [PromptBoxActionButton API](slug:api_conversational-ui_promptboxactionbuttonprops)
* [PromptBoxUploadButton API](slug:api_conversational-ui_promptboxuploadbuttonprops)
* [SpeechToTextButton API](slug:api_buttons_speechtotextbuttonprops)
