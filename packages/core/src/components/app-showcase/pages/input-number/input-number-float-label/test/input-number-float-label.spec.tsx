import { newSpecPage } from '@stencil/core/testing';
import { InputNumberFloatLabel } from '../input-number-float-label';

describe('input-number-float-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberFloatLabel],
      html: `<input-number-float-label></input-number-float-label>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-float-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-float-label>
    `);
  });
});
