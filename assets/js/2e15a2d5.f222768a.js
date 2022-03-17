"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[462],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],u={slug:"Pulsed_Output",title:"Pulsed Arbitrary Output Waveform",sidebar_label:"Pulsed Output Waveform"},l=void 0,s={unversionedId:"Examples/PulsedOutput",id:"Examples/PulsedOutput",title:"Pulsed Arbitrary Output Waveform",description:"The Quarto can act an arbitrary waveform generator. But more than that, its output can be externally controlled. In this example, the Quarto outputs 10 periods of a 10 kHz sine wave whenever trigger signal goes high.",source:"@site/Quarto/Examples/PulsedOutput.md",sourceDirName:"Examples",slug:"/Examples/Pulsed_Output",permalink:"/Quarto/Examples/Pulsed_Output",tags:[],version:"current",frontMatter:{slug:"Pulsed_Output",title:"Pulsed Arbitrary Output Waveform",sidebar_label:"Pulsed Output Waveform"},sidebar:"autoSideBar",previous:{title:"Analog Filter",permalink:"/Quarto/Examples/Filter"},next:{title:"PID Servo",permalink:"/Quarto/Examples/Servo"}},p={},c=[{value:"Setup",id:"setup",level:2},{value:"Main Code",id:"main-code",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Data",id:"data",level:2}],d={toc:c};function g(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Quarto")," can act an arbitrary waveform generator. But more than that, its output can be externally controlled. In this example, the ",(0,i.kt)("em",{parentName:"p"},"Quarto")," outputs 10 periods of a 10 kHz sine wave whenever trigger signal goes high."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"We will use a timer to set the update frequency on the analog output signal (DAC). We will instantiate this ",(0,i.kt)("inlineCode",{parentName:"p"},"IntervalTimer")," object at the top of our code (and not inside a function) so it is accessible by any function.  Additionally we will create another global variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"DACcounts")," to keep track of where in the waveform cycle the program is currently. This can be done with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"IntervalTimer DAC_Timer; //IntervalTimer object called DAC_Timer\nint DACcounts = 0; \n")),(0,i.kt)("p",null,"In the setup function, we configure trigger 1 as an input (this isn't strictly necessary since all digital signals start as inputs) and we configure the function ",(0,i.kt)("inlineCode",{parentName:"p"},"start_pattern")," to run whenever there is a rising edge on trigger 1. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n  triggerMode(1, INPUT); // Set trigger1 as input  \n  enableInterruptTrigger(1,RISING_EDGE,&start_pattern); //On rising edge, run start_pattern\n}\n")),(0,i.kt)("h2",{id:"main-code"},"Main Code"),(0,i.kt)("p",null,"Now we define the function ",(0,i.kt)("inlineCode",{parentName:"p"},"start_pattern")," that gets run on the rising edge of trigger 1. We want it to begin the sequence of updating the DAC with our analog output pattern. So we want to reset the ",(0,i.kt)("inlineCode",{parentName:"p"},"DACcounts")," variable and enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"DAC_Timer"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void start_pattern() {  \n  DACcounts = 0; //reset DACcounts\n  DAC_Timer.begin(updateDAC, 1); //start timer to run every 1\u03bcs and call updateDAC\n}\n")),(0,i.kt)("p",null,"So, now whenever trigger 1 goes high, we will set DACcounts to 0 and start a timer to run the function ",(0,i.kt)("inlineCode",{parentName:"p"},"updateDAC")," once per 1\u03bcs. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"updateDAC")," writes to the DAC and stops the timer when the sequence is complete."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void updateDAC() {\n  float value = 2.5 * sin(DACcounts * 2 * PI/100 ) ; //generate sin wave at 10kHz\n  writeDAC(1,value); //write value to DAC\n  DACcounts++; // increment DACcounts by one.\n\n  if (DACcounts == 1000) { // after 1000 data points (10 periods) stop\n    DAC_Timer.end();\n  }\n}\n")),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("p",null,"Putting this altogether (and code to pulse the LED every second), we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"IntervalTimer DAC_Timer; \nunsigned int DACcounts = 0; //store how many DAC updates have been complete\n\nvoid setup() {\n  triggerMode(1, INPUT); // Set trigger1 as input  \n  enableInterruptTrigger(1,RISING_EDGE,&start_pattern); //On rising edge, run start_pattern\n}\n\nvoid start_pattern() {  \n  DACcounts = 0; //reset DACcounts\n  DAC_Timer.begin(updateDAC, 1); //start timer to run every 1us and call updateDAC\n}\n\nvoid updateDAC() {\n  float value = 2.5 * sin(DACcounts * 2 * PI/100 ) ; //generate sin wave at 10kHz\n  writeDAC(1,value); //write value to DAC\n  DACcounts++; // increment DACcounts by one.\n\n  if (DACcounts == 1000) { // after 1000 data points (10 periods) stop\n    DAC_Timer.end();\n  }\n}\n\nvoid loop() {\n  static unsigned int lastrun1;\n  if (millis() > lastrun1 + 500) {            \n      lastrun1 = millis();\n      toggleLEDGreen();\n  }\n}\n\n")),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("p",null,"Using this code, if when you send trigger 1 high, you'll get 10 cycles of a 10 kHz sine wave as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"img",src:n(8538).Z,width:"800",height:"480"})))}g.isMDXComponent=!0},8538:function(e,t,n){t.Z=n.p+"assets/images/pulsed_output-p1-1efe346cbcc6ee83742abc123f79542d.png"}}]);