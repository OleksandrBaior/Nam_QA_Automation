
class Authorize {
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
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        browser.pause(3000)
        this.loginButton.click(); 
    }
  
}

module.exports = new Authorize();
