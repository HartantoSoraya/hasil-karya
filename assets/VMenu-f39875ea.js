import{Y as j,E as T,Z as $,_ as L,r as I,p as x,b as R,e as m,$ as ke,a0 as tt,C,d as we,Q as nt,B as at,a1 as lt,a2 as E,m as G,a as W,g as D,u as F,c as v,a3 as U,L as Ve,M as it,a4 as ve,a5 as Ae,a6 as Ie,a7 as Pe,a8 as Le,a9 as Be,aa as st,ab as ae,ac as xe,ad as rt,ae as ut,w as Oe,af as le,ag as Me,ah as ot,ai as Te,aj as De,ak as Ee,al as Fe,am as ct,an as dt,ao as vt,K as fe,V as me,ap as _e,aq as ye,f as H,ar as ft,as as B,o as ie,at as mt,au as yt,av as ee,aw as gt,ax as St,ay as ge,az as ht}from"./index-d8570b98.js";import{V as bt,f as pt}from"./forwardRefs-49923578.js";import{M as Ct,c as je,V as Se}from"./VGrid-aa4a8c47.js";import{m as kt,a as wt,u as Vt,b as he,V as be}from"./VOverlay-f87aa014.js";const te=Symbol.for("vuetify:list");function $e(){const e=j(te,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:n=>{n&&(i.hasPrepend.value=n)}};return $(te,i),e}function Ge(){return j(te,null)}const se=e=>{const i={activate:n=>{let{id:t,value:l,activated:a}=n;return t=L(t),e&&!l&&a.size===1&&a.has(t)||(l?a.add(t):a.delete(t)),a},in:(n,t,l)=>{let a=new Set;for(const s of n||[])a=i.activate({id:s,value:!0,activated:new Set(a),children:t,parents:l});return a},out:n=>Array.from(n)};return i},Ne=e=>{const i=se(e);return{activate:t=>{let{activated:l,id:a,...s}=t;a=L(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:r})},in:(t,l,a)=>{let s=new Set;return t!=null&&t.length&&(s=i.in(t.slice(0,1),l,a)),s},out:(t,l,a)=>i.out(t,l,a)}},At=e=>{const i=se(e);return{activate:t=>{let{id:l,activated:a,children:s,...r}=t;return l=L(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},It=e=>{const i=Ne(e);return{activate:t=>{let{id:l,activated:a,children:s,...r}=t;return l=L(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},Pt={open:e=>{let{id:i,value:n,opened:t,parents:l}=e;if(n){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return t.delete(i),t},select:()=>null},Ke={open:e=>{let{id:i,value:n,opened:t,parents:l}=e;if(n){let a=l.get(i);for(t.add(i);a!=null&&a!==i;)t.add(a),a=l.get(a);return t}else t.delete(i);return t},select:()=>null},Lt={open:Ke.open,select:e=>{let{id:i,value:n,opened:t,parents:l}=e;if(!n)return t;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},re=e=>{const i={select:n=>{let{id:t,value:l,selected:a}=n;if(t=L(t),e&&!l){const s=Array.from(a.entries()).reduce((r,y)=>{let[f,g]=y;return g==="on"&&r.push(f),r},[]);if(s.length===1&&s[0]===t)return a}return a.set(t,l?"on":"off"),a},in:(n,t,l)=>{let a=new Map;for(const s of n||[])a=i.select({id:s,value:!0,selected:new Map(a),children:t,parents:l});return a},out:n=>{const t=[];for(const[l,a]of n.entries())a==="on"&&t.push(l);return t}};return i},Re=e=>{const i=re(e);return{select:t=>{let{selected:l,id:a,...s}=t;a=L(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:r})},in:(t,l,a)=>{let s=new Map;return t!=null&&t.length&&(s=i.in(t.slice(0,1),l,a)),s},out:(t,l,a)=>i.out(t,l,a)}},Bt=e=>{const i=re(e);return{select:t=>{let{id:l,selected:a,children:s,...r}=t;return l=L(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},xt=e=>{const i=Re(e);return{select:t=>{let{id:l,selected:a,children:s,...r}=t;return l=L(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Ot=e=>{const i={select:n=>{let{id:t,value:l,selected:a,children:s,parents:r}=n;t=L(t);const y=new Map(a),f=[t];for(;f.length;){const S=f.shift();a.set(S,l?"on":"off"),s.has(S)&&f.push(...s.get(S))}let g=r.get(t);for(;g;){const S=s.get(g),b=S.every(c=>a.get(c)==="on"),u=S.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,b?"on":u?"off":"indeterminate"),g=r.get(g)}return e&&!l&&Array.from(a.entries()).reduce((b,u)=>{let[c,o]=u;return o==="on"&&b.push(c),b},[]).length===0?y:a},in:(n,t,l)=>{let a=new Map;for(const s of n||[])a=i.select({id:s,value:!0,selected:new Map(a),children:t,parents:l});return a},out:(n,t)=>{const l=[];for(const[a,s]of n.entries())s==="on"&&!t.has(a)&&l.push(a);return l}};return i},_=Symbol.for("vuetify:nested"),Ue={id:T(),root:{register:()=>null,unregister:()=>null,parents:I(new Map),children:I(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:I(!1),selectable:I(!1),opened:I(new Set),activated:I(new Set),selected:I(new Map),selectedValues:I([])}},Mt=x({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),Tt=e=>{let i=!1;const n=I(new Map),t=I(new Map),l=R(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=m(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return At(e.mandatory);case"single-leaf":return It(e.mandatory);case"independent":return se(e.mandatory);case"single-independent":default:return Ne(e.mandatory)}}),s=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return xt(e.mandatory);case"leaf":return Bt(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":return Re(e.mandatory);case"classic":default:return Ot(e.mandatory)}}),r=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Lt;case"single":return Pt;case"multiple":default:return Ke}}),y=R(e,"activated",e.activated,u=>a.value.in(u,n.value,t.value),u=>a.value.out(u,n.value,t.value)),f=R(e,"selected",e.selected,u=>s.value.in(u,n.value,t.value),u=>s.value.out(u,n.value,t.value));ke(()=>{i=!0});function g(u){const c=[];let o=u;for(;o!=null;)c.unshift(o),o=t.value.get(o);return c}const S=tt("nested"),b={id:T(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:y,selected:f,selectedValues:m(()=>{const u=[];for(const[c,o]of f.value.entries())o==="on"&&u.push(c);return u}),register:(u,c,o)=>{c&&u!==c&&t.value.set(u,c),o&&n.value.set(u,[]),c!=null&&n.value.set(c,[...n.value.get(c)||[],u])},unregister:u=>{if(i)return;n.value.delete(u);const c=t.value.get(u);if(c){const o=n.value.get(c)??[];n.value.set(c,o.filter(d=>d!==u))}t.value.delete(u),l.value.delete(u)},open:(u,c,o)=>{S.emit("click:open",{id:u,value:c,path:g(u),event:o});const d=r.value.open({id:u,value:c,opened:new Set(l.value),children:n.value,parents:t.value,event:o});d&&(l.value=d)},openOnSelect:(u,c,o)=>{const d=r.value.select({id:u,value:c,selected:new Map(f.value),opened:new Set(l.value),children:n.value,parents:t.value,event:o});d&&(l.value=d)},select:(u,c,o)=>{S.emit("click:select",{id:u,value:c,path:g(u),event:o});const d=s.value.select({id:u,value:c,selected:new Map(f.value),children:n.value,parents:t.value,event:o});d&&(f.value=d),b.root.openOnSelect(u,c,o)},activate:(u,c,o)=>{if(!e.activatable)return b.root.select(u,!0,o);S.emit("click:activate",{id:u,value:c,path:g(u),event:o});const d=a.value.activate({id:u,value:c,activated:new Set(y.value),children:n.value,parents:t.value,event:o});d&&(y.value=d)},children:n,parents:t}};return $(_,b),b.root},He=(e,i)=>{const n=j(_,Ue),t=Symbol(we()),l=m(()=>e.value!==void 0?e.value:t),a={...n,id:l,open:(s,r)=>n.root.open(l.value,s,r),openOnSelect:(s,r)=>n.root.openOnSelect(l.value,s,r),isOpen:m(()=>n.root.opened.value.has(l.value)),parent:m(()=>n.root.parents.value.get(l.value)),activate:(s,r)=>n.root.activate(l.value,s,r),isActivated:m(()=>n.root.activated.value.has(L(l.value))),select:(s,r)=>n.root.select(l.value,s,r),isSelected:m(()=>n.root.selected.value.get(L(l.value))==="on"),isIndeterminate:m(()=>n.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!n.root.children.value.get(l.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(l.value,n.id.value,i),ke(()=>{!n.isGroupActivator&&n.root.unregister(l.value)}),i&&$(_,a),a},Dt=()=>{const e=j(_,Ue);$(_,{...e,isGroupActivator:!0})};function Et(){const e=T(!1);return nt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:m(()=>e.value?void 0:{transition:"none !important"}),isBooted:at(e)}}const Ft=lt({name:"VListGroupActivator",setup(e,i){let{slots:n}=i;return Dt(),()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),_t=x({activeColor:String,baseColor:String,color:String,collapseIcon:{type:E,default:"$collapse"},expandIcon:{type:E,default:"$expand"},prependIcon:E,appendIcon:E,fluid:Boolean,subgroup:Boolean,title:String,value:null,...G(),...W()},"VListGroup"),pe=D()({name:"VListGroup",props:_t(),setup(e,i){let{slots:n}=i;const{isOpen:t,open:l,id:a}=He(C(e,"value"),!0),s=m(()=>`v-list-group--id-${String(a.value)}`),r=Ge(),{isBooted:y}=Et();function f(u){l(!t.value,u)}const g=m(()=>({onClick:f,class:"v-list-group__header",id:s.value})),S=m(()=>t.value?e.collapseIcon:e.expandIcon),b=m(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}));return F(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[n.activator&&v(U,{defaults:b.value},{default:()=>[v(Ft,null,{default:()=>[n.activator({props:g.value,isOpen:t.value})]})]}),v(Ct,{transition:{component:bt},disabled:!y.value},{default:()=>{var u;return[Ve(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=n.default)==null?void 0:u.call(n)]),[[it,t.value]])]}})]})),{isOpen:t}}});const jt=je("v-list-item-subtitle"),$t=je("v-list-item-title"),Gt=x({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:E,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:E,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ve(),onClickOnce:ve(),...Ae(),...G(),...Ie(),...Pe(),...Le(),...Be(),...st(),...W(),...ae(),...xe({variant:"text"})},"VListItem"),Ce=D()({name:"VListItem",directives:{Ripple:rt},props:Gt(),emits:{click:e=>!0},setup(e,i){let{attrs:n,slots:t,emit:l}=i;const a=ut(e,n),s=m(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:y,select:f,isSelected:g,isIndeterminate:S,isGroupActivator:b,root:u,parent:c,openOnSelect:o}=He(s,!1),d=Ge(),p=m(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||(u.activatable.value?y.value:g.value))}),k=m(()=>e.link!==!1&&a.isLink.value),w=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!d&&(u.selectable.value||u.activatable.value||e.value!=null))),A=m(()=>e.rounded||e.nav),O=m(()=>e.color??e.activeColor),q=m(()=>({color:p.value?O.value??e.baseColor:e.baseColor,variant:e.variant}));Oe(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&c.value!=null&&u.open(c.value,!0),h&&o(h)},{immediate:!0});const{themeClasses:z}=le(e),{borderClasses:Q}=Me(e),{colorClasses:Y,colorStyles:Z,variantClasses:M}=ot(q),{densityClasses:V}=Te(e),{dimensionStyles:N}=De(e),{elevationClasses:Qe}=Ee(e),{roundedClasses:Ye}=Fe(A),Ze=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=m(()=>({isActive:p.value,select:f,isSelected:g.value,isIndeterminate:S.value}));function ue(h){var K;l("click",h),!(b||!w.value)&&((K=a.navigate)==null||K.call(a,h),u.activatable?r(!y.value,h):(u.selectable||e.value!=null)&&f(!g.value,h))}function Je(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),ue(h))}return F(()=>{const h=k.value?"a":e.tag,K=t.title||e.title!=null,Xe=t.subtitle||e.subtitle!=null,oe=!!(e.appendAvatar||e.appendIcon),et=!!(oe||t.append),ce=!!(e.prependAvatar||e.prependIcon),X=!!(ce||t.prepend);return d==null||d.updateHasPrepend(X),e.activeColor&&ct("active-color",["color","base-color"]),Ve(v(h,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!X&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&p.value},z.value,Q.value,Y.value,V.value,Qe.value,Ze.value,Ye.value,M.value,e.class],style:[Z.value,N.value,e.style],href:a.href.value,tabindex:w.value?d?-2:0:void 0,onClick:ue,onKeydown:w.value&&!k.value&&Je},{default:()=>{var de;return[vt(w.value||p.value,"v-list-item"),X&&v("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?v(U,{key:"prepend-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=t.prepend)==null?void 0:P.call(t,J.value)]}}):v(fe,null,[e.prependAvatar&&v(Se,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[K&&v($t,{key:"title"},{default:()=>{var P;return[((P=t.title)==null?void 0:P.call(t,{title:e.title}))??e.title]}}),Xe&&v(jt,{key:"subtitle"},{default:()=>{var P;return[((P=t.subtitle)==null?void 0:P.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(de=t.default)==null?void 0:de.call(t,J.value)]),et&&v("div",{key:"append",class:"v-list-item__append"},[t.append?v(U,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=t.append)==null?void 0:P.call(t,J.value)]}}):v(fe,null,[e.appendIcon&&v(me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(Se,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[dt("ripple"),w.value&&e.ripple]])}),{isGroupActivator:b,isSelected:g,list:d,select:f}}}),Nt=x({color:String,inset:Boolean,sticky:Boolean,title:String,...G(),...W()},"VListSubheader"),Kt=D()({name:"VListSubheader",props:Nt(),setup(e,i){let{slots:n}=i;const{textColorClasses:t,textColorStyles:l}=_e(C(e,"color"));return F(()=>{const a=!!(n.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&v("div",{class:"v-list-subheader__text"},[((s=n.default)==null?void 0:s.call(n))??e.title])]}})}),{}}});const Rt=x({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...G(),...ae()},"VDivider"),Ut=D()({name:"VDivider",props:Rt(),setup(e,i){let{attrs:n}=i;const{themeClasses:t}=le(e),{textColorClasses:l,textColorStyles:a}=_e(C(e,"color")),s=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=ye(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=ye(e.thickness)),r});return F(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,l.value,e.class],style:[s.value,a.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),Ht=x({items:Array,returnObject:Boolean},"VListChildren"),We=D()({name:"VListChildren",props:Ht(),setup(e,i){let{slots:n}=i;return $e(),()=>{var t,l;return((t=n.default)==null?void 0:t.call(n))??((l=e.items)==null?void 0:l.map(a=>{var b,u;let{children:s,props:r,type:y,raw:f}=a;if(y==="divider")return((b=n.divider)==null?void 0:b.call(n,{props:r}))??v(Ut,r,null);if(y==="subheader")return((u=n.subheader)==null?void 0:u.call(n,{props:r}))??v(Kt,r,null);const g={subtitle:n.subtitle?c=>{var o;return(o=n.subtitle)==null?void 0:o.call(n,{...c,item:f})}:void 0,prepend:n.prepend?c=>{var o;return(o=n.prepend)==null?void 0:o.call(n,{...c,item:f})}:void 0,append:n.append?c=>{var o;return(o=n.append)==null?void 0:o.call(n,{...c,item:f})}:void 0,title:n.title?c=>{var o;return(o=n.title)==null?void 0:o.call(n,{...c,item:f})}:void 0},S=pe.filterProps(r);return s?v(pe,H({value:r==null?void 0:r.value},S),{activator:c=>{let{props:o}=c;const d={...r,...o,value:e.returnObject?f:r.value};return n.header?n.header({props:d}):v(Ce,d,g)},default:()=>v(We,{items:s},n)}):n.item?n.item({props:r}):v(Ce,H(r,{value:e.returnObject?f:r.value}),g)}))}}}),Wt=x({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ft}},"list-items");function ne(e,i){const n=B(i,e.itemTitle,i),t=B(i,e.itemValue,n),l=B(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?ie(i,["children"]):i:void 0:B(i,e.itemProps),s={title:n,value:t,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?qe(e,l):void 0,raw:i}}function qe(e,i){const n=[];for(const t of i)n.push(ne(e,t));return n}function nn(e){const i=m(()=>qe(e,e.items)),n=m(()=>i.value.some(a=>a.value===null));function t(a){return n.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):i.value.find(r=>e.valueComparator(s,r.value))||ne(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:r}=s;return r}):a.map(s=>{let{value:r}=s;return r})}return{items:i,transformIn:t,transformOut:l}}function qt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function zt(e,i){const n=B(i,e.itemType,"item"),t=qt(i)?i:B(i,e.itemTitle),l=B(i,e.itemValue,void 0),a=B(i,e.itemChildren),s=e.itemProps===!0?ie(i,["children"]):B(i,e.itemProps),r={title:t,value:l,...s};return{type:n,title:r.title,value:r.value,props:r,children:n==="item"&&a?ze(e,a):void 0,raw:i}}function ze(e,i){const n=[];for(const t of i)n.push(zt(e,t));return n}function Qt(e){return{items:m(()=>ze(e,e.items))}}const Yt=x({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Mt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ae(),...G(),...Ie(),...Pe(),...Le(),itemType:{type:String,default:"type"},...Wt(),...Be(),...W(),...ae(),...xe({variant:"text"})},"VList"),an=D()({name:"VList",props:Yt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:n}=i;const{items:t}=Qt(e),{themeClasses:l}=le(e),{backgroundColorClasses:a,backgroundColorStyles:s}=mt(C(e,"bgColor")),{borderClasses:r}=Me(e),{densityClasses:y}=Te(e),{dimensionStyles:f}=De(e),{elevationClasses:g}=Ee(e),{roundedClasses:S}=Fe(e),{children:b,open:u,parents:c,select:o}=Tt(e),d=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),p=C(e,"activeColor"),k=C(e,"baseColor"),w=C(e,"color");$e(),yt({VListGroup:{activeColor:p,baseColor:k,color:w,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:p,baseColor:k,color:w,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const A=T(!1),O=I();function q(V){A.value=!0}function z(V){A.value=!1}function Q(V){var N;!A.value&&!(V.relatedTarget&&((N=O.value)!=null&&N.contains(V.relatedTarget)))&&M()}function Y(V){if(O.value){if(V.key==="ArrowDown")M("next");else if(V.key==="ArrowUp")M("prev");else if(V.key==="Home")M("first");else if(V.key==="End")M("last");else return;V.preventDefault()}}function Z(V){A.value=!0}function M(V){if(O.value)return ee(O.value,V)}return F(()=>v(e.tag,{ref:O,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,y.value,g.value,d.value,S.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||A.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:q,onFocusout:z,onFocus:Q,onKeydown:Y,onMousedown:Z},{default:()=>[v(We,{items:t.value,returnObject:e.returnObject},n)]})),{open:u,select:o,focus:M,children:b,parents:c}}});const Zt=x({id:String,...ie(kt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:wt}}),["absolute"])},"VMenu"),ln=D()({name:"VMenu",props:Zt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:n}=i;const t=R(e,"modelValue"),{scopeId:l}=Vt(),a=we(),s=m(()=>e.id||`v-menu-${a}`),r=I(),y=j(he,null),f=T(0);$(he,{register(){++f.value},unregister(){--f.value},closeParents(o){setTimeout(()=>{!f.value&&(o==null||o&&!gt(o,r.value.contentEl))&&(t.value=!1,y==null||y.closeParents())},40)}});async function g(o){var k,w,A;const d=o.relatedTarget,p=o.target;await St(),t.value&&d!==p&&((k=r.value)!=null&&k.contentEl)&&((w=r.value)!=null&&w.globalTop)&&![document,r.value.contentEl].includes(p)&&!r.value.contentEl.contains(p)&&((A=ge(r.value.contentEl)[0])==null||A.focus())}Oe(t,o=>{o?(y==null||y.register(),document.addEventListener("focusin",g,{once:!0})):(y==null||y.unregister(),document.removeEventListener("focusin",g))});function S(o){y==null||y.closeParents(o)}function b(o){var d,p,k;e.disabled||o.key==="Tab"&&(ht(ge((d=r.value)==null?void 0:d.contentEl,!1),o.shiftKey?"prev":"next",A=>A.tabIndex>=0)||(t.value=!1,(k=(p=r.value)==null?void 0:p.activatorEl)==null||k.focus()))}function u(o){var p;if(e.disabled)return;const d=(p=r.value)==null?void 0:p.contentEl;d&&t.value?o.key==="ArrowDown"?(o.preventDefault(),ee(d,"next")):o.key==="ArrowUp"&&(o.preventDefault(),ee(d,"prev")):["ArrowDown","ArrowUp"].includes(o.key)&&(t.value=!0,o.preventDefault(),setTimeout(()=>setTimeout(()=>u(o))))}const c=m(()=>H({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":s.value,onKeydown:u},e.activatorProps));return F(()=>{const o=be.filterProps(e);return v(be,H({ref:r,id:s.value,class:["v-menu",e.class],style:e.style},o,{modelValue:t.value,"onUpdate:modelValue":d=>t.value=d,absolute:!0,activatorProps:c.value,"onClick:outside":S,onKeydown:b},l),{activator:n.activator,default:function(){for(var d=arguments.length,p=new Array(d),k=0;k<d;k++)p[k]=arguments[k];return v(U,{root:"VMenu"},{default:()=>{var w;return[(w=n.default)==null?void 0:w.call(n,...p)]}})}})}),pt({id:s,ΨopenChildren:f},r)}});export{ln as V,an as a,Ce as b,$t as c,jt as d,Ut as e,Et as f,Wt as m,nn as u};
