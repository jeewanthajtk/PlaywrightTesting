class OrgLoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = this.page.locator('input[name="email"]'); 
    this.passwordInput = this.page.locator('input[name="password"]');
    this.loginButton = this.page.locator('button[type="submit"]'); 
    }
  
    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }
  
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }
  
    async clickLogin() {
        await this.loginButton.click();
    }

    async waitForPageToLoad() {
        // Wait for the page to load completely
        await this.page.waitForLoadState('networkidle'); 
      }
  }
  
  module.exports = OrgLoginPage;