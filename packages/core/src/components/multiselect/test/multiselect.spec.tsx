import { newSpecPage } from '@stencil/core/testing';
import { AnyMultiselect } from '../multiselect';

describe('any-multiselect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnyMultiselect],
      html: `<any-multiselect></any-multiselect>`,
    });
    expect(page.root).toEqualHtml(`
      <any-multiselect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-multiselect>
    `);
  });
});
