---
title: createAxiosAIClient
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the createAxiosAIClient."
api_reference: true
type: inner_api
slug: api_grid_createaxiosaiclient
---

# createAxiosAIClient
Creates a GridAIHttpClient backed by a customer-provided axios instance.

```tsx
import axios from 'axios';
import { createAxiosAIClient } from '@progress/kendo-react-grid';

<GridToolbarAIAssistant httpClient={createAxiosAIClient(axios)} />
```


#### Parameters
##### axiosInstance
<code>


AxiosLikeInstance


</code>


#### Returns
<code>


[GridAIHttpClient]({% slug api_grid_gridaihttpclient %})


</code>

