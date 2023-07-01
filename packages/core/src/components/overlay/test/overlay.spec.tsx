import { newSpecPage } from '@stencil/core/testing';
import { AnyOverlay } from '../overlay';

describe('any-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnyOverlay],
      html: `<any-overlay></any-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <any-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-overlay>
    `);
  });
});
