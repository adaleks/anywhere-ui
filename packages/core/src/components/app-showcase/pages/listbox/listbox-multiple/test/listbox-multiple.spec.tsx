import { newSpecPage } from '@stencil/core/testing';
import { ListboxMultiple } from '../listbox-multiple';

describe('listbox-multiple', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListboxMultiple],
      html: `<listbox-multiple></listbox-multiple>`,
    });
    expect(page.root).toEqualHtml(`
      <listbox-multiple>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </listbox-multiple>
    `);
  });
});
