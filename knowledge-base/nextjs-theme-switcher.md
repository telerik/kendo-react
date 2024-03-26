---
title: Next.js Theme Switcher
description: An example on how to implement a Kendo theme switcher with Next.js.
type: how-to
page_title: Change between the kendo themes in Next.js - KendoReact
slug: nextjs-theme-switcher
tags: nextjs, theme switcher, kendo themes switcher, nextjs theme switcher
ticketid: 1624402
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>7.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I want to implement a theme switcher that changes between all the different kendo [theme swatches](https://www.telerik.com/design-system/docs/themes/customization/swatches/) in KendoReact.

## Solution

You can achieve this using CDN imports for the themes. Basically, in the main `layout.js` file, add the link to the default main swatch inside the head element. In addition, the `ThemeSwitcher` component can be added in the body, where this will always render it no matter the route.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
        rel="stylesheet"
        data-kendo="true"
        href={`https://cdn.kendostatic.com/themes/7.2.1/default/default-main.css`}
        />
      </head>
      <body className='k-body'>
      <ThemeSwitcher />
      {children}
      </body>
    </html>
  )
}
```

For the ThemeSwitcher, the most convenient component is the KendoReact [DropDownList]({% slug dropdownlist_overview %}) component. This is because it supports [grouping]({% slug dropdownlist_overview %}), rendering [custom items]({% slug dropdownlist_custom-rendering %}), and [binding]({% dropdownlist_binding %}) its data to an array of objects.

Basically, the main idea in this `ThemeSwitcher` component is to change the `href` attribute of the link in the onChange event handler of the DropDownList using `link.setAttribute`.

```jsx
const handleChange = (event) => {
        const link = document.head.querySelector("link[data-kendo");
        if (link) {
            link.setAttribute(
                "href",
                `https://cdn.kendostatic.com/themes/7.2.1/${event.target.value.swatch}.css`
            )
        }
    }
```


This approach is demonstrated in [this StackBlitz example](https://stackblitz.com/edit/stackblitz-starters-ajmsqv?description=The%20React%20framework%20for%20production&file=app%2Fcomponents%2FThemeSwitcher.jsx&title=Next.js%20Starter).

