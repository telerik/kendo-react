---
title: FromPathOrFn
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the FromPathOrFn."
api_reference: true
type: inner_api
slug: api_diagram_frompathorfn
---

# FromPathOrFn
Defines a mapping specification that can either be a property path string or a function.

Used to extract values from source objects in data mapping operations. When a string is provided,
it represents a dot-notation path to a property (e.g., "user.name"). When a function is provided,
it receives the input object and should return the desired value.

```typescript
// Using property path
const pathMapping: FromPathOrFn<User, string> = 'profile.name';

// Using function
const fnMapping: FromPathOrFn<User, string> = (user) => `${user.firstName} ${user.lastName}`;
```


`type` FromPathOrFn = `string` | `(input: TInput) => TValue`;
