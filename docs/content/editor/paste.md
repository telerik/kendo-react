---
title: Sanitizing Pasted HTML Content
description: 'Get started with the KendoReact Editor, sanitize its pasted HTML content, and implement additional sanitizing approaches.'
components: ["editor"]
slug: paste_editor
position: 7
---

# Sanitizing Pasted HTML Content

The React Editor, part of KendoReact, exposes a set of built-in functions for sanitizing the content which the user pastes in the content area.

The sanitizing approaches improve the control over the entered content and ensure that its styling is consistent. Sanitizing the pasted HTML content is advisable when the user copies content from MS Word.

The following example demonstrates how to use and extend the built-in content sanitizing.

{% meta height:440 %}
{% embed_file paste/func/app.tsx preview %}
{% embed_file paste/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
