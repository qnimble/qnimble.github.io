"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[4195],{388:function(e,t,n){n.d(t,{H2:function(){return c},Lc:function(){return o}});var a=n(1073),r=n(7294),c=function(e){var t=e.children;return r.createElement("div",{className:"baloo"},t)},o=function(e){var t=e.children;return r.createElement("div",{className:"baloo thick"},t)};r.Component},9103:function(e,t,n){n.d(t,{A:function(){return c},E:function(){return o}});var a=n(1073),r=n(7294),c=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.buttonClicked=function(){var e=document.createElement("script");e.async=!1,e.src="https://static.mailerlite.com/js/universal.js",document.body.appendChild(e),e.onload=function(){ml("accounts","1663256","c1i0n8a0r8","load")("webforms","1485100","e1t5s2","show")}},n.render=function(){return r.createElement("a",{className:"subscribeLink button button--outline button-secondary button-lg",onClick:this.buttonClicked},this.props.message)},t}(r.Component),o=function(e){function t(){return e.apply(this,arguments)||this}(0,a.Z)(t,e);var n=t.prototype;return n.buttonClicked=function(){var e=document.createElement("script");e.async=!1,e.src="https://static.mailerlite.com/js/universal.js",document.body.appendChild(e),e.onload=function(){ml("accounts","1663256","c1i0n8a0r8","load")("webforms","1485100","e1t5s2","show")}},n.render=function(){return r.createElement("a",{href:"#",onClick:this.buttonClicked},this.props.message)},t}(r.Component)},4338:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(3117),r=n(7294);function c(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=c(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function o(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=c(e))&&(a&&(a+=" "),a+=t);return a}var l=n(2424),i=n(9960),s=n(2263),m=n(4996),u={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i"},d=n(9103),p=n(388),f=n(8084),E=[{title:"Super Low Latency",imageUrl:"img/dominos.svg",description:r.createElement(r.Fragment,null,"Read from the ADC, write to the DAC and do floating point math, all with a latency of few microseconds. Enables servo bandwidths of up to 100kHz. Get the speed of an FPGA without the complexity.")},{title:"Lab-grade Analog Measurements",imageUrl:"img/telescope.svg",description:r.createElement(r.Fragment,null,"16-bit DAC and ADC, \xb110V range with 1 MSPS data rate and low-drift analog reference for precision measurements.")},{title:"Compatible with Arduino\u2122",imageUrl:"img/arduino_logo_no_text_bw.svg",description:r.createElement(r.Fragment,null,"Easy to program in the Arduino\u2122 IDE. Write your code, click 'upload' and your code is running on the Quarto. Compatible with most C compilers / development environments.")}];function h(e){var t=e.imageUrl,n=e.title,a=e.description,c=(0,m.Z)(t);return r.createElement("div",{className:o("col col--4",u.feature)},c&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:u.featureImage,src:c,alt:n})),r.createElement("h3",null,n),r.createElement("p",null,a))}var g=function(){var e=(0,s.Z)().siteConfig,t=void 0===e?{}:e,n=(0,f.ZP)().recentnews.default;return r.createElement(l.Z,{title:""+t.title,description:""+t.title},r.createElement("header",{className:o("hero hero--primary",u.heroBanner)},r.createElement("div",{className:"container pcbBackground"},r.createElement("div",{className:"row"},r.createElement("div",{className:o("col col--2",u.feature)}),r.createElement("div",{className:o("col col--8",u.feature)},r.createElement("div",{className:"center"},r.createElement("div",{className:"transparent-background"},r.createElement("h1",{className:"hero__title"},"Introducing the ",r.createElement(p.Lc,null,r.createElement(i.Z,{to:"/Quarto"},"Quarto"))),r.createElement("p",{className:"hero__text"},"A multi-function data acquisition (DAQ) and control platform with a user-programable processor for interacting with data in real-time."),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:u.buttons},r.createElement(i.Z,{className:o("button button--outline button--secondary button--lg white_text",u.getStarted),to:(0,m.Z)("Quarto")},"Learn More")))),r.createElement("div",{className:"center"},r.createElement("div",{className:"KB"},r.createElement(i.Z,{to:(0,m.Z)("Quarto")},r.createElement("img",{src:"./img/quarto-frontpanel.jpg",alt:"Quarto"}))))),r.createElement("div",{className:o("col col--2",u.feature)})))),r.createElement("main",null,E&&E.length>0&&r.createElement("section",{className:u.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},E.map((function(e,t){return r.createElement(h,(0,a.Z)({key:t},e))})))))),r.createElement("div",{className:"bigBreak"}),r.createElement("div",{role:"presentation",class:"navbar-sidebar__backdrop"}),r.createElement("div",{className:"margin-bottom--md"},r.createElement("div",{className:"row"},r.createElement("div",{className:o("col col--2")}),r.createElement("div",{className:o("col col--4")},r.createElement("h2",{style:{color:"black"}},"Recent News:"),r.createElement("ul",null,n.map((function(e,t){return r.createElement("li",{key:t},r.createElement("h3",null,r.createElement(i.Z,{to:e.metadata.permalink},e.metadata.title)))})))),r.createElement("div",{className:o("col col--4",u.feature,"pcbBackground")},r.createElement("div",{className:"greyBox simple_center"},"Sign-up for our mailing list and be the first to know about sales, new products and other anouncements.",r.createElement("div",{className:"buttons_src-pages- black-text margin-top--sm center"},r.createElement(d.A,{message:"Join Our Mailing List"}))),r.createElement("div",{className:o("col col--2")})))))}}}]);