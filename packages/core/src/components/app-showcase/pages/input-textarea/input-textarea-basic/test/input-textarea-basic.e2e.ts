import { newE2EPage } from '@stencil/core/testing';

describe('input-textarea-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-textarea-basic></input-textarea-basic>');

    const element = await page.find('input-textarea-basic');
    expect(element).toHaveClass('hydrated');
  });
});
