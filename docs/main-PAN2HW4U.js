import{b as L,c as V,d as z,e as Y,h as Z,i as g,k as M,m as v}from"./chunk-733EJPHN.js";import{$ as l,$a as E,Aa as _,Ab as U,Ia as j,Lc as H,Rb as B,W as h,X as I,Za as D,_ as c,ba as w,bb as O,da as p,ea as R,eb as k,ia as f,ja as m,ma as P,r as F,xc as G,yb as x,zb as T}from"./chunk-46ZFJWB5.js";var y=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=f({type:o,selectors:[["app-error404-page"]],decls:2,vars:0,template:function(e,r){e&1&&(x(0,"p"),B(1,"error404-page works!"),T())}})};var d=class o{constructor(t,e){this.authService=t;this.router=e}checkAuthStatus(){return this.authService.checkAuthentication().pipe(h(t=>{t||this.router.navigate(["/auth/login"])}))}canMatch(t,e){return console.log("activate can match"),console.log(t,e),this.checkAuthStatus()}canActivate(t,e){return console.log("activate can active"),console.log({route:t,state:e}),this.checkAuthStatus()}static \u0275fac=function(e){return new(e||o)(p(v),p(g))};static \u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"})};var u=class o{constructor(t,e){this.authService=t;this.router=e}checkAuthStatus(){return this.authService.checkAuthentication().pipe(h(t=>{t&&this.router.navigate(["/"])}),F(t=>!t))}canMatch(t,e){return console.log("activate can match"),console.log(t,e),this.checkAuthStatus()}canActivate(t,e){return console.log("activate can active"),console.log({route:t,state:e}),this.checkAuthStatus()}static \u0275fac=function(e){return new(e||o)(p(v),p(g))};static \u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"})};var Q=[{path:"auth",loadChildren:()=>import("./chunk-W3O77CQ6.js").then(o=>o.AuthModule),canActivate:[u],canMatch:[u]},{path:"heroes",loadChildren:()=>import("./chunk-IZ7WFLIS.js").then(o=>o.HeroesModule),canActivate:[d],canMatch:[d]},{path:"404",component:y},{path:"",redirectTo:"heroes",pathMatch:"full"},{path:"**",redirectTo:"404"}],A=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[M.forRoot(Q),M]})};var b=class o{title="heroesApp";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=f({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(e,r){e&1&&U(0,"router-outlet")},dependencies:[Z]})};var S=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=m({type:o});static \u0275inj=l({imports:[H]})};var $="@",ee=(()=>{class o{constructor(e,r,i,n,a){this.doc=e,this.delegate=r,this.zone=i,this.animationType=n,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=R(E,{optional:!0}),this.loadingSchedulerFn=R(te,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-3XCAEMEA.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new I(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc);let a=new n(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let n=new N(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let q=a.createRenderer(e,r);n.use(q),this.scheduler?.notify(10)}).catch(a=>{n.use(i)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){D()}}static{this.\u0275prov=c({token:o,factory:o.\u0275fac})}}return o})(),N=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,i){this.delegate.insertBefore(t,e,r,i)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,i){this.delegate.setAttribute(t,e,r,i)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,i){this.delegate.setStyle(t,e,r,i)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith($)}},te=new w("");function X(o="animations"){return k("NgAsyncAnimations"),P([{provide:O,useFactory:(t,e,r)=>new ee(t,e,r,o),deps:[G,V,_]},{provide:j,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var C=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=m({type:o,bootstrap:[b]});static \u0275inj=l({providers:[X(),L()],imports:[Y,A,S]})};z().bootstrapModule(C,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
