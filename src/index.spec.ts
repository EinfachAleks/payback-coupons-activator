import { test } from "@playwright/test";
require("dotenv").config(); // eslint-disable-line @typescript-eslint/no-var-requires

test("active PayBack points", async ({ page }) => {
  const payBackUrl = "https://www.payback.de";
  const loginUrl = "/login";
  const couponUrl = "/coupon";
  const userEmailOrId = process.env.userEmailOrId as string;
  const userPassword = process.env.userPassword as string;
  const buttonType = "button";
  const couponLocator = "pbc-coupon";
  const onlyRelevantCookies = "Nur notwendige Cookies";
  const stayedLoggedIn = "eingeloggt bleiben";
  const emailOrId = "E-Mail oder Kundennummer";
  const password = "Passwort";
  const login = "Einloggen";
  const activateNow = "Jetzt aktivieren";

  // login area
  await page.goto(payBackUrl + loginUrl);
  await page.getByRole(buttonType, { name: onlyRelevantCookies }).click();
  await page.getByText(stayedLoggedIn).click();

  // paste email or id
  await page.getByPlaceholder(emailOrId).click();
  await page.getByPlaceholder(emailOrId).fill(userEmailOrId);

  // paste password
  await page.getByPlaceholder(password).click();
  await page.getByPlaceholder(password).fill(userPassword);

  // login to page
  await page.getByRole(buttonType, { name: login }).click();

  // go to e-coupons page
  await page.goto(payBackUrl + couponUrl);

  // click every button for activating the coupons
  for (const singleButton of await page.locator(couponLocator).getByRole(buttonType, { name: activateNow }).all())
    await singleButton.click();
});
