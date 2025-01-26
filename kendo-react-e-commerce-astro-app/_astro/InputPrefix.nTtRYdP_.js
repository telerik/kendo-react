import{r as e}from"./index.B76fyJ3R.js";import{n as c,r as i}from"./languageStore.Du5sDYBV.js";import{E as u}from"./Textbox.q7OzxYFY.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const p=e.forwardRef(({orientation:t="horizontal",...r},m)=>{const a=e.useRef(null),s=e.useRef(null),n=c(),o=n&&n.uTextBox;e.useImperativeHandle(a,()=>({element:s.current})),e.useImperativeHandle(m,()=>a.current);const l=e.useMemo(()=>i(u.prefix({c:o,orientation:t}),r.className),[r.className,o,t]);return e.createElement("span",{...r,className:l})});p.displayName="KendoReactInputPrefix";export{p as f};
