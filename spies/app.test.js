const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Rajat', 35);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Rajat', 35);
    });

    it('should call saveUser with user object', () => {
        var email = 'rajat@example.com';
        var password = "12345abc";

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});