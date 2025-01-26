import{r as l}from"./index.B76fyJ3R.js";import{l as D,n as E,r as h,e}from"./languageStore.Du5sDYBV.js";import{e as C,a as R,l as p,s as x,L as I}from"./package-metadata.DBQAqcnE.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const u=b=>{D(C);const{id:f,editorId:y,editorRef:t,editorDisabled:o,children:r,editorValid:a,style:$,className:i,optional:g}=b,N=R(),s=g?N.toLanguageString(p,x[p]):"",k=s&&l.createElement("span",{className:"k-label-optional"},s),n=E(),c=n&&n.uLabel,L=l.useCallback(d=>{if(t&&t.current&&!o){t.current.focus&&(d.preventDefault(),t.current.focus());const m=t.current.actionElement;m&&(d.preventDefault(),m.click())}},[t]),v=l.useMemo(()=>h(I.label({c,empty:!r,invalid:a===!1,disabled:o===!0}),i),[c,r,a,o,i]);return l.createElement("label",{id:f,htmlFor:y,onClick:L,style:$,className:v},r,k)};u.propTypes={id:e.string,editorId:e.string,editorRef:e.oneOfType([e.func,e.shape({current:e.any})]),editorValid:e.bool,editorDisabled:e.bool,style:e.object,className:e.string,optional:e.bool};u.displayName="KendoReactLabel";export{u};
