import config from '../resources/config.json';
import testData from '../resources/testdata.json';

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { SignUpPage } from '../pages/SignUpPage.ts';
import { AccountPage } from '../pages/AccountPage.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { MainPage } from '../pages/MainPage.ts';
import { CommonUtils } from '../utils/commonUtils.ts';


test.describe("SignUp, Logout and Verify Login", () => {
  let homePage: HomePage;
  let signUpPage: SignUpPage;
  let accountPage: AccountPage;
  let mainPage: MainPage;
  let loginPage: LoginPage;
  let uiUrl: string;

  test.beforeEach(async ({ page }) => {
    uiUrl = config["testUrl"];
    homePage = new HomePage(page);
    signUpPage = new SignUpPage(page);
    accountPage = new AccountPage(page);
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);

  });

  test('Signup and Verify Success', async () => {
    await homePage.launchPage(uiUrl);
    const email = await CommonUtils.generateRandomEmailGenerator();
    await homePage.enterNameSignUp(testData["name"]);
    await homePage.enterEmailSignUp(email);
    await homePage.clickSignUp();
    await signUpPage.enterCreateAccountDetails(testData);
    const message = await accountPage.getMessage();
    expect(message).toContain(testData["successMessage"]);
    await accountPage.clickContinue();
    await mainPage.clickLogout();
    await mainPage.clickLogin();
    await loginPage.enterEmailLogin(email);
    await loginPage.enterPassLogin(testData["password"]);
    await loginPage.clickLogin();
    await expect(mainPage.logOutLink).toBeVisible();
  })

});
