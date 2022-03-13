import { newE2EPage } from '@stencil/core/testing';

describe('any-input-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-input-number></any-input-number>');

    const element = await page.find('any-input-number');
    expect(element).toHaveClass('hydrated');
  });
});
