import { newE2EPage } from '@stencil/core/testing';

describe('input-text-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-text-basic></input-text-basic>');

    const element = await page.find('input-text-basic');
    expect(element).toHaveClass('hydrated');
  });
});
