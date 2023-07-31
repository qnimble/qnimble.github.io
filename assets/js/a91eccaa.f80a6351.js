"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[7542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||k[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"ExternalClocks",title:"External Clocks",toc_max_heading_level:2},o=void 0,i={unversionedId:"Functions/ExternalClocks",id:"Functions/ExternalClocks",title:"External Clocks",description:'These functions require firmware version 1.32.52 or higher. You can check your firmware version with the Arduino example "Device Info" under the "Testing" category. If you have an earlier firmware revision, please contact qNimble to get upgrade instructions.',source:"@site/Quarto/Functions/ExternalClocks.md",sourceDirName:"Functions",slug:"/Functions/ExternalClocks",permalink:"/Quarto/Functions/ExternalClocks",draft:!1,tags:[],version:"current",frontMatter:{id:"ExternalClocks",title:"External Clocks",toc_max_heading_level:2},sidebar:"autoSideBar",previous:{title:"Digital I/O",permalink:"/Quarto/Functions/Digital"},next:{title:"LEDs",permalink:"/Quarto/Functions/LEDs"}},c={},s=[{value:"useExtClock",id:"useextclock",level:2},{value:"Example",id:"example",level:3},{value:"readExtClockEnabled",id:"readextclockenabled",level:2},{value:"readExtClockActive",id:"readextclockactive",level:2},{value:"Example",id:"example-1",level:3},{value:"useExtADCClock",id:"useextadcclock",level:2},{value:"Example",id:"example-2",level:3},{value:"readExtADCClockEnabled",id:"readextadcclockenabled",level:2},{value:"Example",id:"example-3",level:3}],u={toc:s},p="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Firmware Requirement",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'These functions require firmware version 1.32.52 or higher. You can check your firmware version with the Arduino example "Device Info" under the "Testing" category. If you have an earlier firmware revision, please ',(0,r.kt)("a",{parentName:"p",href:"/Contact"},"contact qNimble")," to get upgrade instructions.")),(0,r.kt)("p",null,"The following functions are available for configuring the clocking inside the ",(0,r.kt)("em",{parentName:"p"},"Quarto")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#useextclock"},"useExtClock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#readextclockenabled"},"readExtClockEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#readextclockactive"},"readExtClockActive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#useextadcclock"},"useExtADCClock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#readextadcclockenabled"},"readExtADCClockEnabled"))),(0,r.kt)("h2",{id:"useextclock"},"useExtClock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool useExtClock(bool active, uint8_t trigger_pin);\nbool useExtClock(bool active);\n")),(0,r.kt)("p",null,"This function enables or disables using an external 10 MHz clock to generate all the clocks inside the ",(0,r.kt)("em",{parentName:"p"},"Quarto"),". The external clock input must be on either trigger 1 or triggre 2 and must be at a frequency of 10 MHz (within a few kHz).  If the clock input is not present or the frequency not correct, the ",(0,r.kt)("em",{parentName:"p"},"Quarto")," will use its internal 10 MHz reference to generating all timing.  The function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"readExtClockEnabled")," function. The function takes the following arguments: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"active"))," Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to activate external clock, set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to disable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"trigger_pin"))," Optional argument, default is to use trigger 1. Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to use trigger 1 and ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," to use trigger 2.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"useExtClock(true,2)  //Use External 10 MHz Clock from Trigger 2 to drive all Quarto clocks\nuseExtClock(true);  //Use External 10 MHz Clock from Trigger 1 to drive all Quarto clocks\nuseExtClock(false);  //Use Internal 10 MHz Clock 2 to drive all Quarto clocks\n")),(0,r.kt)("h2",{id:"readextclockenabled"},"readExtClockEnabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool readExtClockEnabled(void);\n")),(0,r.kt)("p",null,"This function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the external clock is enabled and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if it is not active."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'bool status = readExtClockEnabled();\nif (status) {\n  Serial.print("External Clock Enabled\\n");\n} else {\n  Serial.print("External Clock Not Enabled\\n");\n}\n')),(0,r.kt)("h2",{id:"readextclockactive"},"readExtClockActive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool readExtClockActive(void);\n")),(0,r.kt)("p",null,"This function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the external clock is enabled and active and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise. The external clock will can be enabled but inactive if the input clock is not within a few kHz or 10 MHz, in which case the external clock will be inactive and the ",(0,r.kt)("em",{parentName:"p"},"Quarto")," will use an internal 10 MHz reference."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'bool status = readExtClockActive();\nif (status) {\n    S.print("External Clock Enabled and Active\\n");\n} else {\n    S.print("External Clock is not Active\\n");\n}\n')),(0,r.kt)("h2",{id:"useextadcclock"},"useExtADCClock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool useExtADCClock(bool active, uint8_t trigger_pin);\nbool useExtADCClock(bool active);\n")),(0,r.kt)("p",null,"This function enables or disables using an external clock to drive the ADC acquisition. When disabled, the ",(0,r.kt)("em",{parentName:"p"},"Quarto")," uses an internal 1 MHz clock for timing all ADC measurements.  The function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"readExtClockEnabled")," function. The function takes the following arguments: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"active"))," Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to activate external clock, set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to disable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"trigger_pin"))," Optional argument, default is to use trigger 1. Set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to use trigger 1 and ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," to use trigger 2.")),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"useExtADCClock(true); //Use External Clock from Trigger 1 to trigger ADC measuments.\nuseExtADCClock(true,2); //Use External Clock from Trigger 2 to trigger ADC measuments.\nuseExtADCClock(false,2); //Use Internal 1 MHz Clock to trigger ADC measuments.\n")),(0,r.kt)("h2",{id:"readextadcclockenabled"},"readExtADCClockEnabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"bool readExtADCClockEnabled(void);\n")),(0,r.kt)("p",null,"This function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if an external clock is used to drive the ADC measurements and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the internal 1 MHz clock is used."),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'bool status = readExtADCClockEnabled();\nif (status) {\n    S.print("External Clock Drives ADC measurements\\n");\n} else {\n    S.print("Internal 1 MHz Clock Drives ADC measurements\\n");\n}\n')))}k.isMDXComponent=!0}}]);