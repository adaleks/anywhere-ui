import { newSpecPage } from '@stencil/core/testing';
import { InputNumberLocale } from '../input-number-locale';

describe('input-number-locale', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberLocale],
      html: `<input-number-locale></input-number-locale>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-locale>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-locale>
    `);
  });
});
