import { newSpecPage } from '@stencil/core/testing';
import { AppDoc } from '../app-doc';

describe('any-app-doc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDoc],
      html: `<any-app-doc></any-app-doc>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-doc>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-doc>
    `);
  });
});
