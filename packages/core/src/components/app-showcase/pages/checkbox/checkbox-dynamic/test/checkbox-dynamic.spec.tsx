import { newSpecPage } from '@stencil/core/testing';
import { CheckboxDynamic } from '../checkbox-dynamic';

describe('any-checkbox-dynamic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxDynamic],
      html: `<any-checkbox-dynamic></any-checkbox-dynamic>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-dynamic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-dynamic>
    `);
  });
});
