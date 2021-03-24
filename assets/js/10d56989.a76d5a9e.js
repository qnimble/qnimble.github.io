(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),l=(a(0),a(109)),o={},r={unversionedId:"Software/DAC",id:"Software/DAC",isDocsHomePage:!1,title:"DAC",description:'The following functions are available for each of the 4 DAC channels. The "X" in the function name must be replaced by the channel number (1,2,3 or 4):',source:"@site/quarto/Software/DAC.md",slug:"/Software/DAC",permalink:"/Quarto/Software/DAC",version:"current",sidebar:"quarto_main_sidebar",previous:{title:"ADC",permalink:"/Quarto/Software/ADC"}},c=[{value:"writeDACX",id:"writedacx",children:[{value:"Example",id:"example",children:[]}]},{value:"writeDACRAWX",id:"writedacrawx",children:[{value:"Example",id:"example-1",children:[]}]},{value:"writeDAC",id:"writedac",children:[{value:"Example",id:"example-2",children:[]}]},{value:"writeDACRAW",id:"writedacraw",children:[{value:"Example",id:"example-3",children:[]}]}],b={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,'The following functions are available for each of the 4 DAC channels. The "X" in the function name must be replaced by the channel number (1,2,3 or 4):'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#writedacx"},"writeDACX")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#writedacrawx"},"writeDACRAWX"))),Object(l.b)("p",null,"Additionally, the following general DAC functions are available as well. They take a DAC channel as an argument and take a few extra clock cycles to execute as they must parse the DAC channel."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#writedac"},"writeDAC")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#writedacraw"},"writeDACRAW"))),Object(l.b)("h2",{id:"writedacx"},"writeDACX"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void writeDACX(double voltage);\nvoid writeDACX(float voltage);\n")),Object(l.b)("p",null,"This function writes a voltage to the DAC channel X. It takes either a float or a double as an input. (Technically, writeDACX is overcast with two functions, one that takes a double and one that takes a float as an argument, but this detail can be ignored.)"),Object(l.b)("p",null,"The function takes the following argument:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"voltage"),":  The voltage to output on the DAC channel X. Values above +10V or below -10V will be coerced to +10V or -10V respectively. ")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"IntervalTimer Timer; // instantiate a timer for setting the DAC update rate\ndouble voltage_pattern[] = {1.25,1.3,1.4534,2.453,2.6534,3,4,-2,-3.423} ;\n\nvoid setup() {\n  Timer.begin(ddsUpdate, 10); // update every 10 microseconds\n}\n\nvoid ddsUpdate() {  \n  static unsigned int position = 0; //store position in array\n  writeDAC1(voltage_pattern[position]);  // set DAC channel 1 to next value array\n  writeDAC2(-voltage_pattern[position]); // set DAC channel 2 to negative of next value in array\n  \n  position++; // Increment to next value in array\n  if ( position >= ( sizeof(voltage_pattern)/sizeof(voltage_pattern[0]) ) ) { \n      //reset positition when position equal to number of elements in voltage_pattern\n      position = 0;\n  }\n}\n")),Object(l.b)("h2",{id:"writedacrawx"},"writeDACRAWX"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void writeDACRAWX(int16_t data);\n")),Object(l.b)("p",null,"This function writes a signed 16-bit integer to the DAC on channel X. "),Object(l.b)("p",null,"The function takes the following argument:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data"),": a signed 16-bit integer that is the raw data sent to the DAC.  The voltage on the DAC is equal to the integer value times 10.24 / 32768 = 3.125e-4. An integer value of 16,384 will output +5.12V. And value of -16,384 will output -5.12V.")),Object(l.b)("h3",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"IntervalTimer Timer; // instantiate a timer for setting the DAC update rate\nint16_t voltage_pattern[] = {-23432,-10342,-5432,-43,543,1532,15342};\n\nvoid setup() {\n    Timer.begin(ddsUpdate, 10); // update every 10 microseconds\n}\n\nvoid ddsUpdate() {  \n    static unsigned int position = 0; //store position in array\n    writeDACRAW1(voltage_pattern[position]);  // set DAC channel 1 to next value array\n    writeDACRAW2(-voltage_pattern[position]); // set DAC channel 2 to negative of next value in array\n    \n    position++; // Increment to next value in array\n    if ( position >= ( sizeof(voltage_pattern)/sizeof(voltage_pattern[0]) ) ) { \n        //reset positition when position equal to number of elements in voltage_pattern\n        position = 0;\n    }\n}\n")),Object(l.b)("h2",{id:"writedac"},"writeDAC"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void writeDAC(int channel, float voltage);\nvoid writeDAC(int channel, double voltage);\n")),Object(l.b)("p",null,"This function is identical to ",Object(l.b)("a",{parentName:"p",href:"#writedacx"},"writeDACX"),", except it takes an additional argument ",Object(l.b)("inlineCode",{parentName:"p"},"channel")," to set what DAC channel to update. "),Object(l.b)("p",null,"The function takes the following arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"channel"),": DAC channel to update. Valid values are 1, 2, 3 or 4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"voltage"),": The voltage to output on the DAC channel ",Object(l.b)("inlineCode",{parentName:"li"},"channel"),". Values above +10V or below -10V will be coerced to +10V or -10V respectively.  Type float or double is accepted.")),Object(l.b)("h3",{id:"example-2"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"writeDAC(2,-4.562); //Write -4.562 volts to DAC channel 2\nwriteDAC(4,3.14); //Write 3.14 volts to DAC channel 4\n")),Object(l.b)("h2",{id:"writedacraw"},"writeDACRAW"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"void writeDACRAW(int channel, int16_t data);\n")),Object(l.b)("p",null,"  This function is identical to ",Object(l.b)("a",{parentName:"p",href:"#writedacrawx"},"writeDACRAWX"),", except it takes an additional argument ",Object(l.b)("inlineCode",{parentName:"p"},"channel")," to set what DAC channel to update. "),Object(l.b)("p",null,"  The function takes the following arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"channel"),": DAC channel to update. Valid values are 1, 2, 3 or 4."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data"),": A signed 16-bit integer that is the raw data sent to the DAC on channel ",Object(l.b)("inlineCode",{parentName:"li"},"channel"),".  The voltage on the DAC is equal to the integer value times 10.24 / 32768 = 3.125e-4. An integer value of 16,384 will output +5.12V. And value of -16,384 will output -5.12V. Values above +10V or below -10V will be coerced to +10V or -10V respectively. ")),Object(l.b)("h3",{id:"example-3"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},"int16_t data = 16384;\nwriteDACRAW(2,data); //Write 16,384 or 5.12V volts to DAC channel 2\ndata -= 24576;\nwriteDACRAW(4,data); //Write -8192 or -2.56 volts to DAC channel 4\n")))}u.isMDXComponent=!0}}]);