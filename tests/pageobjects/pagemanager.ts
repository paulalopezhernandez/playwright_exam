import { Page } from "playwright";
import { LoginPanelComponent } from "./components/loginPanel.component";
import { CustomerFormComponent } from "./components/customerForm.component";
import { LeftPanelComponent } from "./components/leftPanel.component";

export class PageManager {
    
    readonly page: Page;
    protected readonly loginPanel: LoginPanelComponent;
    protected readonly customerForm: CustomerFormComponent;
    protected readonly leftPanel: LeftPanelComponent;

    constructor(page: Page) {
        this.page = page;
        this.loginPanel = new LoginPanelComponent(page);
        this.customerForm = new CustomerFormComponent(page);
        this.leftPanel = new LeftPanelComponent(page);
    }    

    async goto() {
        await this.page.goto('https://parabank.parasoft.com/');
        
    }

    onLoginOrRegister(user) {
        return this.loginPanel;    
    }

    
    onCustomerForm() {
        return this.customerForm;    
    }

    onLeftPanel() {
        return this.leftPanel;
    }

}