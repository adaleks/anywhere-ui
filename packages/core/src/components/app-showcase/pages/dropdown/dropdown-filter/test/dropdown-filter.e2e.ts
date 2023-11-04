import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-filter></dropdown-filter>');

    const element = await page.find('dropdown-filter');
    expect(element).toHaveClass('hydrated');
  });
});
