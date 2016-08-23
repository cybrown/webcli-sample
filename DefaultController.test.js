import DefaultController from './DefaultController';
import {expect} from 'chai';

describe ('DefaultController', function () {

    let defaultController;

    beforeEach(() => defaultController = new DefaultController());

    it ('should contain a message', function () {
        expect(defaultController.message).to.equal('Hello from Angular.JS !');
    });
});
