(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(131);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(142);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var u=r(143);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return u.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return u.DEFAULT_SEARCH_TAG}});var i=r(132);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var a=r(147);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return a.isSamePath}});var s=r(148);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var c=r(149);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return c.usePluralForm}});var l=r(150);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return l.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return l.useDocsPreferredVersionByPluginId}});var f=r(133);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return f.DocsPreferredVersionContextProvider}})},107:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},108:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n),u=/{\w+}/g,i="{}";function a(e,t){var r=[],n=e.replace(u,(function(e){var n=e.substr(1,e.length-2),u=null==t?void 0:t[n];if(void 0!==u){var a=o.a.isValidElement(u)?u:String(u);return r.push(a),i}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(i).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split(i).reduce((function(e,t,n){return[].concat(e,[o.a.createElement(o.a.Fragment,{key:n},t,r[n])])}),[])}function s(e){return a(e.children,e.values)}var c=r(26);function l(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function f(e,t){var r,n=e.message;return a(null!==(r=l({message:n,id:e.id}))&&void 0!==r?r:n,t)}function d(e){var t,r=e.children,n=e.id,u=e.values,i=null!==(t=l({message:r,id:n}))&&void 0!==t?t:r;return o.a.createElement(s,{values:u},i)}},109:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),v=n,g=f["".concat(i,".").concat(v)]||f[v]||d[v]||u;return r?o.a.createElement(g,a(a({ref:t},c),{},{components:r})):o.a.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,i=new Array(u);i[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<u;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},111:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(125);function u(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var u=void 0===n?{}:n,i=u.forcePrependBaseUrl,a=void 0!==i&&i,s=u.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(u,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},113:function(e,t,r){try{e.exports=r(144)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},125:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},131:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var o=n(r(16));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},132:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(113);t.isDocsPluginEnabled=!!n.useAllDocsData},133:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var a=u(r(0)),s=r(131),c=r(132),l=r(113),f=i(r(151));function d(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=f.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function v(){var e=l.useAllDocsData(),t=s.useThemeConfig().docs.versionPersistence,r=a.useMemo((function(){return Object.keys(e)}),[e]),n=a.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),o=n[0],u=n[1];return a.useEffect((function(){u(d({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[o,a.useMemo((function(){return{savePreferredVersion:function(e,r){f.default.save(e,t,r),u((function(t){var n;return Object.assign(Object.assign({},t),((n={})[e]={preferredVersionName:r},n))}))}}}),[u])]}var g=a.createContext(null);function p(e){var t=e.children,r=v();return a.default.createElement(g.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return c.isDocsPluginEnabled?a.default.createElement(p,null,t):a.default.createElement(a.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=a.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},142:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var o=n(r(16)),u=r(24);t.useAlternatePageUtils=function(){var e=o.default(),t=e.siteConfig,r=t.baseUrl,n=t.url,i=e.i18n,a=i.defaultLocale,s=i.currentLocale,c=u.useLocation().pathname,l=s===a?r:r.replace("/"+s+"/","/"),f=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?n:"")+function(e){return e===a?""+l:""+l+e+"/"}(t)+f}}}},143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},144:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(24),o=r(145),u=r(146);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return u.getActivePlugin(r,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:u.getActiveVersion(r.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var r=t.useDocsData(e);return u.getLatestVersion(r)},t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveVersion(r,o)},t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveDocContext(r,o)},t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getDocVersionSuggestions(r,o)}},145:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o})),r.d(t,"useAllPluginInstancesData",(function(){return u})),r.d(t,"usePluginData",(function(){return i}));var n=r(16);function o(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var r=u(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},146:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(24);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,r){var o,u,i=t.getActiveVersion(e,r),a=null==i?void 0:i.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}},t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),u=o.activeVersion!==n;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:u?n:void 0}}},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},148:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var o=n(r(16));t.useTitleFormatter=function(e){var t=o.default().siteConfig,r=void 0===t?{}:t,n=r.title,u=r.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+n:n}},149:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var o=r(0),u=n(r(16)),i=["zero","one","two","few","many","other"];function a(e){return i.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:a(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl||!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:a(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),s}var t,r}),[e])}t.usePluralForm=function(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),u=r.pluralForms.indexOf(o);return n[Math.min(u,n.length-1)]}(r,t,e)}}}},150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(0),o=r(133),u=r(113),i=r(152);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),r=o.useDocsPreferredVersionContext(),a=r[0],s=r[1],c=a[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:n.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return"docs-preferred-version-"+e},o={save:function(e,t,r){"none"===t||window.localStorage.setItem(n(e),r)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(n(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(n(e))}};t.default=o},152:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_PLUGIN_ID",(function(){return n}));var n="default"}}]);