"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[973],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8896:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=n(7462),a=n(3366),o=n(7294),c=n(3905),l=(n(4996),n(2365),n(5186),function(){var e=(0,o.useState)({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""}),t=e[0],n=e[1],r=(0,o.useState)(""),a=r[0],c=r[1],l=(0,o.useState)("hidden"),i=l[0],u=l[1],s=function(e){var r;n(Object.assign({},t,((r={})[e.target.name]=e.target.value,r)))},m=function(){console.log(t),fetch("https://processmail.qnimble.workers.dev/",{method:"POST",headers:{"Client-Key":"6eaa35b6-62c6-403e-8ac5-8ebd72abf77c","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status?(console.log("got Response without error,"),c("Thank you for your submission. We will get back to your shortly"),u("alert--success"),n({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""})):400==e.status||401==e.status?e.json().then((function(t){console.log("Got "+e.status+" message: "+t.message),c("Error: "+t.message),u("alert--warning")})):(console.log("Unknown Error with code "+e.status),c("Am unknown error occured with the submission. Error code is "+e.status),u("alert--warning"))})).catch((function(e){console.log(e)}))};return o.createElement("div",{className:"container contact"},o.createElement("div",{className:"admonition-heading admonition-content"},o.createElement("div",{className:i+" alert"},a)),o.createElement("form",{onSubmit:function(e){e.preventDefault(),m(),console.log("Send email")}},o.createElement("div",{className:"J3K5N6P7R9"},o.createElement("label",{forhtml:"J3K5N6P7R9"},"Name"),o.createElement("input",{type:"text",name:"J3K5N6P7R9",placeholder:"Name",onChange:s,value:t.J3K5N6P7R9||"",required:!0})),o.createElement("div",{className:"SATCVDWEY9"},o.createElement("label",{forhtml:"SATCVDWEY9"},"23Your Email Address"),o.createElement("input",{type:"email",name:"SATCVDWEY9",placeholder:"Email",onChange:s,value:t.SATCVDWEY9||""})),o.createElement("div",{className:"YG2J3K4N6P"},o.createElement("label",{forhtml:"YG2J3K4N6P"},"Your Email Address"),o.createElement("input",{type:"email",name:"YG2J3K4N6P",placeholder:"Email",onChange:s,value:t.YG2J3K4N6P||""})),o.createElement("div",{className:"DXFYGZJ3K4"},o.createElement("label",{forhtml:"DXFYGZJ3K4"},"Your Email Address"),o.createElement("input",{type:"email",name:"DXFYGZJ3K4",placeholder:"Email",onChange:s,value:t.DXFYGZJ3K4||""})),o.createElement("div",{className:"UCVDWFYGZH"},o.createElement("label",{forhtml:"UCVDWFYGZH"},"Message"),o.createElement("textarea",{type:"text",name:"UCVDWFYGZH",placeholder:"Message",onChange:s,value:t.UCVDWFYGZH||"",required:!0})),o.createElement("input",{type:"submit",value:"Submit"})))}),i=["components"],u={},s="Contact *qNimble*",m={type:"mdx",permalink:"/Contact",source:"@site/src/pages/Contact.md"},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"contact-qnimble"},"Contact ",(0,c.kt)("em",{parentName:"h1"},"qNimble")),(0,c.kt)("p",null,"Send us a message using the form below and we will get back to you shortly. Or can you call us at (720)-741-1556."),(0,c.kt)(l,{mdxType:"ContactForm"}))}d.isMDXComponent=!0},2365:function(e,t,n){n.d(t,{X2:function(){return o},sg:function(){return a},h4:function(){return c},Z6:function(){return l}});var r=n(7294),a=function(e){var t=e.children,n=e.width,a=void 0===n?"6":n,o=e.align,c=void 0===o?"left":o;return r.createElement("div",{className:"col col--"+a+" text--"+c},t)},o=function(e){var t=e.children;return r.createElement("div",{className:"row"},t)},c=function(e){var t=e.children;return r.createElement("h1",null,t)},l=function(e){var t=e.children;return r.createElement("div",{className:"specs"},t)}}}]);