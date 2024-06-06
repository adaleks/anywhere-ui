import { newSpecPage } from '@stencil/core/testing';
import { ListboxFilter } from '../listbox-filter';

describe('listbox-filter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxFilter],
      html: `<listbox-filter></listbox-filter>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-filter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-filter>
    `);
  });
});
