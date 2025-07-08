import { Locator, Page } from "@playwright/test";

export class LoginPanelComponent {

    readonly registerLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly logoutLink: Locator;
    readonly loginLink: Locator;


    constructor(page: Page) {
        this.registerLink = page.locator('a:has-text("Register")'); 
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginLink = page.locator('input[type="submit"][value="Log In"]');
        
    }

    async clickOnRegister() {
        await this.registerLink.click();
    }

    async login(user) {
        await this.usernameInput.fill(user.username);  
        await this.passwordInput.fill(user.password);
        await this.loginLink.click();
    
    }

}