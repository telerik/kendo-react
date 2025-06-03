import{X as i,bF as l,_ as o,bG as c,bz as s,ag as m}from"./languageStore.BFMXKRnr.js";import{r as f}from"./index.CCMsPnvT.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const b=`${i.prefix}-${l.label}`,u=`${i.prefix}-${l.floatingLabel}`,v=`${i.prefix}-${l.error}`;`${i.prefix}${l.hint}`;const y={label:{main:b,empty:`${i.prefix}-${l.label}-${o.empty}`,invalid:`${i.prefix}-${l.text}-${c.error}`,disabled:`${i.prefix}-${l.text}-${o.disabled}`}},h={label:r=>{const{empty:n,invalid:a,disabled:t,c:p=y}=r,d=p.label;return{[d?.main]:!0,[d?.empty]:n,[d?.invalid]:a,[d?.disabled]:t}}},x={wrapper:{main:`${u}-${l.container}`,focused:`${i.prefix}-${o.focus}`,empty:`${i.prefix}-${o.empty}`,notEmpty:"",disabled:`${i.prefix}-${l.text}-${o.disabled}`,isRtl:`${i.prefix}-${i.rtl}`},label:{main:u,focused:"",empty:"",notEmpty:"",invalid:`${i.prefix}-${l.text}-${c.error}`,disabled:`${i.prefix}-${l.text}-${o.disabled}`}},z={wrapper:r=>{const{focused:n,empty:a,notEmpty:t,disabled:p,isRtl:d,c:$=x}=r,e=$.wrapper;return{[e?.main]:!0,[e?.focused]:n,[e?.empty]:a,[e?.notEmpty]:t,[e?.disabled]:p,[e?.isRtl]:d}},label:r=>{const{focused:n,empty:a,notEmpty:t,invalid:p,disabled:d,c:$=x}=r,e=$.label;return{[e?.main]:!0,[e?.focused]:n,[e?.empty]:a,[e?.notEmpty]:t,[e?.invalid]:p,[e?.disabled]:d}}},w={wrapper:{main:v,direction:{start:`${i.prefix}-${l.text}-${s.start}`,end:`${i.prefix}-${l.text}-${s.end}`}}},C={wrapper:r=>{const{direction:n,c:a=w}=r,t=a.wrapper;return{[t?.main]:!0,[t?.direction[n]]:t?.direction[n]}}};`${i.prefix}${l.text}${s.start}`,`${i.prefix}${l.text}${s.end}`,`${i.prefix}${l.text}${o.disabled}`;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const L=()=>f.useContext(m).localization;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const E="labels.optional",F={[E]:"(Optional)"};export{h as L,z as g,C as h,L as i,E as l,F as o};
