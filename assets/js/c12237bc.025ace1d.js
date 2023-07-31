"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[2025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={title:"Memory",toc_max_heading_level:2},l=void 0,i={unversionedId:"Functions/Memory",id:"Functions/Memory",title:"Memory",description:"The Quarto has 96kB of user-accessible non-volatile memory (NVM) (sometimes called EEPROM).  This is memory that will persist across reboots and reflashings of the Quarto. You can read and write to this memory with the following functions:",source:"@site/Quarto/Functions/Memory.md",sourceDirName:"Functions",slug:"/Functions/Memory",permalink:"/Quarto/Functions/Memory",draft:!1,tags:[],version:"current",frontMatter:{title:"Memory",toc_max_heading_level:2},sidebar:"autoSideBar",previous:{title:"LEDs",permalink:"/Quarto/Functions/LEDs"},next:{title:"Triggers",permalink:"/Quarto/Functions/Triggers"}},s={},d=[{value:"readNVM",id:"readnvm",level:2},{value:"Example",id:"example",level:3},{value:"readNVMblock",id:"readnvmblock",level:2},{value:"Example",id:"example-1",level:3},{value:"writeNVMpages",id:"writenvmpages",level:2},{value:"Example",id:"example-2",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Quarto")," has 96kB of user-accessible non-volatile memory (NVM) (sometimes called EEPROM).  This is memory that will persist across reboots and reflashings of the ",(0,n.kt)("em",{parentName:"p"},"Quarto"),". You can read and write to this memory with the following functions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#readnvm"},"readNVM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#readnvmblock"},"readNVMblock")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#writenvmpages"},"writeNVMpages"))),(0,n.kt)("h2",{id:"readnvm"},"readNVM"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"uint16_t readNVM(uint32_t address);\n")),(0,n.kt)("p",null,"This function returns a unsigned 16-bit word with the data stored in the non-volatile memory at a specified address."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"address"))," Address of NVM to read. Range of values is from 0 to 98,303 (0x00 - 0x17FFF). Note that input address must be aligned to 16-bit reads, meaning an even address number. Odd address values will be be rounded down, so readNVM(0x05) will return the same result as readNVM(0x04).")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"uint16_t something = readNVM(0x1234);\n")),(0,n.kt)("h2",{id:"readnvmblock"},"readNVMblock"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void readNVMblock(void* data,uint16_t length, uint32_t start_addr);\n")),(0,n.kt)("p",null,"Similar to readNVM, this function also reads from the NVM, but it can read an arbitrary length of data and puts that data into the memory specified by the argument ",(0,n.kt)("inlineCode",{parentName:"p"},"data"),". Because data is passed as a pointer, make sure that the memory location at data can store the amount of data specified by length. Otherwise other memory can be overwritten, causing unpredictable behavior (this would be a buffer overrun)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"*data"))," Pointer to any type of memory to store the read data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"length"))," How much data (in bytes) to read from the NVM and store into the data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"start_addr"))," Starting NVM address to read from. Same range as address in ",(0,n.kt)("a",{parentName:"li",href:"#readnvm"},"readNVM")," function")),(0,n.kt)("h3",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"float stored_data[10] = {1.1,2.2,3.3,4,4}; // create memory to store 10 floats\nreadNVMblock(&stored_data,sizeof(stored_data),0x1000);  /* loads the next 40 bytes\n/ of NVM data from 0x1000 into stored_data array */\nSerial.print(stored_data[0]); //use stored_data now that it is loaded with the NVM data.\n")),(0,n.kt)("h2",{id:"writenvmpages"},"writeNVMpages"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void writeNVMpages(void* data,uint16_t data_size, uint16_t first_page);\n")),(0,n.kt)("p",null,"Writing to the NVM is done in pages. Each page is 128 bytes long, and there NVM has 768 pages. If you write less than a page, the remainder of that page will get erased, so if you use, example, the first 64 bytes of a page but only want to update the first 32 bytes, you will need to read the full 64 bytes, change the lower 32 and then write the full 64 bytes back. Otherwise bytes 32 - 64 will get erased."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"*data")),"  Pointer to any type of memory that contains the data to store in NVM"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"data_size"))," Length of data to write to NVM"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"first_page"))," What page to start writing to. Value can be 0 through 767. ")),(0,n.kt)("h3",{id:"example-2"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'struct Cal {\n    uint16_t cal_a;\n    double cal_b;\n    uint16_t cal_c;\n  };\n\nstruct Cal cal1;\ncal1.cal_a = 56;\ncal1.cal_b = 1.2345678;\ncal1.cal_c = 9876;\n\nwriteNVMpages(&cal1,sizeof(cal1), 500); //Store struct cal1 in NVM starting at page 500\nSerial.printf("Checking cal_a in NVM is: %u\\n",readNVM(500*128)); /* returns 56, \n* reads uint16_t stored at start of page 500, or address 500*128 = 0xFA00 */\n\nstruct Cal cal2;\nreadNVMblock(&cal2,sizeof(cal2),0xFA00);  //loads NVM cal into new cal2 structure.\nSerial.println(cal2.cal_c); //this will print 9876.\n\ncal2.cal_a = 100; //change value of cal_a\nwriteNVMpages(&cal1,2, 500); //Write 2 bytes of page 500 with cal2 data (just cal_a data)\nreadNVMblock(&cal1,sizeof(cal1),0xFA00);  //load the stoed NVM data into cal1\nSerial.println(cal1.cal_a); // value is now 100\nSerial.println(cal1.cal_c); // value is 0 as writeNVMpages erased values in the page that were not written to\n')))}u.isMDXComponent=!0}}]);