import { newE2EPage } from '@stencil/core/testing';

describe('listbox-virtual-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-virtual-scroll></listbox-virtual-scroll>');

    const element = await page.find('listbox-virtual-scroll');
    expect(element).toHaveClass('hydrated');
  });
});
