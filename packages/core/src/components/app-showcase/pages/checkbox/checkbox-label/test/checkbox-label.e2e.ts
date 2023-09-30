import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-label></any-checkbox-label>');

    const element = await page.find('any-checkbox-label');
    expect(element).toHaveClass('hydrated');
  });
});
