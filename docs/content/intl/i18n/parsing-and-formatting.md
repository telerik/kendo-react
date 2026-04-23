---
title: Parsing and Formatting of Dates and Numbers
description: 'Load default and additional locale data when working with the KendoReact Internationalization component'
components: ["general"]
slug: parsingandformatting_intl
position: 40
---

# Parsing and Formatting of Dates and Numbers

The KendoReact Internationalization package utilizes the [Kendo UI Internationalization modules](https://github.com/telerik/kendo-intl/tree/master#readme) for date and number parsing and formatting, and builds on top of them to adapt them to the React context.

For more information on parsing and formatting date and number options, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/tree/master#readme) GitHub repository.

## Modules for Date and Number Operations

The available internationalization methods are based on the [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) data and are split into the following modules:

-   [Load Locales](#toc-loading-locales)
-   [Date parsing](#toc-date-parsing)
-   [Date formatting](#toc-date-formatting)
-   [Number parsing](#toc-number-parsing)
-   [Number formatting](#toc-number-formatting)
-   [General formatting](#toc-general-formatting)

### Using CLDR-JSON Data

When you parse and format dates and numbers for a locale that is different from the default `en-US` one, you have to [load CLDR data](#toc-loading-cldr-data).

As a data reference for all locales, the following examples use the [cldr-core](https://www.npmjs.com/package/cldr-core), [cldr-numbers-full](https://www.npmjs.com/package/cldr-numbers-full), and [cldr-dates-full](https://www.npmjs.com/package/cldr-dates-full) packages.

1. Install the needed CLDR packages by running the following command:

    ```sh-no-run
    npm i cldr-core cldr-numbers-full cldr-dates-full
    ```

1. Import and load the required files in your component from the following locations:

    - `cldr-core/supplemental/LOCALE_FILE.json`
    - `cldr-PACKAGE_NAME/main/LOCALE_NAME/LOCALE_FILE.json`

You can also import the data from the cldr-data package at the `cldr-data/main/LOCALE_NAME/LOCALE_FILE.json` location.

### Date Parsing

Date parsing converts a string into a `Date` object by using the specific settings of the locale. For more information on date parsing, refer to the `kendo-intl` [Date Parsing section](https://github.com/telerik/kendo-intl/blob/develop/docs/date-parsing/index.md).

{% meta height:300 %}
{% embed_file date-parsing/func/app.tsx preview %}
{% embed_file date-parsing/func/main.tsx %}
{% endmeta %}

### Date Formatting

Date formatting converts a `Date` object into a human-readable string by using the specific settings of the locale. For more information on date formatting, refer to the `kendo-intl` [Date Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md).

{% meta height:300 %}
{% embed_file date-format/func/app.tsx preview %}
{% embed_file date-format/func/main.tsx %}
{% endmeta %}

### Number Parsing

Number parsing converts a string into a `Number` object by using the specific settings of the locale. For more information on number parsing, refer to the `kendo-intl` [Number Parsing section](https://github.com/telerik/kendo-intl/blob/develop/docs/num-parsing/index.md).

{% meta height:300 %}
{% embed_file number-parsing/func/app.tsx preview %}
{% embed_file number-parsing/func/main.tsx %}
{% endmeta %}

### Number Formatting

Number formatting converts a `Number` object into a human-readable string using the specific settings of the locale. For more information on number formatting, refer to the `kendo-intl` [Number Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/num-formatting/index.md).

{% meta height:300 %}
{% embed_file number-formatting/func/app.tsx preview %}
{% embed_file number-formatting/func/main.tsx %}
{% endmeta %}

### General Formatting

General formatting provides methods for independent placeholder and type formatting by using the specific settings of the locale. For more information on general formatting, refer to the `kendo-intl` [General Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/general-formatting/index.md).

{% meta height:300 %}
{% embed_file general-formatting/func/app.tsx preview %}
{% embed_file general-formatting/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [IntlService API Reference]({% slug api_intl_intlservice %})
-   [LocalizationService API Reference]({% slug api_intl_localizationservice %})
-   [Troubleshooting]({% slug troubleshooting_intl %})
