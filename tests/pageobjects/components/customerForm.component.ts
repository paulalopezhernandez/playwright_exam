import { Locator, Page } from "@playwright/test";
import { User } from "../../model/user";
import { PageManager } from "../pagemanager";

export class CustomerFormComponent {

    readonly customerForm: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneInput: Locator;
    readonly ssnInput: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmInput: Locator;
    readonly registerButton: Locator;


    constructor(page: Page) {
        this.customerForm = page.locator('id=customerForm'); 
        this.firstNameInput = page.locator('id=customer.firstName'); 
        this.lastNameInput = page.locator('id=customer.lastName'); 
        this.addressInput = page.locator('id=customer.address.street'); 
        this.cityInput = page.locator('id=customer.address.city'); 
        this.stateInput = page.locator('id=customer.address.state'); 
        this.zipCodeInput = page.locator('id=customer.address.zipCode'); 
        this.phoneInput = page.locator('id=customer.phoneNumber'); 
        this.ssnInput = page.locator('id=customer.ssn'); 
        this.userNameInput = page.locator('id=customer.username'); 
        this.passwordInput = page.locator('id=customer.password'); 
        this.confirmInput = page.locator('id=repeatedPassword'); 
        this.registerButton = page.locator('input[value="Register"]');
    }

    async fillForm(user: User) {
        await this.firstNameInput.fill(user.firstname);
        await this.lastNameInput.fill(user.lastname);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateInput.fill(user.state);
        await this.zipCodeInput.fill(user.zipcode);
        await this.phoneInput.fill(user.phone);
        await this.ssnInput.fill(user.ssn);
        await this.userNameInput.fill(user.username);
        await this.passwordInput.fill(user.password); 
        await this.confirmInput.fill(user.password); 
                
    }

    async registerAndCheck(pageManager: PageManager) {
        const [request, response] = await Promise.all([
            pageManager.page.waitForRequest(request => request.url().includes('/register.htm')),
            pageManager.page.waitForResponse(response => response.url().includes('/register.htm')),
            await this.registerButton.click()        
        ]);

        return response.text();
    }

}