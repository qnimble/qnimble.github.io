"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"Troubleshooting",sidebar_label:"Troubleshooting Guide",title:"Troubleshooting Guide",hide_title:!1,hide_table_of_contents:!1,keywords:["Troubleshooting","Errors","Problems","FAQ"],description:"Troubleshooting guide for the qNimble Quarto"},s=void 0,u={unversionedId:"Troubleshooting",id:"Troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Guide",description:"Troubleshooting guide for the qNimble Quarto",source:"@site/Quarto/Troubleshooting.md",sourceDirName:".",slug:"/Troubleshooting",permalink:"/Quarto/Troubleshooting",tags:[],version:"current",frontMatter:{id:"Troubleshooting",sidebar_label:"Troubleshooting Guide",title:"Troubleshooting Guide",hide_title:!1,hide_table_of_contents:!1,keywords:["Troubleshooting","Errors","Problems","FAQ"],description:"Troubleshooting guide for the qNimble Quarto"},sidebar:"quarto_main_sidebar",previous:{title:"Frequently Asked Questions",permalink:"/Quarto/FAQ"},next:{title:"PID Servo",permalink:"/Quarto/Examples/Servo"}},p=[{value:"I can&#39;t upload new code (Quarto crashed)",id:"i-cant-upload-new-code-quarto-crashed",children:[],level:2},{value:"Why is my <em>Quarto</em> crashing?",id:"why-is-my-quarto-crashing",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"i-cant-upload-new-code-quarto-crashed"},"I can't upload new code (Quarto crashed)"),(0,a.kt)("p",null,"Sometime the code ",(0,a.kt)("em",{parentName:"p"},"Quarto")," executes will prevent it from handling the USB connection. When this happens, often you will get a pop-up message from the operating system that it is no longer able to communicate with serial port the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," is set to. When this happens, the only solution is to reboot the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),". This can be done in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Disconnect and reconnect power to the device"),(0,a.kt)("li",{parentName:"ul"},"Press and a hold the front-panel button (left side of the ",(0,a.kt)("em",{parentName:"li"},"Quarto"),") for ~5 seconds. The blue power LED should turn off. Then release the button and press the button again for ~2 seconds the blue LED should turn back on and the device will boot",(0,a.kt)("sup",{parentName:"li",id:"fnref-rebootbutton"},(0,a.kt)("a",{parentName:"sup",href:"#fn-rebootbutton",className:"footnote-ref"},"1")),".")),(0,a.kt)("p",null,"When the unit reboots, it will go into the bootloader and the status LED will flash white for ~3 seconds. After this period, the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," will try to load the application code. If you do not want this to happen (the application code crashes the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),"), press the front-panel button once while the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," is in the bootloader (it is flashing the status LED white) and the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," will stay indefinitely in the bootloader.  When the button is pressed, the status LED should change to flashing red instead of white. "),(0,a.kt)("p",null,"You can now load a different application code"),(0,a.kt)("h2",{id:"why-is-my-quarto-crashing"},"Why is my ",(0,a.kt)("em",{parentName:"h2"},"Quarto")," crashing?"),(0,a.kt)("p",null,"If you cannot reprogram the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),", is not responding to USB requests. Generally this is because an interrupt with a higher priority than USB is taking up all of the processor's time. For this reason, high priority interrupts such as those handling ADC data should not do much or execute functions that may be slow. Here's an example for code that will crash the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Code that will crash the Quarto"',title:'"Code',that:!0,will:!0,crash:!0,the:!0,'Quarto"':!0},"void setup(void) {  \n  configureADC1(1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n\nvoid getADC1(void) {\n  double newdata = readADC1_from_ISR(); //read ADC voltage\n  writeDAC1(newdata);\n  Serial.println(newdata);\n  'Just and Example. Do not Run!'\n}\n")),(0,a.kt)("p",null,"The getADC1 interrupt is running every 1\u03bcs (the first argument, fire_every_us, is set to 1 in ",(0,a.kt)("a",{parentName:"p",href:"Software/ADC#configureadcx"},"configureADC1"),"). Because this interrupt is handling incoming analog data, it has a higher priority than USB. If the function getADC1 takes over 1\u03bcs to execute, then new ADC data comes in while it is still executing. If this happens, as soon as getADC1 is finished, it will run again to handle this new data and again and again...  and the processor will never respond to USB and it will appear to have crashed."),(0,a.kt)("p",null,"The solution to keep slow functions like Serial.print() out of high priority interrupts. One approach is to move the printing of the ADC data to the main loop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Solution A (Main Loop)"',title:'"Solution',A:!0,"(Main":!0,'Loop)"':!0},"volatile double adcdata;\n\nvoid setup(void) {  \n  configureADC1(1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n\nvoid getADC1(void) {\n  adcdata = readADC1_from_ISR(); //read ADC voltage\n  writeDAC1(adcdata);\n}\n\nvoid loop() {\n    static unsigned long lastrun = 0;    \n    if (millis() > lastrun) { //Run once every 1000ms\n        lastrun = millis() + 1000;\n        toggleLEDGreen();\n        Serial.println(adcdata);\n      }\n}\n")),(0,a.kt)("p",null,"In the above example, the main loop is responsible for running the Serial.print() function, so it can get preempted by the ADC interrupt when necessary. While this example only prints the ADC data once per second, that isn't what is preventing the crash. If the loop were simply: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop() {\n    Serial.println(adcdata);\n}\n")),(0,a.kt)("p",null,"the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," would not crash as the the USB (and ADC) interrupts can preempt the loop function, so no matter how long loop() takes to run, the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," can respond to USB and ADC data."),(0,a.kt)("p",null,"If you want to have more controlled timing than a simple loop can provide, we can use a timer. By default the timer runs with a low priority so it too will get interrupted by the ADC or the USB, and this will prevent the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," from crashing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Solution B (Timer)"',title:'"Solution',B:!0,'(Timer)"':!0},"volatile double adcdata;\nIntervalTimer printTimer;\n\nvoid setup(void) {  \n  configureADC1(1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n  printTimer.begin(debug, 100); // run debug() every 100 microseconds\n}\n\nvoid getADC1(void) {\n  adcdata = readADC1_from_ISR(); //read ADC voltage\n  writeDAC1(adcdata);\n}\n\nvoid loop() {\n  static unsigned long lastrun = 0;    \n  if (millis() > lastrun) { //Run once every 1000ms\n      toggleLEDGreen();\n      lastrun = millis() + 1000;\n  }\n}\n\nvoid debug() {\n  Serial.println(adcdata);\n}\n")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-rebootbutton"},"If you have an evaluation unit, then there are two buttons on the front panel, but only the button on the right (closest to the BNC connector) should be used. Additionally, the blue LED will not turn off when the ",(0,a.kt)("em",{parentName:"li"},"Quarto")," is powered down. After holding the button for >5 seconds, release the button and press it again for >2 seconds and the device should boot again.",(0,a.kt)("a",{parentName:"li",href:"#fnref-rebootbutton",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);