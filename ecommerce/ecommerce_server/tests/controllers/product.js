const expect = require('chai').expect;
const addOp = require('../../controllers/product').addOp;


decribe('Math', function() {
    decribe('#add function', function() {
        it('should returns the result number from the two arguments', function () {
            const result = addOp(1,2);
            expect(result).to.equal(3);
        });
    });
});