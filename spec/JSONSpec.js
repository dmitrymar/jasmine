//Spec Code
describe('Simple Total Test', function() {
    it('Increase number of values to 4', function() {
        var testObject = new JasmineTester({
            a: 2,
            b: 2,
            c: 2,
            d: 2
        });

        expect(testObject).toBeDefined();
    });
});