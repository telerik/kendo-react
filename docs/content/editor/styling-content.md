---
title: Appearance
description: 'Get started with styling the KendoReact Editor content.'
components: ["editor"]
slug: styling_editor
position: 7
---

# Styling the Editor Content

The React Editor, part of KendoReact, content can be styled via CSS and the styles needs to be added in the application or the page. If the Editor is in [Iframe Edit Mode]({% slug api_editor_editorprops %}#toc-defaulteditmode), the styles needs to be inserted in the editor's iframe document.

## Styling the Content in Iframe Edit Mode

By default, the Editor content is rendered inside an iframe and its styles are encapsulated inside this iframe. In such cases the application styles will not affect the editor's content.

To add custom styles for the Editor's content, we have two options:

-   [Insert a `style` element in the iframe document.](#toc-insert-a-style-element-in-the-iframe-document)
-   [Insert a `link` element in the iframe document.](#toc-insert-a-link-element-in-the-iframe-document)

### Insert a style element in the iframe document

This approach can be achieved using the [onMount]({% slug api_editor_editorprops %}#toc-onmount) event of the Editor.

The following example shows how to add custom styles to Editor's iframe document:

{% meta height:425 %}
{% embed_file styling-iframe/app.tsx preview %}
{% embed_file styling-iframe/main.tsx %}
{% endmeta %}

> Inserting `style` tags into the iframe can trigger CSP issues if strict CSP rules are defined for your application. If this is the case in your project, check the `Insert a link element in the iframe document` section below.

### Insert a link element in the iframe document

This approach can be achieved using the [onIFrameInit]({% slug api_editor_editorprops %}#toc-oniframeinit) event of the Editor. What differentiates the `onIFrameInit` event from `onMount` is that when the first is defined the default styles are not inserted into the body of the Editor allowing you to apply custom styles to the iframe of the component.

To add custom styles, we can use the `onIFrameInit` event and insert link tags that load CSS files in the head of the iframe. With this approach, you have the freedom to customize the Editor's body styles the way you need them, and also follow your strict CSP rules.

Below is a simple example of inserting the default Editor styles using the `link tag` approach:

```js-no-run
const onIframeInit = (ev: EditorIFrameInitEvent) => {

    const stylesheets = [
        '../assets/styles/defaultStyle.css',
        '../assets/styles/tablesStyle.css',
        dir === 'rtl' ? '../assets/styles/rtlStyles.css' : undefined
    ];

    stylesheets.forEach(href => {
        if (href && ev.iframe && ev.iframe.contentWindow) {
            const iframeDocument = ev.iframe.contentWindow.document;
            const linkElementWithiFrameStyles =  iframeDocument.createElement('link');
            linkElementWithiFrameStyles.rel = 'stylesheet';
            linkElementWithiFrameStyles.type = 'text/css';
            linkElementWithiFrameStyles.href = href;
            iframeDocument.head.appendChild(linkElementWithiFrameStyles);
        }
    });
}
```

An working example demonstrating the usage of the above code can be seen in [this project from our public repository](https://github.com/telerik/kendo-react/tree/master/examples/kendo-react-editor-strict-csp). In the same repository, you can get the definitions of the [defaultStyle.css](https://github.com/telerik/kendo-react/blob/master/examples/kendo-react-editor-strict-csp/public/assets/defaultStyle.css), [tablesStyle.css](https://github.com/telerik/kendo-react/blob/master/examples/kendo-react-editor-strict-csp/public/assets/tablesStyle.css) and [rtlStyles.css](https://github.com/telerik/kendo-react/blob/master/examples/kendo-react-editor-strict-csp/public/assets/rtlStyles.css) files that hold the default body styles of the Editor.

## Styling the Content in DIV Edit Mode

In [Div Edit Mode]({% slug api_editor_editorprops %}#toc-defaulteditmode) we can directly style the Editor content using CSS. In the example below the following CSS definition is presented in the **styles.css** file loaded to the project. The result is Editor content colored in blue.

```jsx-no-run
.k-editor .k-editor-content p {
    color: #53d2fa;
}
```

{% meta height:425 %}
{% embed_file styling-div/app.tsx preview %}
{% embed_file styling-div/styles.css %}
{% embed_file styling-div/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor Component]({% slug api_editor_editor %})
-   [API Reference of the Editor Props]({% slug api_editor_editorprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
