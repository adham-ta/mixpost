import{_ as h,o as n,c as a,b as r,k as I,w as s,g as P,u as j,l as L,r as N,h as p,U as w,D as q,i as A,a as e,V as F,m as x,d as i,p as S,q as O,O as $,s as E,t as b,f as y,F as V,e as C}from"./app.b1aa069a.js";import{u as H}from"./useNotifications.dfa7e6fe.js";import{T as M,b as U,_ as T}from"./Trash.b45f5c62.js";import{_ as B}from"./PureButton.24339801.js";import{E as z}from"./EllipsisVertical.c5c631d8.js";import{_ as K}from"./PrimaryButton.ef46ed08.js";import{b as R,c as G,d as J}from"./VerticallyScrollableContent.d04abbbf.js";import{_ as Q}from"./ProviderIcon.1c0ce7ab.js";import{_ as D}from"./Checkbox.b2f8a935.js";import{_ as W}from"./SearchInput.e7dc16f1.js";const X={},Y={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Z=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1),ee=[Z];function te(t,c){return n(),a("svg",Y,ee)}const He=h(X,[["render",te]]),se={},oe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},ne=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"},null,-1),ae=[ne];function le(t,c){return n(),a("svg",oe,ae)}const Me=h(se,[["render",le]]),re={__name:"PureButtonLink",props:{href:{type:String,required:!0},method:{type:String,default:"get"},as:{type:String,default:"a"},type:{type:String,default:null}},setup(t){return(c,d)=>(n(),I(j(L),{href:t.href,methods:t.method,as:t.as,type:t.type,class:"relative inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors ease-in-out duration-200"},{default:s(()=>[P(c.$slots,"default")]),_:3},8,["href","methods","as","type"]))}},ce={},ie={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},de=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"},null,-1),ue=[de];function me(t,c){return n(),a("svg",ie,ue)}const _e=h(ce,[["render",me]]),fe={class:"flex flex-row items-center gap-xs"},Ue={__name:"PostItemActions",props:{itemId:{type:Number,required:!0}},emits:["onDelete"],setup(t,{emit:c}){const d=t,u=N(!1),f=p(()=>{const l=w().props;return l.hasOwnProperty("filter")?l.filter.status:null}),{notify:m}=H(),v=()=>{$.delete(route("mixpost.posts.delete",{post:d.itemId,status:f.value}),{onSuccess(){u.value=!1,m("success","Post deleted"),c("onDelete"),E.emit("postDelete",d.itemId)}})},g=()=>{$.post(route("mixpost.posts.duplicate",{post:d.itemId}),{},{onSuccess(){m("success","Post duplicated")}})};return(l,o)=>{const _=q("tooltip");return n(),a("div",null,[r("div",fe,[A((n(),I(re,{href:l.route("mixpost.posts.edit",{post:t.itemId})},{default:s(()=>[e(F)]),_:1},8,["href"])),[[_,"Edit"]]),e(S,{"width-classes":"w-32",placement:"bottom-end"},{trigger:s(()=>[e(B,{class:"mt-1"},{default:s(()=>[e(z)]),_:1})]),content:s(()=>[e(x,{onClick:g,as:"button"},{default:s(()=>[e(_e,{class:"!w-5 !h-5 mr-1"}),i(" Duplicate ")]),_:1}),e(x,{onClick:o[0]||(o[0]=k=>u.value=!0),as:"button"},{default:s(()=>[e(M,{class:"!w-5 !h-5 mr-1 text-red-500"}),i(" Delete ")]),_:1})]),_:1})]),e(T,{show:u.value,variant:"danger",onClose:o[2]||(o[2]=k=>u.value=!1)},{header:s(()=>[i(" Delete post ")]),body:s(()=>[i(" Are you sure you want to delete this post? ")]),footer:s(()=>[e(O,{onClick:o[1]||(o[1]=k=>u.value=!1),class:"mr-xs"},{default:s(()=>[i("Cancel")]),_:1}),e(U,{onClick:v},{default:s(()=>[i("Delete")]),_:1})]),_:1},8,["show"])])}}},pe={},he={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},ve=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"},null,-1),we=[ve];function ge(t,c){return n(),a("svg",he,we)}const ke=h(pe,[["render",ge]]),xe={class:"flex items-center"},$e={class:"ml-xs hidden sm:inline-block"},be={key:0,class:"px-2 py-1 rounded-md bg-white text-black font-bold"},ye={key:0,class:"p-sm"},Ve=r("div",{class:"font-semibold"},"Labels",-1),Ce={class:"mt-sm flex flex-wrap items-center gap-xs"},De={class:"p-sm mt-sm"},Ie=r("div",{class:"font-semibold"},"Accounts",-1),Se={class:"mt-sm flex flex-wrap items-center gap-xs"},Te={__name:"PostsFilter",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(t,{emit:c}){const d=t,u=p(()=>w().props.accounts),f=p(()=>w().props.tags),m=p(()=>d.modelValue.tags.length+d.modelValue.accounts.length),v=()=>{c("update:modelValue",Object.assign(d.modelValue,{keyword:"",tags:[],accounts:[]}))};return(g,l)=>(n(),a("div",xe,[e(W,{modelValue:t.modelValue.keyword,"onUpdate:modelValue":l[0]||(l[0]=o=>t.modelValue.keyword=o),class:"mr-2"},null,8,["modelValue"]),e(S,{"width-classes":"w-72",placement:"bottom-end","closeable-on-content":!1},{trigger:s(()=>[e(K,{size:"md"},{default:s(()=>[e(ke),r("span",$e,[i("Filters "),m.value?(n(),a("span",be,b(m.value),1)):y("",!0)])]),_:1})]),header:s(()=>[e(B,{onClick:v},{default:s(()=>[i("Clear filter")]),_:1})]),content:s(()=>[e(R,null,{default:s(()=>[f.value.length?(n(),a("div",ye,[Ve,r("div",Ce,[(n(!0),a(V,null,C(f.value,o=>(n(),a("label",{key:o.id,class:"flex items-center cursor-pointer"},[e(D,{checked:t.modelValue.tags,"onUpdate:checked":l[1]||(l[1]=_=>t.modelValue.tags=_),value:o.id,number:"",class:"mr-1"},null,8,["checked","value"]),e(G,{item:o,removable:!1,editable:!1},null,8,["item"])]))),128))])])):y("",!0),r("div",De,[Ie,r("div",Se,[(n(!0),a(V,null,C(u.value,o=>(n(),a("label",{key:o.id,class:"flex items-center cursor-pointer"},[e(D,{checked:t.modelValue.accounts,"onUpdate:checked":l[2]||(l[2]=_=>t.modelValue.accounts=_),value:o.id,number:"",class:"mr-1"},null,8,["checked","value"]),e(J,null,{default:s(()=>[e(Q,{provider:o.provider,class:"!w-4 !h-4 mr-xs"},null,8,["provider"]),i(" "+b(o.name),1)]),_:2},1024)]))),128))])])]),_:1})]),_:1})]))}};export{Me as C,Ue as _,He as a,Te as b};
