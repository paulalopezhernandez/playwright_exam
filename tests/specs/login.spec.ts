import { createUser, User } from "../model/user";
import { test, expect } from "../fixtures/fixture";
import { request } from "@playwright/test";

test.beforeEach(async ({ pageManager }) => {
    
    await pageManager.goto();

});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
});

test.only('Register User', async ({ pageManager }) => {
   
    //Create a new user using fake data 
    const user = createUser();

    //Click on Register link and fill the customer form
    await pageManager.onLoginOrRegister(user).clickOnRegister();    
    await pageManager.onCustomerForm().fillForm(user);

    //After filling the data, click on Register button and check if the user was created correctly
    const responseBody = await pageManager.onCustomerForm().registerAndCheck(pageManager);
    await expect(responseBody).toContain('ParaBank | Customer Created');    

    //Logout once the user is registered
    await pageManager.onLeftPanel().clickOnLogOut();

    //Login again with the credentials created
    await pageManager.onLoginOrRegister(user).login(user);

    //Logout
    await pageManager.onLeftPanel().clickOnLogOut();
});