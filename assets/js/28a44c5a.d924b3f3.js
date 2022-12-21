"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[4692],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||g[c]||i;return a?n.createElement(k,l(l({ref:t},o),{},{components:a})):n.createElement(k,l({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2797:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return g}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],p={title:"Triggers",toc_max_heading_level:2},s=void 0,m={unversionedId:"Functions/Triggers",id:"Functions/Triggers",title:"Triggers",description:'The following functions are available for the two Trigger lines. The "X" in a function name must be replaced by the trigger number (1 or 2):',source:"@site/Quarto/Functions/Triggers.md",sourceDirName:"Functions",slug:"/Functions/Triggers",permalink:"/Quarto/Functions/Triggers",draft:!1,tags:[],version:"current",frontMatter:{title:"Triggers",toc_max_heading_level:2},sidebar:"autoSideBar",previous:{title:"LEDs",permalink:"/Quarto/Functions/LEDs"},next:{title:"ADC Timing",permalink:"/Quarto/AppNotes/ADCTiming"}},o={},g=[{value:"triggerMode",id:"triggermode",level:2},{value:"Example",id:"example",level:3},{value:"triggerWrite",id:"triggerwrite",level:2},{value:"Example",id:"example-1",level:3},{value:"triggerRead",id:"triggerread",level:2},{value:"Example",id:"example-2",level:3},{value:"enableInterruptTrigger",id:"enableinterrupttrigger",level:2},{value:"Example",id:"example-3",level:3},{value:"disableInterruptTrigger",id:"disableinterrupttrigger",level:2},{value:"Example",id:"example-4",level:3},{value:"setTriggerClockFreq",id:"settriggerclockfreq",level:2},{value:"Example",id:"example-5",level:3},{value:"readTriggerClockFreq",id:"readtriggerclockfreq",level:2},{value:"Example",id:"example-6",level:3},{value:"useTriggerClockOutput",id:"usetriggerclockoutput",level:2},{value:"Example",id:"example-7",level:3}],u={toc:g};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The following functions are available for the two Trigger lines. The "X" in a function name must be replaced by the trigger number (1 or 2):'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#triggermode"},"triggerMode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#triggerwrite"},"triggerWrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#triggerread"},"triggerRead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enableinterrupttrigger"},"enableInterruptTrigger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disableinterrupttrigger"},"disableInterruptTrigger"))),(0,i.kt)("h2",{id:"triggermode"},"triggerMode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void triggerMode(uint8_t pin, uint8_t mode);\n")),(0,i.kt)("p",null,"This function configures the input or output characteristics of a trigger pin.  By default, all triggers are inputs. The function takes the following arguments: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Pin should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2 "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"mode"))," sets the input or output mode. Valid options are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"OUTPUT")),": Standard output pin (3.3V CMOS push-pull)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"OUTPUT_OPENDRAIN")),": Open drain output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"INPUT")),": Standard input (floating) "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"INPUT_PULLUP")),": Input with 22k pull up resistor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"INPUT_PULLDOWN")),": Input with 100k pull down resistor")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"triggerMode(1,INPUT);\ntriggerMode(2,OUTPUT);\n")),(0,i.kt)("h2",{id:"triggerwrite"},"triggerWrite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void triggerWrite(uint8_t pin, uint8_t value);\n")),(0,i.kt)("p",null,"This function sets a trigger output HIGH or LOW. The function takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"value"))," set the pin to a 0 or 1. Valid options are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LOW")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HIGH"))))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"triggerWrite(1,LOW);\ntriggerWrite(2,HIGH);\n")),(0,i.kt)("h2",{id:"triggerread"},"triggerRead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"uint8_t triggerRead(uint8_t pin);\n")),(0,i.kt)("p",null,"The function returns a 0 if the trigger input is low and returns 1 if the trigger is high. The function takes  the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2.")),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"if triggerRead(1) {\n    //trigger1 is high\n    ...\n} else {\n    //trigger 1 is low\n    ...\n}\n")),(0,i.kt)("h2",{id:"enableinterrupttrigger"},"enableInterruptTrigger"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void enableInterruptTrigger(uint8_t pin, trigger_edge_t edge, void (*cb_function)(void) );\nvoid enableInterruptTrigger(uint8_t pin, trigger_edge_t edge, void (*cb_function)(void), uint priority );\n")),(0,i.kt)("p",null,"This function configures the trigger to call a function on the rising, or falling, or either edge of the trigger line. The function takes  the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"edge"))," Sets the edge sensitivtity of the trigger line. Valid options are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"FAILLING_EDGE"),(0,i.kt)("li",{parentName:"ul"},"RISING_EDGE"),(0,i.kt)("li",{parentName:"ul"},"BOTH_EDGES"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cb_function"))," Callback function to run on the rising (or falling) edge of the trigger"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"priority"))," Optional argument to set interrupt priority. Default is 4 for trigger 1 and 5 for trigger 2.  Under most circumstance, this arguments should be skipped.")),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {  \n  enableInterruptTrigger(1,RISING_DGE, gotTrigger);\n}\n\nvoid gotTrigger(void) {} \n  ...\n}\n")),(0,i.kt)("h2",{id:"disableinterrupttrigger"},"disableInterruptTrigger"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void disableInterruptTriggerX(uint8_t pin);\n")),(0,i.kt)("p",null,"This function disables the trigger's interrupt function. The function takes  the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2.")),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void watchTrigger(bool on) {\n    if (on == true) {\n        enableInterruptTrigger(1,RISING_EDGE, gotTrigger);\n        //call gotTrigger when Trigger 1 goes high\n    } else {\n        disableInterruptTrigger(1); //turn off calling gotTrigger\n    }\n}\n\nvoid gotTrigger(void) {\n      ...\n}\n")),(0,i.kt)("h2",{id:"settriggerclockfreq"},"setTriggerClockFreq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"float setTriggerClockFreq(float freq);\n")),(0,i.kt)("p",null,"This function configures the frequency for the trigger clock. Unless the useTriggerClockOutput function is used to enable the Clock Trigger Output, this function has no effect. The frequency can be set between 16 Hz and 66.5 MHz. The available frequencies are given by the formula:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"F"),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"q"),(0,i.kt)("mi",{parentName:"mrow"},"u"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"n"),(0,i.kt)("mi",{parentName:"mrow"},"c"),(0,i.kt)("mi",{parentName:"mrow"},"y"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mfrac",{parentName:"mrow"},(0,i.kt)("mrow",{parentName:"mfrac"},(0,i.kt)("mn",{parentName:"mrow"},"132"),(0,i.kt)("mi",{parentName:"mrow"},"M"),(0,i.kt)("mi",{parentName:"mrow"},"H"),(0,i.kt)("mi",{parentName:"mrow"},"z")),(0,i.kt)("mi",{parentName:"mfrac"},"N"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Frequency = \\frac{132 MHz}{N}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"2.04633em",verticalAlign:"-0.686em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,i.kt)("span",{parentName:"span",className:"mfrac"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.36033em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"))),(0,i.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,i.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},"3"),(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,i.kt)("span",{parentName:"span"}))))),(0,i.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,i.kt)("p",null,"where N is an integer between 2 and 8,388,607 (the second number is  ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"2"),(0,i.kt)("mn",{parentName:"msup"},"23")),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"1")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{23}-1")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.897438em",verticalAlign:"-0.08333em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"2"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"3"))))))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"))))),"). The function takes  the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"freq"))," Desired Frequency")),(0,i.kt)("h3",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  float target_frequency = 2.65e6;\n  float actual_frequency = setTriggerClockFreq(target_frequency);\n  //actual_frequency will be 2.64e6 or 2.64 MHz\n}\n")),(0,i.kt)("h2",{id:"readtriggerclockfreq"},"readTriggerClockFreq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"float readTriggerClockFreq(void);\n")),(0,i.kt)("p",null,"This function reads the trigger clock frequency."),(0,i.kt)("h3",{id:"example-6"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"float freq = readTriggerClockFreq();\n")),(0,i.kt)("h2",{id:"usetriggerclockoutput"},"useTriggerClockOutput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void useTriggerClockOutput(uint8_t pin, bool enable);\n")),(0,i.kt)("p",null,"This function turns on or off the Clock Output on a trigger signal. Enabling the trigger Clock Output overrides the ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerMode()")," setting, so even if the trigger pin is configured as an input, enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"useTriggerClockOutput")," will output a clock on the trigger pin. When the Clock Output is disabled, the trigger pin will revert to its original configuration (",(0,i.kt)("inlineCode",{parentName:"p"},"INPUT"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"OUTPUT"),", etc). The function takes  the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 2, corresponding to trigger 1 and trigger 2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"enable"))," Set to true to turn on the Clock Output and false to disable Clock Output")),(0,i.kt)("h3",{id:"example-7"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"setTriggerClockFreq(1e6); //Configure Clock at 1 MHz\ntriggerMode(1,INPUT); //Set trigger 1 as input\nuseTriggerClockOutput(1,true); //Output 1 MHz clock on Trigger 1\ntriggerWrite(1,HIGH); //no effect\nuseTriggerClockOutput(1,false); //Trigger 1 reverts back to being an input\ntriggerMode(1,OUTPUT); //Set trigger 1 as output, will out HIGH\n")))}c.isMDXComponent=!0}}]);