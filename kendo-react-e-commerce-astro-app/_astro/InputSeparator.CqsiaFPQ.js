import{r as e}from"./index.B76fyJ3R.js";import{r as o}from"./languageStore.CgxOjCIV.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const p=e.forwardRef(({orientation:t="vertical",...r},n)=>{const a=e.useRef(null),s=e.useRef(null);return e.useImperativeHandle(a,()=>({element:s.current})),e.useImperativeHandle(n,()=>a.current),e.createElement("span",{...r,className:o("k-input-separator",r.className,`k-input-separator-${t}`)})});p.displayName="KendoReactInputSeparator";export{p as u};
