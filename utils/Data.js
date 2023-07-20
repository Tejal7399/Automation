
//const {DashBoardPage} = require('../support/page_objects/DashBoardPage');
const {LoginPage} = require ('../support/page_objects/LoginPage');
const {PageConstants} = require("../support/PageConstants");
class Data{

    constructor(page)
    {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
       // this.dashboardPage = new DashBoardPage(this.page);

    }

    getLoginPage()
    {
        return this.loginpage;
    }
    // getDashboardPage()
    // {
    //     return this.dashboardPage;
    // }
}
module.exports = {Data};