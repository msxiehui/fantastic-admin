
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as O}from"./index.c8a0855a.js";import{r as M,D as n,o as c,l as m,F as i,A as d,z as y,m as o,G as u,_,U,V as D,q as w,H as q}from"./vendor.ddb44672.js";import{_ as A}from"./index.e66802dc.js";const E={class:"upload-container"},I={class:"image-slot"},L={key:1,class:"image"},R={class:"mask"},F={class:"actions"},G=["onClick"],H=["onClick"],P={key:0,class:"el-upload__tip"},T={style:{display:"inline-block"}},J={props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:f}){const r=e,{proxy:p}=q(),t=M({imageViewerVisible:!1,progress:{preview:"",percent:0}});function x(){t.value.imageViewerVisible=!0}function b(){t.value.imageViewerVisible=!1}function $(){f("update:url","")}function k(s){const h=s.name.split("."),g=h[h.length-1],l=r.ext.indexOf(g)>=0,a=s.size/1024/1024<r.size;return l||p.$message.error(`\u4E0A\u4F20\u56FE\u7247\u53EA\u652F\u6301 ${r.ext.join(" / ")} \u683C\u5F0F\uFF01`),a||p.$message.error(`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${r.size}MB\uFF01`),l&&a&&(t.value.progress.preview=URL.createObjectURL(s)),l&&a}function V(s){t.value.progress.percent=~~s.percent}function z(s){t.value.progress.preview="",t.value.progress.percent=0,f("on-success",s)}return(s,h)=>{const g=O,l=n("el-image"),a=n("el-icon-zoom-in"),v=n("el-icon"),C=n("el-icon-delete"),j=n("el-progress"),S=n("el-upload"),B=n("el-alert"),N=n("el-image-viewer");return c(),m("div",E,[i(S,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":k,"on-progress":V,"on-success":z,drag:""},{default:d(()=>[e.url===""?(c(),y(l,{key:0,src:e.url===""?e.placeholder:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},{error:d(()=>[o("div",I,[i(g,{name:"el-icon-plus"})])]),_:1},8,["src","style"])):(c(),m("div",L,[i(l,{src:e.url,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),o("div",R,[o("div",F,[o("span",{title:"\u9884\u89C8",onClick:_(x,["stop"])},[i(v,null,{default:d(()=>[i(a)]),_:1})],8,G),o("span",{title:"\u79FB\u9664",onClick:_($,["stop"])},[i(v,null,{default:d(()=>[i(C)]),_:1})],8,H)])])])),U(o("div",{class:"progress",style:u(`width:${e.width}px;height:${e.height}px;`)},[i(l,{src:t.value.progress.preview,style:u(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),i(j,{type:"circle",width:Math.min(e.width,e.height)*.8,percentage:t.value.progress.percent},null,8,["width","percentage"])],4),[[D,e.url===""&&t.value.progress.percent]])]),_:1},8,["headers","action","data","name"]),e.notip?w("v-if",!0):(c(),m("div",P,[o("div",T,[i(B,{title:`\u4E0A\u4F20\u56FE\u7247\u652F\u6301 ${e.ext.join(" / ")} \u683C\u5F0F\uFF0C\u4E14\u56FE\u7247\u5927\u5C0F\u4E0D\u8D85\u8FC7 ${e.size}MB\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A ${e.width}*${e.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),t.value.imageViewerVisible?(c(),y(N,{key:1,"url-list":[e.url],onClose:b},null,8,["url-list"])):w("v-if",!0)])}}};var X=A(J,[["__scopeId","data-v-5de7fbbe"]]);export{X as _};
