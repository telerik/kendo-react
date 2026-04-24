---
title: SmartPasteButtonProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SmartPasteButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_smartpastebuttonprops
---

# SmartPasteButtonProps
Represents the props for the SmartPasteButton component.
Extends ButtonProps with smart paste specific functionality for AI-powered form filling.


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


#### disabled?


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


Specifies if the Button is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/disabled-state)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### endIcon?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets an SVG icon or custom element after the content of the Button. For the custom component, consider using
[Phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content).
Do not use [Interactive content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"link" | "flat" | "solid" | "outline" | "clear"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button fillMode="outline">Outline Button</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### formFields?


</td>
<td type class="table-cell-type">


<code>


[SmartPasteFormField]({% slug api_buttons_smartpasteformfield %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of SmartPasteFormField holding the fields info used by the form that the button resides in.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the name for an existing icon in a KendoReact theme ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/icons)). The icon renders inside the Button by a `span.k-icon` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a CSS class — or multiple classes separated by spaces — which apply to a `span` element inside the Button ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/icons)). Allows you to use custom icons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconSize?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the SVG icon that displays inside the Button.




```tsx
<Button svgIcon={searchIcon} iconSize="large">Search</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageAlt?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the alternative text of the image that renders inside the Button component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a URL which is used as an `img` element inside the Button ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/icons)). The URL can be relative or absolute. If relative, it evaluates in relation to the URL of the web page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SmartPasteClickEvent]({% slug api_buttons_smartpasteclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the SmartPaste button is clicked.
The event includes the clipboard content, form fields, and a setResponse function
to populate the form with the AI service response.

```tsx
<SmartPasteButton
  onClick={async (e) => {
    const response = await fetch('/api/smartpaste', {
      method: 'POST',
      body: JSON.stringify(e.requestData)
    });
    const data = await response.json();
    e.setResponse(data);
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).

The available options are:
- `small`
- `medium`
- `large`
- `full`
- `none`




```tsx
<Button rounded="full">Rounded Button</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected state of the Button. You can use this for controlled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button size="large">Large Button</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### startIcon?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets an SVG icon or custom element before the content of the Button. For the custom component, consider using
[Phrasing content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#phrasing_content).
Do not use [Interactive content](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#interactive_content).


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




</td>
<td class="table-cell-comment">


Defines the SVG icon that renders inside the Button component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button themeColor="primary">Primary Button</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `title` HTML attribute of the Button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### togglable?


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


Provides visual styling that shows if the Button is selected ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/toggleable)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### unstyled?


</td>
<td type class="table-cell-type">


<code>


ButtonsClassStructure


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unstyled option classes.


</td>
</tr>
</tbody>
</table>



