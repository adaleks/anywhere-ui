import { newSpecPage } from '@stencil/core/testing';
import { RippleEffect } from '../ripple-effect';

describe('any-ripple-effect', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RippleEffect],
      html: `<any-ripple-effect></any-ripple-effect>`,
    });
    expect(page.root).toEqualHtml(`
      <any-ripple-effect>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-ripple-effect>
    `);
  });
});
