import DefaultController from './DefaultController';

describe ('DefaultController', function () {

    let defaultController;

    beforeEach(() => defaultController = new DefaultController());

    it ('should contain a message', function () {
        expect(defaultController.message).toEqual('Hello from Angular.JS !');
    });
});
