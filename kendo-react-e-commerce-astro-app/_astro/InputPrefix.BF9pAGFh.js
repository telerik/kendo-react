import{r as e}from"./index.Br4GBDYe.js";import{l as c,n as i}from"./languageStore.BfFhp9W0.js";import{E as u}from"./Textbox.j5uhvojG.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const p=e.forwardRef(({orientation:a="horizontal",...r},s)=>{const n=e.useRef(null),m=e.useRef(null),t=c(),o=t&&t.uTextBox;e.useImperativeHandle(n,()=>({element:m.current})),e.useImperativeHandle(s,()=>n.current);const l=e.useMemo(()=>i(u.prefix({c:o,orientation:a}),r.className),[r.className,o,a]);return e.createElement("span",{...r,className:l})});p.displayName="KendoReactInputPrefix";export{p as f};
