/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class MainPage {
    /**
     * define selectors using getter methods
     */
    get logInButton(){
        return $('//*[@id="app"]/div/header/div/div/button[1]')
   }   
    /**
    * Opens a sub page of the page
    */
    open () {
        return browser.url(`https://www.sbzend.ssls.com/`)
    }
}

module.exports = new MainPage();
