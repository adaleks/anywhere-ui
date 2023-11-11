import { newE2EPage } from '@stencil/core/testing';

describe('input-switch-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-switch-basic></input-switch-basic>');

    const element = await page.find('input-switch-basic');
    expect(element).toHaveClass('hydrated');
  });
});
