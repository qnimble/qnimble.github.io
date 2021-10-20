"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[482],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},388:function(e,t,n){n.d(t,{Lc:function(){return i},H2:function(){return o}});var a=n(1721),r=n(7294),o=function(e){var t=e.children;return r.createElement("div",{className:"baloo"},t)},i=function(e){var t=e.children;return r.createElement("div",{className:"baloo thick"},t)};r.Component},2365:function(e,t,n){n.d(t,{X2:function(){return o},sg:function(){return r},h4:function(){return i},Z6:function(){return l}});var a=n(7294),r=function(e){var t=e.children,n=e.width,r=void 0===n?"6":n,o=e.align,i=void 0===o?"left":o;return a.createElement("div",{className:"col col--"+r+" text--"+i},t)},o=function(e){var t=e.children;return a.createElement("div",{className:"row"},t)},i=function(e){var t=e.children;return a.createElement("h1",null,t)},l=function(e){var t=e.children;return a.createElement("div",{className:"specs"},t)}},786:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(4996),n(2365)),l=n(388),u=(n.p,["components"]),s={id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."},c=void 0,d={unversionedId:"Quarto",id:"Quarto",isDocsHomePage:!1,title:"qNimble Quarto A Digital Brain for the Analog World\u2122",description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications.",source:"@site/Quarto/Quarto.md",sourceDirName:".",slug:"/",permalink:"/Quarto/",version:"current",frontMatter:{id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."},sidebar:"quarto_main_sidebar",next:{title:"Specifications",permalink:"/Quarto/Specifications"}},p=[{value:"At a glance",id:"at-a-glance",children:[]},{value:"How does the <em>qNimble Quarto</em> work?",id:"how-does-the-qnimble-quarto-work",children:[]},{value:"How does the  <em>qNimble Quarto</em> compare to a...",id:"how-does-the--qnimble-quarto-compare-to-a",children:[{value:"USB approach",id:"usb-approach",children:[]},{value:"Traditional DAQ approach",id:"traditional-daq-approach",children:[]},{value:"FPGA approach",id:"fpga-approach",children:[]}]},{value:"Summary",id:"summary",children:[]}],m={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.h4,{mdxType:"Header"},(0,o.kt)(l.H2,{mdxType:"Brand"},"Quarto"),": A Digital Brain for the Analog World\u2122"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"qNimble Quarto")," is a multi-function data acquisition platform that is easy to use, but incredibly powerful. Low latency, 1 MSPS, 16 bit-ADC's and DAC's are directly accessible with a blazing fast 500 MHz CPU dedicated to running your code. The CPU can read or write analog signals in just a few clock cycles ~1us of latency. The ",(0,o.kt)("em",{parentName:"p"},"Quarto")," is Arduino\u2122-compatible, so you can program it in the Arduino IDE, or your favorite C/C++ environment.  You can build a 100kHz bandwidth PID servo control system or custom digital filters with just a few lines of code. What will you build?"),(0,o.kt)("img",{className:"center",src:"/img/quarto-frontpanel.jpg",height:"200px"}),(0,o.kt)("h2",{id:"at-a-glance"},"At a glance"),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 Analog Inputs (\xb110V, \xb15V, \xb12.5V, \xb11.25V @1MSPS, 16 bit)"),(0,o.kt)("li",{parentName:"ul"},"4 Analog Outputs (\xb110V, 1MSPS, 16 bit)"),(0,o.kt)("li",{parentName:"ul"},"500 MHz ARM M7 Processor"),(0,o.kt)("li",{parentName:"ul"},"8 GPIO pins, 2 Triggers"),(0,o.kt)("li",{parentName:"ul"},"32 MB RAM, 8 MB Flash"))),(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Capabilities")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"100 kHz PID Servo"),(0,o.kt)("li",{parentName:"ul"},"<3\u03bcs latency from ADC read to DAC updating"),(0,o.kt)("li",{parentName:"ul"},"Floating-point math support"),(0,o.kt)("li",{parentName:"ul"},"Arduino\u2122 Compatible"),(0,o.kt)("li",{parentName:"ul"},"Open Source")))),(0,o.kt)("h2",{id:"how-does-the-qnimble-quarto-work"},"How does the ",(0,o.kt)("em",{parentName:"h2"},"qNimble Quarto")," work?"),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(9081).Z}))),(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Quarto")," combines four high-speed, low-latency 16-bit DACs and ADCs with a powerful CPU and an FPGA. The FPGA handles all the communication with the DAC and ADC and we created InstraWrite\u2122 to enable the CPU to read from or write to the FPGA immediately. Communication with the ADC and DAC never slows down the CPU.  The entire signal chain is designed for low latency (~1\u03bcs) to support high-bandwidth servoing and filtering so you can respond to your data quickly. With hardware support for double-precision floating point math, you can do advanced math calculations on your data in real-time."))),(0,o.kt)("h2",{id:"how-does-the--qnimble-quarto-compare-to-a"},"How does the  ",(0,o.kt)("em",{parentName:"h2"},"qNimble Quarto")," compare to a..."),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{width:"1",mdxType:"Column"}),(0,o.kt)(i.sg,{width:"11",mdxType:"Column"},(0,o.kt)("h3",{id:"usb-approach"},"USB approach"),(0,o.kt)("p",null,"Data-acquisition over USB is simple and often inexpensive. While not universal, these solutions usually have 12-bit or fewer ADC's and DAC's and limited sample rates. But any USB approach will have very high latency and timing jitter. The USB protocol is designed for moderate latency or high throughput, but not both. The round trip time from the device, to your computer over USB and back again can be take many milliseconds. If you just want to generate a low-bandwidth analog output or stream analog data back to the device, this can be a great solution. But if you want to interact with your data quickly, you will need a different approach."))),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{width:"1",mdxType:"Column"}),(0,o.kt)(i.sg,{width:"11",mdxType:"Column"},(0,o.kt)("h3",{id:"traditional-daq-approach"},"Traditional DAQ approach"),(0,o.kt)("p",null," A traditional data-acquisition (DAQ) approach has dedicated hardware that either runs on your computer or on a dedicated chassis. Modern computers are amazing, but they are not designed for low-latency (~1us) response times. Even when running a Real-Time OS, getting predictable latency under 10us can be challenging. Additionally, the complexity of running a full operating system adds cost and complexity to these approaches. "))),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{width:"1",mdxType:"Column"}),(0,o.kt)(i.sg,{width:"11",mdxType:"Column"},(0,o.kt)("h3",{id:"fpga-approach"},"FPGA approach"),(0,o.kt)("p",null,"When you want the lowest latency connection to an ADC or a DAC, go with an FPGA. It can handle ADC data sampling at 100M samples per second and process the data in well under 100ns. But such power comes with a few drawbacks. In addition to the higher cost of an FPGA,  programming one has its own challenges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Learning Curve")," -  Programming an FPGA is complex and takes a while to learn. Troubleshooting an FPGA is even harder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Iteration Time")," -  Compile times on an FPGA can be tens of minutes or even hours. That really slows down how fast you can try and iterate your ideas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Math")," -  Floating point math is very computationally expensive and usually calculations must be done with integers.")),(0,o.kt)("p",null,"If you aren't programming an FPGA, then you are using someone else's FPGA program. This solves many of the above issues, but these approaches tend to be expensive and limit you to the features and functionality they programmed into the FPGA."))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The Quarto approach gives you the speed and power of an FPGA without its complexity or expense. You can program your custom code in C++ with the easy-to-use Arduino\u2122 IDE without worrying about FPGA design or avoiding floating point math. Your code is running directly on the CPU (no OS) to maximize simplicity and speed."))}h.isMDXComponent=!0},9081:function(e,t,n){t.Z=n.p+"assets/images/bnc-s1-5ef6fae4b94e653c43db2e14ad0aa5ce.jpg"}}]);