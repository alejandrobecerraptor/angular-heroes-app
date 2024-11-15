import{A as T,B as re,C as oe,D as Xe,E as Ke,F as Qe,G as We,H as Ye,I as Ze,J as et,K as tt,L as R,M as it,N as rt,O as ot,P as nt,Q as at,R as mt,S as st,T as pt,U as lt,V as ct,a as X,b,c as Te,d as K,e as Q,f as k,g as W,h as Y,i as Re,j as Be,k as S,l as Ae,m as je,n as Ve,o as $e,p as Ue,q as qe,r as Z,s as Ge,t as ze,u as O,v as ee,w as L,x as te,y as Je,z as ie}from"./chunk-BQMCFNAQ.js";import{a as De,g as z,h as ke,i as D,j as J,k as Ce,l as Oe,m as Le}from"./chunk-733EJPHN.js";import"./chunk-6XXA7HXI.js";import{$ as q,$b as Ee,A as ge,Ab as p,C as he,Cb as H,Fb as d,Fc as _,Gc as N,Hb as x,Hc as we,Jc as Pe,Kc as Fe,Lc as Ne,Qb as E,Rb as n,Sb as h,T as V,Tb as u,Ua as F,Wb as xe,Xa as m,Xb as ve,Ya as c,Yb as y,Zb as w,_ as Ie,_b as ye,da as Me,ia as f,ja as G,la as He,n as fe,nb as g,r as Se,ra as v,sa as C,sb as s,yb as r,zb as i}from"./chunk-46ZFJWB5.js";var ht=()=>({width:"250px"});function vt(o,t){if(o&1){let e=H();r(0,"mat-list-item",9),d("click",function(){v(e),x();let l=E(2);return C(l.toggle())}),r(1,"mat-icon",10),n(2),i(),n(3),i()}if(o&2){let e=t.$implicit;s("routerLink",e.url),m(2),h(e.icon),m(),u(" ",e.label," ")}}var ne=class o{constructor(t,e){this.AuthService=t;this.router=e}sideBarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xF1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}];get user(){return this.AuthService.currentUser}onLogout(){this.AuthService.logout(),this.router.navigate(["/auth/login"])}static \u0275fac=function(e){return new(e||o)(c(Le),c(D))};static \u0275cmp=f({type:o,selectors:[["app-layout-page"]],decls:23,vars:4,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],["color","primary"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[1,"container"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(e,a){if(e&1){let l=H();r(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar",3)(4,"span"),n(5,"Menu"),i(),p(6,"span",4),r(7,"button",5),d("click",function(){v(l);let j=E(2);return C(j.toggle())}),r(8,"mat-icon"),n(9,"menu"),i()()(),r(10,"mat-nav-list"),g(11,vt,4,3,"mat-list-item",6),i()(),r(12,"mat-toolbar",3)(13,"button",5),d("click",function(){v(l);let j=E(2);return C(j.toggle())}),r(14,"mat-icon"),n(15,"menu"),i()(),p(16,"span",4),r(17,"span"),n(18),i(),r(19,"button",7),d("click",function(){return v(l),C(a.onLogout())}),n(20,"Logout"),i()(),r(21,"div",8),p(22,"router-outlet"),i()()}e&2&&(m(),s("ngStyle",xe(3,ht)),m(10),s("ngForOf",a.sideBarItems),m(7),h(a.user==null?null:a.user.email))},dependencies:[_,we,ke,J,b,Te,k,ot,rt,it,mt,st,lt]})};var me=class o{constructor(t,e){this.dialogRef=t;this.data=e}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||o)(c(Xe),c(Ke))};static \u0275cmp=f({type:o,selectors:[["app-confirm-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","color","warn",3,"click"],[1,"spacer"],["mat-button","","color","primary","cdkFocusInitial","",3,"click"]],template:function(e,a){e&1&&(r(0,"h1",0),n(1,"\xBFEst\xE1s seguro?"),i(),r(2,"div",1)(3,"p"),n(4),i()(),r(5,"div",2)(6,"button",3),d("click",function(){return a.onNoClick()}),n(7,"No"),i(),p(8,"span",4),r(9,"button",5),d("click",function(){return a.onConfirm()}),n(10," S\xED "),i()()),e&2&&(m(4),u("\xBFEst\xE1s seguro que quieres borrar ",a.data.superhero," ?"))},dependencies:[b,We,Ze,Ye]})};var M=class o{constructor(t){this.http=t}baseUrl=Oe.baseUrl;getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(t){return this.http.get(`${this.baseUrl}/heroes/${t}`).pipe(he(e=>fe(void 0)))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){if(!t.id)throw new Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHeroById(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe(Se(e=>!0),he(()=>fe(!1)))}static \u0275fac=function(e){return new(e||o)(Me(De))};static \u0275prov=Ie({token:o,factory:o.\u0275fac,providedIn:"root"})};var P=class o{transform(t){return!t.id&&!t.alt_img?"assets/no-image.png":t.alt_img?t.alt_img:`assets/heroes/${t.id}.jpg`}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=He({name:"heroImage",type:o,pure:!0})};function Mt(o,t){if(o&1&&(r(0,"mat-option",16),n(1),i()),o&2){let e=t.$implicit;s("value",e.id),m(),u(" ",e.desc," ")}}function Ht(o,t){if(o&1){let e=H();r(0,"button",17),d("click",function(){v(e);let l=x();return C(l.onDeleteHero())}),r(1,"mat-icon"),n(2,"delete"),i(),n(3," Borrar "),i()}}var U=class o{constructor(t,e,a,l,A){this.heroService=t;this.activatedRoute=e;this.router=a;this.snackbar=l;this.dialog=A}heroForm=new Be({id:new S(""),superhero:new S("",{nonNullable:!0}),publisher:new S("DC Comics"),alter_ego:new S(""),first_appearance:new S(""),characters:new S(""),alt_img:new S("")});publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}];ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe(V(({id:t})=>this.heroService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("/");this.heroForm.reset(t)})}get currentHero(){return this.heroForm.value}onSumit(){this.heroForm.invalid||(this.currentHero.id?this.heroService.updateHero(this.currentHero).subscribe(t=>{this.showSnackBar(`${t.superhero} actualizado correctamente`)}):this.heroService.addHero(this.currentHero).subscribe(t=>{this.router.navigate(["/heroes/edit",t.id]),this.showSnackBar(`${t.superhero} agregado correctamente`)}))}onDeleteHero(){if(!this.currentHero.id)throw new Error("Hero id is required");this.dialog.open(me,{data:this.heroForm.value}).afterClosed().pipe(ge(e=>e),V(()=>this.heroService.deleteHeroById(this.currentHero.id)),ge(e=>e)).subscribe(e=>{this.showSnackBar(`${this.currentHero.superhero} borrado correctamente`),this.router.navigate(["/heroes"])})}showSnackBar(t){this.snackbar.open(t,"X",{duration:2500})}static \u0275fac=function(e){return new(e||o)(c(M),c(z),c(D),c(pt),c(Qe))};static \u0275cmp=f({type:o,selectors:[["app-new-page"]],decls:46,vars:8,consts:[[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"ngSubmit","formGroup"],["matInput","","type","text","required","","formControlName","superhero"],["matInput","","type","text","required","","formControlName","alter_ego"],[1,"col-12"],["matInput","","type","text","required","","formControlName","first_appearance"],["matInput","","type","text","required","","formControlName","characters"],["required","","formControlName","publisher"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["mat-card-image","","alt","imagen del superh\xE9roe",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(e,a){e&1&&(r(0,"h5"),n(1),r(2,"small"),n(3),i()(),p(4,"mat-divider",0),r(5,"div",1)(6,"div",2)(7,"mat-card")(8,"mat-card-content")(9,"form",3),d("ngSubmit",function(){return a.onSumit()}),r(10,"mat-form-field",2)(11,"mat-label"),n(12,"Super h\xE9roe"),i(),p(13,"input",4),i(),r(14,"mat-form-field",2)(15,"mat-label"),n(16,"Alter ego"),i(),p(17,"input",5),i(),r(18,"mat-form-field",6)(19,"mat-label"),n(20,"Primera aparici\xF3n"),i(),p(21,"input",7),i(),r(22,"mat-form-field",6)(23,"mat-label"),n(24,"Personajes"),i(),p(25,"input",8),i(),r(26,"mat-form-field",6)(27,"mat-label"),n(28,"Creador"),i(),r(29,"mat-select",9),g(30,Mt,2,2,"mat-option",10),i()(),r(31,"mat-form-field",6)(32,"mat-label"),n(33,"Alternative image"),i(),p(34,"input",11),i()(),r(35,"div",12),g(36,Ht,4,0,"button",13),p(37,"span"),r(38,"button",14),d("click",function(){return a.onSumit()}),r(39,"mat-icon"),n(40,"save"),i(),n(41," Guardar "),i()()()()(),r(42,"div",2)(43,"mat-card"),p(44,"img",15),y(45,"heroImage"),i()()()),e&2&&(m(),u(" ",a.currentHero.id?"Editar":"Agregar"," superh\xE9roe "),m(2),h(a.currentHero.superhero),m(6),s("formGroup",a.heroForm),m(21),s("ngForOf",a.publishers),m(6),s("ngIf",a.currentHero.id),m(8),s("src",w(45,6,a.currentHero),F))},dependencies:[_,N,X,b,O,L,T,Q,K,k,Z,R,at,Ae,W,Y,Re,Ue,Ve,$e,P]})};function xt(o,t){if(o&1&&(r(0,"mat-option",6),n(1),i()),o&2){let e=t.$implicit;s("value",e),m(),u(" ",e.superhero," ")}}function yt(o,t){if(o&1&&(r(0,"mat-option",7),n(1,"No hay resultados para "),r(2,"strong"),n(3),i()()),o&2){let e=x();m(3),u(' "',e.searchInput.value,'" ')}}var pe=class o{constructor(t){this.heroService=t}searchInput=new S("");heroes=[];selectedHero;searchHero(){let t=this.searchInput.value||"";this.heroService.getSuggestions(t).subscribe(e=>this.heroes=e)}onSelectedOption(t){if(!t.option.value){this.selectedHero=void 0;return}let e=t.option.value;this.searchInput.setValue(e.superhero),this.selectedHero=e}static \u0275fac=function(e){return new(e||o)(c(M))};static \u0275cmp=f({type:o,selectors:[["app-search-page"]],decls:13,vars:7,consts:[["auto","matAutocomplete"],[1,"flex","flex-column","p-2"],["matInput","","type","text",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(e,a){if(e&1){let l=H();r(0,"div",1)(1,"h3"),n(2,"Buscador"),i(),r(3,"mat-form-field")(4,"mat-label"),n(5,"Buscar superh\xE9roe"),i(),r(6,"input",2),d("input",function(){return v(l),C(a.searchHero())}),i(),r(7,"mat-autocomplete",3,0),d("optionSelected",function(j){return v(l),C(a.onSelectedOption(j))}),g(9,xt,2,2,"mat-option",4)(10,yt,4,1,"mat-option",5),i()(),n(11),y(12,"json"),i()}if(e&2){let l=E(8);m(6),s("formControl",a.searchInput)("matAutocomplete",l),m(3),s("ngForOf",a.heroes),m(),s("ngIf",a.heroes.length===0&&a.searchInput.value&&a.searchInput.value.length>0),m(),u(" ",w(12,5,a.selectedHero),`
`)}},dependencies:[_,N,Ge,X,ze,Q,K,Z,W,Y,je,Pe]})};var wt=o=>["/heroes/edit",o],Pt=o=>["/heroes",o];function Ft(o,t){if(o&1&&(r(0,"mat-chip"),n(1),i()),o&2){let e=t.$implicit;m(),u(" ",e," ")}}var le=class o{hero;ngOnInit(){if(!this.hero)throw new Error("Hero is required")}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=f({type:o,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:31,vars:19,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised-button","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised-button","",3,"routerLink"]],template:function(e,a){e&1&&(r(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),n(3),i(),r(4,"mat-card-subtitle"),n(5),i()(),p(6,"img",0),y(7,"heroImage"),r(8,"mat-card-content",1)(9,"h4"),n(10),i(),r(11,"p")(12,"strong"),n(13," primera aparicion: "),i(),n(14),p(15,"br"),r(16,"mat-chip-listbox"),g(17,Ft,2,1,"mat-chip",2),y(18,"slice"),i()()(),p(19,"mat-divider"),r(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),n(23,"edit"),i(),n(24," Editar "),i(),p(25,"span",4),r(26,"button",5),n(27," > "),r(28,"mat-icon"),n(29,"more_horiz"),i(),n(30," Mas "),i()()()),e&2&&(m(3),h(a.hero.superhero),m(2),h(a.hero.alter_ego),m(),s("src",w(7,9,a.hero),F)("alt",a.hero.superhero),m(4),h(a.hero.publisher),m(4),u(" ",a.hero.first_appearance," "),m(3),s("ngForOf",ye(18,11,a.hero.characters.split(","),0,3)),m(4),s("routerLink",ve(15,wt,a.hero.id)),m(5),s("routerLink",ve(17,Pt,a.hero.id)))},dependencies:[_,J,b,O,Je,L,ie,T,te,ee,re,oe,k,R,Fe,P]})};function Dt(o,t){if(o&1&&(r(0,"div",2),p(1,"heroes-hero-card",3),i()),o&2){let e=t.$implicit;m(),s("hero",e)}}var ce=class o{constructor(t){this.heroesService=t}heroes=[];ngOnInit(){this.heroesService.getHeroes().subscribe(t=>this.heroes=t)}static \u0275fac=function(e){return new(e||o)(c(M))};static \u0275cmp=f({type:o,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","bm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(e,a){e&1&&(r(0,"h4"),n(1,"Listado de heroes"),i(),p(2,"mat-divider"),r(3,"div",0),g(4,Dt,2,1,"div",1),i()),e&2&&(m(4),s("ngForOf",a.heroes))},dependencies:[_,R,le]})};function kt(o,t){o&1&&(r(0,"mat-grid-list",2)(1,"mat-grid-tile"),p(2,"mat-spinner"),i()())}function Ot(o,t){if(o&1&&(r(0,"mat-chip"),n(1),i()),o&2){let e=t.$implicit;m(),u(" ",e," ")}}function Lt(o,t){if(o&1){let e=H();r(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),n(4),i(),r(5,"mat-card-subtitle"),n(6),i()(),p(7,"img",5),y(8,"heroImage"),i(),r(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),n(12,"Informaci\xF3n"),i(),r(13,"mat-card-subtitle"),n(14),i()(),r(15,"mat-card-content")(16,"p")(17,"strong"),n(18," primera aparicion: "),i(),n(19),p(20,"br"),r(21,"mat-chip-listbox"),g(22,Ot,2,1,"mat-chip",6),i()(),r(23,"button",7),d("click",function(){v(e);let l=x();return C(l.goBack())}),n(24,"Regresar"),i()()()()}if(o&2){let e=x();m(4),h(e.hero.alter_ego),m(2),h(e.hero.superhero),m(),s("src",w(8,7,e.hero),F)("alt",e.hero.superhero),m(7),h(e.hero.superhero),m(5),u(" ",e.hero.first_appearance," "),m(3),s("ngForOf",e.hero.characters.split(","))}}var de=class o{constructor(t,e,a){this.heroService=t;this.activatedRoute=e;this.router=a}hero;ngOnInit(){this.activatedRoute.params.pipe(V(({id:t})=>this.heroService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigate(["/heroes/list"]);this.hero=t})}goBack(){this.router.navigate(["/heroes/list"])}static \u0275fac=function(e){return new(e||o)(c(M),c(z),c(D))};static \u0275cmp=f({type:o,selectors:[["app-hero-page"]],decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],[4,"ngFor","ngForOf"],["mat-button","","color","warn",3,"click"]],template:function(e,a){if(e&1&&g(0,kt,3,0,"ng-template",null,0,Ee)(2,Lt,25,9,"div",1),e&2){let l=E(1);m(2),s("ngIf",a.hero)("ngIfElse",l)}},dependencies:[_,N,b,O,L,ie,T,te,ee,re,oe,tt,et,nt,P]})};var Tt=[{path:"",component:ne,children:[{path:"new-hero",component:U},{path:"search",component:pe},{path:"edit/:id",component:U},{path:"list",component:ce},{path:":id",component:de},{path:"**",redirectTo:"list"}]}],ue=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=G({type:o});static \u0275inj=q({imports:[Ce.forChild(Tt),Ce]})};var gt=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=G({type:o});static \u0275inj=q({imports:[Ne,ue,ct,qe]})};export{gt as HeroesModule};
