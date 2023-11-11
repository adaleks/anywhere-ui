import { newE2EPage } from '@stencil/core/testing';

describe('input-text-float-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-text-float-label></input-text-float-label>');

    const element = await page.find('input-text-float-label');
    expect(element).toHaveClass('hydrated');
  });
});
