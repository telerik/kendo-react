---
title: useKendoPaste
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the useKendoPaste."
api_reference: true
type: inner_api
slug: api_common_usekendopaste
---

# useKendoPaste
A React hook that subscribes a component to smart paste events.
When a SmartPasteButton dispatches a populate event, this hook will
call the onValueChange callback if the event contains a value for the specified field.

The field is identified by the `name` or `id` prop of the component.
Works with both KendoReact Form components and native HTML form elements.

```tsx
const inputRef = React.useRef<HTMLInputElement>(null);
const [value, setValue] = React.useState('');

// Using name prop as field identifier
useKendoPaste(inputRef, {
  fieldName: 'firstName', // matches the name prop
  onValueChange: (newValue) => setValue(newValue)
});

return <input ref={inputRef} name="firstName" value={value} onChange={(e) => setValue(e.target.value)} />;
```


#### Parameters
##### elementRef
<code>


RefObject&lt;"null" | Element&gt;


</code>
A ref to the DOM element that will be used to find the event target

##### options
<code>


[UseKendoPasteOptions]({% slug api_common_usekendopasteoptions %})


</code>
Configuration options for the smart paste subscription

