import { test, expect } from '@playwright/test';
const { login } = require('../login');

test('UEFA Gaming smoke test', async ({ page }) => {
    await page.goto('https://www.uefa.com/womenschampionsleague/games/');

    await page.getByRole('button', { name: '✓Accept all' }).click();

    await page.getByRole('link', { name: 'Play Predict Six' }).click();

    await expect(page.locator('.AlSjq')).toBeVisible();


    await page.getByRole('group', { name: '2 / 3' }).click();
    const loginButtonVisible = await page.locator('button[aria-label="Log in"]').isVisible();
    console.log(`Log in button visible: ${loginButtonVisible}`);
    await page.getByRole('group', { name: '3 /' }).click();


    await page.getByRole('link', { name: 'Read the rules' }).click();


    await expect(page.getByRole('heading', { name: 'Predict Six rules' })).toBeVisible();


    await page.getByText('Predictions', { exact: true }).click();


    await page.getByRole('button', { name: 'Log in', exact: true }).click();


    await login(page);

    await page.getByRole('group', { name: '1 / 3' }).click();
    await page.getByRole('button', { name: 'Share' }).click();
    await page.getByText('Share your predictionsSave').click();
    await page.locator('#modal path').first().click();
    await page.getByText('Leagues').isVisible();
    await page.getByText('Private leagues').isVisible();
    await page.getByText('Rules').click();
    await page.getByText('Achievements').click();
    await page.getByText('Predict Six0of 51Your').isVisible();
    await page.getByLabel('Close modal').locator('path').click();
    await expect(page).toHaveURL(/.*uwclpredictor.*/);
});