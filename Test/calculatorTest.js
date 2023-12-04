module.exports = {
  'Calculator Test': function (browser) {
    const calculatorApp = browser.page.calculator(); 

    calculatorApp
      .navigate()
      .clickDigit(8)
      .clickOperator('multiply')
      .clickDigit(5)
      .clickEquals()
      .assertResult('40')
      .saveScreenshot('./test_output/Screenshot.png');

    browser.end();
  }
};
