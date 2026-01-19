import config from '../resources/config.json';
import testData from '../resources/testdata.json';

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';



test.describe("Login and Verify Book", () => {
  let homePage: HomePage;
  let uiUrl: string;

  test.beforeEach(async ({ page }) => {
    uiUrl = config["testUrl"];
    homePage = new HomePage(page);

  });

  test('Signup and Verify Success', async () => {
    await homePage.launchPage(uiUrl);
    console.log("Launched URL: " + uiUrl);
    await homePage.enterName(testData["name"]);
    await homePage.enterEmail(testData["email"]);
    await homePage.clickSignUp();

  })



});
