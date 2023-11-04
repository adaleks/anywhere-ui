import { newSpecPage } from '@stencil/core/testing';
import { DropdownDisabled } from '../dropdown-disabled';

describe('dropdown-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownDisabled],
      html: `<dropdown-disabled></dropdown-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-disabled>
    `);
  });
});
