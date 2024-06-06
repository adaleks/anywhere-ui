import { newSpecPage } from '@stencil/core/testing';
import { ListboxDisabled } from '../listbox-disabled';

describe('listbox-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxDisabled],
      html: `<listbox-disabled></listbox-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-disabled>
    `);
  });
});
