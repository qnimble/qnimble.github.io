(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[983],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=u(a),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9819:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={title:"Specifications",slug:"Specifications"},p={unversionedId:"Specifications",id:"Specifications",isDocsHomePage:!1,title:"Specifications",description:"Analog to Digital Converter (ADC)",source:"@site/Quarto/Specifications.md",sourceDirName:".",slug:"/Specifications",permalink:"/Quarto/Specifications",version:"current",frontMatter:{title:"Specifications",slug:"Specifications"},sidebar:"quarto_main_sidebar",previous:{title:"qNimble Quarto A Digital Brain for the Analog World\u2122",permalink:"/Quarto/"},next:{title:"Quick Start Guide",permalink:"/Quarto/Quick_Start"}},u=[{value:"Analog to Digital Converter (ADC)",id:"analog-to-digital-converter-adc",children:[]},{value:"Digital to Analog Converter (DAC)",id:"digital-to-analog-converter-dac",children:[]},{value:"Timing Resolution",id:"timing-resolution",children:[]}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"analog-to-digital-converter-adc"},"Analog to Digital Converter (ADC)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Units"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of Channels"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of Bits"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range Modes"),(0,l.kt)("td",{parentName:"tr",align:null},"\xb110, \xb15, \xb12.5, \xb11.25"),(0,l.kt)("td",{parentName:"tr",align:null},"Volts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Quantization Step Size"),(0,l.kt)("td",{parentName:"tr",align:null},"312.5   (Range = \xb110V) ",(0,l.kt)("br",null),"156.25   (Range = \xb15V)",(0,l.kt)("br",null),"78   (Range = \xb12.5V) ",(0,l.kt)("br",null),"39   (Range = \xb11.25V)"),(0,l.kt)("td",{parentName:"tr",align:null},"uV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum Sample Rate",(0,l.kt)("sup",{parentName:"td",id:"fnref-perchannel"},(0,l.kt)("a",{parentName:"sup",href:"#fn-perchannel",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"MS/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Input Impedance"),(0,l.kt)("td",{parentName:"tr",align:null},">100k"),(0,l.kt)("td",{parentName:"tr",align:null},"\u03a9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bandwidth (-3 dB)"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"kHz")))),(0,l.kt)("h2",{id:"digital-to-analog-converter-dac"},"Digital to Analog Converter (DAC)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Units"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of Channels"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number of Bits"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range Modes"),(0,l.kt)("td",{parentName:"tr",align:null},"\xb110"),(0,l.kt)("td",{parentName:"tr",align:null},"Volts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Quantization Step Size"),(0,l.kt)("td",{parentName:"tr",align:null},"312.5"),(0,l.kt)("td",{parentName:"tr",align:null},"uV")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum Sample Rate",(0,l.kt)("sup",{parentName:"td",id:"fnref-perchannel"},(0,l.kt)("a",{parentName:"sup",href:"#fn-perchannel",className:"footnote-ref"},"1"))),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"MS/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update Latency",(0,l.kt)("sup",{parentName:"td",id:"fnref-dac_latency"},(0,l.kt)("a",{parentName:"sup",href:"#fn-dac_latency",className:"footnote-ref"},"2"))),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"us")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rise / Fall Time (1/e)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u03bcs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Output Impedance"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"\u03a9")))),(0,l.kt)("h2",{id:"timing-resolution"},"Timing Resolution"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value (Typical)"),(0,l.kt)("th",{parentName:"tr",align:null},"Units"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interrupt Timing Jitter",(0,l.kt)("sup",{parentName:"td",id:"fnref-measureresponsetime"},(0,l.kt)("a",{parentName:"sup",href:"#fn-measureresponsetime",className:"footnote-ref"},"3"))),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"ns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interrupt Latency",(0,l.kt)("sup",{parentName:"td",id:"fnref-measureresponsetime"},(0,l.kt)("a",{parentName:"sup",href:"#fn-measureresponsetime",className:"footnote-ref"},"3"))),(0,l.kt)("td",{parentName:"tr",align:null},"210"),(0,l.kt)("td",{parentName:"tr",align:null},"ns")))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-perchannel"},"Mega Samples Per Second (MS/s) across all channels. Sum of sample rate of all channels must not be greater than 1 MS/s.",(0,l.kt)("a",{parentName:"li",href:"#fnref-perchannel",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-dac_latency"},"Time from executing writeDAC function to analog output starts updating. ",(0,l.kt)("a",{parentName:"li",href:"#fnref-dac_latency",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-measureresponsetime"},"See ",(0,l.kt)("a",{parentName:"li",href:"AppNotes/MeasureLatency"},"Measuring Response Time")," for details on definition of latency and jitter.",(0,l.kt)("a",{parentName:"li",href:"#fnref-measureresponsetime",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);