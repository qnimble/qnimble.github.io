(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},116:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(119);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,l=void 0!==i&&i,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},119:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r),a=function(e){var t=e.children,n=e.width,r=void 0===n?"6":n,a=e.align,i=void 0===a?"left":a;return o.a.createElement("div",{className:"col col--"+r+" text--"+i},t)},i=function(e){var t=e.children;return o.a.createElement("div",{className:"row"},t)}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var r=n(4),o=n(0),a=n.n(o),i=function(e){var t=e.children;return a.a.createElement("div",{className:"baloo"},t)},l=function(e){var t=e.children;return a.a.createElement("div",{className:"baloo thick"},t)};a.a.Component},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bnc-s1-5ef6fae4b94e653c43db2e14ad0aa5ce.jpg"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/arduino-ide-s1-f2748ff0e91b85f4b568e20bbf43be55.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(111)),i=(n(116),n(128)),l=(n(129),{id:"quarto",slug:"/",sidebar_label:"Overview",title:"qNimble Quarto A Digital Brain for the Analog World\u2122",hide_title:!0,hide_table_of_contents:!0,keywords:["DAC","ADC","data","acquisition","16bit","high-speed","speed","latency","servo","PID","PIID","filters","digital","analog","FPGA"],description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications."}),c={unversionedId:"quarto",id:"quarto",isDocsHomePage:!1,title:"qNimble Quarto A Digital Brain for the Analog World\u2122",description:"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications.",source:"@site/quarto/quarto.mdx",slug:"/",permalink:"/quarto/",editUrl:"https://github.com/qnimble/qnimble.github.io/edit/main/docs/quarto/quarto.mdx",version:"current",sidebar_label:"Overview",sidebar:"quarto_main_sidebar",next:{title:"specifications",permalink:"/quarto/specifications"}},u=[{value:"How does the <em>qNimble Quarto</em> work?",id:"how-does-the-qnimble-quarto-work",children:[]},{value:"Why Create the qNimble Quarto?",id:"why-create-the-qnimble-quarto",children:[]},{value:"I thought Arduino\u2122 was slow",id:"i-thought-arduino-was-slow",children:[]}],s={toc:u};function d(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"qnimble-quarto-a-digital-brain-for-the-analog-world"},Object(a.b)("em",{parentName:"h1"},"qNimble Quarto"),": A Digital Brain for the Analog World\u2122"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"qNimble Quarto")," multi-function ",Object(a.b)("strong",{parentName:"p"},"data")," acquisition platform that is easy to use, but incredibly powerful. Low latency, 1 MSPS, 16 bit-ADC and DAC directly accessible with a blazing fast 500 MHz CPU dedicated to running your code. The CPU can read and write analog signals in just a few clock cycles. Arduino\u2122-compatible, so you can program the Quarto in the Arduino IDE or your favorite C/C++ environment. Build a servo control system or digital filters with just a few lines of code. What will you build?"),Object(a.b)("h2",{id:"how-does-the-qnimble-quarto-work"},"How does the ",Object(a.b)("em",{parentName:"h2"},"qNimble Quarto")," work?"),Object(a.b)(i.b,{mdxType:"Row"},Object(a.b)(i.a,{mdxType:"Column"},Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(161).default}))),Object(a.b)(i.a,{mdxType:"Column"},Object(a.b)("p",null,"We combined high-speed, low-latency 16-bit DAC and ADC hardware with a blazing fast CPU and an FPGA. The FPGA handles all the communication with the DAC and ADC and is designed to maximize the speed of the CPU by enabling the CPU to read or write analog signals in a few as 2 clock cycles.  And we\u2019ve designed everything to have low latency (~1us) to support high bandwidth servoing and filtering so you can respond to your data quickly. With hardware support for floating point math and 100ns interrupt response times, you get the power of an FPGA but the ease of use of an Arduino."))),Object(a.b)("h2",{id:"why-create-the-qnimble-quarto"},"Why Create the qNimble Quarto?"),Object(a.b)(i.b,{mdxType:"Row"},Object(a.b)(i.a,{width:"7",mdxType:"Column"},"We didn\u2019t like the options for high-speed analog input and output devices, especially when you wanted low latency or quick response times (for high servo bandwidths).",Object(a.b)("p",null,"Arduino\u2122 devices give you excellent control, but typically have low-resolution DAC and ADC\u2019s and even Analog shields  have slow (millisecond) update speeds. Data acquisition hardware is often USB-based, so latency is very large and loops times very long. Other solutions relied on purchasing expensive dedicated hardware (compactRIO, PXIcontroller) in addition to analog input / output modules and specialized software.  And for low latency, these and other solutions required programming an FPGA, which is complex with a steep learning curve and slow compile greatly slow down the speed of development.  We wanted something simple and affordable yet powerful. That\u2019s the qNimble Quarto")),Object(a.b)(i.a,{width:"5",align:"right",mdxType:"Column"},Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(162).default})))),Object(a.b)("h2",{id:"i-thought-arduino-was-slow"},"I thought Arduino\u2122 was slow"),Object(a.b)(i.b,{mdxType:"Row"},Object(a.b)(i.a,{mdxType:"Column"},Object(a.b)("p",null,"Arduino has a reputation for being slow. But it doesn\u2019t have to be that way. Fundamentally Arduino compiles C / C++ code which can be written to be very efficient. Arduino code is often slow because:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Functions written to have compatibility across diverse hardware at the expense of speed."),Object(a.b)("li",{parentName:"ul"},"Many Arduino\u2019s use basic 8-bit micro-controllers running at low (~10MHz) speeds."),Object(a.b)("li",{parentName:"ul"},"Interfacing to external components such as ADC and DAC often use slow protocols like I2C and/or waste processor time waiting and polling for communications operation to complete.")))))}d.isMDXComponent=!0}}]);