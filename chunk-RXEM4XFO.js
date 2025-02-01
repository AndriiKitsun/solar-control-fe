import{c as ei,g as ti,h as ii,j as xt}from"./chunk-TW7LODZC.js";import{a as ct,b as Ti,c as Si,d as Mi,e as Oi,f as mt,h as ki,j as Qe,k as Ei,l as Re}from"./chunk-EAHXVNW2.js";import{B as yi,E as Ve,G as vi,H as Ci,J as xi,K as St,a as Xt,e as ot,f as ri,g as pi,h as at,j as ci,k as ui,l as Tt,m as xe,o as di,p as mi,q as gi,s as fi,w as _i,x as hi,y as st}from"./chunk-YPHPHYZO.js";import{a as Ii,b as dt}from"./chunk-PNQD3J76.js";import{c as wi,d as Mt,e as ut}from"./chunk-HD72C3YN.js";import{$ as nt,E as ai,H as it,L as si,N as ke,O as Ce,P as wt,R as It,U as Ee,Z as W,da as Ae,ea as $e,fa as Ne,ha as ie,i as et,ia as U,ja as re,k as ni,ka as li,l as tt,m as oi,ma as Y,na as De,p as He,q as ve,qa as lt,r as Z,ra as rt,sa as pt,t as Ke,ta as bi,ua as Le,xa as fe}from"./chunk-6SGHRMWT.js";import{$b as Ut,B as Rt,Ca as Ge,D as yt,Db as d,Eb as c,Fb as x,Fc as Yt,Gb as k,Hb as E,Ib as M,J as Pe,Jb as w,K as Se,Kb as y,Lb as s,Mb as me,Nb as ge,Nc as J,Ob as Nt,Pb as v,Pc as Xe,Qb as N,Qc as X,R as zt,Rb as _,Rc as be,S as je,Sa as Be,Sb as h,Sc as q,Ta as Me,Tb as Q,Tc as Jt,Ub as C,V as Pt,Vb as S,Vc as j,Wa as r,Wb as ae,X as de,Xa as D,Xc as le,Y as P,Yb as Qt,Zb as qt,_b as jt,ac as Gt,ba as Bt,bb as H,bc as Zt,bd as Fe,ca as B,cc as R,cd as pe,dc as he,ec as O,ed as ce,fb as L,fc as ee,gc as Ye,gd as ue,hb as vt,ib as Ze,jb as z,ka as Ht,la as m,lb as G,m as Lt,ma as g,mb as u,mc as se,na as Ue,nc as Oe,o as Vt,oa as $,oc as Je,pc as V,q as Ft,tb as f,u as ht,ua as T,ub as l,va as bt,vb as We,vc as b,wb as Ct,wc as te,xb as _e,xc as ye,ya as Kt,yb as A,zb as K,zc as Wt}from"./chunk-FUR35FRG.js";var nn=({dt:t})=>`
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
`,on={root:({props:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t})=>["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ai=(()=>{class t extends W{name="menu";theme=nn;classes=on;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var an=["pMenuItemContent",""],Di=t=>({"p-disabled":t}),gt=t=>({$implicit:t}),sn=()=>({exact:!1});function ln(t,o){t&1&&M(0)}function rn(t,o){if(t&1&&(d(0,"a",6),u(1,ln,1,0,"ng-container",7),c()),t&2){let e=s(2),i=Q(4);l("target",e.item.target)("ngClass",O(9,Di,e.item.disabled)),f("title",e.item.title)("href",e.item.url||null,Me)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",O(11,gt,e.item))}}function pn(t,o){t&1&&M(0)}function cn(t,o){if(t&1&&(d(0,"a",8),u(1,pn,1,0,"ng-container",7),c()),t&2){let e=s(2),i=Q(4);l("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||he(17,sn))("target",e.item.target)("ngClass",O(18,Di,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),f("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",O(20,gt,e.item))}}function un(t,o){if(t&1&&(k(0),u(1,rn,2,13,"a",4)(2,cn,2,22,"a",5),E()),t&2){let e=s();r(),l("ngIf",!(e.item!=null&&e.item.routerLink)),r(),l("ngIf",e.item==null?null:e.item.routerLink)}}function dn(t,o){}function mn(t,o){t&1&&u(0,dn,0,0,"ng-template")}function gn(t,o){if(t&1&&(k(0),u(1,mn,1,0,null,7),E()),t&2){let e=s();r(),l("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",O(2,gt,e.item))}}function fn(t,o){if(t&1&&x(0,"span",12),t&2){let e=s(2);A(e.item.iconClass),l("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function _n(t,o){if(t&1&&(d(0,"span",13),C(1),c()),t&2){let e=s(2);r(),S(e.item.label)}}function hn(t,o){if(t&1&&(x(0,"span",14),se(1,"safeHtml")),t&2){let e=s(2);l("innerHTML",Oe(1,1,e.item.label),Be)}}function yn(t,o){if(t&1&&x(0,"p-badge",15),t&2){let e=s(2);l("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function bn(t,o){if(t&1&&u(0,fn,1,4,"span",9)(1,_n,2,1,"span",10)(2,hn,2,3,"ng-template",null,1,V)(4,yn,1,2,"p-badge",11),t&2){let e=Q(3),i=s();l("ngIf",i.item.icon),r(),l("ngIf",i.item.escape!==!1)("ngIfElse",e),r(3),l("ngIf",i.item.badge)}}var vn=["start"],Cn=["end"],xn=["header"],wn=["item"],In=["submenuheader"],Tn=["list"],Sn=["container"],Mn=t=>({"p-menu p-component":!0,"p-menu-overlay":t}),On=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),kn=t=>({value:"visible",params:t}),En=(t,o)=>({"p-hidden":t,flex:o}),An=(t,o,e)=>({"p-hidden":t,"p-focus":o,"p-disabled":e}),$n=(t,o)=>({"p-focus":t,"p-disabled":o});function Dn(t,o){t&1&&M(0)}function Ln(t,o){if(t&1&&(d(0,"div",9),u(1,Dn,1,0,"ng-container",10),c()),t&2){let e,i=s(2);f("data-pc-section","start"),r(),l("ngTemplateOutlet",(e=i.startTemplate)!==null&&e!==void 0?e:i._startTemplate)}}function Vn(t,o){t&1&&x(0,"li",14)}function Fn(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(3).$implicit;r(),S(e.label)}}function Rn(t,o){if(t&1&&(x(0,"span",18),se(1,"safeHtml")),t&2){let e=s(3).$implicit;l("innerHTML",Oe(1,1,e.label),Be)}}function zn(t,o){if(t&1&&(k(0),u(1,Fn,2,1,"span",17)(2,Rn,2,3,"ng-template",null,2,V),E()),t&2){let e=Q(3),i=s(2).$implicit;r(),l("ngIf",i.escape!==!1)("ngIfElse",e)}}function Pn(t,o){t&1&&M(0)}function Bn(t,o){if(t&1&&(d(0,"li",15),u(1,zn,4,2,"ng-container",7)(2,Pn,1,0,"ng-container",16),c()),t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(3);l("ngClass",ee(7,En,n.visible===!1,n.visible))("tooltipOptions",n.tooltipOptions),f("data-automationid",n.automationId)("id",p.menuitemId(n,p.id,a)),r(),l("ngIf",!p.submenuHeaderTemplate&&!p._submenuHeaderTemplate),r(),l("ngTemplateOutlet",(e=p.submenuHeaderTemplate)!==null&&e!==void 0?e:p._submenuHeaderTemplate)("ngTemplateOutletContext",O(10,gt,n))}}function Hn(t,o){t&1&&x(0,"li",14)}function Kn(t,o){if(t&1){let e=w();d(0,"li",20),y("onMenuItemClick",function(n){m(e);let a=s(),p=a.$implicit,I=a.index,oe=s().index,F=s(3);return g(F.itemClick(n,F.menuitemId(p,F.id,oe,I)))}),c()}if(t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(),I=p.$implicit,oe=p.index,F=s(3);A(n.styleClass),l("pMenuItemContent",n)("itemTemplate",(e=F.itemTemplate)!==null&&e!==void 0?e:F._itemTemplate)("ngClass",Ye(13,An,n.visible===!1||I.visible===!1,F.focusedOptionId()&&F.menuitemId(n,F.id,oe,a)===F.focusedOptionId(),F.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),f("data-pc-section","menuitem")("aria-label",F.label(n.label))("data-p-focused",F.isItemFocused(F.menuitemId(n,F.id,oe,a)))("data-p-disabled",F.disabled(n.disabled))("aria-disabled",F.disabled(n.disabled))("id",F.menuitemId(n,F.id,oe,a))}}function Nn(t,o){if(t&1&&u(0,Hn,1,0,"li",12)(1,Kn,1,17,"li",19),t&2){let e=o.$implicit,i=s().$implicit;l("ngIf",e.separator&&(e.visible!==!1||i.visible!==!1)),r(),l("ngIf",!e.separator&&(e.visible!==!1||i.visible!==!1))}}function Qn(t,o){if(t&1&&u(0,Vn,1,0,"li",12)(1,Bn,3,12,"li",13)(2,Nn,2,2,"ng-template",11),t&2){let e=o.$implicit;l("ngIf",e.separator&&e.visible!==!1),r(),l("ngIf",!e.separator),r(),l("ngForOf",e.items)}}function qn(t,o){if(t&1&&u(0,Qn,3,3,"ng-template",11),t&2){let e=s(2);l("ngForOf",e.model)}}function jn(t,o){t&1&&x(0,"li",14)}function Un(t,o){if(t&1){let e=w();d(0,"li",20),y("onMenuItemClick",function(n){m(e);let a=s(),p=a.$implicit,I=a.index,oe=s(3);return g(oe.itemClick(n,oe.menuitemId(p,oe.id,I)))}),c()}if(t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(3);A(n.styleClass),l("pMenuItemContent",n)("itemTemplate",(e=p.itemTemplate)!==null&&e!==void 0?e:p._itemTemplate)("ngClass",ee(13,$n,p.focusedOptionId()&&p.menuitemId(n,p.id,a)===p.focusedOptionId(),p.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),f("data-pc-section","menuitem")("aria-label",p.label(n.label))("data-p-focused",p.isItemFocused(p.menuitemId(n,p.id,a)))("data-p-disabled",p.disabled(n.disabled))("aria-disabled",p.disabled(n.disabled))("id",p.menuitemId(n,p.id,a))}}function Gn(t,o){if(t&1&&u(0,jn,1,0,"li",12)(1,Un,1,16,"li",19),t&2){let e=o.$implicit;l("ngIf",e.separator&&e.visible!==!1),r(),l("ngIf",!e.separator&&e.visible!==!1)}}function Zn(t,o){if(t&1&&u(0,Gn,2,2,"ng-template",11),t&2){let e=s(2);l("ngForOf",e.model)}}function Wn(t,o){t&1&&M(0)}function Yn(t,o){if(t&1&&(d(0,"div",21),u(1,Wn,1,0,"ng-container",10),c()),t&2){let e,i=s(2);f("data-pc-section","end"),r(),l("ngTemplateOutlet",(e=i.endTemplate)!==null&&e!==void 0?e:i._endTemplate)}}function Jn(t,o){if(t&1){let e=w();d(0,"div",4,0),y("click",function(n){m(e);let a=s();return g(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){m(e);let a=s();return g(a.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){m(e);let a=s();return g(a.onOverlayAnimationEnd(n))}),u(2,Ln,2,2,"div",5),d(3,"ul",6,1),y("focus",function(n){m(e);let a=s();return g(a.onListFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onListBlur(n))})("keydown",function(n){m(e);let a=s();return g(a.onListKeyDown(n))}),u(5,qn,1,1,null,7)(6,Zn,1,1,null,7),c(),u(7,Yn,2,2,"div",8),c()}if(t&2){let e,i,n=s();A(n.styleClass),l("ngClass",O(18,Mn,n.popup))("ngStyle",n.style)("@overlayAnimation",O(23,kn,ee(20,On,n.showTransitionOptions,n.hideTransitionOptions)))("@.disabled",n.popup!==!0),f("data-pc-name","menu")("id",n.id),r(2),l("ngIf",(e=n.startTemplate)!==null&&e!==void 0?e:n._startTemplate),r(),f("id",n.id+"_list")("tabindex",n.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",n.activedescendant())("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy),r(2),l("ngIf",n.hasSubMenu()),r(),l("ngIf",!n.hasSubMenu()),r(),l("ngIf",(i=n.endTemplate)!==null&&i!==void 0?i:n._endTemplate)}}var Li=(()=>{class t{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!le(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||t)(D(Ge,16),D(ei,16))};static \u0275pipe=Ze({name:"safeHtml",type:t,pure:!0})}return t})(),Xn=(()=>{class t{item;itemTemplate;onMenuItemClick=new T;menu;constructor(e){this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}static \u0275fac=function(i){return new(i||t)(D(de(()=>Ot)))};static \u0275cmp=L({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:an,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(i,n){if(i&1){let a=w();d(0,"div",2),y("click",function(I){return m(a),g(n.onItemClick(I,n.item))}),u(1,un,3,2,"ng-container",3)(2,gn,2,4,"ng-container",3)(3,bn,5,4,"ng-template",null,0,V),c()}i&2&&(f("data-pc-section","content"),r(),l("ngIf",!n.itemTemplate),r(),l("ngIf",n.itemTemplate))},dependencies:[j,J,X,q,be,xt,ti,ii,De,St,Mt,wi,U,Li],encapsulation:2})}return t})(),Ot=(()=>{class t extends Y{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new T;onHide=new T;onBlur=new T;onFocus=new T;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ye(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=H(-1);selectedOptionIndex=H(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=B(Ai);constructor(e){super(),this.overlayService=e,this.id=this.id||Ee("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),Z(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&fe.clear(e.element);break}}alignOverlay(){this.relativeAlign?tt(this.container,this.target):et(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):oi(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&fe.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!it()&&this.hide()}menuitemId(e,i,n,a){return e?.id??`${i}_${n}${a!==void 0?"_"+a:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(Z(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)Z(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(He(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=ve(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=i&&ve(i,'a[data-pc-section="action"]');this.popup&&Z(this.target),n?n.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[...He(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...He(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let i=He(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(i.length>0){let n=e>=i.length?i.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(i[n].getAttribute("id"))}}itemClick(e,i){let{originalEvent:n,item:a}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),a.disabled){n.preventDefault();return}!a.url&&!a.routerLink&&n.preventDefault(),a.command&&a.command({originalEvent:n,item:a}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&le(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let n=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(i.target),a=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&n&&a&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&n&&a&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&le(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&le(this.platformId)&&(this.scrollHandler=new lt(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&fe.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}static \u0275fac=function(i){return new(i||t)(D($e))};static \u0275cmp=L({type:t,selectors:[["p-menu"]],contentQueries:function(i,n,a){if(i&1&&(v(a,vn,4),v(a,Cn,4),v(a,xn,4),v(a,wn,4),v(a,In,4),v(a,ie,4)),i&2){let p;_(p=h())&&(n.startTemplate=p.first),_(p=h())&&(n.endTemplate=p.first),_(p=h())&&(n.headerTemplate=p.first),_(p=h())&&(n.itemTemplate=p.first),_(p=h())&&(n.submenuHeaderTemplate=p.first),_(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(N(Tn,5),N(Sn,5)),i&2){let a;_(a=h())&&(n.listViewChild=a.first),_(a=h())&&(n.containerViewChild=a.first)}},inputs:{model:"model",popup:[2,"popup","popup",b],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",te],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",te]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[R([Ai]),G,z],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(i,n){i&1&&u(0,Jn,8,25,"div",3),i&2&&l("ngIf",!n.popup||n.visible)},dependencies:[j,J,Xe,X,q,be,xt,Xn,St,xi,Mt,U,Li],encapsulation:2,data:{animation:[Fe("overlayAnimation",[ue(":enter",[ce({opacity:0,transform:"scaleY(0.8)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({opacity:0}))])])]},changeDetection:0})}return t})();var Vi=(()=>{class t extends pt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["EyeIcon"]],features:[z],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(i,n){i&1&&(Ue(),d(0,"svg",0),x(1,"path",1),c()),i&2&&(A(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Fi=(()=>{class t extends pt{pathId;ngOnInit(){this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["EyeSlashIcon"]],features:[z],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Ue(),d(0,"svg",0)(1,"g"),x(2,"path",1),c(),d(3,"defs")(4,"clipPath",2),x(5,"rect",3),c()()()),i&2&&(A(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),r(),f("clip-path",n.pathId),r(3),l("id",n.pathId))},encapsulation:2})}return t})();var eo=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,to={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ri=(()=>{class t extends W{name="chip";theme=eo;classes=to;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var io=["removeicon"],no=["*"];function oo(t,o){if(t&1){let e=w();d(0,"img",4),y("error",function(n){m(e);let a=s();return g(a.imageError(n))}),c()}if(t&2){let e=s();l("src",e.image,Me)("alt",e.alt)}}function ao(t,o){if(t&1&&x(0,"span",6),t&2){let e=s(2);A(e.icon),l("ngClass","p-chip-icon"),f("data-pc-section","icon")}}function so(t,o){if(t&1&&u(0,ao,1,4,"span",5),t&2){let e=s();l("ngIf",e.icon)}}function lo(t,o){if(t&1&&(d(0,"div",7),C(1),c()),t&2){let e=s();f("data-pc-section","label"),r(),S(e.label)}}function ro(t,o){if(t&1){let e=w();d(0,"span",11),y("click",function(n){m(e);let a=s(3);return g(a.close(n))})("keydown",function(n){m(e);let a=s(3);return g(a.onKeydown(n))}),c()}if(t&2){let e=s(3);A(e.removeIcon),l("ngClass","p-chip-remove-icon"),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function po(t,o){if(t&1){let e=w();d(0,"TimesCircleIcon",12),y("click",function(n){m(e);let a=s(3);return g(a.close(n))})("keydown",function(n){m(e);let a=s(3);return g(a.onKeydown(n))}),c()}if(t&2){let e=s(3);A("p-chip-remove-icon"),f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function co(t,o){if(t&1&&(k(0),u(1,ro,1,5,"span",9)(2,po,1,4,"TimesCircleIcon",10),E()),t&2){let e=s(2);r(),l("ngIf",e.removeIcon),r(),l("ngIf",!e.removeIcon)}}function uo(t,o){}function mo(t,o){t&1&&u(0,uo,0,0,"ng-template")}function go(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(n){m(e);let a=s(2);return g(a.close(n))})("keydown",function(n){m(e);let a=s(2);return g(a.onKeydown(n))}),u(1,mo,1,0,null,14),c()}if(t&2){let e=s(2);f("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),r(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function fo(t,o){if(t&1&&(k(0),u(1,co,3,2,"ng-container",3)(2,go,2,3,"span",8),E()),t&2){let e=s();r(),l("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),r(),l("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var zi=(()=>{class t extends Y{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new T;onImageError=new T;visible=!0;get removeAriaLabel(){return this.config.getTranslation(re.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=B(Ri);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-chip"]],contentQueries:function(i,n,a){if(i&1&&(v(a,io,4),v(a,ie,4)),i&2){let p;_(p=h())&&(n.removeIconTemplate=p.first),_(p=h())&&(n.templates=p)}},hostVars:9,hostBindings:function(i,n){i&2&&(f("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),_e(n.style),A(n.containerClass()),We("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",b],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[R([Ri]),G,z,Ht],ngContentSelectors:no,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(me(),ge(0),u(1,oo,1,2,"img",1)(2,so,1,1,"ng-template",null,0,V)(4,lo,2,2,"div",2)(5,fo,3,2,"ng-container",3)),i&2){let a=Q(3);r(),l("ngIf",n.image)("ngIfElse",a),r(3),l("ngIf",n.label),r(),l("ngIf",n.removable)}},dependencies:[j,J,X,q,ct,U],encapsulation:2,changeDetection:0})}return t})();var _o=({dt:t})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${t("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${t("autocomplete.dropdown.width")} + ${t("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${t("autocomplete.dropdown.width")};
    border-start-end-radius: ${t("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${t("autocomplete.dropdown.border.radius")};
    background: ${t("autocomplete.dropdown.background")};
    border: 1px solid ${t("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${t("autocomplete.dropdown.color")};
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${t("autocomplete.dropdown.hover.background")};
    border-color: ${t("autocomplete.dropdown.hover.border.color")};
    color: ${t("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${t("autocomplete.dropdown.active.background")};
    border-color: ${t("autocomplete.dropdown.active.border.color")};
    color: ${t("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${t("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${t("autocomplete.dropdown.focus.ring.width")} ${t("autocomplete.dropdown.focus.ring.style")} ${t("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${t("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    background: ${t("autocomplete.overlay.background")};
    color: ${t("autocomplete.overlay.color")};
    border: 1px solid ${t("autocomplete.overlay.border.color")};
    border-radius: ${t("autocomplete.overlay.border.radius")};
    box-shadow: ${t("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${t("autocomplete.list.gap")};
    padding: ${t("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${t("autocomplete.option.padding")};
    border: 0 none;
    color: ${t("autocomplete.option.color")};
    background: transparent;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")};
    border-radius: ${t("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${t("autocomplete.option.focus.background")};
    color: ${t("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${t("autocomplete.option.selected.background")};
    color: ${t("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${t("autocomplete.option.selected.focus.background")};
    color: ${t("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${t("autocomplete.option.group.padding")};
    color: ${t("autocomplete.option.group.color")};
    background: ${t("autocomplete.option.group.background")};
    font-weight: ${t("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${t("autocomplete.padding.y")} / 2) ${t("autocomplete.padding.x")};
    gap: calc(${t("autocomplete.padding.y")} / 2);
    color: ${t("autocomplete.color")};
    background: ${t("autocomplete.background")};
    border: 1px solid ${t("autocomplete.border.color")};
    border-radius: ${t("autocomplete.border.radius")};
    width: 100%;
    transition: background ${t("autocomplete.transition.duration")}, color ${t("autocomplete.transition.duration")}, border-color ${t("autocomplete.transition.duration")}, outline-color ${t("autocomplete.transition.duration")}, box-shadow ${t("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
    box-shadow: ${t("autocomplete.focus.ring.shadow")};
    outline: ${t("autocomplete.focus.ring.width")} ${t("autocomplete.focus.ring.style")} ${t("autocomplete.focus.ring.color")};
    outline-offset: ${t("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${t("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${t("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${t("autocomplete.disabled.background")};
    color: ${t("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
    border-radius: ${t("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${t("autocomplete.chip.focus.background")};
    color: ${t("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${t("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${t("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${t("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${t("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}

.p-autocomplete-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    right: ${t("autocomplete.padding.x")};
    color: ${t("autocomplete.dropdown.color")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
    right: calc(${t("autocomplete.padding.x")} + ${t("autocomplete.dropdown.width")});
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.invalid.border.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${t("autocomplete.focus.border.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}

p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
    color: ${t("autocomplete.invalid.placeholder.color")};
}`,ho={root:{position:"relative"}},yo={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle()==="filled"}),chipItem:({instance:t,i:o})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===o}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:o,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(o),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(o)}),emptyMessage:"p-autocomplete-empty-message"},Pi=(()=>{class t extends W{name="autocomplete";theme=_o;classes=yo;inlineStyles=ho;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var bo=["item"],vo=["empty"],Co=["header"],xo=["footer"],wo=["selecteditem"],Io=["group"],To=["loader"],So=["removeicon"],Mo=["loadingicon"],Oo=["clearicon"],ko=["dropdownicon"],Eo=["container"],Ao=["focusInput"],$o=["multiIn"],Do=["multiContainer"],Lo=["ddBtn"],Vo=["items"],Fo=["scroller"],Ro=["overlay"],zo=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),Bi=t=>({$implicit:t}),Po=()=>({class:"p-autocomplete-chip-icon"}),ft=t=>({height:t}),Hi=(t,o)=>({$implicit:t,options:o}),Bo=t=>({options:t}),Ho=()=>({}),Ko=(t,o)=>({$implicit:t,index:o});function No(t,o){if(t&1){let e=w();d(0,"input",19,3),y("input",function(n){m(e);let a=s();return g(a.onInput(n))})("keydown",function(n){m(e);let a=s();return g(a.onKeyDown(n))})("change",function(n){m(e);let a=s();return g(a.onInputChange(n))})("focus",function(n){m(e);let a=s();return g(a.onInputFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onInputBlur(n))})("paste",function(n){m(e);let a=s();return g(a.onInputPaste(n))})("keyup",function(n){m(e);let a=s();return g(a.onInputKeyUp(n))}),c()}if(t&2){let e,i=s();A(i.inputStyleClass),l("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),f("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Qo(t,o){if(t&1){let e=w();d(0,"TimesIcon",22),y("click",function(){m(e);let n=s(2);return g(n.clear())}),c()}t&2&&(l("styleClass","p-autocomplete-clear-icon"),f("aria-hidden",!0))}function qo(t,o){}function jo(t,o){t&1&&u(0,qo,0,0,"ng-template")}function Uo(t,o){if(t&1){let e=w();d(0,"span",23),y("click",function(){m(e);let n=s(2);return g(n.clear())}),u(1,jo,1,0,null,24),c()}if(t&2){let e=s(2);f("aria-hidden",!0),r(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Go(t,o){if(t&1&&(k(0),u(1,Qo,1,2,"TimesIcon",20)(2,Uo,2,2,"span",21),E()),t&2){let e=s();r(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Zo(t,o){t&1&&M(0)}function Wo(t,o){if(t&1){let e=w();d(0,"span",33),y("click",function(n){m(e);let a=s(3).index,p=s(2);return g(p.readonly?"":p.removeOption(n,a))}),x(1,"TimesCircleIcon",34),c()}t&2&&(r(),l("styleClass","p-autocomplete-chip-icon"),f("aria-hidden",!0))}function Yo(t,o){t&1&&(k(0),u(1,Wo,2,2,"ng-template",null,6,V),E())}function Jo(t,o){if(t&1&&(d(0,"p-chip",32),u(1,Yo,3,0,"ng-container",15),c()),t&2){let e=s().$implicit,i=s(2);l("label",i.getOptionLabel(e))("removable",!0),r(),l("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function Xo(t,o){}function ea(t,o){t&1&&u(0,Xo,0,0,"ng-template")}function ta(t,o){if(t&1&&(d(0,"span"),u(1,ea,1,0,null,30),c()),t&2){let e=s(3);f("aria-hidden",!0),r(),l("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)("ngTemplateOutletContext",he(3,Po))}}function ia(t,o){if(t&1&&(d(0,"li",29,5),u(2,Zo,1,0,"ng-container",30)(3,Jo,2,3,"p-chip",31)(4,ta,2,4,"span",15),c()),t&2){let e=o.$implicit,i=o.index,n=s(2);l("ngClass",O(10,zo,n.focusedMultipleOptionIndex()===i)),f("id",n.id+"_multiple_option_"+i)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),r(2),l("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",O(12,Bi,e)),r(),l("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate),r(),l("ngIf",n.removeIconTemplate||n._removeIconTemplate)}}function na(t,o){if(t&1){let e=w();d(0,"ul",25,4),y("focus",function(n){m(e);let a=s();return g(a.onMultipleContainerFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onMultipleContainerBlur(n))})("keydown",function(n){m(e);let a=s();return g(a.onMultipleContainerKeyDown(n))}),u(2,ia,5,14,"li",26),d(3,"li",27)(4,"input",28,3),y("input",function(n){m(e);let a=s();return g(a.onInput(n))})("keydown",function(n){m(e);let a=s();return g(a.onKeyDown(n))})("change",function(n){m(e);let a=s();return g(a.onInputChange(n))})("focus",function(n){m(e);let a=s();return g(a.onInputFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onInputBlur(n))})("paste",function(n){m(e);let a=s();return g(a.onInputPaste(n))})("keyup",function(n){m(e);let a=s();return g(a.onInputKeyUp(n))}),c()()()}if(t&2){let e,i=s();l("ngClass",i.inputMultipleClass)("tabindex",-1),f("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),r(2),l("ngForOf",i.modelValue()),r(2),A(i.inputStyleClass),l("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),f("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function oa(t,o){t&1&&x(0,"SpinnerIcon",37),t&2&&(l("styleClass","p-autocomplete-loader")("spin",!0),f("aria-hidden",!0))}function aa(t,o){}function sa(t,o){t&1&&u(0,aa,0,0,"ng-template")}function la(t,o){if(t&1&&(d(0,"span",38),u(1,sa,1,0,null,24),c()),t&2){let e=s(2);f("aria-hidden",!0),r(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function ra(t,o){if(t&1&&(k(0),u(1,oa,1,3,"SpinnerIcon",35)(2,la,2,2,"span",36),E()),t&2){let e=s();r(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),r(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function pa(t,o){if(t&1&&x(0,"span",41),t&2){let e=s(2);l("ngClass",e.dropdownIcon),f("aria-hidden",!0)}}function ca(t,o){t&1&&x(0,"ChevronDownIcon")}function ua(t,o){}function da(t,o){t&1&&u(0,ua,0,0,"ng-template")}function ma(t,o){if(t&1&&(k(0),u(1,ca,1,0,"ChevronDownIcon",15)(2,da,1,0,null,24),E()),t&2){let e=s(2);r(),l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),r(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function ga(t,o){if(t&1){let e=w();d(0,"button",39,7),y("click",function(n){m(e);let a=s();return g(a.handleDropdownClick(n))}),u(2,pa,1,2,"span",40)(3,ma,3,2,"ng-container",15),c()}if(t&2){let e=s();l("disabled",e.disabled),f("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),r(2),l("ngIf",e.dropdownIcon),r(),l("ngIf",!e.dropdownIcon)}}function fa(t,o){t&1&&M(0)}function _a(t,o){t&1&&M(0)}function ha(t,o){if(t&1&&u(0,_a,1,0,"ng-container",30),t&2){let e=o.$implicit,i=o.options;s(2);let n=Q(6);l("ngTemplateOutlet",n)("ngTemplateOutletContext",ee(2,Hi,e,i))}}function ya(t,o){t&1&&M(0)}function ba(t,o){if(t&1&&u(0,ya,1,0,"ng-container",30),t&2){let e=o.options,i=s(4);l("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",O(2,Bo,e))}}function va(t,o){t&1&&(k(0),u(1,ba,1,4,"ng-template",null,10,V),E())}function Ca(t,o){if(t&1){let e=w();d(0,"p-scroller",46,9),y("onLazyLoad",function(n){m(e);let a=s(2);return g(a.onLazyLoad.emit(n))}),u(2,ha,1,5,"ng-template",null,2,V)(4,va,3,0,"ng-container",15),c()}if(t&2){let e=s(2);_e(O(8,ft,e.scrollHeight)),l("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),r(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function xa(t,o){t&1&&M(0)}function wa(t,o){if(t&1&&(k(0),u(1,xa,1,0,"ng-container",30),E()),t&2){s();let e=Q(6),i=s();r(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",ee(3,Hi,i.visibleOptions(),he(2,Ho)))}}function Ia(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(2).$implicit,i=s(3);r(),S(i.getOptionGroupLabel(e.optionGroup))}}function Ta(t,o){t&1&&M(0)}function Sa(t,o){if(t&1&&(k(0),d(1,"li",50),u(2,Ia,2,1,"span",15)(3,Ta,1,0,"ng-container",30),c(),E()),t&2){let e=s(),i=e.$implicit,n=e.index,a=s().options,p=s(2);r(),l("ngStyle",O(5,ft,a.itemSize+"px")),f("id",p.id+"_"+p.getOptionIndex(n,a)),r(),l("ngIf",!p.groupTemplate),r(),l("ngTemplateOutlet",p.groupTemplate)("ngTemplateOutletContext",O(7,Bi,i.optionGroup))}}function Ma(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(2).$implicit,i=s(3);r(),S(i.getOptionLabel(e))}}function Oa(t,o){t&1&&M(0)}function ka(t,o){if(t&1){let e=w();k(0),d(1,"li",51),y("click",function(n){m(e);let a=s().$implicit,p=s(3);return g(p.onOptionSelect(n,a))})("mouseenter",function(n){m(e);let a=s().index,p=s().options,I=s(2);return g(I.onOptionMouseEnter(n,I.getOptionIndex(a,p)))}),u(2,Ma,2,1,"span",15)(3,Oa,1,0,"ng-container",30),c(),E()}if(t&2){let e=s(),i=e.$implicit,n=e.index,a=s().options,p=s(2);r(),l("ngStyle",O(12,ft,a.itemSize+"px"))("ngClass",p.optionClass(i,n,a)),f("id",p.id+"_"+p.getOptionIndex(n,a))("aria-label",p.getOptionLabel(i))("aria-selected",p.isSelected(i))("aria-disabled",p.isOptionDisabled(i))("data-p-focused",p.focusedOptionIndex()===p.getOptionIndex(n,a))("aria-setsize",p.ariaSetSize)("aria-posinset",p.getAriaPosInset(p.getOptionIndex(n,a))),r(),l("ngIf",!p.itemTemplate&&!p._itemTemplate),r(),l("ngTemplateOutlet",p.itemTemplate||p._itemTemplate)("ngTemplateOutletContext",ee(14,Ko,i,a.getOptions?a.getOptions(n):n))}}function Ea(t,o){if(t&1&&u(0,Sa,4,9,"ng-container",15)(1,ka,4,17,"ng-container",15),t&2){let e=o.$implicit,i=s(3);l("ngIf",i.isOptionGroup(e)),r(),l("ngIf",!i.isOptionGroup(e))}}function Aa(t,o){if(t&1&&(k(0),C(1),E()),t&2){let e=s(4);r(),ae(" ",e.searchResultMessageText," ")}}function $a(t,o){t&1&&M(0,null,12)}function Da(t,o){if(t&1&&(d(0,"li",52),u(1,Aa,2,1,"ng-container",53)(2,$a,2,0,"ng-container",24),c()),t&2){let e=s().options,i=s(2);l("ngStyle",O(4,ft,e.itemSize+"px")),r(),l("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),r(),l("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function La(t,o){if(t&1&&(d(0,"ul",47,11),u(2,Ea,2,2,"ng-template",48)(3,Da,3,6,"li",49),c()),t&2){let e=o.$implicit,i=o.options,n=s(2);_e(i.contentStyle),l("ngClass",i.contentStyleClass),f("id",n.id+"_list")("aria-label",n.listLabel),r(2),l("ngForOf",e),r(),l("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function Va(t,o){t&1&&M(0)}function Fa(t,o){if(t&1&&(d(0,"div",42),u(1,fa,1,0,"ng-container",24),d(2,"div",43),u(3,Ca,5,10,"p-scroller",44)(4,wa,2,6,"ng-container",15),c(),u(5,La,4,7,"ng-template",null,8,V)(7,Va,1,0,"ng-container",24),c(),d(8,"span",45),C(9),c()),t&2){let e=s();A(e.panelStyleClass),l("ngClass",e.panelClass)("ngStyle",e.panelStyle),r(),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),r(),We("max-height",e.virtualScroll?"auto":e.scrollHeight),r(),l("ngIf",e.virtualScroll),r(),l("ngIf",!e.virtualScroll),r(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),r(2),ae(" ",e.selectedMessageText," ")}}var Ra={provide:ot,useExisting:de(()=>kt),multi:!0},kt=(()=>{class t extends Y{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant="outlined";fluid=!1;completeMethod=new T;onSelect=new T;onUnselect=new T;onFocus=new T;onBlur=new T;onDropdownClick=new T;onClear=new T;onKeyUp=new T;onShow=new T;onHide=new T;onLazyLoad=new T;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=B(li);value;_suggestions=H(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=H(null);focusedMultipleOptionIndex=H(-1);focusedOptionIndex=H(-1);_componentStyle=B(Pi);visibleOptions=ye(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=ye(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(n=>Ce(n,this.optionValue)===e):e;if(ke(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(i);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return ke(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(re.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,n){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,n),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,Wt(()=>{this.filled=ke(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||Ee("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,n,a)=>{i.push({optionGroup:n,group:!0,index:a});let p=this.getOptionGroupChildren(n);return p&&p.forEach(I=>i.push(I)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return It(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?It(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?Ce(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>wt(i,this.getOptionValue(e),this.equalityKey())):!1:wt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&Z(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(Z(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let n=this.visibleOptions().find(a=>this.isOptionMatched(a,this.inputEL.nativeElement.value||""));n!==void 0&&(i=!0,!this.isSelected(n)&&this.onOptionSelect(e,n))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(si(i.value)&&this.hasSelectedOption()?(Z(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(ke(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),Z(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,n=!0){let a=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],a])):this.updateModel(a),this.onSelect.emit({originalEvent:e,value:i}),n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let n=this.modelValue()[i],a=this.modelValue().filter((p,I)=>I!==i).map(p=>this.getOptionValue(p));this.updateModel(a),this.onUnselect.emit({originalEvent:e,value:n}),Z(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=ve(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&Z(this.inputEL.nativeElement),e&&Z(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&Z(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return ke(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?Ce(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ce(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?Ce(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?Ce(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=ve(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=ve(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(D($e),D(bt))};static \u0275cmp=L({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,n,a){if(i&1&&(v(a,bo,5),v(a,vo,5),v(a,Co,5),v(a,xo,5),v(a,wo,5),v(a,Io,5),v(a,To,5),v(a,So,5),v(a,Mo,5),v(a,Oo,5),v(a,ko,5),v(a,ie,4)),i&2){let p;_(p=h())&&(n.itemTemplate=p.first),_(p=h())&&(n.emptyTemplate=p.first),_(p=h())&&(n.headerTemplate=p.first),_(p=h())&&(n.footerTemplate=p.first),_(p=h())&&(n.selectedItemTemplate=p.first),_(p=h())&&(n.groupTemplate=p.first),_(p=h())&&(n.loaderTemplate=p.first),_(p=h())&&(n.removeIconTemplate=p.first),_(p=h())&&(n.loadingIconTemplate=p.first),_(p=h())&&(n.clearIconTemplate=p.first),_(p=h())&&(n.dropdownIconTemplate=p.first),_(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(N(Eo,5),N(Ao,5),N($o,5),N(Do,5),N(Lo,5),N(Vo,5),N(Fo,5),N(Ro,5)),i&2){let a;_(a=h())&&(n.containerEL=a.first),_(a=h())&&(n.inputEL=a.first),_(a=h())&&(n.multiInputEl=a.first),_(a=h())&&(n.multiContainerEL=a.first),_(a=h())&&(n.dropdownButton=a.first),_(a=h())&&(n.itemsViewChild=a.first),_(a=h())&&(n.scroller=a.first),_(a=h())&&(n.overlayViewChild=a.first)}},inputs:{minLength:[2,"minLength","minLength",te],delay:[2,"delay","delay",te],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",b],disabled:[2,"disabled","disabled",b],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",b],virtualScroll:[2,"virtualScroll","virtualScroll",b],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",te],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>te(e,null)],name:"name",required:[2,"required","required",b],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",b],forceSelection:[2,"forceSelection","forceSelection",b],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",b],baseZIndex:[2,"baseZIndex","baseZIndex",te],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",b],group:[2,"group","group",b],completeOnFocus:[2,"completeOnFocus","completeOnFocus",b],showClear:[2,"showClear","showClear",b],field:"field",dropdown:[2,"dropdown","dropdown",b],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",b],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",b],tabindex:[2,"tabindex","tabindex",te],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",b],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",b],selectOnFocus:[2,"selectOnFocus","selectOnFocus",b],searchLocale:[2,"searchLocale","searchLocale",b],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",b],typeahead:[2,"typeahead","typeahead",b],variant:"variant",fluid:[2,"fluid","fluid",b]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[R([Ra,Pi]),G,z],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1){let a=w();d(0,"div",13,0),y("click",function(I){return m(a),g(n.onContainerClick(I))}),u(2,No,2,25,"input",14)(3,Go,3,2,"ng-container",15)(4,na,6,26,"ul",16)(5,ra,3,2,"ng-container",15)(6,ga,4,5,"button",17),d(7,"p-overlay",18,1),jt("visibleChange",function(I){return m(a),qt(n.overlayVisible,I)||(n.overlayVisible=I),g(I)}),y("onAnimationStart",function(I){return m(a),g(n.onOverlayAnimationStart(I))})("onHide",function(){return m(a),g(n.hide())}),u(9,Fa,10,11,"ng-template",null,2,V),c()()}i&2&&(A(n.styleClass),l("ngClass",n.rootClass)("ngStyle",n.style),r(2),l("ngIf",!n.multiple),r(),l("ngIf",n.filled&&!n.disabled&&n.showClear&&!n.loading),r(),l("ngIf",n.multiple),r(),l("ngIf",n.loading),r(),l("ngIf",n.dropdown),r(),Qt("visible",n.overlayVisible),l("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions))},dependencies:[j,J,Xe,X,q,be,vi,Ve,De,Ci,rt,ct,bi,Le,yi,zi,U],encapsulation:2,changeDetection:0})}return t})();var za=({dt:t})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${t("floatlabel.font.weight")};
    inset-inline-start: ${t("floatlabel.position.x")};
    color: ${t("floatlabel.color")};
    transition-duration: ${t("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${t("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${t("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${t("floatlabel.active.font.size")};
    font-weight: ${t("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${t("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${t("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${t("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${t("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${t("floatlabel.on.border.radius")};
    background: ${t("floatlabel.on.active.background")};
    padding: ${t("floatlabel.on.active.padding")};
}
`,Pa={root:({instance:t,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},Ki=(()=>{class t extends W{name="floatlabel";theme=za;classes=Pa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ba=["*"],Ni=(()=>{class t extends Y{_componentStyle=B(Ki);variant="over";static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(i,n){i&2&&Ct("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},features:[R([Ki]),z],ngContentSelectors:Ba,decls:1,vars:0,template:function(i,n){i&1&&(me(),ge(0))},dependencies:[j,U],encapsulation:2,changeDetection:0})}return t})();var Ha={provide:pi,useExisting:de(()=>At),multi:!0},Qi={pint:/^[\d]*$/,int:/^[-]?[\d]*$/,pnum:/^[\d\.]*$/,money:/^[\d\.\s,]*$/,num:/^[-]?[\d\.]*$/,hex:/^[0-9a-f]*$/i,email:/^[a-z0-9_\.\-@]*$/i,alpha:/^[a-z_]*$/i,alphanum:/^[a-z0-9_]*$/i},Et={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46},qi={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},At=(()=>{class t{document;platformId;el;pValidateOnly;set pattern(e){this._pattern=e,e instanceof RegExp?this.regex=e:e in Qi?this.regex=Qi[e]:this.regex=/./}get pattern(){return this._pattern}ngModelChange=new T;regex=/./;_pattern;isAndroid;lastValue;constructor(e,i,n){this.document=e,this.platformId=i,this.el=n,le(this.platformId)?this.isAndroid=ai():this.isAndroid=!1}isNavKeyPress(e){let i=e.keyCode;return i=Ke().safari&&qi[i]||i,i>=33&&i<=40||i==Et.RETURN||i==Et.TAB||i==Et.ESC}isSpecialKey(e){let i=e.keyCode||e.charCode;return i==9||i==13||i==27||i==16||i==17||i>=18&&i<=20||Ke().opera&&!e.shiftKey&&(i==8||i>=33&&i<=35||i>=36&&i<=39||i>=44&&i<=45)}getKey(e){let i=e.keyCode||e.charCode;return Ke().safari&&qi[i]||i}getCharCode(e){return e.charCode||e.keyCode||e.which}findDelta(e,i){let n="";for(let a=0;a<e.length;a++)e.substr(0,a)+e.substr(a+e.length-i.length)===i&&(n=e.substr(a,e.length-i.length));return n}isValidChar(e){return this.regex.test(e)}isValidString(e){for(let i=0;i<e.length;i++)if(!this.isValidChar(e.substr(i,1)))return!1;return!0}onInput(e){if(this.isAndroid&&!this.pValidateOnly){let i=this.el.nativeElement.value,n=this.lastValue||"",a=this.findDelta(i,n),p=this.findDelta(n,i);a.length>1||!a&&!p?this.isValidString(i)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)):p||this.isValidChar(a)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)),i=this.el.nativeElement.value,this.isValidString(i)&&(this.lastValue=i)}}onKeyPress(e){if(this.isAndroid||this.pValidateOnly)return;let i=Ke(),n=this.getKey(e);if(i.mozilla&&(e.ctrlKey||e.altKey))return;if(n==17||n==18||n==13)return;let a=this.getCharCode(e),p=String.fromCharCode(a),I=!0;if(!i.mozilla&&(this.isSpecialKey(e)||!p))return;let F=(this.el.nativeElement.value||"")+p;I=this.regex.test(F),I||e.preventDefault()}onPaste(e){let i=e.clipboardData||this.document.defaultView.clipboardData.getData("text");if(i){let n=/\{[0-9]+\}/,a=i.getData("text");if(n.test(this.regex.toString())){if(!this.regex.test(a)){e.preventDefault();return}}else for(let p of a.toString())if(!this.regex.test(p)){e.preventDefault();return}}}validate(e){if(this.pValidateOnly){let i=this.el.nativeElement.value;if(i&&!this.regex.test(i))return{validatePattern:!1}}}static \u0275fac=function(i){return new(i||t)(D(Yt),D(Ge),D(Kt))};static \u0275dir=vt({type:t,selectors:[["","pKeyFilter",""]],hostBindings:function(i,n){i&1&&y("input",function(p){return n.onInput(p)})("keypress",function(p){return n.onKeyPress(p)})("paste",function(p){return n.onPaste(p)})},inputs:{pValidateOnly:[2,"pValidateOnly","pValidateOnly",b],pattern:[0,"pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[R([Ha]),G]})}return t})();var ji="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",Ka=`(${ji}[.]){3}${ji}`,Ui=`^${Ka}$`,Gi=5e3;var Na=({dt:t})=>`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${t("password.meter.height")};
    background: ${t("password.meter.background")};
    border-radius: ${t("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${t("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${t("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${t("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${t("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${t("password.overlay.padding")};
    background: ${t("password.overlay.background")};
    color: ${t("password.overlay.color")};
    border: 1px solid ${t("password.overlay.border.color")};
    box-shadow: ${t("password.overlay.shadow")};
    border-radius: ${t("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${t("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${t("form.field.padding.x")};
    color: ${t("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${t("icon.size")} / 2));
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${t("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${t("form.field.padding.x")};
    color: ${t("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`,Qa={root:({instance:t})=>({position:t.appendTo==="self"?"relative":void 0})},qa={root:({instance:t})=>({"p-password p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled(),"p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}),pcInput:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text"},Zi=(()=>{class t extends W{name="password";theme=Na;classes=qa;inlineStyles=Qa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var ja=["content"],Ua=["footer"],Ga=["header"],Za=["clearicon"],Wa=["headericon"],Ya=["showicon"],Ja=["input"],Xa=()=>({class:"p-password-toggle-mask-icon p-password-mask-icon"}),es=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),ts=t=>({value:"visible",params:t}),is=t=>({width:t});function ns(t,o){if(t&1){let e=w();d(0,"TimesIcon",8),y("click",function(){m(e);let n=s(2);return g(n.clear())}),c()}t&2&&f("data-pc-section","clearIcon")}function os(t,o){}function as(t,o){t&1&&u(0,os,0,0,"ng-template")}function ss(t,o){if(t&1){let e=w();k(0),u(1,ns,1,1,"TimesIcon",7),d(2,"span",8),y("click",function(){m(e);let n=s();return g(n.clear())}),u(3,as,1,0,null,9),c(),E()}if(t&2){let e=s();r(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),r(),f("data-pc-section","clearIcon"),r(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function ls(t,o){if(t&1){let e=w();d(0,"EyeSlashIcon",12),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),c()}t&2&&f("data-pc-section","hideIcon")}function rs(t,o){}function ps(t,o){t&1&&u(0,rs,0,0,"ng-template")}function cs(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),u(1,ps,1,0,null,14),c()}if(t&2){let e=s(3);r(),l("ngTemplateOutlet",e.hideIconTemplate||e._hideIconTemplate)("ngTemplateOutletContext",he(2,Xa))}}function us(t,o){if(t&1&&(k(0),u(1,ls,1,1,"EyeSlashIcon",10)(2,cs,2,3,"span",11),E()),t&2){let e=s(2);r(),l("ngIf",!e.hideIconTemplate&&!e._hideIconTemplate),r(),l("ngIf",e.hideIconTemplate||e._hideIconTemplate)}}function ds(t,o){if(t&1){let e=w();d(0,"EyeIcon",12),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),c()}t&2&&f("data-pc-section","showIcon")}function ms(t,o){}function gs(t,o){t&1&&u(0,ms,0,0,"ng-template")}function fs(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),u(1,gs,1,0,null,9),c()}if(t&2){let e=s(3);r(),l("ngTemplateOutlet",e.showIconTemplate||e._showIconTemplate)}}function _s(t,o){if(t&1&&(k(0),u(1,ds,1,1,"EyeIcon",10)(2,fs,2,1,"span",11),E()),t&2){let e=s(2);r(),l("ngIf",!e.showIconTemplate&&!e._showIconTemplate),r(),l("ngIf",e.showIconTemplate||e._showIconTemplate)}}function hs(t,o){if(t&1&&(k(0),u(1,us,3,2,"ng-container",5)(2,_s,3,2,"ng-container",5),E()),t&2){let e=s();r(),l("ngIf",e.unmasked),r(),l("ngIf",!e.unmasked)}}function ys(t,o){t&1&&M(0)}function bs(t,o){t&1&&M(0)}function vs(t,o){if(t&1&&(k(0),u(1,bs,1,0,"ng-container",9),E()),t&2){let e=s(2);r(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}function Cs(t,o){if(t&1&&(d(0,"div",17)(1,"div",18),x(2,"div",3),se(3,"mapper"),c(),d(4,"div",19),C(5),c()()),t&2){let e=s(2);r(),f("data-pc-section","meter"),r(),l("ngClass",Je(3,6,e.meter,e.strengthClass))("ngStyle",O(9,is,e.meter?e.meter.width:"")),f("data-pc-section","meterLabel"),r(2),f("data-pc-section","info"),r(),S(e.infoText)}}function xs(t,o){t&1&&M(0)}function ws(t,o){if(t&1){let e=w();d(0,"div",15,1),y("click",function(n){m(e);let a=s();return g(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){m(e);let a=s();return g(a.onAnimationStart(n))})("@overlayAnimation.done",function(n){m(e);let a=s();return g(a.onAnimationEnd(n))}),u(2,ys,1,0,"ng-container",9)(3,vs,2,1,"ng-container",16)(4,Cs,6,11,"ng-template",null,2,V)(6,xs,1,0,"ng-container",9),c()}if(t&2){let e=Q(5),i=s();l("@overlayAnimation",O(9,ts,ee(6,es,i.showTransitionOptions,i.hideTransitionOptions))),f("data-pc-section","panel"),r(2),l("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),r(),l("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),r(3),l("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var Is=(()=>{class t{transform(e,i,...n){return i(e,...n)}static \u0275fac=function(i){return new(i||t)};static \u0275pipe=Ze({name:"mapper",type:t,pure:!0})}return t})(),Ts={provide:ot,useExisting:de(()=>$t),multi:!0},$t=(()=>{class t extends Y{ariaLabel;fluid;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;size;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;variant="outlined";onFocus=new T;onBlur=new T;onClear=new T;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;_componentStyle=B(Zi);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}overlayService=B($e);ngOnInit(){super.ngOnInit(),this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"hideicon":this._hideIconTemplate=e.template;break;case"showicon":this._showIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,fe.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(e){switch(e.toState){case"void":fe.clear(e.element);break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=ni(this.input.nativeElement)+"px",et(this.overlay,this.input.nativeElement)):tt(this.overlay,this.input.nativeElement)}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback){let i=e.target.value;if(this.updateUI(i),e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(e){let i=null,n=null;switch(this.testStrength(e)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let i=0;return this.strongCheckRegExp.test(e)?i=3:this.mediumCheckRegExp.test(e)?i=2:e.length&&(i=1),i}writeValue(e){e===void 0?this.value=null:this.value=e,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindScrollListener(){le(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new lt(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(le(this.platformId)&&!this.resizeListener){let e=this.document.defaultView;this.resizeListener=this.renderer.listen(e,"resize",()=>{this.overlayVisible&&!it()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(e){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":e}}get rootClass(){return this._componentStyle.classes.root({instance:this})}inputFieldClass(e){return{"p-password-input":!0,"p-disabled":e}}strengthClass(e){return`p-password-meter-label p-password-meter${e?.strength?`-${e.strength}`:""}`}filled(){return this.value!=null&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(re.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(re.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(re.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(re.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&(this.appendTo==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(e){return e?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(fe.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-password"]],contentQueries:function(i,n,a){if(i&1&&(v(a,ja,4),v(a,Ua,4),v(a,Ga,4),v(a,Za,4),v(a,Wa,4),v(a,Ya,4),v(a,ie,4)),i&2){let p;_(p=h())&&(n.contentTemplate=p.first),_(p=h())&&(n.footerTemplate=p.first),_(p=h())&&(n.headerTemplate=p.first),_(p=h())&&(n.clearIconTemplate=p.first),_(p=h())&&(n.hideIconTemplate=p.first),_(p=h())&&(n.showIconTemplate=p.first),_(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&N(Ja,5),i&2){let a;_(a=h())&&(n.input=a.first)}},inputs:{ariaLabel:"ariaLabel",fluid:[2,"fluid","fluid",b],ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:[2,"disabled","disabled",b],promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",te],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",b],appendTo:"appendTo",toggleMask:[2,"toggleMask","toggleMask",b],size:"size",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",b],autofocus:[2,"autofocus","autofocus",b],variant:"variant"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[R([Ts,Zi]),G,z],decls:8,vars:33,consts:[["input",""],["overlay",""],["content",""],[3,"ngClass","ngStyle"],["pInputText","",3,"input","focus","blur","keyup","disabled","pSize","ngClass","ngStyle","value","variant","pAutoFocus"],[4,"ngIf"],["class","p-password-overlay p-component",3,"click",4,"ngIf"],["class","p-password-clear-icon",3,"click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-password-toggle-mask-icon p-password-mask-icon",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[1,"p-password-toggle-mask-icon","p-password-mask-icon",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-password-overlay","p-component",3,"click"],[4,"ngIf","ngIfElse"],[1,"p-password-content"],[1,"p-password-meter"],[1,"p-password-meter-text"]],template:function(i,n){if(i&1){let a=w();d(0,"div",3)(1,"input",4,0),se(3,"mapper"),se(4,"mapper"),y("input",function(I){return m(a),g(n.onInput(I))})("focus",function(I){return m(a),g(n.onInputFocus(I))})("blur",function(I){return m(a),g(n.onInputBlur(I))})("keyup",function(I){return m(a),g(n.onKeyUp(I))}),c(),u(5,ss,4,3,"ng-container",5)(6,hs,3,2,"ng-container",5)(7,ws,7,11,"div",6),c()}i&2&&(A(n.styleClass),l("ngClass",n.rootClass)("ngStyle",n.style),f("data-pc-name","password")("data-pc-section","root"),r(),A(n.inputStyleClass),l("disabled",n.disabled)("pSize",n.size)("ngClass",Je(3,27,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value)("variant",n.variant)("pAutoFocus",n.autofocus),f("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",Je(4,30,n.unmasked,n.inputType))("placeholder",n.placeholder)("autocomplete",n.autocomplete)("maxlength",n.maxLength)("data-pc-section","input"),r(4),l("ngIf",n.showClear&&n.value!=null),r(),l("ngIf",n.toggleMask),r(),l("ngIf",n.overlayVisible))},dependencies:[j,J,X,q,be,Ve,rt,Le,Fi,Vi,Is,U],encapsulation:2,data:{animation:[Fe("overlayAnimation",[ue(":enter",[ce({opacity:0,transform:"scaleY(0.8)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({opacity:0}))])])]},changeDetection:0})}return t})();var Ss=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Ms={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Wi=(()=>{class t extends W{name="message";theme=Ss;classes=Ms;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Os=["container"],ks=["icon"],Es=["closeicon"],As=["*"],$s=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Ds=t=>({value:"visible()",params:t}),Ls=t=>({closeCallback:t});function Vs(t,o){t&1&&M(0)}function Fs(t,o){if(t&1&&u(0,Vs,1,0,"ng-container",7),t&2){let e=s(2);l("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function Rs(t,o){if(t&1&&x(0,"i",3),t&2){let e=s(2);l("ngClass",e.icon)}}function zs(t,o){if(t&1&&x(0,"span",9),t&2){let e=s(3);l("ngClass",e.cx("text"))("innerHTML",e.text,Be)}}function Ps(t,o){if(t&1&&(d(0,"div"),u(1,zs,1,2,"span",8),c()),t&2){let e=s(2);r(),l("ngIf",!e.escape)}}function Bs(t,o){if(t&1&&(d(0,"span",5),C(1),c()),t&2){let e=s(3);l("ngClass",e.cx("text")),r(),S(e.text)}}function Hs(t,o){if(t&1&&u(0,Bs,2,2,"span",10),t&2){let e=s(2);l("ngIf",e.escape&&e.text)}}function Ks(t,o){t&1&&M(0)}function Ns(t,o){if(t&1&&u(0,Ks,1,0,"ng-container",11),t&2){let e=s(2);l("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",O(2,Ls,e.close.bind(e)))}}function Qs(t,o){if(t&1&&(d(0,"span",5),ge(1),c()),t&2){let e=s(2);l("ngClass",e.cx("text"))}}function qs(t,o){if(t&1&&x(0,"i",13),t&2){let e=s(3);l("ngClass",e.closeIcon)}}function js(t,o){t&1&&M(0)}function Us(t,o){if(t&1&&u(0,js,1,0,"ng-container",7),t&2){let e=s(3);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Gs(t,o){t&1&&x(0,"TimesIcon",14)}function Zs(t,o){if(t&1){let e=w();d(0,"button",12),y("click",function(n){m(e);let a=s(2);return g(a.close(n))}),u(1,qs,1,1,"i",13)(2,Us,1,1,"ng-container")(3,Gs,1,0,"TimesIcon",14),c()}if(t&2){let e=s(2);r(),K(e.closeIcon?1:-1),r(),K(e.closeIconTemplate||e._closeIconTemplate?2:-1),r(),K(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Ws(t,o){if(t&1&&(d(0,"div",1)(1,"div",2),u(2,Fs,1,1,"ng-container")(3,Rs,1,1,"i",3)(4,Ps,2,1,"div",4)(5,Hs,1,1,"ng-template",null,0,V)(7,Ns,1,4,"ng-container")(8,Qs,2,1,"span",5)(9,Zs,4,3,"button",6),c()()),t&2){let e=Q(6),i=s();l("ngClass",i.containerClass)("@messageAnimation",O(13,Ds,ee(10,$s,i.showTransitionOptions,i.hideTransitionOptions))),f("aria-live","polite")("role","alert"),r(2),K(i.iconTemplate||i._iconTemplate?2:-1),r(),K(i.icon?3:-1),r(),l("ngIf",!i.escape)("ngIfElse",e),r(3),K(i.containerTemplate||i._containerTemplate?7:8),r(2),K(i.closable?9:-1)}}var Yi=(()=>{class t extends Y{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new T;get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=H(!0);_componentStyle=B(Wi);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-message"]],contentQueries:function(i,n,a){if(i&1&&(v(a,Os,4),v(a,ks,4),v(a,Es,4),v(a,ie,4)),i&2){let p;_(p=h())&&(n.containerTemplate=p.first),_(p=h())&&(n.iconTemplate=p.first),_(p=h())&&(n.closeIconTemplate=p.first),_(p=h())&&(n.templates=p)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",b],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",b],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[R([Wi]),G,z],ngContentSelectors:As,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,n){i&1&&(me(),u(0,Ws,10,15,"div",1)),i&2&&K(n.visible()?0:-1)},dependencies:[j,J,X,q,Le,De,U],encapsulation:2,data:{animation:[Fe("messageAnimation",[ue(":enter",[ce({opacity:0,transform:"translateY(-25%)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var ze=class t{constructor(o){this.http=o}getAsics(){return this.http.get(`${Re.apiEndpoint}/asics`)}getSummary(o){return this.http.get(`${Re.apiEndpoint}/asics/${o}/summary`)}addAsic(o){return this.http.post(`${Re.apiEndpoint}/asics`,o)}updateAsic(o,e){return e.password||delete e.password,this.http.patch(`${Re.apiEndpoint}/asics/${o}`,e)}deleteAsic(o){return this.http.delete(`${Re.apiEndpoint}/asics/${o}`)}static \u0275fac=function(e){return new(e||t)(Bt(Xt))};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})};var Dt=t=>({control:t});function Xs(t,o){t&1&&M(0)}function el(t,o){t&1&&M(0)}function tl(t,o){t&1&&M(0)}function il(t,o){if(t&1&&x(0,"p-message",12),t&2){let e=s().$implicit,i=s();l("text",e(i.errorMessageKey))}}function nl(t,o){if(t&1&&(d(0,"small",16),C(1),c()),t&2){let e=s(3).$implicit;r(),S(e("ASICS.DIALOG.MODIFY.VALIDATION.REQUIRED"))}}function ol(t,o){if(t&1&&(d(0,"small",16),C(1),c()),t&2){let e=s(3).$implicit;r(),S(e("ASICS.DIALOG.MODIFY.VALIDATION.INVALID"))}}function al(t,o){if(t&1&&u(0,nl,2,1,"small",16)(1,ol,2,1,"small",16),t&2){let e=s().control;K(e!=null&&e.hasError("required")?0:-1),r(),K((e==null?null:e.getError("validatePattern"))===!1?1:-1)}}function sl(t,o){if(t&1&&u(0,al,2,2),t&2){let e=o.control;K(e!=null&&e.invalid&&(e!=null&&e.dirty)?0:-1)}}function ll(t,o){if(t&1){let e=w();d(0,"div",2)(1,"div")(2,"p-floatlabel",3),x(3,"input",4),d(4,"label",5),C(5),c()(),u(6,Xs,1,0,"ng-container",6),c(),d(7,"div")(8,"p-floatlabel",7)(9,"p-auto-complete",8),y("completeMethod",function(n){m(e);let a=s();return g(a.suggestAddress(n))}),c(),d(10,"label",9),C(11),c()(),u(12,el,1,0,"ng-container",6),c(),d(13,"div")(14,"p-floatlabel",7),x(15,"p-password",10),d(16,"label",11),C(17),c()(),u(18,tl,1,0,"ng-container",6),c(),u(19,il,1,1,"p-message",12),d(20,"div",13)(21,"p-button",14),y("onClick",function(){m(e);let n=s();return g(n.closeDialog())}),c(),d(22,"p-button",15),y("onClick",function(){m(e);let n=s();return g(n.isEditMode?n.editAsic():n.addAsic())}),c()(),u(23,sl,1,1,"ng-template",null,0,V),c()}if(t&2){let e=o.$implicit,i=Q(24),n=s();l("formGroup",n.form),r(3),l("pKeyFilter",n.ipAddressRegExp)("pValidateOnly",!0),r(2),S(e("ASICS.DIALOG.MODIFY.FIELD.IP")),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",O(21,Dt,n.ipControl)),r(3),l("suggestions",n.addressSuggestions)("showEmptyMessage",!1),r(2),S(e("ASICS.DIALOG.MODIFY.FIELD.ADDRESS")),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",O(23,Dt,n.addressControl)),r(3),l("toggleMask",!0)("feedback",!1),r(2),S(n.isEditMode?e("ASICS.DIALOG.MODIFY.FIELD.PASSWORD"):e("ASICS.DIALOG.MODIFY.FIELD.PASSWORD_REQUIRED")),r(),l("ngTemplateOutlet",i)("ngTemplateOutletContext",O(25,Dt,n.passwordControl)),r(),K(n.errorMessageKey?19:-1),r(2),l("label",e("BUTTON.CANCEL")),r(),l("label",n.isEditMode?e("BUTTON.EDIT"):e("BUTTON.ADD"))("disabled",n.form.invalid||!n.form.dirty)("loading",n.isProcessing())}}var _t=class t{constructor(o,e,i){this.ref=o;this.dialogService=e;this.asicsService=i}ipAddressRegExp=new RegExp(Ui);isEditMode;asicId;form;addressSuggestions=[];isProcessing=H(!1);errorMessageKey;addresses;get ipControl(){return this.form.get("ip")}get addressControl(){return this.form.get("address")}get passwordControl(){return this.form.get("password")}ngOnInit(){let o=this.dialogService.getInstance(this.ref).data;this.isEditMode=o.isEditMode??!1,this.addresses=o.addresses??[],this.asicId=o.asic?.id,this.form=this.initForm(o.asic)}initForm(o){return!this.isEditMode||!o?new Tt({ip:new xe("",{nonNullable:!0,validators:[at.required]}),address:new xe("",{nonNullable:!0}),password:new xe("",{nonNullable:!0,validators:[at.required]})}):new Tt({ip:new xe(o.ip,{nonNullable:!0,validators:[at.required]}),address:new xe(o.address,{nonNullable:!0}),password:new xe("",{nonNullable:!0})})}suggestAddress(o){this.addressSuggestions=this.addresses.filter(e=>e.includes(o.query))}closeDialog(o){this.ref.close(o)}addAsic(){this.form.invalid||(this.isProcessing.set(!0),this.clearErrorMessage(),this.asicsService.addAsic(this.form.value).pipe(Se(),Pe(()=>{this.isProcessing.set(!1)})).subscribe({next:o=>{this.closeDialog(o)},error:()=>{this.errorMessageKey="ASICS.TOAST.ADD"}}))}editAsic(){this.form.invalid||!this.asicId||(this.isProcessing.set(!0),this.clearErrorMessage(),this.asicsService.updateAsic(this.asicId,this.form.value).pipe(Se(),Pe(()=>{this.isProcessing.set(!1)})).subscribe({next:o=>{this.closeDialog(o)},error:()=>{this.errorMessageKey="ASICS.TOAST.EDIT"}}))}clearErrorMessage(){this.errorMessageKey=void 0}static \u0275fac=function(e){return new(e||t)(D(Ii),D(dt),D(ze))};static \u0275cmp=L({type:t,selectors:[["app-modify-asic-dialog"]],features:[R([Ae])],decls:1,vars:0,consts:[["validationError",""],["class","flex h-full flex-col gap-6",3,"formGroup",4,"transloco"],[1,"flex","h-full","flex-col","gap-6",3,"formGroup"],["variant","on",1,"mt-2"],["type","text","id","ip","autocomplete","none","aria-autocomplete","none","pInputText","","formControlName","ip",1,"w-full",3,"pKeyFilter","pValidateOnly"],["for","ip",1,"text-lg"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["variant","on"],["inputId","address","autocomplete","none","styleClass","w-full","dropdown","","completeOnFocus","","required","","formControlName","address",3,"completeMethod","suggestions","showEmptyMessage"],["for","address",1,"text-lg"],["inputId","password","autocomplete","none","styleClass","w-full","inputStyleClass","w-full","formControlName","password",3,"toggleMask","feedback"],["for","password",1,"text-lg"],["severity","error",3,"text"],[1,"mt-auto","flex","justify-end","gap-2"],["variant","outlined","severity","secondary","icon","pi pi-times",3,"onClick","label"],["icon","pi pi-check",3,"onClick","label","disabled","loading"],[1,"text-red-500"]],template:function(e,i){e&1&&u(0,ll,25,27,"div",1)},dependencies:[Ni,Ve,At,kt,ut,st,$t,fi,ri,ci,ui,gi,di,mi,q,Yi],encapsulation:2,changeDetection:0})};var rl=({dt:t})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${t("tag.primary.background")};
    color: ${t("tag.primary.color")};
    font-size: ${t("tag.font.size")};
    font-weight: ${t("tag.font.weight")};
    padding: ${t("tag.padding")};
    border-radius: ${t("tag.border.radius")};
    gap: ${t("tag.gap")};
}

.p-tag-icon {
    font-size: ${t("tag.icon.size")};
    width: ${t("tag.icon.size")};
    height:${t("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${t("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${t("tag.success.background")};
    color: ${t("tag.success.color")};
}

.p-tag-info {
    background: ${t("tag.info.background")};
    color: ${t("tag.info.color")};
}

.p-tag-warn {
    background: ${t("tag.warn.background")};
    color: ${t("tag.warn.color")};
}

.p-tag-danger {
    background: ${t("tag.danger.background")};
    color: ${t("tag.danger.color")};
}

.p-tag-secondary {
    background: ${t("tag.secondary.background")};
    color: ${t("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${t("tag.contrast.background")};
    color: ${t("tag.contrast.color")};
}
`,pl={root:({props:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Xi=(()=>{class t extends W{name="tag";theme=rl;classes=pl;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var cl=["icon"],ul=["*"];function dl(t,o){if(t&1&&x(0,"span",4),t&2){let e=s(2);l("ngClass",e.icon)}}function ml(t,o){if(t&1&&(k(0),u(1,dl,1,1,"span",3),E()),t&2){let e=s();r(),l("ngIf",e.icon)}}function gl(t,o){}function fl(t,o){t&1&&u(0,gl,0,0,"ng-template")}function _l(t,o){if(t&1&&(d(0,"span",5),u(1,fl,1,0,null,6),c()),t&2){let e=s();r(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var en=(()=>{class t extends Y{get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=B(Xi);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}containerClass(){let e="p-tag p-component";return this.severity&&(e+=` p-tag-${this.severity}`),this.rounded&&(e+=" p-tag-rounded"),this.styleClass&&(e+=` ${this.styleClass}`),e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-tag"]],contentQueries:function(i,n,a){if(i&1&&(v(a,cl,4),v(a,ie,4)),i&2){let p;_(p=h())&&(n.iconTemplate=p.first),_(p=h())&&(n.templates=p)}},hostVars:4,hostBindings:function(i,n){i&2&&(_e(n.style),A(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",b]},features:[R([Xi]),G,z],ngContentSelectors:ul,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(me(),ge(0),u(1,ml,2,1,"ng-container",0)(2,_l,2,1,"span",1),d(3,"span",2),C(4),c()),i&2&&(r(),l("ngIf",!n.iconTemplate&&!n._iconTemplate),r(),l("ngIf",n.iconTemplate||n._iconTemplate),r(2),S(n.value))},dependencies:[j,J,X,q,U],encapsulation:2,changeDetection:0})}return t})();var hl=["menu"],yl=(t,o,e)=>({days:t,hours:o,minutes:e});function bl(t,o){if(t&1&&(d(0,"span",10),C(1),c()),t&2){let e=o.$implicit;r(),S(e.label)}}function vl(t,o){if(t&1){let e=w();d(0,"p-button",11),y("onClick",function(){m(e);let n=s(2);return g(n.openModifyDialog(!1))}),c(),d(1,"p-button",12),y("onClick",function(){m(e);let n=s(2);return g(n.openModifyDialog(!0))}),c(),d(2,"p-button",13),y("onClick",function(n){m(e);let a=s(2);return g(a.openDeleteAsicModal(n))}),c()}if(t&2){let e=s().$implicit,i=s();l("label",e("BUTTON.ADD"))("disabled",i.isLoading()),r(),l("label",e("BUTTON.EDIT"))("disabled",i.isToolbarDisabled()),r(),l("label",e("BUTTON.DELETE"))("disabled",i.isToolbarDisabled())}}function Cl(t,o){if(t&1&&(d(0,"tr")(1,"th",15),C(2),c(),d(3,"th",15),C(4),c(),d(5,"th",15),C(6),c(),d(7,"th",15),C(8),c(),d(9,"th",15),C(10),c(),d(11,"th",15),C(12),c(),d(13,"th",15),C(14),c()()),t&2){let e=s(2).$implicit;r(2),ae(" ",e("ASICS.TABLE.COLUMN.IP_ADDRESS")," "),r(2),S(e("ASICS.TABLE.COLUMN.STATE")),r(2),S(e("ASICS.TABLE.COLUMN.TIME")),r(2),ae(" ",e("ASICS.TABLE.COLUMN.AVERAGE_HASHRATE")," "),r(2),ae(" ",e("ASICS.TABLE.COLUMN.MAX_TEMP")," "),r(2),ae(" ",e("ASICS.TABLE.COLUMN.POWER_USAGE")," "),r(2),ae(" ",e("ASICS.TABLE.COLUMN.FAN_SPEED")," ")}}function xl(t,o){if(t&1&&(d(0,"tr")(1,"td")(2,"a",16),C(3),c()(),d(4,"td"),x(5,"p-tag",17),c(),d(6,"td"),C(7),c(),d(8,"td"),C(9),c(),d(10,"td"),C(11),c(),d(12,"td"),C(13),c(),d(14,"td"),C(15),c()()),t&2){let e=o.$implicit,i=s(2).$implicit;r(2),Nt("href","http://",e.ip,"",Me),r(),S(e.ip),r(2),l("value",i(e.state.value))("severity",e.state.severity),r(2),ae(" ",i("ASICS.TABLE.TIME_FORMAT",Ye(10,yl,e.time.days,e.time.hours,e.time.minutes))," "),r(2),S(e.avgHashRate),r(2),S(e.maxChipTemp),r(2),S(e.powerConsumption),r(2),S(e.avgFanSpeed)}}function wl(t,o){if(t&1&&(d(0,"div",9)(1,"p-table",14),u(2,Cl,15,7,"ng-template",null,3,V)(4,xl,16,14,"ng-template",null,4,V),c()()),t&2){s();let e=Zt(11);r(),l("value",e)}}function Il(t,o){if(t&1&&(d(0,"div",6)(1,"p-menu",7,0),se(3,"async"),u(4,bl,2,1,"ng-template",null,1,V),c(),d(6,"div",8)(7,"div",9)(8,"p-toolbar"),u(9,vl,3,6,"ng-template",null,2,V),c()(),Ut(11),se(12,"async"),u(13,wl,6,1,"div",9),c()()),t&2){let e=s();r(),l("model",Oe(3,2,e.menuItems$)),r(10);let i=Gt(Oe(12,4,e.asicSummary$));r(2),K(e.selectedItem()&&(i!=null&&i.length)?13:-1)}}var tn=class t{constructor(o,e,i,n,a){this.asicsService=o;this.dialogService=e;this.confirmationService=i;this.translocoService=n;this.messageService=a}isLoading=H(!1);isToolbarDisabled=ye(()=>this.isLoading()||!this.selectedItem());selectedItem=H(null);menuElement;menuItems$;asicSummary$=this.getAsicSummary();addresses=[];menuItemsSub$=new Lt([]);ngOnInit(){this.menuItems$=this.getMenuItems()}ngAfterViewInit(){setTimeout(()=>{this.menuElement&&(this.menuElement.onListBlur=()=>{})},100)}getMenuItems(){return this.isLoading.set(!0),this.menuItemsSub$.pipe(je(o=>o.length?Ft(o):this.asicsService.getAsics().pipe(ht(e=>this.buildMenu(e)))),Pt(o=>{this.addresses=o.map(e=>e.label),this.isLoading.set(!1)}),yt(o=>{throw this.messageService.add({severity:"error",summary:this.translocoService.translate("TOAST.SUMMARY.ERROR"),detail:this.translocoService.translate("ASICS.TOAST.SIDE_BAR")}),o}))}buildMenu(o){let e=[];return o.forEach(i=>{let n=e.find(p=>p.label===i.address),a=this.buildMenuItem(i);n?n.items.push(a):e.push({label:i.address,items:[a]})}),e}buildMenuItem(o){return{id:o.id,label:o.hostname,icon:Ne.SERVER,command:e=>this.onItemClick(e),asic:o}}getAsicSummary(){return _i(this.selectedItem).pipe(je(o=>Rt(Gi).pipe(zt(0),je(()=>o?this.asicsService.getSummary(o.id):Vt))),ht(o=>[{ip:o.ip,state:{value:`ASICS.TABLE.STATE.${o.status.state.toUpperCase()}`,severity:this.getStateSeverity(o.status.state)},time:{days:o.status.stateTimeDays,hours:o.status.stateTimeHours,minutes:o.status.stateTimeMinutes},avgHashRate:this.formatHashRate(o.avgHashRate,o.currentPreset),maxChipTemp:Qe(o.maxChipTemp,mt),powerConsumption:Qe(o.powerConsumption,mt),avgFanSpeed:Qe(o.avgFanSpeed,mt)}]),yt(o=>{throw this.messageService.add({severity:"error",summary:this.translocoService.translate("TOAST.SUMMARY.ERROR"),detail:this.translocoService.translate("ASICS.TOAST.SUMMARY")}),o}))}formatHashRate(o,e){let i=Qe(o,ki);return e?`${i} / ${e}`:i}onItemClick(o){this.selectedItem.set(o.item)}openModifyDialog(o){this.dialogService.open(_t,{header:this.translocoService.translate(`ASICS.DIALOG.MODIFY.HEADER.${o?"EDIT":"ADD"}`),duplicate:!1,closable:!0,draggable:!0,modal:!0,focusOnShow:!1,width:"25rem",height:"31rem",data:{isEditMode:o,addresses:this.addresses,asic:this.selectedItem()?.asic}}).onClose.pipe(Se()).subscribe(i=>{i&&(o&&this.selectedItem()?.asic&&(this.selectedItem().asic=i),this.menuItemsSub$.next([]))})}openDeleteAsicModal(o){this.confirmationService.confirm({target:o.target,message:this.translocoService.translate("ASICS.CONFIRM_DIALOG.DELETE_ASIC.MESSAGE"),header:this.translocoService.translate("CONFIRM_DIALOG.HEADER"),icon:Ne.EXCLAMATION_TRIANGLE,rejectButtonProps:{label:this.translocoService.translate("BUTTON.CANCEL"),severity:"secondary",icon:Ne.TIMES,outlined:!0},acceptButtonProps:{label:this.translocoService.translate("BUTTON.DELETE"),severity:"danger",icon:Ne.CHECK},accept:()=>{this.deleteAsic()}})}deleteAsic(){this.selectedItem()&&(this.isLoading.set(!0),this.asicsService.deleteAsic(this.selectedItem().id).pipe(Se(),Pe(()=>{this.isLoading.set(!1)})).subscribe({next:()=>{this.menuItemsSub$.next([]),this.selectedItem.set(null)},error:()=>{this.messageService.add({severity:"error",summary:this.translocoService.translate("TOAST.SUMMARY.ERROR"),detail:this.translocoService.translate("ASICS.TOAST.DELETE")})}}))}getStateSeverity(o){switch(o){case"mining":return"success";case"initializing":case"starting":case"auto-tuning":return"info";case"restarting":case"shutting-down":case"stopped":return"warn";case"failure":return"danger";default:return"danger"}}static \u0275fac=function(e){return new(e||t)(D(ze),D(dt),D(nt),D(hi),D(Ae))};static \u0275cmp=L({type:t,selectors:[["app-asics"]],viewQuery:function(e,i){if(e&1&&N(hl,5),e&2){let n;_(n=h())&&(i.menuElement=n.first)}},features:[R([nt,Ae])],decls:3,vars:0,consts:[["menu",""],["submenuheader",""],["start",""],["header",""],["body",""],["class","asics",4,"transloco"],[1,"asics"],["styleClass","w-72 h-full overflow-auto",3,"model"],[1,"flex","flex-1","flex-col"],[1,"card"],[1,"select-none","font-bold","text-primary"],["icon","pi pi-plus","severity","success","variant","outlined",1,"mr-2",3,"onClick","label","disabled"],["icon","pi pi-pencil","severity","warn","variant","outlined",1,"mr-2",3,"onClick","label","disabled"],["icon","pi pi-trash","severity","danger","variant","outlined",3,"onClick","label","disabled"],["showGridlines","","rowHover","",3,"value"],[1,"table__column"],["target","_blank",1,"font-bold","text-primary","hover:underline",3,"href"],[3,"value","severity"]],template:function(e,i){e&1&&(u(0,Il,14,7,"div",5),x(1,"p-confirm-dialog")(2,"p-toast"))},dependencies:[st,Ot,Jt,Ei,ut,Oi,Si,Ti,Mi,en],styles:[".asics[_ngcontent-%COMP%]{height:100%;display:flex;gap:2rem}.table__column[_ngcontent-%COMP%]{width:14.2857142857%}"],changeDetection:0})};export{tn as AsicsComponent};
