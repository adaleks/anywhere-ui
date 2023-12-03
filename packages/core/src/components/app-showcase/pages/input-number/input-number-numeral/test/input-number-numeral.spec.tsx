import { newSpecPage } from '@stencil/core/testing';
import { InputNumberNumeral } from '../input-number-numeral';

describe('input-number-numeral', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberNumeral],
      html: `<input-number-numeral></input-number-numeral>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-numeral>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-numeral>
    `);
  });
});
