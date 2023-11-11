import { newSpecPage } from '@stencil/core/testing';
import { InputTextDisabled } from '../input-text-disabled';

describe('input-text-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextDisabled],
      html: `<input-text-disabled></input-text-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <input-text-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-text-disabled>
    `);
  });
});
