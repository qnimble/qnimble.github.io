(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(b,".").concat(d)]||u[d]||m[d]||l;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(104)),b={title:"Specifications",slug:"Specifications"},i={unversionedId:"Specifications",id:"Specifications",isDocsHomePage:!1,title:"Specifications",description:"Analog to Digital Converter (ADC)",source:"@site/Quarto/Specifications.md",sourceDirName:".",slug:"/Specifications",permalink:"/Quarto/Specifications",version:"current",frontMatter:{title:"Specifications",slug:"Specifications"},sidebar:"quarto_main_sidebar",previous:{title:"qNimble Quarto A Digital Brain for the Analog World\u2122",permalink:"/Quarto/"},next:{title:"Quick Start Guide",permalink:"/Quarto/Quick_Start"}},c=[{value:"Analog to Digital Converter (ADC)",id:"analog-to-digital-converter-adc",children:[]},{value:"Digital to Analog Converter (DAC)",id:"digital-to-analog-converter-dac",children:[]},{value:"Timing Resolution",id:"timing-resolution",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"analog-to-digital-converter-adc"},"Analog to Digital Converter (ADC)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Units"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number of Channels"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number of Bits"),Object(l.b)("td",{parentName:"tr",align:null},"16"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Range Modes"),Object(l.b)("td",{parentName:"tr",align:null},"\xb110, \xb15, \xb12.5, \xb11.25"),Object(l.b)("td",{parentName:"tr",align:null},"Volts")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Maximum Sample Rate"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"MSPS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Input Impedance"),Object(l.b)("td",{parentName:"tr",align:null},">100k"),Object(l.b)("td",{parentName:"tr",align:null},"\u03a9")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Bandwidth (-3 dB)"),Object(l.b)("td",{parentName:"tr",align:null},"400"),Object(l.b)("td",{parentName:"tr",align:null},"kHz")))),Object(l.b)("h2",{id:"digital-to-analog-converter-dac"},"Digital to Analog Converter (DAC)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Value"),Object(l.b)("th",{parentName:"tr",align:null},"Units"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number of Channels"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Number of Bits"),Object(l.b)("td",{parentName:"tr",align:null},"16"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Range Modes"),Object(l.b)("td",{parentName:"tr",align:null},"\xb110"),Object(l.b)("td",{parentName:"tr",align:null},"Volts")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Maximum Sample Rate"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"MSPS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Update Latency",Object(l.b)("sup",{parentName:"td",id:"fnref-dac_latency"},Object(l.b)("a",{parentName:"sup",href:"#fn-dac_latency",className:"footnote-ref"},"1"))),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"us")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Rise / Fall Time (1/e)"),Object(l.b)("td",{parentName:"tr",align:null},"2.2"),Object(l.b)("td",{parentName:"tr",align:null},"\u03bcs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Output Impedance"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"\u03a9")))),Object(l.b)("h2",{id:"timing-resolution"},"Timing Resolution"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Value (Typical)"),Object(l.b)("th",{parentName:"tr",align:null},"Units"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Interrupt Timing Jitter",Object(l.b)("sup",{parentName:"td",id:"fnref-measureresponsetime"},Object(l.b)("a",{parentName:"sup",href:"#fn-measureresponsetime",className:"footnote-ref"},"2"))),Object(l.b)("td",{parentName:"tr",align:null},"100"),Object(l.b)("td",{parentName:"tr",align:null},"ns")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Interrupt Latency",Object(l.b)("sup",{parentName:"td",id:"fnref-measureresponsetime"},Object(l.b)("a",{parentName:"sup",href:"#fn-measureresponsetime",className:"footnote-ref"},"2"))),Object(l.b)("td",{parentName:"tr",align:null},"210"),Object(l.b)("td",{parentName:"tr",align:null},"ns")))),Object(l.b)("p",null,Object(l.b)("sup",{parentName:"p",id:"fnref-dac_latency"},Object(l.b)("a",{parentName:"sup",href:"#fn-dac_latency",className:"footnote-ref"},"1"))," Time from executing writeDAC function to analog output starts updating. "),Object(l.b)("p",null,Object(l.b)("sup",{parentName:"p",id:"fnref-measureresponsetime"},Object(l.b)("a",{parentName:"sup",href:"#fn-measureresponsetime",className:"footnote-ref"},"2"))," See ",Object(l.b)("a",{parentName:"p",href:"AppNotes/MeasureLatency"},"Measuring Response Time")," for details on definition of latency and jitter."))}p.isMDXComponent=!0}}]);