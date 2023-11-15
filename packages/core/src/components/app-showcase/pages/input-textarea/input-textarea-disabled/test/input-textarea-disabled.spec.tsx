import { newSpecPage } from '@stencil/core/testing';
import { InputTextareaDisabled } from '../input-textarea-disabled';

describe('input-textarea-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextareaDisabled],
      html: `<input-textarea-disabled></input-textarea-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <input-textarea-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-textarea-disabled>
    `);
  });
});
