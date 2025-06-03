import{r as o}from"./index.CCMsPnvT.js";import{l as D,n as h,e}from"./languageStore.BFMXKRnr.js";import{i as v,l as p,o as C,L as R}from"./index.C9kumMQk.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const u=b=>{const{id:f,editorId:y,editorRef:t,editorDisabled:a,children:l,editorValid:r,style:g,className:i,optional:N}=b,$=v(),n=N?$.toLanguageString(p,C[p]):"",k=n&&o.createElement("span",{className:"k-label-optional"},n),s=D(),c=s&&s.uLabel,E=o.useCallback(d=>{if(t&&t.current&&!a){t.current.focus&&(d.preventDefault(),t.current.focus());const m=t.current.actionElement;m&&(d.preventDefault(),m.click())}},[t]),L=o.useMemo(()=>h(R.label({c,empty:!l,invalid:r===!1,disabled:a===!0}),i),[c,l,r,a,i]);return o.createElement("label",{id:f,htmlFor:y,onClick:E,style:g,className:L},l,k)};u.propTypes={id:e.string,editorId:e.string,editorRef:e.oneOfType([e.func,e.shape({current:e.any})]),editorValid:e.bool,editorDisabled:e.bool,style:e.object,className:e.string,optional:e.bool};u.displayName="KendoReactLabel";export{u};
