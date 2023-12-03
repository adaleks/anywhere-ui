import { newE2EPage } from '@stencil/core/testing';

describe('input-number-float-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-float-label></input-number-float-label>');

    const element = await page.find('input-number-float-label');
    expect(element).toHaveClass('hydrated');
  });
});
