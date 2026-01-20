import { Locator, Page, test, } from '@playwright/test';

export class HomePage {
    readonly email: Locator;
    readonly name: Locator;
    readonly signUpButton: Locator;
    readonly emailLogin: Locator;
    readonly nameLogin: Locator;
    readonly loginButton: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('[data-qa="signup-name"]');
        this.email = page.locator('[data-qa="signup-email"]');
        this.signUpButton = page.locator('[data-qa="signup-button"]');
        this.nameLogin = page.locator('[data-qa="login-name"]');
        this.emailLogin = page.locator('[data-qa="login-email"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
    }

    async launchPage(uiUrl: string) {
        await this.page.goto(uiUrl);
    }
    async enterEmailSignUp(email: string) {
        await this.email.fill(email);
    }

    async enterNameSignUp(name: string) {
        await this.name.fill(name);
    }

    async enterEmailLogin(email: string) {
        await this.emailLogin.fill(email);
    }

    async enterNameLogin(name: string) {
        await this.nameLogin.fill(name);
    }

    async clickSignUp() {
        await this.signUpButton.click()
    }
    async clickLogin() {
        await this.loginButton.click()
    }

}