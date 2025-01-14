const { After, Before } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
require('dotenv').config();

Before(async function () {
  this.browser = await chromium.launch({ 
    headless: true,
    args:["--start-maximized"]
   });
  this.context = await this.browser.newContext({
    viewport: null,
});
  this.page = await this.context.newPage();
});

Before({ tags: '@ui' }, async function () { 
  console.log("Before hook for @ui tag"); 
  this.abc = "abc"
  // ... rest of the before hook logic
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});