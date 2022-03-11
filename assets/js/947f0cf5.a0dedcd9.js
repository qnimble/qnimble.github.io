"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[6141],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9006:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={slug:"SDCard_support",title:"Quarto now supports SD Cards",author:"BLuey",author_title:"Founder, qNimble",author_url:"https://www.linkedin.com/in/benluey",author_image_url:"../img/benluey.jfif",tags:[]},c=void 0,l={permalink:"/News/SDCard_support",source:"@site/News/2022-03-07-SDcard-support.md",title:"Quarto now supports SD Cards",description:"With the release of the latest 1.2.x of the board software package for the Quarto, recent versions of the Quarto now support reading and writing to the SD card. All Quarto's shipped after in Febuarary 2022 or later fully support the SD card.",date:"2022-03-07T00:00:00.000Z",formattedDate:"March 7, 2022",tags:[],truncated:!1,authors:[{name:"BLuey",title:"Founder, qNimble",url:"https://www.linkedin.com/in/benluey",imageURL:"../img/benluey.jfif"}],prevItem:{title:"New Beta Software Channel",permalink:"/News/Beta_Software"},nextItem:{title:"Quarto Back in Stock",permalink:"/News/InStock"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the release of the latest 1.2.x of the board software package for the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),", recent versions of the ",(0,a.kt)("em",{parentName:"p"},"Quarto")," now support reading and writing to the SD card. All ",(0,a.kt)("em",{parentName:"p"},"Quarto"),"'s shipped after in Febuarary 2022 or later fully support the SD card. "),(0,a.kt)("p",null,'To use the SD card, first in the Arduino IDE, go to Boards Manager and install the latest (1.2.x or higher) version of "qNimble iMXRT Boards by qNimble"'),(0,a.kt)("img",{className:"center",src:"../img/arduino-board-support-1.2.x.png"}),(0,a.kt)("p",null,"Once installed, open the UsageAndBenchmark example under SD,"),(0,a.kt)("img",{className:"center",src:"../img/arduino-example-sd-usage.png"}),(0,a.kt)("p",null,"Then you can put a SD card in the Quarto and run the example to do some basic operations and to benchmark the SD card. Or look at the example code to see how to list files, change directories, read and write files, etc."),(0,a.kt)("p",null,"If you aren't sure what version of the Quarto you have and if it supports the SD card, open the DeviceInfo example under Testing:"),(0,a.kt)("img",{className:"center",src:"../img/arduino-example-deviceinfo.png"}),(0,a.kt)("p",null,"And when you run it, the output on the Serial Monitor should look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Quarto Device Information\nSN: 516\nDevice ID: qN-101.3.1\nFirmware Revision: 1.26.46\n")),(0,a.kt)("p",null,"If you see a Device ID of qN-101.3.1 or higher, you are ready to use the SD card. If you have qN-101.1.X or qN-101.2.X, please ",(0,a.kt)("a",{parentName:"p",href:"/Contact"},"contact ",(0,a.kt)("em",{parentName:"a"},"qNimble"))," about your options for using the SD card with the ",(0,a.kt)("em",{parentName:"p"},"Quarto"),"."))}m.isMDXComponent=!0}}]);