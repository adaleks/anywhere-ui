import { newE2EPage } from '@stencil/core/testing';

describe('any-app-docapisection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-docapisection></any-app-docapisection>');

    const element = await page.find('any-app-docapisection');
    expect(element).toHaveClass('hydrated');
  });
});
