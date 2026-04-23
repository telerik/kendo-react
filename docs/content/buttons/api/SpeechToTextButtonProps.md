---
title: SpeechToTextButtonProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the SpeechToTextButtonProps."
api_reference: true
type: inner_api
slug: api_buttons_speechtotextbuttonprops
---

# SpeechToTextButtonProps
Represents the props of the [KendoReact SpeechToTextButton component](https://www.telerik.com/kendo-react-ui/components/buttons/speechtotextbutton).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The accessible label of the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the SpeechToTextButton ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/speechtotextbutton/appearance#custom-styling)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### continuous?


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


Specifies whether the speech recognition should continue until explicitly stopped.





</td>
</tr>
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


Specifies if the SpeechToTextButton is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/speechtotextbutton/disabled-state)).





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


#### integrationMode?


</td>
<td type class="table-cell-type">


<code>


"none" | "webSpeech"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which speech recognition engine or integration the component should use.
This allows the component to operate in different environments or use alternative implementations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### interimResults?


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


Specifies whether to return interim results.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### lang?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'en-US'


</code>


</td>
<td class="table-cell-comment">


The valid BCP 47 language tag to use for speech recognition.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxAlternatives?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Specifies the maximum number of alternative transcriptions to return.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onEnd?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that is called when speech recognition ends.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onError?


</td>
<td type class="table-cell-type">


<code>


(event: [SpeechToTextErrorEvent]({% slug api_buttons_speechtotexterrorevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that is called when an error occurs during speech recognition.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResult?


</td>
<td type class="table-cell-type">


<code>


(event: [SpeechToTextResultEvent]({% slug api_buttons_speechtotextresultevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that is called when a speech recognition result is available.
The event contains the `isFinal` flag and an array of alternatives.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStart?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that is called when speech recognition starts.


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


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the SpeechToTextButton ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/speechtotextbutton/appearance#custom-styling)).


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



