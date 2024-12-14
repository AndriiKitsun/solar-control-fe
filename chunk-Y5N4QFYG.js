import{$ as ce,F as ie,H as re,J as R,K as se,Ka as fe,L as ae,Ob as Le,P as O,Ra as x,S as L,U as b,Ua as he,V as p,Va as ge,Z as oe,ba as m,c as Y,f as Z,fa as le,fb as pe,g as Q,ga as ue,h as X,i as $,j as D,kc as k,n as T,na as I,o as ee,qb as ve,t as E,ta as de,w as te,z as ne}from"./chunk-MSRKW7RL.js";import{a as h,b as j,c as W}from"./chunk-4CLCTAJ7.js";function F(t){t||(le(F),t=p(I));let r=new Y(e=>t.onDestroy(e.next.bind(e)));return e=>e.pipe(se(r))}function be(t){return t&&t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ye(t){return t}function _(t,r){r=r||{};let e=r.delimiter||".",n=r.maxDepth,i=r.transformKey||ye,s={};function a(o,d,u){u=u||1,Object.keys(o).forEach(function(c){let l=o[c],f=r.safe&&Array.isArray(l),g=Object.prototype.toString.call(l),v=be(l),N=g==="[object Object]"||g==="[object Array]",C=d?d+e+i(c):i(c);if(!f&&!v&&N&&Object.keys(l).length&&(!r.maxDepth||u<n))return a(l,C,u+1);s[C]=l})}return a(t),s}function P(t,r){r=r||{};let e=r.delimiter||".",n=r.overwrite||!1,i=r.transformKey||ye,s={};if(be(t)||Object.prototype.toString.call(t)!=="[object Object]")return t;function o(c){let l=Number(c);return isNaN(l)||c.indexOf(".")!==-1||r.object?c:l}function d(c,l,f){return Object.keys(f).reduce(function(g,v){return g[c+e+v]=f[v],g},l)}function u(c){let l=Object.prototype.toString.call(c),f=l==="[object Array]",g=l==="[object Object]";if(c){if(f)return!c.length;if(g)return!Object.keys(c).length}else return!0}return t=Object.keys(t).reduce(function(c,l){let f=Object.prototype.toString.call(t[l]);return!(f==="[object Object]"||f==="[object Array]")||u(t[l])?(c[l]=t[l],c):d(l,c,_(t[l],r))},{}),Object.keys(t).forEach(function(c){let l=c.split(e).map(i),f=o(l.shift()),g=o(l[0]),v=s;for(;g!==void 0;){if(f==="__proto__")return;let N=Object.prototype.toString.call(v[f]),C=N==="[object Object]"||N==="[object Array]";if(!n&&!C&&typeof v[f]<"u")return;(n&&!C||!n&&v[f]==null)&&(v[f]=typeof g=="number"&&!r.object?[]:{}),v=v[f],l.length>0&&(f=o(l.shift()),g=o(l[0]))}v[f]=P(t[c],r)}),s}var H=class{translations;constructor(r){this.translations=r}getTranslation(r){return D(this.translations.get(r)||{})}},Oe=new L("TRANSLOCO_LOADER");function V(t,r){return t&&(Object.prototype.hasOwnProperty.call(t,r)?t[r]:r.split(".").reduce((e,n)=>e?.[n],t))}function Fe(t,r,e){t=h({},t);let n=r.split("."),i=n.length-1;return n.reduce((s,a,o)=>(o===i?s[a]=e:s[a]=Array.isArray(s[a])?s[a].slice():h({},s[a]),s&&s[a]),t),t}function Se(t){return t?Array.isArray(t)?t.length:J(t)?Object.keys(t).length:t?t.length:0:0}function $e(t){return Se(t)===0}function Ee(t){return typeof t=="function"}function A(t){return typeof t=="string"}function J(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function Ae(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(r,e)=>e==0?r.toLowerCase():r.toUpperCase()).replace(/\s+|_|-|\//g,"")}function B(t){return t==null}function me(t){return B(t)===!1}function we(t){return t&&typeof t.scope=="string"}function xe(t){return t&&J(t.loader)}function ke(t){return P(t)}function Te(t){return _(t,{safe:!0})}var w=new L("TRANSLOCO_CONFIG",{providedIn:"root",factory:()=>S}),S={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function _e(t={}){return j(h(h({},S),t),{missingHandler:h(h({},S.missingHandler),t.missingHandler),flatten:h(h({},S.flatten),t.flatten),scopes:h(h({},S.scopes),t.scopes)})}var Ce=new L("TRANSLOCO_TRANSPILER"),Pe=(()=>{class t{config=p(w,{optional:!0})??S;get interpolationMatcher(){return Ve(this.config)}transpile({value:e,params:n={},translation:i,key:s}){if(A(e)){let a,o=e;for(;(a=this.interpolationMatcher.exec(o))!==null;){let[d,u]=a;o=o.replace(d,()=>{let c=u.trim(),l=V(n,c);return me(l)?l:me(i[c])?this.transpile({params:n,translation:i,key:s,value:i[c]}):""})}return o}else n&&(J(e)?e=this.handleObject({value:e,params:n,translation:i,key:s}):Array.isArray(e)&&(e=this.handleArray({value:e,params:n,translation:i,key:s})));return e}handleObject({value:e,params:n={},translation:i,key:s}){let a=e;return Object.keys(n).forEach(o=>{let d=this.transpile({value:V(a,o),params:V(n,o),translation:i,key:s});a=Fe(a,o,d)}),a}handleArray(i){var s=i,{value:e}=s,n=W(s,["value"]);return e.map(a=>this.transpile(h({value:a},n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function Ve(t){let[r,e]=t.interpolation;return new RegExp(`${r}([^${r}${e}]*?)${e}`,"g")}var je=new L("TRANSLOCO_MISSING_HANDLER"),Ke=(()=>{class t{handle(e,n){if(n.missingHandler.logMissingKey&&!n.prodMode){let i=`Missing translation for '${e}'`;console.warn(`%c ${i}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Re=new L("TRANSLOCO_INTERCEPTOR"),He=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,n){return n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})(),Me=new L("TRANSLOCO_FALLBACK_STRATEGY"),Be=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=O({token:t,factory:t.\u0275fac})}return t})();function M(t){if(!t)return"";let r=t.split("/");return r.pop(),r.join("/")}function y(t){return t?t.split("/").pop():""}function G(t,r,e="|"){if(A(t)){let n=t.split(e),i=n.pop();return i===r?[!0,n.toString()]:[!1,i]}return[!1,""]}function Ge(t,r){let[e]=G(r,"static");return e?!1:!!t.config.reRenderOnLangChange}function qe(t){return t?r=>r:ne(1)}function ze(t,r){return Object.keys(t).reduce((e,n)=>(e[`${r}/${n}`]=t[n],e),{})}function Ne(t,r){return xe(t)?ze(t.loader,r):void 0}function K(t){return{scope:M(t)||null,langName:y(t)}}function De(t){let{path:r,inlineLoader:e,mainLoader:n,data:i}=t;if(e){let s=e[r];if(Ee(s)===!1)throw`You're using an inline loader but didn't provide a loader for ${r}`;return e[r]().then(a=>a.default?a.default:a)}return n.getTranslation(r,i)}function Ue({mainLoader:t,path:r,data:e,fallbackPath:n,inlineLoader:i}){return(n?[r,n]:[r]).map(a=>{let o=De({path:a,mainLoader:t,inlineLoader:i,data:e});return $(o).pipe(T(d=>({translation:d,lang:a})))})}var Je;var We=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new Z;events$=this.events.asObservable();config;constructor(e,n,i,s,a,o){this.loader=e,this.parser=n,this.missingHandler=i,this.interceptor=s,this.fallbackStrategy=o,this.loader||(this.loader=new H(this.translations)),Je=this,this.config=JSON.parse(JSON.stringify(a)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new Q(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.pipe(F()).subscribe(d=>{d.type==="translationLoadSuccess"&&d.wasFailure&&this.setActiveLang(d.payload.langName)})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:K(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,n={}){let i=this.cache.get(e);if(i)return i;let s,a=this._isLangScoped(e),o;a&&(o=M(e));let d={path:e,mainLoader:this.loader,inlineLoader:n.inlineLoader,data:a?{scope:o}:void 0};if(this.useFallbackTranslation(e)){let c=a?`${o}/${this.firstFallbackLang}`:this.firstFallbackLang,l=Ue(j(h({},d),{fallbackPath:c}));s=E(l)}else{let c=De(d);s=$(c)}let u=s.pipe(ie(this.config.failedRetries),ae(c=>{if(Array.isArray(c)){c.forEach(l=>{this.handleSuccess(l.lang,l.translation),l.lang!==e&&this.cache.set(l.lang,D({}))});return}this.handleSuccess(e,c)}),te(c=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,c),this.handleFailure(e,n))),re(1));return this.cache.set(e,u),u}translate(e,n={},i=this.getActiveLang()){if(!e)return e;let{scope:s,resolveLang:a}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(u=>this.translate(s?`${s}.${u}`:u,n,a));e=s?`${s}.${e}`:e;let o=this.getTranslation(a),d=o[e];return d?this.parser.transpile({value:d,params:n,translation:o,key:e}):this._handleMissingKey(e,d,n)}selectTranslate(e,n,i,s=!1){let a,o=(u,c)=>this.load(u,c).pipe(T(()=>s?this.translateObject(e,n,u):this.translate(e,n,u)));if(B(i))return this.langChanges$.pipe(R(u=>o(u)));if(i=Array.isArray(i)?i[0]:i,we(i)){let u=i;i=u.scope,a=Ne(u,u.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return o(i);let d=i;return this.langChanges$.pipe(R(u=>o(`${d}/${u}`,{inlineLoader:a})))}isScopeWithLang(e){return this.isLang(y(e))}translateObject(e,n={},i=this.getActiveLang()){if(A(e)||Array.isArray(e)){let{resolveLang:a,scope:o}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(c=>this.translateObject(o?`${o}.${c}`:c,n,a));let d=this.getTranslation(a);e=o?`${o}.${e}`:e;let u=ke(this.getObjectByKey(d,e));return $e(u)?this.translate(e,n,i):this.parser.transpile({value:u,params:n,translation:d,key:e})}let s=[];for(let[a,o]of this.getEntries(e))s.push(this.translateObject(a,o,i));return s}selectTranslateObject(e,n,i){if(A(e)||Array.isArray(e))return this.selectTranslate(e,n,i,!0);let[[s,a],...o]=this.getEntries(e);return this.selectTranslateObject(s,a,i).pipe(T(d=>{let u=[d];for(let[c,l]of o)u.push(this.translateObject(c,l,i));return u}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:n,resolveLang:i}=this.resolveLangAndScope(e),s=this.translations.get(i)||{};return this.getObjectByKey(s,n)}}return this.translations}selectTranslation(e){let n=this.langChanges$;if(e){let i=y(e)!==e;this.isLang(e)||i?n=D(e):n=this.langChanges$.pipe(T(s=>`${e}/${s}`))}return n.pipe(R(i=>this.load(i).pipe(T(()=>this.getTranslation(i)))))}setTranslation(e,n=this.getActiveLang(),i={}){let a=h(h({},{merge:!0,emitChange:!0}),i),o=M(n),d=e;if(o){let g=this.getMappedScope(o);d=Te({[g]:e})}let u=o?y(n):n,c=h(h({},a.merge&&this.getTranslation(u)),d),l=this.config.flatten.aot?c:Te(c),f=this.interceptor.preSaveTranslation(l,u);this.translations.set(u,f),a.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,n,i={}){let s=i.lang||this.getActiveLang(),a=this.interceptor.preSaveTranslationKey(e,n,s),o={[e]:a};this.setTranslation(o,s,j(h({},i),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let n=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(n)&&(this.firstFallbackLang=n)}_handleMissingKey(e,n,i){if(this.config.missingHandler.allowEmpty&&n==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let s=this.translate(e,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,s}return this.missingHandler.handle(e,this.getMissingHandlerData(),i)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,n){let i=y(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(i)?ee([this.load(i),this.load(e,{inlineLoader:n})]):this.load(e,{inlineLoader:n})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(y(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,n){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=n}ngOnDestroy(){this.cache.clear()}isLoadedTranslation(e){return Se(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return A(e)?this.getAvailableLangs():this.getAvailableLangs().map(n=>n.id)}getMissingHandlerData(){return j(h({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,n){this.setTranslation(n,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:K(e)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(e,n){B(n.failedCounter)&&(n.failedCounter=0,n.fallbackLangs||(n.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let i=e.split("/"),a=n.fallbackLangs[n.failedCounter];if(this.failedLangs.add(e),this.cache.has(a))return this.handleSuccess(a,this.getTranslation(a)),X;let o=a===i[i.length-1];if(!a||o){let u="Unable to load translation and all the fallback languages";throw i.length>1&&(u+=", did you misspelled the scope name?"),new Error(u)}let d=a;return i.length>1&&(i[i.length-1]=a,d=i.join("/")),n.failedCounter++,this.events.next({type:"translationLoadFailure",payload:K(e)}),this.load(d,n)}getMappedScope(e){let{scopeMapping:n={},scopes:i={keepCasing:!1}}=this.config;return n[e]||(i.keepCasing?e:Ae(e))}resolveLangAndScope(e){let n=e,i;if(this._isLangScoped(e)){let s=y(e),a=this.isLang(s);n=a?s:this.getActiveLang(),i=this.getMappedScope(a?M(e):e)}return{scope:i,resolveLang:n}}getObjectByKey(e,n){let i={},s=`${n}.`;for(let a in e)a.startsWith(s)&&(i[a.replace(s,"")]=e[a]);return i}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(n){return new(n||t)(b(Oe,8),b(Ce),b(je),b(Re),b(w),b(Me))};static \u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ye=(()=>{class t{html;static \u0275fac=function(n){return new(n||t)};static \u0275cmp=oe({type:t,selectors:[["ng-component"]],inputs:{html:"html"},standalone:!0,features:[Le],decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(n,i){n&1&&ve(0,"div",0),n&2&&pe("innerHTML",i.html,fe)},encapsulation:2})}return t})(),q=class{view;vcr;constructor(r,e){this.view=r,this.vcr=e}attachView(){if(this.view instanceof x)this.vcr.createEmbeddedView(this.view);else if(A(this.view)){let r=this.vcr.createComponent(Ye);r.instance.html=this.view,r.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Ze=new L("TRANSLOCO_LANG"),Qe=new L("TRANSLOCO_LOADING_TEMPLATE"),Xe=new L("TRANSLOCO_SCOPE"),z=class{initialized=!1;resolve({inline:r,provider:e,active:n}){let i=n;if(this.initialized)return i=n,i;if(e){let[,s]=G(e,"static");i=s}if(r){let[,s]=G(r,"static");i=s}return this.initialized=!0,i}resolveLangBasedOnScope(r){return M(r)?y(r):r}resolveLangPath(r,e){return e?`${e}/${r}`:r}},U=class{service;constructor(r){this.service=r}resolve(r){let{inline:e,provider:n}=r;if(e)return e;if(n){if(we(n)){let{scope:i,alias:s=this.service.config.scopes.keepCasing?i:Ae(i)}=n;return this.service._setScopeAlias(i,s),i}return n}}},_t=(()=>{class t{destroyRef=p(I);service=p(We);tpl=p(x,{optional:!0});providerLang=p(Ze,{optional:!0});providerScope=p(Xe,{optional:!0});providedLoadingTpl=p(Qe,{optional:!0});cdr=p(k);host=p(de);vcr=p(ge);renderer=p(he);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new z;scopeResolver=new U(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,n){return!0}ngOnInit(){let e=Ge(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(R(n=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:n});return Array.isArray(this.providerScope)?E(this.providerScope.map(s=>this.resolveScope(i,s))):this.resolveScope(i,this.providerScope)}),qe(e),F(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let n=this.resolveLoadingContent();n&&(this.loaderTplHandler=new q(n,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(i=>!e[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,n){this.memo.clear();let i=this.getTranslateFn(e,n);this.view?(this.view.context.$implicit=i,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:i,currentLang:this.currentLang}))}getTranslateFn(e,n){return(i,s)=>{let a=n?`${n}.${i}`:i,o=s?`${a}${JSON.stringify(s)}`:a;return this.memo.has(o)||this.memo.set(o,this.service.translate(a,s,e)),this.memo.get(o)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,n){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:n});this.path=this.langResolver.resolveLangPath(e,i);let s=Ne(n,i);return this.service._loadDependencies(this.path,s)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ce({type:t,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},standalone:!0,features:[ue]})}return t})();function Pt(t){let r=[nt(Pe),rt(Ke),st(He),it(Be)];return t.config&&r.push(et(t.config)),t.loader&&r.push(tt(t.loader)),r}function et(t){return m([{provide:w,useValue:_e(t)}])}function tt(t){return m([{provide:Oe,useClass:t}])}function nt(t){return m([{provide:Ce,useClass:t,deps:[w]}])}function it(t){return m([{provide:Me,useClass:t,deps:[w]}])}function rt(t){return m([{provide:je,useClass:t}])}function st(t){return m([{provide:Re,useClass:t}])}var Vt=new L("TRANSLOCO_TEST_LANGS - Available testing languages"),Kt=new L("TRANSLOCO_TEST_OPTIONS - Testing options");export{F as a,We as b,_t as c,Pt as d};
