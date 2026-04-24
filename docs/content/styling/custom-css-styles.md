---
title: Override Theme Styles
description: 'General rules of thumb to override styles of the KendoReact themes.'
slug: custom_css_styles
position: 27
---

# Override Theme Styles

In some cases you may need to make a small change to the appearance of a component, while still using the same [built-in](slug:themesandstyles) or [custom](slug:customizingthemes) theme.

This article provides high-level guidance about the knowledge and tools required to override existing CSS styles without changing the theme's CSS file.

> When your application requires a large number of CSS customizations, it may be more practical to use a different approach. In such cases, refer to the [Customize Themes](slug:customizingthemes) article.

## CSS Utilities

The [Kendo UI CSS Utilities](https://www.telerik.com/design-system/docs/utils/get-started/introduction/) offer a collection of utility classes for styling elements without writing custom CSS. By adding predefined classes, like `k-rounded-full` for rounded corners, you can modify the appearance of an element effortlessly.

> tip The [KendoReact Agentic UI Generator](slug:agentic_ui_generator_getting_started) can automatically apply these CSS utility classes for you based on natural language prompts. Describe your desired layout, spacing, or typography, and the AI-powered generator will select and apply the appropriate utility classes from the Progress Design System.

```html
<TextBox className="k-rounded-full" placeholder="Username"></TextBox>
```

These utilities are available as a [standalone package](https://www.telerik.com/design-system/docs/utils/get-started/installation/) that simplifies styling by eliminating the need of custom class names and complex CSS rules.

## CSS Knowledge

To override an existing style, you implement another [conflicting style](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#conflicting_rules). To make sure the new style takes precedence, it should have a higher specificity. If it has the same specificity, then the style should come later in the order of CSS rules and files on the page.

Check out the following resources for more details about CSS specificity, combinators and selectors:

-   [MDN Documentation for CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). You may prefer a [less formal explanation](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/).
-   How to easily [calculate CSS Specificity](https://stuffandnonsense.co.uk/blog/css-specisithity).
-   [CSS Combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) provide different ways to target an element, depending on its place in the DOM structure. Combinators are often called ["selectors"](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors), which is different. Developers most commonly use descendant or child combinators, but there are many other options.

## Tools

To see what CSS styles are applied to an HTML element, use the browser's developer tools. Learn more about how to use the developer tools efficiently in the following articles:

-   [Inspect the HTML output of a page](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#inspect-the-generated-html-of-a-control).
-   [See the applied styles for a specific element](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#see-the-applied-styles).
-   [Inspect elements that hide automatically and disappear from the DOM](<https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools-(part-2)#inspect-auto-hiding-tooltips-and-elements>).

## React CSS Styling Approaches

In React applications, there are several ways to apply custom CSS rules to KendoReact components:

-   **Global CSS files**: Styles defined in global CSS files (such as `src/index.css` or imported CSS files) will apply throughout the application and affect KendoReact components.
-   **CSS Modules**: When using CSS Modules, you can apply styles by importing the CSS file and using the generated class names. Note that global selectors or `:global()` wrapper may be needed for styling third-party components.

    ```tsx
    import styles from './MyComponent.module.css';
    import { Button } from '@progress/kendo-react-buttons';

    function MyComponent() {
        return <Button className={styles.customButton}>Click me</Button>;
    }
    ```

## Best Practices

When implementing CSS overrides, it's usually best to set custom CSS classes through the component's exposed parameters and event arguments. This brings the following benefits:

-   No need to be familiar with the components' HTML rendering and built-in CSS styles, although this knowledge is recommended and cannot be fully avoided.
-   The custom CSS code in the application is more future-proof if a [rendering change](slug:versions-with-rendering-changes) occurs.
-   The custom CSS classes may follow a naming convention of the app, instead of the naming convention of the Telerik themes.

<!-- The example below demonstrates how to set custom CSS classes for the Grid and the ComboBox components. -->

## Suggested Links

-   [Design System Documentation](https://www.telerik.com/design-system/docs/)
-   [Theme CSS Utilities](https://www.telerik.com/design-system/docs/utils/get-started/introduction/)
-   [Customize Default Theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/customization/)
-   [KendoReact Components](https://www.telerik.com/kendo-react-ui/components)
