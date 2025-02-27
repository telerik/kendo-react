import{r as e}from"./index.CAcXRpb3.js";import{k as c,n as i}from"./languageStore.BwrTrYb2.js";import{E as u}from"./Textbox.CSx5X0hO.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const p=e.forwardRef(({orientation:a="horizontal",...r},s)=>{const n=e.useRef(null),m=e.useRef(null),t=c(),o=t&&t.uTextBox;e.useImperativeHandle(n,()=>({element:m.current})),e.useImperativeHandle(s,()=>n.current);const l=e.useMemo(()=>i(u.prefix({c:o,orientation:a}),r.className),[r.className,o,a]);return e.createElement("span",{...r,className:l})});p.displayName="KendoReactInputPrefix";export{p as f};
