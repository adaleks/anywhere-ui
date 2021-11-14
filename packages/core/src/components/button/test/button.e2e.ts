import { newE2EPage } from '@stencil/core/testing';

describe('any-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-button></any-button>');

    const element = await page.find('any-button');
    expect(element).toHaveClass('hydrated');
  });
});
