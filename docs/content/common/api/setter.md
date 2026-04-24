---
title: setter
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the setter."
api_reference: true
type: inner_api
slug: api_common_setter
---

# setter
Can be used for setting value to object using field path. For example `users[index].name`.

```jsx-no-run
const values = {users:[{lastName: 'Doe'}]};
const firstUserFirstName = setter('user[0].firstName');

firstUserFirstName(values, 'John');

console.log(values)

// result: {users:[{firstName: 'John', lastName: 'Doe'}]}
```


#### Parameters
##### field
<code>


string


</code>


#### Returns
<code>


any


</code>

