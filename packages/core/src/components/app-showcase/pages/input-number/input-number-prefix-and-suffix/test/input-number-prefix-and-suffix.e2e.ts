import { newE2EPage } from '@stencil/core/testing';

describe('input-number-prefix-and-suffix', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-prefix-and-suffix></input-number-prefix-and-suffix>');

    const element = await page.find('input-number-prefix-and-suffix');
    expect(element).toHaveClass('hydrated');
  });
});
