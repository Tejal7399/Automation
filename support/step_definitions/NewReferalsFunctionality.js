const { createBdd } = require('playwright-bdd');
const { Given, Then } = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataConstants } = require("../../utils/DataConstants");
const { expect } = require('@playwright/test');
//const { LoginPage} = require ("../page_objects/LoginPage");
//const {DashBoardPage} = require("../page_objects/DashBoardPage");
const {NewReferals} = require("../page_objects/NewReferals");
const data =require("../../test_data/userData.json");
//const dataset = JSON.parse (JSON.stringify(require('../../test_data/userData.json'))); 
//when we use multiple data(UN & PW) then we use data set
//const data = new Data();

 
Then("I create new Referals using required details", async function ({page}) {
    // for( const data of dataset) //when we use multiple data(UN & PW) then we use data set
//{
    const pageConstants = new PageConstants(page);
    await pageConstants.newReferals.Patients.click();
    await pageConstants.newReferals.Referals.click();
    await pageConstants.newReferals.PatientsFName.type("TestRK");
    await pageConstants.newReferals.PatientsLName.type("RK");
    
});
