(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=n(0),c=n.n(o),l=n(105),i=(n(110),n(115),n(111),n(106),function(){var e=Object(o.useState)({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""}),t=e[0],n=e[1],r=Object(o.useState)(""),a=r[0],l=r[1],i=Object(o.useState)("hidden"),s=i[0],u=i[1],m=function(e){var r;n(Object.assign({},t,((r={})[e.target.name]=e.target.value,r)))},p=function(){console.log(t),fetch("https://processmail.qnimble.workers.dev/",{method:"POST",headers:{"Client-Key":"6eaa35b6-62c6-403e-8ac5-8ebd72abf77c","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status?(console.log("got Response without error,"),l("Thank you for your submission. We will get back to your shortly"),u("alert--success"),n({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""})):400==e.status||401==e.status?e.json().then((function(t){console.log("Got "+e.status+" message: "+t.message),l("Error: "+t.message),u("alert--warning")})):(console.log("Unknown Error with code "+e.status),l("Am unknown error occured with the submission. Error code is "+e.status),u("alert--warning"))})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"container contact"},c.a.createElement("div",{className:"admonition-heading admonition-content"},c.a.createElement("div",{className:s+" alert"},a)),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p(),console.log("Send email")}},c.a.createElement("div",{className:"J3K5N6P7R9"},c.a.createElement("label",{forhtml:"J3K5N6P7R9"},"Name"),c.a.createElement("input",{type:"text",name:"J3K5N6P7R9",placeholder:"Name",onChange:m,value:t.J3K5N6P7R9||"",required:!0})),c.a.createElement("div",{className:"SATCVDWEY9"},c.a.createElement("label",{forhtml:"SATCVDWEY9"},"23Your Email Address"),c.a.createElement("input",{type:"email",name:"SATCVDWEY9",placeholder:"Email",onChange:m,value:t.SATCVDWEY9||""})),c.a.createElement("div",{className:"YG2J3K4N6P"},c.a.createElement("label",{forhtml:"YG2J3K4N6P"},"Your Email Address"),c.a.createElement("input",{type:"email",name:"YG2J3K4N6P",placeholder:"Email",onChange:m,value:t.YG2J3K4N6P||""})),c.a.createElement("div",{className:"DXFYGZJ3K4"},c.a.createElement("label",{forhtml:"DXFYGZJ3K4"},"Your Email Address"),c.a.createElement("input",{type:"email",name:"DXFYGZJ3K4",placeholder:"Email",onChange:m,value:t.DXFYGZJ3K4||""})),c.a.createElement("div",{className:"UCVDWFYGZH"},c.a.createElement("label",{forhtml:"UCVDWFYGZH"},"Message"),c.a.createElement("textarea",{type:"text",name:"UCVDWFYGZH",placeholder:"Message",onChange:m,value:t.UCVDWFYGZH||"",required:!0})),c.a.createElement("input",{type:"submit",value:"Submit"})))}),s={},u={type:"mdx",permalink:"/Contact",source:"@site/src/pages/Contact.md"},m=[],p={toc:m};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"contact-qnimble"},"Contact ",Object(l.b)("em",{parentName:"h1"},"qNimble")),Object(l.b)("p",null,"Send us a message with the form below and we will get back to you shortly. Thank you."),Object(l.b)(i,{mdxType:"ContactForm"}))}d.isMDXComponent=!0},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),o=function(e){var t=e.children,n=e.width,r=void 0===n?"6":n,o=e.align,c=void 0===o?"left":o;return a.a.createElement("div",{className:"col col--"+r+" text--"+c},t)},c=function(e){var t=e.children;return a.a.createElement("div",{className:"row"},t)}}}]);