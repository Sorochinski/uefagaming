import { test, expect } from '@playwright/test';

test('UEFA Gaming smoke test', async ({ page }) => {
  await page.goto('https://gaming.uefa.com/en/uefachampionsleague');

  await page.getByRole('button', { name: '✓Accept all' }).click();

  await expect(page.getByText('Unlock the full experience! Log in;')).toBeVisible();
  await expect(page.getByText('Take on your friends – and')).toBeVisible();
  await expect(page.locator('#gaming')).toBeVisible();
  await page.locator('#gaming').hover();
  await page.locator('pk-menu-item[href="https://gaming.uefa.com/en/uclpredictor"]').click();
   await expect(page.locator('#gaming')).toBeVisible();
  await page.locator('#gaming').hover();

 
   await page.locator('pk-menu-item[href="https://gaming.uefa.com/en/uefachampionsleague/profile"]').click();
  await expect(page.getByText('Log in to see your unlocked')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Log in', exact: true })).toBeVisible();
});