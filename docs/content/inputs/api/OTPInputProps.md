---
title: OTPInputProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the OTPInputProps."
api_reference: true
type: inner_api
slug: api_inputs_otpinputprops
---

# OTPInputProps
Represents the props for the KendoReact
[OTPInput](https://www.telerik.com/kendo-react-ui/components/inputs/api/OTPInput) component.


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


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `aria-describedby` attribute on the OTPInput wrapper element.





</td>
</tr>
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


Sets the `aria-label` attribute on the OTPInput wrapper element.




```tsx
<OTPInput ariaLabel="Enter your 6-digit code" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `aria-labelledby` attribute on the OTPInput wrapper element.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial value of the OTPInput (uncontrolled mode).
Once set, subsequent updates are managed internally.

```tsx
<OTPInput defaultValue="12" length={6} />
```



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


When `true`, disables the OTPInput so that it cannot be interacted
with and receives the `k-disabled` CSS class.




```tsx
<OTPInput disabled={true} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `fillMode` of the component.

The available options are:
- `'solid'`
- `'flat'`
- `'outline'`

```tsx
<OTPInput fillMode="outline" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupLength?


</td>
<td type class="table-cell-type">


<code>


number | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the length of each group of input cells.

- Provide a `number` to give all groups the same length.
- Provide a `number[]` to assign different lengths to each group.

The sum of all group lengths must equal `length`.

```tsx
// Two groups of 3: "XXX-XXX"
<OTPInput length={6} groupLength={3} separator="-" />

// Groups of 4-4-4: "XXXX-XXXX-XXXX"
<OTPInput length={12} groupLength={[4, 4, 4]} separator="-" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` attribute on the OTPInput wrapper element.

```tsx
<OTPInput id="otp-code" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


React.InputHTMLAttributes&lt;HTMLInputElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional HTML attributes on every inner `<input>` element.
Attributes that are required for the component to work correctly cannot be overridden.

```tsx
<OTPInput inputAttributes={{ autoComplete: 'off' }} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### length?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


4


</code>


</td>
<td class="table-cell-comment">


Sets the total number of individual input cells.




```tsx
<OTPInput length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `name` attribute used when the component participates in an
HTML form. A hidden `<input>` with this name and the current value
is rendered for native form submission.

```tsx
<form>
  <OTPInput name="verificationCode" length={6} />
</form>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [OTPInputBlurEvent]({% slug api_inputs_otpinputblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the entire OTPInput loses focus (not on every
inter-cell navigation).

```tsx
<OTPInput onBlur={(e) => console.log('blurred')} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [OTPInputChangeEvent]({% slug api_inputs_otpinputchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes the value of any input cell.

```tsx
<OTPInput onChange={(e) => console.log(e.value)} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [OTPInputFocusEvent]({% slug api_inputs_otpinputfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when any input cell receives focus.

```tsx
<OTPInput onFocus={(e) => console.log('focused cell index', e.cellIndex)} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a placeholder character shown in each empty input cell.

```tsx
<OTPInput placeholder="·" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### readOnly?


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


When `true`, sets the OTPInput to read-only mode.




```tsx
<OTPInput readOnly={true} value="123456" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


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


Marks the field as required for HTML5 constraint validation.







```tsx
<OTPInput required={true} length={6} />
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




</td>
<td class="table-cell-comment">


Configures the `rounded` property of the component.

The available options are:
- `'small'`
- `'medium'`
- `'large'`
- `'full'`
- `'none'

```tsx
<OTPInput rounded="full" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### separator?


</td>
<td type class="table-cell-type">


<code>


string | [OTPSeparatorIcon]({% slug api_inputs_otpseparatoricon %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the separator rendered between groups of input cells.
Only effective when `groupLength` is set.

- Provide a `string` to render a text separator.
- Provide an `OTPSeparatorIcon` to render an icon separator.

```tsx
// Text separator
<OTPInput length={6} groupLength={3} separator="-" />

// SVG icon separator
<OTPInput length={6} groupLength={3} separator={{ type: 'svgIcon', value: minusIcon }} />
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




</td>
<td class="table-cell-comment">


Configures the `size` of the component.

The available options are:
- `'small'`
- `'medium'`
- `'large'`

```tsx
<OTPInput size="large" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### spacing?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


When `true`, renders the input cells as separate boxes with spacing
between them. When `false`, renders them as adjacent (joined) cells.




```tsx
<OTPInput spacing={false} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[OTPInputType]({% slug api_inputs_otpinputtype %})


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Sets the input type.




```tsx
<OTPInput type="number" length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When `false`, renders the component in an invalid visual state.

```tsx
<OTPInput valid={false} length={6} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current value of the OTPInput (controlled mode).
Unfilled input cells are represented with a space (`' '`).

```tsx
<OTPInput value="12 4" length={4} onChange={handleChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### webMcp?


</td>
<td type class="table-cell-type">


<code>


boolean | WebMcpProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables Web MCP tool registration for this component.
Requires a parent `WebMcpProvider` from `@progress/kendo-react-webmcp`.

Pass `true` for defaults or an object for fine-grained control.
When absent or `false`, zero webMcp overhead.

```tsx
// Boolean — use provider's dataName
<OTPInput webMcp length={6} onChange={handleChange} />

// Config object — override dataName per component
<OTPInput webMcp={{ dataName: 'verificationCode' }} length={6} onChange={handleChange} />
```



</td>
</tr>
</tbody>
</table>



