const {test, expect} = require('@playwright/test');
class LoginPage {

    constructor(page) //this page value useful only this class
    {
        this.page = page; // this we can declare globlly to access anywhere
        this.UserName = page.locator("#email");
        this.Nextbutton = page.locator("#login_btn");
        this.PassWord = page.locator("#okta-signin-password");
        this.SignINButton = page.locator("#okta-signin-submit");
        this.EnterCodeA = page.locator("#input_3");
        this.EnterCodeB = page.locator("#input_4");
        this.SubmitBtn = page.locator("[type='submit']");  
    
    }
    
}
    module.exports = {LoginPage};