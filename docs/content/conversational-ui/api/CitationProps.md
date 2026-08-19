---
title: CitationProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the CitationProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_citationprops
---

# CitationProps
Defines the props for the `Citation` component.

`Citation` renders as an inline chip-like element that represents one or more
source references. It is fully self-contained: hovering, clicking, or
activating (`Enter`/`Space`, or touch) the citation shows its own resource
details popover automatically — no separate popover component needs to be
rendered or wired up by the host. `onOpen` is an informational event fired
alongside a click/keyboard activation.

Extends `React.HTMLAttributes<HTMLDivElement>` to allow passing standard HTML
attributes (e.g. `className`, `style`, `id`) directly to the root element.
Does NOT extend `ChipProps` — `Chip` is used internally.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### additionalCount?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Whether to show the `+N` additional-sources indicator next to the label,
where `N` is `sources.length - 1`. Does not affect which source is used
to derive the default `label`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### bodyTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CitationBodyTemplateProps]({% slug api_conversational-ui_citationbodytemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default rendering of the resource
details body (title, description, URL for each source).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Inline chip label. When omitted, derived from the first source's URL/domain.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [CitationOpenEvent]({% slug api_conversational-ui_citationopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the citation's resource details are about to be
shown, after a click or keyboard/touch activation. This event is
informational — `Citation` shows its own popover automatically and
does not require the host to open or close anything in response.

```tsx
<Citation sources={sources} onOpen={(e) => console.log(e.sources)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showOn?


</td>
<td type class="table-cell-type">


<code>


[CitationShowOn]({% slug api_conversational-ui_citationshowon %})


</code>


</td>
<td class="table-cell-default">


<code>


'hover'


</code>


</td>
<td class="table-cell-comment">


Specifies when the Citation popover becomes visible.

The available options are:
- `hover` — Displays the popover when the mouse hovers over the chip.
- `click` — Displays the popover when the chip is clicked.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sources?


</td>
<td type class="table-cell-type">


<code>


[CitationSource]({% slug api_conversational-ui_citationsource %})[]


</code>


</td>
<td class="table-cell-default">


<code>


[]


</code>


</td>
<td class="table-cell-comment">


Source resources associated with the citation, in display order.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">


<code>


globeIcon


</code>


</td>
<td class="table-cell-comment">


Chip icon.
Pass an icon object from `@progress/kendo-svg-icons`.





</td>
</tr>
</tbody>
</table>



