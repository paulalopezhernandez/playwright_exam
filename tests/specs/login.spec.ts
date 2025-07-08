import { createUser, User } from "../model/user";
import { test, expect } from "../fixtures/fixture";
import { request } from "@playwright/test";

test.beforeEach(async ({ pageManager }) => {
    
    await pageManager.goto();

});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
});

test.only('Register User', async ({ pageManager, user}) => {
   
    //Click on Register link and fill the customer form with the fake data created in fixture.ts
    await pageManager.onLoginOrRegister(user).clickOnRegister();    
    await pageManager.onCustomerForm().fillForm(user);

    //After filling the data, click on Register button
    const responseBody = await pageManager.onCustomerForm().registerAndCheck(pageManager);

    //Check if the user was created correctly
    await expect(responseBody).toContain('ParaBank | Customer Created');   
    console.log('*** New Customer created correctly: ', user.username, ' ***'); 

    //Logout once the user is registered
    await pageManager.onLeftPanel().clickOnLogOut();
    console.log('*** Customer logged out successfully ***');

    //Login again with the credentials created
    await pageManager.onLoginOrRegister(user).login(user);
    console.log('*** Customer', user.username, ' logged in successfully ***');
    
    //Logout
    await pageManager.onLeftPanel().clickOnLogOut();
    console.log('*** Customer logged out successfully ***');
});