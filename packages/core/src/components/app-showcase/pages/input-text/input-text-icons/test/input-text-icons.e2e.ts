import { newE2EPage } from '@stencil/core/testing';

describe('input-text-icons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-text-icons></input-text-icons>');

    const element = await page.find('input-text-icons');
    expect(element).toHaveClass('hydrated');
  });
});
