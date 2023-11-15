import { newE2EPage } from '@stencil/core/testing';

describe('input-textarea-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-textarea-disabled></input-textarea-disabled>');

    const element = await page.find('input-textarea-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
