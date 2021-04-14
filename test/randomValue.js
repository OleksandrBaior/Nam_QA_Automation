const randomPassword = require('generate-password');
const randomEmail = require('random-email');

class RandomValue {
/**
     * random value emails and passwords
*/
    get generateEmailAddress() {
        return  randomEmail({ domain: 'example.com' });    
    } 
    get generatePassword() {
      return  randomPassword.generateMultiple(3, {
        length: 10,
        uppercase: false
    });
    }
}

module.exports = new RandomValue();