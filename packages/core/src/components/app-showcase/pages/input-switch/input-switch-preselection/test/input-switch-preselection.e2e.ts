import { newE2EPage } from '@stencil/core/testing';

describe('input-switch-preselection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-switch-preselection></input-switch-preselection>');

    const element = await page.find('input-switch-preselection');
    expect(element).toHaveClass('hydrated');
  });
});
