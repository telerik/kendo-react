---
title: Integrating Custom SVG Icons into React Applications
description: Learn how to seamlessly integrate custom SVG icons into your React applications using the SVGIcon component in KendoReact.
type: how-to
page_title: How to Use Custom SVG Icons with KendoReact SVGIcon Component
slug: integrate-custom-svg-icons-react
tags: react, svgicon, custom-icons, svg, kendo-ui-react, react-common-utilities
res_type: kb
ticketid: 1679511
components: ["svgicon"]
---

## Environment

<table>
    <tbody>
		<tr>
	    	<td>Product Version</td>
	    	<td>10.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact SVGIcon</td>
	    </tr>
    </tbody>
</table>

## Description

Integrating custom SVG icons into a React application involves using the SvgIcon component. The process generally requires creating an SvgIcon object and inserting the SVG path directly. This knowledge base article answers the following questions:

-   How can I import SVG files directly into my React project?
-   What is the best method to convert SVG files into SvgIcon objects in React?

## Solution

To integrate custom SVG icons into your React application more efficiently, consider importing SVG files as strings. This approach allows you to dynamically convert SVG files into SvgIcon components without manually extracting paths or creating objects for each icon. Depending on your build system, you can utilize specific features or loaders to import SVG content directly. Here are two methods to achieve this:

### Importing SVG as a String

1. **Using Vite or Webpack**: If your project uses Vite, you can import SVG files as strings using the `?raw` import feature. For Webpack, employ the `raw-loader` to achieve a similar outcome.

    - Vite example:

        ```js
        import myIconSVG from './path-to-your/my-icon.svg?raw';
        ```

    - Webpack example:
        ```js
        import myIconSVG from 'raw-loader!./path-to-your/my-icon.svg';
        ```

2. After importing the SVG as a string, you can directly use it to set the content of an SvgIcon object:

    ```jsx
    const myIcon = {
        name: 'myIcon',
        content: myIconSVG,
        viewBox: '0 0 24 24'
    };
    ```

3. After creating an SvgIcon object you are ready to use it:

    ```jsx
    <Button svgIcon={myIcon}></Button>
    ```

## See Also

-   [SvgIcon Customization - KendoReact](slug://customization_svgicon)
-   [Importing Asset as String in Vite](https://vite.dev/guide/assets.html#importing-asset-as-string)
-   [Webpack Raw Loader Documentation](https://v4.webpack.js.org/loaders/raw-loader/)
