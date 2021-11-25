import { newSpecPage } from '@stencil/core/testing';
import { InputSwitch } from '../input-switch';

describe('any-input-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputSwitch],
      html: `<any-input-switch></any-input-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <any-input-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-input-switch>
    `);
  });
});
