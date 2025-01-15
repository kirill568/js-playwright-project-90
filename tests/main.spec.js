import { expect, test } from '@playwright/test';

test('page should be rendered', async ({ page }) => {
  page.goto('/')

  await expect(page).toHaveTitle('Board')
  await expect(page.getByText('SIGN IN')).toBeVisible()
})

