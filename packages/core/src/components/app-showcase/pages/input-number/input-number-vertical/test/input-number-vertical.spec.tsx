import { newSpecPage } from '@stencil/core/testing';
import { InputNumberVertical } from '../input-number-vertical';

describe('input-number-vertical', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputNumberVertical],
      html: `<input-number-vertical></input-number-vertical>`,
    });
    expect(page.root).toEqualHtml(`
      <input-number-vertical>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-number-vertical>
    `);
  });
});
