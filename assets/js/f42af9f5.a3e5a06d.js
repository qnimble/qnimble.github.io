"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[9372],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:20,slug:"Servo",title:"PID Servo"},s=void 0,u={unversionedId:"Examples/Servo",id:"Examples/Servo",title:"PID Servo",description:"The Quarto can turn into a proportional-integral-differential (PID) Servo with just 20 lines of code! Let's see how.",source:"@site/Quarto/Examples/Servo.md",sourceDirName:"Examples",slug:"/Examples/Servo",permalink:"/Quarto/Examples/Servo",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,slug:"Servo",title:"PID Servo"},sidebar:"autoSideBar",previous:{title:"Serial Commands",permalink:"/Quarto/Examples/Commands"},next:{title:"Lock-in Amplifier",permalink:"/Quarto/Examples/LockIn"}},d={},c=[{value:"Setup",id:"setup",level:2},{value:"Function when ADC Data is Available",id:"function-when-adc-data-is-available",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Data",id:"data",level:2},{value:"Feature: Integrator Hold",id:"feature-integrator-hold",level:2}],p={toc:c};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Quarto")," can turn into a proportional-integral-differential (PID) Servo with just 20 lines of code! Let's see how."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The setup function is run once at start-up and is used to configure the ADC. For the servo, we want use ADC channel 1, so we use the function ",(0,i.kt)("a",{parentName:"p",href:"../Functions/ADC#configureadc"},"configureADC")," to configure it. We want the  ADC to fire every 1\xb5s and to have a voltage range of \xb11.25V."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(void) {  \n  configureADC(1,1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n")),(0,i.kt)("p",null,"With the Arduino 2.0 IDE, if we hover over the function configureADC, a window pops up showing the function arguments:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"img",src:n(561).Z,width:"706",height:"272"})),(0,i.kt)("p",null,"First argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"fire_every_us")," tells the ADC how often to fire. In this example, we want to run the ADC at its maximum rate of 1MSPS (1 Mega Samples Per Second) so we fire every 1us, so we set this parameter to one. If we wanted to sample every 5us (or 200 kHz sample rate), this should be set to 5."),(0,i.kt)("p",null,"The second argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"fire_delay")," delays when the ADC fires. This has no real meaning when only using one ADC channel, but if you configure multiple ADC channels, to control the timing relationship between different channels. "),(0,i.kt)("p",null,"The next argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"scale")," sets the ADC voltage range. Valid inputs are ",(0,i.kt)("inlineCode",{parentName:"p"},"BIPOLAR_1250mV")," ",(0,i.kt)("inlineCode",{parentName:"p"},"BIPOLAR_2500mV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BIPOLAR_5V")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BIPOLAR_10V"),". In this case, we want the ADC range to be \xb11.25V, so we set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"BIPOLAR_1250mV")," ."),(0,i.kt)("p",null,"Finally, the last argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," is the function to call when there is ADC data. We will call this function ",(0,i.kt)("inlineCode",{parentName:"p"},"getADC1")," although the name does not matter."),(0,i.kt)("p",null,"We will also define a setpoint which is the target value we want to see at the ADC input. We will use a macro to do this so if we want to change the setpoint, we only have to change the value in one place. For this example, we will have the ",(0,i.kt)("inlineCode",{parentName:"p"},"SETPOINT")," equal to 0.25"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define SETPOINT 0.25\n")),(0,i.kt)("h2",{id:"function-when-adc-data-is-available"},"Function when ADC Data is Available"),(0,i.kt)("p",null,"We now need to define the function that is called when the ADC gets data. On our case this function is called ",(0,i.kt)("inlineCode",{parentName:"p"},"getADC"),". Here's the code for that function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void getADC1(void) {\n  static double integral = 0;\n  static double prev_adc = 0;\n  \n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  \n  double prop = (newadc-SETPOINT) * 1.975; //proportional\n  integral += (newadc - SETPOINT) * 0.01; // integral gain\n  double diff = ( newadc - prev_adc) * 0.00001; // turn diff down for accuracate BW measurement\n  double newdac = prop + integral + diff;\n  \n  writeDAC(1,-newdac); //invert for negative feedback. Write to DAC channel 1.\n  prev_adc = newadc; //store new adc value for differential calculation\n}\n")),(0,i.kt)("p",null,"The first two lines of the function define two double-precision floating point numbers ",(0,i.kt)("inlineCode",{parentName:"p"},"integral")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prev_adc"),". These two definitions start with static which means that these variables do not disappear after the function runs, but they are kept for subsequent runs. So for the first run, ",(0,i.kt)("inlineCode",{parentName:"p"},"integral")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prev_adc")," start at 0. If at the end of the first run, ",(0,i.kt)("inlineCode",{parentName:"p"},"integral")," is 1.2345, then ",(0,i.kt)("inlineCode",{parentName:"p"},"integral")," will start with that value for the next run, and so on."),(0,i.kt)("p",null,"The next line reads the ADC1 value and stores it into the double ",(0,i.kt)("inlineCode",{parentName:"p"},"newadc"),". "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure to call readADCX_from_ISR()!!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Any function that runs when new ADC data is available  must execute the function readADCX_from_ISR()!"))),(0,i.kt)("p",null,"When the ADC has new data, it fires an interrupt. That interrupt executes the function configured in configureADCX and that function must clear the interrupt, which is done by running readADCX_from_ISR(). Otherwise the function will loop forever and the Quarto will crash. "),(0,i.kt)("p",null,"The next set of commands calculate the proportional, integral and differential (PID) values. The proportional value is the difference between the ADC value (",(0,i.kt)("inlineCode",{parentName:"p"},"newadc"),") and the SETPOINT, multiplied by a scale constant, in this case 1.975. The integral calculation is similar, but with a different scale constant (0.01) and we use a ",(0,i.kt)("inlineCode",{parentName:"p"},"+=")," instead of an ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," to assign it a value so it sums the new calculation with the previous value of ",(0,i.kt)("inlineCode",{parentName:"p"},"integral"),". Next, the differential looks at the difference between the current ADC value (",(0,i.kt)("inlineCode",{parentName:"p"},"newadc"),") and the previously measured ADC value (",(0,i.kt)("inlineCode",{parentName:"p"},"prev_adc"),") and multiplies that by the scale constant (0.00001). Finally, we sum these two values together in the new value ",(0,i.kt)("inlineCode",{parentName:"p"},"newdac"),"."),(0,i.kt)("p",null,"The second to last line of the function writes the newly calculated PID value to the channel 1 DAC using the ",(0,i.kt)("inlineCode",{parentName:"p"},"writeDAC1")," command. There is a minus sign in front of the argument ",(0,i.kt)("inlineCode",{parentName:"p"},"newdac")," to invert the value, which we need to do to provide negative feedback. "),(0,i.kt)("p",null,"The last line stores the most recent ADC measurement (",(0,i.kt)("inlineCode",{parentName:"p"},"newadc"),") in the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"prev_adc")," for use the next time this function is run."),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("p",null,"Putting this altogether, we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"#define SETPOINT 0.25\n\nvoid setup(void) {  \n  configureADC(1,1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n\nvoid getADC1(void) {\n  static double integral = 0;\n  static double prev_adc = 0;\n  \n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  \n  double prop = (newadc-SETPOINT) * 1.975; //proportional\n  integral += (newadc - SETPOINT) * 0.01; // integral gain\n  double diff = ( newadc - prev_adc) * 0.00001; // turn diff down for accuracate BW measurement\n  double newdac = prop + integral + diff;\n  \n  writeDAC(1,-newdac); //invert for negative feedback  \n  prev_adc = newadc; //store new adc value for differential calculation\n}\n")),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("p",null,"Using this code, if you connect the channel 1 DAC output to the ADC channel 1 input, the Quarto can lock to itself and it will oscillate at over 100 kHz, as shown below. (Just lower the proportional gain scalar from 1.975 to stop the oscillation)"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"img",src:n(4963).Z,width:"800",height:"480"})),(0,i.kt)("h2",{id:"feature-integrator-hold"},"Feature: Integrator Hold"),(0,i.kt)("p",null,"What if you wanted your servo to support Integrator Hold (sometimes called Sample & Hold) where the servo output stays constant for a period of time, and then the servo re-engages lock later? We can implement this where a trigger line will control if the servo should be active or just holding its value. The first part is to define a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"servoActive")," that will store if the servo is active. Then we setup an interrupt to fire whenever trigger 1 changes its value and have it update the ",(0,i.kt)("inlineCode",{parentName:"p"},"servoActive")," variable. We can do this with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"bool servoActive;\n\nvoid setup(void) { \n  triggerMode(1, INPUT); // Set trigger1 as input\n  servoActive = triggerRead(1); //set servoActive variable initially based on trigger 1 level\n  enableInterruptTrigger(1,BOTH_EDGES,&servo_en); //Run servo_en function on any change to trigger 1\n  configureADC(1,1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n\nvoid servo_en(void) {\n  servoActive = triggerRead(1);  \n}\n")),(0,i.kt)("p",null,"Now all we have to do is wrap the servo functionality around an if statement that looks at the ",(0,i.kt)("inlineCode",{parentName:"p"},"servoActive")," variable. Below is the complete code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'bool servoActive;\n\nvoid setup(void) { \n  triggerMode(1, INPUT); // Set trigger1 as input\n  servoActive = triggerRead(1); //set servoActive variable initially based on trigger 1 level\n  enableInterruptTrigger(1,BOTH_EDGES,&servo_en); //Run servo_en function on any change to trigger 1\n  configureADC(1,1,0,BIPOLAR_1250mV,getADC1); // Have ADC take measurement every 1us, \xb11.25V range\n}\n\n\nvoid servo_en(void) {\n  servoActive = triggerRead(1);  \n}\n\nvoid getADC1(void) {\n  static double integral = 0;\n  static double prev_adc = 0;\n  double newadc = readADC1_from_ISR(); //read ADC voltage\n  \n  double setpoint = 0.25; // Target value for ADC to read\n\n  if (servoActive) {\n    double prop = (newadc - setpoint) * 1.975; //proportional\n    integral += (newadc - setpoint) * 0.01; // integral gain\n    double diff = ( newadc - prev_adc) * .00001; // turn diff down for accuracate BW measurement\n    double newdac = prop + integral + diff;\n    \n    writeDAC(1,-newdac); //invert for negative feedback  \n  }\n  prev_adc = newadc; //store new adc value for differential calculation\n}\n\n\nvoid loop(void) {\n   static unsigned long lastrun = 0;    \n  \n  if (millis() > lastrun) { //Run once every 1000ms\n    lastrun = millis() + 1000;\n    toggleLEDGreen();\n    //Serial.println("This runs every second");\n  }\n}\n')),(0,i.kt)("p",null,"This is one example of adding more functionality to the basic PID servo. The ",(0,i.kt)("em",{parentName:"p"},"Quarto")," could be programmed to do double integration, or feed-forward, or compensate for temperature drift, or unlock-detection, or auto-locking, amout other features."))}h.isMDXComponent=!0},4963:function(e,t,n){t.Z=n.p+"assets/images/SimplePIDServo-s1-1893b5293796035a912ee97bed24e576.png"},561:function(e,t,n){t.Z=n.p+"assets/images/arduino2-adc-config-s1-6e4178aed79cb86c850f9c4dd8fe88b0.png"}}]);