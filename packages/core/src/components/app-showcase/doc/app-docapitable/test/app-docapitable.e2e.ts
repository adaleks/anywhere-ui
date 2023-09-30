import { newE2EPage } from '@stencil/core/testing';

describe('any-app-docapitable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-app-docapitable></any-app-docapitable>');

    const element = await page.find('any-app-docapitable');
    expect(element).toHaveClass('hydrated');
  });
});
