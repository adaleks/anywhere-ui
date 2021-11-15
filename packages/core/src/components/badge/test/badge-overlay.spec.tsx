import { newSpecPage } from '@stencil/core/testing';
import { BadgeOverlay } from '../badge-overlay';

describe('any-badge-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BadgeOverlay],
      html: `<any-badge-overlay></any-badge-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <any-badge-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-badge-overlay>
    `);
  });
});
