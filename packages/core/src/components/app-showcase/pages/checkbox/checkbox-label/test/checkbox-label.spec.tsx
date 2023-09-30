import { newSpecPage } from '@stencil/core/testing';
import { CheckboxLabel } from '../checkbox-label';

describe('any-checkbox-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxLabel],
      html: `<any-checkbox-label></any-checkbox-label>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-label>
    `);
  });
});
