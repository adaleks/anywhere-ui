import { newE2EPage } from '@stencil/core/testing';

describe('input-number-currency', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-currency></input-number-currency>');

    const element = await page.find('input-number-currency');
    expect(element).toHaveClass('hydrated');
  });
});
