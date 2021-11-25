import { newE2EPage } from '@stencil/core/testing';

describe('any-input-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-input-switch></any-input-switch>');

    const element = await page.find('any-input-switch');
    expect(element).toHaveClass('hydrated');
  });
});
