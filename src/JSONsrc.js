//Source Code
var JasmineTester = function(numbers) {
    this.number1 = numbers.a;
    this.number2 = numbers.b;
};

JasmineTester.prototype = {
    constructor: JasmineTester,
    total: function() {
        return this.number1 + this.number2;
    }
};
