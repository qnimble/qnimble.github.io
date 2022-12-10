"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[4228],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),c=o,h=u["".concat(m,".").concat(c)]||u[c]||p[c]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8893:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=t(3117),o=t(102),i=(t(7294),t(3905)),r=["components"],l={id:"Commands",slug:"Commands",title:"Serial Commands for Dynamic Control",sidebar_label:"Serial Commands",sidebar_position:60,keywords:["Commands","Dynamic","Serial","Examples"],description:"Example for creating commands to interact with the Quarto"},m=void 0,s={unversionedId:"Examples/Commands",id:"Examples/Commands",title:"Serial Commands for Dynamic Control",description:"Example for creating commands to interact with the Quarto",source:"@site/Quarto/Examples/Commands.md",sourceDirName:"Examples",slug:"/Examples/Commands",permalink:"/Quarto/Examples/Commands",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{id:"Commands",slug:"Commands",title:"Serial Commands for Dynamic Control",sidebar_label:"Serial Commands",sidebar_position:60,keywords:["Commands","Dynamic","Serial","Examples"],description:"Example for creating commands to interact with the Quarto"},sidebar:"autoSideBar",previous:{title:"SD Card",permalink:"/Quarto/Examples/SDCard"},next:{title:"List of Software Functions",permalink:"/Quarto/Functions/"}},d={},p=[{value:"Setup",id:"setup",level:2},{value:"Adding Commands",id:"adding-commands",level:2},{value:"Commands with Arguments",id:"commands-with-arguments",level:2},{value:"Setting Variables",id:"setting-variables",level:2},{value:"Custom Functions",id:"custom-functions",level:2},{value:"Multiple Arguments",id:"multiple-arguments",level:2},{value:"List All Commands",id:"list-all-commands",level:2},{value:"Custom Unknown Command",id:"custom-unknown-command",level:2},{value:"Full Code",id:"full-code",level:2}],u={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In other examples, we show how to program the ",(0,i.kt)("em",{parentName:"p"},"Quarto")," to do a task, such as act like a ",(0,i.kt)("a",{parentName:"p",href:"Servo"},"PID Servo"),". But often you want to interact with the ",(0,i.kt)("em",{parentName:"p"},"Quarto")," to change settings, read values, etc. To make that process easier we have a library, qCommand, for registering serial commands and mapping them to functions. This let you enter commands into the serial port to change the behavior of the ",(0,i.kt)("em",{parentName:"p"},"Quarto"),". "),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"First, we need to include the qCommand library and instantiate it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "qCommand.h"\nqCommand qC;\n')),(0,i.kt)("p",null,"This new  ",(0,i.kt)("inlineCode",{parentName:"p"},"qC"),"  object has a function ",(0,i.kt)("inlineCode",{parentName:"p"},"readSerial")," that will parse incoming Serial data. We want it to continually process new Serial data, so we call this function in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"loop()")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  qC.readSerial(Serial);\n}\n")),(0,i.kt)("p",null,"With that, we have the basics working. If you load this program on the ",(0,i.kt)("em",{parentName:"p"},"Quarto"),", you can type commands on the Serial port and get responses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> Hello\n<< Unknown command: Hello\n>> Hi\n<< Unknown command: Hi\n")),(0,i.kt)("p",null,"At this point, we have no commands registered, so everything we type results in an unknown command. "),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Quarto")," actually has two Serial ports. The main one (Serial) is the default and is used by the Arduino IDE for reprogramming the device. But the second one (Serial2) can be used as well. If you like using a terminal program outside of the Arduino IDE, it can be nice to use the second port and leave the main one available to the Arduino IDE for reprogramming.  To use the command system on both Serial ports, we need have ",(0,i.kt)("inlineCode",{parentName:"p"},"qC")," object read both serial devices:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  qC.readSerial(Serial);\n  qC.readSerial(Serial2);\n}\n")),(0,i.kt)("p",null,"Now, you can type commands on either Serial port and get a response."),(0,i.kt)("h2",{id:"adding-commands"},"Adding Commands"),(0,i.kt)("p",null,"Adding commands looks a little strange at first, but its a very powerful structure. We will map a string (or command) to a function. That function must take exactly two arguments: the qC object and a Stream. A Stream is just a more generalized version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial")," object. By using this Stream instead of directly using Serial, the command can respond on the Serial port that issued the command. The Stream object has all the same functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"println")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," that the Serial object has."),(0,i.kt)("p",null,"Here's an example function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void hello(qCommand& qC, Stream& S) {\n    S.println("Hello there.");\n}\n')),(0,i.kt)("p",null,"Now to add that command, we put the following into our ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    qC.addCommand("Hello", hello);\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addCommand"),' line assigns the string "Hello" to the ',(0,i.kt)("inlineCode",{parentName:"p"},"hello")," function we wrote.  Now, we type into (either) Serial port, we'll get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> Hello\n<< Hello there.\n>> HELLO\n<< Hello there.\n>> hello2\n<< Unknown command: hello2\n")),(0,i.kt)("p",null,"You'll notice that commands are case-insensitive as 'HELLO' works the same as 'Hello'. This is the default, but you can make the commands case-sensitive by initializing the ",(0,i.kt)("inlineCode",{parentName:"p"},"qC")," object with the optional case-sensitive parameter set to true:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"//qCommand qc; //Shorted version when case-sensitivity is false\nqCommand qC = qCommand(true); //case-sensitive instantiation\n")),(0,i.kt)("h2",{id:"commands-with-arguments"},"Commands with Arguments"),(0,i.kt)("p",null,"To pass arguments to your functions, add them after the command string with a space. The syntax is "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"command arg1 arg2 arg3 etc\n")),(0,i.kt)("p",null,"To access each string argument, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"next()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"current()")," functions. If there isn't another argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"next()")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"current()")," function is used to get the current argument. Here's an example function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void hello(qCommand& qC, Stream& S) {\n    if ( qC.next() == NULL) {\n        S.println("Hello.");\n    } else {\n        S.printf("Hello %s, it is nice to meet you.\\n",qC.current());\n    }\n}\n')),(0,i.kt)("p",null,"And if we want our hello function to respond to both 'Hello' and 'Hi', we simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"addCommand")," a second time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    qC.addCommand("Hello", hello); \n    qC.addCommand("Hi", hello);\n}\n')),(0,i.kt)("p",null,"Let's see that in action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> Hi\n<< Hello.\n>> Hello Angela\n<< Hello Angela, it is nice to meet you.\n")),(0,i.kt)("h2",{id:"setting-variables"},"Setting Variables"),(0,i.kt)("p",null,"Often you will want a command to read and write to a variable. For example, maybe you want the 'gain' command to let you adjust the gain in your servo loop. This structure for reading and writing a variable is very common, so qCommon provides a shortcut for it. Instead of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"addCommand")," function to map a function to a command, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"assignVariable")," function to assign a command to read and writing a variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'qC.assignVariable("Gain",&loopGain);\n')),(0,i.kt)("p",null,"This helper function works for most number types including ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"uint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"short"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned short"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uint8_t")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"int8_t"),". For all integer types, values outside of their range will be coerced to the nearest possible value. Here's a short program to show how it works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "qCommand.h"\nqCommand qC;\n\nuint longInt;\nint8_t int8;\ndouble doubleVar;\n  \nvoid setup() {\n  qC.assignVariable("uint",&longInt);\n  qC.assignVariable("int8",&int8);\n  qC.assignVariable("double",&doubleVar);\n}\n\nvoid loop() {\n  qC.readSerial(Serial);\n  qC.readSerial(Serial2);\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> uint -4\n<< uint is 0\n>> int8 500\n<< int8 is 127\n>> int8 -50\n<< int8 is -50\n>> double 1.2345\n<< double is 1.234500\n>> double 3.14e-5\n<< double is 3.140000e-05\n")),(0,i.kt)("h2",{id:"custom-functions"},"Custom Functions"),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"assignVariable")," function is very handy, sometimes you'll want to write a custom function to get more control. Maybe we want to control the gain to a PID Servo, but we want to restrict the gain to be positive and less then 10. In this situation, we have to write a custom function. The structure will be same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," function discussed above, but it will need to take a string argument and convert it to a double. To do this, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"atof")," function. Similarly, to convert a string to an integer, we would use the ",(0,i.kt)("inlineCode",{parentName:"p"},"atoi")," function. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'double loopGain = 1.021; // global for the gain\nvoid gain(qCommand& qC, Stream& S) {\n    if ( qC.next() != NULL) {\n        loopGain = atof(qC.current());\n        if (loopGain < 0) {\n            loopGain = 0;\n        } else if (loopGain > 10) {\n            loopGain = 10;\n        }\n    }\n    S.printf("The gain is %f\\n",loopGain);\n}\n')),(0,i.kt)("p",null,"If we assign this function to the string 'Gain' with "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'qC.addCommand("Gain", gain);\n')),(0,i.kt)("p",null,"then we interact with the variable gain like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> gain\n<< The gain is 1.021000\n>> gain -3.25\n<< The gain is 0.000000\n>> gain 11.25\n<< The gain is 10.000000\n>> gain 1.234567\n<< The gain is 1.234567\n")),(0,i.kt)("h2",{id:"multiple-arguments"},"Multiple Arguments"),(0,i.kt)("p",null,"To use multiple arguments for your functions, simply repeat calling ",(0,i.kt)("inlineCode",{parentName:"p"},"qC.next()")," Also, if you want to use an integer instead of a double, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"atoi")," command. Here's an example that takes a floating point number (first argument) and an integer (second argument) and multiplies them together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void multiply(qCommand& qC, Stream& S) {\n    double a;\n    int b;\n    if ( qC.next() == NULL) {\n        S.println("The multiply command needs two arguments, none given.");\n        return;\n    } else {\n        a = atof(qC.current());\n    }\n    if ( qC.next() == NULL) {\n        S.println("The multiply command needs two arguments, only one given.");\n        return;\n    } else {\n        b = atoi(qC.current());\n    }\n    S.printf("%e times %d is %e\\n",a,b,a*b);\n}\n')),(0,i.kt)("p",null,"If we assign this function the command 'Mult', then we get the following behavior:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},">> mult\n<< The multiply command needs two arguments, none given.\n>> mult 1.23\n<< The multiply command needs two arguments, only one given.\n>> mult 1.23 -3\n<< 1.230000e+00 times -3 is -3.690000e-00\n>> mult 1.23e1 2.25\n<< 1.230000e+01 times 2 is 2.460000e+01\n")),(0,i.kt)("h2",{id:"list-all-commands"},"List All Commands"),(0,i.kt)("p",null,"All the available commands can be listed with the qCommand's  ",(0,i.kt)("inlineCode",{parentName:"p"},"printAvailableCommands")," function (which takes the Stream as an argument). So we can write a help function as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void help(qCommand& qC, Stream& S) {\n    S.println("Available commands are:");\n    qC.printAvailableCommands(S);\n}\n')),(0,i.kt)("h2",{id:"custom-unknown-command"},"Custom Unknown Command"),(0,i.kt)("p",null,'One last customization option for the qCommand library is to customize the response to an unknown command. By default, the response is just "Unknown command: " followed by the input command. But we can write our own function to response to unknown commands:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void UnknownCommand(const char* command, qCommand& qC, Stream& S) {\n    S.printf(\"I'm sorry, I didn't understand that. (You said '%s'?)\\n\",command);\n    S.println(\"You can type 'help' for a list of commands\");\n}\n")),(0,i.kt)("p",null,"Then in the setup, we configure qCommand to use our new function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    qC.setDefaultHandler(UnknownCommand);\n    qC.addCommand("Hello", hello); \n    ...\n}\n')),(0,i.kt)("h2",{id:"full-code"},"Full Code"),(0,i.kt)("p",null,"Here's the full code (also available in the Examples / qCommand in the Arduino IDE.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "qCommand.h"\nqCommand qC;\n//qCommand qC = qCommand(true); //Use this line instead for case-sensitive commands\n\ndouble loopGain = 1.021;\nint anInteger;\n\nvoid setup() {\n  qC.setDefaultHandler(UnknownCommand);\n  //qC.setCaseSensitive(true); //uncomment to make commands case-sensitive\n  qC.addCommand("Hello", hello);\n  qC.addCommand("Hi", hello);\n  qC.addCommand("Gain",gain);\n  qC.assignVariable("Int",&anInteger);\n  qC.addCommand("Mult",multiply);\n  qC.addCommand("Help", help);  \n}\n\nvoid loop() {\n  qC.readSerial(Serial);\n  qC.readSerial(Serial2);\n}\n\nvoid hello(qCommand& qC, Stream& S) {\n  if ( qC.next() == NULL) {\n    S.println("Hello.");\n  } else {\n    S.printf("Hello %s, it is nice to meet you.\\n",qC.current());    \n  }\n}\n\nvoid gain(qCommand& qC, Stream& S) {\n    if ( qC.next() != NULL) {\n        loopGain = atof(qC.current());\n        if (loopGain < 0) {\n            loopGain = 0;\n        } else if (loopGain > 10) {\n            loopGain = 10;\n        }\n    }\n    S.printf("The gain is %f\\n",loopGain);\n}\n\nvoid multiply(qCommand& qC, Stream& S) {\n  double a;\n  int b;\n  if ( qC.next() == NULL) {\n    S.println("The multiply command needs two arguments, none given.");\n    return;\n  } else {\n    a = atof(qC.current());\n  }\n  if ( qC.next() == NULL) {\n    S.println("The multiply command needs two arguments, only one given.");\n    return;\n  } else {\n    b = atoi(qC.current());\n  }\n  S.printf("%e times %d is %e\\n",a,b,a*b);\n}\n\nvoid help(qCommand& qC, Stream& S) {\n  S.println("Available commands are:");\n  qC.printAvailableCommands(S);\n}\n\nvoid UnknownCommand(const char* command, qCommand& qC, Stream& S) {\n  S.printf("I\'m sorry, I didn\'t understand that. (You said \'%s\'?)\\n",command);\n  S.println("You can type \'help\' for a list of commands");\n}\n')))}c.isMDXComponent=!0}}]);