import{Y as i,bI as t,$ as o,bJ as c,bG as $,ah as f}from"./languageStore.BOLB4mO5.js";import{r as m}from"./index.D88GQMgd.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const b=`${i.prefix}-${t.label}`,u=`${i.prefix}-${t.floatingLabel}`,v=`${i.prefix}-${t.error}`;`${i.prefix}${t.hint}`;const y={label:{main:b,empty:`${i.prefix}-${t.label}-${o.empty}`,invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},g={label:n=>{const{empty:d,invalid:a,disabled:l,c:p=y}=n,r=p.label;return{[r?.main]:!0,[r?.empty]:d,[r?.invalid]:a,[r?.disabled]:l}}},x={wrapper:{main:`${u}-${t.container}`,focused:`${i.prefix}-${o.focus}`,empty:`${i.prefix}-${o.empty}`,notEmpty:"",disabled:`${i.prefix}-${t.text}-${o.disabled}`,isRtl:`${i.prefix}-${i.rtl}`},label:{main:u,focused:"",empty:"",notEmpty:"",invalid:`${i.prefix}-${t.text}-${c.error}`,disabled:`${i.prefix}-${t.text}-${o.disabled}`}},C={wrapper:n=>{const{focused:d,empty:a,notEmpty:l,disabled:p,isRtl:r,c:s=x}=n,e=s.wrapper;return{[e?.main]:!0,[e?.focused]:d,[e?.empty]:a,[e?.notEmpty]:l,[e?.disabled]:p,[e?.isRtl]:r}},label:n=>{const{focused:d,empty:a,notEmpty:l,invalid:p,disabled:r,c:s=x}=n,e=s.label;return{[e?.main]:!0,[e?.focused]:d,[e?.empty]:a,[e?.notEmpty]:l,[e?.invalid]:p,[e?.disabled]:r}}},w={wrapper:{main:v,direction:{start:`${i.prefix}-${t.text}-${$.start}`,end:`${i.prefix}-${t.text}-${$.end}`}}},L={wrapper:n=>{const{direction:d,c:a=w}=n,l=a.wrapper;return{[l?.main]:!0,[l?.direction[d]]:l?.direction[d]}}};`${i.prefix}${t.text}${$.start}`,`${i.prefix}${t.text}${$.end}`,`${i.prefix}${t.text}${o.disabled}`;/**
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
 */const E="labels.optional",G={[E]:"(Optional)"};export{g as L,C as g,L as h,z as i,E as l,G as o};
