"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[3709],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,c=g["".concat(p,".").concat(m)]||g[m]||s[m]||r;return n?i.createElement(c,l(l({ref:t},d),{},{components:n})):i.createElement(c,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),l=["components"],o={title:"Digital I/O",toc_max_heading_level:2},p=void 0,u={unversionedId:"Functions/Digital",id:"Functions/Digital",title:"Digital I/O",description:"The Quarto has eight digital input and output pins, which can be utilized using standard Arduino\u2122 functions:",source:"@site/Quarto/Functions/Digital.md",sourceDirName:"Functions",slug:"/Functions/Digital",permalink:"/Quarto/Functions/Digital",draft:!1,tags:[],version:"current",frontMatter:{title:"Digital I/O",toc_max_heading_level:2},sidebar:"autoSideBar",previous:{title:"DAC",permalink:"/Quarto/Functions/DAC"},next:{title:"LEDs",permalink:"/Quarto/Functions/LEDs"}},d={},s=[{value:"pinMode",id:"pinmode",level:2},{value:"Example",id:"example",level:3},{value:"digitalWrite",id:"digitalwrite",level:2},{value:"Example",id:"example-1",level:3},{value:"digitalToggle",id:"digitaltoggle",level:2},{value:"Example",id:"example-2",level:3},{value:"digitalRead",id:"digitalread",level:2},{value:"Example",id:"example-3",level:3}],g={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Quarto")," has eight digital input and output pins, which can be utilized using standard Arduino\u2122 functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pinmode"},"pinMode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#digitalwrite"},"digitalWrite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#digitaltoggle"},"digitalToggle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#digitalread"},"digitalRead"))),(0,r.kt)("h2",{id:"pinmode"},"pinMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void pinMode(uint8_t pin, uint8_t mode);\n")),(0,r.kt)("p",null,"This function configures the input or output characteristics of a digital pin. By default, all pins are inputs. The function takes the follow arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pin"))," Pin should be an integer between 1 and 8, corresponding pins D1 through D8. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mode"))," sets the input or output mode. Valid options are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"OUTPUT")),": Standard output pin (3.3V CMOS push-pull)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"OUTPUT_OPENDRAIN")),": Open drain output"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"INPUT")),": Standard input (floating) "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"INPUT_PULLUP")),": Input with 22k pull up resistor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"INPUT_PULLDOWN")),": Input with 100k pull down resistor")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"pinMode(1,OUTPUT);\npinMode(2,INPUT);\n")),(0,r.kt)("h2",{id:"digitalwrite"},"digitalWrite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void digitalWrite(uint8_t pin, uint8_t value);\n")),(0,r.kt)("p",null,"This function sets a digital output pin HIGH or LOW. Unlike in many Arduino\u2122 systems, there is no need to use digitalWriteFast() for better speed performance as digitalWrite() has already been optimized for speed. The function takes the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 8, corresponding pins D1 through D8. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))," set the pin to a 0 or 1. Valid options are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LOW")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HIGH"))))),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(1,OUTPUT);\n    pinMode(2,OUTPUT);\n}\n\nvoid loop() {\n    digitalWrite(1,HIGH);\n    digitalWrite(2,1); // same digitalWrite(2,HIGH);\n    digitalWrite(1,LOW); \n    digitalWrite(2,0); // same digitalWrite(2,LOW);\n}\n")),(0,r.kt)("h2",{id:"digitaltoggle"},"digitalToggle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void digitalToggle(uint8_t pin);\n")),(0,r.kt)("p",null,"This function toggles the state of a digital output pin HIGH or LOW. Unlike in many Arduino\u2122 systems, there is no need to use digitalToggleFast() for better speed performance as digitalToggle() has already been optimized for speed. The function takes the following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 8, corresponding pins D1 through D8. ")),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(1,OUTPUT);\n    pinMode(2,OUTPUT);\n}\n\nvoid loop() {\n    digitalToggle(1);\n    digitalToggle(2);\n}\n")),(0,r.kt)("h2",{id:"digitalread"},"digitalRead"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"uint8_t digitalRead(uint8_t pin);\n")),(0,r.kt)("p",null,"The function returns a 0 if the digital input pin is low and returns 1 if the digital pin is high. Unlike in many Arduino\u2122 systems, there is no need to use digitalReadFast() for better speed performance as digitalRead() has already been optimized for speed. The function takes the following arugments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pin"))," Should be an integer between 1 and 8, corresponding pins D1 through D8. ")),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n    pinMode(1,INPUT);\n    pinMode(2,INPUT);\n    pinMode(3,OUTPUT);\n    pinMode(4,OUTPUT);\n}\n\nvoid loop() {\n    if ( digitalRead(1) ) {\n        //D1 is high\n        digitalWrite(3,LOW);\n    } else {\n        if (digitalRead(2) == LOW) {\n            //D1 and D2 low\n            digitalWrite(4,HIGH);\n        } else {\n            //D1 Low, D2 high\n            digitalWrite(4,LOW);\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);