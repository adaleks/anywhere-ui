import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-readonly', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-readonly></any-checkbox-readonly>');

    const element = await page.find('any-checkbox-readonly');
    expect(element).toHaveClass('hydrated');
  });
});
