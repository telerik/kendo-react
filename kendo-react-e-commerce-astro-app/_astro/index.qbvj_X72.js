import{X as i,bF as t,_ as o,bG as c,bD as s,ag as m}from"./languageStore.5U26Vo73.js";import{r as f}from"./index.Brq2tt8m.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const b=`${i.prefix}-${t.label}`,u=`${i.prefix}-${t.floatingLabel}`,v=`${i.prefix}-${t.error}`;`${i.prefix}${t.hint}`;const y={label:{main:b,empty:`${i.prefix}-${t.label}-${o.empty}`,invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},h={label:n=>{const{empty:d,invalid:a,disabled:l,c:p=y}=n,r=p.label;return{[r?.main]:!0,[r?.empty]:d,[r?.invalid]:a,[r?.disabled]:l}}},x={wrapper:{main:`${u}-${t.container}`,focused:`${i.prefix}-${o.focus}`,empty:`${i.prefix}-${o.empty}`,notEmpty:"",disabled:`${i.prefix}-${t.text}-${o.disabled}`,isRtl:`${i.prefix}-${i.rtl}`},label:{main:u,focused:"",empty:"",notEmpty:"",invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},C={wrapper:n=>{const{focused:d,empty:a,notEmpty:l,disabled:p,isRtl:r,c:$=x}=n,e=$.wrapper;return{[e?.main]:!0,[e?.focused]:d,[e?.empty]:a,[e?.notEmpty]:l,[e?.disabled]:p,[e?.isRtl]:r}},label:n=>{const{focused:d,empty:a,notEmpty:l,invalid:p,disabled:r,c:$=x}=n,e=$.label;return{[e?.main]:!0,[e?.focused]:d,[e?.empty]:a,[e?.notEmpty]:l,[e?.invalid]:p,[e?.disabled]:r}}},w={wrapper:{main:v,direction:{start:`${i.prefix}-${t.text}-${s.start}`,end:`${i.prefix}-${t.text}-${s.end}`}}},L={wrapper:n=>{const{direction:d,c:a=w}=n,l=a.wrapper;return{[l?.main]:!0,[l?.direction[d]]:l?.direction[d]}}};`${i.prefix}${t.text}${s.start}`,`${i.prefix}${t.text}${s.end}`,`${i.prefix}${t.text}${o.disabled}`;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const z=()=>f.useContext(m).localization;/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const E="labels.optional",D={[E]:"(Optional)"};export{h as L,C as g,L as h,z as i,E as l,D as o};
