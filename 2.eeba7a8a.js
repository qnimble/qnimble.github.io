/*! For license information please see 2.eeba7a8a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{106:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(11),o=a(119),i=a(10),l=Object(n.createContext)({collectLink:function(){}}),s=a(108),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,k=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),E=Object(s.b)().withBaseUrl,j=Object(n.useContext)(l),y=m||v,w=Object(o.a)(y),C=null==y?void 0:y.replace("pathname://",""),_=void 0!==C?(a=C,O&&function(e){return e.startsWith("/")}(a)?E(a):a):void 0,N=Object(n.useRef)(!1),S=f?c.e:c.c,T=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&w&&window.docusaurus.prefetch(_),function(){T&&d&&d.disconnect()}}),[_,T,w]);var L=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,I=!_||!w||L;return _&&w&&!L&&!p&&j.collectLink(_),I?r.a.createElement("a",Object.assign({href:_},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},k)):r.a.createElement(S,Object.assign({},k,{onMouseEnter:function(){N.current||(window.docusaurus.preload(_),N.current=!0)},innerRef:function(e){var t,a;T&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(_)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:_||""},f&&{isActive:b,activeClassName:h}))}},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(104),o=a(64),i=a.n(o);var l=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:i.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(105),u=a(133),d=a(65),f=a.n(d);var m=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var i=o.content,l=o.backgroundColor,d=o.textColor,m=o.isCloseable;return!i||m&&a?null:r.a.createElement("div",{className:f.a.announcementBar,style:{backgroundColor:l,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(f.a.announcementBarContent,(e={},e[f.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:f.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},v=a(3),h=function(){return null},b=a(149),p=a.n(b),g=a(23),O=a(66),k=a.n(O),E=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.dark),style:a},t)},j=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(k.a.toggle,k.a.light),style:a},t)},y=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,i=Object(g.default)().isClient;return r.a.createElement(p.a,Object(v.a)({disabled:!i,icons:{checked:r.a.createElement(E,{icon:a,style:n}),unchecked:r.a.createElement(j,{icon:c,style:o})}},e))},w=a(115),C=a(117),_=a(135),N=function(e){var t=Object(C.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),l=i[0],s=i[1],u=Object(n.useState)(0),d=u[0],f=u[1],m=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(_.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);l&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;l&&a>=l?c(!1):a+r<n&&c(!0),s(a)}}),[l,d,o]),Object(n.useEffect)((function(){e&&l&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},S=a(136),T=a(137),L=a(7),I=a(118);function x(e){var t=e.mobile,a=Object(L.a)(e,["mobile"]),n=Object(g.default)(),c=n.siteConfig.baseUrl,o=n.i18n,i=o.defaultLocale,l=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(C.useLocation)().pathname;function f(e){return u[e].label}var m=l===i?c:c.replace("/"+l+"/","/"),h=d.replace(c,"");var b=s.map((function(e){var t=""+function(e){return e===i?""+m:""+m+e+"/"}(e)+h;return{isNavLink:!0,label:f(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),p=t?"Languages":f(l);return r.a.createElement(I.a,Object(v.a)({},a,{mobile:t,label:p,items:b}))}var B={default:function(){return I.a},localeDropdown:function(){return x},docsVersion:function(){return a(154).default},docsVersionDropdown:function(){return a(155).default},doc:function(){return a(156).default}};function D(e){var t=e.type,a=Object(L.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=B[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var P=a(139),A=a(138),M=a(68),V=a.n(M),R="right";var F=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,i=o.items,l=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,f=Object(n.useState)(!1),m=f[0],b=f[1],p=Object(n.useState)(!1),g=p[0],O=p[1],k=Object(w.a)(),E=k.isDarkTheme,j=k.setLightTheme,C=k.setDarkTheme,_=N(l),L=_.navbarRef,I=_.isNavbarVisible;Object(S.a)(m);var x=Object(n.useCallback)((function(){b(!0)}),[b]),B=Object(n.useCallback)((function(){b(!1)}),[b]),M=Object(n.useCallback)((function(e){return e.target.checked?C():j()}),[j,C]),F=Object(T.a)();Object(n.useEffect)((function(){F===T.b.desktop&&b(!1)}),[F]);var U=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:R)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:R)}))}}(i),X=U.leftItems,H=U.rightItems;return r.a.createElement("nav",{ref:L,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":m},e[V.a.navbarHideable]=l,e[V.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=i&&0!==i.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},r.a.createElement(A.a,null)),r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[V.a.hideLogoText]=g,t))}),X.map((function(e,t){return r.a.createElement(D,Object(v.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},H.map((function(e,t){return r.a.createElement(D,Object(v.a)({},e,{key:t}))})),!d&&r.a.createElement(y,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:E,onChange:M}),r.a.createElement(h,{handleSearchBarToggle:O,isSearchBarExpanded:g}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(P.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:B}),!d&&m&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:E,onChange:M})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.a.createElement(D,Object(v.a)({mobile:!0},e,{onClick:B,key:t}))})))))))},U=a(110),X=a(10),H="light",G="dark",W=function(e){return e===G?G:H},Y=function(){return X.a.canUseDOM?W(document.documentElement.getAttribute("data-theme")):H},K=function(e){try{localStorage.setItem("theme",W(e))}catch(t){console.error(t)}},z=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(Y),c=r[0],o=r[1],i=Object(n.useCallback)((function(){o(H),K(H)}),[]),l=Object(n.useCallback)((function(){o(G),K(G)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",W(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(W(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?G:H)}))}),[]),{isDarkTheme:c===G,setLightTheme:i,setDarkTheme:l}},J=a(123);var q=function(e){var t=z(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(J.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},Q="docusaurus.tab.",Z=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(Q))e[n.substring(Q.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},$="docusaurus.announcement.dismiss",ee="docusaurus.announcement.id",te=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem($,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(ee);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(ee,t),n&&localStorage.setItem($,"false"),(n||"false"===localStorage.getItem($))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},ae=a(134);var ne=function(e){var t=Z(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=te(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(ae.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)};function re(e){var t=e.children;return r.a.createElement(q,null,r.a.createElement(ne,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var ce=a(24),oe=a(108);function ie(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(ce.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}function le(e){var t=Object(g.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,i=o.image,l=o.metadatas,u=a.url,d=e.title,f=e.description,m=e.image,h=e.keywords,b=e.permalink,p=e.searchMetadatas,O=Object(s.useTitleFormatter)(d),k=m||i,E=Object(oe.a)(k,{absolute:!0}),j=Object(oe.a)(c),y=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,null,r.a.createElement("html",{lang:y}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),c&&r.a.createElement("link",{rel:"shortcut icon",href:j}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),h&&h.length&&r.a.createElement("meta",{name:"keywords",content:h.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(ie,Object(v.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},p)),r.a.createElement(ce.a,null,l.map((function(e,t){return r.a.createElement("meta",Object(v.a)({key:"metadata_"+t},e))}))))}a(69);var se=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(70);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return se(),r.a.createElement(re,null,r.a.createElement(le,e),r.a.createElement(l,null),r.a.createElement(m,null),r.a.createElement(F,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(U.a,null))}},115:function(e,t,a){"use strict";var n=a(0),r=a(123);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},118:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),i=a(104),l=a(106),s=a(108),u=a(117),d=a(105);function f(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,i=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,v=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=Object(s.a)(c),b=Object(s.a)(t),p=Object(s.a)(i,{forcePrependBaseUrl:!0});return o.a.createElement(l.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:m?p:i}:Object.assign({isNavLink:!0,activeClassName:f,to:h},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),v),u)}function m(e){var t=e.items,a=e.position,l=e.className,s=Object(r.a)(e,["items","position","className"]),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),v=m[0],h=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":v})},o.a.createElement(f,Object(n.a)({className:b(l)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,i=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:a},o.a.createElement(f,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:b(c,!0)},i)))})))):o.a.createElement(f,Object(n.a)({className:b(l)},s))}function v(e){var t,a,l=e.items,s=e.className,m=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,b=Object(c.useState)((function(){var e;return null===(e=!(null!=l&&l.some((function(e){return Object(d.isSamePath)(e.to,h)}))))||void 0===e||e})),p=b[0],g=b[1],O=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};if(!l)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(n.a)({className:O(s)},m)));var k=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(a=v.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(i.a)("menu__list-item",{"menu__list-item--collapsed":p})},o.a.createElement(f,Object(n.a)({role:"button",className:O(s,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:p?void 0:k}},l.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(n.a)({activeClassName:"menu__link--active",className:O(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?v:m;return o.a.createElement(c,n)}},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},133:function(e,t,a){"use strict";var n=a(0),r=a(134);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},135:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],i=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",i,e),function(){return window.removeEventListener("scroll",i,e)}}),t),r}},136:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},138:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,l=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:l,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},139:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),i=a(106),l=a(104),s=a(23),u=a(115),d=a(67),f=a.n(d),m=function(e){var t=Object(s.default)().isClient,a=Object(u.a)().isDarkTheme,c=e.sources,i=e.className,d=e.alt,m=void 0===d?"":d,v=Object(r.a)(e,["sources","className","alt"]),h=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,h.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:m,className:Object(l.a)(f.a.themedImage,f.a["themedImage--"+e],i)},v))})))},v=a(108),h=a(105),b=a(119);t.a=function(e){var t=Object(s.default)().isClient,a=Object(h.useThemeConfig)().navbar,c=a.title,l=a.logo,u=void 0===l?{src:""}:l,d=e.imageClassName,f=e.titleClassName,p=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(v.a)(u.href||"/"),O=u.target?{target:u.target}:Object(b.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},k={light:Object(v.a)(u.src),dark:Object(v.a)(u.srcDark||u.src)};return o.a.createElement(i.a,Object(n.a)({to:g},p,O),u.src&&o.a.createElement(m,{key:t,className:d,sources:k,alt:u.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:f},c))}},149:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),i=f(a(150)),l=f(a(1)),s=f(a(151)),u=f(a(152)),d=a(153);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},150:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},154:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),i=a(118),l=a(114),s=a(105);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(l.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,v=Object(l.useLatestVersion)(u),h=null!==(t=null!=f?f:m)&&void 0!==t?t:v,b=null!=a?a:h.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return o.a.createElement(i.a,Object(n.a)({},d,{label:b,to:p}))}},155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),i=a(118),l=a(114),s=a(105),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=Object(l.useActiveDocContext)(d),p=Object(l.useVersions)(d),g=Object(l.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),k=O.preferredVersion,E=O.savePreferredVersionName;var j=null!==(t=null!==(a=b.activeVersion)&&void 0!==a?a:k)&&void 0!==t?t:g,y=c?"Versions":j.label,w=c?void 0:u(j).path;return o.a.createElement(i.a,Object(n.a)({},h,{mobile:c,label:y,to:w,items:function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){E(e.name)}}})),t=[].concat(m,e,v);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},156:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),i=a(118),l=a(114),s=a(104),u=a(105);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,v=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=Object(l.useActiveDocContext)(m),b=h.activeVersion,p=h.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(l.useLatestVersion)(m),k=null!==(t=null!=b?b:g)&&void 0!==t?t:O,E=k.docs.find((function(e){return e.id===c}));if(!E)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+k.name+".\nAvailable docIds=\n- "+k.docs.join("\n- "));return o.a.createElement(i.a,Object(n.a)({exact:!0},v,{className:Object(s.a)(v.className,(a={},a[d]=p&&p.sidebar===E.sidebar,a)),label:null!=f?f:E.id,to:E.path}))}}}]);