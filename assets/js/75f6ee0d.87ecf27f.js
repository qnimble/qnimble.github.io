"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[950],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6946:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return y}});var n=a(7462),r=a(3366),o=a(7294),i=a(3905),l=a(2389),u=a(9443);var s=function(){var e=(0,o.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(3616),d=a(6010),p="tabItem_vU9c";function m(e){var t,a,n,r=e.lazy,i=e.block,l=e.defaultValue,u=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,c.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===l?l:null!=(t=null!=l?l:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),y=g.tabGroupChoices,I=g.setTabGroupChoices,T=(0,o.useState)(b),x=T[0],P=T[1],O=[],E=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=y[m];null!=N&&N!==x&&k.some((function(e){return e.value===N}))&&P(N)}var S=function(e){var t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==x&&(E(t),P(n),null!=m&&I(m,n))},Q=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,d.Z)("tabs__item",p,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:Q,onFocus:S,onClick:S},null!=a?a:t)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,l.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}var h=function(e){var t=e.children,a=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},k=["components"],v={id:"Quick_Start",slug:"Quick_Start",title:"Quick Start Guide",description:"quick start guide to using the qNimble Quarto arduiuno",sidebar_label:"Quick Start Guide"},b=void 0,g={unversionedId:"Quick_Start",id:"Quick_Start",title:"Quick Start Guide",description:"quick start guide to using the qNimble Quarto arduiuno",source:"@site/Quarto/Quick_Start.md",sourceDirName:".",slug:"/Quick_Start",permalink:"/Quarto/Quick_Start",tags:[],version:"current",frontMatter:{id:"Quick_Start",slug:"Quick_Start",title:"Quick Start Guide",description:"quick start guide to using the qNimble Quarto arduiuno",sidebar_label:"Quick Start Guide"},sidebar:"quarto_main_sidebar",previous:{title:"Specifications",permalink:"/Quarto/Specifications"},next:{title:"Frequently Asked Questions",permalink:"/Quarto/FAQ"}},y=[{value:"Hardware",id:"hardware",children:[],level:2},{value:"Software",id:"software",children:[],level:2}],I={toc:y};function T(e){var t=e.components,o=(0,r.Z)(e,k);return(0,i.kt)("wrapper",(0,n.Z)({},I,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hardware"},"Hardware"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Take the included 5V power supply and plug into a wall output. Connect the barrel jack on the other end of the power supply as connect to the back of the Quarto as show in the picture below step #2.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the back panel USB to the included USB cable and connect the other end to your computer."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"img",src:a(8011).Z})))),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software#experimental-software"},"Arduino IDE")," (if not already installed). We highly recommend using the 2.0 version over the 1.8 version even though the 2.0 version is in beta and listed under 'Experimental Software'. It has significantly faster compile times, a cleaner interface and auto-completion of code among other features. "),(0,i.kt)("p",{parentName:"li"},"Please select which version you have installed for the proper instructions:"))),(0,i.kt)(f,{groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"}),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Arduino")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the preferences dialog by clicking on File and then Preferences:"),(0,i.kt)("p",{parentName:"li"},'In the "Additional Boards Manager URLS" field, put:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"https://qnimble.com/package_qnimble_index.json\n")),(0,i.kt)("p",{parentName:"li"},"If you already have url's there, add a comma (,) at the end of the list, then add the ",(0,i.kt)("em",{parentName:"p"},"qNimble")," URL."))),(0,i.kt)(f,{className:"hideChoice",groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(5262).Z}))),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(8415).Z})))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Boards Manager by clicking on Tools, Board and then Boards Manager")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Type "qnimble" into the text box at the top'))),(0,i.kt)(f,{className:"hideChoice",groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(7581).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Then "',(0,i.kt)("em",{parentName:"p"},"qNimble"),' iMXRT Boards" should show up, and click "install". This can take a few minutes without any updates from the Arduino IDE. ')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the installation is complete, ",(0,i.kt)("em",{parentName:"p"},"qNimble")," iMXRT Boards should be listed as INSTALLED and you can click on Close."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(6177).Z}))),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(2593).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Then "',(0,i.kt)("em",{parentName:"p"},"qNimble"),' iMXRT Boards" should show up, and click "install"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the installation is complete, ",(0,i.kt)("em",{parentName:"p"},"qNimble")," iMXRT Boards should be listed as INSTALLED and you can close the Boards Manager tab by clicking on the IC icon on the far left."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(7918).Z})))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you do not have an empty sketch, click on File and New to open blank sketch.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on Tools, Board, ",(0,i.kt)("em",{parentName:"p"},"qNimble")," and select ",(0,i.kt)("em",{parentName:"p"},"Quarto")))),(0,i.kt)(f,{className:"hideChoice",groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(480).Z}))),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(3544).Z})))),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Click on Tools, Port to select the COM port associated with the ",(0,i.kt)("em",{parentName:"li"},"Quarto"),". If you have more than one COM ports connected and are not sure which one is the ",(0,i.kt)("em",{parentName:"li"},"Quarto"),", disconnect the USB cable from the ",(0,i.kt)("em",{parentName:"li"},"Quarto"),", look at the list of ports available under Tools, Port, then reconnect the USB cable and look at the list again. Whatever new port is in the list is the ",(0,i.kt)("em",{parentName:"li"},"Quarto"),".")),(0,i.kt)(f,{className:"hideChoice",groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(5061).Z}))),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(6507).Z})))),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Put your code in your sketch, or if you want a simple program to blink the front panel LED, paste the following code:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"   void setup() {\n     // put your setup code here, to run once:\n   }\n   \n   void loop() {\n     static unsigned long lastrun = millis();\n     if (millis() > lastrun) {\n         lastrun = lastrun + 500; //Run once every 500ms\n         toggleLEDGreen(); //toggle green LED;\n     }\n   }\n")),(0,i.kt)("p",null,"and when ready, click on Upload to load the code onto the ",(0,i.kt)("em",{parentName:"p"},"Quarto"),"."),(0,i.kt)(f,{className:"hideChoice",groupId:"arduino-version",defaultValue:"2.0",values:[{label:"Arduino IDE 1.8",value:"1.8"},{label:"Arduino IDE 2.0",value:"2.0"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"1.8",mdxType:"TabItem"},(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"img",src:a(8376).Z}))),(0,i.kt)(h,{value:"2.0",mdxType:"TabItem"},(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"img",src:a(1833).Z})))))}T.isMDXComponent=!0},480:function(e,t,a){t.Z=a.p+"assets/images/arduino-board-quarto-s1-0fc00b45f59356ebe06712d5fe59e541.png"},6177:function(e,t,a){t.Z=a.p+"assets/images/arduino-boards-manager-installed-e21e8c7e502f5b74f70c25a2f5edba64.png"},7581:function(e,t,a){t.Z=a.p+"assets/images/arduino-boards-manager-2b212e87f638155f5edbece2500c66be.png"},5061:function(e,t,a){t.Z=a.p+"assets/images/arduino-port-4d6156d0e65530fb4eae766b86114eb2.png"},5262:function(e,t,a){t.Z=a.p+"assets/images/arduino-preferences-ab5f30911cd2bc067a9d6cefb2e94c0c.png"},8376:function(e,t,a){t.Z=a.p+"assets/images/arduino-upload-1243436aebdfbd429392ac40ad81481d.png"},2593:function(e,t){t.Z="data:image/png;base64,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"},7918:function(e,t){t.Z="data:image/png;base64,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"},6507:function(e,t,a){t.Z=a.p+"assets/images/arduino2-port-s1-6618763043f1519f51f8bd3f3b9f0fe7.png"},8415:function(e,t,a){t.Z=a.p+"assets/images/arduino2-preferences-s1-c5e1a18f174190b0094b4cb397166ba0.png"},3544:function(e,t,a){t.Z=a.p+"assets/images/arduino2-select-Quarto-s1-de05739f53f5a882d087e6de21576d33.png"},1833:function(e,t,a){t.Z=a.p+"assets/images/arduino2-upload-s1-d755fa77e5cca73fe58f803fb957d8ba.png"},8011:function(e,t,a){t.Z=a.p+"assets/images/quarto-backpanel-connect-567eb1cde8ecb7c45b7d0b7ca088bfeb.jpg"}}]);