import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
    // Page Load
    test('home page loads', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h1').first()).toBeVisible();
    });

    // Slider Section
    test('slider view work navigates to works section', async ({ page }) => {
        await page.goto('/');

        const sliderSection = page.locator('#home, #slider').first();
        await expect(sliderSection).toBeVisible();

        const viewWorkButton = page.getByRole('link', { name: /view work/i }).or(
            page.getByRole('button', { name: /view work/i })
        );

        await viewWorkButton.click();

        await expect(page).toHaveURL(/#works/i);

        const worksSection = page.locator('#works, #portfolio').first();
        await worksSection.scrollIntoViewIfNeeded();
        await expect(worksSection).toBeVisible();
    });

    // About Section
    test('about section resume button downloads pdf', async ({ page }) => {
        await page.goto('/');

        const aboutSection = page.locator('#about');
        await aboutSection.scrollIntoViewIfNeeded();
        await expect(aboutSection).toBeVisible();

        const downloadButton = aboutSection.getByRole('link', { name: /download/i });

        const downloadPromise = page.waitForEvent('download');
        await downloadButton.click();
        const download = await downloadPromise;

        expect(download.suggestedFilename().toLowerCase()).toMatch(/\.pdf$/);
    });

    // Works Section
    test('portfolio section renders content', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('#portfolio')).toBeVisible();
        await expect(page.locator('#portfolio img, #portfolio h3').first()).toBeVisible();
    });

    test('works project opens project details page', async ({ page }) => {
        await page.goto('/');

        const worksSection = page.locator('#portfolio').first();
        await worksSection.scrollIntoViewIfNeeded();
        await expect(worksSection).toBeVisible();

        const firstProject = worksSection.locator('li').first();
        const clickable = firstProject.locator('div').first();
        await expect(clickable).toBeVisible();

        const portfolioLink = /\/portfolio\/[^/]+\/\d{4}\/[^/]+/;

        await Promise.all([
            page.waitForURL(portfolioLink),
            clickable.click(),
        ]);

        await expect(page).toHaveURL(portfolioLink);
        await expect(page.locator('h1, h2').first()).toBeVisible();
    });

    // Skills Section
    test('skills section is visible', async ({ page }) => {
        await page.goto('/');
        await page.locator('#skills').scrollIntoViewIfNeeded();
        await expect(page.locator('#skills')).toBeVisible();
    });

    // Email Section
    test('contact email button has valid mailto link', async ({ page }) => {
        await page.goto('/');

        const contactSection = page.locator('#contact').first();
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();

        const emailLink = contactSection.getByRole('link', { name: /email|contact/i }).first();
        await expect(emailLink).toBeVisible();
        await expect(emailLink).toHaveAttribute('href', /^mailto:/i);
    });
});