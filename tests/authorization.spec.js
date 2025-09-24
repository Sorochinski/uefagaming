import { test, expect } from '@playwright/test';

test('UEFA Gaming login flow', async ({ page }) => {
  await page.goto('https://gaming.uefa.com/en/uefachampionsleague');

  await page.getByRole('button', { name: '✓Accept all' }).click();

  await expect(page.getByText('Unlock the full experience! Log in;')).toBeVisible();
  await expect(page.getByText('Take on your friends – and')).toBeVisible();


  const loginButton = page.getByRole('button', { name: 'Log in', exact: true });
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  // check  login  form
  const usernameField = page.locator('#username');
  const passwordField = page.locator('#password');
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();

  await usernameField.fill('kobiton2@mailinator.com');
  await passwordField.fill('Test123456!');
  await submitButton.click();

  await expect(page).toHaveURL(/.*uefachampionsleague.*/);
});