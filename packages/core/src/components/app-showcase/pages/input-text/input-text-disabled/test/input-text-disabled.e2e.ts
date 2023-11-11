import { newE2EPage } from '@stencil/core/testing';

describe('input-text-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-text-disabled></input-text-disabled>');

    const element = await page.find('input-text-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
