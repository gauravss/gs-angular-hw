/**
 * Created by gsawant on 1/3/15.
 */
describe('PhoneListController', function () {

    beforeEach(module('myPhoneCatApp'));

    it('should create phones model with 3 phones', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PhoneListController', {$scope:scope});

        expect(scope.phones.length).toBe(3);

    }));
});