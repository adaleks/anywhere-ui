import { newSpecPage } from '@stencil/core/testing';
import { AppCode } from '../app-code';

describe('any-app-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCode],
      html: `<any-app-code></any-app-code>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-code>
    `);
  });
});
