import { newSpecPage } from '@stencil/core/testing';
import { ListboxBasic } from '../listbox-basic';

describe('listbox-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxBasic],
      html: `<listbox-basic></listbox-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-basic>
    `);
  });
});
