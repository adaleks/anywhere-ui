import { newE2EPage } from '@stencil/core/testing';

describe('any-app-docsection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-docsection></any-app-docsection>');

    const element = await page.find('any-app-docsection');
    expect(element).toHaveClass('hydrated');
  });
});
