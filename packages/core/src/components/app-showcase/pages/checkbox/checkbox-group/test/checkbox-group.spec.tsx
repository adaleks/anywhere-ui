import { newSpecPage } from '@stencil/core/testing';
import { CheckboxGroup } from '../checkbox-group';

describe('any-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxGroup],
      html: `<any-checkbox-group></any-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-group>
    `);
  });
});
