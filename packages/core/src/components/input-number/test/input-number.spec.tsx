import { newSpecPage } from '@stencil/core/testing';
import { InputNumber } from '../input-number';

describe('any-input-number', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumber],
      html: `<any-input-number></any-input-number>`,
    });
    expect(page.root).toEqualHtml(`
      <any-input-number>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-input-number>
    `);
  });
});
