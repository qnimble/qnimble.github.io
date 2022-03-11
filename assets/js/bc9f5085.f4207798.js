"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[3925],{7631:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return g}});var a=t(7462),i=t(3366),n=(t(7294),t(3905)),c=t(9960),d=t(9055),l=["components"],r={title:"List of Functions"},s=void 0,u={unversionedId:"Software/Functions",id:"Software/Functions",title:"List of Functions",description:"The following is a list of Quarto specific functions and other useful functions, but hardly a complete list. For additional functions please see the Arduino Language Reference. The Quarto can run Arduino or standard c/c++ functions.",source:"@site/Quarto/Software/Functions.md",sourceDirName:"Software",slug:"/Software/Functions",permalink:"/Quarto/Software/Functions",tags:[],version:"current",frontMatter:{title:"List of Functions"},sidebar:"quarto_main_sidebar",previous:{title:"Pulsed Output Waveform",permalink:"/Quarto/Examples/Pulsed_Output"},next:{title:"ADC",permalink:"/Quarto/Software/ADC"}},m=[{value:"ADC Functions",id:"adc-functions",children:[],level:3},{value:"DAC Functions",id:"dac-functions",children:[],level:3},{value:"Digital I/O (GPIO)",id:"digital-io-gpio",children:[],level:3},{value:"Trigger I/O",id:"trigger-io",children:[],level:3},{value:"LEDs",id:"leds",children:[],level:3}],k={toc:m};function g(e){var o=e.components,t=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},k,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following is a list of ",(0,n.kt)("em",{parentName:"p"},"Quarto")," specific functions and other useful functions, but hardly a complete list. For additional functions please see the ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/"},"Arduino Language Reference"),". The ",(0,n.kt)("em",{parentName:"p"},"Quarto")," can run Arduino or standard c/c++ functions."),(0,n.kt)("h3",{id:"adc-functions"},"ADC Functions"),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"ADC#configureadc",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void configureADC(channel, fire_every_us, fire_delay, scale, cb_function);","\n","//scale options are BIPOLAR_1250mV, BIPOLAR_2500mV, BIPOLAR_5V or BIPOLAR_10V")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"ADC#readadcx_from_isr",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"double readADCX_from_ISR(void);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"ADC#readadcrawx_from_isr",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"int16_t readRAWADCX_from_ISR(void);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"ADC#disableadc",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void disableADC(channel);")),(0,n.kt)("h3",{id:"dac-functions"},"DAC Functions"),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"DAC#writedac",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void writeDAC(channel, voltage);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"DAC#writedacraw",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void writeDACRAW(channel, data);")),(0,n.kt)("h3",{id:"digital-io-gpio"},"Digital I/O (GPIO)"),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Digital#pinmode",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void pinMode(pin, mode);","\n","//mode can be OUTPUT, INPUT, OUTPUT_OPENDRAIN, INPUT_PULLUP or INPUT_PULLDOWN")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Digital#digitalwrite",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void digitalWrite(pin,value);","\n","//value can be LOW (0) or HIGH (1)")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Digital#digitaltoggle",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void digitalToggle(pin);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Digital#digitalread",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void digitalRead(pin);")),(0,n.kt)("h3",{id:"trigger-io"},"Trigger I/O"),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Triggers#triggermode",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void triggerMode(pin, mode);","\n","//mode can be OUTPUT, INPUT, OUTPUT_OPENDRAIN, INPUT_PULLUP or INPUT_PULLDOWN")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Triggers#triggerwrite",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void triggerWrite(pin,value);","\n","//value can be LOW (0) or HIGH (1)")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"Triggers#triggerread",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void triggerRead(pin);")),(0,n.kt)("h3",{id:"leds"},"LEDs"),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"LEDS#setled",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void setLED(bool red, bool green, bool blue);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"LEDs#toggleled",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void toggleLED(bool red, bool green, bool blue);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"LEDS#setledred--setledgreen--setledblue",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void setLEDRed(bool on);","\n","void setLEDGreen(bool on);","\n","void setLEDBlue(bool on);")),(0,n.kt)("div",{className:"code-extra"},(0,n.kt)("div",{className:"code_moreinfo"},(0,n.kt)(c.Z,{to:"LEDS#toggleledred--toggleledgreen--toggleledblue",mdxType:"Link"},"Full Function Reference")),(0,n.kt)(d.Z,{className:"language-c",mdxType:"CodeBlock"},"void toggleLEDRed(void);","\n","void toggleLEDGreen(void);","\n","void toggleLEDBlue(void);")))}g.isMDXComponent=!0}}]);