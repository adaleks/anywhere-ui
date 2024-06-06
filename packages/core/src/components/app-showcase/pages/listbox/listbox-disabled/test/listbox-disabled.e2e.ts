import { newE2EPage } from '@stencil/core/testing';

describe('listbox-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-disabled></listbox-disabled>');

    const element = await page.find('listbox-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
