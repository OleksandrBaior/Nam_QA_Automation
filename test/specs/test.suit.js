const MainPage = require('../pageobjects/main.page');
const Authorize = require('../pageobjects/authorize.page');
const RandomValue = require('../randomValue');
const UserPage = require('../pageobjects/user.page');
const ProfilePage = require('../pageobjects/profile.page');

describe('My Login application', () => {
    xit('Authorization page. Not registered user TEST_CASE_1', () => {
// open main page
        MainPage.open()
        MainPage.logInButton.click()

        Authorize.login(RandomValue.generateEmailAddress,RandomValue.generatePassword)
        Authorize.loginButton.click()
// Authorization page has to be opened
        expect(browser).toHaveUrl('https://www.sbzend.ssls.com/authorize');
// After click on "eye" icon in password field, password should be displayed
        Authorize.eyeButton.click()
        expect(Authorize.inputPassword).toHaveAttribute('type', 'text')
// If user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed
        expect(Authorize.allert).toBeDisplayed()
    });

    xit('Authorization page (Welcome back!) TEST_CASE_2', () => {
//open main page
        MainPage.open()
        MainPage.logInButton.click()
// enter valid email and password for previously registered user
        Authorize.login(Authorize.email,Authorize.password)
// check entered password, click on "eye” icon in password field
        Authorize.eyeButton.click()
        expect(Authorize.inputPassword).toHaveAttribute('type', 'text')
        Authorize.loginButton.click()
 // "Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page
        expect(UserPage.useremail).toHaveText(email.toUpperCase())
        UserPage.useremail.click()
        expect(UserPage.dropdownMenu).toBeDisplayed()
    });

    it(' My profile page. Client area TEST_CASE_3', () => {
//open main page
        MainPage.open()
        MainPage.logInButton.click()
// enter valid email and password for previously registered user
        Authorize.login(Authorize.email, Authorize.password)
        Authorize.loginButton.click()
        UserPage.useremail.click()
        UserPage.dropdownProfile.click()

// Save values to a variable(Do not change saved values) of such fields in Profile - Name, Email, Phone, Address, Support Pin
    let valuesProfile = [];

    valuesProfile.push(ProfilePage.name.getText())
    valuesProfile.push(ProfilePage.email.getText())
    valuesProfile.push(ProfilePage.address.getText())
    valuesProfile.push(ProfilePage.phone.getText())
    valuesProfile.push(ProfilePage.supportPin.getText())

    console.log('eeeeeeeeeeeeeeeeeeee'+ valuesProfile)
    })


});


