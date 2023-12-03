import { newSpecPage } from '@stencil/core/testing';
import { InputNumberButtons } from '../input-number-buttons';

describe('input-number-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberButtons],
      html: `<input-number-buttons></input-number-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-buttons>
    `);
  });
});
