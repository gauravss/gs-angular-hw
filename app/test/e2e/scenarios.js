/**
 * Created by gsawant on 1/3/15.
 */
'use strict';
describe('myPhoneCat App', function() {

    describe('Phone List View', function() {
        beforeEach(function() {
            browser.get('index.html');
        });

        var phoneList = element.all(by.repeater('phone in phones'));
        var query = element(by.model('query'));

        it('should filter the phone list as a user types into search box', function() {

            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);

            query.clear();
            query.sendKeys('asdasdad');
            expect(phoneList.count()).toBe(0);
        });

        it('should display the current filter value in the title bar', function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);

        });
    });
});