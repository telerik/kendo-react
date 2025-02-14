import{r as o}from"./index.CAcXRpb3.js";import{l as D,k as E,n as h,e}from"./languageStore.g1doWNur.js";import{e as C,i as R,l as p,o as x,L as I}from"./package-metadata.ChPBzpNB.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const u=b=>{D(C);const{id:f,editorId:y,editorRef:t,editorDisabled:a,children:l,editorValid:r,style:$,className:i,optional:g}=b,k=R(),n=g?k.toLanguageString(p,x[p]):"",N=n&&o.createElement("span",{className:"k-label-optional"},n),s=E(),c=s&&s.uLabel,L=o.useCallback(d=>{if(t&&t.current&&!a){t.current.focus&&(d.preventDefault(),t.current.focus());const m=t.current.actionElement;m&&(d.preventDefault(),m.click())}},[t]),v=o.useMemo(()=>h(I.label({c,empty:!l,invalid:r===!1,disabled:a===!0}),i),[c,l,r,a,i]);return o.createElement("label",{id:f,htmlFor:y,onClick:L,style:$,className:v},l,N)};u.propTypes={id:e.string,editorId:e.string,editorRef:e.oneOfType([e.func,e.shape({current:e.any})]),editorValid:e.bool,editorDisabled:e.bool,style:e.object,className:e.string,optional:e.bool};u.displayName="KendoReactLabel";export{u};
