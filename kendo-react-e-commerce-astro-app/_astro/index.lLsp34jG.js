import{U as i,bG as t,X as o,bH as c,bE as s,ad as f}from"./languageStore.Bfx_Gca3.js";import{r as m}from"./index.BMZuM56V.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const b=`${i.prefix}-${t.label}`,u=`${i.prefix}-${t.floatingLabel}`,v=`${i.prefix}-${t.error}`;`${i.prefix}${t.hint}`;const y={label:{main:b,empty:`${i.prefix}-${t.label}-${o.empty}`,invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},h={label:n=>{const{empty:r,invalid:a,disabled:l,c:p=y}=n,d=p.label;return{[d?.main]:!0,[d?.empty]:r,[d?.invalid]:a,[d?.disabled]:l}}},x={wrapper:{main:`${u}-${t.container}`,focused:`${i.prefix}-${o.focus}`,empty:`${i.prefix}-${o.empty}`,notEmpty:"",disabled:`${i.prefix}-${t.text}-${o.disabled}`,isRtl:`${i.prefix}-${i.rtl}`},label:{main:u,focused:"",empty:"",notEmpty:"",invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},C={wrapper:n=>{const{focused:r,empty:a,notEmpty:l,disabled:p,isRtl:d,c:$=x}=n,e=$.wrapper;return{[e?.main]:!0,[e?.focused]:r,[e?.empty]:a,[e?.notEmpty]:l,[e?.disabled]:p,[e?.isRtl]:d}},label:n=>{const{focused:r,empty:a,notEmpty:l,invalid:p,disabled:d,c:$=x}=n,e=$.label;return{[e?.main]:!0,[e?.focused]:r,[e?.empty]:a,[e?.notEmpty]:l,[e?.invalid]:p,[e?.disabled]:d}}},w={wrapper:{main:v,direction:{start:`${i.prefix}-${t.text}-${s.start}`,end:`${i.prefix}-${t.text}-${s.end}`}}},L={wrapper:n=>{const{direction:r,c:a=w}=n,l=a.wrapper;return{[l?.main]:!0,[l?.direction[r]]:l?.direction[r]}}};`${i.prefix}${t.text}${s.start}`,`${i.prefix}${t.text}${s.end}`,`${i.prefix}${t.text}${o.disabled}`;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const z=()=>m.useContext(f).localization;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const E="labels.optional",G={[E]:"(Optional)"};export{h as L,C as g,L as h,z as i,E as l,G as o};
