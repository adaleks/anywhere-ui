import { newSpecPage } from '@stencil/core/testing';
import { InputNumberDisabled } from '../input-number-disabled';

describe('input-number-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberDisabled],
      html: `<input-number-disabled></input-number-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-disabled>
    `);
  });
});
