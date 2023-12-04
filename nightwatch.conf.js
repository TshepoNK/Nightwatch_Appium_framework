const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

module.exports = {
  test_settings: {
    default: {
      desiredCapabilities: {
        automationName: 'appium',
        platformName: 'Android',
        platformVersion: '8.0.0',
        deviceName: '4.65_720p_Galaxy_Nexus_API_26e',
        appPackage: 'com.google.android.calculator',
        appActivity: 'com.android.calculator2.Calculator',
        app: './resource/Calculator_8.4.1 (520193683)_Apkpure.apk',
        // No need for browser-related settings when testing a native app
      },
      selenium: {
        start_process: false,
        port: 4723,
        host: 'localhost',
      },
      selenium_host: 'localhost',
      selenium_port: 4723,
      silent: true,
      launch_url: 'http://127.0.0.1',
      screenshots: {
        enabled: false,
        path: '',
        on_failure: true,
        on_error: true
      },
    },
  },
};
