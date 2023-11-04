import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-basic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-basic></dropdown-basic>');

    const element = await page.find('dropdown-basic');
    expect(element).toHaveClass('hydrated');
  });
});
