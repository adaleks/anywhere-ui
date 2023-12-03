import { newSpecPage } from '@stencil/core/testing';
import { InputNumberPrefixAndSuffix } from '../input-number-prefix-and-suffix';

describe('input-number-prefix-and-suffix', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberPrefixAndSuffix],
      html: `<input-number-prefix-and-suffix></input-number-prefix-and-suffix>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-prefix-and-suffix>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-prefix-and-suffix>
    `);
  });
});
