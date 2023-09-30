import { newE2EPage } from '@stencil/core/testing';

describe('any-app-config', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-config></any-app-config>');

    const element = await page.find('any-app-config');
    expect(element).toHaveClass('hydrated');
  });
});
