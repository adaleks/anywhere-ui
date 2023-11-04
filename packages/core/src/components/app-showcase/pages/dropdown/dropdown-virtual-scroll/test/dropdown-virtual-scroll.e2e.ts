import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-virtual-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-virtual-scroll></dropdown-virtual-scroll>');

    const element = await page.find('dropdown-virtual-scroll');
    expect(element).toHaveClass('hydrated');
  });
});
