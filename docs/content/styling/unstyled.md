---
title: Unstyled Mode
page_title: 'React Unstyled Mode Components - KendoReact'
description: 'React unstyled components provide barebones functionality without default styling, allowing full customization.'
components: ['general']
slug: overview_unstyled
position: 15
tier: free
---

# React Unstyled Mode Components

The Kendo React Unstyled components mode gives you complete control over the appearance of the KendoReact components by providing the ability to replace the classes that are used inside the components.

The [UnstyledContext]({% slug api_common_unstyledcontext %}) provider used to achieve the unstyled mode of the KendoReact library is distributed through NPM under the [`@kendo-react-common`](https://www.npmjs.com/package/@progress/kendo-react-common) package.

> Want to contribute to the development of the Unstyled mode? Have suggestions for improvement? Head over to this [GitHub discussion](https://github.com/telerik/kendo-react/discussions/2549) and share your thoughts!

## What is KendoReact Unstyled Mode?

Unstyled mode refers to using a version of the KendoReact components that comes without the library’s default CSS classes. This gives you more flexibility, enabling you to:

-   **Apply Custom Styles**&mdash;You can add your own CSS classes to match the exact look you want without being constrained by default styles.
-   **Avoid Conflicting Styles**&mdash;Predefined styles sometimes conflict with an application custom styles, leading to difficult-to-debug issues. Using unstyled components helps developers avoid these problems.
-   **Reduce Bundle Size**&mdash;By not importing default Kendo Themes styles, the bundle size can be smaller, leading to performance benefits.

> The Unstyled mode is currently available only for some of the components in the KendoReact suite. You can find an up-to-date-list [here](#toc-kendo-react-unstyled-components).

## How to Enable the Kendo React Unstyled Mode?

To use the Unstyled mode on the global level simply wrap the desired KendoReact component(s) in an [UnstyledContext]({% slug api_common_unstyledcontext %}) provider and pass the predefined CSS classes object as a value to the provider. The CSS classes for the KendoReact components supporting unstyled mode are available in the corresponding objects of the [AllClassStructure API](slug:api_common_allclassstructure) article.

```jsx
import { UnstyledContext } from '@progress/kendo-react-common';

<UnstyledContext.Provider value={formPreset}>
    {/* Add the desired unstyled components here, e.g.: */}
    <Form
        ...
    />
</UnstyledContext.Provider>
```

The `formPreset` preset in the snippet above is a subset of JSON based [`uForm`](slug:api_common_allclassstructure#toc-uform) object responsible for applying the needed classes for the form component by providing options to add class for [its different state and variations](slug:api_common_formclasses). Here is an example of the preset of the form:

```jsx
import { AllClassStructure } from '@progress/kendo-react-common';

const formPreset: AllClassStructure = {
    uForm: {
        form: {
            main: 'custom-form-main-class-name',
            size: {
                prefix: 'custom-form-size-prefix-class-name',
                small: 'custom-form-size-small-class-name',
                medium: 'custom-form-size-medium-class-name',
                large: 'custom-form-size-large-class-name'
            },
            orientation: {
                horizontal: 'custom-form-orientation-horizontal-class-name',
                vertical: ''
            }
        },
        field: {
            main: 'custom-filed-main-class-name',
            isRtl: ''
        }
    }
};
```

### Demo

The following sample demonstrates how to change the appearance of the unstyled components in KendoReact with [Tailwind](https://tailwindcss.com/docs/installation) v3. The [UnstyledContext]({% slug api_common_unstyledcontext %}) provider receives a predefined preset of Tailwind classes that are used for unstyled react component library styling.

{% meta height:660 %}
{% embed_file unstyled/app.tsx preview %}
{% embed_file unstyled/main.tsx %}
{% embed_file unstyled/tailwind-preset.ts %}
{% endmeta %}

### Sample Project

For the complete sample project, showcasing the Tailwind integration with the Unstyled mode of the KendoReact components, refer to the GitHub repository on using KendoReact components in Unstyled mode and [Tailwind CSS v3](https://github.com/telerik/kendo-react/tree/master/examples/kendo-unstyled-tailwind), or [Tailwind CSS v4](https://github.com/telerik/kendo-react/tree/master/examples/kendo-unstyled-tailwind-v4).

## Combining Kendo Themes and Unstyled Mode

You can also combine [Kendo Themes]({% slug themesandstyles %}) with the Unstyled mode of the KendoReact components as the unstyled mode is applied only to the components wrapped inside an [UnstyledContext]({% slug api_common_unstyledcontext %}) provider. This approach allows you to apply predefined Kendo Themes styles to some components (e.g., that are not supporting Unstyled mode) while using unstyled mode for others.

## Using Third-Party CSS Libraries with Unstyled Mode

You can also style your unstyled KendoReact components by integrating third-party CSS libraries, like Tailwind CSS, Uno CSS, StyleX, etc. The React unstyled components come without any default styles, allowing you to easily add utility classes or predefined styles from your chosen CSS library.

You can see a sample integration of the unstyled KendoReact components with Tailwind CSS v4 [here](slug:tailwind_unstyled#demo).

## Using CSS-in-JS with Unstyled Mode

Unstyled mode works well with CSS-in-JS libraries as it allows you to define your component styles dynamically. This approach is useful when your application requires condition-based styling or component-scoped styles that are created at runtime. CSS-in-JS allows you to write styles programmatically, which fits well with the flexibility of KendoReact components in unstyled mode, giving you full control over their appearance in a modular and scoped manner.

## Headless React Components and Logic Separation

The unstyled mode also refers to React headless components, which are components that provide the logic but leave the presentation layer entirely to the developer. It is important to note that when using an unstyled React components library, you are responsible for adding proper styles for focus states, active states, hover interactions, and other accessibility features. Essentially, the headless React components provides the underlying logic, making it easy to focus on accessible and well-structured UI, while fully customizing the visual appearance.

## Kendo React Unstyled Components

The following KendoReact components support Unstyled mode:

-   [Animations]({% slug overview_animation %})
-   [Buttons]({% slug overview_buttons %})&mdash;Button, ButtonGroup and DropDownButton
-   [Common]({% slug overview_common %})&mdash;SvgIcon
-   [DateInputs]({% slug overview_dateinputs %})&mdash;DateInput, DateTimePicker, TimePicker
-   [DropDowns]({% slug overview_dropdowns %})&mdash;DropdownList, Combobox
-   [Form]({% slug overview_form %})
-   [Inputs]({% slug overview_inputs %})&mdash;Input, TextBox, MaskedTextBox, RadioButton, RadioGroup
-   [Labels]({% slug overview_labels %})&mdash;Label, Floating Label, Hint, Error
-   [Popup]({% slug overview_popup %})

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [React UI Common Utilities AllClassStructure API](slug:api_common_allclassstructure)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Progress Design System Kit](https://www.telerik.com/design-system/docs/foundation/color/)
-   [Unstyled + Tailwind v4](slug:tailwind_unstyled)
