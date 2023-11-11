import { newE2EPage } from '@stencil/core/testing';

describe('input-switch-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-switch-disabled></input-switch-disabled>');

    const element = await page.find('input-switch-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
