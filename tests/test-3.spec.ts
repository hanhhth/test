import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://dev38-mtf.opdev.vn/client/qt/');
  await page.locator('input[name="vpc_Amount"]').click();
  await page.locator('input[name="vpc_Amount"]').click();
  await page.locator('input[name="vpc_Amount"]').fill('1025550000');
  await page.locator('input[name="vpc_OrderInfo"]').click();
  await page.locator('input[name="vpc_OrderInfo"]').click();
  await page.locator('input[name="vpc_OrderInfo"]').fill('Ma Don Hang123');
  await page.getByRole('button', { name: 'Pay Now!' }).click();
});