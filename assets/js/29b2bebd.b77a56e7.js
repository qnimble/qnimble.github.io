(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(m,l(l({ref:t},u),{},{components:a})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(16),r=a(114);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var s=a.startsWith(t)?a:t+a.replace(/^\//,"");return u?e+s:s}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},114:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},115:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=function(e){var t=e.children,a=e.width,n=void 0===a?"6":a,o=e.align,i=void 0===o?"left":o;return r.a.createElement("div",{className:"col col--"+n+" text--"+i},t)},i=function(e){var t=e.children;return r.a.createElement("div",{className:"row"},t)}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(4),r=a(0),o=a.n(r),i=function(e){var t=e.children;return o.a.createElement("div",{className:"baloo"},t)},l=function(e){var t=e.children;return o.a.createElement("div",{className:"baloo thick"},t)};o.a.Component},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bnc-s1-5ef6fae4b94e653c43db2e14ad0aa5ce.jpg"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(104)),i=(a(109),a(115)),l=(a(123),a.p,{id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."}),c={unversionedId:"Quarto",id:"Quarto",isDocsHomePage:!1,title:"qNimble Quarto A Digital Brain for the Analog World\u2122",description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications.",source:"@site/Quarto/quarto.md",sourceDirName:".",slug:"/",permalink:"/Quarto/",version:"current",sidebar_label:"Overview",frontMatter:{id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."},sidebar:"quarto_main_sidebar",next:{title:"Specifications",permalink:"/Quarto/Specifications"}},u=[{value:"At a glance",id:"at-a-glance",children:[]},{value:"How does the <em>qNimble Quarto</em> work?",id:"how-does-the-qnimble-quarto-work",children:[]},{value:"How does the  <em>qNimble Quarto</em> compare to a...",id:"how-does-the--qnimble-quarto-compare-to-a",children:[{value:"USB approach",id:"usb-approach",children:[]},{value:"Traditional DAQ approach",id:"traditional-daq-approach",children:[]},{value:"FPGA approach",id:"fpga-approach",children:[]}]}],s={toc:u};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"quarto-a-digital-brain-for-the-analog-world"},Object(o.b)("em",{parentName:"h1"},"Quarto"),": A Digital Brain for the Analog World\u2122"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"qNimble Quarto")," is a multi-function data acquisition platform that is easy to use, but incredibly powerful. Low latency, 1 MSPS, 16 bit-ADC's and DAC's are directly accessible with a blazing fast 500 MHz CPU dedicated to running your code. The CPU can read or write analog signals in just a few clock cycles ~1us of latency. The ",Object(o.b)("em",{parentName:"p"},"Quarto")," is Arduino\u2122-compatible, so you can program it in the Arduino IDE, or your favorite C/C++ environment.  You can build a 100kHz bandwidth PID servo control system or custom digital filters with just a few lines of code. What will you build?"),Object(o.b)("img",{className:"center",src:"/img/Quarto-FrontImage-n1-s4.jpg"}),Object(o.b)("h2",{id:"at-a-glance"},"At a glance"),Object(o.b)(i.b,{mdxType:"Row"},Object(o.b)(i.a,{mdxType:"Column"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Hardware")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"4 Analog Inputs (\xb110V, \xb15V, \xb12.5V, \xb11.25V @1MSPS, 16 bit)"),Object(o.b)("li",{parentName:"ul"},"4 Analog Outputs (\xb110V, 1MSPS, 16 bit)"),Object(o.b)("li",{parentName:"ul"},"500 MHz ARM M7 Processor"),Object(o.b)("li",{parentName:"ul"},"8 GPIO pins, 2 Triggers"),Object(o.b)("li",{parentName:"ul"},"32 MB RAM, 8 MB Flash"))),Object(o.b)(i.a,{mdxType:"Column"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Key Capabilities")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"100 kHz PID Servo"),Object(o.b)("li",{parentName:"ul"},"<3\u03bcs latency from ADC read to DAC updating"),Object(o.b)("li",{parentName:"ul"},"Floating-point math support"),Object(o.b)("li",{parentName:"ul"},"Arduino\u2122 Compatible"),Object(o.b)("li",{parentName:"ul"},"Open Source")))),Object(o.b)("h2",{id:"how-does-the-qnimble-quarto-work"},"How does the ",Object(o.b)("em",{parentName:"h2"},"qNimble Quarto")," work?"),Object(o.b)(i.b,{mdxType:"Row"},Object(o.b)(i.a,{mdxType:"Column"},Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:a(156).default}))),Object(o.b)(i.a,{mdxType:"Column"},Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"Quarto")," combines four high-speed, low-latency 16-bit DACs and ADCs with a powerful CPU and an FPGA. The FPGA handles all the communication with the DAC and ADC and we created InstraWrite\u2122 to enable the CPU to read from or write to the FPGA immediately. Communication with the ADC and DAC never slows down the CPU.  The entire signal chain is designed for low latency (~1\u03bcs) to support high-bandwidth servoing and filtering so you can respond to your data quickly. With hardware support for floating point math, you can do advanced math calculations on your data in real-time."))),Object(o.b)("h2",{id:"how-does-the--qnimble-quarto-compare-to-a"},"How does the  ",Object(o.b)("em",{parentName:"h2"},"qNimble Quarto")," compare to a..."),Object(o.b)("h3",{id:"usb-approach"},"USB approach"),Object(o.b)("p",null,"Data-acquisition over USB is simple and often inexpensive. While not universal, these solution often have 12bit or fewer ADC's and DAC's and limited sample rates. But any USB approach will have very high latency and timing jitter. The USB protocol is designed for moderate latency or high bandwidth, but not both. The round trip time from the device, to your computer over USB and back again can be take many milliseconds. If you just want to generate a fixed analog output or stream analog data, this can be a great approach. But if you want to interact with your data quickly, you will need a different approach."),Object(o.b)("h3",{id:"traditional-daq-approach"},"Traditional DAQ approach"),Object(o.b)("p",null," A traditional data-acquisition (DAQ) approach has dedicated hardware that either runs on your computer or on a dedicated chassis. Modern computers are amazing, but they are not designed for low-latency (~1us) response times. Even when running a Real-Time OS, getting predictable latency under 10us can be challenging. Additionally, the complexity of running a full operating system adds cost and complexity to these approaches. "),Object(o.b)("h3",{id:"fpga-approach"},"FPGA approach"),Object(o.b)("p",null,"When you want the lowest latency connection to an ADC or a DAC, go with an FPGA. It can handle ADC data sampling at 100M samples per second and process the data in well under 100ns. But such power comes with a few drawbacks. In addition to the higher cost of an FPGA,  programming one has its own challenges:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Learning Curve")," -  Programming an FPGA is complex and takes a while to learn. Troubleshooting an FPGA is even harder."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Iteration Time")," -  Compile times on an FPGA can be tens of minutes or even hours. That really slows down how fast you can try and iterate your ideas."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Math")," -  Floating point math is very computationally expensive and usually calculations must be done with integers.")),Object(o.b)("p",null,"If you aren't programming an FPGA, then you are using someone else's FPGA program. This solves many of the above issues, but these approaches tend to be expensive and limit you  to the features and functionality they programmed into the FPGA."),Object(o.b)("h4",{id:"summary"},"Summary"),Object(o.b)("p",null,"The Quarto approach gives you the speed and power of an FPGA without its complexity or expense. You can program your custom code in C++ with the easy-to-use Arduino\u2122 IDE without worrying about FPGA design or avoiding floating point math. Your code is running directly on the CPU (no OS) to maximize simplicity and speed."))}d.isMDXComponent=!0}}]);