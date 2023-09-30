import { newE2EPage } from '@stencil/core/testing';

describe('any-checkbox-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-checkbox-basic></any-checkbox-basic>');

    const element = await page.find('any-checkbox-basic');
    expect(element).toHaveClass('hydrated');
  });
});
