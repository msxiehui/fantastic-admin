
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as d}from"./index.e66802dc.js";import{r as p,l as a,Y as u,q as l,a4 as f,F as s,A as v,a6 as m,G as y,D as n,o}from"./vendor.ddb44672.js";const g={key:0,class:"title-container"},h={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=p(e.collaspe);function c(){t.value=!1}return(i,C)=>{const r=n("el-icon-arrow-down"),_=n("el-icon");return o(),a("div",{class:m({"page-main":!0,"is-collaspe":t.value}),style:y({height:t.value?e.height:""})},[e.title?(o(),a("div",g,u(e.title),1)):l("v-if",!0),f(i.$slots,"default",{},void 0,!0),t.value?(o(),a("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:c},[s(_,null,{default:v(()=>[s(r)]),_:1})])):l("v-if",!0)],6)}}};var S=d(h,[["__scopeId","data-v-1559cb8c"]]);export{S as _};
