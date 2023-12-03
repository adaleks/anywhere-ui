import { newE2EPage } from '@stencil/core/testing';

describe('input-number-numeral', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-numeral></input-number-numeral>');

    const element = await page.find('input-number-numeral');
    expect(element).toHaveClass('hydrated');
  });
});
