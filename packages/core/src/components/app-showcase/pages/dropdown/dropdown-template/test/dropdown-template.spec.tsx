import { newSpecPage } from '@stencil/core/testing';
import { DropdownTemplate } from '../dropdown-template';

describe('dropdown-template', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownTemplate],
      html: `<dropdown-template></dropdown-template>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-template>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-template>
    `);
  });
});
