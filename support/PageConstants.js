const {LoginPage} = require ("./page_objects/LoginPage");
const {DashBoardPage} = require ("./page_objects/DashBoardPage");
const {Data} = require("../utils/Data");
const {DataConstants} = require("../utils/DataConstants");
const {NewReferals} = require("./page_objects/NewReferals");

class PageConstants {
    constructor(page) {
        this.loginpage = new LoginPage(page);
        this.dashboardpage = new DashBoardPage(page);
        this.newReferals = new NewReferals (page);
        this.data = new Data(page);
        this.dataconstants = new DataConstants(page);       
        
    }

}
    
module.exports = { PageConstants };