import { test, expect } from '@playwright/test';

test('UEFA Gaming basic UI checks', async ({ page }) => {
  await page.goto('https://gaming.uefa.com/en/uefachampionsleague');
  await page.getByRole('button', { name: '✓Accept all' }).click();

  await expect(page.getByText('Unlock the full experience! Log in;')).toBeVisible();

  await expect(page.getByText('Take on your friends – and')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Log in', exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Log in', exact: true }).click();

  await expect(page.locator('#username')).toBeVisible();

  await expect(page.locator('#username')).toBeVisible();


  await expect(page.locator('#username')).toBeVisible();
});
