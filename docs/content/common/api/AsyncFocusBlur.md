---
title: AsyncFocusBlur
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the AsyncFocusBlur."
api_reference: true
type: inner_api
slug: api_common_asyncfocusblur
---

# AsyncFocusBlur
An utility High-order Component for asynchronous focus/blur handling.

By default, the `onFocus` and `onBlur` callbacks are called every time a child components receives/loses focus.
Use this utility HOC for scenarios where you need to know if the parent has received focus for the first time, or completely lost focus.




#### Parameters
##### _
<code>


AsyncFocusBlurArgs&lt;any&gt; [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { children: (args: AsyncFocusBlurArgs&lt;any&gt;) => ReactNode; }


</code>


#### Returns
<code>


Element


</code>

