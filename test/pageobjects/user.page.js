class UserPage {
    /**
     * define selectors using getter methods
     */
    get useremail (){
        return $('//*[@id="app"]/div/header/div/div/div[1]/button')
    }
    get dropdownMenu(){
        return $('//*[@id="app"]/div/header/div/div/div[1]/div')
    }
    get dropdownProfile(){
        return $('//*[@id="app"]/div/header/div/div/div[1]/div/ul/li[2]/a')
    }
    get logOut() {
        return $('//*[@id="app"]/div/header/div/div/div[1]/div/ul/li[5]')
    }
}

module.exports = new UserPage();
