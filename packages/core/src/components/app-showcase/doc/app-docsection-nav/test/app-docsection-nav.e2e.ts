import { newE2EPage } from '@stencil/core/testing';

describe('any-app-docsection-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-docsection-nav></any-app-docsection-nav>');

    const element = await page.find('any-app-docsection-nav');
    expect(element).toHaveClass('hydrated');
  });
});
