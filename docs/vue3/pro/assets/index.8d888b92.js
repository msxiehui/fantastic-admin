
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./index.13c1af28.js";import{_ as m}from"./index.a1ea47af.js";import{_}from"./index.36bfd5ad.js";import p from"./index.6a40aa09.js";import{j as v,r as i,F as e,$ as l,B as u}from"./vendor.e498156c.js";import"./index.85d61d52.js";const x="_test1_uueil_10",f="_a_uueil_13",F="_test2_uueil_19";var n={"example-icon":"_example-icon_uueil_6",test1:x,a:f,test2:F},J=v({name:"JsxExample",render(){const o=i(["sidebar-jsx","sidebar-element"]).value.map(t=>e(_,{name:t,class:n["example-icon"]},null));let s=i(0);function a(t=1){s.value+=t}const r="<p>\u8FD9\u662F<i>\u4E00\u6BB5</i><b>HTML</b>\u4EE3\u7801</p>",d=e("p",null,[l("\u8FD9\u4E5F\u662F"),e("i",null,[l("\u4E00\u6BB5")]),e("b",null,[l("HTML")]),l("\u4EE3\u7801")]);return e("div",null,[e(m,{title:"JSX",content:"\u8BF7\u67E5\u770B\u672C\u9875\u9762\u6E90\u7801\uFF0C\u66F4\u591A JSX \u4ECB\u7ECD\u8BF7\u8BBF\u95EE\u5B98\u7F51\u6587\u6863\u3002"},null),e(c,null,{default:()=>[e("p",null,[l("\u8FD9\u662F\u4E24\u4E2A Svg Icon \u56FE\u6807")]),o,e(u("el-divider"),null,null),e("div",{class:n.test1},[e("div",{class:n.a},null)]),e("div",{class:n.test2},[e("div",{class:n.a},null)]),e(u("el-divider"),null,null),e(u("el-button"),{onClick:()=>a(10)},{default:()=>[l("\u70B9\u6211\uFF1A"),s.value]}),e("div",{innerHTML:r},null),d,e(u("el-divider"),null,null),e(p,null,null)]})])}});export{J as default};