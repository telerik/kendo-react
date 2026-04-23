---
title: MapSpec
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the MapSpec."
api_reference: true
type: inner_api
slug: api_diagram_mapspec
---

# MapSpec
Defines a mapping specification object that maps target object properties to source extraction rules.

Each property in the target type can be mapped using either a property path string or a function
that extracts the value from the source object. This allows flexible transformation of data
from one structure to another.

```typescript
interface Person { name: string; age: number; }
interface User { id: string; fullName: string; }

const mapping: MapSpec<User, Person> = {
  name: 'fullName',           // Direct property mapping
  age: (user) => user.age || 0 // Function-based mapping with default
};
```




