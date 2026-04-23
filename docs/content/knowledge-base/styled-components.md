---
title: Integration with Styled Components
description: How to style KendoReact components with Styled Components
type: how-to
page_title: How to use the Styled Components library for KendoReact components
slug: common-kb-styled-components
tags: component, react, kendo, kendoreact, style, customize, integration, components, styledComponents
res_type: kb
components: ["general"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

This KB article also answers the following question:

-   How to customize the look of the KendoReact components with the [styled-components library](https://www.styled-components.com/)

## Styling Specific Components

To style a specific KendoReact component, pass it to the [`styled`](https://www.styled-components.com/docs/api#styled) factory.

```jsx
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';

const StyledButton = styled(Button)`
    color: palevioletred;
    font-weight: bold;
`;
```

## Styling Nested Elements

Many KendoReact components render in such a way that multiple nested elements are induced. By default, the set styles are passed to the top DOM element of the KendoReact component.

The following example demonstrates how to style nested elements over the styled-components library. Alternatively, you can use the approach for nested styling in the [styled components documentation](https://www.styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting)

```jsx
// This will set the grey color and the bold font only over the Grid the elements.
const StyledGrid = styled(Grid)`
        color: palevioletred;
        & th {
            color: grey
            font-weight: bold;
        }
    `;
```

## Styling over Dynamically Computed Props

You can also customize the styles based on the props that are set to the `styled` component.

```jsx
const StyledButton = styled(Button)`
    color: palevioletred;
    font-weight: bold;
    ${(props) =>
        props.disabled
            ? css`
                  background: red;
              `
            : css`
                  background: green;
              `};
`;

<StyledButton disabled={true}>Disabled Button </StyledButton>;
```

## See Also

-   [Themes and Styling in KendoReact]({% slug themesandstyles %})
