import { newE2EPage } from '@stencil/core/testing';

describe('listbox-multiple', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-multiple></listbox-multiple>');

    const element = await page.find('listbox-multiple');
    expect(element).toHaveClass('hydrated');
  });
});
