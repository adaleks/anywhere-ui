import { newE2EPage } from '@stencil/core/testing';

describe('any-app-docsectiontext', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-docsectiontext></any-app-docsectiontext>');

    const element = await page.find('any-app-docsectiontext');
    expect(element).toHaveClass('hydrated');
  });
});
