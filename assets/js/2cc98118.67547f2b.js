"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[7065],{3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return p}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),c=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,h=u["".concat(d,".").concat(p)]||u[p]||m[p]||i;return n?t.createElement(h,l(l({ref:a},s),{},{components:n})):t.createElement(h,l({ref:a},s))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1608:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var t=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={toc_max_heading_level:2},d=void 0,c={unversionedId:"Software/ADC",id:"Software/ADC",title:"ADC",description:'The following functions are available for configuring and reading analog data with the ADC. The "X" in any function name must be replaced by the channel number (1,2,3 or 4):',source:"@site/Quarto/Software/ADC.md",sourceDirName:"Software",slug:"/Software/ADC",permalink:"/Quarto/Software/ADC",tags:[],version:"current",frontMatter:{toc_max_heading_level:2},sidebar:"quarto_main_sidebar",previous:{title:"List of Functions",permalink:"/Quarto/Software/Functions"},next:{title:"DAC",permalink:"/Quarto/Software/DAC"}},s=[{value:"configureADC",id:"configureadc",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"readADCX_from_ISR",id:"readadcx_from_isr",children:[{value:"Example",id:"example-1",children:[],level:3}],level:2},{value:"readADCXRAW_from_ISR",id:"readadcxraw_from_isr",children:[{value:"Example",id:"example-2",children:[],level:3}],level:2},{value:"disableADC",id:"disableadc",children:[{value:"Example",id:"example-3",children:[],level:3}],level:2}],m={toc:s};function u(e){var a=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The following functions are available for configuring and reading analog data with the ADC. The "X" in any function name must be replaced by the channel number (1,2,3 or 4):'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configureadc"},"configureADC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#readadcx_from_isr"},"readADCX_from_ISR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#readadcrawx_from_isr"},"readADCRAWX_from_ISR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disableadcx"},"disableADC"))),(0,i.kt)("h2",{id:"configureadc"},"configureADC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void configureADC(uint8_t channel, uint16_t fire_every_us, uint16_t fire_delay, adc_scale_t scale, void (*cb_function)(void) );\n")),(0,i.kt)("p",null,"This function configures the ADC voltage range, at what interval the ADC reads a voltage and what function to call when new ADC data is ready. The function takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"channel"))," ADC channel to read from. Must be 1, 2, 3 or 4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"fire_every_us"))," 16-bit unsigned integer specifying how many \u03bcs to wait between ADC readings. The smallest value allowed is 1, which tells the ADC to fire every \u03bcs, or at 1 MHz. Since the ADC has a max data rate of 1 mega samples per second (MSPS), running at 1 MHz maximizes the ADC data rate and the remaining ADC channels cannot be used. The max value to 65535 which causes to teh ADC to read data every 65,535 \u03bcs, or at 15.26 Hz.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"fire_delay"))," 16-bit unsigned integer specifying how many \u03bcs to wail before firing. This controls the timing relationship for reading the voltage between multiple channels. If two channels are configured to fire every 10\u03bcs, then setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"fire_delay")," to 0 and 1 for the two active channels would have the two channels to fire 1\u03bcs apart and then wait 10\u03bcs before reading data again. Alternatively, setting  ",(0,i.kt)("inlineCode",{parentName:"p"},"fire_delay")," to 0 and 5 for the two active channels has the second channel read ADC data 5\u03bcs after the first channel collects data. In this setup, ADC data is read every 5\u03bcs, toggling the active channel each time. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"scale"))," Configures the input voltage range the for ADC. Valid options are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_1250mV"),"  : \xb11.25V max range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_2500mV"),": \xb12.5V max range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_5V"),": \xb15V max range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_10V"),": \xb110V max range"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"cb_function"))," Callback Function is called when ADC channel X has new data. Function must take no arguments, nor return anything. This should have the structure of"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void cb_function(void)\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure to call readADCX_from_ISR()!!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This custom function must call either readADCX_From_ISR or readADCXRAW_From_ISR (and X must match the channel). This clears the interrupt saying there is ADC data at the ready. If this is not called, the program will run the custom function over and over again and the ",(0,i.kt)("em",{parentName:"p"},"Quarto")," will crash. "))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"configureADC1(5, 0, BIPOLAR_1250mV, getADC1); //\xb11.25V, runs every 5\u03bcs\nconfigureADC2(10, 1, BIPOLAR_2500mV, getADC2); //\xb12.5V, runs every 10\u03bcs, 1\u03bc after ADC1 is read\nconfigureADC3(10, 7, BIPOLAR_5V, getADC3); //\xb15V, runs every 10\u03bcs, 6\u03bc after ADC2 is read\nconfigureADC4(10, 8, BIPOLAR_10V, getADC4);//\xb110V, runs every 10\u03bcs, 8\u03bc after ADC2 is read\n\nvoid getADC1(void) {\n    double newadc = readADC1_from_ISR(); //Read ADC data as a double\n    ...\n}\nvoid getADC2(void) {\n    double newadc = readADC2_from_ISR(); //Read ADC data as a double\n    ...\n}\nvoid getADC3(void) {\n    int16_t newadc = readADCRAW3_from_ISR(); //Read ADC data as an signed 16-bit integer\n    ...\n}\nvoid getADC4(void) {\n    int16_t newadc = readADCRAW4_from_ISR(); //Read ADC data as an signed 16-bit integer\n    ...\n}\n\n")),(0,i.kt)("h2",{id:"readadcx_from_isr"},"readADCX_from_ISR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"double readADCX_from_ISR(void);\n")),(0,i.kt)("p",null,"This function reads the ADC data when it is ready. It takes no arguments and returns the ADC voltage as a double-precision float."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Only call in ADC callback function!!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This function should only be called by a function configured as an ADC callback function, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"getADC1")," in the previous ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example"),". Otherwise, this function can return invalid data and it can corrupt other ADC measurements."))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#example"},"the above example")," for example usage."),(0,i.kt)("h2",{id:"readadcxraw_from_isr"},"readADCXRAW_from_ISR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int16_t readADCXRAW_from_ISR(void);\n")),(0,i.kt)("p",null,"This function is identical to ",(0,i.kt)("a",{parentName:"p",href:"#readadcx_from_isr"},"readADCX_from_ISR")," except it returns the RAW ADC data as a signed 16-bit number. Scaling this number to voltage requires multiplying it by a number that depends on what ADC range the ADC is set to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ADC Range ",(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_1250mV"),": 1.28V/32768 = 3.90625e-5  "),(0,i.kt)("li",{parentName:"ul"},"ADC Range ",(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_2500mV"),": 2.56V/32768 = 7.8125e-5"),(0,i.kt)("li",{parentName:"ul"},"ADC Range ",(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_5V"),": 5.12V/32768 = 1.5625e-4"),(0,i.kt)("li",{parentName:"ul"},"ADC Range ",(0,i.kt)("inlineCode",{parentName:"li"},"BIPOLAR_10V"),": 10.24V/32768 = 3.125e-4")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Only call in ADC callback function!!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This function should only be called by a function configured as an ADC callback function, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"getADC1")," in the above ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example"),". Otherwise, this function can return invalid data and it can corrupt other ADC measurements."))),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"configureADC1(5, 0, BIPOLAR_1250mV, getADC1_RAW); //\xb11.25V, runs every 5\u03bcs\nconfigureADC1(5, 2, BIPOLAR_2500mV, getADC2_RAW); //\xb12.5V, runs every 5\u03bcs\nint32_t adc_diff = 0;\n\nvoid getADC1_RAW(void) {\n    int16_t newadc = readADC1RAW_from_ISR(); //Read ADC data as a double\n    adc_sum += newadc; // add new raw ADC1 measurement to adc_sum total\n}\nvoid getADC2_RAW(void) {\n    int16_t newadc = readADC2RAW_from_ISR(); //Read ADC data as a double\n    adc_sum -= 2 * newadc; // subtract new raw ADC2 measurement to adc_sum total\n    // multiply by two because ADC2 range is \xb12.5V and ADC1 range is only \xb11.25V\n}\n")),(0,i.kt)("h2",{id:"disableadc"},"disableADC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void disableADC(uint8_t channel);\n")),(0,i.kt)("p",null,"This function takes a single argument to select the channel to disable. It disables ADC collection on ",(0,i.kt)("inlineCode",{parentName:"p"},"channel"),"  and the ADC callback function will no longer get called."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"channel"))," ADC channel to disable. Must be 1, 2, 3 or 4.")),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void ADC_collection(bool on) {\n    if (on == true) {\n        configureADC(1,5, 0, BIPOLAR_1250mV, getADC1); //\xb11.25V, runs every 5\u03bcs\n        //turn on ADC collection on channel 1\n    } else {\n        disableADC(1); //turn off ADC collection on channel 1\n    }\n}\n\nvoid getADC1(void) {\n      double newadc = readADC1_from_ISR(); //Read ADC data as a double\n      ...\n}\n")))}u.isMDXComponent=!0}}]);