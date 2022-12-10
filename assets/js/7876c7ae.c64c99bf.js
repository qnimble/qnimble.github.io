"use strict";(self.webpackChunkdoc_source=self.webpackChunkdoc_source||[]).push([[8784],{9337:function(e){e.exports=JSON.parse('{"pluginId":"quarto","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"autoSideBar":[{"type":"link","label":"Quarto","href":"/Quarto/","docId":"Quarto"},{"type":"link","label":"Specifications","href":"/Quarto/Specifications","docId":"Specifications"},{"type":"link","label":"Quick Start Guide","href":"/Quarto/Quick_Start","docId":"Quick_Start"},{"type":"link","label":"Frequently Asked Questions","href":"/Quarto/FAQ","docId":"FAQ"},{"type":"link","label":"Troubleshooting Guide","href":"/Quarto/Troubleshooting","docId":"Troubleshooting"},{"type":"category","label":"Program Examples","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Analog Filter","href":"/Quarto/Examples/Filter","docId":"Examples/Filter"},{"type":"link","label":"Lock-in Amplifier","href":"/Quarto/Examples/LockIn","docId":"Examples/LockIn"},{"type":"link","label":"PID Servo","href":"/Quarto/Examples/Servo","docId":"Examples/Servo"},{"type":"link","label":"Pulsed Output Waveform","href":"/Quarto/Examples/Pulsed_Output","docId":"Examples/PulsedOutput"},{"type":"link","label":"SD Card","href":"/Quarto/Examples/SDCard","docId":"Examples/SDCard"},{"type":"link","label":"Serial Commands","href":"/Quarto/Examples/Commands","docId":"Examples/Commands"}],"href":"/Quarto/Examples/"},{"type":"category","label":"Software Functions","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"ADC","href":"/Quarto/Functions/ADC","docId":"Functions/ADC"},{"type":"link","label":"DAC","href":"/Quarto/Functions/DAC","docId":"Functions/DAC"},{"type":"link","label":"Digital I/O","href":"/Quarto/Functions/Digital","docId":"Functions/Digital"},{"type":"link","label":"External Clocks","href":"/Quarto/Functions/ExternalClocks","docId":"Functions/ExternalClocks"},{"type":"link","label":"LEDs","href":"/Quarto/Functions/LEDs","docId":"Functions/LEDs"},{"type":"link","label":"Triggers","href":"/Quarto/Functions/Triggers","docId":"Functions/Triggers"}],"href":"/Quarto/Functions/"},{"type":"category","label":"App Notes","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Analog Response Time","href":"/Quarto/AppNotes/AnalogResponseTime","docId":"AppNotes/AnalogResponseTime"},{"type":"link","label":"Doubles vs Floats","href":"/Quarto/AppNotes/DoubleVsFloat","docId":"AppNotes/DoubleVsFloat"},{"type":"link","label":"Measuring Interrupt Latency","href":"/Quarto/AppNotes/InterruptLatency","docId":"AppNotes/InterruptLatency"}]},{"type":"link","label":"Compliance","href":"/Quarto/Compliance","docId":"Compliance"}]},"docs":{"AppNotes/AnalogResponseTime":{"id":"AppNotes/AnalogResponseTime","title":"Analog System Response Time","description":"Understanding the system latency from analog to digital and back to analog.","sidebar":"autoSideBar"},"AppNotes/DoubleVsFloat":{"id":"AppNotes/DoubleVsFloat","title":"Doubles vs Floats","description":"Understanding the pros and cons of using Floats vs Doubles on the Quarto.","sidebar":"autoSideBar"},"AppNotes/InterruptLatency":{"id":"AppNotes/InterruptLatency","title":"Measuring Interrupt Latency","description":"Overview","sidebar":"autoSideBar"},"Compliance":{"id":"Compliance","title":"Compliance","description":"FCC","sidebar":"autoSideBar"},"Examples/Commands":{"id":"Examples/Commands","title":"Serial Commands for Dynamic Control","description":"Example for creating commands to interact with the Quarto","sidebar":"autoSideBar"},"Examples/Examples":{"id":"Examples/Examples","title":"Program Examples","description":"Below are links to detailed write-ups of software examples for using the Quarto:","sidebar":"autoSideBar"},"Examples/Filter":{"id":"Examples/Filter","title":"Analog Filter with Gain and Subtraction","description":"The Quarto can be used to filter analog signals. In this example, we will take two analog inputs, $V1(t)$, and $V2(t)$ and create a new output $V_3(t)$ defined by the following equation:","sidebar":"autoSideBar"},"Examples/LockIn":{"id":"Examples/LockIn","title":"Lock-in Amplifier","description":"Example for using the Quarto as a Lock-In Amplifer","sidebar":"autoSideBar"},"Examples/PulsedOutput":{"id":"Examples/PulsedOutput","title":"Pulsed Arbitrary Output Waveform","description":"The Quarto can act an arbitrary waveform generator. But more than that, its output can be externally controlled. In this example, the Quarto outputs 10 periods of a 10 kHz sine wave whenever trigger signal goes high.","sidebar":"autoSideBar"},"Examples/SDCard":{"id":"Examples/SDCard","title":"SD Card","description":"Example Reading and Writing to the SD Card","sidebar":"autoSideBar"},"Examples/Servo":{"id":"Examples/Servo","title":"PID Servo","description":"The Quarto can turn into a proportional-integral-differential (PID) Servo with just 20 lines of code! Let\'s see how.","sidebar":"autoSideBar"},"FAQ":{"id":"FAQ","title":"Frequently Asked Questions","description":"Frequently asked questions about the qNimble Quarto","sidebar":"autoSideBar"},"Functions/ADC":{"id":"Functions/ADC","title":"ADC","description":"The following functions are available for configuring and reading analog data with the ADC. The \\"X\\" in any function name must be replaced by the channel number (1,2,3 or 4):","sidebar":"autoSideBar"},"Functions/DAC":{"id":"Functions/DAC","title":"DAC","description":"The following general DAC functions are available to set the Analog Output voltage. They take a DAC channel as an argument along with the DAC value.","sidebar":"autoSideBar"},"Functions/Digital":{"id":"Functions/Digital","title":"Digital I/O","description":"The Quarto has eight digital input and output pins, which can be utilized using standard Arduino\u2122 functions:","sidebar":"autoSideBar"},"Functions/ExternalClocks":{"id":"Functions/ExternalClocks","title":"External Clocks","description":"These functions require firmware version 1.32.52 or higher. You can check your firmware version with the Arduino example \\"Device Info\\" under the \\"Testing\\" category. If you have an earlier firmware revision, please contact qNimble to get upgrade instructions.","sidebar":"autoSideBar"},"Functions/Functions":{"id":"Functions/Functions","title":"List of Software Functions","description":"The following is a list of categories of Quarto specific functions and other useful functions. Click on a category for a full description of all the functions in that category. This is not a complete list of all function available on the Quarto. For additional functions please see the Arduino Language Reference. The Quarto can run Arduino or standard c/c++ functions.","sidebar":"autoSideBar"},"Functions/LEDs":{"id":"Functions/LEDs","title":"LEDs","description":"The Quarto has a user-controlled RGB LED on the front panel and the red, green and blue LEDs can be individually controlled with the following functions:","sidebar":"autoSideBar"},"Functions/Triggers":{"id":"Functions/Triggers","title":"Triggers","description":"The following functions are available for the two Trigger lines. The \\"X\\" in a function name must be replaced by the trigger number (1 or 2):","sidebar":"autoSideBar"},"Quarto":{"id":"Quarto","title":"qNimble Quarto A Digital Brain for the Analog World\u2122","description":"qNimble Quarto is a high speed ADC DAC 16 bit analog to digital solution for filters, servos, PID loops and other applications.","sidebar":"autoSideBar"},"Quick_Start":{"id":"Quick_Start","title":"Quick Start Guide","description":"quick start guide to using the qNimble Quarto arduino","sidebar":"autoSideBar"},"Specifications":{"id":"Specifications","title":"Specifications","description":"Analog to Digital Converter (ADC)","sidebar":"autoSideBar"},"Troubleshooting":{"id":"Troubleshooting","title":"Troubleshooting Guide","description":"Troubleshooting guide for the qNimble Quarto","sidebar":"autoSideBar"}}}')}}]);