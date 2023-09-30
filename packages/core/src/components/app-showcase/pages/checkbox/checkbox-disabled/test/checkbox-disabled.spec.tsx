import { newSpecPage } from '@stencil/core/testing';
import { CheckboxDisabled } from '../checkbox-disabled';

describe('any-checkbox-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxDisabled],
      html: `<any-checkbox-disabled></any-checkbox-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-disabled>
    `);
  });
});
