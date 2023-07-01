import { newE2EPage } from '@stencil/core/testing';

describe('any-multiselect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-multiselect></any-multiselect>');

    const element = await page.find('any-multiselect');
    expect(element).toHaveClass('hydrated');
  });
});
