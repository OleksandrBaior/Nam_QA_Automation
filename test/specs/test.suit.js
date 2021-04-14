const MainPage = require('../pageobjects/main.page');
const Authorize = require('../pageobjects/authorize.page');
const RandomValue = require('../randomValue');

describe('My Login application', () => {
    it('Authorization page. Not registered user TEST_CASE_1', () => {
        MainPage.open()
        MainPage.logInButton.click()
        Authorize.login(RandomValue.generateEmailAddress,RandomValue.generatePassword)
        expect(browser).toHaveUrl('https://www.sbzend.ssls.com/authorize');
    });
});


