import { newE2EPage } from '@stencil/core/testing';

describe('listbox-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-filter></listbox-filter>');

    const element = await page.find('listbox-filter');
    expect(element).toHaveClass('hydrated');
  });
});
