---
title: Troubleshooting
description: "Learn about the issues that may occur when using the Kendo UI services for parsing and formatting of dates and numbers in React projects."
components: ["general"]
slug: troubleshooting_intl
position: 60
---

# Troubleshooting

This article provides solutions for issues you might encounter while working with the KendoReact Internationalization.

## Error Messages

When you use the services for parsing and formatting dates and numbers, an error might occur. The error messages are self-explanatory and display a unique name and a corresponding message.

|Error Code             |Reason |Solution
|:---                   |:---   |:---
|<span id="no-locale">`"NoLocale"`</span>                    |The data for the locale is missing. |[Load the data for the locale]({% slug loadingdata_intl %}). |
|<span id="no-currency-display">`"NoCurrencyDisplay"`</span> |The default locale does not include the data for all currencies. |[Load the currencies data for the `"en"` locale]({% slug loadingdata_intl %}).
|<span id="no-currency-region">`"NoCurrencyRegion"`</span>   |The region currencies data is missing. |[Load the `cldr-core/supplemental/currencyData` data]({% slug loadingdata_intl %}#toc-loading-cldr-data). |
|<span id="no-currency">`"NoCurrency"`</span>                |The currencies data for the locale is missing. |[Load the `cldr-numbers-full/main/LOCALE/currencies` data for the locale]({% slug loadingdata_intl %}#toc-loading-cldr-data). |
|<span id="no-gmt-info">`"NoGMTInfo"`</span>                 |The data for the GMT format of the locale is missing. |[Load the `cldr-dates-full/main/LOCALE/timeZoneNames` data for the locale]({% slug loadingdata_intl %}#toc-loading-cldr-data).
|<span id="no-week-data">`"NoWeekData"`</span>               |The data for the first day of the week in the locale is missing. |[Load the `cldr-core/supplemental/weekData` data]({% slug loadingdata_intl %}#toc-loading-cldr-data).
|<span id="no-first-day">`"NoFirstDay"`</span>               |The default locale includes only the `'en-US'` first day info. |[Load the `cldr-core/supplemental/weekData` data]({% slug loadingdata_intl %}#toc-loading-cldr-data).
|<span id="no-date-filed-names">`"NoDateFieldNames"`</span>  |The information about the date field names of the locale is missing. |[Load the `cldr-dates-full/main/LOCALE/dateFields` data for the locale]({% slug loadingdata_intl %}#toc-loading-cldr-data).
|<span id="no-valid-currency">`"NoValidCurrency"`</span>     |Cannot determine a default currency for the locale. | Explicitly specify the currency with the format options. For example, `formatNumber(value, { style: "currency", currency: "EUR" })`.

## Suggested Links

* [IntlService API Reference]({% slug api_intl_intlservice %})
