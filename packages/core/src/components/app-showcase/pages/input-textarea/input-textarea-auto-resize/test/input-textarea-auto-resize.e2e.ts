import { newE2EPage } from '@stencil/core/testing';

describe('input-textarea-auto-resize', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-textarea-auto-resize></input-textarea-auto-resize>');

    const element = await page.find('input-textarea-auto-resize');
    expect(element).toHaveClass('hydrated');
  });
});
