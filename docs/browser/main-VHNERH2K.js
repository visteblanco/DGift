import{D as f,E as d,F as l,G as u,I as s,J as h,K as C,M,N as g,e as r,g as p,h as i,p as a,q as c,r as n}from"./chunk-JVRBFGOM.js";var N=[{path:"home",component:h},{path:"about",component:C},{path:"donas",loadChildren:()=>import("./chunk-CPBLBIXU.js").then(o=>o.DonasModule)},{path:"**",redirectTo:"home"}],y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[s.forRoot(N),s]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="DGif"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"row","mt-4"],[1,"col"]],template:function(e,j){e&1&&(n(0,"shared-sidebar"),a(1,"div",0)(2,"div",1),n(3,"router-outlet"),c()())},dependencies:[u,M]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[l,y,g,f]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));
