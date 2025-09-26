// login.js
const { expect } = require('@playwright/test');

/**
 * login
 * @param {import('@playwright/test').Page} page
 * @param {string} username
 * @param {string} password
 */
async function login(page, username = 'kobiton2@mailinator.com', password = 'Test123456!') {
  const usernameField = page.locator('#username');
  const passwordField = page.locator('#password');
  const submitButton = page.getByRole('button', { name: 'Submit' });

  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();

  await usernameField.fill(username);
  await passwordField.fill(password);
  await submitButton.click();

  //confirm we are log in
  await page.getByText('Kobi2');
}

module.exports = { login };