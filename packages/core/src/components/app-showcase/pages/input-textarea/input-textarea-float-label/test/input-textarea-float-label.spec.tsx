import { newSpecPage } from '@stencil/core/testing';
import { InputTextareaFloatLabel } from '../input-textarea-float-label';

describe('input-textarea-float-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextareaFloatLabel],
      html: `<input-textarea-float-label></input-textarea-float-label>`,
    });
    expect(page.root).toEqualHtml(`
      <input-textarea-float-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-textarea-float-label>
    `);
  });
});
