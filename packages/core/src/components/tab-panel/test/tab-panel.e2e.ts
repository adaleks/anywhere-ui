import { newE2EPage } from '@stencil/core/testing';

describe('any-tab-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-tab-panel></any-tab-panel>');

    const element = await page.find('any-tab-panel');
    expect(element).toHaveClass('hydrated');
  });
});
