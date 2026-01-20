import { Locator, Page, test, } from '@playwright/test';

export class MainPage {
    readonly loginLink: Locator;
    readonly logOutLink: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.getByText('Signup / Login');
        this.logOutLink = page.getByText('Logout')
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async clickLogout() {
        await this.logOutLink.click();
    }

}