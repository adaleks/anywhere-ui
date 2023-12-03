import { newE2EPage } from '@stencil/core/testing';

describe('input-number-vertical', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-number-vertical></input-number-vertical>');

    const element = await page.find('input-number-vertical');
    expect(element).toHaveClass('hydrated');
  });
});
