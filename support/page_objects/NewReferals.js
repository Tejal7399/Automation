const {test, expect} = require('@playwright/test');
class NewReferals {

    constructor(page) 
    {
       
       //const DropDown = page.locator('.md-select-value');
       this.Patients = page.locator("#main-menu-nav-patients-links");
       this.Referals = page.getByRole('link', { name: 'New Referral', exact: true });
       // const DropDown =  page.locator("#select_value_label_45");
       // await DropDown.selectOption("AAAAAAAAAA");
       this.PatientsFName = page.locator("div #input_259");
       this.PatientsLName = page.locator("#input_260");  
    
    }
    
}
    module.exports = {NewReferals};