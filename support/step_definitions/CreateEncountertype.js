const { createBdd } = require('playwright-bdd');
const { Given, Then } = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataConstants } = require("../../utils/DataConstants");
const { expect } = require('@playwright/test');
//const { LoginPage} = require ("../page_objects/LoginPage");
const {DashBoardPage} = require("../page_objects/DashBoardPage");
const data =require("../../test_data/userData.json");
//const dataset = JSON.parse (JSON.stringify(require('../../test_data/userData.json'))); 
//when we use multiple data(UN & PW) then we use data set
//const data = new Data();

 
Then("I create new Advanced Encouter type without required details using Agency tab", async function ({page}) {
    // for( const data of dataset) //when we use multiple data(UN & PW) then we use data set
//{
    const pageConstants = new PageConstants(page);
    await pageConstants.dashboardpage.agency.click();
    await pageConstants.dashboardpage.agencyDropdown.click();
    await pageConstants.dashboardpage.OpsClick.click();
    await pageConstants.dashboardpage.PatientName.type("TestPlaywrightAuto_15");
    await pageConstants.dashboardpage.Role.click();
    await pageConstants.dashboardpage.OpsRole.click();
    
});
