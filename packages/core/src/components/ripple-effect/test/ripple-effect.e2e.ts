import { newE2EPage } from '@stencil/core/testing';

describe('any-ripple-effect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-ripple-effect></any-ripple-effect>');

    const element = await page.find('any-ripple-effect');
    expect(element).toHaveClass('hydrated');
  });
});
