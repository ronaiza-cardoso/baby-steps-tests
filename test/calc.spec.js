'use strict';

const Calc = require('./../Calc');
const chai = require('chai');
const expect = chai.expect;

describe('name of file - Calc', ( ) => {
    it('description of the test - sum should return 4', (done) => {
        let resultSum = Calc.sum( 2, 2 );
        expect( resultSum ).to.be.equal( 4 );
        done();
    });

    it('sub should return 9', (done) => {
        let resultSub = Calc.sub( 10, 1 );
        expect( resultSub ).to.be.equal( 9 );
        done();
    });

    it('mult should return 10', (done) => {
        let resultMult = Calc.mult( 2, 5 );
        expect( resultMult ).to.be.equal( 10 );
        done();
    });

    it('div should return 10', (done) => {
        let resultDiv = Calc.div( 20, 2 );
        expect( resultDiv ).to.be.equal( 10 );
        done();
    });
});