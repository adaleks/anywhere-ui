import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-disabled></dropdown-disabled>');

    const element = await page.find('dropdown-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
