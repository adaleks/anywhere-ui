import { newSpecPage } from '@stencil/core/testing';
import { DropdownFilter } from '../dropdown-filter';

describe('dropdown-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownFilter],
      html: `<dropdown-filter></dropdown-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-filter>
    `);
  });
});
