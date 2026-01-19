import {Locator, Page, test,} from '@playwright/test';

export class HomePage {
    readonly email: Locator;
    readonly name: Locator;
    readonly signUpButton: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('[data-qa="signup-name"]');
        this.email = page.locator('[data-qa="signup-email"]');
        this.signUpButton = page.locator('[data-qa="signup-button"]');
    }

    async launchPage(uiUrl: string){
        await this.page.goto(uiUrl);
    }
    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterName(name: string) {
        await this.name.fill(name);
    }

    async clickSignUp() {
        await this.signUpButton.click()
    }
}