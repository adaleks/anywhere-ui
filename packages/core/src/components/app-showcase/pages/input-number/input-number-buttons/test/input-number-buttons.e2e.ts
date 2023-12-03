import { newE2EPage } from '@stencil/core/testing';

describe('input-number-buttons', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-buttons></input-number-buttons>');

    const element = await page.find('input-number-buttons');
    expect(element).toHaveClass('hydrated');
  });
});
