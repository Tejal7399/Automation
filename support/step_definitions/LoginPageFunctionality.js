const { createBdd } = require('playwright-bdd');
const { Given, Then } = createBdd();
const { PageConstants } = require("../PageConstants");
const { Data } = require("../../utils/Data");
const { expect } = require('@playwright/test');
const { LoginPage} = require ("../page_objects/LoginPage");
const data =require("../../test_data/userData.json");
//const dataset = JSON.parse (JSON.stringify(require('../../test_data/userData.json'))); 
//when we use multiple data(UN & PW) then we use data set

//const data = new Data();

Given("I navigate to Hospice Portal using valid Username and password and I verified PageTitle", async function ({page}) {
    const pageConstants = new PageConstants(page);
    await page.goto("https://acme.dev.gcp.consolo.services");
    await page.waitForLoadState("networkidle")
// });

// Then("I Enter Username and password to login to validate login functionality", async function ({page}) {
//     // for( const data of dataset) //when we use multiple data(UN & PW) then we use data set
// //{
//     const pageConstants = new PageConstants(page);
    await pageConstants.loginpage.UserName.type(data.username);
    await pageConstants.loginpage.Nextbutton.click();
    await pageConstants.loginpage.PassWord.type(data.password);
    await pageConstants.loginpage.SignINButton.click();
    await pageConstants.loginpage.EnterCodeA.type(data.code);
    await pageConstants.loginpage.EnterCodeB.type(data.code);
    await pageConstants.loginpage.SubmitBtn.click();
    
    
// });

// Then("I verified PageTitle", async function ({page}) {
    console.log(await page.title());
});
