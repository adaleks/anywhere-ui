import { newE2EPage } from '@stencil/core/testing';

describe('any-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-radio-button></any-radio-button>');

    const element = await page.find('any-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
