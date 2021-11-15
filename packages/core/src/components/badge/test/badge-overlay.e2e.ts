import { newE2EPage } from '@stencil/core/testing';

describe('any-badge-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<any-badge-overlay></any-badge-overlay>');

    const element = await page.find('any-badge-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
