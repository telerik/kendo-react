---
title: Header & Footer
description: 'Get started with the SchedulerHeader and SchedulerFooter components and learn how to customize them by providing custom components.'
components: ["scheduler"]
slug: overview_header_footer_scheduler
position: 5
---

# Header & Footer Customization

The KendoReact [Scheduler]({% slug overview_scheduler %}) renders a `navigation` and `viewSelector` components inside the `header` and `businessHoursToggle` component inside `footer`. Those components provides quick access to the available `views` and allows for fast `date` navigation or `business-hours` toggle.

> Currently, only the `header` and `footer` components are available for customization. We are actively working on exposing the `navigation`, `viewSelector` and `businessHoursToggle` components.

## Importing the default components

The default `header` is contained in the `@progress/kendo-react-scheduler` package:

```jsx-no-run
    // ES2015 module syntax
    import { SchedulerHeader, SchedulerFooter } from '@progress/kendo-react-scheduler';
```

```jsx-no-run
    // CommonJS format
    const { SchedulerHeader, SchedulerFooter } = require('@progress/kendo-react-scheduler');
```

## Customization

To customize the `header` or `footer` component, provide the corresponding [header]({% slug api_scheduler_schedulerprops %}#toc-header) or [footer]({% slug api_scheduler_schedulerprops %}#toc-footer) property to the `Scheduler`.

The following example demonstrates how to conditionally render the `header` and `footer` components, based on user configuration and add additional tools to the `footer`.

{% meta height:770 %}
{% embed_file header-footer/customization/func/app.tsx preview %}
{% embed_file header-footer/customization/func/main.tsx %}
{% embed_file header-footer/customization/func/custom-footer.tsx %}
{% embed_file header-footer/customization/func/toolbar-dropdown.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerHeader]({% slug api_scheduler_schedulerheaderprops %})
-   [API Reference of the SchedulerFooter]({% slug api_scheduler_schedulerfooterprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
