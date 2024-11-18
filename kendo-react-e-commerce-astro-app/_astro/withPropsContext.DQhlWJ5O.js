import{r as o}from"./index.B76fyJ3R.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const f=(t,r,n)=>{const e=typeof t=="string"?parseInt(t):t;if(!Number.isNaN(e))return e!==void 0?e:r?n?void 0:-1:0};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const a=(t,r)=>o.useContext(t)(r);/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const i=()=>o.createContext(t=>t),p=(t,r)=>o.forwardRef((n,e)=>{const s=a(t,n);return o.createElement(r,{...s,ref:e})});export{i as a,a as n,f as o,p as x};
