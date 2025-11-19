import{r as a}from"./index.BMZuM56V.js";import{l as D,n as h,e}from"./languageStore.Bfx_Gca3.js";import{i as v,l as p,o as C,L as R}from"./index.lLsp34jG.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const u=f=>{const{id:b,editorId:y,editorRef:t,editorDisabled:l,children:o,editorValid:r,style:g,className:i,optional:N}=f,$=v(),n=N?$.toLanguageString(p,C[p]):"",k=n&&a.createElement("span",{className:"k-label-optional"},n),s=D(),c=s&&s.uLabel,E=a.useCallback(d=>{if(t&&t.current&&!l){t.current.focus&&(d.preventDefault(),t.current.focus());const m=t.current.actionElement;m&&(d.preventDefault(),m.click())}},[t]),L=a.useMemo(()=>h(R.label({c,empty:!o,invalid:r===!1,disabled:l===!0}),i),[c,o,r,l,i]);return a.createElement("label",{id:b,htmlFor:y,onClick:E,style:g,className:L},o,k)};u.propTypes={id:e.string,editorId:e.string,editorRef:e.oneOfType([e.func,e.shape({current:e.any})]),editorValid:e.bool,editorDisabled:e.bool,style:e.object,className:e.string,optional:e.bool};u.displayName="KendoReactLabel";export{u};
