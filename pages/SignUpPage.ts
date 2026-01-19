import { Locator, Page } from '@playwright/test';

export class SignUpTestPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly title1: Locator;
    readonly title2: Locator;
    readonly password: Locator;
    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly address2: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobile: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByTitle("Enter Account Information");
        this.title1 = page.locator('#id_gender1')
        this.title2 = page.locator('#id_gender2')
        this.password = page.locator('#password')
        this.day = page.locator('#days')
        this.month = page.locator('#months')
        this.year = page.locator('#years')
        this.firstName = page.locator('#first_name')
        this.lastName = page.locator('#last_name')
        this.company = page.locator('#company')
        this.address = page.locator('#address1')
        this.address2 = page.locator('#address2')
        this.state = page.locator('#state')
        this.city = page.locator('#city')
        this.zipcode = page.locator('#zipcode')
        this.country = page.locator('#country')
        this.mobile = page.locator('#mobile_number')
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async selectDay(day: string) {
        await this.day.selectOption(day);
    }

    async selectMonth(month: string) {
        await this.month.selectOption(month);
    }

    async selectYear(year: string) {
        await this.year.selectOption(year);
    }

    async clickCreateAccount() {
        await this.createAccountButton.click()
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterCompany(company: string) {
        await this.company.fill(company);
    }

    async enterAdd(address: string) {
        await this.address.fill(address);
    }

    async enterAdd2(address2: string) {
        await this.address2.fill(address2);
    }

    async enterState(state: string) {
        await this.state.fill(state);
    }

    async enterCity(city: string) {
        await this.city.fill(city);
    }

    async enterZip(zip: string) {
        await this.zipcode.fill(zip);
    }

    async selectCountry(country: string) {
        await this.country.selectOption(country);
    }

        async enterMobile(mobile: string) {
        await this.mobile.fill(mobile);
    }

async generateRandomEmailGenerator() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `user_${randomString}@gmail.com`;
}

// await page.get_by_placeholder("Email").fill(email);

    async enterCreateAccountDetails(TestData: any) {

        await this.enterPassword(TestData["password"]);
        await this.selectDay(TestData["day"]);
        await this.selectMonth(TestData["month"]);
        await this.selectYear(TestData["year"]);
        await this.enterFirstName(TestData["firstName"]);
        await this.enterLastName(TestData["lastName"]);
        await this.enterCompany(TestData["address1"]);
        await this.enterAdd(TestData["address1"]);
        await this.enterAdd2(TestData["address2"]);
        await this.selectCountry(TestData["country"]);
        await this.enterState(TestData["state"]);
        await this.enterCity(TestData["city"]);
        await this.enterZip(TestData["zipcode"]);
        await this.enterMobile(TestData["mobile"]);
        await this.page.waitForTimeout(3000);
        await this.clickCreateAccount()
        await this.page.waitForTimeout(10000);
    }

}