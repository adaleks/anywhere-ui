import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-group></any-checkbox-group>');

    const element = await page.find('any-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
