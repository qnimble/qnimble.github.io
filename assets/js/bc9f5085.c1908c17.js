"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[925],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},s),{},{components:a})):r.createElement(f,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7631:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],c={title:"List of Functions"},d=void 0,l={unversionedId:"Software/Functions",id:"Software/Functions",isDocsHomePage:!1,title:"List of Functions",description:"The following is a list of Quarto specific functions and other useful functions, but hardly a complete list. For additional functions please see the Ard Langunage Reference. The Quarto can run Arduino or stanard c functions.",source:"@site/Quarto/Software/Functions.md",sourceDirName:"Software",slug:"/Software/Functions",permalink:"/Quarto/Software/Functions",tags:[],version:"current",frontMatter:{title:"List of Functions"},sidebar:"quarto_main_sidebar",previous:{title:"Pulsed Output Waveform",permalink:"/Quarto/Examples/Pulsed_Output"},next:{title:"ADC",permalink:"/Quarto/Software/ADC"}},s=[{value:"ADC Functions",id:"adc-functions",children:[],level:3},{value:"DAC Functions",id:"dac-functions",children:[],level:3},{value:"Digital I/O (GPIO)",id:"digital-io-gpio",children:[],level:3},{value:"Trigger I/O",id:"trigger-io",children:[],level:3}],u={toc:s};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following is a list of ",(0,i.kt)("em",{parentName:"p"},"Quarto")," specific functions and other useful functions, but hardly a complete list. For additional functions please see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/"},"Ard Langunage Reference"),". The ",(0,i.kt)("em",{parentName:"p"},"Quarto")," can run Arduino or stanard c functions."),(0,i.kt)("h3",{id:"adc-functions"},"ADC Functions"),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"ADC#configureadc"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void configureADC(channel, fire_every_us, fire_delay, scale, cb_function);\n//scale options are BIPOLAR_1250mV, BIPOLAR_2500mV, BIPOLAR_5V or BIPOLAR_10V   "))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"ADC#readadcx_from_isr"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"double readADCX_from_ISR(void);"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"ADC#readadcrawx_from_isr"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int16_t readRAWADCX_from_ISR(void);"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"ADC#disableadc"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void disableADC(channel);"))),(0,i.kt)("h3",{id:"dac-functions"},"DAC Functions"),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"DAC#writedac"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void writeDAC(channel, voltage);"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"DAC#writedacraw"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void writeDACRAW(channel, data);"))),(0,i.kt)("h3",{id:"digital-io-gpio"},"Digital I/O (GPIO)"),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Digital#pinmode"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void pinMode(pin, mode);\n//mode can be OUTPUT, INPUT, OUTPUT_OPENDRAIN, INPUT_PULLUP or INPUT_PULLDOWN"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Digital#digitalwrite"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void digitalWrite(pin,value);\n//value can be LOW (0) or HIGH (1)"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Digital#digitaltoggle"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void digitalToggle(pin);"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Digital#digitalread"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void digitalRead(pin);"))),(0,i.kt)("h3",{id:"trigger-io"},"Trigger I/O"),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Triggers#triggermode"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void triggerMode(pin, mode);\n//mode can be OUTPUT, INPUT, OUTPUT_OPENDRAIN, INPUT_PULLUP or INPUT_PULLDOWN"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Triggers#triggerwrite"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void triggerWrite(pin,value);\n//value can be LOW (0) or HIGH (1)"))),(0,i.kt)("div",{className:"code-extra"},(0,i.kt)("div",{parentName:"div",className:"code_moreinfo"},(0,i.kt)("a",{parentName:"div",href:"Triggers#triggerread"},"Full Function Reference")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void triggerRead(pin);"))))}p.isMDXComponent=!0}}]);