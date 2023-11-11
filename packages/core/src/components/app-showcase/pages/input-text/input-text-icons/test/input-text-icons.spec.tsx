import { newSpecPage } from '@stencil/core/testing';
import { InputTextIcons } from '../input-text-icons';

describe('input-text-icons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputTextIcons],
      html: `<input-text-icons></input-text-icons>`,
    });
    expect(page.root).toEqualHtml(`
      <input-text-icons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-text-icons>
    `);
  });
});
