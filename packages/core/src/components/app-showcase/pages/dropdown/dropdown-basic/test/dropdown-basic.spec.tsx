import { newSpecPage } from '@stencil/core/testing';
import { DropdownBasic } from '../dropdown-basic';

describe('dropdown-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownBasic],
      html: `<dropdown-basic></dropdown-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-basic>
    `);
  });
});
