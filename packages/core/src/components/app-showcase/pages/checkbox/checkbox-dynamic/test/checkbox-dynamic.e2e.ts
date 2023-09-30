import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-dynamic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-dynamic></any-checkbox-dynamic>');

    const element = await page.find('any-checkbox-dynamic');
    expect(element).toHaveClass('hydrated');
  });
});
