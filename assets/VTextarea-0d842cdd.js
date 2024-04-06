import{p as Z,g as ee,b as te,e as y,r as v,E as ae,aW as ne,S as le,w as m,W as oe,u as ue,bi as ie,c as l,f as I,K as R,L as _,ap as re,bm as se,ay as S,bk as ce,aH as de,aV as fe}from"./index-b8bb9b87.js";import{a as ve,e as me,u as xe,b as E,f as ge,g as he,h as we}from"./VTextField-d716ff87.js";import{f as Ve}from"./forwardRefs-e658ad70.js";import{i as ye}from"./VGrid-89f96509.js";const Fe=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ve(),...me()},"VTextarea"),Ie=ee()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:F,emit:H,slots:i}=G;const o=te(e,"modelValue"),{isFocused:f,focus:D,blur:U}=xe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function p(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),x=v(),B=ae(""),g=v(),W=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||D()}function j(t){C(),H("click:control",t)}function K(t){H("mousedown:control",t)}function L(t){t.stopPropagation(),C(),S(()=>{o.value="",ce(e["onClick:clear"],t)})}function q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),b=parseFloat(e.maxRows)*w+a||1/0,s=fe(u??0,k,b);h.value=Math.floor((s-a)/w),B.value=de(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ue(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ie(F),{modelValue:w,...k}=E.filterProps(e),b=ge(e);return l(E,I({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,k,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:N,isDirty:T,isReadonly:J,isValid:Q}=s;return l(he,I({ref:x,style:{"--v-textarea-control-height":B.value},onClick:j,onMousedown:K,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},b,{id:V.value,active:W.value||T.value,centerAffix:h.value===1&&!P.value,dirty:T.value||e.dirty,disabled:N.value,focused:f.value,error:Q.value===!1}),{...i,default:X=>{let{props:{class:z,...A}}=X;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",I({ref:g,class:z,value:o.value,onInput:q,autofocus:e.autofocus,readonly:J.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:U},A,u),null),[[re("intersect"),{handler:p},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[se,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(we,{active:e.persistentCounter||f.value,value:O.value,max:$.value},i.counter)])])}:void 0})}),Ve({},M,x,g)}});export{Ie as V};
