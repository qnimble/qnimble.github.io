(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{117:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r}));var n=a(0),o=a.n(n),r=function(e){var t=e.children,a=e.width,n=void 0===a?"6":a,r=e.align,c=void 0===r?"left":r;return o.a.createElement("div",{className:"col col--"+n+" text--"+c},t)},c=function(e){var t=e.children;return o.a.createElement("div",{className:"row"},t)}},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=a(0),c=a.n(r),l=a(103),s=(a(105),a(117),a(106),a(101),function(){var e=Object(r.useState)({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""}),t=e[0],a=e[1],n=Object(r.useState)(""),o=n[0],l=n[1],s=Object(r.useState)("hidden"),i=s[0],m=s[1],u=function(e){var n;a(Object.assign({},t,((n={})[e.target.name]=e.target.value,n)))},d=function(){console.log(t),fetch("https://processmail.qnimble.workers.dev/",{method:"POST",headers:{"Client-Key":"6eaa35b6-62c6-403e-8ac5-8ebd72abf77c","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){200==e.status?(console.log("got Response without error,"),l("Thank you for your submission. We will get back to your shortly"),m("alert--success"),a({J3K5N6P7R9:"",YG2J3K4N6P:"",DXFYGZJ3K4:"",UCVDWFYGZH:"",SATCVDWEY9:""})):400==e.status||401==e.status?e.json().then((function(t){console.log("Got "+e.status+" message: "+t.message),l("Error: "+t.message),m("alert--warning")})):(console.log("Unknown Error with code "+e.status),l("Am unknown error occured with the submission. Error code is "+e.status),m("alert--warning"))})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"container contact"},c.a.createElement("div",{className:"admonition-heading admonition-content"},c.a.createElement("div",{className:i+" alert"},o)),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(),console.log("Send email")}},c.a.createElement("div",{className:"J3K5N6P7R9"},c.a.createElement("label",{forhtml:"J3K5N6P7R9"},"Name"),c.a.createElement("input",{type:"text",name:"J3K5N6P7R9",placeholder:"Name",onChange:u,value:t.J3K5N6P7R9||"",required:!0})),c.a.createElement("div",{className:"SATCVDWEY9"},c.a.createElement("label",{forhtml:"SATCVDWEY9"},"23Your Email Address"),c.a.createElement("input",{type:"email",name:"SATCVDWEY9",placeholder:"Email",onChange:u,value:t.SATCVDWEY9||""})),c.a.createElement("div",{className:"YG2J3K4N6P"},c.a.createElement("label",{forhtml:"YG2J3K4N6P"},"Your Email Address"),c.a.createElement("input",{type:"email",name:"YG2J3K4N6P",placeholder:"Email",onChange:u,value:t.YG2J3K4N6P||""})),c.a.createElement("div",{className:"DXFYGZJ3K4"},c.a.createElement("label",{forhtml:"DXFYGZJ3K4"},"Your Email Address"),c.a.createElement("input",{type:"email",name:"DXFYGZJ3K4",placeholder:"Email",onChange:u,value:t.DXFYGZJ3K4||""})),c.a.createElement("div",{className:"UCVDWFYGZH"},c.a.createElement("label",{forhtml:"UCVDWFYGZH"},"Message"),c.a.createElement("textarea",{type:"text",name:"UCVDWFYGZH",placeholder:"Message",onChange:u,value:t.UCVDWFYGZH||"",required:!0})),c.a.createElement("input",{type:"submit",value:"Submit"})))}),i={},m={type:"mdx",permalink:"/contact",source:"@site/src/pages/contact.md"},u=[],d={toc:u};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"contact-qnimble"},"Contact ",Object(l.b)("em",{parentName:"h1"},"qNimble")),Object(l.b)("p",null,"Send us a message with the form below and we will get back to you shortly. Thank you."),Object(l.b)(s,{mdxType:"ContactForm"}))}p.isMDXComponent=!0}}]);