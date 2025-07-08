import { Locator, Page } from "@playwright/test";

export class LeftPanelComponent {

    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.logoutLink = page.locator('a[href="logout.htm"]');
    }

    async clickOnLogOut() {
        await this.logoutLink.click();
    }

}