---
title: provideIntlService
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the provideIntlService."
api_reference: true
type: inner_api
slug: api_intl_provideintlservice
---

# provideIntlService
Provides an internationalization service. When the passed component is a direct or indirect child of `IntlProvider`, the returned service uses the locale of the provider. Otherwise, uses `en` as a default locale. To handle locale changes, call the method on each `render`.

#### Parameters
##### component
<code>


Component&lt;undefined&gt;


</code>


#### Returns
<code>


[IntlService]({% slug api_intl_intlservice %})


</code>

