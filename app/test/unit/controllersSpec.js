/**
 * Created by gsawant on 1/3/15.
 */
describe('PhoneListController', function () {

    var scope, ctrl;

    beforeEach(module('myPhoneCatApp'));

    beforeEach(inject(function($controller){
        scope = {};
        ctrl = $controller('PhoneListController', {$scope:scope});
    }));

    it('should create phones model with 3 phones', function() {
        expect(scope.phones.length).toBe(3);
    });


    it('should create name as World', function() {
        expect(scope.name).toBe('World');
    });

    it('should set the defult value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });

});