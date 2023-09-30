import { newSpecPage } from '@stencil/core/testing';
import { CheckboxBasic } from '../checkbox-basic';

describe('any-checkbox-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxBasic],
      html: `<any-checkbox-basic></any-checkbox-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox-basic>
    `);
  });
});
