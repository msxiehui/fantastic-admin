
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as q}from"./index.a4aa7a11.js";import{_ as S}from"./index.2107635c.js";import{j as C,r as k,l as I,q as U,F as e,A as o,X as N,D as n,o as Q,m as t,s as B,t as P,$ as p,H as D}from"./vendor.ddb44672.js";import{_ as E}from"./index.e66802dc.js";import"./index.c8a0855a.js";const _=i=>(B("data-v-2ab7860e"),i=i(),P(),i),O=_(()=>t("h2",null,"\u57FA\u672C\u8BBE\u7F6E",-1)),T=p("\u4FDD\u5B58"),$=_(()=>t("h2",null,"\u5B89\u5168\u8BBE\u7F6E",-1)),A={class:"setting-list"},F={class:"item"},H=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u8D26\u6237\u5BC6\u7801"),t("div",{class:"desc"},"\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A\u5F3A")],-1)),K={class:"action"},R=p("\u4FEE\u6539"),X={class:"item"},z=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u5BC6\u4FDD\u624B\u673A"),t("div",{class:"desc"},"\u5DF2\u7ED1\u5B9A\u624B\u673A\uFF1A187****3441")],-1)),G={class:"action"},J=p("\u4FEE\u6539"),L={class:"item"},M=_(()=>t("div",{class:"content"},[t("div",{class:"title"},"\u5907\u7528\u90AE\u7BB1"),t("div",{class:"desc"},"\u5F53\u524D\u672A\u7ED1\u5B9A\u5907\u7528\u90AE\u7BB1")],-1)),W={class:"action"},Y=p("\u7ED1\u5B9A"),Z=C({name:"PersonalSetting"}),ee=Object.assign(Z,{setup(i){const v=N(),{proxy:h}=D(),l=k({headimg:"",mobile:"",name:"",qq:"",wechat:""});function b(c){c.error==""?l.value.headimg=c.data.path:h.$message.warning(c.error)}function g(){v.push({name:"personalEditPassword"})}return(c,a)=>{const u=n("el-input"),d=n("el-form-item"),m=n("el-button"),x=n("el-form"),r=n("el-col"),V=S,w=n("el-row"),f=n("el-tab-pane"),y=n("el-tabs"),j=q;return Q(),I("div",null,[U(" \u9875\u9762\uFF1ASetting "),e(j,null,{default:o(()=>[e(y,{"tab-position":"left",style:{height:"600px"}},{default:o(()=>[e(f,{label:"\u57FA\u672C\u8BBE\u7F6E",class:"basic"},{default:o(()=>[O,e(w,{gutter:20},{default:o(()=>[e(r,{span:16},{default:o(()=>[e(x,{ref_key:"form",ref:l,model:l.value,"label-width":"120px","label-suffix":"\uFF1A"},{default:o(()=>[e(d,{label:"\u540D \u79F0"},{default:o(()=>[e(u,{modelValue:l.value.name,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value.name=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u624B\u673A\u53F7"},{default:o(()=>[e(u,{modelValue:l.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value.mobile=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u624B\u673A\u53F7"},null,8,["modelValue"])]),_:1}),e(d,{label:"QQ \u53F7"},{default:o(()=>[e(u,{modelValue:l.value.qq,"onUpdate:modelValue":a[2]||(a[2]=s=>l.value.qq=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684 QQ \u53F7"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5FAE\u4FE1\u53F7"},{default:o(()=>[e(u,{modelValue:l.value.wechat,"onUpdate:modelValue":a[3]||(a[3]=s=>l.value.wechat=s),placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5FAE\u4FE1\u53F7"},null,8,["modelValue"])]),_:1}),e(d,null,{default:o(()=>[e(m,{type:"primary"},{default:o(()=>[T]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(r,{span:8},{default:o(()=>[e(V,{url:l.value.headimg,"onUpdate:url":a[4]||(a[4]=s=>l.value.headimg=s),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:b},null,8,["url"])]),_:1})]),_:1})]),_:1}),e(f,{label:"\u5B89\u5168\u8BBE\u7F6E",class:"security"},{default:o(()=>[$,t("div",A,[t("div",F,[H,t("div",K,[e(m,{type:"text",onClick:g},{default:o(()=>[R]),_:1})])]),t("div",X,[z,t("div",G,[e(m,{type:"text"},{default:o(()=>[J]),_:1})])]),t("div",L,[M,t("div",W,[e(m,{type:"text"},{default:o(()=>[Y]),_:1})])])])]),_:1})]),_:1})]),_:1})])}}});var ne=E(ee,[["__scopeId","data-v-2ab7860e"]]);export{ne as default};
