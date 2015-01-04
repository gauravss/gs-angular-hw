/**
 * Created by gsawant on 1/3/15.
 */
describe('myPhoneCat Controller', function() {
    describe('PhoneListController', function () {
        var scope, ctrl, $httpBackend;

        //beforeEach(module('myPhoneCatApp'));
        beforeEach(module('phonecatControllers'));

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            scope = $rootScope.$new();
            ctrl = $controller('PhoneListController', {$scope:scope});
        }));

        //it('should create phones model with 3 phones', function() {
        //    expect(scope.phones.length).toBe(3);
        //});


        it('should create name as World', function() {
            expect(scope.name).toBe('World');
        });

        it('should create "phones" model with 2 phones fetched from xhr', function() {
           expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('age');
        });

    });
});
