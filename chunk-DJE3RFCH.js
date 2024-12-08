import{B as Q,E as ge,F as fe,G as $t,H as zt,K as nt,P as ve,Q as Pt,R as ye,S as P,T as U,V as K,W as ct,Y as wt,Z as _e,_ as xe,c as se,g as le,h as ce,j as Bt,k as lt,n as ue,o as de,p as pe,q as be,r as q,s as me,t as _t,u as he,v as xt,w as et,x as Ct}from"./chunk-O767UVUZ.js";import{c as Ce,d as At,f as Vt,g as Rt}from"./chunk-PUAS7KUQ.js";import{k as J,l as re,m as vt,n as W,o as yt,p as ae,q as Y,s as tt}from"./chunk-SVARORYH.js";import{$a as u,$b as M,Ab as B,Bb as z,Fb as Z,Gb as O,Ha as St,Hb as oe,Ia as Yt,Ib as v,Jb as Dt,Kb as Ft,L as jt,La as c,Lb as ht,M as S,Ma as L,Mb as gt,N as rt,Nb as X,Oa as te,S as A,Sa as ee,Ua as Et,W as k,Wa as D,X as at,Y as kt,Ya as st,Z as Gt,_b as m,ac as ft,bb as h,cb as s,da as pt,ea as $,fa as I,fb as _,ga as Xt,gb as bt,ha as T,j as Ut,kb as d,lb as p,ma as E,mb as f,n as Kt,na as Jt,nb as R,ob as H,pa as V,pb as N,qb as G,rb as F,sb as l,tb as ne,ua as Wt,ub as ie,vb as w,wb as Lt,xb as x,yb as C,zb as mt}from"./chunk-JNRBP43W.js";import{a as ot}from"./chunk-7CGTOI24.js";var ut=(e=>(e.CARD="card",e.ASIC="asic",e))(ut||{});var Ht={card:{label:"Video Cards",icon:Pt.MICROCHIP},asic:{label:"Asics",icon:Pt.SERVER}};var Ae=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ve={root:({props:t,instance:o})=>["p-badge p-component",{"p-badge-circle":zt(t.value)&&String(t.value).length===1,"p-badge-dot":$t(t.value)&&!o.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},$e=(()=>{class t extends U{name="badge";theme=Ae;classes=Ve;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();function Re(t,o){if(t&1&&(d(0,"span",1),B(1),p()),t&2){let e=l();_(e.styleClass()),s("ngClass",e.containerClass())("ngStyle",e.style()),c(),z(e.value())}}var It=(()=>{class t extends K{styleClass=V();style=V();badgeSize=V();size=V();severity=V();value=V();badgeDisabled=V(!1,{transform:m});_componentStyle=A($e);containerClass=ft(()=>({"p-badge p-component":!0,"p-badge-circle":zt(this.value())&&String(this.value()).length===1,"p-badge-lg":this.badgeSize()==="large","p-badge-xl":this.badgeSize()==="xlarge","p-badge-sm":this.badgeSize()==="small","p-badge-dot":$t(this.value()),[`p-badge-${this.severity()}`]:this.severity()}));static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-badge"]],inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[Z([$e]),D,O],decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle"],[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&u(0,Re,2,5,"span",0),i&2&&bt(n.badgeDisabled()?-1:0)},dependencies:[Y,J,W,P],encapsulation:2,changeDetection:0})}return t})(),Tt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=at({type:t});static \u0275inj=rt({imports:[It,P,P]})}return t})();function He(){let t=[],o=(r,a)=>{let b=t.length>0?t[t.length-1]:{key:r,value:a},y=b.value+(b.key===r?0:a)+2;return t.push({key:r,value:y}),y},e=r=>{t=t.filter(a=>a.value!==r)},i=()=>t.length>0?t[t.length-1].value:0,n=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:n,set:(r,a,b)=>{a&&(a.style.zIndex=String(o(r,b)))},clear:r=>{r&&(e(n(r)),r.style.zIndex="")},getCurrent:()=>i()}}var j=He();var Ne=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,Ze={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},ke=(()=>{class t extends U{name="tooltip";theme=Ne;classes=Ze;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t extends K{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:nt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=A(ke);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),tt(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=ot(ot({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(lt(e.relatedTarget,"p-tooltip")||lt(e.relatedTarget,"p-tooltip-text")||lt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?_t(this.container,this.el.nativeElement):_t(this.getOption("appendTo"),this.container),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),he(this.container,250),this.getOption("tooltipZIndex")==="auto"?j.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&j.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof te){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+de(),n=e.top+pe();return{left:i,top:n}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let e=this.activeElement,i=this.getHostOffset(),n=i.left+q(e),r=i.top+(Q(e)-Q(this.container))/2;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?et(this.el.nativeElement,".p-component"):this.el.nativeElement}alignLeft(){this.preAlign("left");let e=this.getHostOffset(),i=e.left-q(this.container),n=e.top+(Q(this.el.nativeElement)-Q(this.container))/2;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let e=this.getHostOffset(),i=e.left+(q(this.el.nativeElement)-q(this.container))/2,n=e.top-Q(this.container);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let e=this.getHostOffset(),i=e.left+(q(this.el.nativeElement)-q(this.container))/2,n=e.top+Q(this.el.nativeElement);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=ot(ot({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return lt(e,"p-inputwrapper")?et(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,r=q(this.container),a=Q(this.container),b=ue();return n+r>b.width||n<0||i<0||i+a>b.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new wt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):fe(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&j.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(L(Jt),L(ee))};static \u0275dir=kt({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",m],showDelay:[2,"showDelay","showDelay",M],hideDelay:[2,"hideDelay","hideDelay",M],life:[2,"life","life",M],positionTop:[2,"positionTop","positionTop",M],positionLeft:[2,"positionLeft","positionLeft",M],autoHide:[2,"autoHide","autoHide",m],fitContent:[2,"fitContent","fitContent",m],hideOnEscape:[2,"hideOnEscape","hideOnEscape",m],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},standalone:!0,features:[Z([ke]),st,D,pt]})}return t})(),Zt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=at({type:t});static \u0275inj=rt({})}return t})();var Qe=({dt:t})=>`
.p-menu {
    background: ${t("menu.background")};
    color: ${t("menu.color")};
    border: 1px solid ${t("menu.border.color")};
    border-radius: ${t("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${t("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${t("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${t("menu.transition.duration")}, color ${t("menu.transition.duration")};
    border-radius: ${t("menu.item.border.radius")};
    color: ${t("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menu.item.padding")};
    gap: ${t("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${t("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${t("menu.item.focus.color")};
    background: ${t("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${t("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${t("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${t("menu.submenu.label.background")};
    padding: ${t("menu.submenu.label.padding")};
    color: ${t("menu.submenu.label.color")};
    font-weight: ${t("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${t("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`,Ue={root:({props:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t})=>["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Oe=(()=>{class t extends U{name="menu";theme=Qe;classes=Ue;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var Ke=["pMenuItemContent",""],Me=t=>({"p-disabled":t}),Ot=t=>({$implicit:t}),je=()=>({exact:!1});function Ge(t,o){t&1&&N(0)}function Xe(t,o){if(t&1&&(d(0,"a",6),u(1,Ge,1,0,"ng-container",7),p()),t&2){let e=l(2),i=mt(4);s("target",e.item.target)("ngClass",v(9,Me,e.item.disabled)),h("title",e.item.title)("href",e.item.url||null,Yt)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),c(),s("ngTemplateOutlet",i)("ngTemplateOutletContext",v(11,Ot,e.item))}}function Je(t,o){t&1&&N(0)}function We(t,o){if(t&1&&(d(0,"a",8),u(1,Je,1,0,"ng-container",7),p()),t&2){let e=l(2),i=mt(4);s("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||oe(17,je))("target",e.item.target)("ngClass",v(18,Me,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),h("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),c(),s("ngTemplateOutlet",i)("ngTemplateOutletContext",v(20,Ot,e.item))}}function Ye(t,o){if(t&1&&(R(0),u(1,Xe,2,13,"a",4)(2,We,2,22,"a",5),H()),t&2){let e=l();c(),s("ngIf",!(e.item!=null&&e.item.routerLink)),c(),s("ngIf",e.item==null?null:e.item.routerLink)}}function tn(t,o){}function en(t,o){t&1&&u(0,tn,0,0,"ng-template")}function nn(t,o){if(t&1&&(R(0),u(1,en,1,0,null,7),H()),t&2){let e=l();c(),s("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",v(2,Ot,e.item))}}function on(t,o){if(t&1&&f(0,"span",12),t&2){let e=l(2);_(e.item.iconClass),s("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function rn(t,o){if(t&1&&(d(0,"span",13),B(1),p()),t&2){let e=l(2);c(),z(e.item.label)}}function an(t,o){if(t&1&&(f(0,"span",14),ht(1,"safeHtml")),t&2){let e=l(2);s("innerHTML",gt(1,1,e.item.label),St)}}function sn(t,o){if(t&1&&f(0,"p-badge",15),t&2){let e=l(2);s("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function ln(t,o){if(t&1&&u(0,on,1,4,"span",9)(1,rn,2,1,"span",10)(2,an,2,3,"ng-template",null,1,X)(4,sn,1,2,"p-badge",11),t&2){let e=mt(3),i=l();s("ngIf",i.item.icon),c(),s("ngIf",i.item.escape!==!1)("ngIfElse",e),c(3),s("ngIf",i.item.badge)}}var cn=["start"],un=["end"],dn=["header"],pn=["item"],bn=["submenuheader"],mn=["list"],hn=["container"],gn=t=>({"p-menu p-component":!0,"p-menu-overlay":t}),fn=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),vn=t=>({value:"visible",params:t}),qt=t=>({"p-hidden":t}),yn=(t,o)=>({"p-hidden":t,flex:o}),Se=(t,o,e)=>({"p-hidden":t,"p-focus":o,"p-disabled":e});function _n(t,o){t&1&&N(0)}function xn(t,o){if(t&1&&(d(0,"div",9),u(1,_n,1,0,"ng-container",10),p()),t&2){let e,i=l(2);h("data-pc-section","start"),c(),s("ngTemplateOutlet",(e=i.startTemplate)!==null&&e!==void 0?e:i._startTemplate)}}function Cn(t,o){if(t&1&&f(0,"li",14),t&2){let e=l().$implicit;s("ngClass",v(1,qt,e.visible===!1))}}function $n(t,o){if(t&1&&(d(0,"span"),B(1),p()),t&2){let e=l(3).$implicit;c(),z(e.label)}}function In(t,o){if(t&1&&(f(0,"span",18),ht(1,"safeHtml")),t&2){let e=l(3).$implicit;s("innerHTML",gt(1,1,e.label),St)}}function Tn(t,o){if(t&1&&(R(0),u(1,$n,2,1,"span",17)(2,In,2,3,"ng-template",null,2,X),H()),t&2){let e=mt(3),i=l(2).$implicit;c(),s("ngIf",i.escape!==!1)("ngIfElse",e)}}function kn(t,o){t&1&&N(0)}function wn(t,o){if(t&1&&(d(0,"li",15),u(1,Tn,4,2,"ng-container",7)(2,kn,1,0,"ng-container",16),p()),t&2){let e,i=l(),n=i.$implicit,r=i.index,a=l(3);s("ngClass",Dt(7,yn,n.visible===!1,n.visible))("tooltipOptions",n.tooltipOptions),h("data-automationid",n.automationId)("id",a.menuitemId(n,a.id,r)),c(),s("ngIf",!a.submenuheaderTemplate||a._submenuheaderTemplate),c(),s("ngTemplateOutlet",(e=a.submenuheaderTemplate)!==null&&e!==void 0?e:a._submenuheaderTemplate)("ngTemplateOutletContext",v(10,Ot,n))}}function On(t,o){if(t&1&&f(0,"li",14),t&2){let e=l().$implicit,i=l().$implicit;s("ngClass",v(1,qt,e.visible===!1||i.visible===!1))}}function Mn(t,o){if(t&1){let e=G();d(0,"li",20),F("onMenuItemClick",function(n){$(e);let r=l(),a=r.$implicit,b=r.index,y=l().index,g=l(3);return I(g.itemClick(n,g.menuitemId(a,g.id,y,b)))}),p()}if(t&2){let e,i=l(),n=i.$implicit,r=i.index,a=l(),b=a.$implicit,y=a.index,g=l(3);_(n.styleClass),s("pMenuItemContent",n)("itemTemplate",(e=g.itemTemplate)!==null&&e!==void 0?e:g._itemTemplate)("ngClass",Ft(13,Se,n.visible===!1||b.visible===!1,g.focusedOptionId()&&g.menuitemId(n,g.id,y,r)===g.focusedOptionId(),g.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),h("data-pc-section","menuitem")("aria-label",g.label(n.label))("data-p-focused",g.isItemFocused(g.menuitemId(n,g.id,y,r)))("data-p-disabled",g.disabled(n.disabled))("aria-disabled",g.disabled(n.disabled))("id",g.menuitemId(n,g.id,y,r))}}function Sn(t,o){if(t&1&&u(0,On,1,3,"li",12)(1,Mn,1,17,"li",19),t&2){let e=o.$implicit;s("ngIf",e.separator),c(),s("ngIf",!e.separator)}}function En(t,o){if(t&1&&u(0,Cn,1,3,"li",12)(1,wn,3,12,"li",13)(2,Sn,2,2,"ng-template",11),t&2){let e=o.$implicit;s("ngIf",e.separator),c(),s("ngIf",!e.separator),c(),s("ngForOf",e.items)}}function Ln(t,o){if(t&1&&u(0,En,3,3,"ng-template",11),t&2){let e=l(2);s("ngForOf",e.model)}}function Dn(t,o){if(t&1&&f(0,"li",14),t&2){let e=l().$implicit;s("ngClass",v(1,qt,e.visible===!1))}}function Fn(t,o){if(t&1){let e=G();d(0,"li",20),F("onMenuItemClick",function(n){$(e);let r=l(),a=r.$implicit,b=r.index,y=l(3);return I(y.itemClick(n,y.menuitemId(a,y.id,b)))}),p()}if(t&2){let e,i=l(),n=i.$implicit,r=i.index,a=l(3);_(n.styleClass),s("pMenuItemContent",n)("itemTemplate",(e=a.itemTemplate)!==null&&e!==void 0?e:a._itemTemplate)("ngClass",Ft(13,Se,n.visible===!1,a.focusedOptionId()&&a.menuitemId(n,a.id,r)===a.focusedOptionId(),a.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),h("data-pc-section","menuitem")("aria-label",a.label(n.label))("data-p-focused",a.isItemFocused(a.menuitemId(n,a.id,r)))("data-p-disabled",a.disabled(n.disabled))("aria-disabled",a.disabled(n.disabled))("id",a.menuitemId(n,a.id,r))}}function Bn(t,o){if(t&1&&u(0,Dn,1,3,"li",12)(1,Fn,1,17,"li",19),t&2){let e=o.$implicit;s("ngIf",e.separator),c(),s("ngIf",!e.separator)}}function zn(t,o){if(t&1&&u(0,Bn,2,2,"ng-template",11),t&2){let e=l(2);s("ngForOf",e.model)}}function Pn(t,o){t&1&&N(0)}function An(t,o){if(t&1&&(d(0,"div",21),u(1,Pn,1,0,"ng-container",10),p()),t&2){let e,i=l(2);h("data-pc-section","end"),c(),s("ngTemplateOutlet",(e=i.endTemplate)!==null&&e!==void 0?e:i._endTemplate)}}function Vn(t,o){if(t&1){let e=G();d(0,"div",4,0),F("click",function(n){$(e);let r=l();return I(r.onOverlayClick(n))})("@overlayAnimation.start",function(n){$(e);let r=l();return I(r.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){$(e);let r=l();return I(r.onOverlayAnimationEnd(n))}),u(2,xn,2,2,"div",5),d(3,"ul",6,1),F("focus",function(n){$(e);let r=l();return I(r.onListFocus(n))})("blur",function(n){$(e);let r=l();return I(r.onListBlur(n))})("keydown",function(n){$(e);let r=l();return I(r.onListKeyDown(n))}),u(5,Ln,1,1,null,7)(6,zn,1,1,null,7),p(),u(7,An,2,2,"div",8),p()}if(t&2){let e,i,n=l();_(n.styleClass),s("ngClass",v(18,gn,n.popup))("ngStyle",n.style)("@overlayAnimation",v(23,vn,Dt(20,fn,n.showTransitionOptions,n.hideTransitionOptions)))("@.disabled",n.popup!==!0),h("data-pc-name","menu")("id",n.id),c(2),s("ngIf",(e=n.startTemplate)!==null&&e!==void 0?e:n._startTemplate),c(),h("id",n.id+"_list")("tabindex",n.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",n.activedescendant())("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy),c(2),s("ngIf",n.hasSubMenu()),c(),s("ngIf",!n.hasSubMenu()),c(),s("ngIf",(i=n.endTemplate)!==null&&i!==void 0?i:n._endTemplate)}}var Ee=(()=>{class t{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!tt(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||t)(L(Wt,16),L(se,16))};static \u0275pipe=Gt({name:"safeHtml",type:t,pure:!0,standalone:!0})}return t})(),Rn=(()=>{class t{item;itemTemplate;onMenuItemClick=new E;menu;constructor(e){this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}static \u0275fac=function(i){return new(i||t)(L(jt(()=>Qt)))};static \u0275cmp=k({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},standalone:!0,features:[O],attrs:Ke,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(i,n){if(i&1){let r=G();d(0,"div",2),F("click",function(b){return $(r),I(n.onItemClick(b,n.item))}),u(1,Ye,3,2,"ng-container",3)(2,nn,2,4,"ng-container",3)(3,ln,5,4,"ng-template",null,0,X),p()}i&2&&(h("data-pc-section","content"),c(),s("ngIf",!n.itemTemplate),c(),s("ngIf",n.itemTemplate))},dependencies:[Y,J,vt,yt,W,Bt,le,ce,ct,Zt,Tt,It,P,Ee],encapsulation:2})}return t})(),Qt=(()=>{class t extends K{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new E;onHide=new E;onBlur=new E;onFocus=new E;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ft(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=Et(-1);selectedOptionIndex=Et(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=A(Oe);constructor(e){super(),this.overlayService=e,this.id=this.id||nt("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuheaderTemplate;_submenuheaderTemplate;_templates;ngAfterContentInit(){this._templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuheaderTemplate=e.template;break;default:this.itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Ct(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&j.clear(e.element);break}}alignOverlay(){this.relativeAlign?me(this.container,this.target):be(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):_t(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&j.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!ge()&&this.hide()}menuitemId(e,i,n,r){return e?.id??`${i}_${n}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(Ct(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)Ct(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(xt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=et(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=i&&et(i,'a[data-pc-section="action"]');this.popup&&Ct(this.target),n?n.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[...xt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...xt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let i=xt(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(i.length>0){let n=e>=i.length?i.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(i[n].getAttribute("id"))}}itemClick(e,i){let{originalEvent:n,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){n.preventDefault();return}!r.url&&!r.routerLink&&n.preventDefault(),r.command&&r.command({originalEvent:n,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&tt(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let n=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(i.target),r=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&n&&r&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&n&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&tt(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&tt(this.platformId)&&(this.scrollHandler=new wt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&j.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}static \u0275fac=function(i){return new(i||t)(L(ve))};static \u0275cmp=k({type:t,selectors:[["p-menu"]],contentQueries:function(i,n,r){if(i&1&&(w(r,cn,5),w(r,un,5),w(r,dn,5),w(r,pn,5),w(r,bn,5),w(r,ye,4)),i&2){let a;x(a=C())&&(n.startTemplate=a.first),x(a=C())&&(n.endTemplate=a.first),x(a=C())&&(n.headerTemplate=a.first),x(a=C())&&(n.itemTemplate=a.first),x(a=C())&&(n.submenuheaderTemplate=a.first),x(a=C())&&(n._templates=a)}},viewQuery:function(i,n){if(i&1&&(Lt(mn,5),Lt(hn,5)),i&2){let r;x(r=C())&&(n.listViewChild=r.first),x(r=C())&&(n.containerViewChild=r.first)}},inputs:{model:"model",popup:[2,"popup","popup",m],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",m],baseZIndex:[2,"baseZIndex","baseZIndex",M],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",M]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},standalone:!0,features:[Z([Oe]),st,D,O],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",3,"ngClass",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator",3,"ngClass"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(i,n){i&1&&u(0,Vn,8,25,"div",3),i&2&&s("ngIf",!n.popup||n.visible)},dependencies:[Y,J,re,vt,yt,W,Bt,Rn,Zt,we,Tt,P,Ee],encapsulation:2,data:{animation:[Ce("overlayAnimation",[Rt(":enter",[Vt({opacity:0,transform:"scaleY(0.8)"}),At("{{showTransitionParams}}")]),Rt(":leave",[At("{{hideTransitionParams}}",Vt({opacity:0}))])])]},changeDetection:0})}return t})();var Le=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+nt()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[D,O],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Xt(),d(0,"svg",0)(1,"g"),f(2,"path",1),p(),d(3,"defs")(4,"clipPath",2),f(5,"rect",3),p()()()),i&2&&(_(n.getClassNames()),h("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),c(),h("clip-path",n.pathId),c(3),s("id",n.pathId))},encapsulation:2})}return t})();var Hn=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Nn={root:({instance:t,props:o})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},De=(()=>{class t extends U{name="button";theme=Hn;classes=Nn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var Zn=["content"],qn=["loading"],Qn=["icon"],Un=["*"],Fe=t=>({class:t});function Kn(t,o){t&1&&N(0)}function jn(t,o){if(t&1&&f(0,"span",8),t&2){let e=l(3);s("ngClass",e.iconClass()),h("aria-hidden",!0)("data-pc-section","loadingicon")}}function Gn(t,o){if(t&1&&f(0,"SpinnerIcon",9),t&2){let e=l(3);s("styleClass",e.spinnerIconClass())("spin",!0),h("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xn(t,o){if(t&1&&(R(0),u(1,jn,1,3,"span",6)(2,Gn,1,4,"SpinnerIcon",7),H()),t&2){let e=l(2);c(),s("ngIf",e.loadingIcon),c(),s("ngIf",!e.loadingIcon)}}function Jn(t,o){}function Wn(t,o){if(t&1&&u(0,Jn,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",e.loadingicon)}}function Yn(t,o){if(t&1&&(R(0),u(1,Xn,3,2,"ng-container",2)(2,Wn,1,1,null,5),H()),t&2){let e=l();c(),s("ngIf",!e.loadingicon),c(),s("ngTemplateOutlet",e.loadingicon)("ngTemplateOutletContext",v(3,Fe,e.iconClass()))}}function ti(t,o){if(t&1&&f(0,"span",8),t&2){let e=l(2);_(e.icon),s("ngClass",e.iconClass()),h("data-pc-section","icon")}}function ei(t,o){}function ni(t,o){if(t&1&&u(0,ei,0,0,"ng-template",10),t&2){let e=l(2);s("ngIf",!e.icon&&e.iconTemplate)}}function ii(t,o){if(t&1&&(R(0),u(1,ti,1,4,"span",11)(2,ni,1,1,null,5),H()),t&2){let e=l();c(),s("ngIf",e.icon&&!e.iconTemplate),c(),s("ngTemplateOutlet",e.iconTemplate)("ngTemplateOutletContext",v(3,Fe,e.iconClass()))}}function oi(t,o){if(t&1&&(d(0,"span",12),B(1),p()),t&2){let e=l();h("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),c(),z(e.label)}}function ri(t,o){if(t&1&&f(0,"p-badge",13),t&2){let e=l();s("value",e.badge)("severity",e.badgeSeverity)}}var Be=(()=>{class t extends K{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new E;onFocus=new E;onBlur=new E;content;loadingicon;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return $t(this.fluid)?!!i:this.fluid}_componentStyle=A(De);ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingicon)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=T(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(i,n,r){if(i&1&&(w(r,Zn,5),w(r,qn,5),w(r,Qn,5)),i&2){let a;x(a=C())&&(n.content=a.first),x(a=C())&&(n.loadingicon=a.first),x(a=C())&&(n.iconTemplate=a.first)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",m],loading:[2,"loading","loading",m],loadingIcon:"loadingIcon",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],plain:[2,"plain","plain",m],severity:"severity",outlined:[2,"outlined","outlined",m],link:[2,"link","link",m],tabindex:[2,"tabindex","tabindex",M],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",m],fluid:[2,"fluid","fluid",m],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[Z([De]),st,D,pt,O],ngContentSelectors:Un,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(ne(),d(0,"button",0),F("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),ie(1),u(2,Kn,1,0,"ng-container",1)(3,Yn,3,5,"ng-container",2)(4,ii,3,5,"ng-container",2)(5,oi,2,3,"span",3)(6,ri,1,2,"p-badge",4),p()),i&2&&(s("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),h("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),c(2),s("ngTemplateOutlet",n.content),c(),s("ngIf",n.loading),c(),s("ngIf",!n.loading),c(),s("ngIf",!n.content&&n.label),c(),s("ngIf",!n.content&&n.badge))},dependencies:[Y,J,vt,yt,W,ct,_e,Le,Tt,It,P],encapsulation:2,changeDetection:0})}return t})();var it=class{static randomUUID(){return window.crypto.randomUUID()}static randomIP(){return"$.$.$.$".replaceAll("$",this.randomInt(0,1e3).toString())}static randomInt(o=0,e=100){let i=Math.ceil(o),n=Math.floor(e);return Math.floor(Math.random()*(n-i)+i)}static randomFromList(o){return o[Math.floor(Math.random()*o.length)]}};var Mt=class t{minerNames={card:["GeForce RTX 3060","GeForce RTX 3060 Ti","GeForce RTX 3070","GeForce RTX 4060","GeForce RTX 4060 Ti","GeForce RTX 4070","GeForce RTX 4070 Ti","GeForce RTX 4080","GeForce RTX 4090","Radeon RX 6600 XT","RX 7600 XT","RX 7700 XT"],asic:["Asic Bitmain S19 110 Th/s","Asic Bitmain L9 16 Gh/s","Asic Bitmain L7 9050 Mh/s","Asic Bitmain KA3 166 Th/s","Jasminer X44-P 23.4 Gh/s","IceRiver KAS KS5M 15Th"]};getMiners(){let o=Array(30).fill(0).map(()=>{let e=it.randomFromList(Object.values(ut));return{id:it.randomUUID(),name:it.randomFromList(this.minerNames[e]),type:e,ipAddress:it.randomIP()}});return Ut(o)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};function si(t,o){if(t&1&&(d(0,"span",5),B(1),p()),t&2){let e=o.$implicit;c(),z(e.label)}}function li(t,o){if(t&1&&f(0,"span",11),t&2){let e=l().$implicit;_(e.icon)}}function ci(t,o){if(t&1){let e=G();d(0,"div",6)(1,"a",7),u(2,li,1,2,"span",8),d(3,"span",9),B(4),p()(),d(5,"p-button",10),F("onClick",function(n){let r=$(e).$implicit,a=l(),b=l();return I(b.deleteItem(n,r,a))}),p()()}if(t&2){let e=o.$implicit;c(2),bt(e.icon?2:-1),c(2),z(e.label)}}function ui(t,o){t&1&&(d(0,"div",3)(1,"p-menu",4),u(2,si,2,1,"ng-template",null,0,X)(4,ci,6,2,"ng-template",null,1,X),p()()),t&2&&(c(),s("model",o))}var ze=class t{constructor(o){this.minerService=o}items$;ngOnInit(){this.items$=this.getMenuItems()}getMenuItems(){return this.minerService.getMiners().pipe(Kt(o=>{let e={};return o.forEach(i=>{let{id:n,name:r,type:a}=i,b=Ht[a];e[a]||(e[a]=[]);let y={id:n,label:r,icon:b.icon,ipAddress:i.ipAddress,type:a};e[a].push(y)}),Object.values(ut).map(i=>({label:Ht[i].label,items:e[i],type:i}))}))}deleteItem(o,e,i){o.stopPropagation();let n=i.findIndex(b=>b.type===e.type);if(n===-1)return;let r=i[n].items;if(!r?.length)return;let a=r.findIndex(b=>b.id===e.id);a!==-1&&r.splice(a,1),r.length||i.splice(n,1)}static \u0275fac=function(e){return new(e||t)(L(Mt))};static \u0275cmp=k({type:t,selectors:[["app-miners"]],standalone:!0,features:[O],decls:3,vars:3,consts:[["submenuheader",""],["item",""],[1,"miners"],[1,"miners__sidebar"],["styleClass","w-72 h-full overflow-auto",3,"model"],[1,"select-none","font-bold","text-primary"],[1,"menu-item__container"],["pRipple","",1,"p-menu-item-link","menu-item__link"],[1,"p-menu-item-icon",3,"class"],[1,"p-menu-item-label"],["icon","pi pi-trash","severity","danger","rounded","","text","",1,"menu-item__button",3,"onClick"],[1,"p-menu-item-icon"]],template:function(e,i){if(e&1&&(d(0,"div",2),u(1,ui,6,1,"div",3),ht(2,"async"),p()),e&2){let n;c(),bt((n=gt(2,1,i.items$))?1:-1,n)}},dependencies:[ae,Qt,ct,Be],styles:[".miners[_ngcontent-%COMP%]{height:100%;display:flex}.menu-item__button[_ngcontent-%COMP%]{visibility:hidden}.menu-item__container[_ngcontent-%COMP%]{display:flex}.menu-item__container[_ngcontent-%COMP%]:hover   .menu-item__button[_ngcontent-%COMP%]{visibility:visible}.menu-item__link[_ngcontent-%COMP%]{flex-grow:1}"]})};export{ze as MinersComponent};
