const { test, expect } = require("@playwright/test");

test.only("Popup validations", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // await page.goto("https://google.com");
  // await page.goBack();
  // await page.goForward();

  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#dipslayed-text")).toBeHidden();
  page.on("dialog", (dialog) => dialog.accept());
  await page.locator("#confirmbtn").click();
  await page.locator("#mousehover").hover();
  const framesPage = page.frameLocator("#courses-iframe");
  await framesPage.locator('li a[href*="lifetime-access"]:visible').click();
  const textCheck = await framesPage.locator(".text h2").textContent();
  console.log(textCheck.split(" ")[1]);
});
