import{c as Jt,g as Xt,h as ei,j as yt}from"./chunk-NA7NMFHB.js";import{a as wi,b as Ii,c as Oi,d as Ne}from"./chunk-4UYXFUXM.js";import{c as fi,f as yi,g as vi,i as bi,j as It}from"./chunk-E6OG4P4J.js";import"./chunk-UUHORKRE.js";import{a as De}from"./chunk-WGMKLXED.js";import{a as Yt}from"./chunk-27JS27AT.js";import{a as Ei}from"./chunk-DEXBTZP3.js";import{a as lt,d as Ti,e as Si,f as Mi,g as ki}from"./chunk-UTZ57BHY.js";import{a as it,b as si,c as ri,d as nt,f as li,g as pi,h as wt,i as be,k as ci,l as ui,m as di,o as mi,q as gi,r as _i,s as ot,w as Ae}from"./chunk-VE2455E6.js";import{a as xi,b as ct}from"./chunk-S4EF3VLQ.js";import{c as Ci,d as Tt,e as pt}from"./chunk-CVI67RHO.js";import{$ as Ct,E as ni,H as tt,L as oi,N as Se,O as ve,P as vt,R as bt,U as Oe,Z as ee,da as Ke,ea as Me,fa as xt,ha as te,i as Xe,ia as Y,ja as le,k as ti,ka as ai,l as et,m as ii,ma as ie,na as ke,p as Be,q as ye,qa as at,r as j,ra as st,sa as rt,t as He,ta as hi,ua as Ee,xa as me}from"./chunk-EHUNDNSV.js";import{$ as de,$a as $,Ac as X,Bb as ge,Bc as fe,Ca as Bt,Cb as A,Db as B,Dc as Gt,E as Lt,G as _t,Ga as je,Hb as d,Ib as c,Jb as x,Jc as Zt,Kb as k,Lb as E,Mb as O,N as ze,Nb as w,O as Ce,Ob as y,Pb as s,Qb as we,Rb as Ie,Sb as Ht,Sc as G,Tb as b,Ub as H,Uc as Je,V as Ft,Vb as f,Vc as Z,W as qe,Wa as Pe,Wb as h,Wc as he,Xa as xe,Xb as K,Xc as N,Yb as C,Yc as Wt,Z as Rt,Zb as S,_a as l,_b as ae,_c as W,aa as Q,ac as Kt,ad as re,bc as Nt,cc as Qt,dc as qt,ec as Ut,fa as zt,fb as z,fc as jt,ga as q,gc as R,gd as $e,hc as _e,hd as pe,ic as M,jb as L,jc as J,jd as ce,kc as We,lb as ht,ld as ue,m as $t,mb as Ge,nb as P,o as Dt,oa as Pt,pa as m,pb as U,q as Vt,qa as g,qb as u,qc as se,ra as Ue,rc as Te,sa as F,sc as Ye,tc as D,v as gt,xb as _,ya as T,yb as r,za as ft,zb as Ze,zc as v}from"./chunk-5LJJ5W7J.js";var en=({dt:t})=>`
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
`,tn={root:({props:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t})=>["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Ai=(()=>{class t extends ee{name="menu";theme=en;classes=tn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var nn=["pMenuItemContent",""],$i=t=>({"p-disabled":t}),ut=t=>({$implicit:t}),on=()=>({exact:!1});function an(t,o){t&1&&O(0)}function sn(t,o){if(t&1&&(d(0,"a",6),u(1,an,1,0,"ng-container",7),c()),t&2){let e=s(2),i=K(4);r("target",e.item.target)("ngClass",M(9,$i,e.item.disabled)),_("title",e.item.title)("href",e.item.url||null,xe)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),l(),r("ngTemplateOutlet",i)("ngTemplateOutletContext",M(11,ut,e.item))}}function rn(t,o){t&1&&O(0)}function ln(t,o){if(t&1&&(d(0,"a",8),u(1,rn,1,0,"ng-container",7),c()),t&2){let e=s(2),i=K(4);r("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||_e(17,on))("target",e.item.target)("ngClass",M(18,$i,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),_("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),l(),r("ngTemplateOutlet",i)("ngTemplateOutletContext",M(20,ut,e.item))}}function pn(t,o){if(t&1&&(k(0),u(1,sn,2,13,"a",4)(2,ln,2,22,"a",5),E()),t&2){let e=s();l(),r("ngIf",!(e.item!=null&&e.item.routerLink)),l(),r("ngIf",e.item==null?null:e.item.routerLink)}}function cn(t,o){}function un(t,o){t&1&&u(0,cn,0,0,"ng-template")}function dn(t,o){if(t&1&&(k(0),u(1,un,1,0,null,7),E()),t&2){let e=s();l(),r("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",M(2,ut,e.item))}}function mn(t,o){if(t&1&&x(0,"span",12),t&2){let e=s(2);A(e.item.iconClass),r("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function gn(t,o){if(t&1&&(d(0,"span",13),C(1),c()),t&2){let e=s(2);l(),S(e.item.label)}}function _n(t,o){if(t&1&&(x(0,"span",14),se(1,"safeHtml")),t&2){let e=s(2);r("innerHTML",Te(1,1,e.item.label),Pe)}}function fn(t,o){if(t&1&&x(0,"p-badge",15),t&2){let e=s(2);r("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function hn(t,o){if(t&1&&u(0,mn,1,4,"span",9)(1,gn,2,1,"span",10)(2,_n,2,3,"ng-template",null,1,D)(4,fn,1,2,"p-badge",11),t&2){let e=K(3),i=s();r("ngIf",i.item.icon),l(),r("ngIf",i.item.escape!==!1)("ngIfElse",e),l(3),r("ngIf",i.item.badge)}}var yn=["start"],vn=["end"],bn=["header"],Cn=["item"],xn=["submenuheader"],wn=["list"],In=["container"],Tn=t=>({"p-menu p-component":!0,"p-menu-overlay":t}),Sn=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),On=t=>({value:"visible",params:t}),Mn=(t,o)=>({"p-hidden":t,flex:o}),kn=(t,o,e)=>({"p-hidden":t,"p-focus":o,"p-disabled":e}),En=(t,o)=>({"p-focus":t,"p-disabled":o});function An(t,o){t&1&&O(0)}function $n(t,o){if(t&1&&(d(0,"div",9),u(1,An,1,0,"ng-container",10),c()),t&2){let e,i=s(2);_("data-pc-section","start"),l(),r("ngTemplateOutlet",(e=i.startTemplate)!==null&&e!==void 0?e:i._startTemplate)}}function Dn(t,o){t&1&&x(0,"li",14)}function Vn(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(3).$implicit;l(),S(e.label)}}function Ln(t,o){if(t&1&&(x(0,"span",18),se(1,"safeHtml")),t&2){let e=s(3).$implicit;r("innerHTML",Te(1,1,e.label),Pe)}}function Fn(t,o){if(t&1&&(k(0),u(1,Vn,2,1,"span",17)(2,Ln,2,3,"ng-template",null,2,D),E()),t&2){let e=K(3),i=s(2).$implicit;l(),r("ngIf",i.escape!==!1)("ngIfElse",e)}}function Rn(t,o){t&1&&O(0)}function zn(t,o){if(t&1&&(d(0,"li",15),u(1,Fn,4,2,"ng-container",7)(2,Rn,1,0,"ng-container",16),c()),t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(3);r("ngClass",J(7,Mn,n.visible===!1,n.visible))("tooltipOptions",n.tooltipOptions),_("data-automationid",n.automationId)("id",p.menuitemId(n,p.id,a)),l(),r("ngIf",!p.submenuHeaderTemplate&&!p._submenuHeaderTemplate),l(),r("ngTemplateOutlet",(e=p.submenuHeaderTemplate)!==null&&e!==void 0?e:p._submenuHeaderTemplate)("ngTemplateOutletContext",M(10,ut,n))}}function Pn(t,o){t&1&&x(0,"li",14)}function Bn(t,o){if(t&1){let e=w();d(0,"li",20),y("onMenuItemClick",function(n){m(e);let a=s(),p=a.$implicit,I=a.index,oe=s().index,V=s(3);return g(V.itemClick(n,V.menuitemId(p,V.id,oe,I)))}),c()}if(t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(),I=p.$implicit,oe=p.index,V=s(3);A(n.styleClass),r("pMenuItemContent",n)("itemTemplate",(e=V.itemTemplate)!==null&&e!==void 0?e:V._itemTemplate)("ngClass",We(13,kn,n.visible===!1||I.visible===!1,V.focusedOptionId()&&V.menuitemId(n,V.id,oe,a)===V.focusedOptionId(),V.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",V.label(n.label))("data-p-focused",V.isItemFocused(V.menuitemId(n,V.id,oe,a)))("data-p-disabled",V.disabled(n.disabled))("aria-disabled",V.disabled(n.disabled))("id",V.menuitemId(n,V.id,oe,a))}}function Hn(t,o){if(t&1&&u(0,Pn,1,0,"li",12)(1,Bn,1,17,"li",19),t&2){let e=o.$implicit,i=s().$implicit;r("ngIf",e.separator&&(e.visible!==!1||i.visible!==!1)),l(),r("ngIf",!e.separator&&(e.visible!==!1||i.visible!==!1))}}function Kn(t,o){if(t&1&&u(0,Dn,1,0,"li",12)(1,zn,3,12,"li",13)(2,Hn,2,2,"ng-template",11),t&2){let e=o.$implicit;r("ngIf",e.separator&&e.visible!==!1),l(),r("ngIf",!e.separator),l(),r("ngForOf",e.items)}}function Nn(t,o){if(t&1&&u(0,Kn,3,3,"ng-template",11),t&2){let e=s(2);r("ngForOf",e.model)}}function Qn(t,o){t&1&&x(0,"li",14)}function qn(t,o){if(t&1){let e=w();d(0,"li",20),y("onMenuItemClick",function(n){m(e);let a=s(),p=a.$implicit,I=a.index,oe=s(3);return g(oe.itemClick(n,oe.menuitemId(p,oe.id,I)))}),c()}if(t&2){let e,i=s(),n=i.$implicit,a=i.index,p=s(3);A(n.styleClass),r("pMenuItemContent",n)("itemTemplate",(e=p.itemTemplate)!==null&&e!==void 0?e:p._itemTemplate)("ngClass",J(13,En,p.focusedOptionId()&&p.menuitemId(n,p.id,a)===p.focusedOptionId(),p.disabled(n.disabled)))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions),_("data-pc-section","menuitem")("aria-label",p.label(n.label))("data-p-focused",p.isItemFocused(p.menuitemId(n,p.id,a)))("data-p-disabled",p.disabled(n.disabled))("aria-disabled",p.disabled(n.disabled))("id",p.menuitemId(n,p.id,a))}}function Un(t,o){if(t&1&&u(0,Qn,1,0,"li",12)(1,qn,1,16,"li",19),t&2){let e=o.$implicit;r("ngIf",e.separator&&e.visible!==!1),l(),r("ngIf",!e.separator&&e.visible!==!1)}}function jn(t,o){if(t&1&&u(0,Un,2,2,"ng-template",11),t&2){let e=s(2);r("ngForOf",e.model)}}function Gn(t,o){t&1&&O(0)}function Zn(t,o){if(t&1&&(d(0,"div",21),u(1,Gn,1,0,"ng-container",10),c()),t&2){let e,i=s(2);_("data-pc-section","end"),l(),r("ngTemplateOutlet",(e=i.endTemplate)!==null&&e!==void 0?e:i._endTemplate)}}function Wn(t,o){if(t&1){let e=w();d(0,"div",4,0),y("click",function(n){m(e);let a=s();return g(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){m(e);let a=s();return g(a.onOverlayAnimationStart(n))})("@overlayAnimation.done",function(n){m(e);let a=s();return g(a.onOverlayAnimationEnd(n))}),u(2,$n,2,2,"div",5),d(3,"ul",6,1),y("focus",function(n){m(e);let a=s();return g(a.onListFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onListBlur(n))})("keydown",function(n){m(e);let a=s();return g(a.onListKeyDown(n))}),u(5,Nn,1,1,null,7)(6,jn,1,1,null,7),c(),u(7,Zn,2,2,"div",8),c()}if(t&2){let e,i,n=s();A(n.styleClass),r("ngClass",M(18,Tn,n.popup))("ngStyle",n.style)("@overlayAnimation",M(23,On,J(20,Sn,n.showTransitionOptions,n.hideTransitionOptions)))("@.disabled",n.popup!==!0),_("data-pc-name","menu")("id",n.id),l(2),r("ngIf",(e=n.startTemplate)!==null&&e!==void 0?e:n._startTemplate),l(),_("id",n.id+"_list")("tabindex",n.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",n.activedescendant())("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy),l(2),r("ngIf",n.hasSubMenu()),l(),r("ngIf",!n.hasSubMenu()),l(),r("ngIf",(i=n.endTemplate)!==null&&i!==void 0?i:n._endTemplate)}}var Di=(()=>{class t{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!re(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||t)($(je,16),$(Jt,16))};static \u0275pipe=Ge({name:"safeHtml",type:t,pure:!0})}return t})(),Yn=(()=>{class t{item;itemTemplate;onMenuItemClick=new T;menu;constructor(e){this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}static \u0275fac=function(i){return new(i||t)($(de(()=>St)))};static \u0275cmp=L({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:nn,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(i,n){if(i&1){let a=w();d(0,"div",2),y("click",function(I){return m(a),g(n.onItemClick(I,n.item))}),u(1,pn,3,2,"ng-container",3)(2,dn,2,4,"ng-container",3)(3,hn,5,4,"ng-template",null,0,D),c()}i&2&&(_("data-pc-section","content"),l(),r("ngIf",!n.itemTemplate),l(),r("ngIf",n.itemTemplate))},dependencies:[W,G,Z,N,he,yt,Xt,ei,ke,It,Tt,Ci,Y,Di],encapsulation:2})}return t})(),St=(()=>{class t extends ie{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new T;onHide=new T;onBlur=new T;onFocus=new T;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=fe(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=z(-1);selectedOptionIndex=z(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=q(Ai);constructor(e){super(),this.overlayService=e,this.id=this.id||Oe("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),j(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&me.clear(e.element);break}}alignOverlay(){this.relativeAlign?et(this.container,this.target):Xe(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ii(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&me.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!tt()&&this.hide()}menuitemId(e,i,n,a){return e?.id??`${i}_${n}${a!==void 0?"_"+a:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(j(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)j(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(Be(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=ye(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),n=i&&ye(i,'a[data-pc-section="action"]');this.popup&&j(this.target),n?n.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let n=[...Be(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===e);return n>-1?n+1:0}findPrevOptionIndex(e){let n=[...Be(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(a=>a.id===e);return n>-1?n-1:0}changeFocusedOptionIndex(e){let i=Be(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(i.length>0){let n=e>=i.length?i.length-1:e<0?0:e;n>-1&&this.focusedOptionIndex.set(i[n].getAttribute("id"))}}itemClick(e,i){let{originalEvent:n,item:a}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),a.disabled){n.preventDefault();return}!a.url&&!a.routerLink&&n.preventDefault(),a.command&&a.command({originalEvent:n,item:a}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&re(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let n=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(i.target),a=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&n&&a&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&n&&a&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&re(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&re(this.platformId)&&(this.scrollHandler=new at(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&me.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}static \u0275fac=function(i){return new(i||t)($(Me))};static \u0275cmp=L({type:t,selectors:[["p-menu"]],contentQueries:function(i,n,a){if(i&1&&(b(a,yn,4),b(a,vn,4),b(a,bn,4),b(a,Cn,4),b(a,xn,4),b(a,te,4)),i&2){let p;f(p=h())&&(n.startTemplate=p.first),f(p=h())&&(n.endTemplate=p.first),f(p=h())&&(n.headerTemplate=p.first),f(p=h())&&(n.itemTemplate=p.first),f(p=h())&&(n.submenuHeaderTemplate=p.first),f(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(H(wn,5),H(In,5)),i&2){let a;f(a=h())&&(n.listViewChild=a.first),f(a=h())&&(n.containerViewChild=a.first)}},inputs:{model:"model",popup:[2,"popup","popup",v],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",X],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",X]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[R([Ai]),U,P],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(i,n){i&1&&u(0,Wn,8,25,"div",3),i&2&&r("ngIf",!n.popup||n.visible)},dependencies:[W,G,Je,Z,N,he,yt,Yn,It,bi,Tt,Y,Di],encapsulation:2,data:{animation:[$e("overlayAnimation",[ue(":enter",[ce({opacity:0,transform:"scaleY(0.8)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({opacity:0}))])])]},changeDetection:0})}return t})();var Vi=(()=>{class t extends rt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["EyeIcon"]],features:[P],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(i,n){i&1&&(Ue(),d(0,"svg",0),x(1,"path",1),c()),i&2&&(A(n.getClassNames()),_("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Li=(()=>{class t extends rt{pathId;ngOnInit(){this.pathId="url(#"+Oe()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["EyeSlashIcon"]],features:[P],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Ue(),d(0,"svg",0)(1,"g"),x(2,"path",1),c(),d(3,"defs")(4,"clipPath",2),x(5,"rect",3),c()()()),i&2&&(A(n.getClassNames()),_("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),_("clip-path",n.pathId),l(3),r("id",n.pathId))},encapsulation:2})}return t})();var Jn=({dt:t})=>`
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
`,Xn={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Fi=(()=>{class t extends ee{name="chip";theme=Jn;classes=Xn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var eo=["removeicon"],to=["*"];function io(t,o){if(t&1){let e=w();d(0,"img",4),y("error",function(n){m(e);let a=s();return g(a.imageError(n))}),c()}if(t&2){let e=s();r("src",e.image,xe)("alt",e.alt)}}function no(t,o){if(t&1&&x(0,"span",6),t&2){let e=s(2);A(e.icon),r("ngClass","p-chip-icon"),_("data-pc-section","icon")}}function oo(t,o){if(t&1&&u(0,no,1,4,"span",5),t&2){let e=s();r("ngIf",e.icon)}}function ao(t,o){if(t&1&&(d(0,"div",7),C(1),c()),t&2){let e=s();_("data-pc-section","label"),l(),S(e.label)}}function so(t,o){if(t&1){let e=w();d(0,"span",11),y("click",function(n){m(e);let a=s(3);return g(a.close(n))})("keydown",function(n){m(e);let a=s(3);return g(a.onKeydown(n))}),c()}if(t&2){let e=s(3);A(e.removeIcon),r("ngClass","p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function ro(t,o){if(t&1){let e=w();d(0,"TimesCircleIcon",12),y("click",function(n){m(e);let a=s(3);return g(a.close(n))})("keydown",function(n){m(e);let a=s(3);return g(a.onKeydown(n))}),c()}if(t&2){let e=s(3);A("p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function lo(t,o){if(t&1&&(k(0),u(1,so,1,5,"span",9)(2,ro,1,4,"TimesCircleIcon",10),E()),t&2){let e=s(2);l(),r("ngIf",e.removeIcon),l(),r("ngIf",!e.removeIcon)}}function po(t,o){}function co(t,o){t&1&&u(0,po,0,0,"ng-template")}function uo(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(n){m(e);let a=s(2);return g(a.close(n))})("keydown",function(n){m(e);let a=s(2);return g(a.onKeydown(n))}),u(1,co,1,0,null,14),c()}if(t&2){let e=s(2);_("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),l(),r("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function mo(t,o){if(t&1&&(k(0),u(1,lo,3,2,"ng-container",3)(2,uo,2,3,"span",8),E()),t&2){let e=s();l(),r("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),l(),r("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ri=(()=>{class t extends ie{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new T;onImageError=new T;visible=!0;get removeAriaLabel(){return this.config.getTranslation(le.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=q(Fi);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-chip"]],contentQueries:function(i,n,a){if(i&1&&(b(a,eo,4),b(a,te,4)),i&2){let p;f(p=h())&&(n.removeIconTemplate=p.first),f(p=h())&&(n.templates=p)}},hostVars:9,hostBindings:function(i,n){i&2&&(_("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),ge(n.style),A(n.containerClass()),Ze("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",v],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[R([Fi]),U,P,Pt],ngContentSelectors:to,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(we(),Ie(0),u(1,io,1,2,"img",1)(2,oo,1,1,"ng-template",null,0,D)(4,ao,2,2,"div",2)(5,mo,3,2,"ng-container",3)),i&2){let a=K(3);l(),r("ngIf",n.image)("ngIfElse",a),l(3),r("ngIf",n.label),l(),r("ngIf",n.removable)}},dependencies:[W,G,Z,N,lt,Y],encapsulation:2,changeDetection:0})}return t})();var go=({dt:t})=>`
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
}`,_o={root:{position:"relative"}},fo={root:({instance:t})=>({"p-autocomplete p-component p-inputwrapper":!0,"p-disabled":t.disabled,"p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused&&!t.disabled||t.autofocus||t.overlayVisible,"p-autocomplete-open":t.overlayVisible,"p-autocomplete-clearable":t.showClear&&!t.disabled,"p-autocomplete-fluid":t.hasFluid}),pcInput:"p-autocomplete-input",inputMultiple:({instance:t})=>({"p-autocomplete-input-multiple":!0,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle()==="filled"}),chipItem:({instance:t,i:o})=>["p-autocomplete-chip-item",{"p-focus":t.focusedMultipleOptionIndex===o}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:t,option:o,i:e,getItemOptions:i})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":t.isSelected(o),"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(o)}),emptyMessage:"p-autocomplete-empty-message"},zi=(()=>{class t extends ee{name="autocomplete";theme=go;classes=fo;inlineStyles=_o;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var ho=["item"],yo=["empty"],vo=["header"],bo=["footer"],Co=["selecteditem"],xo=["group"],wo=["loader"],Io=["removeicon"],To=["loadingicon"],So=["clearicon"],Oo=["dropdownicon"],Mo=["container"],ko=["focusInput"],Eo=["multiIn"],Ao=["multiContainer"],$o=["ddBtn"],Do=["items"],Vo=["scroller"],Lo=["overlay"],Fo=t=>({"p-autocomplete-chip-item":!0,"p-focus":t}),Pi=t=>({$implicit:t}),Ro=()=>({class:"p-autocomplete-chip-icon"}),dt=t=>({height:t}),Bi=(t,o)=>({$implicit:t,options:o}),zo=t=>({options:t}),Po=()=>({}),Bo=(t,o)=>({$implicit:t,index:o});function Ho(t,o){if(t&1){let e=w();d(0,"input",19,3),y("input",function(n){m(e);let a=s();return g(a.onInput(n))})("keydown",function(n){m(e);let a=s();return g(a.onKeyDown(n))})("change",function(n){m(e);let a=s();return g(a.onInputChange(n))})("focus",function(n){m(e);let a=s();return g(a.onInputFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onInputBlur(n))})("paste",function(n){m(e);let a=s();return g(a.onInputPaste(n))})("keyup",function(n){m(e);let a=s();return g(a.onInputKeyUp(n))}),c()}if(t&2){let e,i=s();A(i.inputStyleClass),r("pAutoFocus",i.autofocus)("ngClass","p-autocomplete-input")("ngStyle",i.inputStyle)("type",i.type)("variant",i.variant)("autocomplete",i.autocomplete)("required",i.required)("name",i.name)("pSize",i.size)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled)("fluid",i.hasFluid),_("value",i.inputValue())("id",i.inputId)("placeholder",i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function Ko(t,o){if(t&1){let e=w();d(0,"TimesIcon",22),y("click",function(){m(e);let n=s(2);return g(n.clear())}),c()}t&2&&(r("styleClass","p-autocomplete-clear-icon"),_("aria-hidden",!0))}function No(t,o){}function Qo(t,o){t&1&&u(0,No,0,0,"ng-template")}function qo(t,o){if(t&1){let e=w();d(0,"span",23),y("click",function(){m(e);let n=s(2);return g(n.clear())}),u(1,Qo,1,0,null,24),c()}if(t&2){let e=s(2);_("aria-hidden",!0),l(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Uo(t,o){if(t&1&&(k(0),u(1,Ko,1,2,"TimesIcon",20)(2,qo,2,2,"span",21),E()),t&2){let e=s();l(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),l(),r("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function jo(t,o){t&1&&O(0)}function Go(t,o){if(t&1){let e=w();d(0,"span",33),y("click",function(n){m(e);let a=s(3).index,p=s(2);return g(p.readonly?"":p.removeOption(n,a))}),x(1,"TimesCircleIcon",34),c()}t&2&&(l(),r("styleClass","p-autocomplete-chip-icon"),_("aria-hidden",!0))}function Zo(t,o){t&1&&(k(0),u(1,Go,2,2,"ng-template",null,6,D),E())}function Wo(t,o){if(t&1&&(d(0,"p-chip",32),u(1,Zo,3,0,"ng-container",15),c()),t&2){let e=s().$implicit,i=s(2);r("label",i.getOptionLabel(e))("removable",!0),l(),r("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate)}}function Yo(t,o){}function Jo(t,o){t&1&&u(0,Yo,0,0,"ng-template")}function Xo(t,o){if(t&1&&(d(0,"span"),u(1,Jo,1,0,null,30),c()),t&2){let e=s(3);_("aria-hidden",!0),l(),r("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)("ngTemplateOutletContext",_e(3,Ro))}}function ea(t,o){if(t&1&&(d(0,"li",29,5),u(2,jo,1,0,"ng-container",30)(3,Wo,2,3,"p-chip",31)(4,Xo,2,4,"span",15),c()),t&2){let e=o.$implicit,i=o.index,n=s(2);r("ngClass",M(10,Fo,n.focusedMultipleOptionIndex()===i)),_("id",n.id+"_multiple_option_"+i)("aria-label",n.getOptionLabel(e))("aria-setsize",n.modelValue().length)("aria-posinset",i+1)("aria-selected",!0),l(2),r("ngTemplateOutlet",n.selectedItemTemplate||n._selectedItemTemplate)("ngTemplateOutletContext",M(12,Pi,e)),l(),r("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate),l(),r("ngIf",n.removeIconTemplate||n._removeIconTemplate)}}function ta(t,o){if(t&1){let e=w();d(0,"ul",25,4),y("focus",function(n){m(e);let a=s();return g(a.onMultipleContainerFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onMultipleContainerBlur(n))})("keydown",function(n){m(e);let a=s();return g(a.onMultipleContainerKeyDown(n))}),u(2,ea,5,14,"li",26),d(3,"li",27)(4,"input",28,3),y("input",function(n){m(e);let a=s();return g(a.onInput(n))})("keydown",function(n){m(e);let a=s();return g(a.onKeyDown(n))})("change",function(n){m(e);let a=s();return g(a.onInputChange(n))})("focus",function(n){m(e);let a=s();return g(a.onInputFocus(n))})("blur",function(n){m(e);let a=s();return g(a.onInputBlur(n))})("paste",function(n){m(e);let a=s();return g(a.onInputPaste(n))})("keyup",function(n){m(e);let a=s();return g(a.onInputKeyUp(n))}),c()()()}if(t&2){let e,i=s();r("ngClass",i.inputMultipleClass)("tabindex",-1),_("aria-orientation","horizontal")("aria-activedescendant",i.focused?i.focusedMultipleOptionId:void 0),l(2),r("ngForOf",i.modelValue()),l(2),A(i.inputStyleClass),r("pAutoFocus",i.autofocus)("ngClass",i.inputClass)("ngStyle",i.inputStyle)("autocomplete",i.autocomplete)("required",i.required)("tabindex",i.disabled?-1:i.tabindex)("readonly",i.readonly)("disabled",i.disabled),_("type",i.type)("id",i.inputId)("name",i.name)("placeholder",i.filled?null:i.placeholder)("maxlength",i.maxlength)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-required",i.required)("aria-expanded",(e=i.overlayVisible)!==null&&e!==void 0?e:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)}}function ia(t,o){t&1&&x(0,"SpinnerIcon",37),t&2&&(r("styleClass","p-autocomplete-loader")("spin",!0),_("aria-hidden",!0))}function na(t,o){}function oa(t,o){t&1&&u(0,na,0,0,"ng-template")}function aa(t,o){if(t&1&&(d(0,"span",38),u(1,oa,1,0,null,24),c()),t&2){let e=s(2);_("aria-hidden",!0),l(),r("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function sa(t,o){if(t&1&&(k(0),u(1,ia,1,3,"SpinnerIcon",35)(2,aa,2,2,"span",36),E()),t&2){let e=s();l(),r("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),l(),r("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ra(t,o){if(t&1&&x(0,"span",41),t&2){let e=s(2);r("ngClass",e.dropdownIcon),_("aria-hidden",!0)}}function la(t,o){t&1&&x(0,"ChevronDownIcon")}function pa(t,o){}function ca(t,o){t&1&&u(0,pa,0,0,"ng-template")}function ua(t,o){if(t&1&&(k(0),u(1,la,1,0,"ChevronDownIcon",15)(2,ca,1,0,null,24),E()),t&2){let e=s(2);l(),r("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),l(),r("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function da(t,o){if(t&1){let e=w();d(0,"button",39,7),y("click",function(n){m(e);let a=s();return g(a.handleDropdownClick(n))}),u(2,ra,1,2,"span",40)(3,ua,3,2,"ng-container",15),c()}if(t&2){let e=s();r("disabled",e.disabled),_("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),l(2),r("ngIf",e.dropdownIcon),l(),r("ngIf",!e.dropdownIcon)}}function ma(t,o){t&1&&O(0)}function ga(t,o){t&1&&O(0)}function _a(t,o){if(t&1&&u(0,ga,1,0,"ng-container",30),t&2){let e=o.$implicit,i=o.options;s(2);let n=K(6);r("ngTemplateOutlet",n)("ngTemplateOutletContext",J(2,Bi,e,i))}}function fa(t,o){t&1&&O(0)}function ha(t,o){if(t&1&&u(0,fa,1,0,"ng-container",30),t&2){let e=o.options,i=s(4);r("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",M(2,zo,e))}}function ya(t,o){t&1&&(k(0),u(1,ha,1,4,"ng-template",null,10,D),E())}function va(t,o){if(t&1){let e=w();d(0,"p-scroller",46,9),y("onLazyLoad",function(n){m(e);let a=s(2);return g(a.onLazyLoad.emit(n))}),u(2,_a,1,5,"ng-template",null,2,D)(4,ya,3,0,"ng-container",15),c()}if(t&2){let e=s(2);ge(M(8,dt,e.scrollHeight)),r("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),l(4),r("ngIf",e.loaderTemplate||e._loaderTemplate)}}function ba(t,o){t&1&&O(0)}function Ca(t,o){if(t&1&&(k(0),u(1,ba,1,0,"ng-container",30),E()),t&2){s();let e=K(6),i=s();l(),r("ngTemplateOutlet",e)("ngTemplateOutletContext",J(3,Bi,i.visibleOptions(),_e(2,Po)))}}function xa(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(2).$implicit,i=s(3);l(),S(i.getOptionGroupLabel(e.optionGroup))}}function wa(t,o){t&1&&O(0)}function Ia(t,o){if(t&1&&(k(0),d(1,"li",50),u(2,xa,2,1,"span",15)(3,wa,1,0,"ng-container",30),c(),E()),t&2){let e=s(),i=e.$implicit,n=e.index,a=s().options,p=s(2);l(),r("ngStyle",M(5,dt,a.itemSize+"px")),_("id",p.id+"_"+p.getOptionIndex(n,a)),l(),r("ngIf",!p.groupTemplate),l(),r("ngTemplateOutlet",p.groupTemplate)("ngTemplateOutletContext",M(7,Pi,i.optionGroup))}}function Ta(t,o){if(t&1&&(d(0,"span"),C(1),c()),t&2){let e=s(2).$implicit,i=s(3);l(),S(i.getOptionLabel(e))}}function Sa(t,o){t&1&&O(0)}function Oa(t,o){if(t&1){let e=w();k(0),d(1,"li",51),y("click",function(n){m(e);let a=s().$implicit,p=s(3);return g(p.onOptionSelect(n,a))})("mouseenter",function(n){m(e);let a=s().index,p=s().options,I=s(2);return g(I.onOptionMouseEnter(n,I.getOptionIndex(a,p)))}),u(2,Ta,2,1,"span",15)(3,Sa,1,0,"ng-container",30),c(),E()}if(t&2){let e=s(),i=e.$implicit,n=e.index,a=s().options,p=s(2);l(),r("ngStyle",M(12,dt,a.itemSize+"px"))("ngClass",p.optionClass(i,n,a)),_("id",p.id+"_"+p.getOptionIndex(n,a))("aria-label",p.getOptionLabel(i))("aria-selected",p.isSelected(i))("aria-disabled",p.isOptionDisabled(i))("data-p-focused",p.focusedOptionIndex()===p.getOptionIndex(n,a))("aria-setsize",p.ariaSetSize)("aria-posinset",p.getAriaPosInset(p.getOptionIndex(n,a))),l(),r("ngIf",!p.itemTemplate&&!p._itemTemplate),l(),r("ngTemplateOutlet",p.itemTemplate||p._itemTemplate)("ngTemplateOutletContext",J(14,Bo,i,a.getOptions?a.getOptions(n):n))}}function Ma(t,o){if(t&1&&u(0,Ia,4,9,"ng-container",15)(1,Oa,4,17,"ng-container",15),t&2){let e=o.$implicit,i=s(3);r("ngIf",i.isOptionGroup(e)),l(),r("ngIf",!i.isOptionGroup(e))}}function ka(t,o){if(t&1&&(k(0),C(1),E()),t&2){let e=s(4);l(),ae(" ",e.searchResultMessageText," ")}}function Ea(t,o){t&1&&O(0,null,12)}function Aa(t,o){if(t&1&&(d(0,"li",52),u(1,ka,2,1,"ng-container",53)(2,Ea,2,0,"ng-container",24),c()),t&2){let e=s().options,i=s(2);r("ngStyle",M(4,dt,e.itemSize+"px")),l(),r("ngIf",!i.emptyTemplate&&!i._emptyTemplate)("ngIfElse",i.empty),l(),r("ngTemplateOutlet",i.emptyTemplate||i._emptyTemplate)}}function $a(t,o){if(t&1&&(d(0,"ul",47,11),u(2,Ma,2,2,"ng-template",48)(3,Aa,3,6,"li",49),c()),t&2){let e=o.$implicit,i=o.options,n=s(2);ge(i.contentStyle),r("ngClass",i.contentStyleClass),_("id",n.id+"_list")("aria-label",n.listLabel),l(2),r("ngForOf",e),l(),r("ngIf",!e||e&&e.length===0&&n.showEmptyMessage)}}function Da(t,o){t&1&&O(0)}function Va(t,o){if(t&1&&(d(0,"div",42),u(1,ma,1,0,"ng-container",24),d(2,"div",43),u(3,va,5,10,"p-scroller",44)(4,Ca,2,6,"ng-container",15),c(),u(5,$a,4,7,"ng-template",null,8,D)(7,Da,1,0,"ng-container",24),c(),d(8,"span",45),C(9),c()),t&2){let e=s();A(e.panelStyleClass),r("ngClass",e.panelClass)("ngStyle",e.panelStyle),l(),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),Ze("max-height",e.virtualScroll?"auto":e.scrollHeight),l(),r("ngIf",e.virtualScroll),l(),r("ngIf",!e.virtualScroll),l(3),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),l(2),ae(" ",e.selectedMessageText," ")}}var La={provide:it,useExisting:de(()=>Ot),multi:!0},Ot=(()=>{class t extends ie{overlayService;zone;minLength=1;delay=300;style;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;disabled;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;maxlength;name;required;size;appendTo;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;field;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;variant="outlined";fluid=!1;completeMethod=new T;onSelect=new T;onUnselect=new T;onFocus=new T;onBlur=new T;onDropdownClick=new T;onClear=new T;onKeyUp=new T;onShow=new T;onHide=new T;onLazyLoad=new T;containerEL;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;_itemSize;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;primeng=q(ai);value;_suggestions=z(null);onModelChange=()=>{};onModelTouched=()=>{};timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;_filled;get filled(){return this._filled}set filled(e){this._filled=e}loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;modelValue=z(null);focusedMultipleOptionIndex=z(-1);focusedOptionIndex=z(-1);_componentStyle=q(zi);visibleOptions=fe(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=fe(()=>{let e=this.modelValue(),i=this.optionValueSelected?(this.suggestions||[]).find(n=>ve(n,this.optionValue)===e):e;if(Se(e))if(typeof e=="object"||this.optionValueSelected){let n=this.getOptionLabel(i);return n??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get rootClass(){return this._componentStyle.classes.root({instance:this})}get inputMultipleClass(){return this._componentStyle.classes.inputMultiple({instance:this})}get panelClass(){return{"p-autocomplete-overlay p-component":!0,"p-input-filled":this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-ripple-disabled":this.config.ripple()===!1}}get inputClass(){return{"p-autocomplete-input":!this.multiple,"p-autocomplete-dd-input":this.dropdown}}get searchResultMessageText(){return Se(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(le.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}optionClass(e,i,n){return{"p-autocomplete-option":!0,"p-autocomplete-option-selected":this.isSelected(e),"p-focus":this.focusedOptionIndex()===this.getOptionIndex(i,n),"p-disabled":this.isOptionDisabled(e)}}constructor(e,i){super(),this.overlayService=e,this.zone=i,Gt(()=>{this.filled=Se(this.modelValue())})}ngOnInit(){super.ngOnInit(),this.id=this.id||Oe("pn_id_"),this.cd.detectChanges()}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((i,n,a)=>{i.push({optionGroup:n,group:!0,index:a});let p=this.getOptionGroupChildren(n);return p&&p.forEach(I=>i.push(I)),i},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return bt(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?bt(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?ve(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.find(i=>vt(i,this.getOptionValue(e),this.equalityKey())):!1:vt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}isOptionMatched(e,i){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===i.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.dataKey}onContainerClick(e){this.disabled||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&j(this.inputEL.nativeElement)}handleDropdownClick(e){let i;this.overlayVisible?this.hide(!0):(j(this.inputEL.nativeElement),i=this.inputEL.nativeElement.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,i,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:i})}onInput(e){if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength!==null&&(i=i.split("").slice(0,this.maxlength).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=this.minLength?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let i=!1;if(this.visibleOptions()){let n=this.visibleOptions().find(a=>this.isOptionMatched(a,this.inputEL.nativeElement.value||""));n!==void 0&&(i=!0,!this.isSelected(n)&&this.onOptionSelect(e,n))}i||(this.inputEL.nativeElement.value="",!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.disabled)return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.disabled||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:break}}onArrowDownKey(e){if(!this.overlayVisible)return;let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),e.preventDefault(),e.stopPropagation()}}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}onArrowLeftKey(e){let i=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(oi(i.value)&&this.hasSelectedOption()?(j(this.multiContainerEL.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(0,e.shiftKey?n:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:i}=e,n=i.value.length;i.setSelectionRange(e.shiftKey?0:n,n),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.typeahead||this.multiple&&(this.updateModel([...this.modelValue()||[],e.target.value]),this.inputEL.nativeElement.value=""),this.overlayVisible?(this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide()):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if(Se(this.modelValue())&&!this.inputEL.nativeElement.value){let i=this.modelValue()[this.modelValue().length-1],n=this.modelValue().slice(0,-1);this.updateModel(n),this.onUnselect.emit({originalEvent:e,value:i})}e.stopPropagation()}!this.multiple&&this.showClear&&this.findSelectedOptionIndex()!=-1&&this.clear()}onArrowLeftKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(i)}onArrowRightKeyOnMultiple(e){let i=this.focusedMultipleOptionIndex();i++,this.focusedMultipleOptionIndex.set(i),i>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),j(this.inputEL.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,i,n=!0){let a=this.getOptionValue(i);this.multiple?(this.inputEL.nativeElement.value="",this.isSelected(i)||this.updateModel([...this.modelValue()||[],a])):this.updateModel(a),this.onSelect.emit({originalEvent:e,value:i}),n&&this.hide(!0)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}search(e,i,n){i!=null&&(n==="input"&&i.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:i})))}removeOption(e,i){e.stopPropagation();let n=this.modelValue()[i],a=this.modelValue().filter((p,I)=>I!==i).map(p=>this.getOptionValue(p));this.updateModel(a),this.onUnselect.emit({originalEvent:e,value:n}),j(this.inputEL.nativeElement)}updateModel(e){this.value=e,this.modelValue.set(e),this.onModelChange(e),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=ye(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[i],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),e&&j(this.inputEL.nativeElement),e&&j(this.inputEL.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let i=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&j(this.inputEL.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{i()},0)}clear(){this.updateModel(null),this.inputEL.nativeElement.value="",this.onClear.emit()}writeValue(e){this.value=e,this.modelValue.set(e),this.updateInputValue(),this.cd.markForCheck()}hasSelectedOption(){return Se(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}getOptionLabel(e){return this.field||this.optionLabel?ve(e,this.field||this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ve(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?ve(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?ve(e,this.optionGroupChildren):e.items}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=ye(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=ye(this.itemsWrapper,".p-autocomplete-item.p-highlight");i&&i.scrollIntoView({block:"nearest",inline:"center"})}}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)($(Me),$(ft))};static \u0275cmp=L({type:t,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(i,n,a){if(i&1&&(b(a,ho,5),b(a,yo,5),b(a,vo,5),b(a,bo,5),b(a,Co,5),b(a,xo,5),b(a,wo,5),b(a,Io,5),b(a,To,5),b(a,So,5),b(a,Oo,5),b(a,te,4)),i&2){let p;f(p=h())&&(n.itemTemplate=p.first),f(p=h())&&(n.emptyTemplate=p.first),f(p=h())&&(n.headerTemplate=p.first),f(p=h())&&(n.footerTemplate=p.first),f(p=h())&&(n.selectedItemTemplate=p.first),f(p=h())&&(n.groupTemplate=p.first),f(p=h())&&(n.loaderTemplate=p.first),f(p=h())&&(n.removeIconTemplate=p.first),f(p=h())&&(n.loadingIconTemplate=p.first),f(p=h())&&(n.clearIconTemplate=p.first),f(p=h())&&(n.dropdownIconTemplate=p.first),f(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(H(Mo,5),H(ko,5),H(Eo,5),H(Ao,5),H($o,5),H(Do,5),H(Vo,5),H(Lo,5)),i&2){let a;f(a=h())&&(n.containerEL=a.first),f(a=h())&&(n.inputEL=a.first),f(a=h())&&(n.multiInputEl=a.first),f(a=h())&&(n.multiContainerEL=a.first),f(a=h())&&(n.dropdownButton=a.first),f(a=h())&&(n.itemsViewChild=a.first),f(a=h())&&(n.scroller=a.first),f(a=h())&&(n.overlayViewChild=a.first)}},inputs:{minLength:[2,"minLength","minLength",X],delay:[2,"delay","delay",X],style:"style",panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",v],disabled:[2,"disabled","disabled",v],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",X],virtualScrollOptions:"virtualScrollOptions",maxlength:[2,"maxlength","maxlength",e=>X(e,null)],name:"name",required:[2,"required","required",v],size:"size",appendTo:"appendTo",autoHighlight:[2,"autoHighlight","autoHighlight",v],forceSelection:[2,"forceSelection","forceSelection",v],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",v],baseZIndex:[2,"baseZIndex","baseZIndex",X],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",v],group:[2,"group","group",v],completeOnFocus:[2,"completeOnFocus","completeOnFocus",v],showClear:[2,"showClear","showClear",v],field:"field",dropdown:[2,"dropdown","dropdown",v],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",v],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",v],tabindex:[2,"tabindex","tabindex",X],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",v],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",itemSize:"itemSize",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",v],selectOnFocus:[2,"selectOnFocus","selectOnFocus",v],searchLocale:[2,"searchLocale","searchLocale",v],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",v],typeahead:[2,"typeahead","typeahead",v],variant:"variant",fluid:[2,"fluid","fluid",v]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[R([La,zi]),U,P],decls:11,vars:15,consts:[["container",""],["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],[2,"position","relative",3,"click","ngClass","ngStyle"],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","ngClass","ngStyle","class","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"ngClass","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","class","p-autocomplete-dropdown","pRipple","",3,"disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","type","variant","autocomplete","required","name","pSize","tabindex","readonly","disabled","fluid"],[3,"styleClass","click",4,"ngIf"],["class","p-autocomplete-clear-icon",3,"click",4,"ngIf"],[3,"click","styleClass"],[1,"p-autocomplete-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","ngClass","tabindex"],["role","option",3,"ngClass",4,"ngFor","ngForOf"],["role","option",1,"p-autocomplete-input-chip"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","ngClass","ngStyle","autocomplete","required","tabindex","readonly","disabled"],["role","option",3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["styleClass","p-autocomplete-chip",3,"label","removable",4,"ngIf"],["styleClass","p-autocomplete-chip",3,"label","removable"],[1,"p-autocomplete-chip-icon",3,"click"],[3,"styleClass"],[3,"styleClass","spin",4,"ngIf"],["class","p-autocomplete-loader pi-spin ",4,"ngIf"],[3,"styleClass","spin"],[1,"p-autocomplete-loader","pi-spin"],["type","button","pRipple","",1,"p-autocomplete-dropdown",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle"],[1,"p-autocomplete-list-container"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox",1,"p-autocomplete-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-autocomplete-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-autocomplete-option-group",3,"ngStyle"],["pRipple","","role","option",3,"click","mouseenter","ngStyle","ngClass"],["role","option",1,"p-autocomplete-empty-message",3,"ngStyle"],[4,"ngIf","ngIfElse"]],template:function(i,n){if(i&1){let a=w();d(0,"div",13,0),y("click",function(I){return m(a),g(n.onContainerClick(I))}),u(2,Ho,2,25,"input",14)(3,Uo,3,2,"ng-container",15)(4,ta,6,26,"ul",16)(5,sa,3,2,"ng-container",15)(6,da,4,5,"button",17),d(7,"p-overlay",18,1),Qt("visibleChange",function(I){return m(a),Nt(n.overlayVisible,I)||(n.overlayVisible=I),g(I)}),y("onAnimationStart",function(I){return m(a),g(n.onOverlayAnimationStart(I))})("onHide",function(){return m(a),g(n.hide())}),u(9,Va,10,11,"ng-template",null,2,D),c()()}i&2&&(A(n.styleClass),r("ngClass",n.rootClass)("ngStyle",n.style),l(2),r("ngIf",!n.multiple),l(),r("ngIf",n.filled&&!n.disabled&&n.showClear&&!n.loading),l(),r("ngIf",n.multiple),l(),r("ngIf",n.loading),l(),r("ngIf",n.dropdown),l(),Kt("visible",n.overlayVisible),r("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions))},dependencies:[W,G,Je,Z,N,he,yi,Ae,ke,vi,st,lt,hi,Ee,fi,Ri,Y],encapsulation:2,changeDetection:0})}return t})();var Fa={provide:ri,useExisting:de(()=>kt),multi:!0},Hi={pint:/^[\d]*$/,int:/^[-]?[\d]*$/,pnum:/^[\d\.]*$/,money:/^[\d\.\s,]*$/,num:/^[-]?[\d\.]*$/,hex:/^[0-9a-f]*$/i,email:/^[a-z0-9_\.\-@]*$/i,alpha:/^[a-z_]*$/i,alphanum:/^[a-z0-9_]*$/i},Mt={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46},Ki={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},kt=(()=>{class t{document;platformId;el;pValidateOnly;set pattern(e){this._pattern=e,e instanceof RegExp?this.regex=e:e in Hi?this.regex=Hi[e]:this.regex=/./}get pattern(){return this._pattern}ngModelChange=new T;regex=/./;_pattern;isAndroid;lastValue;constructor(e,i,n){this.document=e,this.platformId=i,this.el=n,re(this.platformId)?this.isAndroid=ni():this.isAndroid=!1}isNavKeyPress(e){let i=e.keyCode;return i=He().safari&&Ki[i]||i,i>=33&&i<=40||i==Mt.RETURN||i==Mt.TAB||i==Mt.ESC}isSpecialKey(e){let i=e.keyCode||e.charCode;return i==9||i==13||i==27||i==16||i==17||i>=18&&i<=20||He().opera&&!e.shiftKey&&(i==8||i>=33&&i<=35||i>=36&&i<=39||i>=44&&i<=45)}getKey(e){let i=e.keyCode||e.charCode;return He().safari&&Ki[i]||i}getCharCode(e){return e.charCode||e.keyCode||e.which}findDelta(e,i){let n="";for(let a=0;a<e.length;a++)e.substr(0,a)+e.substr(a+e.length-i.length)===i&&(n=e.substr(a,e.length-i.length));return n}isValidChar(e){return this.regex.test(e)}isValidString(e){for(let i=0;i<e.length;i++)if(!this.isValidChar(e.substr(i,1)))return!1;return!0}onInput(e){if(this.isAndroid&&!this.pValidateOnly){let i=this.el.nativeElement.value,n=this.lastValue||"",a=this.findDelta(i,n),p=this.findDelta(n,i);a.length>1||!a&&!p?this.isValidString(i)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)):p||this.isValidChar(a)||(this.el.nativeElement.value=n,this.ngModelChange.emit(n)),i=this.el.nativeElement.value,this.isValidString(i)&&(this.lastValue=i)}}onKeyPress(e){if(this.isAndroid||this.pValidateOnly)return;let i=He(),n=this.getKey(e);if(i.mozilla&&(e.ctrlKey||e.altKey))return;if(n==17||n==18||n==13)return;let a=this.getCharCode(e),p=String.fromCharCode(a),I=!0;if(!i.mozilla&&(this.isSpecialKey(e)||!p))return;let V=(this.el.nativeElement.value||"")+p;I=this.regex.test(V),I||e.preventDefault()}onPaste(e){let i=e.clipboardData||this.document.defaultView.clipboardData.getData("text");if(i){let n=/\{[0-9]+\}/,a=i.getData("text");if(n.test(this.regex.toString())){if(!this.regex.test(a)){e.preventDefault();return}}else for(let p of a.toString())if(!this.regex.test(p)){e.preventDefault();return}}}validate(e){if(this.pValidateOnly){let i=this.el.nativeElement.value;if(i&&!this.regex.test(i))return{validatePattern:!1}}}static \u0275fac=function(i){return new(i||t)($(Zt),$(je),$(Bt))};static \u0275dir=ht({type:t,selectors:[["","pKeyFilter",""]],hostBindings:function(i,n){i&1&&y("input",function(p){return n.onInput(p)})("keypress",function(p){return n.onKeyPress(p)})("paste",function(p){return n.onPaste(p)})},inputs:{pValidateOnly:[2,"pValidateOnly","pValidateOnly",v],pattern:[0,"pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[R([Fa]),U]})}return t})();var Ni="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",Ra=`(${Ni}[.]){3}${Ni}`,Qi=`^${Ra}$`,qi=5e3;var za=({dt:t})=>`
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
`,Pa={root:({instance:t})=>({position:t.appendTo==="self"?"relative":void 0})},Ba={root:({instance:t})=>({"p-password p-component p-inputwrapper":!0,"p-inputwrapper-filled":t.filled(),"p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}),pcInput:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text"},Ui=(()=>{class t extends ee{name="password";theme=za;classes=Ba;inlineStyles=Pa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var Ha=["content"],Ka=["footer"],Na=["header"],Qa=["clearicon"],qa=["headericon"],Ua=["showicon"],ja=["input"],Ga=()=>({class:"p-password-toggle-mask-icon p-password-mask-icon"}),Za=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Wa=t=>({value:"visible",params:t}),Ya=t=>({width:t});function Ja(t,o){if(t&1){let e=w();d(0,"TimesIcon",8),y("click",function(){m(e);let n=s(2);return g(n.clear())}),c()}t&2&&_("data-pc-section","clearIcon")}function Xa(t,o){}function es(t,o){t&1&&u(0,Xa,0,0,"ng-template")}function ts(t,o){if(t&1){let e=w();k(0),u(1,Ja,1,1,"TimesIcon",7),d(2,"span",8),y("click",function(){m(e);let n=s();return g(n.clear())}),u(3,es,1,0,null,9),c(),E()}if(t&2){let e=s();l(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),l(),_("data-pc-section","clearIcon"),l(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function is(t,o){if(t&1){let e=w();d(0,"EyeSlashIcon",12),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),c()}t&2&&_("data-pc-section","hideIcon")}function ns(t,o){}function os(t,o){t&1&&u(0,ns,0,0,"ng-template")}function as(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),u(1,os,1,0,null,14),c()}if(t&2){let e=s(3);l(),r("ngTemplateOutlet",e.hideIconTemplate||e._hideIconTemplate)("ngTemplateOutletContext",_e(2,Ga))}}function ss(t,o){if(t&1&&(k(0),u(1,is,1,1,"EyeSlashIcon",10)(2,as,2,3,"span",11),E()),t&2){let e=s(2);l(),r("ngIf",!e.hideIconTemplate&&!e._hideIconTemplate),l(),r("ngIf",e.hideIconTemplate||e._hideIconTemplate)}}function rs(t,o){if(t&1){let e=w();d(0,"EyeIcon",12),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),c()}t&2&&_("data-pc-section","showIcon")}function ls(t,o){}function ps(t,o){t&1&&u(0,ls,0,0,"ng-template")}function cs(t,o){if(t&1){let e=w();d(0,"span",13),y("click",function(){m(e);let n=s(3);return g(n.onMaskToggle())}),u(1,ps,1,0,null,9),c()}if(t&2){let e=s(3);l(),r("ngTemplateOutlet",e.showIconTemplate||e._showIconTemplate)}}function us(t,o){if(t&1&&(k(0),u(1,rs,1,1,"EyeIcon",10)(2,cs,2,1,"span",11),E()),t&2){let e=s(2);l(),r("ngIf",!e.showIconTemplate&&!e._showIconTemplate),l(),r("ngIf",e.showIconTemplate||e._showIconTemplate)}}function ds(t,o){if(t&1&&(k(0),u(1,ss,3,2,"ng-container",5)(2,us,3,2,"ng-container",5),E()),t&2){let e=s();l(),r("ngIf",e.unmasked),l(),r("ngIf",!e.unmasked)}}function ms(t,o){t&1&&O(0)}function gs(t,o){t&1&&O(0)}function _s(t,o){if(t&1&&(k(0),u(1,gs,1,0,"ng-container",9),E()),t&2){let e=s(2);l(),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}function fs(t,o){if(t&1&&(d(0,"div",17)(1,"div",18),x(2,"div",3),se(3,"mapper"),c(),d(4,"div",19),C(5),c()()),t&2){let e=s(2);l(),_("data-pc-section","meter"),l(),r("ngClass",Ye(3,6,e.meter,e.strengthClass))("ngStyle",M(9,Ya,e.meter?e.meter.width:"")),_("data-pc-section","meterLabel"),l(2),_("data-pc-section","info"),l(),S(e.infoText)}}function hs(t,o){t&1&&O(0)}function ys(t,o){if(t&1){let e=w();d(0,"div",15,1),y("click",function(n){m(e);let a=s();return g(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){m(e);let a=s();return g(a.onAnimationStart(n))})("@overlayAnimation.done",function(n){m(e);let a=s();return g(a.onAnimationEnd(n))}),u(2,ms,1,0,"ng-container",9)(3,_s,2,1,"ng-container",16)(4,fs,6,11,"ng-template",null,2,D)(6,hs,1,0,"ng-container",9),c()}if(t&2){let e=K(5),i=s();r("@overlayAnimation",M(9,Wa,J(6,Za,i.showTransitionOptions,i.hideTransitionOptions))),_("data-pc-section","panel"),l(2),r("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),l(),r("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),l(3),r("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var vs=(()=>{class t{transform(e,i,...n){return i(e,...n)}static \u0275fac=function(i){return new(i||t)};static \u0275pipe=Ge({name:"mapper",type:t,pure:!0})}return t})(),bs={provide:it,useExisting:de(()=>Et),multi:!0},Et=(()=>{class t extends ie{ariaLabel;fluid;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;size;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;variant="outlined";onFocus=new T;onBlur=new T;onClear=new T;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;_componentStyle=q(Ui);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}overlayService=q(Me);ngOnInit(){super.ngOnInit(),this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"hideicon":this._hideIconTemplate=e.template;break;case"showicon":this._showIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,me.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(e){switch(e.toState){case"void":me.clear(e.element);break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=ti(this.input.nativeElement)+"px",Xe(this.overlay,this.input.nativeElement)):et(this.overlay,this.input.nativeElement)}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback){let i=e.target.value;if(this.updateUI(i),e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(e){let i=null,n=null;switch(this.testStrength(e)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let i=0;return this.strongCheckRegExp.test(e)?i=3:this.mediumCheckRegExp.test(e)?i=2:e.length&&(i=1),i}writeValue(e){e===void 0?this.value=null:this.value=e,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindScrollListener(){re(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new at(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(re(this.platformId)&&!this.resizeListener){let e=this.document.defaultView;this.resizeListener=this.renderer.listen(e,"resize",()=>{this.overlayVisible&&!tt()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(e){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":e}}get rootClass(){return this._componentStyle.classes.root({instance:this})}inputFieldClass(e){return{"p-password-input":!0,"p-disabled":e}}strengthClass(e){return`p-password-meter-label p-password-meter${e?.strength?`-${e.strength}`:""}`}filled(){return this.value!=null&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(le.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(le.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(le.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(le.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&(this.appendTo==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(e){return e?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(me.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-password"]],contentQueries:function(i,n,a){if(i&1&&(b(a,Ha,4),b(a,Ka,4),b(a,Na,4),b(a,Qa,4),b(a,qa,4),b(a,Ua,4),b(a,te,4)),i&2){let p;f(p=h())&&(n.contentTemplate=p.first),f(p=h())&&(n.footerTemplate=p.first),f(p=h())&&(n.headerTemplate=p.first),f(p=h())&&(n.clearIconTemplate=p.first),f(p=h())&&(n.hideIconTemplate=p.first),f(p=h())&&(n.showIconTemplate=p.first),f(p=h())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&H(ja,5),i&2){let a;f(a=h())&&(n.input=a.first)}},inputs:{ariaLabel:"ariaLabel",fluid:[2,"fluid","fluid",v],ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:[2,"disabled","disabled",v],promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",X],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",v],appendTo:"appendTo",toggleMask:[2,"toggleMask","toggleMask",v],size:"size",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",v],autofocus:[2,"autofocus","autofocus",v],variant:"variant"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[R([bs,Ui]),U,P],decls:8,vars:33,consts:[["input",""],["overlay",""],["content",""],[3,"ngClass","ngStyle"],["pInputText","",3,"input","focus","blur","keyup","disabled","pSize","ngClass","ngStyle","value","variant","pAutoFocus"],[4,"ngIf"],["class","p-password-overlay p-component",3,"click",4,"ngIf"],["class","p-password-clear-icon",3,"click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-password-toggle-mask-icon p-password-mask-icon",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[1,"p-password-toggle-mask-icon","p-password-mask-icon",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-password-overlay","p-component",3,"click"],[4,"ngIf","ngIfElse"],[1,"p-password-content"],[1,"p-password-meter"],[1,"p-password-meter-text"]],template:function(i,n){if(i&1){let a=w();d(0,"div",3)(1,"input",4,0),se(3,"mapper"),se(4,"mapper"),y("input",function(I){return m(a),g(n.onInput(I))})("focus",function(I){return m(a),g(n.onInputFocus(I))})("blur",function(I){return m(a),g(n.onInputBlur(I))})("keyup",function(I){return m(a),g(n.onKeyUp(I))}),c(),u(5,ts,4,3,"ng-container",5)(6,ds,3,2,"ng-container",5)(7,ys,7,11,"div",6),c()}i&2&&(A(n.styleClass),r("ngClass",n.rootClass)("ngStyle",n.style),_("data-pc-name","password")("data-pc-section","root"),l(),A(n.inputStyleClass),r("disabled",n.disabled)("pSize",n.size)("ngClass",Ye(3,27,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value)("variant",n.variant)("pAutoFocus",n.autofocus),_("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",Ye(4,30,n.unmasked,n.inputType))("placeholder",n.placeholder)("autocomplete",n.autocomplete)("maxlength",n.maxLength)("data-pc-section","input"),l(4),r("ngIf",n.showClear&&n.value!=null),l(),r("ngIf",n.toggleMask),l(),r("ngIf",n.overlayVisible))},dependencies:[W,G,Z,N,he,Ae,st,Ee,Li,Vi,vs,Y],encapsulation:2,data:{animation:[$e("overlayAnimation",[ue(":enter",[ce({opacity:0,transform:"scaleY(0.8)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({opacity:0}))])])]},changeDetection:0})}return t})();var Cs=({dt:t})=>`
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
}`,xs={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ji=(()=>{class t extends ee{name="message";theme=Cs;classes=xs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var ws=["container"],Is=["icon"],Ts=["closeicon"],Ss=["*"],Os=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Ms=t=>({value:"visible()",params:t}),ks=t=>({closeCallback:t});function Es(t,o){t&1&&O(0)}function As(t,o){if(t&1&&u(0,Es,1,0,"ng-container",7),t&2){let e=s(2);r("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function $s(t,o){if(t&1&&x(0,"i",3),t&2){let e=s(2);r("ngClass",e.icon)}}function Ds(t,o){if(t&1&&x(0,"span",9),t&2){let e=s(3);r("ngClass",e.cx("text"))("innerHTML",e.text,Pe)}}function Vs(t,o){if(t&1&&(d(0,"div"),u(1,Ds,1,2,"span",8),c()),t&2){let e=s(2);l(),r("ngIf",!e.escape)}}function Ls(t,o){if(t&1&&(d(0,"span",5),C(1),c()),t&2){let e=s(3);r("ngClass",e.cx("text")),l(),S(e.text)}}function Fs(t,o){if(t&1&&u(0,Ls,2,2,"span",10),t&2){let e=s(2);r("ngIf",e.escape&&e.text)}}function Rs(t,o){t&1&&O(0)}function zs(t,o){if(t&1&&u(0,Rs,1,0,"ng-container",11),t&2){let e=s(2);r("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",M(2,ks,e.close.bind(e)))}}function Ps(t,o){if(t&1&&(d(0,"span",5),Ie(1),c()),t&2){let e=s(2);r("ngClass",e.cx("text"))}}function Bs(t,o){if(t&1&&x(0,"i",13),t&2){let e=s(3);r("ngClass",e.closeIcon)}}function Hs(t,o){t&1&&O(0)}function Ks(t,o){if(t&1&&u(0,Hs,1,0,"ng-container",7),t&2){let e=s(3);r("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Ns(t,o){t&1&&x(0,"TimesIcon",14)}function Qs(t,o){if(t&1){let e=w();d(0,"button",12),y("click",function(n){m(e);let a=s(2);return g(a.close(n))}),u(1,Bs,1,1,"i",13)(2,Ks,1,1,"ng-container")(3,Ns,1,0,"TimesIcon",14),c()}if(t&2){let e=s(2);l(),B(e.closeIcon?1:-1),l(),B(e.closeIconTemplate||e._closeIconTemplate?2:-1),l(),B(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function qs(t,o){if(t&1&&(d(0,"div",1)(1,"div",2),u(2,As,1,1,"ng-container")(3,$s,1,1,"i",3)(4,Vs,2,1,"div",4)(5,Fs,1,1,"ng-template",null,0,D)(7,zs,1,4,"ng-container")(8,Ps,2,1,"span",5)(9,Qs,4,3,"button",6),c()()),t&2){let e=K(6),i=s();r("ngClass",i.containerClass)("@messageAnimation",M(13,Ms,J(10,Os,i.showTransitionOptions,i.hideTransitionOptions))),_("aria-live","polite")("role","alert"),l(2),B(i.iconTemplate||i._iconTemplate?2:-1),l(),B(i.icon?3:-1),l(),r("ngIf",!i.escape)("ngIfElse",e),l(3),B(i.containerTemplate||i._containerTemplate?7:8),l(2),B(i.closable?9:-1)}}var Gi=(()=>{class t extends ie{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new T;get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=z(!0);_componentStyle=q(ji);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-message"]],contentQueries:function(i,n,a){if(i&1&&(b(a,ws,4),b(a,Is,4),b(a,Ts,4),b(a,te,4)),i&2){let p;f(p=h())&&(n.containerTemplate=p.first),f(p=h())&&(n.iconTemplate=p.first),f(p=h())&&(n.closeIconTemplate=p.first),f(p=h())&&(n.templates=p)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",v],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",v],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[R([ji]),U,P],ngContentSelectors:Ss,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,n){i&1&&(we(),u(0,qs,10,15,"div",1)),i&2&&B(n.visible()?0:-1)},dependencies:[W,G,Z,N,Ee,ke,Y],encapsulation:2,data:{animation:[$e("messageAnimation",[ue(":enter",[ce({opacity:0,transform:"translateY(-25%)"}),pe("{{showTransitionParams}}")]),ue(":leave",[pe("{{hideTransitionParams}}",ce({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var Re=class t{constructor(o){this.http=o}getAsics(){return this.http.get(`${De.apiEndpoint}/asics`)}getSummary(o){return this.http.get(`${De.apiEndpoint}/asics/${o}/summary`)}addAsic(o){return this.http.post(`${De.apiEndpoint}/asics`,o)}updateAsic(o,e){return e.password||delete e.password,this.http.patch(`${De.apiEndpoint}/asics/${o}`,e)}deleteAsic(o){return this.http.delete(`${De.apiEndpoint}/asics/${o}`)}static \u0275fac=function(e){return new(e||t)(zt(Yt))};static \u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"})};var At=t=>({control:t});function Gs(t,o){t&1&&O(0)}function Zs(t,o){t&1&&O(0)}function Ws(t,o){t&1&&O(0)}function Ys(t,o){if(t&1&&x(0,"p-message",12),t&2){let e=s().$implicit,i=s();r("text",e(i.errorMessageKey))}}function Js(t,o){if(t&1&&(d(0,"small",16),C(1),c()),t&2){let e=s(3).$implicit;l(),S(e("ASICS.DIALOG.MODIFY.VALIDATION.REQUIRED"))}}function Xs(t,o){if(t&1&&(d(0,"small",16),C(1),c()),t&2){let e=s(3).$implicit;l(),S(e("ASICS.DIALOG.MODIFY.VALIDATION.INVALID"))}}function er(t,o){if(t&1&&u(0,Js,2,1,"small",16)(1,Xs,2,1,"small",16),t&2){let e=s().control;B(e!=null&&e.hasError("required")?0:-1),l(),B((e==null?null:e.getError("validatePattern"))===!1?1:-1)}}function tr(t,o){if(t&1&&u(0,er,2,2),t&2){let e=o.control;B(e!=null&&e.invalid&&(e!=null&&e.dirty)?0:-1)}}function ir(t,o){if(t&1){let e=w();d(0,"div",2)(1,"div")(2,"p-floatlabel",3),x(3,"input",4),d(4,"label",5),C(5),c()(),u(6,Gs,1,0,"ng-container",6),c(),d(7,"div")(8,"p-floatlabel",7)(9,"p-auto-complete",8),y("completeMethod",function(n){m(e);let a=s();return g(a.suggestAddress(n))}),c(),d(10,"label",9),C(11),c()(),u(12,Zs,1,0,"ng-container",6),c(),d(13,"div")(14,"p-floatlabel",7),x(15,"p-password",10),d(16,"label",11),C(17),c()(),u(18,Ws,1,0,"ng-container",6),c(),u(19,Ys,1,1,"p-message",12),d(20,"div",13)(21,"p-button",14),y("onClick",function(){m(e);let n=s();return g(n.closeDialog())}),c(),d(22,"p-button",15),y("onClick",function(){m(e);let n=s();return g(n.isEditMode?n.editAsic():n.addAsic())}),c()(),u(23,tr,1,1,"ng-template",null,0,D),c()}if(t&2){let e=o.$implicit,i=K(24),n=s();r("formGroup",n.form),l(3),r("pKeyFilter",n.ipAddressRegExp)("pValidateOnly",!0),l(2),S(e("ASICS.DIALOG.MODIFY.FIELD.IP")),l(),r("ngTemplateOutlet",i)("ngTemplateOutletContext",M(22,At,n.ipControl)),l(3),r("suggestions",n.addressSuggestions)("showEmptyMessage",!1),l(2),S(e("ASICS.DIALOG.MODIFY.FIELD.ADDRESS")),l(),r("ngTemplateOutlet",i)("ngTemplateOutletContext",M(24,At,n.addressControl)),l(3),r("toggleMask",!0)("feedback",!1),l(2),S(n.isEditMode?e("ASICS.DIALOG.MODIFY.FIELD.PASSWORD"):e("ASICS.DIALOG.MODIFY.FIELD.PASSWORD_REQUIRED")),l(),r("ngTemplateOutlet",i)("ngTemplateOutletContext",M(26,At,n.passwordControl)),l(),B(n.errorMessageKey?19:-1),l(2),r("label",e("BUTTON.CANCEL")),l(),r("label",n.isEditMode?e("ASICS.BUTTON.EDIT"):e("ASICS.BUTTON.ADD"))("icon",n.isEditMode?"pi pi-pencil":"pi pi-plus")("disabled",n.form.invalid||!n.form.dirty)("loading",n.isProcessing())}}var mt=class t{constructor(o,e,i){this.ref=o;this.dialogService=e;this.asicsService=i}ipAddressRegExp=new RegExp(Qi);isEditMode;asicId;form;addressSuggestions=[];isProcessing=z(!1);errorMessageKey;addresses;get ipControl(){return this.form.get("ip")}get addressControl(){return this.form.get("address")}get passwordControl(){return this.form.get("password")}ngOnInit(){let o=this.dialogService.getInstance(this.ref).data;this.isEditMode=o.isEditMode??!1,this.addresses=o.addresses??[],this.asicId=o.asic?.id,this.form=this.initForm(o.asic)}initForm(o){return!this.isEditMode||!o?new wt({ip:new be("",{nonNullable:!0,validators:[nt.required]}),address:new be("",{nonNullable:!0}),password:new be("",{nonNullable:!0,validators:[nt.required]})}):new wt({ip:new be(o.ip,{nonNullable:!0,validators:[nt.required]}),address:new be(o.address,{nonNullable:!0}),password:new be("",{nonNullable:!0})})}suggestAddress(o){this.addressSuggestions=this.addresses.filter(e=>e.includes(o.query))}closeDialog(o){this.ref.close(o)}addAsic(){this.form.invalid||(this.isProcessing.set(!0),this.clearErrorMessage(),this.asicsService.addAsic(this.form.value).pipe(Ce(),ze(()=>{this.isProcessing.set(!1)})).subscribe({next:o=>{this.closeDialog(o)},error:()=>{this.errorMessageKey="ASICS.TOAST.ADD_ERROR"}}))}editAsic(){this.form.invalid||!this.asicId||(this.isProcessing.set(!0),this.clearErrorMessage(),this.asicsService.updateAsic(this.asicId,this.form.value).pipe(Ce(),ze(()=>{this.isProcessing.set(!1)})).subscribe({next:o=>{this.closeDialog(o)},error:()=>{this.errorMessageKey="ASICS.TOAST.EDIT_ERROR"}}))}clearErrorMessage(){this.errorMessageKey=void 0}static \u0275fac=function(e){return new(e||t)($(xi),$(ct),$(Re))};static \u0275cmp=L({type:t,selectors:[["app-modify-asic-dialog"]],features:[R([Ke])],decls:1,vars:0,consts:[["validationError",""],["class","flex h-full flex-col gap-6",3,"formGroup",4,"transloco"],[1,"flex","h-full","flex-col","gap-6",3,"formGroup"],["variant","on",1,"mt-2"],["type","text","id","ip","autocomplete","none","aria-autocomplete","none","pInputText","","formControlName","ip",1,"w-full",3,"pKeyFilter","pValidateOnly"],["for","ip",1,"text-lg"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["variant","on"],["inputId","address","autocomplete","none","styleClass","w-full","dropdown","","completeOnFocus","","required","","formControlName","address",3,"completeMethod","suggestions","showEmptyMessage"],["for","address",1,"text-lg"],["inputId","password","autocomplete","none","styleClass","w-full","inputStyleClass","w-full","formControlName","password",3,"toggleMask","feedback"],["for","password",1,"text-lg"],["severity","error",3,"text"],[1,"mt-auto","flex","justify-end","gap-2"],["variant","outlined","severity","secondary","icon","pi pi-times",3,"onClick","label"],[3,"onClick","label","icon","disabled","loading"],[1,"text-red-500"]],template:function(e,i){e&1&&u(0,ir,25,28,"div",1)},dependencies:[Ei,Ae,kt,Ot,pt,ot,Et,mi,si,li,pi,di,ci,ui,N,Gi],encapsulation:2,changeDetection:0})};var nr=({dt:t})=>`
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
`,or={root:({props:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},Wi=(()=>{class t extends ee{name="tag";theme=nr;classes=or;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var ar=["icon"],sr=["*"];function rr(t,o){if(t&1&&x(0,"span",4),t&2){let e=s(2);r("ngClass",e.icon)}}function lr(t,o){if(t&1&&(k(0),u(1,rr,1,1,"span",3),E()),t&2){let e=s();l(),r("ngIf",e.icon)}}function pr(t,o){}function cr(t,o){t&1&&u(0,pr,0,0,"ng-template")}function ur(t,o){if(t&1&&(d(0,"span",5),u(1,cr,1,0,null,6),c()),t&2){let e=s();l(),r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var Yi=(()=>{class t extends ie{get style(){return this._style}set style(e){this._style=e,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=q(Wi);ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}containerClass(){let e="p-tag p-component";return this.severity&&(e+=` p-tag-${this.severity}`),this.rounded&&(e+=" p-tag-rounded"),this.styleClass&&(e+=` ${this.styleClass}`),e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-tag"]],contentQueries:function(i,n,a){if(i&1&&(b(a,ar,4),b(a,te,4)),i&2){let p;f(p=h())&&(n.iconTemplate=p.first),f(p=h())&&(n.templates=p)}},hostVars:4,hostBindings:function(i,n){i&2&&(ge(n.style),A(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",v]},features:[R([Wi]),U,P],ngContentSelectors:sr,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(we(),Ie(0),u(1,lr,2,1,"ng-container",0)(2,ur,2,1,"span",1),d(3,"span",2),C(4),c()),i&2&&(l(),r("ngIf",!n.iconTemplate&&!n._iconTemplate),l(),r("ngIf",n.iconTemplate||n._iconTemplate),l(2),S(n.value))},dependencies:[W,G,Z,N,Y],encapsulation:2,changeDetection:0})}return t})();var dr=["menu"],mr=(t,o,e)=>({days:t,hours:o,minutes:e});function gr(t,o){if(t&1&&(d(0,"span",10),C(1),c()),t&2){let e=o.$implicit;l(),S(e.label)}}function _r(t,o){if(t&1){let e=w();d(0,"p-button",11),y("onClick",function(){m(e);let n=s(2);return g(n.openModifyDialog(!1))}),c(),d(1,"p-button",12),y("onClick",function(){m(e);let n=s(2);return g(n.openModifyDialog(!0))}),c(),d(2,"p-button",13),y("onClick",function(n){m(e);let a=s(2);return g(a.openDeleteAsicModal(n))}),c()}if(t&2){let e=s().$implicit,i=s();r("label",e("ASICS.BUTTON.ADD"))("disabled",i.isLoading()),l(),r("label",e("ASICS.BUTTON.EDIT"))("disabled",i.isToolbarDisabled()),l(),r("label",e("ASICS.BUTTON.DELETE"))("disabled",i.isToolbarDisabled())}}function fr(t,o){if(t&1&&(d(0,"tr")(1,"th",15),C(2),c(),d(3,"th",15),C(4),c(),d(5,"th",15),C(6),c(),d(7,"th",15),C(8),c(),d(9,"th",15),C(10),c(),d(11,"th",15),C(12),c(),d(13,"th",15),C(14),c()()),t&2){let e=s(2).$implicit;l(2),ae(" ",e("ASICS.TABLE.COLUMN.IP_ADDRESS")," "),l(2),S(e("ASICS.TABLE.COLUMN.STATE")),l(2),S(e("ASICS.TABLE.COLUMN.TIME")),l(2),ae(" ",e("ASICS.TABLE.COLUMN.AVERAGE_HASHRATE")," "),l(2),ae(" ",e("ASICS.TABLE.COLUMN.MAX_TEMP")," "),l(2),ae(" ",e("ASICS.TABLE.COLUMN.POWER_USAGE")," "),l(2),ae(" ",e("ASICS.TABLE.COLUMN.FAN_SPEED")," ")}}function hr(t,o){if(t&1&&(d(0,"tr")(1,"td")(2,"a",16),C(3),c()(),d(4,"td"),x(5,"p-tag",17),c(),d(6,"td"),C(7),c(),d(8,"td"),C(9),c(),d(10,"td"),C(11),c(),d(12,"td"),C(13),c(),d(14,"td"),C(15),c()()),t&2){let e=o.$implicit,i=s(2).$implicit;l(2),Ht("href","http://",e.ip,"",xe),l(),S(e.ip),l(2),r("value",i(e.state.value))("severity",e.state.severity),l(2),ae(" ",i("ASICS.TABLE.TIME_FORMAT",We(10,mr,e.time.days,e.time.hours,e.time.minutes))," "),l(2),S(e.avgHashRate),l(2),S(e.maxChipTemp),l(2),S(e.powerConsumption),l(2),S(e.avgFanSpeed)}}function yr(t,o){if(t&1&&(d(0,"div",9)(1,"p-table",14),u(2,fr,15,7,"ng-template",null,3,D)(4,hr,16,14,"ng-template",null,4,D),c()()),t&2){s();let e=jt(11);l(),r("value",e)}}function vr(t,o){if(t&1&&(d(0,"div",6)(1,"p-menu",7,0),se(3,"async"),u(4,gr,2,1,"ng-template",null,1,D),c(),d(6,"div",8)(7,"div",9)(8,"p-toolbar"),u(9,_r,3,6,"ng-template",null,2,D),c()(),qt(11),se(12,"async"),u(13,yr,6,1,"div",9),c()()),t&2){let e=s();l(),r("model",Te(3,2,e.menuItems$)),l(10);let i=Ut(Te(12,4,e.asicSummary$));l(2),B(e.selectedItem()&&(i!=null&&i.length)?13:-1)}}var Ji=class t{constructor(o,e,i,n,a){this.asicsService=o;this.dialogService=e;this.translocoService=i;this.confirmDialogService=n;this.toastService=a}isLoading=z(!1);isToolbarDisabled=fe(()=>this.isLoading()||!this.selectedItem());selectedItem=z(null);menuElement;menuItems$;asicSummary$=this.getAsicSummary();addresses=[];menuItemsSub$=new $t([]);ngOnInit(){this.menuItems$=this.getMenuItems()}ngAfterViewInit(){setTimeout(()=>{this.menuElement&&(this.menuElement.onListBlur=()=>{})},100)}getMenuItems(){return this.isLoading.set(!0),this.menuItemsSub$.pipe(qe(o=>o.length?Vt(o):this.asicsService.getAsics().pipe(gt(e=>this.buildMenu(e)))),Rt(o=>{this.addresses=o.map(e=>e.label),this.isLoading.set(!1)}),_t(o=>{throw this.toastService.error("ASICS.TOAST.SIDE_BAR_ERROR"),o}))}buildMenu(o){let e=[];return o.forEach(i=>{let n=e.find(p=>p.label===i.address),a=this.buildMenuItem(i);n?n.items.push(a):e.push({label:i.address,items:[a]})}),e}buildMenuItem(o){return{id:o.id,label:o.hostname,icon:xt.SERVER,command:e=>this.onItemClick(e),asic:o}}getAsicSummary(){return gi(this.selectedItem).pipe(qe(o=>Lt(qi).pipe(Ft(0),qe(()=>o?this.asicsService.getSummary(o.id):Dt))),gt(o=>[{ip:o.ip,state:{value:`ASICS.TABLE.STATE.${o.status.state.toUpperCase()}`,severity:this.getStateSeverity(o.status.state)},time:{days:o.status.stateTimeDays,hours:o.status.stateTimeHours,minutes:o.status.stateTimeMinutes},avgHashRate:this.formatHashRate(o.avgHashRate,o.currentPreset),maxChipTemp:Ne(o.maxChipTemp,"1.0-0"),powerConsumption:Ne(o.powerConsumption,"1.0-0"),avgFanSpeed:Ne(o.avgFanSpeed,"1.0-0")}]),_t(o=>{throw this.toastService.error("ASICS.TOAST.SUMMARY_ERROR"),o}))}formatHashRate(o,e){let i=Ne(o,"1.2-2");return e?`${i} / ${e}`:i}onItemClick(o){this.selectedItem.set(o.item)}openModifyDialog(o){this.dialogService.open(mt,{header:this.translocoService.translate(`ASICS.DIALOG.MODIFY.HEADER.${o?"EDIT":"ADD"}`),duplicate:!1,closable:!0,draggable:!0,modal:!0,focusOnShow:!1,width:"25rem",height:"31rem",data:{isEditMode:o,addresses:this.addresses,asic:this.selectedItem()?.asic}}).onClose.pipe(Ce()).subscribe(i=>{i&&(o&&this.selectedItem()?.asic&&(this.selectedItem().asic=i),this.menuItemsSub$.next([]))})}openDeleteAsicModal(o){this.confirmDialogService.confirmDialog({target:o.target,message:"ASICS.CONFIRM_DIALOG.DELETE_ASIC_MESSAGE",acceptButtonProps:{label:"ASICS.BUTTON.DELETE",severity:"danger",icon:xt.TRASH},accept:()=>{this.deleteAsic()}})}deleteAsic(){this.selectedItem()&&(this.isLoading.set(!0),this.asicsService.deleteAsic(this.selectedItem().id).pipe(Ce(),ze(()=>{this.isLoading.set(!1)})).subscribe({next:()=>{this.menuItemsSub$.next([]),this.selectedItem.set(null)},error:()=>{this.toastService.error("ASICS.TOAST.DELETE_ERROR")}}))}getStateSeverity(o){switch(o){case"mining":return"success";case"initializing":case"starting":case"auto-tuning":return"info";case"restarting":case"shutting-down":case"stopped":return"warn";case"failure":return"danger";default:return"danger"}}static \u0275fac=function(e){return new(e||t)($(Re),$(ct),$(_i),$(Ct),$(Ke))};static \u0275cmp=L({type:t,selectors:[["app-asics"]],viewQuery:function(e,i){if(e&1&&H(dr,5),e&2){let n;f(n=h())&&(i.menuElement=n.first)}},features:[R([{provide:Ct,useClass:Mi},{provide:Ke,useClass:ki}])],decls:3,vars:0,consts:[["menu",""],["submenuheader",""],["start",""],["header",""],["body",""],["class","asics",4,"transloco"],[1,"asics"],["styleClass","w-72 h-full overflow-auto",3,"model"],[1,"flex","flex-1","flex-col"],[1,"card"],[1,"select-none","font-bold","text-primary"],["icon","pi pi-plus","severity","success","variant","outlined",1,"mr-2",3,"onClick","label","disabled"],["icon","pi pi-pencil","severity","warn","variant","outlined",1,"mr-2",3,"onClick","label","disabled"],["icon","pi pi-trash","severity","danger","variant","outlined",3,"onClick","label","disabled"],["showGridlines","","rowHover","",3,"value"],[1,"table__column"],["target","_blank",1,"font-bold","text-primary","hover:underline",3,"href"],[3,"value","severity"]],template:function(e,i){e&1&&(u(0,vr,14,7,"div",5),x(1,"p-confirm-dialog")(2,"p-toast"))},dependencies:[ot,St,Wt,Oi,pt,Si,Ii,wi,Ti,Yi],styles:[".asics[_ngcontent-%COMP%]{height:100%;display:flex;gap:2rem}.table__column[_ngcontent-%COMP%]{width:14.2857142857%}"],changeDetection:0})};export{Ji as AsicsComponent};
