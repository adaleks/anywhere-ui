import { newE2EPage } from '@stencil/core/testing';

describe('any-app-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-code></any-app-code>');

    const element = await page.find('any-app-code');
    expect(element).toHaveClass('hydrated');
  });
});
