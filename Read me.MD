***Testing Android native application***

1. Download Appium - install the latest version of the Appium for your platform from the NPM.

2. Download Android SDK tools - install the latest version of the Android SDK tools for your platform from the Android SDK tools.

3. Download JDK - install the latest version of the Java Development Kit for your platform from the JDK.

4. Configure the Appium host and port *View nightwatch.conf.Json* file on the root dir

Execute test

1. Open a terminal to run Appium sever, we installed the Appium server via npm, so we ran server by this command:  appium
*This will run the Appium server on localhost:4723.

2. Open another terminal and type following: emulator -list-avds
N.B Refer to resource folder: screenshot(1) -- if you have more than one emulator copy the emulator name

3. run command: emulator @nightwatch-android-11    ----you can replace the mulator name with the one available on your machine

4. run test:  npx nightwatch Test/calculatorTest.js

