import{Aa as p,Ba as F,Db as y,K as v,M as c,N as I,P as m,R as h,S as f,V as L,W as D,X as M,aa as B,ha as O,ka as g,qb as P,rb as N,ta as R,va as u,wb as C,xa as T,xb as k,yb as $}from"./chunk-7TTOVAOP.js";var H=null;function E(){return H}function Ke(t){H??=t}var x=class{};var Y=new m(""),Z=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=c({token:t,factory:()=>f(X),providedIn:"platform"})}}return t})();var X=(()=>{class t extends Z{constructor(){super(),this._doc=f(Y),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return E().getBaseHref(this._doc)}onPopState(e){let n=E().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=E().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=c({token:t,factory:()=>new t,providedIn:"platform"})}}return t})();function W(t,i){if(t.length==0)return i;if(i.length==0)return t;let e=0;return t.endsWith("/")&&e++,i.startsWith("/")&&e++,e==2?t+i.substring(1):e==1?t+i:t+"/"+i}function U(t){let i=t.match(/#|\?|$/),e=i&&i.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function l(t){return t&&t[0]!=="?"?"?"+t:t}var b=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=c({token:t,factory:()=>f(J),providedIn:"root"})}}return t})(),Q=new m(""),J=(()=>{class t extends b{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return W(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+l(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+l(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+l(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(n){return new(n||t)(h(Z),h(Q,8))}}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ee=(()=>{class t{constructor(e){this._subject=new O,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=ie(U(z(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+l(n))}normalize(e){return t.stripTrailingSlash(ne(this._basePath,z(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+l(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+l(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}static{this.normalizeQueryParams=l}static{this.joinWithSlash=W}static{this.stripTrailingSlash=U}static{this.\u0275fac=function(n){return new(n||t)(h(b))}}static{this.\u0275prov=c({token:t,factory:()=>te(),providedIn:"root"})}}return t})();function te(){return new ee(h(b))}function ne(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function z(t){return t.replace(/\/index.html$/,"")}function ie(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function qe(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var w=/\s+/,V=[],Xe=(()=>{class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=V,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(w):V}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(w):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(w).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static{this.\u0275fac=function(n){return new(n||t)(u(g),u(p))}}static{this.\u0275dir=D({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return t})();var _=class{constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Qe=(()=>{class t{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,s,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new _(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let a=n.get(s);n.move(a,o),j(a,r)}});for(let r=0,s=n.length;r<s;r++){let a=n.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);j(s,r)})}static ngTemplateContextGuard(e,n){return!0}static{this.\u0275fac=function(n){return new(n||t)(u(F),u(T),u(k))}}static{this.\u0275dir=D({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return t})();function j(t,i){t.context.$implicit=i.item}var Je=(()=>{class t{constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,s]=e.split("."),o=r.indexOf("-")===-1?void 0:R.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${n}${s}`:n,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static{this.\u0275fac=function(n){return new(n||t)(u(g),u($),u(p))}}static{this.\u0275dir=D({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return t})(),et=(()=>{class t{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static{this.\u0275fac=function(n){return new(n||t)(u(F))}}static{this.\u0275dir=D({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[B]})}}return t})();function re(t,i){return new v(2100,!1)}var S=class{createSubscription(i,e){return y(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){y(()=>i.unsubscribe())}},A=class{createSubscription(i,e){return i.then(e,n=>{throw n})}dispose(i){}},se=new A,oe=new S,tt=(()=>{class t{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(P(e))return se;if(N(e))return oe;throw re(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static{this.\u0275fac=function(n){return new(n||t)(u(C,16))}}static{this.\u0275pipe=M({name:"async",type:t,pure:!1,standalone:!0})}}return t})();var nt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=L({type:t})}static{this.\u0275inj=I({})}}return t})(),ue="browser",ae="server";function it(t){return t===ue}function rt(t){return t===ae}var G=class{};var d=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(d||{}),ut="*";function at(t,i){return{type:d.Trigger,name:t,definitions:i,options:{}}}function ct(t,i=null){return{type:d.Animate,styles:i,timings:t}}function lt(t,i=null){return{type:d.Sequence,steps:t,options:i}}function dt(t){return{type:d.Style,styles:t,offset:null}}function ht(t,i,e){return{type:d.State,name:t,styles:i,options:e}}function ft(t,i,e=null){return{type:d.Transition,expr:t,animation:i,options:e}}var K=class{constructor(i=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},q=class{constructor(i){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=i;let e=0,n=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==s&&this._onFinish()}),o.onDestroy(()=>{++n==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(n=>{let r=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(r)})}getPosition(){let i=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Dt="!";export{E as a,Ke as b,x as c,Y as d,b as e,ee as f,qe as g,Xe as h,Qe as i,Je as j,et as k,tt as l,nt as m,ue as n,it as o,rt as p,G as q,d as r,ut as s,at as t,ct as u,lt as v,dt as w,ht as x,ft as y,K as z,q as A,Dt as B};
