import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-disabled></any-checkbox-disabled>');

    const element = await page.find('any-checkbox-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
