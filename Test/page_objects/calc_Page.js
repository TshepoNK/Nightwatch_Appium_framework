const commands = {
    clickDigit(digit) {
      return this.click(`//android.widget.Button[@resource-id="com.google.android.calculator:id/digit_${digit}"]`);
    },
    clickOperator(operator) {
      return this.click(`//android.widget.Button[@resource-id="com.google.android.calculator:id/op_${operator}"]`);
    },
    clickEquals() {
      return this.click('//android.widget.Button[@resource-id="com.google.android.calculator:id/eq"]');
    },
    assertResult(expectedResult) {
      return this.assert.containsText(
        '//android.widget.TextView[@resource-id="com.google.android.calculator:id/result"]',
        expectedResult
      );
    },
    navigate() {
      return this.navigate('http://192.168.1.25'); // Replace with your actual URL
    }
  };

  module.exports = {
    url: function () {
      return this.api.launchUrl;
    },
    commands: [commands],
    elements: {}
  };
  