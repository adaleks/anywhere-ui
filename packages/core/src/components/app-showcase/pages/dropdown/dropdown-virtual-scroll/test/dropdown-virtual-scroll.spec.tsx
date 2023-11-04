import { newSpecPage } from '@stencil/core/testing';
import { DropdownVirtualScroll } from '../dropdown-virtual-scroll';

describe('dropdown-virtual-scroll', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownVirtualScroll],
      html: `<dropdown-virtual-scroll></dropdown-virtual-scroll>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-virtual-scroll>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-virtual-scroll>
    `);
  });
});
