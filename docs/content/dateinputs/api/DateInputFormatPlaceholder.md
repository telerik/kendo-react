---
title: DateInputFormatPlaceholder
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateInputFormatPlaceholder."
api_reference: true
type: inner_api
slug: api_dateinputs_dateinputformatplaceholder
---

# DateInputFormatPlaceholder
The union type which defines all possible format options of the DateInput placeholder.

The available options are:
* `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
* `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
* `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
* `'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.

`type` DateInputFormatPlaceholder = "wide" | "narrow" | "short" | "formatPattern" | [DateInputCustomFormatPlaceholder]({% slug api_dateinputs_dateinputcustomformatplaceholder %});
