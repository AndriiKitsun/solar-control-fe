import{$ as T,K as ae,L as z,ba as le,da as ue,ea as qe,ja as ce}from"./chunk-74PWZFYD.js";import{a as Ce,k as ze,o as re,s as se}from"./chunk-E3O4FRIP.js";import{Bb as H,Cb as W,Eb as je,Fb as $e,Lb as F,M as A,Ma as V,Mb as M,N as L,Na as a,O as I,Ob as be,Pb as ne,Q as S,Sa as ye,T as j,Va as X,X as C,Xa as l,Y as x,Yb as Ue,Z as O,Za as ee,_b as He,ab as v,cb as d,db as p,ea as Ne,f as Ie,fa as ke,fb as te,ga as Te,gb as Be,gc as We,ha as Y,hb as D,i as Se,ia as c,ib as E,jb as Pe,kb as Re,kc as f,lb as Ge,lc as ie,mb as m,mc as oe,n as xe,na as _,nb as y,nc as w,ob as N,ra as ve,rb as $,sb as Le,t as Oe,vb as k,wb as h,zb as U}from"./chunk-AC6ZCN4K.js";import{a as u,b as g}from"./chunk-7CGTOI24.js";var tt=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||e)(a(ye),a(ve))}}static{this.\u0275dir=O({type:e})}}return e})(),vt=(()=>{class e extends tt{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})()}static{this.\u0275dir=O({type:e,features:[l]})}}return e})(),G=new S("");var yt={provide:G,useExisting:A(()=>nt),multi:!0};function bt(){let e=Ce()?Ce().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Ct=new S(""),nt=(()=>{class e extends tt{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||e)(a(ye),a(ve),a(Ct,8))}}static{this.\u0275dir=O({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&k("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[F([yt]),l]})}}return e})();var Vt=new S(""),Dt=new S("");function it(e){return e!=null}function ot(e){return He(e)?Se(e):e}function rt(e){let n={};return e.forEach(t=>{n=t!=null?u(u({},n),t):n}),Object.keys(n).length===0?null:n}function st(e,n){return n.map(t=>t(e))}function Mt(e){return!e.validate}function at(e){return e.map(n=>Mt(n)?n:t=>n.validate(t))}function At(e){if(!e)return null;let n=e.filter(it);return n.length==0?null:function(t){return rt(st(t,n))}}function lt(e){return e!=null?At(at(e)):null}function Et(e){if(!e)return null;let n=e.filter(it);return n.length==0?null:function(t){let i=st(t,n).map(ot);return Oe(i).pipe(xe(rt))}}function ut(e){return e!=null?Et(at(e)):null}function Ke(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Ft(e){return e._rawValidators}function wt(e){return e._rawAsyncValidators}function Ve(e){return e?Array.isArray(e)?e:[e]:[]}function he(e,n){return Array.isArray(e)?e.includes(n):e===n}function Qe(e,n){let t=Ve(n);return Ve(e).forEach(o=>{he(t,o)||t.push(o)}),t}function Ze(e,n){return Ve(n).filter(t=>!he(e,t))}var fe=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=lt(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},De=class extends fe{get formDirective(){return null}get path(){return null}},J=class extends fe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Me=class{constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},It={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pn=g(u({},It),{"[class.ng-submitted]":"isSubmitted"}),ct=(()=>{class e extends Me{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||e)(a(J,2))}}static{this.\u0275dir=O({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&te("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[l]})}}return e})();var q="VALID",de="INVALID",B="PENDING",K="DISABLED",R=class{},ge=class extends R{constructor(n,t){super(),this.value=n,this.source=t}},Q=class extends R{constructor(n,t){super(),this.pristine=n,this.source=t}},Z=class extends R{constructor(n,t){super(),this.touched=n,this.source=t}},P=class extends R{constructor(n,t){super(),this.status=n,this.source=t}};function St(e){return(me(e)?e.validators:e)||null}function xt(e){return Array.isArray(e)?lt(e):e||null}function Ot(e,n){return(me(n)?n.asyncValidators:e)||null}function Nt(e){return Array.isArray(e)?ut(e):e||null}function me(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Ae=class{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=oe(()=>this.statusReactive()),this.statusReactive=X(void 0),this._pristine=oe(()=>this.pristineReactive()),this.pristineReactive=X(!0),this._touched=oe(()=>this.touchedReactive()),this.touchedReactive=X(!1),this._events=new Ie,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return w(this.statusReactive)}set status(n){w(()=>this.statusReactive.set(n))}get valid(){return this.status===q}get invalid(){return this.status===de}get pending(){return this.status==B}get disabled(){return this.status===K}get enabled(){return this.status!==K}get pristine(){return w(this.pristineReactive)}set pristine(n){w(()=>this.pristineReactive.set(n))}get dirty(){return!this.pristine}get touched(){return w(this.touchedReactive)}set touched(n){w(()=>this.touchedReactive.set(n))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Qe(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Qe(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ze(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ze(n,this._rawAsyncValidators))}hasValidator(n){return he(this._rawValidators,n)}hasAsyncValidator(n){return he(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(g(u({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Z(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new Z(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(g(u({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Q(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new Q(!0,i))}markAsPending(n={}){this.status=B;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new P(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(g(u({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=K,this.errors=null,this._forEachChild(o=>{o.disable(g(u({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ge(this.value,i)),this._events.next(new P(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(u({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=q,this._forEachChild(i=>{i.enable(g(u({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(g(u({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===q||this.status===B)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ge(this.value,t)),this._events.next(new P(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(g(u({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?K:q}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=B,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=ot(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new P(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?K:this.errors?de:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(B)?B:this._anyControlsHaveStatus(de)?de:q}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new Q(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Z(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){me(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators)}};var dt=new S("CallSetDisabledState",{providedIn:"root",factory:()=>Ee}),Ee="always";function kt(e,n){return[...n.path,e]}function Tt(e,n,t=Ee){Pt(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Rt(e,n),Lt(e,n),Gt(e,n),Bt(e,n)}function Je(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Bt(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Pt(e,n){let t=Ft(e);n.validator!==null?e.setValidators(Ke(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=wt(e);n.asyncValidator!==null?e.setAsyncValidators(Ke(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();Je(n._rawValidators,o),Je(n._rawAsyncValidators,o)}function Rt(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ht(e,n)})}function Gt(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ht(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function ht(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Lt(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function jt(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function $t(e){return Object.getPrototypeOf(e.constructor)===vt}function Ut(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===nt?t=r:$t(r)?i=r:o=r}),o||i||t||null}function Ye(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Xe(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Ht=class extends Ae{constructor(n=null,t,i){super(St(t),Ot(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),me(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Xe(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ye(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ye(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Xe(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Wt={provide:J,useExisting:A(()=>Fe)},et=Promise.resolve(),Fe=(()=>{class e extends J{constructor(t,i,o,r,s,b){super(),this._changeDetectorRef=s,this.callSetDisabledState=b,this.control=new Ht,this._registered=!1,this.name="",this.update=new _,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=Ut(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),jt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Tt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){et.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&f(i);et.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?kt(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||e)(a(De,9),a(Vt,10),a(Dt,10),a(G,10),a(We,8),a(dt,8))}}static{this.\u0275dir=O({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[F([Wt]),l,Ne]})}}return e})();var zt=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=I({})}}return e})();var ft=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:dt,useValue:t.callSetDisabledState??Ee}]}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=I({imports:[zt]})}}return e})();var Zt=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Jt={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},gt=(()=>{class e extends le{name="togglebutton";theme=Zt;classes=Jt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Yt=["icon"],Xt=["content"],pt=e=>({$implicit:e}),en=(e,n)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":n});function tn(e,n){e&1&&$(0)}function nn(e,n){if(e&1&&N(0,"span",1),e&2){let t=h(3);D(t.checked?t.onIcon:t.offIcon),p("ngClass",ne(4,en,t.iconPos==="left",t.iconPos==="right")),d("data-pc-section","icon")}}function on(e,n){if(e&1&&v(0,nn,1,7,"span",3),e&2){let t=h(2);E(t.onIcon||t.offIcon?0:-1)}}function rn(e,n){e&1&&$(0)}function sn(e,n){if(e&1&&v(0,rn,1,0,"ng-container",2),e&2){let t=h(2);p("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",be(2,pt,t.checked))}}function an(e,n){if(e&1&&(m(0,"span",1),je(1),y()),e&2){let t=h(2);p("ngClass",t.cx("label")),d("data-pc-section","label"),V(),$e(t.checked?t.hasOnLabel?t.onLabel:"":t.hasOffLabel?t.offLabel:"")}}function ln(e,n){if(e&1&&v(0,on,1,1)(1,sn,1,4,"ng-container")(2,an,2,3,"span",1),e&2){let t=h();E(t.iconTemplate?1:0),V(2),E(t.onLabel||t.offLabel?2:-1)}}var un={provide:G,useExisting:A(()=>we),multi:!0},we=(()=>{class e extends ue{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new _;iconTemplate;contentTemplate;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=j(gt);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,o,r){if(i&1&&(U(r,Yt,5),U(r,Xt,5)),i&2){let s;H(s=W())&&(o.iconTemplate=s.first),H(s=W())&&(o.contentTemplate=s.first)}},hostVars:2,hostBindings:function(i,o){i&2&&D(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",f],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ie],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",f],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},standalone:!0,features:[F([un,gt]),ee,l,M],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,o){i&1&&(m(0,"button",0),k("click",function(s){return o.toggle(s)}),m(1,"span",1),v(2,tn,1,0,"ng-container",2)(3,ln,3,2),y()()),i&2&&(D(o.styleClass),p("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),d("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),V(),p("ngClass",o.cx("content")),V(),p("ngTemplateOutlet",o.contentTemplate)("ngTemplateOutletContext",be(13,pt,o.checked)),V(),E(o.contentTemplate?-1:3))},dependencies:[qe,se,ze,re,T],encapsulation:2,changeDetection:0})}return e})();var cn=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,dn={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},mt=(()=>{class e extends le{name="selectbutton";theme=cn;classes=dn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var hn=["item"],fn=(e,n)=>({$implicit:e,index:n});function gn(e,n){e&1&&$(0)}function pn(e,n){if(e&1&&v(0,gn,1,0,"ng-container",3),e&2){let t=h(2),i=t.$implicit,o=t.$index,r=h();p("ngTemplateOutlet",r.itemTemplate)("ngTemplateOutletContext",ne(2,fn,i,o))}}function mn(e,n){e&1&&v(0,pn,1,5,"ng-template",null,0,Ue)}function _n(e,n){if(e&1){let t=Le();m(0,"p-toggleButton",2),k("onChange",function(o){let r=ke(t),s=r.$implicit,b=r.$index,_e=h();return Te(_e.onOptionSelect(o,s,b))}),v(1,mn,2,0),y()}if(e&2){let t=n.$implicit,i=h();p("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),V(),E(i.itemTemplate?1:-1)}}var vn={provide:G,useExisting:A(()=>_t),multi:!0},_t=(()=>{class e extends ue{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new _;onChange=new _;itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=j(mt);getOptionLabel(t){return this.optionLabel?ae(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?ae(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?ae(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,o){if(this.disabled||this.isOptionDisabled(i))return;let r=this.isSelected(i);if(r&&this.unselectable)return;let s=this.getOptionValue(i),b;if(this.multiple)r?b=this.value.filter(_e=>!z(_e,s,this.equalityKey)):b=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;b=r?null:s}this.focusedIndex=o,this.value=b,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:o})}changeTabIndexes(t,i){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});i==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!z(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(z(r,o,this.dataKey)){i=!0;break}}}else i=z(this.getOptionValue(t),this.value,this.equalityKey);return i}static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,o,r){if(i&1&&U(r,hn,5),i&2){let s;H(s=W())&&(o.itemTemplate=s.first)}},hostVars:10,hostBindings:function(i,o){i&2&&(d("role",o.group)("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Be(o.style),te("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",f],tabindex:[2,"tabindex","tabindex",ie],multiple:[2,"multiple","multiple",f],allowEmpty:[2,"allowEmpty","allowEmpty",f],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",f],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",f]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},standalone:!0,features:[F([vn,mt]),ee,l,M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&Re(0,_n,2,9,"p-toggleButton",1,Pe),i&2&&Ge(o.options)},dependencies:[we,ft,ct,Fe,se,re,T],encapsulation:2,changeDetection:0})}return e})(),vi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=x({type:e});static \u0275inj=I({imports:[_t,T,T]})}return e})();var Ci=(()=>{class e extends ce{static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["ChevronLeftIcon"]],standalone:!0,features:[l,M],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,o){i&1&&(Y(),m(0,"svg",0),N(1,"path",1),y()),i&2&&(D(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Mi=(()=>{class e extends ce{static \u0275fac=(()=>{let t;return function(o){return(t||(t=c(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["ChevronRightIcon"]],standalone:!0,features:[l,M],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,o){i&1&&(Y(),m(0,"svg",0),N(1,"path",1),y()),i&2&&(D(o.getClassNames()),d("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();export{G as a,J as b,ct as c,Fe as d,ft as e,_t as f,vi as g,Ci as h,Mi as i};
