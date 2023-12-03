import { newSpecPage } from '@stencil/core/testing';
import { InputNumberCurrency } from '../input-number-currency';

describe('input-number-currency', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberCurrency],
      html: `<input-number-currency></input-number-currency>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-currency>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-currency>
    `);
  });
});
