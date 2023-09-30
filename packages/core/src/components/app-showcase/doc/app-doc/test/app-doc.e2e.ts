import { newE2EPage } from '@stencil/core/testing';

describe('any-app-doc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-doc></any-app-doc>');

    const element = await page.find('any-app-doc');
    expect(element).toHaveClass('hydrated');
  });
});
