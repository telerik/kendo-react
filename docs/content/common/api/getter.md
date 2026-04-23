---
title: getter
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the getter."
api_reference: true
type: inner_api
slug: api_common_getter
---

# getter
Can be used for getting value from object using field path. For example `users[index].name`.

```jsx-no-run
const values = {users:[{lastName: 'Doe'}]};
const firstUserLastName = getter('user[0].lastName');

console.log(firstUserLastName(values))

// result: 'Doe'
```


#### Parameters
##### field
<code>


string


</code>


#### Returns
<code>


(values: any) => any


</code>

