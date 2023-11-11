import { newSpecPage } from '@stencil/core/testing';
import { InputTextFloatLabel } from '../input-text-float-label';

describe('input-text-float-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextFloatLabel],
      html: `<input-text-float-label></input-text-float-label>`,
    });
    expect(page.root).toEqualHtml(`
      <input-text-float-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-text-float-label>
    `);
  });
});
