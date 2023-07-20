const {test, expect} = require('@playwright/test');
class DashBoardPage {

    constructor (page) 
    {
        this.agency = page.locator("#main-menu-nav-agency-links");
        this.agencyDropdown = page.getByRole('link', { name: 'Encounter Type', exact: true });
        this.OpsClick = page.locator(".md-raised");
        this.PatientName = page.locator("input[aria-label='Name']");
        this.Role= page.getByRole('listbox', { name: 'Roles' });
        this.OpsRole =page.getByRole('option', { name: "Bereavement" }).locator('div').first();

    }
    
}
module.exports = {DashBoardPage};