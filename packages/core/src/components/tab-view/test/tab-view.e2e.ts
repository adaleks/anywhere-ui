import { newE2EPage } from '@stencil/core/testing';

describe('any-tab-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-tab-view></any-tab-view>');

    const element = await page.find('any-tab-view');
    expect(element).toHaveClass('hydrated');
  });
});
