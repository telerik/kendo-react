---
title: subscribeToKendoPaste
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the subscribeToKendoPaste."
api_reference: true
type: inner_api
slug: api_common_subscribetokendopaste
---

# subscribeToKendoPaste
Subscribe to smart paste events for class components.
Call this in componentDidMount and store the result.
Call unsubscribe() in componentWillUnmount.




```tsx
class MyComponent extends React.Component {
  private KendoPasteSubscription?: KendoPasteSubscription;

  componentDidMount() {
    this.KendoPasteSubscription = subscribeToKendoPaste(this.element, {
      fieldName: this.props.name,
      onValueChange: (value) => this.handleSmartPasteValue(value)
    });
  }

  componentWillUnmount() {
    this.KendoPasteSubscription?.unsubscribe();
  }
}
```


#### Parameters
##### element
<code>


undefined | "null" | Element


</code>
The DOM element to use for finding the event target

##### options
<code>


[KendoPasteSubscriptionOptions]({% slug api_common_kendopastesubscriptionoptions %})


</code>
Configuration options for the smart paste subscription

#### Returns
<code>


[KendoPasteSubscription]({% slug api_common_kendopastesubscription %})


</code>
 A subscription object with an unsubscribe method
