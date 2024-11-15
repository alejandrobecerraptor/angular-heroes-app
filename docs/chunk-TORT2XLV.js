import{V as F,b as c,d as u,e as f,f as d,r as g}from"./chunk-45BK2ULI.js";import{h as I,i as R,j as s,k as L,m as S}from"./chunk-AOZWEWCL.js";import"./chunk-6XXA7HXI.js";import{$ as p,Ab as m,Fb as P,Lc as E,Rb as n,Ya as M,ia as r,ja as l,yb as o,zb as e}from"./chunk-46ZFJWB5.js";var C=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=r({type:i,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(t,b){t&1&&(o(0,"div",0)(1,"div",1),m(2,"router-outlet"),e()())},dependencies:[I]})};var v=class i{constructor(a,t){this.authService=a;this.router=t}onLogin(){this.authService.login("john.due@gmail.com","123456").subscribe(a=>{this.router.navigate(["/"]),console.log(a)})}static \u0275fac=function(t){return new(t||i)(M(S),M(R))};static \u0275cmp=r({type:i,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["matInput","","type","email","name","email","placeholder","Nombre de usuario"],["matInput","","type","password","name","email","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(t,b){t&1&&(o(0,"div",0)(1,"span",1),n(2,"Login"),e(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Usuario"),e(),m(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),n(9,"Contrase\xF1a"),e(),m(10,"input",3),e(),o(11,"button",4),P("click",function(){return b.onLogin()}),o(12,"mat-icon"),n(13,"save"),e(),n(14," Ingresar "),e(),o(15,"div",5)(16,"a",6),n(17," \xBFNo tienes cuenta? Registrate "),e()()())},dependencies:[s,c,f,u,d,g]})};var h=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=r({type:i,selectors:[["app-register-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["matInput","","type","email","name","email","placeholder","Nombre de usuario"],["matInput","","type","password","name","email","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(t,b){t&1&&(o(0,"div",0)(1,"span",1),n(2,"Registro"),e(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Usuario"),e(),m(6,"input",2),e(),o(7,"mat-form-field")(8,"mat-label"),n(9,"Contrase\xF1a"),e(),m(10,"input",3),e(),o(11,"button",4)(12,"mat-icon"),n(13,"save"),e(),n(14," Crear cuenta "),e(),o(15,"div",5)(16,"a",6),n(17," \xBFYa tienes cuenta? Ingresar "),e()()())},dependencies:[s,c,f,u,d,g]})};var B=[{path:"",component:C,children:[{path:"login",component:v},{path:"new-account",component:h},{path:"**",redirectTo:"login"}]}],x=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=p({imports:[L.forChild(B),L]})};var w=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=l({type:i});static \u0275inj=p({imports:[E,x,F]})};export{w as AuthModule};