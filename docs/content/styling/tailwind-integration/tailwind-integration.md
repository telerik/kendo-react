---
title: Themes + Tailwind CSS
description: 'Learn how to customize Telerik and Kendo UI Themes with Tailwind CSS in KendoReact projects.'
components: ["general"]
slug: tailwind_customization
position: 20
---

# Themes + Tailwind CSS

This article demonstrates how to integrate Tailwind CSS with the Kendo UI Themes, showcasing the seamless use of utility classes alongside KendoReact components for a consistent and customizable design system.

<iframe src="https://telerik.github.io/kendo-react/kendo-react-tailwind/"  width="100%" height="720px" style="border: 1px solid rgba(0, 0, 0, 0.12);"></iframe>

The source code of the application is located in [this GitHub repository](https://github.com/telerik/kendo-react/tree/master/examples/kendo-react-tailwind).

> [Open the sample in a new tab](https://telerik.github.io/kendo-react/kendo-react-tailwind/) to explore its responsive design, built with Tailwind CSS utility classes.

## Customizing Styled KendoReact Components with Tailwind CSS

Since KendoReact components do not natively utilize Tailwind CSS utility classes in their markup, you cannot style them directly using Tailwind CSS class names. Instead, you can customize their visual appearance by overriding the corresponding Kendo UI theme variables with default Tailwind CSS variables or with your own custom variables.

```css
/* Define custom variables */
--custom-tw-blue: #3d57d8;
--custom-tw-red: #eb0249;
--custom-tw-info: #225eff;
```

```css
/* Override Kendo UI Theme variables */
:root {
    /* with Tailwind variables */
    --kendo-color-secondary: var(--color-red-600);

    /* with custom variable */
    --kendo-color-info: var(--custom-tw-info);

    /* with specific value */
    --kendo-color-success: #61dbfb;
}

/* Customize KendoReact component styles */
.k-card.header-card {
    border: 1px solid var(--custom-tw-blue);
}

.action-button {
    --kendo-color-primary: var(--custom-tw-red);
}
```

## Suggested Links

-   [Project Tracker - Sample Application with Tailwind CSS](slug:project-tracker-with-free-components)
-   [Free Project Tracker App Page Template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
-   [Unstyled Mode with Tailwind CSS](slug:tailwind_unstyled)
