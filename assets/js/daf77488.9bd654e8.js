"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[2326],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return c}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,m=u["".concat(o,".").concat(c)]||u[c]||p[c]||r;return t?i.createElement(m,l(l({ref:n},f),{},{components:t})):i.createElement(m,l({ref:n},f))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6571:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=t(3117),a=t(102),r=(t(7294),t(3905)),l=["components"],s={id:"SDCard",slug:"SDCard",title:"SD Card",sidebar_position:40,keywords:["SD Card","SDCARD","Examples"],description:"Example Reading and Writing to the SD Card"},o=void 0,d={unversionedId:"Examples/SDCard",id:"Examples/SDCard",title:"SD Card",description:"Example Reading and Writing to the SD Card",source:"@site/Quarto/Examples/SDCard.md",sourceDirName:"Examples",slug:"/Examples/SDCard",permalink:"/Quarto/Examples/SDCard",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"SDCard",slug:"SDCard",title:"SD Card",sidebar_position:40,keywords:["SD Card","SDCARD","Examples"],description:"Example Reading and Writing to the SD Card"},sidebar:"autoSideBar",previous:{title:"Pulsed Output Waveform",permalink:"/Quarto/Examples/Pulsed_Output"},next:{title:"Serial Commands",permalink:"/Quarto/Examples/Commands"}},f={},p=[],u={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this example, we will check if a file exists on the SD Card, create a new file if not and read and write from that file. First, to use the SDCard, we need to include the SdFat.h header and the instantiate the sd class and, then run ",(0,r.kt)("inlineCode",{parentName:"p"},"sd.begin()")," to initialize the sd card. Additionally, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"now()")," time function, so we will include the ",(0,r.kt)("inlineCode",{parentName:"p"},"TimeLib.h")," header file as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include "TimeLib.h"\n#include "SdFat.h"\n\nSdFs sd; \n\nvoid setup() {\n  sd.begin();  \n}\n')),(0,r.kt)("p",null,"But to make this program more robust, we should check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"sd.begin()")," function was successful and only proceed if it was. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include "TimeLib.h"\n#include "SdFat.h"\nSdFs sd;\n\nvoid setup() {  \n    while (sd.begin() == false) {\n        //Sd card failed, wait and try again\n        delay(1000); //wait 1000ms or 1 sec\n        Serial.println("Unable to connect to SD Card, was it inserted?");\n    }\n    Serial.println("Successfully connected to SD card.");   \n}\n')),(0,r.kt)("p",null,"That this point, we can use various sd functions such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"open(filename)"),(0,r.kt)("li",{parentName:"ul"},"exists(filename)"),(0,r.kt)("li",{parentName:"ul"},"remove(filename)"),(0,r.kt)("li",{parentName:"ul"},"mkdir(dirname)"),(0,r.kt)("li",{parentName:"ul"},"chdir(dirname)"),(0,r.kt)("li",{parentName:"ul"},"rmdir(dirname)"),(0,r.kt)("li",{parentName:"ul"},"ls()")),(0,r.kt)("p",null,"The next step is to write some functions to use the SD card. Here's a function to see if a file exists, and if so print the filesize:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char filename[] = "Data.dat";\nvoid readFile(void) {\n    if (sd.exists(filename)) {\n        FsFile file = sd.open(filename,O_RDONLY); //open the file read-only\n        Serial.printf("File %s exists with size %u\\n",filename,file.fileSize());\n        file.close();\n    } else {\n        Serial.printf("File %s is missing!\\n",filename);\n    }\n}\n')),(0,r.kt)("p",null,"When using the open function, there are a few flags to set how the file will be opened:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O_RDONLY ","\xa0","\xa0","\u2003","// Open file read-only. This is the default and does not need to be used"),(0,r.kt)("li",{parentName:"ul"},"O_WRONLY ","\xa0","\u2003","// Open file for writing only "),(0,r.kt)("li",{parentName:"ul"},"O_RDWF ","\u2002","\u2003","\u2003","// Open file for reading and writing"),(0,r.kt)("li",{parentName:"ul"},"O_APPEND ","\xa0","\u2003","// Append to file (otherwise writes start at start of file)"),(0,r.kt)("li",{parentName:"ul"},"O_CREAT ","\u2003","\u2003","// Create new file (if it does not already exist)")),(0,r.kt)("p",null,"If we want to read the data in a file and print out its contents, we can use this expanded ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'char filename[] = "Data.dat";\nvoid readFile(void) {\n    char filedata[2000]; //temporary place to store contents of the file\n    if (sd.exists(filename)) {\n        FsFile file = sd.open(filename,O_RDONLY); //open the file read only\n        uint64_t fileSize = file.fileSize(); //get the file size\n        Serial.printf("File %s exists with size %u\\n",filename,fileSize);\n        uint64_t openSize = min(fileSize-1,sizeof(filedata)); //prevent overflow if file larger than buffer to store it\n        file.read(filedata,openSize); //read the entire file into filedata array\n        Serial.println(" ** Data Contents Start **");\n        filedata[openSize] = \'\\0\'; //Terminate data so we can print as string\n        Serial.print(filedata);\n        Serial.println("\\n ** Data Contents End **");\n        file.close();\n    } else {\n        Serial.printf("File %s is missing!\\n",filename);\n    }\n}\n')),(0,r.kt)("p",null,"To write to a file and append data to it, we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void writeFile(void) {\n  char message[500];\n  FsFile file;\n  static uint count = 1;\n  file = sd.open(filename,O_RDWR |  O_CREAT | O_APPEND);\n  if (file)  {\n    uint nowTime = (uint) now();\n    uint charsWritten = sprintf(message,"%u Write number %u\\n",nowTime,count); //Prepare string to write to file\n    count++; //keep track of how many times we have written to the file\n    file.write(message,charsWritten); //write to file\n    file.close(); // close file now that write is done\n  } else {\n    Serial.println("Error opening Data.txt file.");\n    sd.errorPrint(&Serial);\n    return;\n  }\n}\n')),(0,r.kt)("p",null,"And finally, if we want to erase the file, we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void eraseFile(void) {\n    if (sd.exists(filename)) {\n        sd.remove(filename);\n    }\n}\n")),(0,r.kt)("p",null,"Putting this together, if we put into our setup function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void setup() {\n    while (sd.begin() == false) {\n      //Sd card failed, wait and try again\n      delay(1000); //wait 1000ms or 1 sec\n      Serial.println("Unable to connect to SD Card, was it inserted?");\n    }\n    Serial.println("Successfully connected to SD card.");\n    eraseFile(); //erase file\n    readFile(); //try to read when no file exists\n    writeFile(); //write to file for first time\n    readFile(); //read file\n    delay(2000); //wait 2 seconds\n    writeFile(); // write to file a second time\n    readFile(); //read file\n    delay(2000); //wait 2 seconds\n    writeFile(); //write to file a third time\n    readFile(); //read file\n}\n')),(0,r.kt)("p",null,"Running this will return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Unable to connect to SD Card, is it inserted?\nSuccessfully connected to SD card.\nFile Data.txt is missing!\nFile Data.txt exists with size 26\n ** Data Contents Start **\n1653512729 Write number 1\n ** Data Contents End **\nFile Data.txt exists with size 52\n ** Data Contents Start **\n1653512729 Write number 1\n1653512731 Write number 2\n ** Data Contents End **\nFile Data.txt exists with size 78\n ** Data Contents Start **\n1653512729 Write number 1\n1653512731 Write number 2\n1653512733 Write number 3\n ** Data Contents End **\n")),(0,r.kt)("p",null,"When the SD Card is first inserted, the Data.dat file is deleted and ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile()")," reports the file is missing. Then ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFile()")," writes the first line and ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile()")," reports 26 bytes written. When ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFile()")," is called a second time, it appends another 26 bytes to the file, adding a new line with a new timestamp. When ",(0,r.kt)("inlineCode",{parentName:"p"},"readFile()")," is subsequently called, it sees 52 bytes and two lines. "),(0,r.kt)("p",null,"The full file is available in Examples, Examples for Quarto, SD, BasicReadWriteDelete or below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include "TimeLib.h"\n#include "SdFat.h"\n\nSdFs sd;\nchar filename[] = "Data.dat";\n\nvoid setup() {\n  while (sd.begin() == false) {\n    //Sd card failed, wait and try again\n    delay(1000); //wait 1000ms or 1 sec\n    Serial.println("Unable to connect to SD Card, was it inserted?");\n  }\n\n  Serial.println("Successfully connected to SD card.");\n  eraseFile(); //erase file\n  readFile(); //try to read when no file exists\n  writeFile(); //write to file for first time\n  readFile(); //read file\n  delay(2000); //wait 2 seconds\n  writeFile(); // write to file a second time\n  readFile(); //read file\n  delay(2000); //wait 2 seconds\n  writeFile(); //write to file a third time\n  readFile(); //read file\n \n}\n\nvoid readFile(void) {\n  char filedata[2000]; //temporary place to store contents of the file\n  if (sd.exists(filename)) {\n    FsFile file = sd.open(filename,O_RDONLY); //open the file read only\n    uint64_t fileSize = file.fileSize(); //get the file size\n    Serial.printf("File %s exists with size %u\\n",filename,fileSize);\n    uint64_t openSize = min(fileSize-1,sizeof(filedata)); //prevent overflow if file larger than buffer to store it\n    file.read(filedata,openSize); //read the entire file into filedata array\n    Serial.println(" ** Data Contents Start **");\n    filedata[openSize] = \'\\0\'; //Terminate data so we can print as string\n    Serial.print(filedata);\n    Serial.println("\\n ** Data Contents End **");\n    file.close();\n  } else {\n    Serial.printf("File %s is missing!\\n",filename);\n  }\n}\n\nvoid writeFile(void) {\n  char message[500];\n  FsFile file;\n  static uint count = 1;\n  file = sd.open(filename,O_RDWR |  O_CREAT | O_APPEND);\n  if (file)  {\n    uint nowTime = (uint) now();\n    uint charsWritten = sprintf(message,"%u Write number %u\\n",nowTime,count); //Prepare string to write to file\n    count++; //keep track of how many times we have written to the file\n    file.write(message,charsWritten); //write to file\n    file.close(); // close file now that write is done\n  } else {\n    Serial.println("Error opening Data.txt file.");\n    sd.errorPrint(&Serial);\n    return;\n  }\n}\n\nvoid eraseFile(void) {\n  if (sd.exists(filename)) {\n    sd.remove(filename);\n  }\n}\n\nvoid loop() {\n  static unsigned long lastrun = 0;    \n  if (millis() > lastrun) { //Run once every 1000ms\n    lastrun = millis() + 1000;\n    toggleLEDBlue();\n  }\n}\n')))}c.isMDXComponent=!0}}]);