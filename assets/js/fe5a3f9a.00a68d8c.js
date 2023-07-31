"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[2943],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),c=i(t),u=s,N=c["".concat(l,".").concat(u)]||c[u]||h[u]||m;return t?n.createElement(N,p(p({ref:a},o),{},{components:t})):n.createElement(N,p({ref:a},o))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,p=new Array(m);p[0]=u;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[c]="string"==typeof e?e:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8194:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>r,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const m={id:"LockIn",slug:"LockIn",title:"Lock-in Amplifier",sidebar_label:"Lock-in Amplifier",sidebar_position:20,keywords:["Lock-In","PDH","Pound-Drevel-Hall","Frequency Modulation"],description:"Example for using the Quarto as a Lock-In Amplifer"},p=void 0,r={unversionedId:"Examples/LockIn",id:"Examples/LockIn",title:"Lock-in Amplifier",description:"Example for using the Quarto as a Lock-In Amplifer",source:"@site/Quarto/Examples/LockIn.md",sourceDirName:"Examples",slug:"/Examples/LockIn",permalink:"/Quarto/Examples/LockIn",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"LockIn",slug:"LockIn",title:"Lock-in Amplifier",sidebar_label:"Lock-in Amplifier",sidebar_position:20,keywords:["Lock-In","PDH","Pound-Drevel-Hall","Frequency Modulation"],description:"Example for using the Quarto as a Lock-In Amplifer"},sidebar:"autoSideBar",previous:{title:"Analog Filter",permalink:"/Quarto/Examples/Filter"},next:{title:"PID Servo",permalink:"/Quarto/Examples/Servo"}},l={},i=[{value:"Generate Reference",id:"generate-reference",level:2},{value:"Demodulate",id:"demodulate",level:2},{value:"Speed Optimization",id:"speed-optimization",level:3},{value:"Data",id:"data",level:3},{value:"Adjustable Parameters",id:"adjustable-parameters",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Using the Lock-in",id:"using-the-lock-in",level:2}],o={toc:i},c="wrapper";function h(e){let{components:a,...m}=e;return(0,s.kt)(c,(0,n.Z)({},o,m,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example will show how to use the ",(0,s.kt)("em",{parentName:"p"},"Quarto")," as a lock-in amplifier. "),(0,s.kt)("h2",{id:"generate-reference"},"Generate Reference"),(0,s.kt)("p",null,"We will use the ADC sampling rate as the 'heartbeat' to control the timing of the full system. The first step is to configure ADC channel 1 to collect data every 2\xb5s with a voltage range of \xb110V (see ",(0,s.kt)("a",{parentName:"p",href:"Servo"},"PID Servo")," for more details on this setup). The function ",(0,s.kt)("inlineCode",{parentName:"p"},"getADC1")," will run when there is new ADC data (every 2\xb5s) and in that function we will update DAC channel 1 to generate a sine-wave output."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"const uint SampleRate = 2;\ndouble frequency = 10e3;\ndouble amplitude = 5.0;\n\nvoid setup(void) {  \n  configureADC(1,SampleRate,0,BIPOLAR_10V,getADC1); // Have ADC take measurement every 2us, \xb110V range\n}\n\nvoid getADC1(void) {\n  static double cycle = 0; //track phase/(2*pi) which is cycle fraction (one cycle=2pi). \n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  cycle += frequency / (1e6/SampleRate); //1e6/SampleRate is sample freq (500kHz);  freq normed to that\n    \n  writeDAC(1,amplitude*sin(2*PI*cycle)); //DAC output is sin(2*pi*cycle) \n  if (cycle > 1) cycle -= 1; //reset phase so no overflows\n}\n")),(0,s.kt)("p",null,"Everytime the ADC gets a new datapoint, we increment the phase and take the sine of that phase to get the desired DAC output. Mathematically we track ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mtext",{parentName:"mrow"},"phase"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mrow",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"\u03c0"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{\\text{phase}/{2\\pi}}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"phase")),(0,s.kt)("span",{parentName:"span",className:"mord"},"/"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))))," instead of phase so the phase-resets do not have rounding errors from the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2\\pi")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"))))),"."),(0,s.kt)("h2",{id:"demodulate"},"Demodulate"),(0,s.kt)("p",null,"At the heart of a lock-in amplifier is a multiplier. By multiplying the input signal by the reference signal, the component of the input signal at the reference frequency gets moved to DC, where it can be measured more directly. In analog circuits, this is done with a mixer, but with ",(0,s.kt)("em",{parentName:"p"},"Quarto")," we can just multiply the digitized signals:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"double multiplied = newadc * sin(2*PI*cycle);\n")),(0,s.kt)("p",null,"We can then output that new signal on Analog Output #2 (DAC2):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"const uint SampleRate = 2;\ndouble frequency = 10e3;\ndouble phase = 0;\ndouble amplitude = 5.0;\n\nvoid setup(void) {  \n  configureADC(1,SampleRate,0,BIPOLAR_10V,getADC1); // Have ADC take measurement every 2us, \xb110V range\n}\n\nvoid getADC1(void) {\n  static double cycle = 0; //track phase/(2*pi) which is cycle fraction (one cycle=2pi). \n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  cycle += frequency / (1e6/SampleRate); //1e6/SampleRate is sample freq (500kHz); freq normed to that\n    \n  writeDAC(1,amplitude*sin(2*PI*cycle)); //DAC output is sin(2*pi*cycle) \n  double multiplied = newadc * sin(2*PI*(cycle + phase/360));\n  writeDAC(2,multiplied);  \n  if (cycle > 1) cycle -= 1; //reset phase so no overflows\n}\n")),(0,s.kt)("h3",{id:"speed-optimization"},"Speed Optimization"),(0,s.kt)("p",null,"While it does not matter much in this demo, if using the DAC2 output as part of a servo loop, decreasing the latency on the DAC update may be important.  Let's look at the sequence of events that happens inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"getADC1")," function:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"New ADC data comes in"),(0,s.kt)("li",{parentName:"ol"},"Update cycle count"),(0,s.kt)("li",{parentName:"ol"},"Calculate sine of new cycle count"),(0,s.kt)("li",{parentName:"ol"},"Update DAC1 with sine result"),(0,s.kt)("li",{parentName:"ol"},"Calculate sine of cycle count plus phase shift"),(0,s.kt)("li",{parentName:"ol"},"Update DAC2 with sine result times ADC data")),(0,s.kt)("p",null,"Calculating the sine is a relatively slow calculation that can often take ~600ns (the time varies based on the input value) so doing two of those calculations will add some delay to the sequence. However, neigher sine calculation uses the ADC data as an argument. This means that we know ahead of time what sine calculations we will need, so we can precalcuate them. This enables us to re-order the calcuation such that the DAC2 update is earlier in the process:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"New ADC data comes in"),(0,s.kt)("li",{parentName:"ol"},"Update DAC1 with stored sine result"),(0,s.kt)("li",{parentName:"ol"},"Update DAC2 with other stored sine times ADC data"),(0,s.kt)("li",{parentName:"ol"},"Update cycle count"),(0,s.kt)("li",{parentName:"ol"},"Calculate sine of new cycle count and store"),(0,s.kt)("li",{parentName:"ol"},"Calculate sine of new cycle count plus phase shift and store")),(0,s.kt)("p",null,"All we have done is reorder the operations, but now the delay in changes so the DAC2 output is set only by steps  1 -  3, instead of steps 1 - 6.  Here's the updated function ",(0,s.kt)("inlineCode",{parentName:"p"},"getADC1")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"void getADC1(void) {\n  static double nextSin = 0;\n  static double nextSinWithPhase = 0;\n  static double cycle = 0; //track phase/(2*pi) which is cycle fraction (one cycle=2pi). \n\n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  writeDAC(1,amplitude*nextSin); //DAC output is sin(2*pi*cycle) \n  double multiplied = newadc * nextSinWithPhase; //put phase in units if degrees\n  writeDAC(2,multiplied); \n  \n  cycle += frequency / (1e6/SampleRate); //1e6/SampleRate is sample freq (500kHz);  freq normed to that\n  if (cycle > 1) cycle -= 1; //reset phase so no overflows\n  nextSin = sin(2*PI*cycle);      \n  nextSinWithPhase = sin(2*PI*(cycle + phase/360));\n}\n")),(0,s.kt)("p",null,"This optimization decreases the latency of the ",(0,s.kt)("em",{parentName:"p"},"Quarto"),", but does not change how much time is spent processing the data.  If you wanted to do that, one technique would be to set the output frequency to be the ADC rate (or a low multiple of it) divided by an integer. This would make the sine calculations periodic and they could all be calculated once ahead of time and then ",(0,s.kt)("inlineCode",{parentName:"p"},"getADC1")," could just lookup the right value. The approach shown here however yields good latency and lets the frequency be set arbitrarily."),(0,s.kt)("h3",{id:"data"},"Data"),(0,s.kt)("p",null,"If you connect the Analog Output #1 to the Analog Input #1 input, then the output on Analog Ouput #2 will be a sine wave at twice the frequency and half the amplitude and a DC offset equal to half the amplitude. This is because of the trig identity:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"1"),(0,s.kt)("mn",{parentName:"mfrac"},"2")),(0,s.kt)("mo",{parentName:"mrow",fence:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",fence:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sin(x) * sin(x) = \\frac{1}{2} \\big(1 - cos(2 x)\\big)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.00744em",verticalAlign:"-0.686em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.32144em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"delimsizing size1"},"(")),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.20001em",verticalAlign:"-0.35001em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"delimsizing size1"},")"))))))),(0,s.kt)("p",null,"The image below shows the Analog Input #1 sine wave (yellow trace) and the multiplied Analog Output #2 (cyan trace):\n",(0,s.kt)("img",{alt:"img",src:t(6267).Z,width:"800",height:"480"})),(0,s.kt)("h2",{id:"adjustable-parameters"},"Adjustable Parameters"),(0,s.kt)("p",null,"In the above example, the output sine wave was fixed at an amplitude of 5V, a frequency of 10 kHz, and the phase shift between the output frequency and the demodulation was also fixed at 0\xb0. We will use the qCommand library to use Serial commands to adjust these parameters (see ",(0,s.kt)("a",{parentName:"p",href:"Commands"},"Serial Commands")," for more details).  The new code is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include "qCommand.h"\nqCommand qC;\n\nconst uint SampleRate = 2;\ndouble frequency = 10e3;\ndouble phase = 0;\ndouble amplitude = 5;\n\nvoid setup(void) {  \n  configureADC(1,SampleRate,0,BIPOLAR_10V,getADC1); // Have ADC take measurement every 2us, \xb110V range\n  qC.assignVariable("Freq",&frequency);\n  qC.assignVariable("Phase",&phase);\n  qC.assignVariable("Amp",&amplitude);\n}\n\nvoid loop(void) {\n  qC.readSerial(Serial);\n  qC.readSerial(Serial2);\n}\n\nvoid getADC1(void) { \n  static double nextSin = 0;\n  static double nextSinWithPhase = 0;\n  static double cycle = 0; //track phase/(2*pi) which is cycle fraction (one cycle=2pi). \n  double newadc = readADC1_from_ISR(); //read ADC voltage\n\n  writeDAC(1,amplitude*nextSin); //DAC output is sin(2*pi*cycle) \n  double multiplied = newadc * nextSinWithPhase; //put phase in units if degrees\n  writeDAC(2,multiplied); \n    \n  cycle += frequency / (1e6/SampleRate); //1e6/SampleRate is sample freq (500kHz);  freq normed to that\n  if (cycle > 1) cycle -= 1; //reset phase so no overflows\n  nextSin = sin(2*PI*cycle);      \n  nextSinWithPhase = sin(2*PI*(cycle + phase/360));\n}\n')),(0,s.kt)("p",null,"Now we can adjust the phase (and frequency and amplitude) over the serial port:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},">>phase 180\n<< phase is 1.8000000e+02\n")),(0,s.kt)("p",null,"And when we do that, our trig equation becomes "),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"1"),(0,s.kt)("mn",{parentName:"mfrac"},"2")),(0,s.kt)("mo",{parentName:"mrow",fence:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",fence:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"sin(x) * sin(-x) = \\frac{1}{2} \\big(cos(2 x) - 1 \\big)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.00744em",verticalAlign:"-0.686em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.32144em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"delimsizing size1"},"(")),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.20001em",verticalAlign:"-0.35001em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"delimsizing size1"},")"))))))),(0,s.kt)("p",null,"The same setup on an O-scope now looks like:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(7399).Z,width:"800",height:"480"})),(0,s.kt)("h2",{id:"filtering"},"Filtering"),(0,s.kt)("p",null,"Often however, the oscillation at twice the reference frequency (2f) isn't desired and we want to filter it out. We will use the simple first-order IIR filter described in more detail  in ",(0,s.kt)("a",{parentName:"p",href:"Filter#the-digital-filter"},"Digital Filter section of the Analog Filter Example"),". To set the cut-off frequency to will use a custom qCommand function so we can input a frequency in Hz and calculate that right value of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03b1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\alpha")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))))," for the filter. Here's the code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'#include "qCommand.h"\nqCommand qC;\n\nconst uint SampleRate = 2;\n\ndouble frequency = 10e3;\ndouble phase = 0;\ndouble amplitude = 5;\ndouble filter = 1e3; //default 1kHz\ndouble alpha = 0.012488; // alpha for default 1 kHz\ndouble output = 0;\n\nvoid setup(void) {  \n  configureADC(1,SampleRate,0,BIPOLAR_10V,getADC1); // Have ADC take measurement every 2us, \xb110V range\n  qC.assignVariable("Freq",&frequency);\n  qC.assignVariable("Phase",&phase);\n  qC.assignVariable("Amp",&amplitude);\n  qC.assignVariable("Output",&output);\n  qC.addCommand("Filter",&adjFilter);\n}\n\nvoid loop(void) {\n  qC.readSerial(Serial);\n  qC.readSerial(Serial2);\n}\n\nvoid getADC1(void) {\n  static double nextSin = 0;\n  static double nextSinWithPhase = 0;\n  static double cycle = 0; //track phase/(2*pi) which is cycle fraction (one cycle=2pi).\n  double newadc = readADC1_from_ISR(); //read ADC voltage\n\n  writeDAC(1,amplitude*nextSin); //DAC output is sin(2*pi*cycle)\n  double multiplied = newadc * nextSinWithPhase; //put phase in units if degrees\n  output = alpha * multiplied + (1-alpha) * output; //apply IIR filter on multiplied value\n  writeDAC(2,output);  \n  \n  cycle += frequency / (1e6/SampleRate); //1e6/SampleRate is sample freq (500kHz);  freq normed to that\n  if (cycle > 1) cycle -= 1; //reset phase so no overflows\n  nextSin = sin(2*PI*cycle);\n  nextSinWithPhase = sin(2*PI*(cycle + phase/360));\n}\n\nvoid adjFilter(qCommand& qC, Stream& S) {\n  if ( qC.next() != NULL) {\n    double filterInput = atof(qC.current());\n    if (filterInput < 0 ) {\n      filter = 0; //keep frequency filter positive\n      alpha = 0; //at filter = 0Hz, output cannot update, alpha is zero\n    } else if (filterInput > 250e3/SampleRate) { // IIR no valid beyond sampleRate/4\n      filter = INFINITY;\n      alpha = 1; //no filtering\n    } else {\n      filter = filterInput;\n      double y = tan(PI * filter * SampleRate * 1e-6);\n      alpha = 2 * y / (y+1);\n    }\n  }        \n    S.printf("The filter frequency is %f (and alpha=%f)\\n",filter,alpha);\n}\n')),(0,s.kt)("p",null,"Now we can adjust the filtering on the fly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},">> filter 20e3\n<< The filter frequency is 20000.000000 (and alpha=0.224320)\n>> filter 1e3\n<< The filter frequency is 1000.000000 (and alpha=0.012488)\n")),(0,s.kt)("p",null,"Below are two O-scope screen shots showing the filtered output in cyan with a reference grey trace showing the results without any filtering. The first image shows a 20 kHz filter, causing the amplitude of the 2f frequency component to be reduced by ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msqrt"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sqrt{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.04em",verticalAlign:"-0.13278em"}}),(0,s.kt)("span",{parentName:"span",className:"mord sqrt"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.90722em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.86722em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.13278em"}},(0,s.kt)("span",{parentName:"span"})))))))))," . The second image is with a filter of 1kHz where the 2f component is reduced by ~20."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(967).Z,width:"800",height:"480"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(4151).Z,width:"800",height:"480"})),(0,s.kt)("h2",{id:"using-the-lock-in"},"Using the Lock-in"),(0,s.kt)("p",null,"With this setup, we can actually measure the phase-delay caused by the ",(0,s.kt)("em",{parentName:"p"},"Quarto"),". If the ",(0,s.kt)("em",{parentName:"p"},"Quarto")," had zero signal delay (infinite bandwidth), then the output signal would be maximized with a phase shift of 0\xb0 and, conversely the output would be zero with a phase shift of 90\xb0.  But the process reading, writing and filtering analog data takes some time, causing a phase shift relative to the expected value. By adjusting the phase we can compensate for this shift and measure the phase shift caused by the ",(0,s.kt)("em",{parentName:"p"},"Quarto"),". "),(0,s.kt)("p",null,"The first step is to setup an agressive filter so we can precisely measure the output voltage. It is easier to measure when a signal is at 0V than when it is maximized, so we will look for the phase necessary to get zero output (ideal is 90\xb0). Also, we will use the command 'Output' to measure the output voltage directly from the ",(0,s.kt)("em",{parentName:"p"},"Quarto"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},">> filter 10\n<< The filter frequency is 10.000000 (and alpha=0.000126)\n>> phase 90\n>> phase is 9.000000e+01\n<< output\n>> output is -0.767086\n>> output is -0.768395\n>> output is -0.767349\n>> output is -0.767659\n>> output is -0.766547\n>> output is -0.766430\n>> output is -0.768701\n>> output is -0.766498\n>> output is -0.766945\n")),(0,s.kt)("p",null," We can see that with a 90\xb0 phase shift, the output is -0.767V with a standard deviation of about 800uV, which should be low enough make a precise measurement. If we change the phase, we can see the output change:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},">> phase 95\n<< phase is 9.500000e+01\n>> output\n<< output is -0.970563\n>> phase 85\n<< phase is 8.500000e+01\n>> output\n<< output is -0.559031\n")),(0,s.kt)("p",null,"Experimentally, the zero crossing was found around 72.1\xb0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},">> phase 72.1\n<< phase is 7.210000e+01\n>> output\n<< output is -8.996903e-04\n<< output is 1.919594e-04\n<< output is -2.021857e-03\n")),(0,s.kt)("p",null,"This is a phase shift of about 18\xb0 from the expected 90\xb0. See ",(0,s.kt)("a",{parentName:"p",href:"../AppNotes/AnalogResponseTime"},"Analog Response Time")," for more details, but this is expected since the ",(0,s.kt)("em",{parentName:"p"},"Quarto")," has 100 kHz of servo bandwidth when sampling at 2\xb5s. That works out to 180\xb0 phase shift at 100 kHz, which would be an 18\xb0 phase-shift at 10 kHz."))}h.isMDXComponent=!0},6267:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/LockIn-Oscope-P1-bb870049ea34b9eba1aae7ece35147f2.png"},7399:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/LockIn-Oscope-P2-dde1ab5be1da65ebf19d524689bc7543.png"},967:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/LockIn-Oscope-P3-82f4d492f14e3812b8003d20c07d9e3b.png"},4151:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/LockIn-Oscope-P4-cacd11e9882f14f365dd4dc5ba9f368e.png"}}]);