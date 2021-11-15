import { newSpecPage } from '@stencil/core/testing';
import { AnyBadge } from '../badge';

describe('any-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnyBadge],
      html: `<any-badge></any-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <any-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-badge>
    `);
  });
});
