import { newE2EPage } from '@stencil/core/testing';

describe('listbox-template', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<listbox-template></listbox-template>');

    const element = await page.find('listbox-template');
    expect(element).toHaveClass('hydrated');
  });
});
