(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"6EMX":function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var a=o("o0o1"),n=o.n(a),r=o("HaE+"),i=o("vDqi"),l=o.n(i),s=o("8SHQ"),c=function(){var e=Object(r.a)(n.a.mark((function e(t){var o,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.map((function(e){return l.a.get("".concat(s.e,"/contents/").concat(e,"/tours.json"))})),e.next=3,l.a.all(o);case 3:return a=e.sent,r=a.map((function(e){return e.data})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"DG/x":function(e,t,o){"use strict";var a=o("nKUr"),n=(o("q1tI"),o("Y/VR")),r=o.n(n),i=o("YFqc"),l=o.n(i),s=o("XzT5"),c=o("sz4E"),u=o.n(c),p=o("8SHQ"),d=p.f?"":"/".concat(p.b);t.a=function(e){var t=e.title,o=e.className,n=e.search;return Object(a.jsx)("div",{className:"".concat(u.a.breadcrumbWrapper," ").concat(o),children:Object(a.jsxs)(r.a,{separator:Object(a.jsx)("span",{className:u.a.divider,children:"/"}),children:[Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(l.a,{href:{pathname:"".concat(d,"/hikes"),query:{lang:s.a.language}},children:Object(a.jsx)("a",{className:u.a.parent,children:"HIKES"})})}),void 0!==n&&null!==n?Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(l.a,{href:{pathname:"/hikes/search/".concat(n,"}"),query:{lang:s.a.language}},children:Object(a.jsx)("a",{className:u.a.parent,children:n})})}):null,Object(a.jsx)(r.a.Item,{className:u.a.child,children:t||null})]})})}},H3WJ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(o("iCc5")),n=f(o("V7oC")),r=f(o("FYw3")),i=f(o("mRg0")),l=o("q1tI"),s=m(l),c=m(o("17x9")),u=f(o("aVg8")),p=f(o("wzuP")),d=f(o("TSYQ"));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}function b(e,t,o,a){var n=o.indexOf(e)===o.length-1,r=function(e,t){if(!e.breadcrumbName)return null;var o=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":("+o+")","g"),(function(e,o){return t[o]||e}))}(e,t);return n?s.createElement("span",null,r):s.createElement("a",{href:"#/"+a.join("/")},r)}var g=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,n.default)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,u.default)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){var e=void 0,t=this.props,o=t.separator,a=t.prefixCls,n=t.style,r=t.className,i=t.routes,c=t.params,m=void 0===c?{}:c,f=t.children,g=t.itemRender,v=void 0===g?b:g;if(i&&i.length>0){var j=[];e=i.map((function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(m).forEach((function(e){t=t.replace(":"+e,m[e])})),t&&j.push(t),s.createElement(p.default,{separator:o,key:e.breadcrumbName||t},v(e,m,i,j))}))}else f&&(e=s.Children.map(f,(function(e,t){return e?((0,u.default)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),(0,l.cloneElement)(e,{separator:o,key:t})):e})));return s.createElement("div",{className:(0,d.default)(r,a),style:n},e)}}]),t}(s.Component);t.default=g,g.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},g.propTypes={prefixCls:c.string,separator:c.node,routes:c.array,params:c.object,linkRender:c.func,nameRender:c.func},e.exports=t.default},PGnZ:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",hide:"_2lx70",switchWrapper:"_3dK4q",channels:"_1_fDn",generalButton:"_2h9jN",detailPageWrapper:"_1wlJH",mobileMetaWrapper:"_18sTW",hikeBody:"un9yd",hikeContainer:"_4980",tourInfo:"_1sg5s",tourTitle:"_1zCBc",tourVersion:"_34gMg",tourBody:"RSpOC",tourThumb:"_1uuIs",tourContainer:"_3Z4gB",tourDesc:"_1DQZI",innerTabWrapper:"_14Op9",tourHeader:"_3f8tX",tourContent:"_2FiW3",tourDetails:"_8wI-z",tourTime:"_2GNWc",startBtn:"_3FjBe",noresult:"_1ZgnQ",assetsContainer:"_3POKL",skeletonWrapper:"_21ZUU",metaData:"vgCP3",datePanel:"_OfnV",filterTablePanel:"_2v7ht",tableHeading:"_3BG8h",componentPerformanceButton:"X9xGv",miniPanelContainer:"_1AvNV",panelContainer:"_1OM0t",RowContainer:"gkuiu",pageContainer:"_3brHz",generate:"_27j98",generateForm:"_1n1qG",preview:"_1zsEw",previews:"_1o1qI"}},XKlS:function(e,t,o){"use strict";var a=o("nKUr"),n=(o("q1tI"),o("4IMT")),r=o.n(n),i=o("zk85"),l=o.n(i),s=o("mOvS"),c=o.n(s)()().publicRuntimeConfig,u=function(e){if(e)return Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/filterCross.svg"),alt:"icon",className:l.a.filterCloseIcon})},p=function(e){return"download"===e?Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/download.svg"),alt:"Download icon",className:l.a.downloadIcon}):null},d=function(e){return e?Object(a.jsx)("img",{src:"".concat(c.asset,"/static/dist/images/icons/codeIcon.png"),alt:"Code icon",className:l.a.codeIcon}):null},m=function(e){var t=e.title,o=e.type,n=e.color,i=e.active,s=e.selected,c=e.children,m=e.className,f=e.onClick,b=e.featured,g=e.href,v=e.target,j=e.disabled,h=e.isCode;return Object(a.jsxs)(r.a,{title:t,className:"\n      ".concat(l.a.konyButton,"\n      ").concat(l.a[o]?l.a[o]:"","\n      ").concat(l.a[n]?l.a[n]:"","\n      ").concat(i?l.a.active:"","\n      ").concat(s?l.a.selected:"","\n      ").concat(b?l.a.featured:"","\n      ").concat(m,"\n    "),onClick:f,href:g||null,target:v,disabled:j,children:[p(o),d(h),c||t,u(s)]})};m.defaultProps={title:"Button",type:"normal",color:"",active:!1,featured:!1,selected:!1,children:"",className:"",href:"",target:null,onClick:function(){},disabled:!1,isCode:!1},t.a=m},"Y/VR":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(o("H3WJ")),n=r(o("wzuP"));function r(e){return e&&e.__esModule?e:{default:e}}a.default.Item=n.default,t.default=a.default,e.exports=t.default},kACj:function(e,t,o){"use strict";o.r(t);var a=o("nKUr"),n=o("o0o1"),r=o.n(n),i=o("HaE+"),l=o("q1tI"),s=o("XzT5"),c=o("Djov"),u=o("9xET"),p=o.n(u),d=o("ZPTe"),m=o.n(d),f=o("DG/x"),b=o("XKlS"),g=o("PGnZ"),v=o.n(g),j=o("mOvS"),h=o.n(j),S=o("6EMX"),y=o("8SHQ"),_=o("t3Un"),I=h()().publicRuntimeConfig.hikesData;t.default=function(e){var t,o=e.url,n=Object(l.useState)(null),u=n[0],d=n[1],g=Object(l.useState)(null),j=g[0],h=g[1],x=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,l,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.asPath.substr(0,o.asPath.indexOf("?")),a=y.f?t.substring(1):t.replace("/".concat(y.b),"").substring(1),e.next=4,Object(S.a)(I);case 4:n=e.sent,i=n.filter((function(e){return e.categoryTours.some((function(e){return e.alias==a}))})),h(i[0].categoryAlias),l=i.map((function(e){return Object.assign({},e,{categoryTours:e.categoryTours})}))[0],s=l.categoryTours.filter((function(e){return e.alias==a}))[0],d(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){return x(),function(){}}),[]);var B=function(e){return e.preventDefault(),e.message=function(){var e=new Date,t=Object(_.a)(null===u||void 0===u?void 0:u.fileName,j);return{namespace:"hike",msg_id:"id_".concat(e.getTime()),msg_type:"POST",request:{context:"tour",category:null===u||void 0===u?void 0:u.category,title:null===u||void 0===u?void 0:u.title,checksum:null===u||void 0===u?void 0:u.checksum,download_url:t,version:null===u||void 0===u?void 0:u.hikeVersion,filename:null===u||void 0===u?void 0:u.fileName,kuid:null===u||void 0===u?void 0:u.kuid,id:"".concat(null===u||void 0===u?void 0:u.nid).concat(null===u||void 0===u?void 0:u.fid).concat(e.getTime())}}}(),"undefined"!==typeof e.message&&(console.log(e.message),getVizSource().postMessage(e.message,"*")),!1},E=y.f?null===u||void 0===u?void 0:u.image:"/".concat(y.b).concat(null===u||void 0===u?void 0:u.image);return Object(a.jsxs)("div",{className:v.a.hikeBody,children:[Object(a.jsx)(c.a,{search:null}),Object(a.jsxs)("div",{className:v.a.tourContainer,children:[Object(a.jsx)(f.a,{title:s.a.t(null===u||void 0===u?void 0:u.title),search:null}),Object(a.jsxs)("div",{className:v.a.tourInfo,children:[Object(a.jsx)("div",{className:v.a.tourThumb,children:Object(a.jsx)("img",{src:E,alt:"Hike Thumbnail"})}),Object(a.jsxs)("div",{className:v.a.tourDesc,children:[Object(a.jsx)("h2",{className:v.a.tourTitle,children:s.a.t(null===u||void 0===u?void 0:u.title)}),Object(a.jsx)("h3",{className:v.a.tourVersion,children:"".concat(s.a.t("hike_version")," ").concat(null===u||void 0===u?void 0:u.hikeVersion)}),Object(a.jsx)("div",{className:v.a.tourBody,dangerouslySetInnerHTML:{__html:s.a.t(null===u||void 0===u?void 0:u.description)}}),Object(a.jsxs)(p.a,{className:v.a.metaData,children:[Object(a.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:v.a.innerTabWrapper,children:[Object(a.jsx)("h3",{className:v.a.tourHeader,children:s.a.t("platform_version")}),Object(a.jsx)("div",{className:v.a.tourContent,children:null===u||void 0===u?void 0:u.platformVersion})]}),Object(a.jsxs)(m.a,{span:6,sm:24,xs:24,md:6,lg:6,className:v.a.innerTabWrapper,children:[Object(a.jsx)("h3",{className:v.a.tourHeader,children:s.a.t("categories")}),Object(a.jsx)("ul",{className:v.a.tourContent,children:null===u||void 0===u||null===(t=u.category)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)("li",{children:e})}))})]})]}),Object(a.jsx)("h3",{className:v.a.tourTime,children:"".concat(s.a.t("step",{count:null===u||void 0===u?void 0:u.cards})," / ").concat(s.a.t(null===u||void 0===u?void 0:u.time))}),Object(a.jsx)("div",{className:v.a.tourDetails,dangerouslySetInnerHTML:{__html:s.a.t(null===u||void 0===u?void 0:u.details)}})]})]}),Object(a.jsx)("div",{className:v.a.startBtn,children:Object(a.jsx)(b.a,{title:s.a.t("start"),type:"blue",onClick:function(e){return B(e)}})})]})]})}},sz4E:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",breadcrumbWrapper:"_3IBeg"}},t3Un:function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return n}));var a=o("8SHQ"),n=function(t,o){var n=(e&&e.env?"l10n":void 0)||a.a,r="http://localhost:".concat(a.c,"/api/zip/").concat(t),i="https://raw.githubusercontent.com/".concat(a.d,"/").concat(a.b,"/").concat(n,"/public/contents/").concat(o,"/zips/").concat(t);return a.f?r:i}}).call(this,o("8oxB"))},wzuP:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(o("QbLZ")),n=p(o("iCc5")),r=p(o("V7oC")),i=p(o("FYw3")),l=p(o("mRg0")),s=u(o("q1tI")),c=u(o("17x9"));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(o[a[n]]=e[a[n]])}return o},m=function(e){function t(){return(0,n.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,o=e.separator,n=e.children,r=d(e,["prefixCls","separator","children"]),i=void 0;return i="href"in this.props?s.createElement("a",(0,a.default)({className:t+"-link"},r),n):s.createElement("span",(0,a.default)({className:t+"-link"},r),n),n?s.createElement("span",null,i,s.createElement("span",{className:t+"-separator"},o)):null}}]),t}(s.Component);t.default=m,m.__ANT_BREADCRUMB_ITEM=!0,m.defaultProps={prefixCls:"ant-breadcrumb",separator:"/"},m.propTypes={prefixCls:c.string,separator:c.oneOfType([c.string,c.element]),href:c.string},e.exports=t.default},zk85:function(e,t,o){e.exports={poppinsRegular:'"Poppins Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsMedium:'"Poppins Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',poppinsLight:'"Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabRegular:'"RobotoSlab Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabLight:'"RobotoSlab Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',robotoSlabBold:'"RobotoSlab Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',bodyBg:"#f9fafc",dbxBg:"#704C9F",navText:"#9094a5",secondaryText:"#8A96AF",divider:"rgba(48, 53, 63, 0.1)",assetBg:"#f0f0f0",optionsText:"#646E83",activeColor:"#297BFF",postBackground:"#8394E0",userActive:"#6E86E7",filterActive:"#73DB9B",filterIconBg:"#64C489",titleLightBlue:"#6e87f5",titleRed:"#EE6B6B",titleText:"#30353F",konyButton:"_1zJKe",normal:"_3Ekqs",active:"_2LeOg",filter:"Orjkm",selected:"_2bLYr",downloadIcon:"_3AqOe",codeIcon:"_2n6ua",action:"I6ToG",download:"_2oNV4",blue:"nUQSe",red:"_1xDUH",lightBlue:"_1g8e2",skyBlue:"UHdfC",lightGreen:"_2T8V3",appPreview:"_2Hptp",featured:"_16x0J",filterCloseIcon:"shvlF"}}}]);