import { newSpecPage } from '@stencil/core/testing';
import { ListboxVirtualScroll } from '../listbox-virtual-scroll';

describe('listbox-virtual-scroll', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxVirtualScroll],
      html: `<listbox-virtual-scroll></listbox-virtual-scroll>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-virtual-scroll>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-virtual-scroll>
    `);
  });
});
