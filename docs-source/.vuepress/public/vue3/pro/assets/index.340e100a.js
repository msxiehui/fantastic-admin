
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
var j=Object.defineProperty,F=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var k=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))I.call(e,o)&&k(t,o,e[o]);if(V)for(var o of V(e))S.call(e,o)&&k(t,o,e[o]);return t},x=(t,e)=>F(t,D(e));import p from"./index.ce360ee6.js";import{_ as U}from"./index.e66802dc.js";import{w as C,l as $,z as b,A as a,k as c,ag as w,q,D as _,o as f,F as s,af as z,m as A,$ as u,H as E}from"./vendor.ddb44672.js";const H=u("\u53D6 \u6D88"),M=u("\u786E \u5B9A"),P={class:"buttons"},R=u("\u53D6 \u6D88"),T=u("\u786E \u5B9A"),G={props:x(v({},p.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:B}=E();let l=C({get:function(){return o.modelValue},set:function(r){e("update:modelValue",r)}});const g=C(()=>o.id==""?"\u65B0\u589E\u7BA1\u7406\u5458":"\u7F16\u8F91\u7BA1\u7406\u5458");function y(){B.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(r,n)=>{const i=_("el-button"),h=_("el-dialog"),N=_("el-drawer");return f(),$("div",null,[o.mode==="dialog"?(f(),b(h,{key:0,modelValue:c(l),"onUpdate:modelValue":n[0]||(n[0]=d=>w(l)?l.value=d:l=d),title:c(g),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:a(()=>[s(i,{size:"large",onClick:m},{default:a(()=>[H]),_:1}),s(i,{type:"primary",size:"large",onClick:y},{default:a(()=>[M]),_:1})]),default:a(()=>[s(p,z({ref:"form"},r.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(f(),b(N,{key:1,modelValue:c(l),"onUpdate:modelValue":n[1]||(n[1]=d=>w(l)?l.value=d:l=d),title:c(g),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:a(()=>[s(p,z({ref:"form"},r.$props,{class:"form-container"}),null,16),A("div",P,[s(i,{size:"large",onClick:m},{default:a(()=>[R]),_:1}),s(i,{type:"primary",size:"large",onClick:y},{default:a(()=>[T]),_:1})])]),_:1},8,["modelValue","title"])):q("v-if",!0)])}}};var Q=U(G,[["__scopeId","data-v-0e7e5cc0"]]);export{Q as default};
