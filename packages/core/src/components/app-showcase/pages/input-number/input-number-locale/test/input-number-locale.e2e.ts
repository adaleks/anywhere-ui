import { newE2EPage } from '@stencil/core/testing';

describe('input-number-locale', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-locale></input-number-locale>');

    const element = await page.find('input-number-locale');
    expect(element).toHaveClass('hydrated');
  });
});
