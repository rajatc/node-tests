const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,17);

    expect(res).toBe(50).toBeA('number')    ;

    // if(res != 50 ){
    //     throw new Error(`Expected 50 but got ${res}`);
    // }
    
});

it('should async add two numbers', (done) => {
    utils.asynAdd(4, 3 , (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should give square of a number', () => {
    var res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
    // if( res != 16 ){
    //     throw new Error(`Expected 16 but got ${res}`);
    // }
});

it('should give asyn square of a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    });
})

it('should set first and last names', () => {
    var user = { age: 35, location: 'Pune'};
    var name = "Rajat Choudhury";
    var res = utils.setName(user, name);

    expect(res).toInclude({
        firstName: 'Rajat',
        lastName: 'Choudhury'
    }).toBeA('object');
})

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Rajat'}).toEqual({name: 'Rajat'}); //check objects
//     // expect({name: 'Rajat'}).toNotEqual({name: 'Rajat'}); //check objects
//     // expect([2, 3 ,4]).toInclude(2);
//     // expect([2, 3 ,4]).toExclude(1);
//     expect({
//         name: 'rajat',
//         age: 35,
//         location: 'Pune'
//     }).toInclude({
//         age: 35
//     })
// });