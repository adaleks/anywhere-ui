import { newE2EPage } from '@stencil/core/testing';

describe('any-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-radio-group></any-radio-group>');

    const element = await page.find('any-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
