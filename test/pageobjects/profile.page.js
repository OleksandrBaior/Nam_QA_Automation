class ProfilePage {
    /**
     * define selectors using getter methods
     */
    get name(){
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[1]/div[2]/span')
    }
    get email(){
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[2]/div[2]/span')
    }
    get phone(){
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[4]/div[2]/span')
    }
    get address (){
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[5]/div[2]/span')
    }
    get supportPin(){
        return $('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/div[2]/div/div[2]/div/form/div[6]/div[2]/span')
    }
}

module.exports = new ProfilePage();