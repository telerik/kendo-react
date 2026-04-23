---
title: Controlled Mode
description: 'Control the value of the KendoReact Editor in React projects.'
components: ["editor"]
slug: controlled_editor
position: 4
---

# Controlled Mode

By default, the React Editor, part of KendoReact, is in an uncontrolled mode.

## Controlling the Value

To manage the value of the Editor:

1. Use its [`value`]({% slug api_editor_editorprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_editor_editorprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:225 %}
{% embed_file controlled-value-doc/func/app.tsx preview %}
{% embed_file controlled-value-doc/func/main.tsx %}
{% endmeta %}

## Using String Value

The Editor's [`value`]({% slug api_editor_editorprops %}#toc-value) property can also be a string. The HTML representation of the Editor's document needs to be obtained by the [`html`]({% slug api_editor_editorchangeevent %}#toc-html) getter of the onChange event object.

The following example demonstrates how to use a string value of the React Editor, part of KendoReact.

{% meta height:225 %}
{% embed_file controlled-value-string/func/app.tsx preview %}
{% embed_file controlled-value-string/func/main.tsx %}
{% endmeta %}

## Using Uncontrolled Mode

To utilize the React Editor, part of KendoReact, in uncontrolled mode, use its [`defaultContent`]({% slug api_editor_editorprops %}#toc-defaultcontent) prop to set initial HTML and the Editor's instance to get the edited HTML. [See example]({% slug content_editor %}).

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editorprops %})
-   [Editor's value/document object](https://prosemirror.net/docs/guide/#doc)
