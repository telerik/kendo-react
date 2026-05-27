---
title: useWebMcpRegister
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the useWebMcpRegister."
api_reference: true
type: inner_api
slug: api_common_usewebmcpregister
---

# useWebMcpRegister
Tiny hook that components call to register themselves with a parent
`WebMcpProvider`. Only runs when `webMcp` is truthy — zero cost otherwise.

The component package only needs this single call — all tool creation
logic lives in the provider's adapter (in `@progress/kendo-react-webmcp`).

#### Parameters
##### componentType
<code>


string


</code>
Identifier string, e.g. 'textbox', 'grid'.

##### handle
<code>


RefObject&lt;unknown&gt;


</code>
Ref to the component's imperative handle.

##### props
<code>


unknown


</code>
The current React props.

##### webMcp?
<code>


boolean | Record&lt;string&gt; | [WebMcpProps]({% slug api_common_webmcpprops %})


</code>
The component's `webMcp` prop. `true` for defaults, object for config.

