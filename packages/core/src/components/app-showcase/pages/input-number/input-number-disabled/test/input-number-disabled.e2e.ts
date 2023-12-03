import { newE2EPage } from '@stencil/core/testing';

describe('input-number-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-disabled></input-number-disabled>');

    const element = await page.find('input-number-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
