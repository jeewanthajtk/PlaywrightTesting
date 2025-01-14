const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../../page_objects/orgaization/OrgLoginPage');


Given('I open the login page', async function () {
    console.log(this.abc)
    console.log("Given I open the login page")
//     this.browser = await chromium.launch({ headless: false }); 
//   this.page = await this.browser.newPage();
//   await this.page.goto(process.env.organizationBaseUrl+'/sign-in');
//   this.loginPage = new LoginPage(this.page);
//   await this.loginPage.waitForPageToLoad(); 
// //   await this.page.pause() 


  await this.page.goto(process.env.organizationPortalBaseUrl+'/sign-in');
  this.loginPage = new LoginPage(this.page); 
  await this.loginPage.waitForPageToLoad(); 
  });

When('I enter username {string}', async function (username) {
    console.log("When I enter username "+ username)
    await this.loginPage.enterUsername(username);
  });

When('I enter password {string}', async function (password) {
    // Write code here that turns the phrase above into concrete actions
    console.log("When I enter password "+ password)
    await this.loginPage.enterPassword(password); 
  });

When('I click the login button', async function () {
    console.log("When I click the login button ")
    await this.loginPage.clickLogin(); 
  });

Then('I should see the dashboard', async function () {
    console.log("Then I should see the dashboard ")
  });