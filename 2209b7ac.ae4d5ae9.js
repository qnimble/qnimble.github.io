(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/quarto-backpanel-connect-0521638abbdc688bd313218d2d7d21c0.jpg"},158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-preferences-ab5f30911cd2bc067a9d6cefb2e94c0c.png"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-boards-manager-2b212e87f638155f5edbece2500c66be.png"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-boards-manager-installed-e21e8c7e502f5b74f70c25a2f5edba64.png"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-board-quarto-60fa7e665b92efe728fab06f2087158b.png"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-port-4d6156d0e65530fb4eae766b86114eb2.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/arduino-upload-1243436aebdfbd429392ac40ad81481d.png"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(107)),i={id:"quick_start",slug:"Quick_Start",title:"Quick Start Guide",description:"quick start guide to using the qNimble Quarto arduiuno",sidebar_label:"Quick Start Guide"},c={unversionedId:"quick_start",id:"quick_start",isDocsHomePage:!1,title:"Quick Start Guide",description:"quick start guide to using the qNimble Quarto arduiuno",source:"@site/quarto/quick_start.md",slug:"/Quick_Start",permalink:"/Quarto/Quick_Start",version:"current",sidebar_label:"Quick Start Guide",sidebar:"quarto_main_sidebar",previous:{title:"Specifications",permalink:"/Quarto/Specifications"},next:{title:"Frequently Asked Questions",permalink:"/Quarto/FAQ"}},l=[{value:"Hardware",id:"hardware",children:[]},{value:"Software",id:"software",children:[]}],b={toc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hardware"},"Hardware"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Take the included 5V power supply and plug into a wall output. Connect the barrel jack on the other end of the power supply as connect to the back of the Quarto as show in the picture below step #2.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Connect the back panel USB to the included USB cable and connect the other end to your computer."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"img",src:a(157).default})))),Object(o.b)("h2",{id:"software"},"Software"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the latest ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.arduino.cc/en/software"}),"Arduino IDE")," (if not already installed)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open Arduino")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the preferences dialog by clicking on File and then Preferences:"),Object(o.b)("p",{parentName:"li"},'In the "Additional Boards Manager URLS" field, put:'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"https://qnimble.com/package_qnimble_index.json\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"img",src:a(158).default})),Object(o.b)("p",{parentName:"li"},"If you already have url's there, add a comma (,) at the end of the list, then add the line.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the Boards Manager by clicking on Tools, Board and then Boards Manager")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Type "qnimble" into the text box at the top\n',Object(o.b)("img",{alt:"img",src:a(159).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Then "qNimble iMXRT Boards" should show up, and click "install"')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the installation is complete, qNimble iMXRT Boards should be listed as INSTALLED and you can click on Close."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"img",src:a(160).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you do not have an empty sketch, click on File and New to open blank sketch.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on Tools, Board, qNimble and select Quarto"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"img",src:a(161).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on Tools, Port to select the COM port associated with the Quarto. If you have more than one COM ports connected and are not sure which one is the Quarto, disconnect the USB cable from the Quarto, look at the list of ports available under Tools, Port, then reconnect the USB cable and look at the list again. Whatever new port is in the list if the Quarto."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"img",src:a(162).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Put your code in your sketch, or if you want a simple program to blink the front panel LED, paste the following code:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"   void setup() {\n     // put your setup code here, to run once:\n   }\n   \n   void loop() {\n     static unsigned long lastrun;    \n     if (millis() > lastrun + 500) { //Run once every 500ms            \n         toggleLEDGreen(); //toggle green LED;      \n         lastrun = lastrun + 500;\n     }\n   }\n")),Object(o.b)("p",null,"and when ready, click on Upload to load the code onto the Quarto."),Object(o.b)("p",null," ",Object(o.b)("img",{alt:"img",src:a(163).default})),Object(o.b)("ol",{start:11},Object(o.b)("li",{parentName:"ol"},"Take a look at our ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"./examples"}),"Examples"),".")))}s.isMDXComponent=!0}}]);