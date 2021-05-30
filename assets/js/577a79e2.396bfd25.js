(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[595],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2365:function(e,t,n){"use strict";n.d(t,{X2:function(){return a},sg:function(){return i}});var r=n(7294),i=function(e){var t=e.children,n=e.width,i=void 0===n?"6":n,a=e.align,o=void 0===a?"left":a;return r.createElement("div",{className:"col col--"+i+" text--"+o},t)},a=function(e){var t=e.children;return r.createElement("div",{className:"row"},t)}},8061:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=(n(2365),["components"]),s={},l={unversionedId:"AppNotes/MeasureLatency",id:"AppNotes/MeasureLatency",isDocsHomePage:!1,title:"MeasureLatency",description:"---",source:"@site/Quarto/AppNotes/MeasureLatency.md",sourceDirName:"AppNotes",slug:"/AppNotes/MeasureLatency",permalink:"/Quarto/AppNotes/MeasureLatency",version:"current",frontMatter:{},sidebar:"quarto_main_sidebar",previous:{title:"Triggers",permalink:"/Quarto/Software/Triggers"}},u=[{value:"hide_title: true",id:"hide_title-true",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Trigger Interrupt Latency",id:"trigger-interrupt-latency",children:[]},{value:"Latency Under Load",id:"latency-under-load",children:[]},{value:"Worst-Case Latency",id:"worst-case-latency",children:[]},{value:"Footnotes",id:"footnotes",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"title: Measuring Response Time"),(0,a.kt)("h2",{id:"hide_title-true"},"hide_title: true"),(0,a.kt)("h1",{id:"measuring-response-time-latency--jitter"},"Measuring Response Time (Latency & Jitter)"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Whenever you want to micro-controller unit (MCU) to stop what it is doing to handle something else, an interrupt is needed to preempt the current task the MCU is executing.  When new ADC data is ready, we use an interrupt to process that new data. Similarly when the USB has incoming data, an interrupt will fire so the MCU can switch to handling the new USB data.  Interrupts enable a processor to juggle multiple tasks while still responding quickly to important events. "),(0,a.kt)("p",null,"There are numerous reasons an processor will not respond as quickly to an interrupt as one would like. Many processors use instruction pipelining and caching, and these features reduce the processor's ability to quickly run different instructions. Also, processors usually have to spend time storing the working memory of their current task before they can respond to an interrupt. Additionally, some processors need to spend time determining which interrupt fired before the they can respond appropriately. And finally, the software the processor is running can limit the response time by, for example, disabling listening to any interrupts for a period of time. "),(0,a.kt)("p",null,"In this application note, we will measure the time it takes for the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," to respond to an interrupt (often called the interrupt latency).  In order to support quick response times and high servo bandwidth, the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," has been designed to have very low interrupt latency. "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Interrupt Priority")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In this application note, we will assume that the interrupt we care about is running at the highest priority. If you have multiple interrupts firing then anything with a lower priority will be delayed until the higher priority interrupt finishes. In such a situation, the interrupt latency becomes much more complex for low-priority interrupts."))),(0,a.kt)("h2",{id:"trigger-interrupt-latency"},"Trigger Interrupt Latency"),(0,a.kt)("p",null,"In this example, we will measure the interrupt latency from an external trigger, although the data would look the same for new ADC data as well. Here is basic code for configuring an interrupt to execute the function ",(0,a.kt)("inlineCode",{parentName:"p"},"gotTrigger")," on the rising edge of Trigger 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {  \n  setTrigger2Direction(PIN_DIRECTION_OUTPUT); // Use Trigger 2 as output\n  enableInterruptTrigger1(true, gotTrigger); // Run gotTrigger on Trigger 1 rising edge\n}\n\nvoid gotTrigger(void) {\n  setTrigger2High(); // Set Trigger 2 to go high so when know when function begins to run\n  delayNanoseconds(100); // Function runs too fast to see Trigger 2 pulse on O-scope otherwise\n  setTrigger2Low(); // Set Trigger 2 go to low when function completes\n}\n")),(0,a.kt)("p",null,"An oscilloscope is configured to display with 10s of persistence so we can see multiple trigger responses on the same screen. The cyan trace shows the Trigger 1 input and yellow shows Trigger 2."),(0,a.kt)("img",{className:"center",src:"/img/isr-latency-p1.png"}),(0,a.kt)("p",null,"The Trigger 2 goes high about 110ns after the Trigger 1 goes high. So the Interrupt Latency is approximately 110ns. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gotTrigger()")," function finishes executing about 90ns later. Because of the persistence setup on the oscilloscope, the yellow trace is broadened by the timing jitter, as sometimes the response is a little faster or slower. But this is on the order of only 10ns. "),(0,a.kt)("p",null,"While 110ns latency is terrific, this is under ideal circumstances as we will see in the next section."),(0,a.kt)("h2",{id:"latency-under-load"},"Latency Under Load"),(0,a.kt)("p",null,"The previous code generated a nice baseline, however, the MCU was never doing anything except handling the Trigger 1 interrupt, so it was in an ideal position to respond quickly. Realistically, the MCU will be busy handling USB data and doing other tasks in the main loop. This will add jitter to the latency as sometimes the MCU is idle and sometimes it has to store what it is working on to memory before it can respond to the interrupt. To model this better, we've added a new loop function that the MCU continuously runs. In the loop, we will do a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB: echo back any USB data that is received"),(0,a.kt)("li",{parentName:"ul"},"Math: Do a math calculation all the time in the loop function"),(0,a.kt)("li",{parentName:"ul"},"LED: Toggle the front panel LED every 500ms")),(0,a.kt)("p",null,"The new code is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {  \n  setTrigger2Direction(PIN_DIRECTION_OUTPUT); // Use Trigger 2 as output\n  enableInterruptTrigger1(true, gotTrigger); // Run gotTrigger on Trigger 1 rising edge\n}\n\nvoid gotTrigger(void) {  \n  setTrigger2High(); // Set Trigger 2 to go high so when know when function begins to run\n  delayNanoseconds(100); // Function runs too fast to see Trigger 2 pulse on O-scope otherwise  \n  setTrigger2Low(); // Set Trigger 2 go to low when function completes\n}\n\nvoid loop() {\n  static unsigned long lastrun;\n  static signed long total;\n\n  if (millis() > lastrun + 500) { //Run once every 500ms            \n    toggleLEDGreen(); //toggle green LED;            \n    lastrun = lastrun + 500;\n  }\n\n  total += 324*(total-2343); //do some math in main loop\n\n  char dat;\n  while (Serial.available() > 0) {\n    dat = Serial.read(); //Read USB data if available\n    Serial.print(dat); //Echo data back over USB\n  }  \n}\n")),(0,a.kt)("p",null,"An external function generator was used to have Trigger 1 go from low to high once every 1\u03bcs (frequency of 1 MHz) and a python script was used to stream data in and out of the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," (18 Mbps down, 18 Mbps up). While all this was happening , let's look at the response time again with the oscilloscope still set at 10s persistence: "),(0,a.kt)("img",{className:"center",src:"/img/isr-latency-p2.png"}),(0,a.kt)("p",null,"The response it still usually about 110ns, however, over the 10s oscilloscope window, we can see there are numerous events where the latency is higher. Especially when using the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," for servoing, the consistency of the response time is just as important as the response time is itself. In the worst case, Trigger 2 falls 275ns after the rising edge of Trigger 1. That 275ns includes the interrupt latency, the function execution time and the maximum timing jitter.  With the minimal latency of 110ns and the function taking 90ns to run, the jitter is the remainder: 275ns - 110ns -90ns = 75ns. So the interrupt latency varies between 110ns and 185ns. "),(0,a.kt)("h2",{id:"worst-case-latency"},"Worst-Case Latency"),(0,a.kt)("p",null,"There is another limitation on the latency that we haven't mentioned: getting data into and out of the floating point unit (FPU). If the main process is doing floating point math (using ",(0,a.kt)("inlineCode",{parentName:"p"},"floats")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"doubles")," in C), then it is using the FPU. If an interrupt fires that also needs to do floating point math, then, just like the MCU, the FPU needs to clean up and store what it is working on before it can process the new data. This adds additional jitter to the interrupt latency we measured previously. To test this, we will take our previous code but have both the main loop and the trigger interrupt do math on double precision floats. The new code is below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {  \n  setTrigger2Direction(PIN_DIRECTION_OUTPUT); // Use Trigger 2 as output\n  enableInterruptTrigger1(true, gotTrigger); // Run gotTrigger on Trigger 1 rising edge\n}\ndouble DACout = 0; //global variable used by main loop and gotTrigger\n\nvoid gotTrigger(void) {  \n  setTrigger2High(); // Set Trigger 2 to go high so when know when function begins to run\n  writeDAC1(DACout*(DACout*2.342-3.232)); //Do some floating point math and then update the DAC with the result\n  delayNanoseconds(100); // Function runs too fast to see Trigger 2 pulse on O-scope otherwise  \n  setTrigger2Low(); // Set Trigger 2 to go low when function completes\n}\n\nvoid loop() {\n  static unsigned long lastrun;\n  static signed long total;\n\n  if (millis() > lastrun + 500) { //Run once every 500ms            \n    toggleLEDGreen(); //toggle green LED;            \n    lastrun = lastrun + 500;\n  }\n\n  DACout += 3.2342*sin(DACout*23.234+65.324); //do some FPU math in main loop\n\n  char dat;\n  while (Serial.available() > 0) {\n    dat = Serial.read(); //Read USB data if available\n    Serial.print(dat); //Echo data back over USB\n  }  \n}\n")),(0,a.kt)("p",null,"In summary, the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," is doing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every 1\u03bcs, handle external trigger, do floating point math and update the DAC"),(0,a.kt)("li",{parentName:"ul"},"Do floating point math in main loop all the time"),(0,a.kt)("li",{parentName:"ul"},"Receive USB data at 15 Mbps"),(0,a.kt)("li",{parentName:"ul"},"Transmit USB data at 15 Mbps")),(0,a.kt)("p",null,"In this setup, we get the following latency measurement:"),(0,a.kt)("img",{className:"center",src:"/img/isr-latency-p3.png"}),(0,a.kt)("p",null,"The interrupt latency is now rarely at 110ns, but usually closer to 125ns. However, the worst case latency is 210ns. So the interrupt latency varies between 110ns and 210ns and the maximum jitter is now 100ns (before it was 75ns). Additionally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"gotTrigger")," function now takes 160ns as it is doing math and updating the DAC in addition to the 100ns delay we programmed in. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gotTrigger")," function sometimes finishes as late as 370ns after the trigger fired, which is consistent with 110ns latency + 100 ns jitter + 160ns execution time.  Even when pushing the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," to its limits, the interrupt latency is bounded to be under about 210ns."),(0,a.kt)("p",null,"For a 100 kHz PID Servo, the total loop delay is 5us (180\xb0 phase shift at 100kHz),  so 100ns of timing jitter is only 2% timing variation, a small effect. Having consistent and bounded interrupt latency is crucial for consistent loop bandwidths and response times."),(0,a.kt)("h2",{id:"footnotes"},"Footnotes"),(0,a.kt)("p",null,"To generate the data presented above, the following python script was used to stream data to and from the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import serial,time,os\nser = serial.Serial('COM4')\npackets = 400\nloops = 200\npacketSizeSend = 64*64 \npacketSizeReceive = packetSizeSend\n\nloop=0\nfor empty in range(loops):\n    loop = loop + 1\n    start=time.time()\n    for i in range(packets):\n        byte = os.urandom(packetSizeSend)\n        ser.write(byte)\n        data=ser.read(packetSizeReceive)\n\n        if byte != data:\n            print('Error: Return data does not match. Length = {} and {}'.format(len(byte),len(data)))\n\n    stop=time.time()\n    rescaleSend = 8*packetSizeSend*packets/1000000.0/max(.000001,(stop-start))\n    rescaleReceive = 8*packetSizeReceive*packets/1000000.0/max(.000001,(stop-start))\n    print('Send Rate: {:0.2f} MBaud, Receive Rate: {:0.2f} MBaud. Got {} kBytes and received {} kBytes in {:0.2f} ms (Loop {}/{})'.format(rescaleSend,rescaleReceive,packets*packetSizeSend/1000,packets*packetSizeReceive/1000,(stop-start)*1000,loop,loops))\ndel ser\n")),(0,a.kt)("p",null,"Running the script with the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," running the code from the ",(0,a.kt)("a",{parentName:"p",href:"#worst-case-latency"},"Worst-Case Latency")," section outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\nSend Rate: 15.79 MBaud, Receive Rate: 15.79 MBaud. Got 1638.4 kBytes and received 1638.4 kBytes in 830.08 ms (Loop 196/200)\nSend Rate: 15.56 MBaud, Receive Rate: 15.56 MBaud. Got 1638.4 kBytes and received 1638.4 kBytes in 842.31 ms (Loop 197/200)\nSend Rate: 15.46 MBaud, Receive Rate: 15.46 MBaud. Got 1638.4 kBytes and received 1638.4 kBytes in 847.92 ms (Loop 198/200)\nSend Rate: 15.68 MBaud, Receive Rate: 15.68 MBaud. Got 1638.4 kBytes and received 1638.4 kBytes in 835.76 ms (Loop 199/200)\nSend Rate: 15.67 MBaud, Receive Rate: 15.67 MBaud. Got 1638.4 kBytes and received 1638.4 kBytes in 836.39 ms (Loop 200/200)\n")))}p.isMDXComponent=!0}}]);