import { newSpecPage } from '@stencil/core/testing';
import { InputTextareaAutoResize } from '../input-textarea-auto-resize';

describe('input-textarea-auto-resize', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextareaAutoResize],
      html: `<input-textarea-auto-resize></input-textarea-auto-resize>`,
    });
    expect(page.root).toEqualHtml(`
      <input-textarea-auto-resize>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-textarea-auto-resize>
    `);
  });
});
