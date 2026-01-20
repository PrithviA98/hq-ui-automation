import { Locator, Page, test, } from '@playwright/test';

export class LoginPage {

    readonly emailLogin: Locator;
    readonly passLogin: Locator;
    readonly loginButton: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.emailLogin = page.locator('[data-qa="login-email"]');
        this.passLogin = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
    }

    async launchPage(uiUrl: string) {
        await this.page.goto(uiUrl);
    }

    async enterEmailLogin(email: string) {
        await this.emailLogin.fill(email);
    }

    async enterPassLogin(pass: string) {
        await this.passLogin.fill(pass);
    }

    async clickLogin() {
        await this.loginButton.click()
    }

}