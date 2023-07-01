import { newE2EPage } from '@stencil/core/testing';

describe('any-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-overlay></any-overlay>');

    const element = await page.find('any-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
