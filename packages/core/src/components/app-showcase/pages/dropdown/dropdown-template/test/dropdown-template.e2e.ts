import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-template', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-template></dropdown-template>');

    const element = await page.find('dropdown-template');
    expect(element).toHaveClass('hydrated');
  });
});
