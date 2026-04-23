---
title: MarginEnum
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the MarginEnum."
api_reference: true
type: inner_api
slug: api_common_marginenum
---

# MarginEnum
The possible values for the Default and Material themes are:
* `xsmall` &mdash;Applies 4px margin.
* `small` &mdash;Applies 8px margin.
* `medium` &mdash;Applies 12px margin.
* `large` &mdash;Applies 16px margin.
* `xlarge` &mdash;Applies 24px margin.
* `thin` &mdash;Applies 2px margin.
* `hair` &mdash;Applies 1px margin.
* `number` &mdash;Passing a number will apply a margin of 4 times the passed number in pixels. The minimum number value is 0 and the maximum is 24.

The possible values for the Bootstrap theme are:
* `xsmall` &mdash;Applies 0.25rem margin.
* `small` &mdash;Applies 0.5rem margin.
* `medium` &mdash;Applies 0.75rem margin.
* `large` &mdash;Applies 1rem margin.
* `xlarge` &mdash;Applies 1.25rem margin.
* `thin` &mdash;Applies 0.125rem margin.
* `hair` &mdash;Applies 0.0625rem margin.
* `number` &mdash;Passing a number will apply a margin equal to the passed number divided by 4 in rem units.
The minimum number value is 0 and the maximum is 24.

`type` MarginEnum = "xsmall" | "small" | "medium" | "large" | "xlarge" | "thin" | "hair" | `number`;
