(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"8SHQ":function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s}));var o="production"!==(e&&e.env,"production"),i=3200,r="phx-dev",a="volt-mx-tutorials",l="HCL-TECH-SOFTWARE",s=o?"http://localhost:".concat(i):"".concat("https://opensource.hcltechsw.com","/").concat(a)}).call(this,n("8oxB"))},CSbH:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",headerRow:"_3w-lt",headerLayout:"tnIEI",logo:"_1NTTx",header:"N33B7",hide:"_2VwXw",search:"_5eQst",camp:"_3ys2l",subHeader:"_5tLpv",switchLang:"_17QWv"}},Djov:function(e,t,n){"use strict";var o=n("rePB"),i=n("nKUr"),r=n("q1tI"),a=n("XzT5"),l=n("d2CI"),s=n.n(l),c=n("9xET"),p=n.n(c),u=n("ZPTe"),d=n.n(u),f=n("QbLZ"),m=n.n(f),h=n("YEIV"),y=n.n(h),v=n("iCc5"),g=n.n(v),b=n("V7oC"),C=n.n(b),O=n("FYw3"),j=n.n(O),x=n("mRg0"),S=n.n(x),w=n("1j5w"),E=n("17x9"),k=n("TSYQ"),N=n.n(k),T=n("/tz4"),I=n.n(T)()({}),P=I.Consumer,B=n("J9Du"),A=n("xEkU"),M=n.n(A);function _(e,t,n){var o=void 0,i=void 0;return Object(B.default)(e,"ant-motion-collapse",{start:function(){t?(o=e.offsetHeight,e.style.height="0px",e.style.opacity="0"):(e.style.height=e.offsetHeight+"px",e.style.opacity="1")},active:function(){i&&M.a.cancel(i),i=M()((function(){e.style.height=(t?o:0)+"px",e.style.opacity=t?"1":"0"}))},end:function(){i&&M.a.cancel(i),e.style.height="",e.style.opacity="",n()}})}var R={enter:function(e,t){return _(e,!0,t)},leave:function(e,t){return _(e,!1,t)},appear:function(e,t){return _(e,!0,t)}},U=n("2W6z"),D=n.n(U),F={},L=function(e,t){e||F[t]||(D()(!1,t),F[t]=!0)},H=function(e){function t(){g()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onKeyDown=function(t){e.subMenu.onKeyDown(t)},e.saveSubMenu=function(t){e.subMenu=t},e}return S()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,t=e.rootPrefixCls,n=e.className,o=this.context.antdMenuTheme;return r.createElement(w.SubMenu,m()({},this.props,{ref:this.saveSubMenu,popupClassName:N()(t+"-"+o,n)}))}}]),t}(r.Component);H.contextTypes={antdMenuTheme:E.string},H.isSubMenu=1;var K=H,V=n("VCL8"),W=n("OLES"),z=n("7ixt"),Q={adjustX:1,adjustY:1},q={adjustX:0,adjustY:0},G=[0,0];function J(e){return"boolean"===typeof e?e?Q:q:m()({},q,e)}var Y=function(e){function t(e){g()(this,t);var n=j()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onVisibleChange=function(e){var t=n.props.onVisibleChange;"visible"in n.props||n.setState({visible:!n.isNoTitle()&&e}),t&&!n.isNoTitle()&&t(e)},n.onPopupAlign=function(e,t){var o=n.getPlacements(),i=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(i){var r=e.getBoundingClientRect(),a={top:"50%",left:"50%"};i.indexOf("top")>=0||i.indexOf("Bottom")>=0?a.top=r.height-t.offset[1]+"px":(i.indexOf("Top")>=0||i.indexOf("bottom")>=0)&&(a.top=-t.offset[1]+"px"),i.indexOf("left")>=0||i.indexOf("Right")>=0?a.left=r.width-t.offset[0]+"px":(i.indexOf("right")>=0||i.indexOf("Left")>=0)&&(a.left=-t.offset[0]+"px"),e.style.transformOrigin=a.left+" "+a.top}},n.saveTooltip=function(e){n.tooltip=e},n.renderTooltip=function(e){var t=e.getPopupContainer,o=n.props,i=n.state,a=o.prefixCls,l=o.title,s=o.overlay,c=o.openClassName,p=o.getPopupContainer,u=o.getTooltipContainer,d=o.children,f=i.visible;!("visible"in o)&&n.isNoTitle()&&(f=!1);var h=n.getDisabledCompatibleChildren(r.isValidElement(d)?d:r.createElement("span",null,d)),v=h.props,g=N()(v.className,y()({},c||a+"-open",!0));return r.createElement(W.default,m()({},n.props,{getTooltipContainer:p||u||t,ref:n.saveTooltip,builtinPlacements:n.getPlacements(),overlay:s||l||"",visible:f,onVisibleChange:n.onVisibleChange,onPopupAlign:n.onPopupAlign}),f?Object(r.cloneElement)(h,{className:g}):h)},n.state={visible:!!e.visible||!!e.defaultVisible},n}return S()(t,e),C()(t,[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getPlacements",value:function(){var e=this.props,t=e.builtinPlacements,n=e.arrowPointAtCenter,o=e.autoAdjustOverflow;return t||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.arrowWidth,n=void 0===t?5:t,o=e.horizontalArrowShift,i=void 0===o?16:o,r=e.verticalArrowShift,a=void 0===r?12:r,l=e.autoAdjustOverflow,s=void 0===l||l,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(i+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(a+n)]},topRight:{points:["br","tc"],offset:[i+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(a+n)]},bottomRight:{points:["tr","bc"],offset:[i+n,4]},rightBottom:{points:["bl","cr"],offset:[4,a+n]},bottomLeft:{points:["tl","bc"],offset:[-(i+n),4]},leftBottom:{points:["br","cl"],offset:[-4,a+n]}};return Object.keys(c).forEach((function(t){c[t]=e.arrowPointAtCenter?m()({},c[t],{overflow:J(s),targetOffset:G}):m()({},z.a[t],{overflow:J(s)}),c[t].ignoreShake=!0})),c}({arrowPointAtCenter:n,verticalArrowShift:8,autoAdjustOverflow:o})}},{key:"getDisabledCompatibleChildren",value:function(e){if((e.type.__ANT_BUTTON||"button"===e.type)&&e.props.disabled){var t=function(e,t){var n={},o=m()({},e);return t.forEach((function(t){e&&t in e&&(n[t]=e[t],delete o[t])})),{picked:n,omitted:o}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=t.picked,o=t.omitted,i=m()({display:"inline-block"},n,{cursor:"not-allowed",width:e.props.block?"100%":null}),a=m()({},o,{pointerEvents:"none"}),l=Object(r.cloneElement)(e,{style:a,className:null});return r.createElement("span",{style:i,className:e.props.className},l)}return e}},{key:"isNoTitle",value:function(){var e=this.props,t=e.title,n=e.overlay;return!t&&!n}},{key:"render",value:function(){return r.createElement(P,null,this.renderTooltip)}}],[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}]),t}(r.Component);Y.defaultProps={prefixCls:"ant-tooltip",placement:"top",transitionName:"zoom-big-fast",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0},Object(V.polyfill)(Y);var X=Y,$=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},Z=function(e){function t(){g()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onKeyDown=function(t){e.menuItem.onKeyDown(t)},e.saveMenuItem=function(t){e.menuItem=t},e}return S()(t,e),C()(t,[{key:"render",value:function(){var e=this.context.inlineCollapsed,t=this.props,n=t.level,o=t.children,i=t.rootPrefixCls,a=this.props,l=a.title,s=$(a,["title"]),c=void 0;return e&&(c=l||(1===n?o:"")),r.createElement(X,{title:c,placement:"right",overlayClassName:i+"-inline-collapsed-tooltip"},r.createElement(w.Item,m()({},s,{title:e?null:l,ref:this.saveMenuItem})))}}]),t}(r.Component);Z.contextTypes={inlineCollapsed:E.bool},Z.isMenuItem=1;var ee=Z,te=function(e){function t(e){g()(this,t);var n=j()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.inlineOpenKeys=[],n.handleMouseEnter=function(e){n.restoreModeVerticalFromInline();var t=n.props.onMouseEnter;t&&t(e)},n.handleTransitionEnd=function(e){var t="width"===e.propertyName&&e.target===e.currentTarget,o="font-size"===e.propertyName&&e.target.className.indexOf("anticon")>=0;(t||o)&&n.restoreModeVerticalFromInline()},n.handleClick=function(e){n.handleOpenChange([]);var t=n.props.onClick;t&&t(e)},n.handleOpenChange=function(e){n.setOpenKeys(e);var t=n.props.onOpenChange;t&&t(e)},n.renderMenu=function(e){var t=e.getPopupContainer,o=n.props,i=o.prefixCls,a=o.className,l=o.theme,s=n.getRealMenuMode(),c=n.getMenuOpenAnimation(s),p=N()(a,i+"-"+l,y()({},i+"-inline-collapsed",n.getInlineCollapsed())),u={openKeys:n.state.openKeys,onOpenChange:n.handleOpenChange,className:p,mode:s};"inline"!==s?(u.onClick=n.handleClick,u.openTransitionName=c):u.openAnimation=c;var d=n.context.collapsedWidth;return!n.getInlineCollapsed()||0!==d&&"0"!==d&&"0px"!==d?r.createElement(w.default,m()({getPopupContainer:t},n.props,u,{onTransitionEnd:n.handleTransitionEnd,onMouseEnter:n.handleMouseEnter})):null},L(!("onOpen"in e||"onClose"in e),"`onOpen` and `onClose` are removed, please use `onOpenChange` instead, see: https://u.ant.design/menu-on-open-change."),L(!("inlineCollapsed"in e&&"inline"!==e.mode),"`inlineCollapsed` should only be used when Menu's `mode` is inline.");var o=void 0;return"openKeys"in e?o=e.openKeys:"defaultOpenKeys"in e&&(o=e.defaultOpenKeys),n.state={openKeys:o||[]},n}return S()(t,e),C()(t,[{key:"getChildContext",value:function(){return{inlineCollapsed:this.getInlineCollapsed(),antdMenuTheme:this.props.theme}}},{key:"componentWillReceiveProps",value:function(e,t){"inline"===this.props.mode&&"inline"!==e.mode&&(this.switchingModeFromInline=!0),"openKeys"in e?this.setState({openKeys:e.openKeys}):((e.inlineCollapsed&&!this.props.inlineCollapsed||t.siderCollapsed&&!this.context.siderCollapsed)&&(this.switchingModeFromInline=!0,this.inlineOpenKeys=this.state.openKeys,this.setState({openKeys:[]})),(!e.inlineCollapsed&&this.props.inlineCollapsed||!t.siderCollapsed&&this.context.siderCollapsed)&&(this.setState({openKeys:this.inlineOpenKeys}),this.inlineOpenKeys=[]))}},{key:"restoreModeVerticalFromInline",value:function(){this.switchingModeFromInline&&(this.switchingModeFromInline=!1,this.setState({}))}},{key:"setOpenKeys",value:function(e){"openKeys"in this.props||this.setState({openKeys:e})}},{key:"getRealMenuMode",value:function(){var e=this.getInlineCollapsed();if(this.switchingModeFromInline&&e)return"inline";var t=this.props.mode;return e?"vertical":t}},{key:"getInlineCollapsed",value:function(){var e=this.props.inlineCollapsed;return void 0!==this.context.siderCollapsed?this.context.siderCollapsed:e}},{key:"getMenuOpenAnimation",value:function(e){var t=this.props,n=t.openAnimation,o=t.openTransitionName,i=n||o;if(void 0===n&&void 0===o)switch(e){case"horizontal":i="slide-up";break;case"vertical":case"vertical-left":case"vertical-right":this.switchingModeFromInline?(i="",this.switchingModeFromInline=!1):i="zoom-big";break;case"inline":i=R}return i}},{key:"render",value:function(){return r.createElement(P,null,this.renderMenu)}}]),t}(r.Component),ne=te;te.Divider=w.Divider,te.Item=ee,te.SubMenu=K,te.ItemGroup=w.ItemGroup,te.defaultProps={prefixCls:"ant-menu",className:"",theme:"light",focusable:!1},te.childContextTypes={inlineCollapsed:E.bool,antdMenuTheme:E.string},te.contextTypes={siderCollapsed:E.bool,collapsedWidth:E.oneOfType([E.number,E.string])};var oe,ie=n("eDIo"),re=n("m1cH"),ae=n.n(re),le=n("Optq"),se=n("FxDB"),ce=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},pe=new Set;var ue=(oe={width:"1em",height:"1em",fill:"currentColor"},y()(oe,"aria-hidden","true"),y()(oe,"focusable","false"),oe),de=/-fill$/,fe=/-o$/,me=/-twotone$/;function he(e){return se.a.setTwoToneColors({primaryColor:e})}var ye=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n};se.a.add.apply(se.a,ae()(Object.keys(le).map((function(e){return le[e]})))),he("#1890ff");var ve="outlined",ge=void 0,be=function(e){var t,n=e.className,o=e.type,i=e.component,a=e.viewBox,l=e.spin,s=e.children,c=e.theme,p=e.twoToneColor,u=ye(e,["className","type","component","viewBox","spin","children","theme","twoToneColor"]);L(Boolean(o||i||s),"Icon should have `type` prop or `component` prop or `children`.");var d=N()((t={},y()(t,"anticon",!0),y()(t,"anticon-"+o,Boolean(o)),t),n),f=N()(y()({},"anticon-spin",!!l||"loading"===o)),h=void 0;if(i){var v=m()({},ue,{className:f,viewBox:a});a||delete v.viewBox,h=r.createElement(i,v,s)}if(s){L(Boolean(a)||1===r.Children.count(s)&&r.isValidElement(s)&&"use"===r.Children.only(s).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.");var g=m()({},ue,{className:f});h=r.createElement("svg",m()({},g,{viewBox:a}),s)}if("string"===typeof o){var b;if(c){var C=function(e){var t=null;return de.test(e)?t="filled":fe.test(e)?t="outlined":me.test(e)&&(t="twoTone"),t}(o);L(!C||c===C,"The icon name '"+o+"' already specify a theme '"+C+"', the 'theme' prop '"+c+"' will be ignored.")}b=function(e,t){var n=e;return"filled"===t?n+="-fill":"outlined"===t?n+="-o":"twoTone"===t?n+="-twotone":L(!1,"This icon '"+e+"' has unknown theme '"+t+"'"),n}(function(e){return e.replace(de,"").replace(fe,"").replace(me,"")}(function(e){switch(e){case"cross":return"close"}return e}(o)),ge||c||ve),h=r.createElement(se.a,{className:f,type:b,primaryColor:p})}return r.createElement("i",m()({},u,{className:d}),h)};be.createFromIconfontCN=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,o=void 0===n?{}:n;if("undefined"!==typeof document&&"undefined"!==typeof window&&"function"===typeof document.createElement&&"string"===typeof t&&t.length&&!pe.has(t)){var i=document.createElement("script");i.setAttribute("src",t),i.setAttribute("data-namespace",t),pe.add(t),document.body.appendChild(i)}var a=function(e){var t=e.type,n=e.children,i=ce(e,["type","children"]),a=null;return e.type&&(a=r.createElement("use",{xlinkHref:"#"+t})),n&&(a=n),r.createElement(Ce,m()({},i,o),a)};return a.displayName="Iconfont",a},be.getTwoToneColor=function(){return se.a.getTwoToneColors().primaryColor},be.setTwoToneColor=he;var Ce=be,Oe=function(e){function t(){g()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.renderDropDown=function(t){var n=t.getPopupContainer,o=e.props,i=o.children,a=o.prefixCls,l=o.overlay,s=o.trigger,c=o.disabled,p=o.getPopupContainer,u=r.Children.only(i),d=r.Children.only(l),f=r.cloneElement(u,{className:N()(u.props.className,a+"-trigger"),disabled:c}),h=d.props,y=h.selectable,v=void 0!==y&&y,g=h.focusable,b=void 0===g||g,C=r.createElement("span",{className:a+"-menu-submenu-arrow"},r.createElement(Ce,{type:"right",className:a+"-menu-submenu-arrow-icon"})),O="string"===typeof d.type?d:r.cloneElement(d,{mode:"vertical",selectable:v,focusable:b,expandIcon:C}),j=c?[]:s,x=void 0;return j&&-1!==j.indexOf("contextMenu")&&(x=!0),r.createElement(ie.default,m()({alignPoint:x},e.props,{getPopupContainer:p||n,transitionName:e.getTransitionName(),trigger:j,overlay:O}),f)},e}return S()(t,e),C()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.placement,n=void 0===t?"":t,o=e.transitionName;return void 0!==o?o:n.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"componentDidMount",value:function(){var e=this.props.overlay;if(e){var t=e.props;L(!t.mode||"vertical"===t.mode,'mode="'+t.mode+"\" is not supported for Dropdown's Menu.")}}},{key:"render",value:function(){return r.createElement(P,null,this.renderDropDown)}}]),t}(r.Component),je=Oe;Oe.defaultProps={prefixCls:"ant-dropdown",mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft"};var xe=n("i8i4"),Se=n("/dDc"),we=0,Ee={};function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=we++,o=t;function i(){(o-=1)<=0?(e(),delete Ee[we]):Ee[we]=M()(i)}return Ee[we]=M()(i),n}ke.cancel=function(e){M.a.cancel(Ee[e]),delete Ee[e]};var Ne=void 0;function Te(e){return!e||null===e.offsetParent}var Ie=function(e){function t(){g()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.animationStart=!1,e.destroy=!1,e.onClick=function(t,n){if(!(!t||Te(t)||t.className.indexOf("-leave")>=0)){var o=e.props.insertExtraNode;e.extraNode=document.createElement("div");var i=e.extraNode;i.className="ant-click-animating-node";var r=e.getAttributeName();t.removeAttribute(r),t.setAttribute(r,"true"),Ne=Ne||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&e.isNotGrey(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(i.style.borderColor=n,Ne.innerHTML="[ant-click-animating-without-extra-node]:after { border-color: "+n+"; }",document.body.contains(Ne)||document.body.appendChild(Ne)),o&&t.appendChild(i),Se.a.addStartEventListener(t,e.onTransitionStart),Se.a.addEndEventListener(t,e.onTransitionEnd)}},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!Te(n.target)){e.resetEffect(t);var o=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,o)}),0),ke.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=ke((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.onTransitionStart=function(t){if(!e.destroy){var n=Object(xe.findDOMNode)(e);t&&t.target===n&&(e.animationStart||e.resetEffect(n))}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e}return S()(t,e),C()(t,[{key:"isNotGrey",value:function(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(e){if(e&&e!==this.extraNode&&e instanceof Element){var t=this.props.insertExtraNode,n=this.getAttributeName();e.removeAttribute(n),this.removeExtraStyleNode(),t&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),Se.a.removeStartEventListener(e,this.onTransitionStart),Se.a.removeEndEventListener(e,this.onTransitionEnd)}}},{key:"removeExtraStyleNode",value:function(){Ne&&(Ne.innerHTML="")}},{key:"componentDidMount",value:function(){var e=Object(xe.findDOMNode)(this);1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"render",value:function(){return this.props.children}}]),t}(r.Component),Pe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},Be=/^[\u4e00-\u9fa5]{2}$/,Ae=Be.test.bind(Be);var Me=function(e){function t(e){g()(this,t);var n=j()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.saveButtonRef=function(e){n.buttonNode=e},n.handleClick=function(e){var t=n.state.loading,o=n.props.onClick;t||o&&o(e)},n.state={loading:e.loading,hasTwoCNChar:!1},n}return S()(t,e),C()(t,[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props.loading,o=e.loading;n&&clearTimeout(this.delayTimeout),"boolean"!==typeof o&&o&&o.delay?this.delayTimeout=window.setTimeout((function(){return t.setState({loading:o})}),o.delay):this.setState({loading:o})}},{key:"componentDidUpdate",value:function(){this.fixTwoCNChar()}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var e=this.buttonNode.textContent||this.buttonNode.innerText;this.isNeedInserted()&&Ae(e)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var e=this.props,t=e.icon,n=e.children;return 1===r.Children.count(n)&&!t}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.type,i=n.shape,a=n.size,l=n.className,s=n.children,c=n.icon,p=n.prefixCls,u=n.ghost,d=(n.loading,n.block),f=Pe(n,["type","shape","size","className","children","icon","prefixCls","ghost","loading","block"]),h=this.state,v=h.loading,g=h.hasTwoCNChar,b="";switch(a){case"large":b="lg";break;case"small":b="sm"}var C=new Date,O=11===C.getMonth()&&25===C.getDate(),j=N()(p,l,(e={},y()(e,p+"-"+o,o),y()(e,p+"-"+i,i),y()(e,p+"-"+b,b),y()(e,p+"-icon-only",!s&&c),y()(e,p+"-loading",v),y()(e,p+"-background-ghost",u),y()(e,p+"-two-chinese-chars",g),y()(e,p+"-block",d),y()(e,"christmas",O),e)),x=v?"loading":c,S=x?r.createElement(Ce,{type:x}):null,w=s||0===s?r.Children.map(s,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&Ae(e.props.children)?r.cloneElement(e,{},e.props.children.split("").join(n)):"string"===typeof e?(Ae(e)&&(e=e.split("").join(n)),r.createElement("span",null,e)):e}}(e,t.isNeedInserted())})):null,E=O?"Ho Ho Ho!":f.title,k=f;if(void 0!==k.href)return r.createElement("a",m()({},k,{className:j,onClick:this.handleClick,title:E,ref:this.saveButtonRef}),S,w);var T=f,I=T.htmlType,P=Pe(T,["htmlType"]);return r.createElement(Ie,null,r.createElement("button",m()({},P,{type:I||"button",className:j,onClick:this.handleClick,title:E,ref:this.saveButtonRef}),S,w))}}]),t}(r.Component),_e=Me;Me.__ANT_BUTTON=!0,Me.defaultProps={prefixCls:"ant-btn",loading:!1,ghost:!1,block:!1},Me.propTypes={type:E.string,shape:E.oneOf(["circle","circle-outline"]),size:E.oneOf(["large","default","small"]),htmlType:E.oneOf(["submit","button","reset"]),onClick:E.func,loading:E.oneOfType([E.bool,E.object]),className:E.string,icon:E.string,block:E.bool};var Re=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},Ue=function(e){var t=e.prefixCls,n=void 0===t?"ant-btn-group":t,o=e.size,i=e.className,a=Re(e,["prefixCls","size","className"]),l="";switch(o){case"large":l="lg";break;case"small":l="sm"}var s=N()(n,y()({},n+"-"+l,l),i);return r.createElement("div",m()({},a,{className:s}))};_e.Group=Ue;var De=_e,Fe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]])}return n},Le=De.Group,He=function(e){function t(){g()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.renderButton=function(t){var n=t.getPopupContainer,o=e.props,i=o.type,a=o.disabled,l=o.onClick,s=o.htmlType,c=o.children,p=o.prefixCls,u=o.className,d=o.overlay,f=o.trigger,h=o.align,y=o.visible,v=o.onVisibleChange,g=o.placement,b=o.getPopupContainer,C=Fe(o,["type","disabled","onClick","htmlType","children","prefixCls","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer"]),O={align:h,overlay:d,disabled:a,trigger:a?[]:f,onVisibleChange:v,placement:g,getPopupContainer:b||n};return"visible"in e.props&&(O.visible=y),r.createElement(Le,m()({},C,{className:N()(p,u)}),r.createElement(De,{type:i,disabled:a,onClick:l,htmlType:s},c),r.createElement(je,O,r.createElement(De,{type:i,icon:"ellipsis"})))},e}return S()(t,e),C()(t,[{key:"render",value:function(){return r.createElement(P,null,this.renderButton)}}]),t}(r.Component),Ke=He;He.defaultProps={placement:"bottomRight",type:"default",prefixCls:"ant-dropdown-button"},je.Button=Ke;var Ve=je,We=n("YFqc"),ze=n.n(We),Qe=n("mOvS"),qe=n.n(Qe),Ge=n("20a2"),Je=n.n(Ge),Ye=n("CSbH"),Xe=n.n(Ye),$e=n("1OyB"),Ze=n("vuIU"),et=n("JX7q"),tt=n("Ji7U"),nt=n("md7G"),ot=n("foSv"),it=n("4IMT"),rt=n.n(it),at=n("iJl9"),lt=n.n(at),st=n("CC+v"),ct=n.n(st),pt=n("jr0K"),ut=n.n(pt),dt=n("8SHQ");function ft(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(ot.a)(e);if(t){var i=Object(ot.a)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(nt.a)(this,n)}}var mt=qe()().publicRuntimeConfig,ht=function(e){Object(tt.a)(n,e);var t=ft(n);function n(){var e;Object($e.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),Object(o.a)(Object(et.a)(e),"state",{keyword:e.props.keyword||""}),Object(o.a)(Object(et.a)(e),"handleSearchClick",(function(){e.handleSubmit(document.getElementById("search").value)})),Object(o.a)(Object(et.a)(e),"handleSubmit",(function(e){var t=e.trim().replace(/\\|\/|  +/g," ");if(!(t.length>2))return ct.a.error({title:"Please enter minimum 3 characters"}),!1;var n=dt.f?"":dt.b,o="".concat(n,"/hikes/search?keyword=").concat(t);Je.a.replace(o)})),e}return Object(Ze.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:ut.a.searchWrapper,ref:this.setWrapperRef,children:Object(i.jsxs)(d.a,{span:24,className:ut.a.innerWrapper,children:[Object(i.jsx)(lt.a,{id:"search",placeholder:"Search",className:ut.a.input,onPressEnter:function(t){return e.handleSubmit(t.target.value)},autoComplete:"off",defaultValue:this.state.keyword}),Object(i.jsx)(rt.a,{type:"primary",shape:"circle",size:"default",className:ut.a.searchIcon,onClick:this.handleSearchClick,children:Object(i.jsx)("img",{src:"".concat(mt.asset,"/static/dist/images/search.svg"),alt:"search icon"})})]})})}}]),n}(r.Component),yt=n("k7Sn");function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var bt=s.a.Header,Ct=function(e){var t=e.search,n=e.keyword,o=qe()().publicRuntimeConfig,l=Object(Ge.useRouter)(),c=Object(r.useState)(a.a.language),u=c[0],f=c[1];Object(r.useEffect)((function(){f(a.a.language)}),[a.a.language]);var m=Object(r.useCallback)((function(e){var t=l.query.tour,n=t?"".concat(o.asset,"/hikes/tour/").concat(t,"?lang=").concat(e):"".concat(o.asset,"/hikes?lang=").concat(e);l.push(n)}),[]),h=Object(i.jsx)(ne,{children:yt.a.map((function(e){return Object(i.jsx)(ne.Item,{onClick:function(){return m(e)},children:a.a.t(e)},e)}))});return Object(i.jsx)(p.a,{className:Xe.a.headerRow,children:Object(i.jsxs)(s.a,{className:Xe.a.headerLayout,children:[Object(i.jsx)(bt,{className:Xe.a.header,children:Object(i.jsxs)(p.a,{type:"flex",justify:"space-between",children:[Object(i.jsx)(d.a,{span:4,style:{height:"inherit"},children:Object(i.jsx)(ze.a,{href:"".concat(o.asset,"/hikes"),children:Object(i.jsxs)("a",{title:"Kony Logo",className:Xe.a.logo,children:[Object(i.jsx)("img",{src:"".concat(o.asset,"/static/dist/images/productlogo.svg"),className:Xe.a.logo,alt:"logo"}),Object(i.jsx)("br",{})]})})}),Object(i.jsx)(d.a,{className:Xe.a.camp,children:Object(i.jsx)("img",{src:"".concat(o.asset,"/static/dist/images/camp-mountain.svg"),alt:"camp mountain"})})]})}),Object(i.jsxs)("div",gt(gt({},l.query.tour&&{style:{justifyContent:"flex-end"}}),{},{className:Xe.a.subHeader,children:[t?Object(i.jsx)("div",{className:Xe.a.search,children:Object(i.jsx)(ht,{keyword:n})}):null,Object(i.jsx)("div",{className:Xe.a.switchLang,children:Object(i.jsx)(Ve,{overlay:h,trigger:["click"],children:Object(i.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:[Object(i.jsx)(Ce,{type:"global"}),a.a.t(u),Object(i.jsx)(Ce,{type:"caret-down"})]})})})]}))]})})};Ct.defaultProps={search:!0,keyword:""};t.a=Ct},jr0K:function(e,t,n){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",input:"_1OQcm",searchIcon:"_2N6F0",searchWrapper:"_3qwBd",show:"_30n2x",hide:"_3EwJQ",innerWrapper:"_1pB6w"}}}]);