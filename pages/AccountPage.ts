import { Locator, Page, test, } from '@playwright/test';

export class AccountPage {

    readonly continueButton: Locator;
    readonly message: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.message = page.locator('[data-qa="account-created"]');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    async getMessage(): Promise<string> {
        const messageText = await this.message.textContent();
        return messageText ?? "";
    }

    async clickContinue() {
        await this.continueButton.click()
    }

}