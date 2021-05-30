(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[482],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3919:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){"use strict";a.d(t,{C:function(){return o},Z:function(){return i}});var n=a(2263),r=a(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+c:c}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},388:function(e,t,a){"use strict";a.d(t,{Lc:function(){return i},H2:function(){return o}});var n=a(3552),r=a(7294),o=function(e){var t=e.children;return r.createElement("div",{className:"baloo"},t)},i=function(e){var t=e.children;return r.createElement("div",{className:"baloo thick"},t)};r.Component},2365:function(e,t,a){"use strict";a.d(t,{X2:function(){return o},sg:function(){return r}});var n=a(7294),r=function(e){var t=e.children,a=e.width,r=void 0===a?"6":a,o=e.align,i=void 0===o?"left":o;return n.createElement("div",{className:"col col--"+r+" text--"+i},t)},o=function(e){var t=e.children;return n.createElement("div",{className:"row"},t)}},6645:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=(a(4996),a(2365)),l=(a(388),a.p,["components"]),u={id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."},s={unversionedId:"Quarto",id:"Quarto",isDocsHomePage:!1,title:"I test",description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications.",source:"@site/Quarto/Quarto.md",sourceDirName:".",slug:"/",permalink:"/Quarto/",version:"current",sidebar_label:"Overview",frontMatter:{id:"Quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA","NI","National Instruments","Alternative","DAQ","Data Acquisition","LabView","Lab View","FPGA","compactRIO","cRIO"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."},sidebar:"quarto_main_sidebar",next:{title:"Specifications",permalink:"/Quarto/Specifications"}},c=[{value:"At a glance",id:"at-a-glance",children:[]},{value:"How does the <em>qNimble Quarto</em> work?",id:"how-does-the-qnimble-quarto-work",children:[]},{value:"How does the  <em>qNimble Quarto</em> compare to a...",id:"how-does-the--qnimble-quarto-compare-to-a",children:[{value:"USB approach",id:"usb-approach",children:[]},{value:"Traditional DAQ approach",id:"traditional-daq-approach",children:[]},{value:"FPGA approach",id:"fpga-approach",children:[]},{value:"Summary",id:"summary",children:[]}]}],d={toc:c};function p(e){var t=e.components,u=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"hmmm"),(0,o.kt)("h1",{id:"quarto-a-digital-brain-for-the-analog-world"},(0,o.kt)("em",{parentName:"h1"},"Quarto"),": A Digital Brain for the Analog World\u2122"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"qNimble Quarto")," is a multi-function data acquisition platform that is easy to use, but incredibly powerful. Low latency, 1 MSPS, 16 bit-ADC's and DAC's are directly accessible with a blazing fast 500 MHz CPU dedicated to running your code. The CPU can read or write analog signals in just a few clock cycles ~1us of latency. The ",(0,o.kt)("em",{parentName:"p"},"Quarto")," is Arduino\u2122-compatible, so you can program it in the Arduino IDE, or your favorite C/C++ environment.  You can build a 100kHz bandwidth PID servo control system or custom digital filters with just a few lines of code. What will you build?"),(0,o.kt)("img",{className:"center",src:"/img/Quarto-FrontImage-n1-s4.jpg"}),(0,o.kt)("h2",{id:"at-a-glance"},"At a glance"),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 Analog Inputs (\xb110V, \xb15V, \xb12.5V, \xb11.25V @1MSPS, 16 bit)"),(0,o.kt)("li",{parentName:"ul"},"4 Analog Outputs (\xb110V, 1MSPS, 16 bit)"),(0,o.kt)("li",{parentName:"ul"},"500 MHz ARM M7 Processor"),(0,o.kt)("li",{parentName:"ul"},"8 GPIO pins, 2 Triggers"),(0,o.kt)("li",{parentName:"ul"},"32 MB RAM, 8 MB Flash"))),(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Capabilities")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"100 kHz PID Servo"),(0,o.kt)("li",{parentName:"ul"},"<3\u03bcs latency from ADC read to DAC updating"),(0,o.kt)("li",{parentName:"ul"},"Floating-point math support"),(0,o.kt)("li",{parentName:"ul"},"Arduino\u2122 Compatible"),(0,o.kt)("li",{parentName:"ul"},"Open Source")))),(0,o.kt)("h2",{id:"how-does-the-qnimble-quarto-work"},"How does the ",(0,o.kt)("em",{parentName:"h2"},"qNimble Quarto")," work?"),(0,o.kt)(i.X2,{mdxType:"Row"},(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(9081).Z}))),(0,o.kt)(i.sg,{mdxType:"Column"},(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Quarto")," combines four high-speed, low-latency 16-bit DACs and ADCs with a powerful CPU and an FPGA. The FPGA handles all the communication with the DAC and ADC and we created InstraWrite\u2122 to enable the CPU to read from or write to the FPGA immediately. Communication with the ADC and DAC never slows down the CPU.  The entire signal chain is designed for low latency (~1\u03bcs) to support high-bandwidth servoing and filtering so you can respond to your data quickly. With hardware support for floating point math, you can do advanced math calculations on your data in real-time."))),(0,o.kt)("h2",{id:"how-does-the--qnimble-quarto-compare-to-a"},"How does the  ",(0,o.kt)("em",{parentName:"h2"},"qNimble Quarto")," compare to a..."),(0,o.kt)("h3",{id:"usb-approach"},"USB approach"),(0,o.kt)("p",null,"Data-acquisition over USB is simple and often inexpensive. While not universal, these solution often have 12bit or fewer ADC's and DAC's and limited sample rates. But any USB approach will have very high latency and timing jitter. The USB protocol is designed for moderate latency or high bandwidth, but not both. The round trip time from the device, to your computer over USB and back again can be take many milliseconds. If you just want to generate a fixed analog output or stream analog data, this can be a great approach. But if you want to interact with your data quickly, you will need a different approach."),(0,o.kt)("h3",{id:"traditional-daq-approach"},"Traditional DAQ approach"),(0,o.kt)("p",null," A traditional data-acquisition (DAQ) approach has dedicated hardware that either runs on your computer or on a dedicated chassis. Modern computers are amazing, but they are not designed for low-latency (~1us) response times. Even when running a Real-Time OS, getting predictable latency under 10us can be challenging. Additionally, the complexity of running a full operating system adds cost and complexity to these approaches. "),(0,o.kt)("h3",{id:"fpga-approach"},"FPGA approach"),(0,o.kt)("p",null,"When you want the lowest latency connection to an ADC or a DAC, go with an FPGA. It can handle ADC data sampling at 100M samples per second and process the data in well under 100ns. But such power comes with a few drawbacks. In addition to the higher cost of an FPGA,  programming one has its own challenges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Learning Curve")," -  Programming an FPGA is complex and takes a while to learn. Troubleshooting an FPGA is even harder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Iteration Time")," -  Compile times on an FPGA can be tens of minutes or even hours. That really slows down how fast you can try and iterate your ideas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Math")," -  Floating point math is very computationally expensive and usually calculations must be done with integers.")),(0,o.kt)("p",null,"If you aren't programming an FPGA, then you are using someone else's FPGA program. This solves many of the above issues, but these approaches tend to be expensive and limit you  to the features and functionality they programmed into the FPGA."),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The Quarto approach gives you the speed and power of an FPGA without its complexity or expense. You can program your custom code in C++ with the easy-to-use Arduino\u2122 IDE without worrying about FPGA design or avoiding floating point math. Your code is running directly on the CPU (no OS) to maximize simplicity and speed."))}p.isMDXComponent=!0},9081:function(e,t,a){"use strict";t.Z=a.p+"assets/images/bnc-s1-5ef6fae4b94e653c43db2e14ad0aa5ce.jpg"}}]);