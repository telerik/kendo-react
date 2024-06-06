---
title: Adding Tooltips to Splitter Icons in KendoReact
description: Learn how to add tooltips to the expand and collapse icons of the Splitter component in KendoReact for enhanced user guidance.
type: how-to
page_title: How to Add Tooltips to KendoReact Splitter Icons for Better User Guidance
slug: how-to-add-tooltips-to-kendoreact-splitter-icons
tags: kendo,react,splitter,tooltip,ui,customization
res_type: kb
ticketid: 1620591
---

## Environment

| Product | Version |
| --- | --- |
| KendoReact Splitter | Current |

## Description

I am trying to add Kendo tooltips to the icons (expand and collapse) in the Splitter component within Kendo React. I need assistance with providing a code sample to achieve this customization.

This KB article also answers the following questions:
- How can I customize the Splitter component icons with tooltips in KendoReact?
- What is the method to add tooltips to the KendoReact Splitter's expand and collapse icons?
- Can tooltips be dynamically added to Splitter icons in a KendoReact application?

## Solution

To add tooltips to the expand/collapse icons of the KendoReact [Splitter](https://www.telerik.com/kendo-react-ui/components/layout/splitter/), follow these steps:

1. Use the `title` attribute for a simple HTML Tooltip by targeting the expand/collapse icon elements directly and setting their `title` attribute. This method provides a quick way to show tooltips but offers limited customization options.

   Example of adding the `title` attribute:

   ```javascript
   React.useEffect(() => {
     const leftIcon = document.getElementsByClassName('k-svg-icon k-svg-i-caret-alt-left k-icon-xs');
     if (leftIcon) {
       leftIcon[0].title = 'Collapse';
     }
     const rightIcon = document.getElementsByClassName('k-svg-icon k-svg-i-caret-alt-right k-icon-xs');
     if (rightIcon) {
       rightIcon[0].title = 'Expand';
     }
   }, []);
   ```

2. For more advanced tooltips using the KendoReact ToolTip, handle the `mouseover` and `mouseout` events of the arrow elements. In the `mouseover` event, set the title of the arrow element and then call the `handleMouseOver` method of the ToolTip component through its ref. Similarly, use the `mouseout` event to hide the tooltip by calling the `handleMouseOut` method.

   Example of integrating KendoReact ToolTip with event handlers:

   ```javascript
   // Define a ref for the ToolTip component
   const tooltip = React.useRef(null);

   // Add mouseover and mouseout event listeners to the icon elements
   React.useEffect(() => {
     const addTooltip = (className, title) => {
       const icon = document.getElementsByClassName(className);
       if (icon) {
         icon[0].title = title;
         icon[0].addEventListener('mouseover', (event) => {
           tooltip.current.handleMouseOver(event);
         });
         icon[0].addEventListener('mouseout', (event) => {
           tooltip.current.handleMouseOut(event);
         });
       }
     };
   
     addTooltip('k-svg-icon k-svg-i-caret-alt-left k-icon-xs', 'Collapse');
     addTooltip('k-svg-icon k-svg-i-caret-alt-right k-icon-xs', 'Expand');
   }, []);
   ```

For additional details on customizing the ToolTip, refer to the [ToolTip Customization](https://www.telerik.com/kendo-react-ui/components/tooltip/tooltip/tooltip-customization/) documentation.

## Notes

- The usage of `document.getElementsByClassName` should be handled carefully, especially in dynamic applications where elements can be rendered conditionally.
- Ensure that the ToolTip component is correctly initialized and available in your component tree to utilize its methods through refs.

## See Also

- [KendoReact Splitter Overview](https://www.telerik.com/kendo-react-ui/components/layout/splitter/)
- [KendoReact ToolTip Documentation](https://www.telerik.com/kendo-react-ui/components/tooltip/)
