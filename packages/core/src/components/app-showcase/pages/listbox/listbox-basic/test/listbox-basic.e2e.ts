import { newE2EPage } from '@stencil/core/testing';

describe('listbox-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-basic></listbox-basic>');

    const element = await page.find('listbox-basic');
    expect(element).toHaveClass('hydrated');
  });
});
