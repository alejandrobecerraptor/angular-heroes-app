import{a as j,b as O,e as A,g as $,h as q,i as z,j as G,k as J,l as K,m as Q}from"./chunk-HBZ6D35L.js";import{f as R,g as B,h as N}from"./chunk-UKCY5GFF.js";import"./chunk-XAZLOLJU.js";import{Fb as P,Gb as i,Hb as D,Ib as E,Lb as F,Qa as s,Y as f,eb as I,fa as r,ga as u,jb as C,na as g,nc as T,oa as d,ob as o,oc as V,pb as n,qb as h,qc as H,rb as S,ub as y,wb as k}from"./chunk-S6AEAUZ2.js";var X=()=>({width:"250px"});function Y(t,a){if(t&1){let e=S();o(0,"mat-list-item",9),y("click",function(){g(e),k();let l=P(2);return d(l.toggle())}),o(1,"mat-icon",10),i(2),n(),i(3),n()}if(t&2){let e=a.$implicit;C("routerLink",e.url),s(2),D(e.icon),s(),E(" ",e.label," ")}}var w=class t{sideBarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-layout-page"]],decls:21,vars:3,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],["color","primary"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["mat-button",""],[1,"container"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(e,m){if(e&1){let l=S();o(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar",3)(4,"span"),i(5,"Menu"),n(),h(6,"span",4),o(7,"button",5),y("click",function(){g(l);let L=P(2);return d(L.toggle())}),o(8,"mat-icon"),i(9,"menu"),n()()(),o(10,"mat-nav-list"),I(11,Y,4,3,"mat-list-item",6),n()(),o(12,"mat-toolbar",3)(13,"button",5),y("click",function(){g(l);let L=P(2);return d(L.toggle())}),o(14,"mat-icon"),i(15,"menu"),n()(),h(16,"span",4),o(17,"button",7),i(18,"Logout"),n()(),o(19,"div",8),h(20,"router-outlet"),n()()}e&2&&(s(),C("ngStyle",F(2,X)),s(10),C("ngForOf",m.sideBarItems))},dependencies:[T,V,R,B,j,O,A,z,q,$,G,J,K]})};var c=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-new-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"new-page works!"),n())}})};var v=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-search-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"search-page works!"),n())}})};var M=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-list-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"list-page works!"),n())}})};var x=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=r({type:t,selectors:[["app-hero-page"]],decls:2,vars:0,template:function(e,m){e&1&&(o(0,"p"),i(1,"hero-page works!"),n())}})};var Z=[{path:"",component:w,children:[{path:"new-hero",component:c},{path:"search",component:v},{path:"edit/:id",component:c},{path:"list",component:M},{path:":id",component:x},{path:"**",redirectTo:"list"}]}],b=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=u({type:t});static \u0275inj=f({imports:[N.forChild(Z),N]})};var U=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=u({type:t});static \u0275inj=f({imports:[H,b,Q]})};export{U as HeroesModule};