import { newE2EPage } from '@stencil/core/testing';

describe('input-textarea-float-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-textarea-float-label></input-textarea-float-label>');

    const element = await page.find('input-textarea-float-label');
    expect(element).toHaveClass('hydrated');
  });
});
