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
        var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));

        it('should filter the phone list as a user types into search box', function() {

            expect(phoneList.count()).toBe(20);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(8);

            query.clear();
            query.sendKeys('asdasdad');
            expect(phoneList.count()).toBe(0);
        });

        //it('should display the current filter value in the title bar', function() {
        //    query.clear();
        //    expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);
        //
        //    query.sendKeys('nexus');
        //    expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        //
        //});

        it('should be possible to control the phone order via the drop down select box', function() {
            function getNames() {
                return phoneNameColumn.map(function(elm) {
                   return elm.getText();
                });
            }

            query.sendKeys('tablet');

            expect(getNames()).toEqual([
                "Motorola XOOM™ with Wi-Fi",
                "MOTOROLA XOOM™"
            ]);

            element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

            expect(getNames()).toEqual([
                "MOTOROLA XOOM™",
                "Motorola XOOM™ with Wi-Fi"
            ]);
        });

        it('should render phone specific links', function() {
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
               expect(url.split('#')[1]).toBe('/phones/nexus-s');
            });
        });

        it('should redirect index.html to index.html#/phones', function() {
            browser.get('index.html');
            browser.getLocationAbsUrl().then(function(url) {
                expect(url.split('#')[1]).toBe('/phones');
            });
        });

    });

    describe('Phone detail view', function() {
       beforeEach(function() {
           browser.get('index.html#/phones/nexus-s');
       });

        it('should display placeholder page with phoneId', function() {
           expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
        });

    });
});