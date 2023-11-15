import { newSpecPage } from '@stencil/core/testing';
import { InputTextareaBasic } from '../input-textarea-basic';

describe('input-textarea-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextareaBasic],
      html: `<input-textarea-basic></input-textarea-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <input-textarea-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-textarea-basic>
    `);
  });
});
