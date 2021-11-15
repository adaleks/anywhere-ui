import { newE2EPage } from '@stencil/core/testing';

describe('any-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-badge></any-badge>');

    const element = await page.find('any-badge');
    expect(element).toHaveClass('hydrated');
  });
});
