import{r as $}from"./index.B76fyJ3R.js";import{V as e,aS as m,b1 as M,Y as c,aV as b,aX as z,a1 as p,aQ as y,X as Z,_ as k,l as ee,n as ie,r as T,e as R}from"./languageStore.CSEUs0zS.js";import{e as le,s as S}from"./package-metadata.Dpk0UpBL.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */function re({onFocus:l,onBlur:u,onSyncFocus:d,onSyncBlur:n}){const s=$.useRef(!1),o=$.useRef(0),i=$.useCallback(f=>{clearTimeout(o.current),o.current=window.setTimeout(()=>f())},[o]),a=$.useCallback((...f)=>{clearTimeout(o.current),d&&d.call(void 0,f[0]),!s.current&&(s.current=!0,l&&l.call(void 0,...f))},[s,l,d]),g=$.useCallback((...f)=>{n&&n.call(void 0,f[0]),i(()=>{s.current&&u&&(s.current=!1,u.call(void 0,...f))})},[s,i,u,n]);return $.useEffect(()=>()=>{clearTimeout(o.current)},[]),{onFocus:a,onBlur:g}}/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const t=`${e.prefix}-${m.input}`,ne=`${e.prefix}-${m.maskedtextbox}`,x=`${e.prefix}-${m.radio}`,ue=`${e.prefix}-${m.textbox}`,w=`${e.prefix}-${m.input}-${m.prefix}`,B=`${e.prefix}-${m.input}-${m.suffix}`,F={input:{radio:x,size:{prefix:`${x}-`,small:`${x}-${p.small}`,medium:`${x}-${p.medium}`,large:`${x}-${p.large}`},invalid:`${e.prefix}-${c.invalid}`,checked:`${e.prefix}-${c.checked}`},wrap:`${x}-${k.wrap}`,label:`${x}-${Z.label}`},fe={input:l=>{var u;const{size:d,invalid:n,checked:s,c:o=F}=l,i=o.input;return{[i?.radio]:!0,[i?.size[d]]:i?.size[d],[`${(u=i?.size)==null?void 0:u.prefix}${d}`]:d&&!(i!=null&&i.size[d]),[i?.invalid]:n,[i?.checked]:s}},label:l=>{const{c:u=F}=l;return{[u?.label]:!0}},wrap:l=>{const{c:u=F}=l;return{[u?.wrap]:!0}}};`${e.prefix}${k.list}${c.horizontal}`,`${e.prefix}${k.list}${c.vertical}`,`${e.prefix}${c.disabled}`;const N={wrapper:{main:ne,input:t,size:{small:`${t}-${p.small}`,medium:`${t}-${p.medium}`,large:`${t}-${p.large}`},fillMode:{solid:`${t}-${z.solid}`,outline:`${t}-${z.outline}`,flat:`${t}-${z.flat}`},rounded:{small:`${e.prefix}-${e.rounded}-${b.small}`,medium:`${e.prefix}-${e.rounded}-${b.medium}`,large:`${e.prefix}-${e.rounded}-${b.large}`},disabled:`${e.prefix}-${c.disabled}`,invalid:`${e.prefix}-${c.invalid}`,isRtl:`${e.prefix}-${e.rtl}`},inputInner:`${t}-${m.inner}`},pe={wrapper:l=>{const{invalid:u,disabled:d,size:n,fillMode:s,rounded:o,c:i=N}=l,a=i.wrapper;return{[a.main]:!0,[a.input]:!0,[a.size[n]]:a.size[n],[`${t}-${n}`]:!a.size[n],[a.fillMode[s]]:a.fillMode[s],[a.rounded[o]]:a.rounded[o],[`${e.prefix}-${e.rounded}-${o}`]:o&&!a.rounded[o],[a.disabled]:d,[a.invalid]:u}},inputInner:y(N,"inputInner")},q={wrapper:{main:ue,input:t,size:{small:`${t}-${p.small}`,medium:`${t}-${p.medium}`,large:`${t}-${p.large}`},fillMode:{solid:`${t}-${z.solid}`,outline:`${t}-${z.outline}`,flat:`${t}-${z.flat}`},rounded:{small:`${e.prefix}-${e.rounded}-${b.small}`,medium:`${e.prefix}-${e.rounded}-${b.medium}`,large:`${e.prefix}-${e.rounded}-${b.large}`},disabled:`${e.prefix}-${c.disabled}`,focused:`${e.prefix}-${c.focus}`,required:`${e.prefix}-${c.required}`,invalid:`${e.prefix}-${c.invalid}`,isRtl:`${e.prefix}-${e.rtl}`},inputInner:`${t}-${m.inner}`,prefix:{main:w,orientation:{horizontal:`${w}-${M.horizontal}`,vertical:`${w}-${M.vertical}`}},suffix:{main:B,orientation:{horizontal:`${B}-${M.horizontal}`,vertical:`${B}-${M.vertical}`}}},O={wrapper:l=>{const{disabled:u,invalid:d,focused:n,required:s,size:o,fillMode:i,rounded:a,isRtl:g,c:f=q}=l,r=f.wrapper;return{[r?.main]:!0,[r?.input]:!0,[r?.size[o]]:r?.size[o],[`${t}-${o}`]:o&&!(r!=null&&r.size[o]),[r?.fillMode[i]]:r?.fillMode[i],[r?.rounded[a]]:r?.rounded[a],[`${e.prefix}-${e.rounded}-${a}`]:a&&!(r!=null&&r.rounded[a]),[r?.disabled]:u,[r?.focused]:n,[r?.required]:s,[r?.invalid]:d,[r?.isRtl]:g}},inputInner:y(q,"inputInner"),prefix:l=>{const{orientation:u,c:d=q}=l,n=d.prefix;return{[n.main]:!0,[n.orientation[u]]:n.orientation[u]}},suffix:l=>{const{orientation:u,c:d=q}=l,n=d.suffix;return{[n?.main]:!0,[n?.orientation[u]]:n?.orientation[u]}}},D={input:{main:`${t} ${t}-${p.medium} ${e.prefix}-${e.rounded}-${b.medium} ${t}-${z.solid}`,disabled:`${e.prefix}-${c.disabled}`,required:`${e.prefix}-${c.required}`,invalid:`${e.prefix}-${c.invalid}`,isRtl:`${e.prefix}-${e.rtl}`},clearButton:`${e.prefix}-${e.clear}-${e.value}`},me={input:l=>{const{disabled:u,invalid:d,required:n,isRtl:s,c:o=D}=l,i=o.input;return{[i?.main]:!0,[i?.disabled]:u,[i?.required]:n,[i?.invalid]:d,[i?.isRtl]:s}},clearButton:y(D,"clearButton")};/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2024 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const H=$.forwardRef((l,u)=>{ee(le);const d=$.useRef(null),n=$.useRef(null),s=$.useRef(),o=ie(),i=o&&o.uTextBox,a=$.useCallback(()=>{var v;return s.current!==void 0?s.current:(v=d.current)==null?void 0:v.value},[]);$.useImperativeHandle(n,()=>({get element(){return d.current},get name(){return d.current&&d.current.name},get value(){return a()}})),$.useImperativeHandle(u,()=>n.current);const{size:g=h.size,fillMode:f=h.fillMode,rounded:r=h.rounded,autoFocus:K=h.autoFocus,className:C,dir:V,style:X,prefix:_=h.prefix,suffix:j=h.suffix,valid:de,modified:oe,touched:ae,visited:te,...G}=l,[P]=S(_),[Q]=S(j),[E,I]=$.useState(!1),U=v=>{I(!0)},Y=v=>{I(!1)},A=$.useCallback(v=>{s.current=v.target.value,l.onChange&&l.onChange.call(void 0,{syntheticEvent:v,nativeEvent:v.nativeEvent,value:v.target.value,target:n.current}),s.current=void 0},[l.onChange]),{onFocus:J,onBlur:L}=re({onFocus:U,onBlur:Y,onSyncFocus:l.onFocus,onSyncBlur:l.onBlur}),W=$.useMemo(()=>T(O.wrapper({c:i,rounded:r,fillMode:f,size:g,focused:E,required:l.required,disabled:l.disabled,invalid:l.valid===!1}),C),[C,f,E,l.disabled,l.required,l.valid,r,g,i]);return $.createElement("span",{style:X,dir:V,className:W,onFocus:J,onBlur:L},$.createElement(P,null),$.createElement("input",{ref:d,className:T(O.inputInner({c:i})),autoFocus:K,...G,"aria-required":l.required,onChange:A}),$.createElement(Q,null))}),h={prefix:l=>null,suffix:l=>null,size:"medium",rounded:"medium",fillMode:"solid",autoFocus:!1};H.propTypes={size:R.oneOf([null,"small","medium","large"]),rounded:R.oneOf([null,"small","medium","large","full"]),fillMode:R.oneOf([null,"solid","flat","outline"]),autoFocus:R.bool};H.displayName="KendoReactTextBoxComponent";export{H as B,pe as D,O as E,me as F,fe as j,re as o};