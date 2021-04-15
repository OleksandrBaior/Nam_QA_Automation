class UserPage {
    /**
     * define selectors using getter methods
     */
    get useremail (){
        return $('//*[@id="app"]/div/header/div/div/div[1]/button/span')
    }
    get dropdownMenu(){
        return $('//*[@id="app"]/div/header/div/div/div[1]/div')
    }
    get dropdownProfile(){
        return $('//*[@id="app"]/div/header/div/div/div[1]/div/ul/li[2]/a')
    }
}

module.exports = new UserPage();
