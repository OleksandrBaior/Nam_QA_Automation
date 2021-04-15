class Authorize {
    // Application credentials:

    get email() { return  'ssls.automation+666@gmail.com'}
    get password() {return  '123456'}
    /**
     * define selectors using getter methods
     */
    get inputEmail() { 
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/input')
     }
    get inputPassword() { 
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[1]/input')
     }
    get loginButton() { 
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[3]/button') 
    }
    get eyeButton() {
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button')
    }
    get allert() {
        return $('//*[contains(text(),"Uh oh! Email or password is incorrect")] ')
    }







    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        browser.pause(3000)
    }
  
}

module.exports = new Authorize();
