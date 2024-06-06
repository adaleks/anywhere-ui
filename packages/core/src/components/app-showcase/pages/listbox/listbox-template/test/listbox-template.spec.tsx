import { newSpecPage } from '@stencil/core/testing';
import { ListboxTemplate } from '../listbox-template';

describe('listbox-template', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxTemplate],
      html: `<listbox-template></listbox-template>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-template>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-template>
    `);
  });
});
