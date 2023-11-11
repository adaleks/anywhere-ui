import { newSpecPage } from '@stencil/core/testing';
import { InputTextBasic } from '../input-text-basic';

describe('input-text-basic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextBasic],
      html: `<input-text-basic></input-text-basic>`,
    });
    expect(page.root).toEqualHtml(`
      <input-text-basic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-text-basic>
    `);
  });
});
